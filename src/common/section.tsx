import { twMerge } from 'tailwind-merge'

export interface ISection extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    title : string;
    description : string;
};

export function Section(props : ISection) {

    const { className,title,description,children,...others } = props;

    return (
        <section className={twMerge("w-full",className)} {...others} >
            <h2 className="text-4xl font-bold w-fit mx-auto mb-2" >{title}</h2>
            <p className="text-gray-500 font-light w-fit mx-auto mb-16 text-sm" >{description}</p>
            {children}
        </section>
    )
}