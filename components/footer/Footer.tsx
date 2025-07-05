import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { TbBrandInstagramFilled } from 'react-icons/tb';

const Footer = () => {
    return (
        <div className="bg-green-500 ">
            <div className='max-w-[1600px] w-full  gap-8 mx-auto  flex flex-col md:flex-row justify-between items-center py-[40px] px-6 md:px-12 lg:px-[188px] text-white text-sm font-medium'>
                <div className="flex  flex-wrap flex-col md:flex-row  justify-start gap-6 mb-2 md:mb-0">
                    <a href="#" className="text-white text-lg font-semibold font-Inter  leading-7   text-center md:text-start hover:underline ">Contact Us</a>
                    <a href="#" className="text-white text-lg font-semibold font-Inter  leading-7   text-center md:text-start hover:underline ">Terms & Conditions for Drivers</a>
                    <a href="#" className="text-white text-lg font-semibold font-Inter  leading-7   text-center md:text-start hover:underline ">Terms & Conditions for Garages</a>
                    <a href="#" className="text-white text-lg font-semibold font-Inter  leading-7   text-center md:text-start hover:underline ">Privacy Policy</a>
                    <a href="#" className="text-white text-lg font-semibold font-Inter  leading-7   text-center md:text-start hover:underline ">Cookie Policy</a>
                </div>
                <div className="flex gap-[18px]">
                    <FaFacebookF className="w-5 h-5 cursor-pointer hover:opacity-80 outline-1 rounded p-0.5" />
                    <TbBrandInstagramFilled  className="w-5 h-5 cursor-pointer hover:opacity-80 outline-1 rounded p-0.5" />
                    <FaSquareXTwitter  className="w-5 h-5 cursor-pointer hover:opacity-80 outline-1 rounded p-0.5" />
                    <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:opacity-80 outline-1 rounded p-0.5" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
