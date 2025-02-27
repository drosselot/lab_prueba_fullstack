import { Press_Start_2P } from "next/font/google";
import SetsTable from "@/components/setsTable";

const titleFont = Press_Start_2P({
  subsets: ['latin'],
  weight: "400"
})

export default function Home() {
  return (
    <div>
      <h1 className={"w-full text-center mt-16 text-4xl text-amber-400 [text-shadow:3px_3px_#326cb4] " + titleFont.className}>Bienvenido a Pokemon TCG App</h1>
      <SetsTable/>
    </div>
  );
}
