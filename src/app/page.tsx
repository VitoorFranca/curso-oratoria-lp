import Card from "@/components/Card";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import Image from "next/image";

export default function Home() {
  function toggleVisibility(id: string) {
    const element = document.getElementById(id);
    element?.classList.toggle('invisible');
    element?.classList.toggle('opacity-100');
    element?.classList.toggle('h-auto');
  }
  function toggleH3(id: string) {
    const element = document.getElementById(id);
    element?.classList.toggle('text-green-400');;
  }
  return (
    <main className="flex flex-col justify-center items-center gap-12 scroll-smooth">
      <section id="1" className="h-[50rem]">

        <div className="flex flex-col items-center justify-center gap-4 p-8 pt-16">
          <h1 className="text-3xl font-medium">Ganhe confiança em apresentações importantes com o nosso curso de oratória</h1>
          <h2 className="text-lg">Supere o medo e a timidez na comunicação e torne-se um comunicador mais forte e envolvente. Descubra como!</h2>
        </div>

        <div className="w-full h-5/6 flex-col flex pt-12 items-center gap-12">
          <div className="bg-slate-600 md:h-4/6 md:w-8/12 w-4/5 h-72"/>
          <Button>Quero falar em público com segurança</Button>

        </div>

      </section>

      <section id="2" className="bg-zinc-900 w-full flex flex-col items-center py-24">
        <div className="max-w-5xl flex flex-col gap-6 text-xl px-12">
          <h2>Você já perdeu alguma oportunidade importante na vida por não conseguir se expressar com segurança?</h2>
          <h3>Nossa metodologia de oratória foi criada especialmente para pessoas desejam falar em público com confiança e impacto.</h3>
          <h2>Mas antes de entender melhor esse método que já transformou a vida de milhares de pessoas por todo o Brasil.</h2>
          <h3>Nossa metodologia de oratória foi criada por quem já passou pela timidez e conhece as consequências de não conseguir se expressar com qualidade.</h3>
        </div>
      </section>

      <section id="mentor" className=" w-full flex md:flex-row flex-col-reverse items-center justify-center gap-16 py-24">
        <div className="max-w-[38rem] w flex flex-col gap-12 p-16">
          <h2 className="font-bold text-3xl">QUEM SERÁ O SEU MENTOR?</h2>
          <div className="flex flex-col gap-8 text-xl">
            <p>
            O Professor Pedro Barroso é escritor, dramaturgo; poeta, ator e Diretor Teatral.
            Trabalha com Oratória desde 1972. E para servir à nobre arte de falar em público,
            ingressou no centro de excelência e referencia na arte teatral no Brasil, a
            Faculdade de Música e Artes Cênicas da UFBA, onde se graduou em Direção Teatral e
            Interpretação em 1979.
            <strong>
            É Diretor Presidente do Centro de Oratória do Brasil (CEOBRA) e  Instrutor em várias instituições públicas e privadas, dentre elas:  AASP Associação dos Advogados de São Paulo – União dos Vereadores do Brasil; União dos Vereadores da Bahia; Banco Itaú. É apresentar do programa Cidadania, Direitos e Deveres na Rede Baiana de Rádio.
            </strong>
            </p>
            <p>
            Sua atuação no campo da comunicação, oratória e desenvolvimento pessoal é marcada pela transdisciplinariedade. Pedro Barroso, reúne todo o conhecimento que já acessou ao longo da sua trajetória pessoal, profissional e espiritual para contribuir com o desenvolvimento da expressividade de cada um que se conecta ao seu trabalho. O ponto de partida é o autoconhecimento.
            </p>
            <p>
            O seu principal objetivo é fazer com que todos os seus alunos, mentorados e leitores possam construir uma comunicação confiante e carismática para que, dessa forma, dêem voz aos seus propósitos e, possam levar as suas mensagens para o mundo!
            </p>
          </div>
          <Button>Quero falar em público com segurança</Button>
        </div>

        <div className="relative w-[28rem] h-[30rem]">
          <Image src='/mentor.png' alt="Professor Pedro Barroso" className="object-cover object-right w-full h-full absolute opacity-100" width={550} height={7000}/>
          <div className="bg-gradient-to-b from-transparent via-transparent to-black w-full h-[31rem] absolute z-10  " />
        </div>
        
      </section>


      <section id="3" className="flex flex-col justify-center items-center px-12 py-12 gap-16 max-w-screen-xl">
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

      <section id="4" className="bg-zinc-900 w-full flex flex-col justify-center items-center px-12 py-12 gap-16">
        <h2 className="text-5xl font-bold">Perguntas frequentes</h2>

        <Faq />

      </section>
    </main>
  )
};

// O Professor Pedro Barroso é escritor, dramaturgo; poeta, ator e Diretor Teatral. Trabalha com Oratória desde 1972. E para servir à nobre arte de falar em público, ingressou no centro de excelência e referencia na arte teatral no Brasil, a Faculdade de Música e Artes Cênicas da UFBA, onde se graduou em Direção Teatral e Interpretação em 1979.

 

// Doutor Honoris-Causa em reconhecimento internacional aos serviços prestados à arte e a cultura, outorgado pela Universidade Corporativa das Américas, pela Faculdade Einstein e Doctor Honoris Causa em Comunicação pela Erich Fromm World University Inc., do Estado da Florida/EUA

 

// Escreveu vários livros, dentre eles “Como Perder o Medo de Falar em Público” (Editora Minas) a “A Arte de Convencer Falando” (Editora Scortecci) e Você Sabe Falar em Público? (Editora Scortecci)  Seduzir com Palavras(Editora Scortecci)  e  A Flauta Que Fala  (Editora Scortecci). Amor e Tormenta no Mar da Bahia   (Editora Scortecci)  Os 4 Hábitos do Orador Eficaz (Editora Scortecci).  Conversas com o Lobisomem - Strip-tease na Biblioteca - A Batina Do Diabo

// Dentre outras obras suas destacam-se:  O Caçador de Místico; O Excomungado; Destino Amargo de um Poeta; Angélica; Vida Carniça; Gaizelina; Enquanto o Rei Dorme as Crianças Brincam; A Viúva Romântica; A Caminho do Céu, além dos vários títulos de edições esgotadas.

 

// Foi  o idealizador e fundador da Academia de Letras do Recôncavo,  ALER,  da qual faz parte.

 

// É Diretor Presidente do Centro de Oratória do Brasil (CEOBRA) e  Instrutor em várias instituições públicas e privadas, dentre elas:  AASP Associação dos Advogados de São Paulo – União dos Vereadores do Brasil; União dos Vereadores da Bahia; Escola Judicial TRT5 BA -  Escola da AGU Ba -  CERS Cursos Online; Brasil Jurídico; Sebrae; Centrhu – Central de Cursos e Pós-Graduações;   Sindicato dos Trabalhadores em Rádio TV e Publicidade do Estado da Bahia; Fórum Municipal para o Desenvolvimento Sustentável do Centro da Cidade de Salvador; Banco Itaú. É apresentar do programa Cidadania, Direitos e Deveres na Rede Baiana de Rádio.

 

// PEDRO BARROSO