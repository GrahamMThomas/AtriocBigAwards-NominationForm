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
      <h1 className="text-3xl text-white">Nominations</h1>
      {categoryGroups.map((categoryGroup) => (
        <CategoryGroupDisplay
          key={categoryGroup.id}
          categoryGroup={categoryGroup}
        />
      ))}
    </WidgetBase>
  );
}
