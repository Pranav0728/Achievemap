"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Icons } from "../components/ui/icons"
import { Button } from "../components/ui/button"
import { signIn } from "next-auth/react"
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthFormSignin({ className, ...props }: UserAuthFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const googleClicked =()=>{
    signIn('google')
  }
  const githubClicked =()=>{
    signIn('github')
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Button variant="default" type="button" disabled={isLoading} onClick={googleClicked}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
      <Button variant="default" type="button" disabled={isLoading} onClick={githubClicked}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        Github
      </Button>
    </div>
  )
}