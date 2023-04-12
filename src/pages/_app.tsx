import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "urql";

//Urql
import { client } from "@/Urql/client";

//Fonts
import { poppins } from "@/Fonts";

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${poppins.variable} font-sans bg-bodyBg`}>
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  </main>
}
