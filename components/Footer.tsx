import Image from "next/image";
import { LNXLinkText, LNXRow } from "../libs/lib-lnx/components"

export default function Footer({ ...props }) {
    return (
        <div className='grid grid-flow-row bg-dark text-light text-center shadow-lg mt-16 pb-16'>
            <LNXRow cols='3'>
                <div className="w-56">
                    <Image className='mx-auto' src='/images/logo/LC-Logo-Circle-V2-100px.png' alt='LC Logo' width='100' height='100' />
                </div>

                <div className="w-56">
                    <div className="font-bold">Contact</div>
                    <LNXLinkText href='/get-in-touch' text='Get in touch' className='block' />
                    <LNXLinkText href='https://www.linkedin.com/in/mogenswinther/' text='LinkedIn' className='block' />
                </div>

                <div className="w-56 items-stretch">
                    <div className="font-bold">Content</div>
                    <LNXLinkText href='/services' text='Services' className='block' />
                    <LNXLinkText href='/process' text='Process' className='block' />
                    <LNXLinkText href='/about' text='About' className='block' />
                    <LNXLinkText href='/technical-skills' text='Technical skills' className='block' />
                </div>
            </LNXRow >

            < div className='pt-8 text-xs text-theme-g-3' >
                <p>Copyright &copy; 2023 Linux Consulting ApS</p>
            </div >
            < div className='pt-8 text-xs text-theme-g-4' >
                Image by rawpixel.com
            </div >
        </div >
    );
}