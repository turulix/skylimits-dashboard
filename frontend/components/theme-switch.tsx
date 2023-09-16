import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { NoSSR } from "next/dist/shared/lib/lazy-dynamic/dynamic-no-ssr"

export function ThemeSwitch({ className }: { className?: string }) {
    const theme = useTheme()
    const [checked, setChecked] = useState(theme.theme === "dark")

    return (
        <NoSSR>
            <button
                data-state={checked ? "checked" : "unchecked"}
                aria-checked={checked}
                className={cn(
                    "w-11 h-6 bg-input border-2 transition-colors relative rounded-full data-[state=unchecked]:bg-input data-[state=checked]:bg-primary " +
                        "border-transparent",
                    className
                )}
                role={"switch"}
                onClick={() => {
                    setChecked(!checked)
                    theme.setTheme(checked ? "light" : "dark")
                }}
            >
                <span
                    data-state={checked ? "checked" : "unchecked"}
                    className={
                        "h-5 w-5 top-0 z-[1] ring-0 bg-background absolute shadow-lg block rounded-full pointer-events-none " +
                        "transition-transform data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-5"
                    }
                />
                <span
                    data-state={checked ? "checked" : "unchecked"}
                    className={
                        "flex items-center h-5 top-0 left-0 w-5 absolute opacity-100 data-[state=unchecked]:opacity-0 text-background"
                    }
                >
                    <MoonIcon />
                </span>
                <span
                    data-state={checked ? "checked" : "unchecked"}
                    className={
                        "flex items-center h-5 top-0 right-0 w-5 absolute opacity-100 data-[state=checked]:opacity-0 text-primary"
                    }
                >
                    <SunIcon />
                </span>
            </button>
        </NoSSR>
    )
}
