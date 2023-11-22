"use client";

type CategoryLineItemProps = {
  category: Category;
  color: string;
  hasVoted: boolean;
};

export default function CategoryLineItem({
  category,
  color,
  hasVoted,
}: CategoryLineItemProps) {
  console.log(category);
  return (
    <div
      className="bg-biga-gray hover:bg-[#434040] w-full flex flex-row rounded-lg p-1 justify-start items-center"
      onClick={() => console.log("clicked!")}
    >
      <div
        className="h-full p-4 mr-2 rounded-full"
        style={{ backgroundColor: `#${!hasVoted ? color : "999"}` }}
      ></div>
      <span
        className="text-white font-roboto text-xs"
        style={{
          textDecoration: `${!hasVoted ? "none" : "line-through"}`,
          color: `${!hasVoted ? "white" : "#999"}`,
        }}
      >
        {category.attributes.title}
      </span>
    </div>
  );
}
