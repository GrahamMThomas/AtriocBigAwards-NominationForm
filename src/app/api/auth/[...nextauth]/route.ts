import NextAuth from "next-auth"
import TwitchProvider from "next-auth/providers/twitch"

if (process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID == null) {
  throw new Error("NEXT_PUBLIC_TWITCH_CLIENT_ID is not set");
}
if (process.env.NEXT_PUBLIC_TWITCH_CLIENT_SECRET == null) {
  throw new Error("NEXT_PUBLIC_TWITCH_CLIENT_SECRET is not set");
}

const providers = [
    TwitchProvider({clientId: process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID, 
                    clientSecret: process.env.NEXT_PUBLIC_TWITCH_CLIENT_SECRET})
  ]

const handler = NextAuth({
  providers: providers,
})

export { handler as GET, handler as POST }