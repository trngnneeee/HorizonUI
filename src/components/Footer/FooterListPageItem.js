export const FooterListPageItem = (props) => {
    const {icon: Icon} = props;
    return (
        <>
            <li className="">
                <a href = "#" className="text-light">
                    <Icon/>
                </a>
            </li>
        </>
    );
}