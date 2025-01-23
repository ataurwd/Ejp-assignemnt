import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Redirect unauthenticated users to the login page
  if (!user) {
    redirect("/api/auth/login"); // Adjust the route based on your login endpoint
  }

  // Render the profile page for authenticated users
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to your profile, {user.first_name}!</h1>
      <p>Your email: {user.email}</p>
    </div>
  );
}
