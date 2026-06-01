import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimationObserver from "@/components/AnimationObserver";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ThePetPros - Find Trusted Breeders, Veterinarians & Dog Shows",
  description: "Connecting dog owners with trusted breeders, veterinarians, and shows across the U.S.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress Next.js hydration error overlay (caused by browser extensions)
              (function() {
                var origError = console.error;
                console.error = function() {
                  var msg = arguments[0];
                  if (typeof msg === 'string' && (
                    msg.indexOf('Hydration') !== -1 ||
                    msg.indexOf('hydrat') !== -1 ||
                    msg.indexOf('did not expect') !== -1 ||
                    msg.indexOf('Did not expect') !== -1 ||
                    msg.indexOf('does not match') !== -1
                  )) return;
                  origError.apply(console, arguments);
                };
                // Also hide the overlay element when it appears
                var observer = new MutationObserver(function(mutations) {
                  var overlay = document.querySelector('nextjs-portal');
                  if (overlay) overlay.remove();
                });
                if (document.body) {
                  observer.observe(document.body, { childList: true, subtree: true });
                } else {
                  document.addEventListener('DOMContentLoaded', function() {
                    observer.observe(document.body, { childList: true, subtree: true });
                  });
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${poppins.variable} ${manrope.variable} antialiased min-h-screen flex flex-col font-sans`} suppressHydrationWarning>
        <AnimationObserver />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
