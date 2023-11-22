import CategoryLineItem from "./CategoryLineItem";

type CategoryGroupDisplayProps = {
  categoryGroup: CategoryGroup;
};

export default function CategoryGroupDisplay({
  categoryGroup,
}: CategoryGroupDisplayProps) {
  return (
    <div className="bg-biga-gray w-full flex flex-col rounded-lg p-3 my-2">
      <h3 className="mb-2" key={categoryGroup.id}>
        {categoryGroup.attributes.title}
      </h3>

      {categoryGroup.attributes.categories.data.map((category) => (
        <CategoryLineItem
          key={category.id}
          category={category}
          color={categoryGroup.attributes.color}
        />
      ))}
    </div>
  );
}
