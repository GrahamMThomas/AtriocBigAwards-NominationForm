import CategoryGroupDisplay from "./CategoryGroupDisplay";
import WidgetBase from "./components/WidgetBase";

type NominationWidgetProps = {
  categoryGroups: CategoryGroup[];
};

export default function NominationWidget({
  categoryGroups,
}: NominationWidgetProps) {
  return (
    <WidgetBase>
      <h1 className="text-3xl">Nominations</h1>
      <div className="max-h-[65vh] overflow-scroll mt-2">
        {categoryGroups.map((categoryGroup) => (
          <CategoryGroupDisplay
            key={categoryGroup.id}
            categoryGroup={categoryGroup}
          />
        ))}
      </div>
    </WidgetBase>
  );
}
