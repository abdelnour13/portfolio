import { IoSend } from "react-icons/io5";
import { Section } from "../common";
import { useActiveSection } from "../hooks";
import { ContentContext } from "../context";
import { useContext } from "react";

export function ContactMe(props : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {

    const [ref] = useActiveSection({ id : "contact-me" });
    const content = useContext(ContentContext);

    return (
        <Section title="Contact Me" description="Send me an email" {...props} id="contact-me" className="px-0" >
            <div className="sm:w-8/12 mx-auto p-8 rounded-xl sm:shadow-md bg border-color-1 sm:dark:border" ref={ref} >
                <h3 className="text-2xl font-medium" >Send me an email</h3>
                <p className="mb-6 text-gray-500 text-sm w-full" >
                    this email will be sent to the address&nbsp; 
                    <a 
                        href="mailto:ab.fellah@esi-sba.dz" 
                        className="text-color-1 hover:text-color-1-hover hover:underline" 
                    >
                        {content?.email}
                    </a>.
                </p>
                <form className="[*&>*]:mb-6" >
                    <div>
                        <input 
                            placeholder="Full Name"
                            className="p-3 bg-color-1 bg-opacity-10 w-full rounded-md outline-color-1"
                        />
                    </div>
                    <div>
                        <input 
                            placeholder="Email address"
                            className="p-3 bg-color-1 bg-opacity-10 w-full rounded-md outline-color-1"
                        />
                    </div>
                    <div>
                        <input 
                            placeholder="Subject"
                            className="p-3 bg-color-1 bg-opacity-10 w-full rounded-md outline-color-1"
                        />
                    </div>
                    <div>
                        <label className="mb-2 block" >What do you want to say ?</label>
                        <textarea placeholder="content"
                            className="p-3 bg-color-1 bg-opacity-10 w-full rounded-md outline-color-1 resize-none h-40" 
                        />
                    </div>
                    <button className="sm:text-base text-sm sm:p-4 p-3 rounded-md bg-color-1 text-white flex gap-2 items-center hover:bg-color-1-hover" >
                        <div>Send</div>
                        <IoSend />
                    </button>
                </form>
            </div>
        </Section>
    )
}