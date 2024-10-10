import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
  title: "Learnet",
  description: "Ucz się angielskiego poprzez spersonalizowane ćwiczenia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Learnet</title>
        <meta
          name="description"
          content="Popraw swoje umiejętności językowe dzięki naszej innowacyjnej platformie do nauki. Ćwicz gdziekolwiek i kiedykolwiek, całkowicie za darmo."
        />

        {/* <!-- Facebook Meta Tags -- > */}
        <meta property="og:url" content="https://learnet.pl" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Learnet" />
        <meta
          property="og:description"
          content="Popraw swoje umiejętności językowe dzięki naszej innowacyjnej platformie do nauki. Ćwicz gdziekolwiek i kiedykolwiek, całkowicie za darmo."
        />
        <meta property="og:image" content="https://learnet.pl/og-image.png" />

        {/* <!-- Twitter Meta Tags -- > */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="learnet.pl" />
        <meta property="twitter:url" content="https://learnet.pl" />
        <meta name="twitter:title" content="Learnet" />
        <meta
          name="twitter:description"
          content="Popraw swoje umiejętności językowe dzięki naszej innowacyjnej platformie do nauki. Ćwicz gdziekolwiek i kiedykolwiek, całkowicie za darmo."
        />
        <meta name="twitter:image" content="https://learnet.pl/og-image.png" />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-gradient-to-b from-blue-100 to-white">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
