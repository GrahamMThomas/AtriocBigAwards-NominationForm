"use client";

import { Input } from "postcss";
import WidgetBase from "./components/WidgetBase";
import { useState } from "react";
import Button from "./components/Button";

type VoteWidgetProps = {
  category: Category;
  color: string;
};

export default function VoteWidget({ category, color }: VoteWidgetProps) {
  const [nominee, setNominee] = useState("");
  const [chatterCase, setChatterCase] = useState("");

  return (
    <WidgetBase color={color}>
      <h1 className="text-3xl text-center">{category.attributes.title}</h1>
      <p className="text-center text-slate-300 text-sm">
        {category.attributes.description}
      </p>

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

      <Button text="Submit" onClick={() => console.log("Voted!")} />
    </WidgetBase>
  );
}
