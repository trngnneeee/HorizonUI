export const HeaderMenuItem = (props) => {
    const {link, name} = props;
    
    return (
        <>
            <li>
                <a href="{link}" className='font-[400] text-[14px] text-black'>{name}</a>
            </li>
        </>
    );
}