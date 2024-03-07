import { auth, clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return NextResponse.json({ message: "User not found" });
  }

  const provider = "oauth_notion";

  const clerkResponse = await clerkClient.users.getUserOauthAccessToken(
    userId,
    provider
  );
  const accessToken = clerkResponse[0].token;
  console.log(accessToken);

  // Fetch the user data from the Notion API
  const notionUrl = "https://api.notion.com/v1/users";
  const notionResponse = await fetch(notionUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Notion-Version": "2022-06-28",
    },
  });

  // Handle the response from the Notion API
  const notionData = await notionResponse.json();

  return NextResponse.json({ message: notionData });
}
