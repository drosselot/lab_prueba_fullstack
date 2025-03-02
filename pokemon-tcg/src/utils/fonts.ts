import { Chakra_Petch, Press_Start_2P } from "next/font/google"

const mainTitleFont = Press_Start_2P({
  subsets: ['latin'],
  weight: "400"
})

const textFont = Chakra_Petch({
  subsets: ['latin'],
  weight: ["300", "600"]
})

export {
  mainTitleFont,
  textFont
}