import { useEffect } from "react";
import type { AppProps } from "next/app";
import { axeAccessibilityReporter } from "../utils/axeAccessibilityReporter";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter();
  }, []);

  return <Component {...pageProps} />;
}
