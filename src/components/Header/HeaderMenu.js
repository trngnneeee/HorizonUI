import { HeaderMenuItem } from "./HeaderMenuItem";
export const HeaderMenu = () => {
    return (
        <nav className=''>
            <ul className='flex gap-[48px]'>
                <HeaderMenuItem
                    link = "#"
                    name = "Product"
                />
                <HeaderMenuItem
                    link = "#"
                    name = "Features"
                />
                <HeaderMenuItem
                    link = "#"
                    name = "Pricing"
                />
                <HeaderMenuItem
                    link = "#"
                    name = "Company"
                />
            </ul>
        </nav>
    );
}