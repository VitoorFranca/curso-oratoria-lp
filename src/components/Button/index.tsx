interface Props {
    children: any;
    className?: string;
}

const Button = ({ children, className } :Props) => {
    return (
        <button className={`bg-green-400 shadow shadow-green-300 p-4 rounded-md text-zinc-50 font-bold hover:opacity-50 transition-all ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${className}`}>
            <a href="https://pay.kiwify.com.br/GKrjtXI" target="blank">
                {children}
            </a>
            </button>
    )
}

export default Button;