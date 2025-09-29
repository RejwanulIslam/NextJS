import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import NextAuthSeationProvider from "@/providers/NexAuthSeationProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
}
)

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Lerning Next.js",
    template: "%s|Lerning Next.js"
  },
  keywords: ['Next.js', 'React', 'JavaScript'],

  description: "create next app for lerning Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSeationProvider>
        <body className={`${poppins.className} antialiased`}>
          <div className="flex justify-center">
            <Navbar></Navbar>
          </div>

          {children}
        </body>
      </NextAuthSeationProvider>
    </html>
  );
}
