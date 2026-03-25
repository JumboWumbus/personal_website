import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.scss";
// import { NavMenu } from "@/components/Navbar/NavMenu";
import NavBar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: {
    default: "Ben's Den",
    template: "%s | Ben's Den",
  },
  description: "The personal site of Ben Hammond — developer, designer, idiot from Glasgow, Scotland.",
  metadataBase: new URL("https://bensden.xyz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="webmention" href="https://webmention.io/bensden.xyz/webmention" />
        <link rel="pingback" href="https://webmention.io/webmention?forward=https://bensden.xyz/webmention" />
      </head>
      <body className={`${inter.className} antialiased `}>
        <div className="overlay"></div>
        {/* Full-Width Grid Overlay (Dev Tool) */}
        <div className="fixed inset-0 pointer-events-none z-50 page-container">
          <div className="w-full h-full page-grid">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="border-l border-r border-gray-500 opacity-25 bg-sky-200"
              />
            ))}
          </div>
        </div>
        <div className="min-h-screen w-full grid grid-rows-[auto,1fr,auto]">
          <div className="page-container pt-4 pb-8">
            <NavBar />
          </div>
          <main className="page-container">
            <div className="my-10">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
