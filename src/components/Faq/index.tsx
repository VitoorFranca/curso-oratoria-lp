'use client'

import FaqItem from "./FaqItem";

const Faq = () => {
    return (
        <ul className="flex gap-6 flex-col max-w-screen-xl">
            <FaqItem
                question="QUAL A CARGA HORÁRIA DO CURSO?"
                response={<>A carga horária é de <strong>18 horas</strong>.</>}
                questionId="q-1"
                responseId="resp-1"
            />
            <FaqItem
                question={"O certificado gratuito do curso é reconhecido pelo MEC? E como posso obtê-lo?".toLocaleUpperCase()}
                response="O certificado gratuito do curso não é reconhecido pelo MEC e pode ser baixado em formato digital após a conclusão do curso, seguindo as instruções na plataforma do curso."
                questionId="q-two-certificate-mec"
                responseId="resp-two-certificate-mec"
            />
            {/* <FaqItem
                question="O QUE EU TENHO DIREITO AO FAZER A INSCRIÇÃO?"
                response="Estará incluso na sua inscrição o certificado que será entregue em mãos ao final do curso e coffee break em todos os dias de aula."
                questionId="q-2"
                responseId="resp-2"
            /> */}
            {/* <FaqItem
                question="As aulas são gravadas?"
                response="Basta só nos sinalizar que iremos te transferir de turma, sem problema."
                questionId="q-3"
                responseId="resp-3"
            /> */}
            <FaqItem
                question="QUAIS OS MEIOS DE PAGAMENTO?"
                response="Você pode fazer a sua inscrição pelo cartão de crédito em até 10x sem juros ou à vista (Pix ou Boleto)."
                questionId="q-4"
                responseId="resp-4"
            />
            <FaqItem
                question="O PAGAMENTO VIA CARTÃO É SEGURO?"
                response="Sim, só utilizamos as plataformas mais conhecidas e seguras do mercado, como o Pagseguro e Stone."
                questionId="q-5"
                responseId="resp-5"
            />
            <FaqItem
                question="Como funciona a garantia?"
                response={
                <div className="flex flex-col gap-3">
                    <p>
                        Dentro dos 7 dias, realizaremos o primeiro encontro, caso você não goste do conteúdo, você poderá solicitar o reembolso.
                    </p>
                    <p>
                    Por lei, você tem até 7 dias corridos após a data da compra para solicitar a devolução do valor pago em caso de desistência.
                    </p>
                </div>}
                questionId="q-garantia"
                responseId="resp-garantia"
            />
        </ul>
    )
}

export default Faq;