
import { Inter } from "next/font/google";
import LandingPage from "@/components/Landling";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <LandingPage/>
    </>
  );
}
Home.getLayout = function getLayout(page)
{
  return <Layout>{page}</Layout>
}
 
