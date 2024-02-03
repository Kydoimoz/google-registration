import React, { useState } from "react";
import HomePage from "@/components/HomePage";
import { useSession } from "next-auth/react";
export default function Home() {
    const { data: session } = useSession();
    if (session && session?.user) {
        return (
            <div>
                Logged in as {session?.user?.email}
            </div>
        );
    }
    return (
        <div>

            <HomePage />
        </div>
    );
}