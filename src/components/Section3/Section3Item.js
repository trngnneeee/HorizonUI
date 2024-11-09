export const Section3Item = (props) => {
    const { title, des, icon: Icon } = props;

    const tmpHTML = <icon />;

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="p-[20px] bg-primary rounded-[16px] flex justify-center items-center text-white mb-[24px]">
                    <Icon/>
                </div>
                <div className="text-center">
                    <div className="font-[800] text-[24px] mb-[8px] text-dark">{title}</div>
                    <div className="font-[500] text-[16px] text-light px-[32px]">{des}</div>
                </div>
            </div>
        </>
    );
}