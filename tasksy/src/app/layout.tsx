import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Providers from '@/components/providers'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Tasksy - Local Skill Sharing Platform",
  description: "Connect with talented people in your community for everyday tasks and services. Earn money by helping others or get help when you need it.",
  keywords: "tasks, services, skill sharing, local community, freelance, gigs",
  authors: [{ name: "Tasksy Team" }],
  openGraph: {
    title: "Tasksy - Local Skill Sharing Platform",
    description: "Connect with talented people in your community for everyday tasks and services.",
    type: "website",
    locale: "en_US",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Providers session={session}>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
