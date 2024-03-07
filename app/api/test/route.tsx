import { clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";

// testclerk123 userId: user_2cSSCzV7948rhPJMsY601tXsEU4

export async function GET() {
  const userId = "user_2cSSCzV7948rhPJMsY601tXsEU4";

  const params = { firstName: "John", lastName: "Wick" };

  const response = await clerkClient.users.updateUser(userId, params);

  console.log(response);

  return NextResponse.json({ message: "success" });
}
