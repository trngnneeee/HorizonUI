import { HeaderLogo } from "../Header/HeaderLogo";
import { FooterMenu } from "./FooterMenu";
import { FooterListPage } from "./FooterListPage";
export const Footer = () => {
    return (
        <>
            <div className="py-[80px]">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="mb-[32px]">
                            <HeaderLogo/>
                        </div>
                        <FooterMenu/>
                        <FooterListPage/>
                        <div className="font-[500px] text-[14px] text-light">© 2024 28Tech. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </>
    );
}