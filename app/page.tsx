import SphereComponent from "@/components/Sphere"
import { Black_Ops_One} from 'next/font/google'

const blackops = Black_Ops_One({weight:'400',subsets:["latin"]})
const Home = () => {
  return (
    <section className="w-full">
      <h1 className={`${blackops.className} gradient-text text-center text-2xl md:text-6xl px-2`} >
        BURI&KLENCH 
      </h1>
      <p className="text-center text-base px-2 mt-5">Your favourite NFT NKYC KYC NFS JFK KFC que te foca la vaca para comprar mierda sin sentido con muchísimo dinelo.</p>
      <p className="text-center text-base px-2"><small>PD: Haz como que te caes y glogloglo</small></p>
      <SphereComponent/>
    </section>
  )
}

export default Home
