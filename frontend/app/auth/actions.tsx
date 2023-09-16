"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function login(username: string, password: string) {
    cookies().set("access_token", "1234", {})
    redirect("/")
}

export async function logout() {
    cookies().delete("access_token")
    redirect("/auth/login")
}
