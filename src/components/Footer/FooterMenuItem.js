export const FooterMenuItem = (props) => {
    const { title } = props;
    return (
        <>
            <li>
                <a href="#" className="font-[500] text-[14px] text-light">{title}</a>
            </li>
        </>
    );
}