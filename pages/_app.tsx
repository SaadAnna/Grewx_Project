import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head"; // ← Import Head

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Add global metadata here */}
      <Head>
        {/* Required Core Tags */}
        <title>Newt | Modern Digital Banking & Payments - Fast, Secure, Borderless</title>
        <meta name="description" content="Newt is the future of online banking. Send, receive, and manage money globally with low fees, instant transfers, and top-tier security." />
        <meta name="keywords" content="online banking, digital wallet, PayPal alternative, fintech startup" />
        
        {/* OpenGraph (Facebook/LinkedIn) */}
        <meta property="og:title" content="Newt - Banking Without Borders | Send Money Instantly" />
        <meta property="og:description" content="Join Newt for fee-free international transfers, multi-currency accounts, and 24/7 customer support. Licensed and secure digital banking." />
        <meta property="og:url" content="https://newt.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://newt.com/og-banking.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Newt - The Smarter Way to Bank Online" />
        <meta name="twitter:description" content="No hidden fees. No borders. Just lightning-fast digital banking. Sign up today!" />
        <meta name="twitter:image" content="https://newt.com/twitter-card.jpg" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://newt.com/" />
        
        {/* Theme Color (for PWA) */}
        <meta name="theme-color" content="#0066FF" />
      </Head>

      <body className="scroll-smooth">
        <div className={inter.className}>
          <Component {...pageProps} />
        </div>
      </body>
    </>
  );
}