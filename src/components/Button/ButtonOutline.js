export const ButtonOutline = (props) => {
    const {title} = props;
    return (
        <a href = "#" className="border-[1px] border-solid border-primary rounded-[12px] px-[28px] py-[16px] text-primary">{title}</a>
    );
}