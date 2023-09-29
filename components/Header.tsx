import Image from "next/image";
import { LNXLinkText, LNXRow } from "../libs/lib-lnx/components";

export default function Header({ ...props }) {
    return (
        <div id='NavHeader' className={`Header fixed top-0 left-0 z-10 w-full bg-white shadow-lg flex justify-center h-[62px] items-stretch`}>

            {/* Row */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full items-stretch justify-items-center justify-center`}>

                {/* Logo - Left */}
                <div className="justify-left mr-auto">
                    <a href='/'>
                        <Image className='inline' src='/images/logo/LC-Logo-Circle-V2-30px.png' width='30' height='30' alt='Linux Consulting - Logo'></Image>
                        <span className='ml-2 h-[30] align-middle text-theme-g-3 text-sm hidden lg:inline-block'>
                            Linux Consulting ApS
                        </span>
                    </a>
                </div>

                {/* Menu - Center */}
                <div className='w-full pt-1  text-theme text-sm text-center'>
                    <LNXLinkText className='mx-4 inline' href='/' text='Home' />
                    <LNXLinkText className='mx-4 inline' href='/services' text='Services' />
                    <LNXLinkText className='mx-4 inline' href='/about' text='About' />
                    <LNXLinkText className='mx-4 inline' href='/get-in-touch' text='Get in touch' />
                </div>

                {/* Name - Right */}
                <div className='text-theme-g-3 text-sm justify-end ml-auto hidden lg:block mt-[-6px] h-[40px]'>
                    Linux Consulting ApS, Denmark<br />
                    Managing Consultant, Mogens Winther
                </div>
            </div>
        </div>
    );
}