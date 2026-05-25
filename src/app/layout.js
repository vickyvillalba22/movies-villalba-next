import { DM_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppContextProvider } from "@/contexts/AppContext";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Películas y series",
  description: "Todas tus películas y series favoritas",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full overflow-x-hidden bg-black text-white">

        <AppContextProvider>
          <Header />
            {children}
          <Footer />
        </AppContextProvider>


        
      </body>
    </html>
  );
}
