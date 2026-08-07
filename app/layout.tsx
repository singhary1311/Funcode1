import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fun Wealth",
  description: "Personal Finance Platform",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={`${inter.className}`}
      >
        <body className="min-h-full flex flex-col">
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Toaster richColors/>
        </body>
      </html>
    </ClerkProvider>
  );
}
