import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import { ThemeProvider } from "../../components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Background } from "@/components/background";
import { Toaster } from "@fellipeutaka/ui/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Killuicon",
  description: "Consiga qualquer ícone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Background>{children}</Background>
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
