"use client";

async function fetchCategories(): Promise<GetCategoriesResponse> {
  const headers = new Headers();
  if (process.env.API_TOKEN == null) {
    throw new Error("API_TOKEN is not set");
  }

  if (process.env.API_URL == null) {
    throw new Error("API_URL is not set");
  }

  const res = await fetch(process.env.API_URL + "/api/categories" ?? "", {
    headers: { authorization: `bearer ${process.env.API_TOKEN}` },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch API: ${res.statusText}`);
  }

  return res.json();
}

export default function GetCategories() {}
