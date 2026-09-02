import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "찍먹 IT | 생성형 AI 강의 플랫폼",
  description: "배우고, 만들고, 성장하는 웹 기반 IT 강의 플랫폼",
  openGraph: {
    title: "찍먹 IT | 생성형 AI 강의 플랫폼",
    description: "배우고, 만들고, 성장하는 웹 기반 IT 강의 플랫폼",
    type: "website",
    locale: "ko_KR",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "찍먹 IT - 배우고, 만들고, 성장하세요" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "찍먹 IT | 생성형 AI 강의 플랫폼",
    description: "배우고, 만들고, 성장하는 웹 기반 IT 강의 플랫폼",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
