'use client';

import Image from "next/image";
import Button from "../Button";

interface Props {
    show: boolean;
    handleClosePopup: () => void
}

const Popup = ({ show, handleClosePopup }: Props) => {

    if(!show) return <></>;

    return (
        <>
            <div
                className={`fixed min-h-[100vh] min-w-[100vw] z-[100] pointer-events-auto bg-black opacity-75 inset-0`}
                onClick={handleClosePopup}>
            </div>

            <div className="z-[999] flex-wrap flex flex-col justify-center min-w-[20rem] items-center p-6 gap-12 fixed top-2/4 left-2/4 bg-zinc-950 translate-x-[-50%] translate-y-[-50%] rounded-lg shadow-[1px_1px_23px_0px_#ecc94b]">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <h1 className="text-5xl font-bold text-green-400">
                        Parabéns
                    </h1>

                    <p className="text-xl">Você acaba de ser premiado com 4 Ebooks de bônus</p>
                </div>


                <div className="flex gap-3 flex-wrap justify-center">
                    <Image className="cursor-pointer" width={100} height={180} src="/ebooks/ebook1.jpeg" alt="Ebook" />
                    <Image className="cursor-pointer" width={100} height={180} src="/ebooks/ebook2.jpeg" alt="Ebook" />
                    <Image className="cursor-pointer" width={100} height={180} src="/ebooks/ebook3.jpeg" alt="Ebook" />
                    <Image className="cursor-pointer" width={100} height={180} src="/ebooks/ebook4.jpeg" alt="Ebook" />
                </div>


                <div className="flex flex-row gap-8 xs:flex-wrap flex-wrap-reverse p-5">
                    <Button error={true} handleClick={handleClosePopup} className="w-[216px] min-h-[78px]">Permanecer com medo de falar em Público</Button>
                    <Button className="w-[216px] h-[78px]">Inscrever-se e receber Ebooks de bônus</Button>
                </div>
            </div>
        </>
    );
}

export default Popup;