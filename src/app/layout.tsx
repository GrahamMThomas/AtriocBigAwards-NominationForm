import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { SessionProvider } from "./components/SessionProvider";
import { ScreenProvider } from "./(global)/ScreenContext";
import Layout from "./(global)/CustomLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BigAwards Nominations",
  description: "BigAwards Nominations",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en" className="w-screen h-screen overflow-hidden">
      <body className={inter.className}>
        <ScreenProvider>
          <Layout>
            <SessionProvider>{children}</SessionProvider>
          </Layout>
        </ScreenProvider>
      </body>
    </html>
  );
}
