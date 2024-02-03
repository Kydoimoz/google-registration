import connectDB from "@/libs/connectDB";
import User from "../../../models/dbschema";
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from "next-auth/providers/facebook";

import TwitterProvider from "next-auth/providers/twitter";
//import AppleProvider from "next-auth/providers/apple";
import InstagramProvider from "next-auth/providers/instagram";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";


export let userAccount;
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        /* AppleProvider({
             clientId: process.env.APPLE_CLIENT_ID,
             clientSecret: process.env.APPLE_SECRET
         }),*/
        /*InstagramProvider({
            clientId: process.env.INSTAGRAM_CLIENT_ID,
            clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
        })*/
        TwitterProvider({
            clientId: process.env.TWITTER_CLIENT_ID,
            clientSecret: process.env.TWITTER_CLIENT_SECRET,
            version: "2.0",
        })
    ],
    cookies: {
        options: {
            httpOnly: true,
            sameSite: "none",
            path: "/",
            secure: true
        }
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === "twitter") {
                const { name, email } = user;
                try {
                    await connectDB();
                    const userExists = await User.findOne({ email });

                    if (!userExists) {
                        const res = await fetch("/api/user", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                name,
                                email,
                            }),
                        });

                        if (res.ok) {
                            return user;
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            if (account.provider === "google") {
                const { name, email } = user;
                try {
                    await connectDB();
                    const userExists = await User.findOne({ email });

                    if (!userExists) {
                        const res = await fetch("/api/user", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                name,
                                email,
                            }),
                        });

                        if (res.ok) {
                            return user;
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            }

            return user;
        },
        session: {
            strategy: "jwt",
        },
        debug: true,
    },
};

const handler = NextAuth(authOptions);
export default handler;
/*
export const config = {
    api: {
        bodyParser: false,
    },
};
//export const GET = (req, res) => handler.handleRequest(req, res, { ...authOptions });
//export const POST = (req, res) => handler.handleRequest(req, res, { ...authOptions });*/