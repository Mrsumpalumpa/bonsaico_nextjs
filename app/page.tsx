import { Black_Ops_One} from 'next/font/google'
import Link from 'next/link'

const blackops = Black_Ops_One({weight:'400',subsets:["latin"]})

const Home = () => {
  return (

      <section className="mx-auto w-full h-full py-10" >
          <h1 className={`${blackops.className} gradient-text text-center px-2 text-5xl md:text-8xl`} >
            FRIENDS&KLENCH 
          </h1>
          <article className='mx-auto w-2/3 flex-column gradient-text '>
            <h3 className='px-2 text-center text-xl md:text-3xl'>TROLL THE WORLD</h3>
            <p className='px-2 text-md'>Your favourite troll website to buy NFT NKYC/KYC (we don't give a ****) NFS JFK KFC que te foca la vaca impresionantemente.<br/></p>
            <p className='px-2 text-md'>Compra ****** sin sentido con muchísimo dinelo y envíame tus Bitcoins a esta dirección:<br/>
            bc1qrcvsq8xg73z4w3ucfqljtmgmf6xpdhtzds4v2atwky0ejsmfe79qc8usws<br/>
            </p>
            <p className='px-2'><small>PD: Haz como que te caes and touch my tralala</small></p>
          </article>
          <article className='mx-auto w-2/3 my-5 flex px-2 justify-between'>

            <Link href={'/blog/createblog'} className='w-2/5 text-center btn-custom py-3 px-1'>
              
                DUMB*** COMMENTS HERE
              
            </Link>
            <Link href={'/blog/createblog'} className='w-2/5 text-center btn-custom py-3 px-1'>
              
                **** COLLECTIONS
              
            </Link>

          </article>

      </section>
      


  )
}

export default Home
