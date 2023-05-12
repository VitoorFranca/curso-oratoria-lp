import { Frown } from 'lucide-react';

interface Props {
    children: any;
    className?: string;
    other?: any;
}

const Card = ({ children, className, ...other } :Props) => {
    return (
        <div {...other} className={`bg-zinc-900 flex flex-col items-center text-center w-72 min p-12 font-bold rounded-md gap-5 ${className}`}>
            <Frown size={48} />
            
            <h2>
                {children}
            </h2>
        </div>
    );
}

export default Card;