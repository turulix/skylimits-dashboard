"use client"
import { Button } from "@/components/ui/button"
import { logout } from "@/app/auth/actions"
import { useToast } from "@/components/ui/use-toast"

export default function Page() {
    const { toast } = useToast()

    return (
        <div>
            <Button
                variant={"destructive"}
                onClick={async () => {
                    await logout()
                    toast({
                        title: "Logged out",
                        description: "You have been logged out.",
                        variant: "destructive",
                    })
                }}
            >
                Logout
            </Button>
        </div>
    )
}
