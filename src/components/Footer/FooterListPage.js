import { FooterListPageItem } from "./FooterListPageItem";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
export const FooterListPage = () => {
    return (
        <>
            <ul className="flex gap-[32px] mb-[32px]">
                <FooterListPageItem
                    icon={FaFacebookF}
                />
                <FooterListPageItem
                    icon={FaTwitter}
                />
                <FooterListPageItem
                    icon={FaGithub}
                />
                <FooterListPageItem
                    icon={FaLinkedin}
                />
                <FooterListPageItem
                    icon={IoLogoInstagram}
                />
            </ul>
        </>
    );
}