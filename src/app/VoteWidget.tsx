"use client";

import WidgetBase from "./components/WidgetBase";
import { Fragment, useEffect, useState } from "react";
import Button from "./components/Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Blocks } from "react-loader-spinner";
import categoryEventEmitter from "./(global)/CategoryEventEmitter";

type VoteWidgetProps = {
  categoryGroups: CategoryGroup[];
};

export default function VoteWidget({ categoryGroups }: VoteWidgetProps) {
  const [nominee, setNominee] = useState("");
  const [chatterCase, setChatterCase] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitSuccessful, setSubmitSuccessful] = useState(false);
  const [categoryId, setCategoryId] = useState("0");
  const [error, setError] = useState("");
  const session = useSession();
  const router = useRouter();

  if (session.status === "unauthenticated") {
    router.push("/login");
  }

  useEffect(() => {
    var callback = (newState: string) => {
      if (newState === "0") {
        return;
      }
      reset();
      setCategoryId(newState);
    };

    const subscription = categoryEventEmitter.addListener(
      "onCategoryPick",
      callback
    );

    return () => {
      subscription.removeListener("onCategoryPick", callback);
    };
  }, []);

  function reset() {
    setSubmitted(false);
    setSubmitSuccessful(false);
    setNominee("");
    setChatterCase("");
    setCategoryId("0");
    setError("");
  }

  function unchooseCategory() {
    categoryEventEmitter.emit("onCategoryPick", "0");
  }

  async function handleSubmit(
    categoryId: string,
    nominee: string,
    chatterCase: string,
    twitchUsername: string
  ) {
    setSubmitted(true);
    const response = await fetch("/api/submit-nomination", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nominee, chatterCase, twitchUsername }),
    });

    if (response.ok) {
      localStorage.setItem(
        "votedOn",
        localStorage.getItem("votedOn") + "," + categoryId
      );
      setSubmitSuccessful(true);
      categoryEventEmitter.emit("onCategorySubmit", true);
    } else {
      setError("Something went wrong. Please try again later.");
      categoryEventEmitter.emit("onCategorySubmit", false);
    }
  }

  // TODO: This is kinda gross. Figure out how to do this better.
  let color =
    categoryGroups.find((cg) =>
      cg.attributes?.categories.data.find((c) => c.id === categoryId)
    )?.attributes.color ?? null;
  let category = categoryGroups
    .flatMap((cg) => cg.attributes?.categories.data.flatMap((c) => c))
    .find((c) => c.id === categoryId);

  return (
    <WidgetBase color={color}>
      <h1 className="text-3xl text-center">
        {category?.attributes.title ?? "Select a Category"}
      </h1>
      <p className="text-center text-slate-300 text-sm">
        {category?.attributes.description ?? ""}
      </p>

      {(!submitted || !submitSuccessful) && (
        <Fragment>
          <input
            type="text"
            placeholder="Nominee"
            value={nominee}
            onChange={(e) => setNominee(e.target.value)}
            className="bg-biga-gray rounded-xl w-full p-4 m-4 mt-8"
          />

          <textarea
            placeholder="Your case..."
            value={chatterCase}
            onChange={(e) => setChatterCase(e.target.value)}
            className="bg-biga-gray rounded-xl w-full p-4 mb-8 text-sm"
            style={{ resize: "none" }}
            rows={7}
          />
        </Fragment>
      )}

      <Blocks
        visible={submitted && !submitSuccessful && error.length === 0}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />

      <span>{error}</span>

      {category && !submitSuccessful && (
        <div className="flex flex-row w-full">
          <Button
            text="Back"
            className="bg-red-400 text-sm flex-grow-0"
            onClick={() => categoryEventEmitter.emit("onCategoryPick", "0")}
            disabled={submitted && error.length === 0}
          />
          <Button
            text="Submit"
            className="flex-grow "
            onClick={() =>
              handleSubmit(
                category!.id,
                nominee,
                chatterCase,
                session.data!.user!.name!
              )
            }
            disabled={submitted && error.length === 0}
          />
        </div>
      )}

      {submitSuccessful && (
        <Fragment>
          <span className="text-cente text-lg mt-4">Submitted!</span>
          <Button
            text="Uno Más"
            className="w-full"
            onClick={() => {
              reset();
              unchooseCategory();
            }}
          />
        </Fragment>
      )}
    </WidgetBase>
  );
}
