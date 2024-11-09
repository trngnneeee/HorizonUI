import { Button } from "../Button/Button";
import { ButtonOutline } from "../Button/ButtonOutline";
export const Section6 = () => {
    return (
        <>
            <div className="py-[120px]">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="">
                            <div className="font-[800] text-[36px] text-dark mb-[0px]">Save time with Horizon.</div>
                            <div className="font-[600] text-[36px] text-dark">Turn your visitors into clients.</div>
                        </div>
                        <div className="flex gap-[16px] items-center">
                            <ButtonOutline
                                title="Try Demo"
                            />
                            <Button
                                title="Get Started Now"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}