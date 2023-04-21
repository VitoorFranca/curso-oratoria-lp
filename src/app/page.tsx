import Card from "@/components/Card";
import Button from "@/components/Button";
import Faq from "@/components/Faq";

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


      <section id="3" className="flex flex-col justify-center items-center px-12 py-12 gap-16 max-w-screen-xl">
        <div className="flex flex-wrap gap-12 justify-center">
          <Card className="sm:flex hidden">Perdeu oportunidades.</Card>
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