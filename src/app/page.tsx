import { Fragment } from "react";
import NominationWidget from "./NominationWidget";
import VoteWidget from "./VoteWidget";

async function fetchCategories(): Promise<GetCategoryGroupsResponse> {
  const headers = new Headers();
  if (process.env.API_TOKEN == null) {
    throw new Error("API_TOKEN is not set");
  }

  if (process.env.API_URL == null) {
    throw new Error("API_URL is not set");
  }

  const res = await fetch(
    process.env.API_URL + "/api/category-groups?populate=*" ?? "",
    {
      headers: { authorization: `bearer ${process.env.API_TOKEN}` },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch API: ${res.statusText}`);
  }

  return res.json();
}

export default async function Page() {
  const categoryGroupResponse = await fetchCategories();

  return (
    <div className="flex flex-row items-center place-content-evenly flex-wrap">
      <NominationWidget categoryGroups={categoryGroupResponse.data} />
      <VoteWidget categoryGroups={categoryGroupResponse.data} />
    </div>
  );
}
