import Common from '@/component/common';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white text-black">
        <div className='text-white'><Common  title='FAQ Page' subtitle='faq'/></div>
        <div className="md:max-w-[px] h-[702px] text-5xl font-bold flex flex-col items-center justify-center ">Questions Looks Here
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>How we serve food?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis mod aliquam erat volutpat. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How can we get in touch with you?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis mod aliquam erat volutpat. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How is our food quality?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis mod aliquam erat volutpat. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What will be delivered? And When?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis mod aliquam erat volutpat. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How do we give home delivery?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis mod aliquam erat volutpat. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Is this restaurant 24 hours open?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis mod aliquam erat volutpat. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </div>
    </div>
  );
};

export default HeroSection;