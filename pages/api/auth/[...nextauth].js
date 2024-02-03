import { connectDB } from "../../../libs/connectDB";
import User from "../../../models/dbschema";
import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
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
        InstagramProvider({
            clientId: process.env.INSTAGRAM_CLIENT_ID,
            clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
        })
    ],
    cookies: {
        pkceCodeVerifier: {
            name: "next-auth.pkce.code_verifier",
            options: {
                httpOnly: true,
                sameSite: "none",
                path: "/",
                secure: true
            }
        }
    },
    callbacks: {
        async signIn({ user, account }) {
            if (account.provider === "instagram") {
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
        session: async ({ session }) => {
            session.customValue = new Date().toISOString();
            return Promise.resolve(session);
        }
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