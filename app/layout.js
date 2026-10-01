import "./globals.css";
import { DM_Mono, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const display = Manrope({ subsets: ["latin"], variable: "--font-display" });
const mono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Liz Bassey — Frontend developer & UX designer",
  description:
    "A detail-oriented frontend developer with a strong UX design background.",
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${mono.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
