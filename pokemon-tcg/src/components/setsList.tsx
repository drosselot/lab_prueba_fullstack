'use client'
import { textFont } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

const SetsList = (props: {sets: PokemonSet[]}) => {
  const {sets} = props;

  return (
    <div className="flex flex-row flex-wrap p-5 w-screen justify-around">
      {
        sets.map((set) => (
          <Link href={"/set/" + set.id} key={set.id} className="flex flex-row hover:shadow-xl shadow-md shadow-slate-300 m-5 h-40 rounded-md border border-slate-200 w-2/5">
            <div className="content-center m-5">
              <Image width={150} height={150} alt={set.name + " logo"} src={set.logo_url || ""}/>
            </div>
            <div className={textFont.className + " text-3xl m-5 "}>
              <h3 className="font-semibold">{set.name} [{set.ptcgo_code}]</h3>
              <p className="text-xl">{set.series}</p>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default SetsList;