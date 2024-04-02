"use client";

import GoogleLogo from "@/components/icons/google";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export function GoogleLoginButton() {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      variant="ghost"
    >
      <div className="flex items-center rounded-full px-6 py-2 ring-1 ring-zinc-300">
        <div className="size-5">
          <GoogleLogo />
        </div>
      </div>
    </Button>
  );
}
