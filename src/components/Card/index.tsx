interface Props {
    children: any;
    className?: string;
    other?: any;
}

const Card = ({ children, className, ...other } :Props) => {
    return (
        <div {...other} className={`bg-zinc-900 flex items-center text-center w-72 min p-12 font-bold rounded-md ${className}`}>
            <h3>
                {children}
            </h3>
        </div>
    );
}

export default Card;