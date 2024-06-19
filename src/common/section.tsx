import { twMerge } from 'tailwind-merge'

export interface ISection extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    title : string;
    description : string;
};

export function Section(props : ISection) {

    const { className,title,description,children,id,...others } = props;

    return (
        <section className={twMerge("w-full sm:px-0 px-6",className)} {...others} >
            <span id={id} className='block relative -top-20 invisible' ></span>
            <h2 className="sm:text-4xl text-2xl font-bold w-fit mx-auto mb-2" >{title}</h2>
            <p className="text-gray-500 font-light w-fit mx-auto sm:mb-16 mb-6 text-sm text-center" >{description}</p>
            {children}
        </section>
    )
}