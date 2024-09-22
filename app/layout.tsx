import type { Metadata } from "next";
import {Plus_Jakarta_Sans} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight : ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Care-pulse",
  description: "A simple health monitoring app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable) }>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
