"use client";

import GithubLogo from "@/components/icons/github";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export function GithubLoginButton() {
  return (
    <Button
      onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
      variant="ghost"
    >
      <div className="flex items-center rounded-full px-6 py-2 ring-1 ring-zinc-300">
        <div className="size-5">
          <GithubLogo />
        </div>
      </div>
    </Button>
  );
}
