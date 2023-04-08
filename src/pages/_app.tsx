import "@/styles/globals.css";
import type { AppProps } from "next/app";

//Fonts
import { poppins } from "@/Fonts";

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${poppins.variable} font-sans bg-bodyBg`}>
    <Component {...pageProps} />
  </main>
}
