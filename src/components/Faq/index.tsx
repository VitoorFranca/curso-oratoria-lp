'use client'

import FaqItem from "./FaqItem";

const Faq = () => {
    return (
        <ul className="flex gap-6 flex-col max-w-screen-xl">
            <FaqItem
                question="QUAL A CARGA HORÁRIA DO CURSO?"
                response="A carga horária é de 16 horas."
                questionId="q-1"
                responseId="resp-1"
            />
            <FaqItem
                question="O QUE EU TENHO DIREITO AO FAZER A INSCRIÇÃO?"
                response="Estará incluso na sua inscrição o certificado que será entregue em mãos ao final do curso e coffee break em todos os dias de aula."
                questionId="q-2"
                responseId="resp-2"
            />
            <FaqItem
                question="SE EU TIVER UM IMPREVISTO E NÃO PUDER PARTICIPAR NA DATA QUE EU ME INSCREVI, O QUE ACONTECE?"
                response="Basta só nos sinalizar que iremos te transferir de turma, sem problema."
                questionId="q-3"
                responseId="resp-3"
            />
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
        </ul>
    )
}

export default Faq;