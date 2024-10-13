import  Landing  from "@/components/home/home";
import  Navbar  from "@/components/navbar/navbar";
import Image from "next/image";
import localFont from "next/font/local";
import Head from "next/head";
import Footer  from "@/components/footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <Head>
        <Navbar/>
      </Head>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">        
        <Landing/>
        <h1>Above this landing page exists</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <Footer/>
          <Image
            aria-hidden
            src="https://nextjs.org/icons/github.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
      </footer>
    </div>
  );
}
