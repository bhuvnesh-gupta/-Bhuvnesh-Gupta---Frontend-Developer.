import Image from "next/image";

import BillionairesPage from "@/components/MainSection/BillionairesPage";
import CreatePage from "@/components/MainSection/CreatePage";
import HowItPage from "@/components/MainSection/HowItPage";
import Header from "@/components/header";



export default function Home() {
  return (
    <div className="container">
      <Header />
      <BillionairesPage />
      <CreatePage />
      <HowItPage />
    </div>
  );
}
