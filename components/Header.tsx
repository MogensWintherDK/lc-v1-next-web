import { LNXLinkText } from "../libs/lib-lnx/components";

export default function Header({ ...props }) {
    return (
        <div id='NavHeader' className={`Header fixed top-0 left-0 z-10 w-full bg-white shadow-lg flex justify-center h-[50px] md:h-[100px]`}>
            <div className='Slim text-theme text-sm'>
                <LNXLinkText className='m-4' href='/' text='Home' />
                <LNXLinkText className='m-4' href='/services' text='Services' />
                <LNXLinkText className='m-4' href='/about' text='About' />
                <LNXLinkText className='m-4' href='/get-in-touch' text='Get in touch' />
            </div>
        </div>
    );
}