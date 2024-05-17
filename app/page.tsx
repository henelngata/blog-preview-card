import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <link rel="icon" href="/assets/images/favi.png" sizes="any" />
      </Head>
   <main>
    <section><img src="./assets/images/illustration-article.svg" alt="illustaration" /></section>
    
    <p className="learning">Learning</p>

  <p>Published 21 Dec 2023</p>

  <h1>HTML & CSS foundations</h1>
  <p className="gray-out">These languages are the backbone of every website, defining structure, content, and presentation.</p>
  
  <section className="flex">
    <img src="./assets/images/image-avatar.webp" alt="An avater" />
    <p className="padding-left">Greg Hooper</p>
  </section>

   </main>
    </>
  );
}
