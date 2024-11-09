import { FooterMenuItem } from "./FooterMenuItem";
export const FooterMenu = () => {
    return (
        <>
            <ul className="flex gap-[48px] mb-[24px]">
                <FooterMenuItem
                    title="About"
                />
                <FooterMenuItem
                    title="Features"
                />
                <FooterMenuItem
                    title="Blog"
                />
                <FooterMenuItem
                    title="Resources"
                />
                <FooterMenuItem
                    title="Partners"
                />
                <FooterMenuItem
                    title="Help"
                />
                <FooterMenuItem
                    title="Terms"
                />
                
            </ul>
        </>
    );
}