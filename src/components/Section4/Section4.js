import pic from "./../../assets/images/Image.png"
import { Section4Item } from "./Section4Item";
export const Section4 = () => {
    return (
        <>
            <div className="py-[120px]">
                <div className="container mx-auto">
                    <div className="flex justify-between">
                        <div className="w-[45%]">
                            <div className="font-[800] text-[30px] mb-[10px] text-dark">Boost your workflow with Horizon</div>
                            <div className="font-[500] text-[16px] mb-[60px] text-light">Urna duis convallis convallis tellus interdum velit laoreet pentesque aliquam tortor consequat porta.</div>
                            <div className="grid grid-cols-2 grid-rows-2 gap-[40px]">
                                <Section4Item
                                    number="340+"
                                    title="Successful Projects"
                                    des="Urna duis convallis convallis tellus interdum velit laoreet."
                                />
                                <Section4Item
                                    number="$10m"
                                    title="Annual Percentage Rate"
                                    des="Urna duis convallis convallis tellus interdum velit laoreet."
                                />
                                <Section4Item
                                    number="2.8k+"
                                    title="Clients Worldwide"
                                    des="Urna duis convallis convallis tellus interdum velit laoreet."
                                />
                                <Section4Item
                                    number="7000+"
                                    title="Daily Visits"
                                    des="Urna duis convallis convallis tellus interdum velit laoreet."
                                />
                                
                            </div>
                        </div>
                        <div className="w-[45%]">
                            <img className="w-[100%]" src={pic}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}