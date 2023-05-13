import Router from "next/router";

interface Props {
    children: any;
    className?: string;
    error?: boolean;
    handleClick?: () => void
}

const Button = ({ children, className, error, handleClick } :Props) => {

    return (
        <a href={handleClick ? '' : 'https://pay.kiwify.com.br/GKrjtXI'} target="blank" onClick={handleClick} className={`bg-green-400 shadow shadow-white-300 p-4 rounded-md text-neutral-700 font-bold hover:opacity-50 transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-center ${className}`}>
            {children}
        </a>
    )
}

export default Button;