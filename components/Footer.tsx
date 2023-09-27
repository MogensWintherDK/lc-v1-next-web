import { LNXRow } from "../libs/lib-lnx/components"

export default function Footer({ ...props }) {
    return (
        <div className='grid grid-flow-row bg-dark text-light text-center shadow-lg mt-16 pb-16'>
            <LNXRow cols='3'>
                <div className="w-56">
                    Contact:
                    mw@linuxconsulting.dk
                </div>

                <div className="w-56">
                </div>

                <div className="w-56">
                </div>
            </LNXRow>

            < div className='pt-8 text-xs text-theme-g-4' >
                <p>Copyright &copy; 2023 Linux Consulting ApS</p>
            </div >
            < div className='pt-8 text-xs text-theme-g-4' >
                Image by rawpixel.com
            </div >
        </div >
    );
}