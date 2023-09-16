"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { login } from "@/app/auth/actions"
import { Suspense, useState } from "react"
import { Loader2 } from "lucide-react"
import { ThemeSwitch } from "@/components/theme-switch"
import { Skeleton } from "@/components/ui/skeleton"

const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Password is required!"),
})

export default function Page() {
    const [isLoading, setLoading] = useState<boolean>(false)

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof loginFormSchema>) {
        setLoading(true)
        console.log(values)
        await login(values.email, values.password)
        setLoading(false)
    }

    return (
        <div className={"flex w-full h-full justify-center items-center"}>
            <Suspense fallback={<Skeleton className={"absolute top-2 right-2 w-11 h-6 rounded-full"} />}>
                <ThemeSwitch className={"absolute top-2 right-2"} />
            </Suspense>
            <Card className={"w-[350px] h-max"}>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Stalk your guild with style!</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>E-Mail</FormLabel>
                                        <FormControl>
                                            <Input placeholder="admin@gmail.com" type={"email"} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                name={"email"}
                            />
                            <FormField
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type={"password"} placeholder="*******" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                name={"password"}
                            />
                            <div className={"mt-4"}>
                                <Button
                                    disabled={isLoading}
                                    className={"w-full relative"}
                                    variant={"default"}
                                    type={"submit"}
                                >
                                    {isLoading && <Loader2 className={"absolute left-4 h-6 w-6 animate-spin"} />}
                                    <span className={"text-input"}>Login</span>
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
