"use server";
import { auth } from "@/lib/auth";

export const signUp = async (
  email: string,
  password: string,
  username: string
) => {
  return await auth.api.signUpEmail({
    body: { name: username, email, password },
  });
};
