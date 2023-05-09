import React from 'react'

import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'

const Accordian = () => {
  return (
    <div>
 
 <Accordion className='w-full' allowMultiple>
   <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10'>
     <h2>
       <AccordionButton className='flex justify-between'>
         <span className='text-left  text-navy-900 dark:text-white hover:text-orange-500' flex='1' textAlign='left'>
           I want to partner my resturant with Swiggy
         </span>
         <AccordionIcon className='text-left !text-navy-900 dark:!text-white'/>
       </AccordionButton>
     </h2>
     <AccordionPanel className='text-left text-medium mt-2 !text-navy-900 dark:!text-white' pb={4}>
       ZOE™ is a simple and understated stackable shell chair with lots
       of personality and character that is as beautiful when seen from
       below as from above. The frame is discretely tucked into the
       chair's molded shell, and the shell's tapering thickness gives it
       a friendly expression.
     </AccordionPanel>
   </AccordionItem>
  
 {" "}
   <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10 mt-5'>
     <h2>
       <AccordionButton className='flex justify-between'>
         <span className='text-left  text-navy-900 dark:text-white hover:text-orange-500' flex='1' textAlign='left'>
           I What are the mandatory documents needed to list my restaurant on Swiggy?
         </span>
         <AccordionIcon className='text-left !text-navy-900 dark:!text-white'/>
       </AccordionButton>
     </h2>
     <AccordionPanel className='text-left text-medium mt-2 !text-navy-900 dark:!text-white' pb={4}>
       ZOE™ is a simple and understated stackable shell chair with lots
       of personality and character that is as beautiful when seen from
       below as from above. The frame is discretely tucked into the
       chair's molded shell, and the shell's tapering thickness gives it
       a friendly expression.
     </AccordionPanel>
   </AccordionItem>

   <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10 mt-5'>
     <h2>
       <AccordionButton className='flex justify-between'>
         <span className='text-left  text-navy-900 dark:text-white hover:text-orange-500' flex='1' textAlign='left'>
           I After I submit all documents, how long will it take for my restaurant to go live on Swiggy?
         </span>
         <AccordionIcon className='text-left !text-navy-900 dark:!text-white'/>
       </AccordionButton>
     </h2>
     <AccordionPanel className='text-left text-medium mt-2 !text-navy-900 dark:!text-white' pb={4}>
       ZOE™ is a simple and understated stackable shell chair with lots
       of personality and character that is as beautiful when seen from
       below as from above. The frame is discretely tucked into the
       chair's molded shell, and the shell's tapering thickness gives it
       a friendly expression.
     </AccordionPanel>
   </AccordionItem>

   <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10 mt-5'>
     <h2>
       <AccordionButton className='flex justify-between'>
         <span className='text-left  text-navy-900 dark:text-white hover:text-orange-500' flex='1' textAlign='left'>
           I After I submit all documents, how long will it take for my restaurant to go live on Swiggy?
         </span>
         <AccordionIcon className='text-left !text-navy-900 dark:!text-white'/>
       </AccordionButton>
     </h2>
     <AccordionPanel className='text-left text-medium mt-2 !text-navy-900 dark:!text-white' pb={4}>
       ZOE™ is a simple and understated stackable shell chair with lots
       of personality and character that is as beautiful when seen from
       below as from above. The frame is discretely tucked into the
       chair's molded shell, and the shell's tapering thickness gives it
       a friendly expression.
     </AccordionPanel>
   </AccordionItem>

   <AccordionItem className='border-b border-gray-200 py-[17px] dark:!border-white/10 mt-5'>
     <h2>
       <AccordionButton className='flex justify-between'>
         <span className='text-left  text-navy-900 dark:text-white hover:text-orange-500' flex='1' textAlign='left'>
           I After I submit all documents, how long will it take for my restaurant to go live on Swiggy?
         </span>
         <AccordionIcon className='text-left !text-navy-900 dark:!text-white'/>
       </AccordionButton>
     </h2>
     <AccordionPanel className='text-left text-medium mt-2 !text-navy-900 dark:!text-white' pb={4}>
       ZOE™ is a simple and understated stackable shell chair with lots
       of personality and character that is as beautiful when seen from
       below as from above. The frame is discretely tucked into the
       chair's molded shell, and the shell's tapering thickness gives it
       a friendly expression.
     </AccordionPanel>
   </AccordionItem>
  
 
  

 </Accordion>





    </div>
  )
}

export default Accordian