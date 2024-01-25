
// import Image from "next/image";
import ParentComponent from "./components/ParentComponent";
import ScrollToTopButton from "./scroll/ScrollToTopButton";
import { CombinedData } from './interface';
import type { Metadata } from "next";

// import RootLayout from "./layout";
// import RootLayout from "../components/RootLayout";

export const metadata: Metadata = {
  title: "Amura Main Page",
  description: "Amura can help you get healthy and stay healthy in a way that has not been possible before this. Get Healthy Now",
};


export const getData = async () => {
  // Fetch data from external API
  const res = await fetch('https://zxoql8krd1.execute-api.ap-south-1.amazonaws.com/Prod/json', { cache: 'no-store' })
  const data: CombinedData[] = await res.json()
  // Pass data to the page via props
  return data;
}

export default async function Home() {
  const data= await getData()
  return (
    <main >
        <ParentComponent data={data} />
        <ScrollToTopButton />
    </main>
  );
}
