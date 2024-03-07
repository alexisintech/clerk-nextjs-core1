import { clerkClient } from "@clerk/nextjs";

// testclerk123 userId: user_2cSSCzV7948rhPJMsY601tXsEU4

export async function TEST() {
  const userId = 'user_2cSSCzV7948rhPJMsY601tXsEU4';

const params = { firstName: 'John', lastName: 'Wick' }; 

const response = await clerkClient.users.updateUser(userId, params);

console.log(response);

  return Response.json({ message: "success" })
}
