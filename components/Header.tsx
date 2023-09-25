export default function Header({ ...props }) {
    return (
        <div id='NavHeader' className={`Header fixed top-0 left-0 z-10 w-full bg-white text-white shadow-lg flex justify-center h-[50px] md:h-[100px]`}>
            <p className='text-theme'>
                HEADER
            </p>
        </div>
    );
}