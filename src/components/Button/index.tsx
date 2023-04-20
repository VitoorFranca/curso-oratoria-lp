interface Props {
    children: any;
}

const Button = ({ children } :Props) => {
    return (
        <button className="bg-green-400 shadow shadow-green-300 p-4 rounded-md text-zinc-50 font-bold hover:opacity-50 transition-opacity">{children}</button>
    )
}

export default Button;