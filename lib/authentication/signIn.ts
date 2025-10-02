import { auth } from "@/lib/auth";
export const signIn = async (email: string, password: string) => {
  return await auth.api.signInEmail({
    body: { email, password },
    asResponse: true,
  });
};
