import RootLayout from "@/src/components/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from 'react-redux';
import { persistor, store } from "@/src/store/Store";
import { PersistGate } from 'redux-persist/integration/react';
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps : { session, ...pageProps } }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SessionProvider>
        <div className="font-bodyFont bg-gray-300">
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </div>
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}
