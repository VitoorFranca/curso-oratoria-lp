'use client'
interface Props {
    question: string;
    response: string;
    questionId: string;
    responseId: string;
}

const FaqItem = ({ question, response, questionId, responseId }: Props) => {

    function toggleResponse(id: string) {
        const element = document.getElementById(id);
        element?.classList.toggle('invisible');
        element?.classList.toggle('opacity-100');
        element?.classList.toggle('h-4/5');
      }

    function toggleQuestion(id: string) {
        const element = document.getElementById(id);
        element?.classList.toggle('text-green-400');;
    }

    function toggleBox(id: string) {
        const element = document.getElementById(id);
        element?.classList.toggle('h-auto');;
    }

    function handleClick({ boxId, questionId, responseId }: { boxId: string, questionId: string, responseId: string }) {
        toggleResponse(responseId);
        toggleQuestion(questionId);
        toggleBox(boxId)
    }

    const boxId = 'boxId'

    return (
        <li onClick={() => handleClick({boxId, questionId, responseId})} id={boxId} className="border-b-stone-700 h-auto w-full cursor-pointer border-separate border-b-2 transition-[height]" >
            <a id={questionId} className="font-bold text-xl" >{question}</a>
            <p id={responseId} className="h-0 text-lg invisible opacity-0 duration-300 py-4 px-8">{response}</p>
        </li>
    )
}

export default FaqItem;