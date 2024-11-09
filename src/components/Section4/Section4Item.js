export const Section4Item = (props) => {
    const {number, title, des} = props;
    
    return (
        <>
            <div className="mb-[20px]">
                <div className="font-[800] text-[36px] mb-[2px] text-dark">{number}</div>
                <div className="font-[700] text-[16px] mb-[2px] text-dark">{title}</div>
                <div className="font-[500] text-[16px] text-light">{des}</div>
            </div>
        </>
    );
}