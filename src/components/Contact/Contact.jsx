
import React from 'react'
import ContactImg from "../../assets/ContactImg.png";
import { Button, Label, Textarea, TextInput, } from 'flowbite-react';
import { DomainURL } from '../../../config';

const Contact = () => {
  //handle book submission
  const handleContactSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    console.log(name);
    const email = form.email.value;
    const number = form.number.value;
    const message = form.message.value;

    const contactObj = {
      name, email, number, message
    }
    console.log(contactObj);

    // send data to db
    fetch(`${DomainURL}/upload-details`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(contactObj)
    }).then(res => res.json()).then(data => {
      // console.log(data);
      alert("Information has sent   successfully !!!")
      form.reset();
    })
  }
  return (
    <div className="px-4 lg:px-24 bg-cyan-50  flex items-center">

      {/* Contact section */}
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-20">

        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Contact <span className="text-blue-700">Us!</span>
          </h2>
          <div className="md:w-4/5">
            <form onSubmit={handleContactSubmit} className="flex max-w-md flex-col gap-4">
              {/* Name */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Your Name" />
                </div>
                <TextInput id="name" type="Name" placeholder="Enter Your Name here" required />
              </div>
              {/* Email */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your Email" />
                </div>
                <TextInput id="email" type="email" placeholder='Enter Your Email here ' required />
              </div>
              {/* Number */}

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="number" value="Your Contact Number" />
                </div>
                <TextInput id="number" type="number" placeholder="Enter Your Contact Number" required />
              </div>

              {/* Textarea */}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="message" value="Your Message" />
                </div>
                <Textarea id="message" type="text" placeholder="Enter Your message here..." required rows={3} />
              </div>
              {/* Button */}
              <Button type="submit">Submit</Button>
            </form>
          </div>
          <div>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={ContactImg} alt="" className="rounded md:w-10/12" />
        </div>
      </div>
    </div>
  )
}

export default Contact