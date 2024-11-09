import { HeaderLogin } from "./HeaderLogin";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderRegister } from "./HeaderRegister";
export const Header = () => {
    return (
        <>
            <header className='py-[26px]'>
                <div className='container mx-auto'>
                    <div className='flex items-center justify-between'>
                        
                        <HeaderLogo/>
                        
                        <HeaderMenu/>

                        <div className='flex items-center gap-[20px]'>
                            <HeaderLogin/>
                            <HeaderRegister/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}