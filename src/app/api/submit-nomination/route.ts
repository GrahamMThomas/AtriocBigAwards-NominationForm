import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: Request) {
  if (process.env.DISCORD_WEBHOOK == null) {
    throw new Error("DISCORD_WEBHOOK is not set");
  }

  try {
    const { sensitiveData } = await req.json();

    fetch(process.env.DISCORD_WEBHOOK, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sensitiveData }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.error();
  }
}
