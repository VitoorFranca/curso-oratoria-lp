interface Props {
    children: any;
    className?: string;
    error?: boolean;
    handleClick?: () => void
}

const Button = ({ children, className, error, handleClick } :Props) => {


    return (
        <button onClick={handleClick} className={`bg-green-400 shadow shadow-white-300 p-4 rounded-md text-zinc-50 font-bold hover:opacity-50 transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${className}`}>
            <a href={error ? '' : 'https://pay.kiwify.com.br/GKrjtXI'} target="blank">
                {children}
            </a>
            </button>
    )
}

export default Button;