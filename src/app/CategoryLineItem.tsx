"use client";

import { useEffect, useState } from "react";
import onCategoryPick from "./OnCategoryPickEvent";

type CategoryLineItemProps = {
  category: Category;
  color: string;
};

export default function CategoryLineItem({
  category,
  color,
}: CategoryLineItemProps) {
  const [isAlreadyVotedOn, setVotedOn] = useState(false);

  useEffect(() => {
    let categoryIdsVotedOn = localStorage.getItem("votedOn")?.split(",");
    setVotedOn(categoryIdsVotedOn?.includes(category.id.toString()) ?? false);
    return () => {};
  }, [category.id]);

  function handleClick() {
    onCategoryPick.emit("category-pick", category.id);
  }

  return (
    <div
      className="bg-biga-gray hover:bg-[#756d7e] w-full flex flex-row rounded-lg p-1 justify-start items-center"
      onClick={() => (!isAlreadyVotedOn ? handleClick() : null)}
    >
      <div
        className="h-full p-4 mr-2 rounded-full"
        style={{ backgroundColor: `#${!isAlreadyVotedOn ? color : "999"}` }}
      ></div>
      <span
        className="font-roboto text-xs"
        style={{
          textDecoration: `${!isAlreadyVotedOn ? "none" : "line-through"}`,
          color: `${!isAlreadyVotedOn ? "white" : "#999"}`,
        }}
      >
        {category.attributes.title}
      </span>
    </div>
  );
}
