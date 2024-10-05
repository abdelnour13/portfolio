import { IoSend } from "react-icons/io5";
import { Section } from "../common";
import { useActiveSection,useObject } from "../hooks";
import emailjs from '@emailjs/browser';
import { useState,useContext } from "react";
import { ContentContext } from "../context";
import { Toaster,toast } from "react-hot-toast";

interface IEmail {
    name: string;
    from: string;
    subject: string;
    content: string;
}

export function ContactMe(props : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) {

    const [ref] = useActiveSection({ id : "contact-me" });

    console.log(process.env);

    const content = useContext(ContentContext);

    const createInfo = () => ({
        name: "",
        from: "",
        subject: "",
        content: ""
    });

    const [info,updateInfo] = useObject<IEmail>(createInfo);

    const [loading,setLoading] = useState<boolean>(false);

    const sendEmail : React.MouseEventHandler<HTMLButtonElement> = async (ev) => {

        ev.preventDefault()

        setLoading(true);
        
        try {

            await emailjs.send('service_fzeo5ol','template_9lzh20s', {
                subject : info.subject,
                name : info.name,
                content : info.content,
                replay_to : info.from
            },{ publicKey:'9KAwsxV-gpa5LTITB' })

            toast.success("Email sent successfully");

        } catch (error) {
            toast.error("An error occured while sending email.");
        } finally {
            setLoading(false);
            updateInfo(createInfo);
        }

    }

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
                            value={info.name}
                            onChange={ev => updateInfo({ name : ev.target.value })}
                        />
                    </div>
                    <div>
                        <input 
                            placeholder="Email address"
                            className="p-3 bg-color-1 bg-opacity-10 w-full rounded-md outline-color-1"
                            value={info.from}
                            onChange={ev => updateInfo({ from : ev.target.value })}
                        />
                    </div>
                    <div>
                        <input 
                            placeholder="Subject"
                            className="p-3 bg-color-1 bg-opacity-10 w-full rounded-md outline-color-1"
                            value={info.subject}
                            onChange={ev => updateInfo({ subject : ev.target.value })}
                        />
                    </div>
                    <div>
                        <label className="mb-2 block" >What do you want to say ?</label>
                        <textarea placeholder="content"
                            className="p-3 bg-color-1 bg-opacity-10 w-full rounded-md outline-color-1 resize-none h-40" 
                            value={info.content}
                            onChange={ev => updateInfo({ content : ev.target.value })}
                        />
                    </div>
                    <button onClick={sendEmail} disabled={loading}
                        className="sm:text-base text-sm sm:p-4 p-3 rounded-md bg-color-1 text-white flex gap-2 items-center hover:bg-color-1-hover" 
                    >
                        <div>Send</div>
                        <IoSend />
                    </button>
                </form>
            </div>
            <Toaster position="bottom-center" reverseOrder={false}  />
        </Section>
    )
}