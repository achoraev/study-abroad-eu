import { Inter } from "next/font/google"; 
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getTranslations } from 'next-intl/server';
import './globals.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
 
  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL('http://localhost:3000'),
  };
}

const inter = Inter({
  subsets: ["latin", "latin-ext", "greek"],
  variable: "--font-inter",
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();


  return (
    <html lang={locale}>
      {/* Apply the inter variable and set it as the default font-sans */}
      <body className={`${inter.variable} font-sans antialiased`}>
      <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}