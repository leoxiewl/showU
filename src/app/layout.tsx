import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import Sidebar from "@/components/layout/Sidebar";
import MobileHeader from "@/components/layout/MobileHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShowU - 展示你的产品与成果",
  description: "个人作品集平台 - 在 AI 时代，产品和成果比代码更重要",
  keywords: ["作品集", "个人网站", "产品展示", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {/* 桌面端：左侧边栏 */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>

          {/* 移动端：顶部导航 */}
          <MobileHeader />

          {/* 主内容区域 */}
          <main className="lg:ml-64 min-h-screen pt-14 lg:pt-0">
            <div className="container mx-auto max-w-6xl p-6 lg:p-8">
              {children}
            </div>
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
