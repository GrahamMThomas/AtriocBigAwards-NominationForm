"use client";

import Image from "next/image";
import Button from "../components/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Fragment } from "react";
import { useRouter } from "next/navigation";
import { Blocks } from "react-loader-spinner";
import WidgetBase from "./WidgetBase";

export default function LoginWidget() {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return (
      <div className="w-full h-[75vh] flex items-center justify-center">
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      </div>
    );
  }

  return (
    <WidgetBase>
      <div className="px-8 py-4 w-full h-full">
        <Image
          src={session?.data?.user?.image ?? "/static/images/chatter.png"}
          alt="default chatter profile pic"
          className="rounded-full static aspect-square"
          width={1000} // max: bounded by div
          height={1000}
        />
      </div>

      <h1 className="text-xl mb-8">{session?.data?.user?.name ?? "chatter"}</h1>

      {session.status === "authenticated" ? (
        <Fragment>
          <Button text="Logout" onClick={() => signOut()} />
          <Button text="Home" onClick={() => router.push("/")} />
        </Fragment>
      ) : (
        <Button text="Login" onClick={() => signIn()} />
      )}
    </WidgetBase>
  );
}
