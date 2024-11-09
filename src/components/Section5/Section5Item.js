export const Section5Item = (props) => {
    const {title, img, name, job} = props;
    
    return (
        <>
            <div className="bg-[#F6F8FD] p-[32px] flex flex-col items-center rounded-[16px]">
                <div className="font-[700] text-[20px] text-dark mb-[37px] text-center">"{title}"</div>
                <div className="w-[40px] h-[40px] mb-[16px]">
                    <img className="w-[100%] h-[100%]" src={img}></img>
                </div>
                <div className="font-[800] text-[18px] text-dark">{name}</div>
                <div className="font-[600] text-[12px] text-light">{job}</div>
            </div>
        </>
    );
}