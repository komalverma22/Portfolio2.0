import React from 'react'
import Link from "next/link";
import { Judson } from 'next/font/google'
import { FloatingDock } from "../../ui/floating-dock";
const judson = Judson({ subsets: ['latin'], weight: '700' });
const judsonn = Judson({ subsets: ['latin'], weight: '400' });

const FooterSection = () => {
  return (
    <div className='relative'>
    <div className='h-[300px] md:h-[385px] none md:flex justify-between px-2 md:px-50  py-10 '>
      <div>
             <div className={`text-[35px] md:text-[57px] ${judson.className}`}>
    Quick Links
             </div>
             <div className={`flex flex-col  space-y-[-2px] md:space-y-[-8px]  text-[25px] md:text-[40px] ${judsonn.className}`}>
<Link href="/">Home</Link>
<Link href="/project">Project</Link>
<Link href="/design">Design</Link>
<Link href="/blog">Blog</Link>
             </div>
      </div>
      <div>
{/* logo */}

      </div>

    </div>
    {/* line below footer */}
    <div className='absolute  h-[50px] md:h-[91px] w-full'
    style={{
        background:"var(--navbar-bg-color)"
    }}>
        <div className={`${judsonn.className} text-[18px]  h-[50px] md:h-[91px] justify-center items-center flex align-middle `}>
            Made with ♡ by 
            <Link href="" className='px-1 font-semibold'> coffee</Link>
            
             ©2025
        </div>

    </div>
    </div>
  )
}

export default FooterSection
