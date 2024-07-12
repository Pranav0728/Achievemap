import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "../components/AuthProvider";
import Container from "@/components/container";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AchieveMap",
  description:
    "Your Blueprint for Success in Every Field. Achieve your dreams with a clear and structured plan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${inter.className} flex flex-col`}>
      <Suspense fallback={<p>Loading feed...</p>}>
          <AuthProvider>
            <Container>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </Container>
          </AuthProvider>
      </Suspense>
        </body>
    </html>
  );
}
