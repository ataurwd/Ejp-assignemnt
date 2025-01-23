"use client"
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React from 'react';
import { useRouter } from 'next/router';

const ProfileData = async () => {
  const router = useRouter();

  // Get the Kinde server session
  const { getUser, data: session } = getKindeServerSession();

  // Check if user is logged in
  if (!session) {
    // Redirect to login page if not logged in
    router.push('/login');
    return null; // Prevent rendering the component
  }

  const user = await getUser();

  return (
    <div className="grid place-items-center mt-5 border-2 w-[30%] mx-auto p-5 rounded-md shadow-sm">
      <img className="rounded-full" src={user.picture} alt="" />
      <h1>
        <span className="font-bold">Email:</span> {user.email}
      </h1>
      {user.given_name} {user.family_name}
    </div>
  );
};

export default ProfileData;