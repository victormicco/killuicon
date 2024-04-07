import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../styles/globals.css";
import { ThemeProvider } from "../../../components/theme-provider";
import { Background } from "../../../components/background";
import { Toaster } from "@fellipeutaka/ui/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Killuicon | Convert",
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
          defaultTheme="black"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <Background>{children}</Background>
        </ThemeProvider>
      </body>
    </html>
  );
}
