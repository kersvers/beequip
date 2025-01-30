import classNames from "classnames";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

import "./globals.css";

const gothamFont = localFont({
  src: [
    {
      path: "../assets/fonts/GothamSSm-Light_Web.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/GothamSSm-Bold_Web.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main
      className={classNames(
        gothamFont.variable,
        "font-sans flex bg-[#5A5E65] h-screen content-center justify-center flex-wrap"
      )}
    >
      <div className="bg-white max-w-[955px]">
        <Component {...pageProps} />
      </div>
    </main>
  );
}
