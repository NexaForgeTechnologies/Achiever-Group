import { Geist, Geist_Mono, Rubik } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const metadata = {
  title: "The Achiever Group — CONNECT | LEAD | GROW | MEASURE",
  description: "CONNECT | LEAD | GROW | MEASURE ",

  openGraph: {
    title: "The Achiever Group — CONNECT | LEAD | GROW | MEASURE ",
    url: "https://achiever-grp.com", // canonical domain
    siteName: "The Achiever Group",
    images: [
      {
        url: "https://achiever-grp.com/favlogo2.png", // absolute URL
        width: 1200,
        height: 630,
        alt: "The Achiever Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Achiever Group — CONNECT | LEAD | GROW | MEASURE",
    description: "CONNECT | LEAD | GROW | MEASURE",
    images: ["https://achiever-grp.com/favlogo2.png"], // absolute URL
  },

  alternates: {
    canonical: "https://achiever-grp.com",
    domains: [
      "https://achiever-grp.com",
      "https://www.achiever-grp.com",
    ]

  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favlogo2.png" type="image/x-icon"/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} antialiased overflow-x-hidden `}
      >
        <div className="bg-white">
          <Header />
        </div>

        <main className="px-5 sm:px-10 md:px-18 lg:px-20 bg-white">{children}</main>

        <div className="bg-white">
          <Footer />
        </div>
      </body>
    </html>
  );
}
