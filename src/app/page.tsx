import Hero from "@/components/Hero";
import Brand from "@/components/Brand";
import Carames from "@/components/Carames";
import Products from "@/components/Product";
import Benefit from "@/components/Benefit";
import Touch from "@/components/Touch";


export default function Home() {
  return (
    <div >
      <Hero/>
      <Brand/>
      <Carames />
      <Products/>
      <Benefit/>
      <Touch />
    </div>
  )
}