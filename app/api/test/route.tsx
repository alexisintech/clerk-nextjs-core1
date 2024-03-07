import { clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// testclerk123 userId: user_2cSSCzV7948rhPJMsY601tXsEU4
// alexis@clerk.dev userId: user_2V7JJKmoA9HqzHhfMqK5cpgLl56

export async function GET() {
  const userId = "user_2V7JJKmoA9HqzHhfMqK5cpgLl56";

  const provider = "oauth_google";

  const response = await clerkClient.users.getUserOauthAccessToken(
    userId,
    provider
  );

  console.log(response);

  return NextResponse.json({ message: response });
}
