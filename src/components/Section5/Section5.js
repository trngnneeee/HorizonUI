import avt from "./../../assets/images/Ellipse 1.png"
import { Section5Item } from "./Section5Item";
export const Section5 = () => {
    return (
        <>
            <div className="py-[120px]">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center mb-[74px]">
                        <h2 className="font-[800] text-[36px] text-dark mb-[16px]">Customer Testimonials</h2>
                        <div className="font-[500] text-[16px] text-light w-[684px] text-center">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</div>
                    </div>
                    <div className="flex gap-[18px]">
                        <div className="grid grid-cols-2 gap-[18px]">
                            <Section5Item
                                title="“A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming.”"
                                img={avt}
                                name="Tiana Schleifer"
                                job="CEO & Founder"
                            />
                            <Section5Item
                                title="“A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming.”"
                                img={avt}
                                name="Tiana Schleifer"
                                job="CEO & Founder"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}