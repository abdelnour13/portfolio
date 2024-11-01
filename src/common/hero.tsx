import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { ContactMe } from "../common/contact-me";
import { LuUpload } from "react-icons/lu";
import { useContext } from "react";
import { ContentContext } from "../context";


const keywords = [
  "21",
  "Artificial Intelligence",
  "Data Science",
  "Software Development",
  "Full-Stack",
];

export function Hero() {

  const content = useContext(ContentContext);

  return (
    <div className="flex items-center sm:py-16 sm:gap-28 max-w-4xl m-auto">
      <div className="flex items-center">
        <div className="text-color-1">
          <ul className="flex-col [*&>*]:mb-6 sm:mx-0 mx-4" >
            <li><a href={content?.social["github"]} className="hover:text-color-1-hover" ><FiGithub size={20} /></a></li>
            <li><a href={content?.social["linkedin"]} className="hover:text-color-1-hover"><FiLinkedin size={20} /></a></li>
            <li><a href={content?.social["twitter"]} className="hover:text-color-1-hover"><FiTwitter size={20} /></a></li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center max-w-2xl sm:mx-0 mx-4">
        <div className="flex sm:flex-row flex-col-reverse flex-grow gap-14">
          <div className="sm:w-6/12">
            <div className="[*&>*]:mb-3 sm:mb-16 mb-4">
              <h1 className="dark:text-color-2 text-color-3 sm:text-4xl text-2xl font-semibold">
                Hi,i'm Abdelnour
              </h1>
              <h3 className="text-gray-600 sm:text-2xl text-xl">AI Engineer</h3>
              <div className="text-gray-500">{keywords.join(" | ")}</div>
            </div>
            <ContactMe className="sm:mb-14 mb-3" />
            <div>
              <a className="inline-flex gap-2 items-center py-4 text-color-1 font-medium hover:text-color-1-hover" 
                href="https://github.com/abdelnour13/abdelnour13/blob/main/cv.pdf?raw=true" 
              >
                <div>Download Resume</div>
                <LuUpload size={20} />
              </a>
            </div>
          </div>
          <div className="relative sm:w-6/12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="174.22 132.64 268.63 230.74"
              className="w-full"
            >
              <defs>
                <clipPath id="clip-path">
                  <path
                    d="M441.7539367675781,237.1727752685547C432.4607442220052,200.13089243570963,343.71727752685547,135.2094294230143,301.9633483886719,132.72251892089844C260.2094192504883,130.23560841878256,209.55496978759766,187.8272272745768,191.23036193847656,222.25131225585938C172.90575408935547,256.6753972371419,164.2670110066732,317.1466115315755,192.0157012939453,339.26702880859375C219.76439158121744,361.387446085612,316.0994644165039,371.9895248413086,357.7225036621094,354.97381591796875C399.34554290771484,337.9581069946289,451.04712931315106,274.2146581013997,441.7539367675781,237.1727752685547C432.4607442220052,200.13089243570963,343.71727752685547,135.2094294230143,301.9633483886719,132.72251892089844"
                    fill="#50c5b6"
                  />
                </clipPath>
              </defs>
              <path
                    d="M441.7539367675781,237.1727752685547C432.4607442220052,200.13089243570963,343.71727752685547,135.2094294230143,301.9633483886719,132.72251892089844C260.2094192504883,130.23560841878256,209.55496978759766,187.8272272745768,191.23036193847656,222.25131225585938C172.90575408935547,256.6753972371419,164.2670110066732,317.1466115315755,192.0157012939453,339.26702880859375C219.76439158121744,361.387446085612,316.0994644165039,371.9895248413086,357.7225036621094,354.97381591796875C399.34554290771484,337.9581069946289,451.04712931315106,274.2146581013997,441.7539367675781,237.1727752685547C432.4607442220052,200.13089243570963,343.71727752685547,135.2094294230143,301.9633483886719,132.72251892089844"
                    fill="#50c5b6"
                  />
              <image
                href={content?.images.hero}
                x="174.22"
                y="132.64"
                width="268.63"
                height="230.74"
                clip-path="url(#clip-path)"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
