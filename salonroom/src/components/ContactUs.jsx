import React from "react";

const ContactUs = () => {
  return (
    <div
      name="Contact"
      className="w-full h-fit
    bg-gradient-to-b from-white to-pink-50 text-gray-800 pt-32"
    >
      <div
        className="flex flex-col p-4 pt-0 justify-center 
      max-w-screen-lg mx-auto h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-2
          border-gray-400"
          >
            Contact
          </p>
          <p className="py-4">
            Please submit the form below to get in touch with us <br />
            Or you can book an appointment by sending a text message to
            Whatsapp: +57 1234567890
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/14929def-c572-4793-b92b-c3478b16ad9e"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your 
                name"
              className="pb-1 bg-blue-100 border-2
                rounded-md text-gray-700 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your 
                email"
              className="my-4 pb-1 bg-blue-100 border-2
                rounded-md text-gray-700 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="pb-2 bg-blue-100 border-2 rounded-md
            text-gray-700 focus:outline-none"
            ></textarea>

            <button
              className="text-white bg-gradient-to-b
            from-cyan-500 to-blue-500 px-10 my-8 mx-auto
            items-center rounded-md hover:scale-110 duration-300 pt-1"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
