"use client";

import { useEffect, useState } from "react";
import CategoryGroupDisplay from "./CategoryGroupDisplay";
import { useScreen } from "./(global)/ScreenContext";
import WidgetBase from "./components/WidgetBase";
import categoryEventEmitter from "./(global)/CategoryEventEmitter";

type NominationWidgetProps = {
  categoryGroups: CategoryGroup[];
};

export default function NominationWidget({
  categoryGroups,
}: NominationWidgetProps) {
  const { screenWidth } = useScreen();
  const [isCategorySelected, setSelectedCategory] = useState(false);

  let needsCutover = screenWidth < 900;
  useEffect(() => {
    var callback = (newState: string) => {
      if (newState !== "0") {
        setSelectedCategory(true);
      } else {
        setSelectedCategory(false);
      }
    };

    const subscription = categoryEventEmitter.addListener(
      "onCategoryPick",
      callback
    );

    return () => {
      subscription.removeListener("onCategoryPick", callback);
    };
  }, []);

  const widget = (
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

  if (!needsCutover) {
    return widget;
  } else if (!isCategorySelected) {
    return widget;
  } else {
    return null;
  }
}
