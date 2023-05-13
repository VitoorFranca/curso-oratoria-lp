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
                question={"O curso disponibiliza certificado?".toLocaleUpperCase()}
                response="Sim. Após a conclusão da mentoria, ficará disponível seu certificado no formato PDF."
                questionId="q-two-certificate-mec"
                responseId="resp-two-certificate-mec"
            />
            <FaqItem
                question="QUAIS OS MEIOS DE PAGAMENTO?"
                response="Você pode fazer a sua inscrição pelo cartão de crédito em até 12x sem juros ou à vista (Pix ou Boleto)."
                questionId="q-4"
                responseId="resp-4"
            />
            <FaqItem
                question="COMO VAI SER OS ENCONTROS ONLINE?"
                response="Vamos ter Quatro encontros online nos dias 03, 10, 17 e 24 de junho. Serão 4 sábados consecutivos de Curso."
                questionId="q-5"
                responseId="resp-5"
            />
            <FaqItem
                question="COMO FUNCIONA A GARANTIA?"
                response="As 10 aula gravadas ficaram disponíveis assim que a compra do curso ser efetuada, os demais bônus liberamos após 7 dias da compra. Você terá 7 dias desde o momento da compra para solicitar reembolso caso não goste do conteúdo."
                questionId="q-garantia"
                responseId="resp-garantia"
            />
        </ul>
    )
}

export default Faq;