import { Layout } from "@/components/Layout";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { RegisterModal } from "@/components/modals/RegisterModal";
import { LoginModal } from "@/components/modals/LoginModal";
import EditModal from "@/components/modals/EditModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster position="bottom-right" />
      <RegisterModal />
      <EditModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
