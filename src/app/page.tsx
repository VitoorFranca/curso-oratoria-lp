import Card from "@/components/Card";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import Image from "next/image";
import { CheckCircle } from 'lucide-react';
import ParaQuem from "@/utils/para-quem"

export const metadata = {
  title: 'Curso de oratória',
  description: 'Curso de oratória para pessoas que tem dificuldade para falar em publico',
}

export default function Home() {

  return (
    <main className="flex flex-col justify-center items-center gap-12 scroll-smooth">
      
      <section id="1" className="h-[50rem]">

        <div className="flex flex-col items-center justify-center gap-4 p-8 pt-16">
          <h1 className="text-3xl font-medium">Ganhe confiança em apresentações importantes com o curso <strong>Oratória Eficaz</strong></h1>
          <h2 className="text-lg">Supere o medo e a timidez na comunicação e torne-se um comunicador mais forte e envolvente. Descubra como!</h2>
        </div>

        <div className="w-full h-5/6 flex-col flex pt-12 items-center gap-12">
          <div className="bg-slate-600 md:h-4/6 md:w-8/12 w-4/5 h-72"/>
          <Button>Quero falar em público com segurança</Button>

        </div>

      </section>

      <section id="2" className="bg-zinc-900 w-full flex flex-col items-center py-24">
        <div className="max-w-5xl flex flex-col gap-6 text-xl px-8 line-clamp-6">

          <span>
            Você já perdeu oportunidades importantes na vida por não conseguir se expressar com segurança? Sabemos que a comunicação é uma habilidade crucial em todas as áreas da vida, e a falta dela pode ter um impacto significativo em nossa trajetória. Seja para apresentar um projeto no trabalho, falar em uma reunião de negócios ou até mesmo em uma entrevista de emprego, é importante saber se comunicar com clareza e confiança.
          </span>
          <span>
            Foi pensando nisso que criamos uma metodologia de <strong>oratória eficiente</strong> e prática, que já transformou a vida de milhares de pessoas em todo o Brasil. Com técnicas comprovadas e adaptadas para a realidade de cada participante, nossos treinamentos de oratória oferecem um caminho seguro e efetivo para aprimorar a habilidade de <strong>falar em público</strong>, <strong>controlar a ansiedade</strong> e transmitir suas ideias com impacto. Não deixe que a falta de habilidade em se comunicar te impeça de alcançar seus objetivos. Invista em sua <strong>habilidade de comunicação</strong> e transforme sua vida com a nossa metodologia de oratória.
          </span>

        </div>
      </section>

      <section id="mentor" className=" w-full flex md:flex-row flex-col-reverse items-center justify-center gap-16 py-24">
        <div className="max-w-[35rem] w flex flex-col justify-center gap-12 p-4">
          <h2 className="font-bold text-3xl">QUEM SERÁ O SEU MENTOR?</h2>
          <div className="flex flex-col gap-8 text-xl">
            <p>
            O Professor Pedro Barroso é escritor, dramaturgo; poeta, ator e Diretor Teatral.
            Trabalha com Oratória desde 1972. E para servir à nobre arte de falar em público,
            ingressou no centro de excelência e referencia na arte teatral no Brasil, a
            Faculdade de Música e Artes Cênicas da UFBA, onde se graduou em Direção Teatral e
            Interpretação em 1979.
            <strong>
            Instrutor em várias instituições públicas e privadas, dentre elas:  AASP Associação dos Advogados de São Paulo – União dos Vereadores do Brasil; União dos Vereadores da Bahia; Banco Itaú. É apresentar do programa Cidadania, Direitos e Deveres na Rede Baiana de Rádio.
            </strong>
            </p>
            <p>
            Pedro Barroso é um especialista em comunicação, oratória e desenvolvimento pessoal, com ampla experiência em diversas áreas. Seu trabalho se baseia no autoconhecimento e na transmissão de conhecimentos para aprimorar a expressividade de seus clientes.
            </p>
            <p>
            O seu principal objetivo é fazer com que todos os seus alunos, mentorados e leitores possam construir uma comunicação confiante e carismática para que, dessa forma, dêem voz aos seus propósitos e, possam levar as suas mensagens para o mundo!
            </p>
          </div>
          <Button>Quero falar em público com segurança</Button>
        </div>

        <div className="relative md:w-[24rem] md:h-[26rem] w-[21rem] h-[24rem]">
          <Image src='/mentor.png' alt="Professor Pedro Barroso" className="object-cover object-right w-full h-full absolute opacity-100" width={550} height={7000}/>
          <div className="bg-gradient-to-b from-transparent via-transparent to-black w-full md:h-[26rem] h-[24rem] absolute z-10  " />
        </div>
        
      </section>


      <section id="3" className=" flex flex-col justify-center items-center px-12 py-12 gap-16 max-w-screen-xl">
        <h1 className="text-4xl">
        ESSE CURSO É PARA VOCÊ QUE:
        </h1>
        <div className="flex flex-wrap gap-12 justify-center">
          <Card className="sm:flex hidden">Perde oportunidades.</Card>
          <Card>Foi prejudicado profissionalmente por não conseguir dizer “não” para tarefas que não eram da sua função.</Card>
          <Card>Se sente incapaz para tudo que faz na vida.</Card>
          <Card className="sm:flex hidden">Tem a sua vida profissional estagnada</Card>
          <Card>Vive com raiva de si mesmo por não conseguir se expressar.</Card>
          <Card>Não vive plenamente, pois sempre tem o receio de ser julgado e criticado pelos amigos, familiares e colegas de trabalho…</Card>
        </div>
        
        <div className="flex justify-center">
          <Button>Quero falar em público com segurança</Button>
        </div>

      </section>

      <section id="3" className="bg-zinc-900 flex flex-col justify-center items-center px-12 py-12 gap-16 w-full mb-16">
      <h1 className="text-4xl">
        O CURSO <strong>ORATÓRIA EFICAZ</strong> é para pessoas que:
      </h1>

        <ul className="flex flex-col gap-8 justify-center max-w-[43rem]">
          {ParaQuem?.map((text, i) => {
            return (
              <li className="grid grid-flow-col grid-rows-1 gap-5 w-auto" key={i}> <CheckCircle className="text-green-400 w-14 h-14 col-span-1 col-start-1" /> <span className="col-span-1 col-start-2 text-left">{text}</span></li>
            )
          })}
          
        </ul>
      </section>

      <section id="3" className=" flex flex-col justify-center items-center max-w-screen-xl gap-16">
        <h1 className="text-4xl font-bold text-center">VALOR DO INVESTIMENTO</h1>
        <div className="bg-zinc-900 flex items-center flex-col gap-14 p-10 rounded-md">
          <div className="bg-zinc-800 w-96 rounded-md flex flex-col items-center justify-center gap-5 p-8 ">
            <span className="text-2xl">EM ATÉ 12X</span>
            <span className="text-3xl">R$<strong className="text-5xl text-green-400">14,76</strong></span>
            <span className="text-2xl">ou R$ <strong>147,00</strong> À VISTA</span>

          </div>
          <Button className="w-80">Garantir Vaga</Button>
          <Image src='/formas-de-pagamento1.png.webp' alt="Formas de Pagamento" className="w-full h-full" width={550} height={7000}/>
        </div>


      </section>

      <section id="4" className="bg-zinc-900 w-full flex flex-col justify-center items-center px-12 py-12 gap-16">
        <h2 className="text-5xl font-bold">Perguntas frequentes</h2>

        <Faq />

      </section>
    </main>
  )
};