import Image from "next/image";
import Link from "next/link";
import { LNXLinkText, LNXRow } from "../libs/lib-lnx/components";

export default function Header({ ...props }) {
    return (
        <div id='NavHeader' className={`Header fixed top-0 left-0 z-10 w-full bg-white shadow-lg flex justify-center h-[62px] items-stretch font-bold pt-4 md:px-8`}>

            {/* Row */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-8 w-full items-stretch justify-items-center justify-center`}>

                {/* Logo - Left */}
                <div className="justify-left mr-auto hidden md:block">
                    <Link href='/'>
                        <Image className='inline' src='/images/logo/W-Logo-Circle-V2-30px.png' width='30' height='30' alt='Linux Consulting - Logo'></Image>
                        <span className='ml-2 h-[30] align-middle text-theme-g-3 text-sm hidden lg:inline-block'>
                            WintherConsulting.dk
                        </span>
                    </Link>
                </div>

                {/* Menu - Center */}
                <div className='w-full pt-1 text-theme text-sm text-center'>
                    <LNXLinkText className='mx-4 inline' href='/' text='Home' />
                    <LNXLinkText className='mx-4 inline' href='/services' text='Services' />
                    <LNXLinkText className='mx-4 inline' href='/process' text='Process' />
                    <LNXLinkText className='mx-4 inline' href='/pricing' text='Pricing' />
                    <LNXLinkText className='mx-4 inline' href='/about' text='About' />
                    <LNXLinkText className='mx-4 inline' href='/get-in-touch' text='Get in touch' />
                </div>

                {/* Name - Right */}
                <div className='text-theme-g-3 text-sm justify-end ml-auto hidden lg:block mt-[-6px] h-[40px]'>
                    <Link href='/about'>
                        Technical Managing Consultant<br />
                        Mogens Winther
                    </Link>
                </div>
            </div>
        </div>
    );
}