export const Button = (props) => {
    const {title} = props;
    return (
        <>
            <a href = "#" className='bg-primary px-[28px] py-[16px] rounded-[10px] font-[700] text-[14px] text-white'>{title}</a>
        </>
    );
}