import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container ">
      <section className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <section className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={50} />
          </a>
          <h2 className="text-white text-base mt-8 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </h2>
          <section className="mt-8 flex gap-4 hover:text-slate-gray">
            {socialMedia.map((data, index) => {
              return (
                <a key={index} href={data.website} target="blank" className="flex justify-center items-center w-12 h-12 bg-white hover:bg-slate-200 rounded-full">
              
                    <img
                      src={data.src}
                      alt={data.alt}
                      className="bg-white rounded-full"
                      width={24}
                      height={24}
                    />
                  
                </a>
              );
            })}
          </section>
        </section>

        <section className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap font-montserrat">
          {footerLinks.map((link, index) => {
            return (
              <div
                key={index}
                className="text-2xl leading-normal font-medium mb-6 text-white"
              >
                <h2>{link.title}</h2>

                <ul>
                  {link.links.map((link, index) => (
                    <li
                      className="mt-3 text-base leading-normal text-white-400 hover:text-slate-gray"
                      key={index}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </section>
      </section>

      <section className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <section className='flex flex-1 justify-start items-center gap-2 font-montserrat'>
          <img src={copyrightSign} alt=""  width={20} height={20} className=' m-0' />
          <p>Copyright. All rights reserved.</p>
        </section>

        <section className="hover:text-slate-gray max-sm:mt-2">
          <a href="#">Terms & Conditions</a>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
