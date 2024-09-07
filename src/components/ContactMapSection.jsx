import React from 'react';
import ContactForm from "./ContactForm";
import ContactDetails from './ContactDetails';


const ContactMapSection = () => {
  return (
    <> 
        <div className="App min-h-screen flex  justify-between p-4 bg-gray-100">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl w-full">
       */}
       <div>
       <ContactForm/>
       </div>
       <div>
       <ContactDetails/>
       </div>
    </div>
    </>

  )
}

export default ContactMapSection