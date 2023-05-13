import Card from "@/components/Card";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import Image from "next/image";
import { CheckCircle, ChevronsRight, CheckCheck } from 'lucide-react';
import ParaQuem from "@/utils/para-quem"
import ComoFunciona from "@/utils/como-funciona"
import TeraAcesso from "@/utils/tera-acesso"

export const metadata = {
  title: 'Mentoria Oratória Eficaz - Pedro Barroso',
  description: 'Mentoria Oratória Eficaz é para pessoas que tem dificuldade para falar em publico',
  icons: {
    icon: '/favicon.ico'
  }
}


export default function Home() {

  return (
      <main className="flex flex-col justify-center items-center gap-12 scroll-smooth">
        
        <section id="1" >
  
          <div className="flex flex-col items-center justify-center gap-4 p-8 pt-12">
            <h1 className="text-3xl font-medium">Ganhe confiança em apresentações importantes com a <strong>Mentoria Oratória Eficaz</strong></h1>
            <h2 className="text-lg">Supere o medo e a timidez na comunicação e torne-se um comunicador mais forte e envolvente. Descubra como!</h2>
          </div>

          <div className="w-full flex-col flex pt-12 items-center gap-12">
            <div className="bg-slate-600  w-5/6" style={{ position: "relative", paddingTop: "56.25%" }}>
              <iframe style={{ border: "none", position: "absolute", top: 0, left: 0 }}  src="https://drive.google.com/file/d/1UIvW5ppn0lrHZeg20COS_5zNu3P7BpNq/preview" width="100%" height="100%"></iframe>
            </div>

            <Button>Quero falar em público com segurança</Button>

          </div>

        </section>

        <section className="bg-zinc-900 w-full flex flex-col items-center py-14 bg-image-2">
          <div className="flex flex-col gap-6 text-xl px-8 line-clamp-6 max-w-[53rem]">

            <span className="text-center">
             Transforme sua vida com a oratória. Invista em si mesmo e alcance seu potencial máximo. Não deixe escapar oportunidades importantes. Torne-se um comunicador confiante. Supere limitações e conquiste o sucesso desejado. Não deixe que a falta de habilidade te impeça de crescer. Abrace a oratória e conquiste seu lugar.
            </span>

          </div>
        </section>

        <section id="mentor" className="bg-zinc-900 w-full flex md:flex-row flex-col-reverse items-center justify-center gap-16 py-24">
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
            <div className="bg-gradient-to-b from-transparent via-transparent to-zinc-900 w-full md:h-[26rem] h-[24rem] absolute z-10  " />
          </div>
          
        </section>


        <section id="3" className=" flex flex-col justify-center items-center px-12 py-12 gap-16 max-w-screen-xl">
          <h1 className="text-4xl">
          ESSA MENTORIA É PARA VOCÊ QUE:
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

        <section id="37" className="bg-zinc-900 flex flex-col items-center px-12 py-12 gap-16 w-full">
          <h1 className="text-4xl">
            COMO FUNCIONA A <strong>MENTORIA</strong>?
          </h1>

          <div className="w-full flex md:flex-row flex-col-reverse items-center justify-center gap-6">

            <ul className="flex flex-col justify-center gap-8 max-w-[34rem]">
              {
                ComoFunciona?.map((text, i) => {
                  return (
                    <li key={i} className="flex justify-center items-center gap-6">
                      <div>
                        <ChevronsRight className="text-green-400 w-[70px] h-[70px]" />
                      </div>
                      <p className="text-xl font-bold flex flex-col">
                        {text}
                        <span className="w-3/6 h-1 bg-green-400 mt-1"></span>
                      </p>
                    </li>
                  );
                })
              }

            </ul>

            <div className="relative md:w-[24rem] md:h-[34rem] w-[21rem] h-[30rem]">
              <Image src='/pedrob.png' alt="Professor Pedro Barroso" className="object-cover object-right w-full h-full absolute opacity-100" width={550} height={300}/>
              <div className="bg-gradient-to-b from-transparent via-transparent to-zinc-900 w-full md:h-[34rem] h-[30rem] absolute z-10  " />
            </div>

          </div>

          
          {/* <div className="flex justify-center">
            <Button>Quero falar em público com segurança</Button>
          </div> */}

        </section>
        <section className="flex flex-col items-center px-12 py-12 gap-16 w-full bg-image-1">
          <h1 className="text-4xl">
            O QUE VOCÊ TERA ACESSO
          </h1>

            <ul className="flex flex-col justify-center gap-8 max-w-[24rem]">
              {
                TeraAcesso?.map((text, i) => {

                  if(i === TeraAcesso.length - 1) return;

                  return (
                    <li key={i} className="flex items-center gap-6 border-2 px-4 py-4 border-green-400 border-solid rounded-full">
                      <div>
                        <CheckCircle className="text-green-400 w-[50px] h-[50px]" />
                      </div>
                      <p className="text-xl font-bold flex flex-col">
                        {text}
                      </p>
                    </li>
                  );
                })
              }

                    <li className="flex items-center gap-6 border-2 px-4 py-4 border-green-400 border-solid rounded-3xl">
                      <div>
                        <CheckCircle className="text-green-400 w-[50px] h-[50px]" />
                      </div>
                      <p className="text-xl font-bold flex flex-col">
                        {TeraAcesso[TeraAcesso.length - 1]}
                      </p>
                    </li>
            </ul>
          
          <div className="flex justify-center">
            <Button>Quero falar em público com segurança</Button>
          </div>

        </section>

        <section id="3" className="bg-zinc-900 flex flex-col justify-center items-center px-12 py-12 gap-16 w-full mb-16">
        <h1 className="text-4xl">
          A MENTORIA <strong>ORATÓRIA EFICAZ</strong> é para pessoas que:
        </h1>

          <ul className="flex flex-col gap-8 justify-center max-w-[43rem]">
            {ParaQuem?.map((text, i) => {
              return (
                <li className="grid grid-flow-col grid-rows-1 gap-5 w-auto" key={i}> <CheckCheck className="text-green-400 w-14 h-14 col-span-1 col-start-1" /> <span className="col-span-1 col-start-2 text-left">{text}</span></li>
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