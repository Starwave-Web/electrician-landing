
import "../globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/src/components/navbar/navbar";
import { Toaster } from "@/src/components/ui/toaster";
import Footer from "@/src/components/footer/footer";
import { routing } from "@/src/i18n/routing";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import {NextIntlClientProvider} from 'next-intl';

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

//@ts-expect-error anytypeerror
export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'metadata'});
 
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  //@ts-expect-error anytypeerror
  if (!routing.locales.includes(locale)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
      <NextIntlClientProvider messages={messages}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
