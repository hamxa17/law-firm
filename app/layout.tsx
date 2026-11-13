import type { Metadata } from "next";
import "@fontsource/bodoni-moda/400.css";
import "@fontsource/bodoni-moda/500.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/cormorant-garamond/500-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    default: "Rajaul & Lawyers — Advocates & Tax Consultants, Dhaka",
    template: "%s · Rajaul & Lawyers",
  },
  description:
    "Full service law firm in Dhaka, Bangladesh. Corporate, property, taxation and VAT, litigation and consultancy — your legal partner for every step.",
  icons: { icon: "/brand/mark.png" },
};

/**
 * Header, footer and the WhatsApp button are shared by every page. Each page
 * renders its own <Motion /> so animations re-initialise on navigation.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
