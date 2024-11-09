import img from "./../../assets/images/Frame 59.png"
import logo from "./../../assets/images/icon 1.png"
import { Button } from "../Button/Button";
import { IoIosCall } from "react-icons/io";
export const Section1 = () => {
    return (
        <>
            <div className='mb-[80px]'>
                <div className='container mx-auto'>
                    <div className='flex justify-between items-center gap-[114px] mt-[0px]'>
                        <div className='w-[50%]'>
                            <div className='flex items-center gap-[11px] mb-[10px]'>
                                <img className="w-[20px] h-[20px]" src={logo}></img>
                                <div className='font-[700] text-[14px] text-primary'>TRENDIEST TAILWIND TEMPLATES</div>
                            </div>
                            <div className='font-[800] text-[60px] mb-[24px]'>Take your website to the next level with Horizon UI</div>
                            <div className='font-[500] text-[16px] text-light mb-[24px]'>Save hundreds of hours trying to create and develop a dashboard from scratch. The fastest, most responsive & trendiest dashboard is here. Seriously.</div>
                            <div className='flex gap-[0px]'>
                                <Button
                                    title="Get started now"
                                />
                                <a href = "#" className='flex items-center gap-[6px] px-[24px] py-[8px]'>
                                    <IoIosCall />
                                    Book a free call
                                </a>
                            </div>
                        </div>
                        <div className='w-[35%]'>
                            <img src={img} className="w-[100%]"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}