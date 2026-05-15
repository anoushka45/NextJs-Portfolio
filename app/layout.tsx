import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Anoushka Vyas - Portfolio",
  description: "AI engineer at Mphasis building production multi-agent systems — LangGraph orchestration, hybrid RAG pipelines, and intelligent routing at scale.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Anoushka Vyas — AI Engineer",
    description: "AI engineer at Mphasis building production multi-agent systems — LangGraph orchestration, hybrid RAG pipelines, and intelligent routing at scale.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anoushka Vyas — AI Engineer",
    description: "AI engineer at Mphasis building production multi-agent systems — LangGraph orchestration, hybrid RAG pipelines, and intelligent routing at scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
     
      </body>
    </html>
  );
}
