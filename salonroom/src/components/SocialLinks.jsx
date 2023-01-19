import React from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { GrFacebook } from "react-icons/gr";
import { FaWhatsappSquare } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Facebook <GrFacebook size={40} />
        </>
      ),
      href: "https://www.facebook.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Instagram <IoLogoInstagram size={40} />
        </>
      ),
      href: "https://instagram.com",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          GMail <HiOutlineMail size={40}  />
        </>
      ),
      href: "https://mail.google.com/mail",
      // href: "mailto:efraoviedo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Whatsapp <FaWhatsappSquare size={40} style={{ color: "white" }}/>
        </>
      ),
      href: "https://web.whatsapp.com/send?phone=+57 320 2937958",
      // href: "whatsapp://send?text=Tu%20mensaje%20aquí&phone=numero",
      style: "rounded-br-md bg-green-600",
      // download: true,
    },
  ];
  return (
   
    // <div   className="flex justify-around 
    // gap-4 text-center py-4 px-6 sm:px-0">

    <div
    className="pl-32 grid grid-rows-2 grid-cols-2 sm:grid-cols-4 gap-8 
     h-64 pt-36 px-8 z-30 bg-gradient-to-b from-gray-800 to-blue sm:pl-72 justify-end shrink"
    
    >

      {links.map(({ id, child, href, style, download }) => (
        <div
          key={id}
          className={
            "flex justify-between items-center w-32 h-7 text-xs px-2 ml-[-100px] hover:ml-[-40px] hover:rounded-md duration-500 bg-blue-500" +
            " " +
            style
          }
        >
          <a
            href={href}
            className="flex justify-between items-center w-full
       text-white"
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        </div>
      ))}

     




    </div>
  //  </div> 


  );
};

export default SocialLinks;
