import { LuMailOpen } from "react-icons/lu";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Section3Item } from "./Section3Item";
export const Section3 = () => {
    return (
        <>
            <div className="py-[120px]">
                <div className="container mx-auto">
                    <div className="grid grid-cols-3">
                        <Section3Item
                            title="Share team inboxes"
                            des="Whether you have a team of 2 or 200, our shared team inboxes keep everyone"
                            icon={LuMailOpen}
                        />
                        <Section3Item
                            title="Analytics dashboard"
                            des="Whether you have a team of 2 or 200, our shared team inboxes keep everyone"
                            icon={MdOutlineStackedLineChart}
                        />
                        <Section3Item
                            title="Deliver instant answer"
                            des="Whether you have a team of 2 or 200, our shared team inboxes keep everyone"
                            icon={FaRegUser}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}