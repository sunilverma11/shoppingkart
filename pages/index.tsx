import  Landing  from "@/components/home/home";
// import localFont from "next/font/local";
import Footer  from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home(prop:string) {
  console.log("props",prop)
  return (
    <div
    className="pageLayout"
      // className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <nav>
      <Navbar/>
      </nav>              
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">        
        <Landing/>
      </main>
      <footer 
      // className="row-start-3 flex gap-6 flex-wrap items-center justify-center"
      >
          <Footer/>          
      </footer>
    </div>
  );
}

// export const getStaticProps = async ()=>{

//   return {
//     props :{name:"sunil"}
//   }
// }
// export const getServerSideProps = async ()=>{
//   const res = await fetch("http://localhost:3000/api/hello");
//   const data = await res.json();
//   console.log(data)
//   return {
//     props : {name:data.name}
//   }
// }