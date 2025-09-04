import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import SigninForm from "./_components/signin-form";
import { ACCESS_TOKEN } from "@/constants/token";

export default async function SigninPage() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(ACCESS_TOKEN)?.value;

  if (accessToken) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SigninForm />
      </div>
    </div>
  );
}
