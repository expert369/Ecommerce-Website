import React from "react";
import footerImage from "../../assets/website/footer.jpg";
import footerLogo from "../../assets/logo.jpg";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaMobileAlt,
    FaLocationArrow,
} from "react-icons/fa";

const FooterImg = {
  backgroundImage: `url(${footerImage})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    links: "/#",
  },
  {
    title: "About",
    links: "/#about",
  },
  {
    title: "Contact",
    links: "/#contact",
  },
  {
    title: "Blog",
    links: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={FooterImg} className="text-white">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-44 pt-5">
          {/* shop details */}
          <div className="py-8 px-4">
            <h1
            className="sm:text-3xl text-xl font-bold sm:text-left
            text-justify mb-3 flex items-center gap-3"
            >
                <img src={footerLogo} alt="" 
                className="max-w-[50px]"
                />
                Lyka Artspace</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, error. Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, iure.</p>
          </div>
          {/* Footer Links */}
          <div className="grid grid-cols-3 sm:grid-col-3 py-4 px-6
          col-span-2 md:pl-10">
            <div>
                <div className="py-8 px-4">
                    <h1 className="sm:text-xl text-xl font-bold sm:text-left 
                    text-justify mb-3">Important Links</h1>
                    <ul className="flex flex-col gap-3">
                        {FooterLinks.map((data) => (
                            <li className="cursor-pointer hover:text-primary
                            hover:translate-x-1 duration-300 text-gray-200" 
                            key={data.title}>
                                <span>{data.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <div className="py-8 px-4">
                    <h1 className="sm:text-xl text-xl font-bold sm:text-left 
                    text-justify mb-3">Links</h1>
                    <ul className="flex flex-col gap-3">
                        {FooterLinks.map((data) => (
                            <li className="cursor-pointer hover:text-primary
                            hover:translate-x-1 duration-300 text-gray-200" 
                            key={data.title}>
                                <a href={data.links}>{data.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* social links */}
            <div className="space-y-3 mt-8">
                <div className="flex space-x-3">
                    <a href="#">
                        <FaInstagram className="text-3xl"/>
                    </a>
                    <a href="#">
                        <FaFacebook className="text-3xl"/>
                    </a>
                    <a href="#">
                        <FaLinkedin className="text-3xl"/>
                    </a>
                </div>
                <div className="mt-6">
                    <div className="flex items-center gap-3">
                        <FaLocationArrow className="text-xl"/>
                        <p>Tanque Ilawod Roxas City, Capiz</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                        <FaMobileAlt className="text-xl"/> 
                        <p>+63 9217232619</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
