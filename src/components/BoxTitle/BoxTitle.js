export const BoxTitle = (props) => {
    const {title, des, className} = props;
    return (
        <>
            <div className={className}>
                <h2 className='font-[800] text-[36px] text-dark'>
                    {title}
                </h2>
                <p className='font-[500] text-[16px] text-light mt-[10px]'>
                    {des}
                </p>
            </div>
        </>
    );
}