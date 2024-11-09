import { BoxTitle } from "../BoxTitle/BoxTitle";
import { Section2Item } from "./Section2Item";
export const Section2 = () => {
    return (
        <>
            <div className='py-[120px]'>
                <div className='container mx-auto'>
                    <BoxTitle
                        title="How Horizon works?"
                        des="Tellus rutrum tellus pellentesque eu tincidunt tortor condimentum."
                        className="mb-[60px] text-center"
                    />

                    <div className='grid grid-cols-3 gap-x-[40px]'>
                        <Section2Item
                            number="1"
                            title="Create your Account"
                            des="Condimentum vit pellemsque habitant morbi at molestie."
                        />
                        <Section2Item
                            number="2"
                            title="Setup your Account"
                            des="Condimentum vit pellemsque habitant morbi at molestie."
                        />
                        <Section2Item
                            number="3"
                            title="Start creating with Horizon"
                            des="Condimentum vit pellemsque habitant morbi at molestie."
                        />
                        
                    </div>
                </div>
            </div>
        </>
    );
}