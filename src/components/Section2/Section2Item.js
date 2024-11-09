export const Section2Item = (props) => {
    const {number, title, des} = props;
    
    return (
        <>
            <div className='flex gap-x-[18px]'>
                <div className='w-[48px] h-[48px] bg-primary rounded-[50%] font-[700] text-[16px] text-white flex justify-center items-center'>{number}</div>
                <div className='flex-1'>
                    <div className='font-[700] text-[16px] text-dark'>{title}</div>
                    <div className='font-[500] text-[16px] text-light'>{des}</div>
                </div>
            </div>
        </>
    );
}