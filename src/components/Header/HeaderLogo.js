import logo from "./../../assets/images/Horizon UI Logo.svg";
export const HeaderLogo = () => {
    return (
        <>
            <div className=''>
                <a href='/' className=''>
                    <img src={logo} className='h-[34px] w-auto'></img>
                </a>
            </div>
        </>
    );
}