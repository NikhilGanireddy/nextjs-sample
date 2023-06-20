import React from "react";

import {RiInstagramFill} from "react-icons/ri";
import {BsGithub} from "react-icons/bs";
import {FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-4 flex justify-between items-center">
      <div>
        &copy; 2023 thegdp. All right recieved
      </div>
      <div className={"flex justify-center items-center gap-2 "}>
          <RiInstagramFill size={20}/>
          <BsGithub size={20}/>
          <FaLinkedin size={20}/>
      </div>
    </div>
  );
};

export default Footer;
