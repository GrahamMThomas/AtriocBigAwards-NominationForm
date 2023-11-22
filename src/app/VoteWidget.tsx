"use client";

import { Input } from "postcss";
import WidgetBase from "./components/WidgetBase";
import { Fragment, useState } from "react";
import Button from "./components/Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Blocks } from "react-loader-spinner";

type VoteWidgetProps = {
  category: Category;
  color: string;
};

export default function VoteWidget({ category, color }: VoteWidgetProps) {
  const [nominee, setNominee] = useState("");
  const [chatterCase, setChatterCase] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const session = useSession();
  const router = useRouter();

  if (session.status === "unauthenticated") {
    router.push("/login");
  }

  async function handleSubmit(
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
        localStorage.getItem("votedOn") + "," + category.id
      );
    } else {
      setError("Something went wrong. Please try again later.");
    }
  }

  return (
    <WidgetBase color={color}>
      <h1 className="text-3xl text-center">{category.attributes.title}</h1>
      <p className="text-center text-slate-300 text-sm">
        {category.attributes.description}
      </p>

      {!submitted && (
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
        visible={submitted && error.length === 0}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />

      <span>{error}</span>

      <Button
        text="Submit"
        onClick={() =>
          handleSubmit(nominee, chatterCase, session.data!.user!.name!)
        }
        disabled={submitted && error.length === 0}
      />
    </WidgetBase>
  );
}
