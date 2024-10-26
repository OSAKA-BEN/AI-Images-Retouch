import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBM_Plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex"
});

export const metadata: Metadata = {
  title: "AI Images",
  description: "An AI powered images retouching tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: "#18181b" }
    }}
      signInFallbackRedirectUrl="/profile"
      signUpFallbackRedirectUrl="/"
    >
      <html lang="en">
        <body
          className={cn("font-IBM_Plex antialiased", IBM_Plex.variable)}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

