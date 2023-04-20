export default function Home() {
  return (
    <main className="">
      <section className="h-[58rem]">

        <div className="flex flex-col items-center justify-center gap-4 p-8 pt-16">
          <h1 className="text-3xl font-medium">Ganhe confiança em apresentações importantes com o nosso curso de oratória</h1>
          <h2 className="text-lg">Supere o medo e a timidez na comunicação e torne-se um comunicador mais forte e envolvente. Descubra como!</h2>
        </div>

        <div className="w-full h-5/6 flex-col flex pt-12 items-center gap-12">
          <div className="bg-slate-600 md:h-4/6 md:w-8/12 w-4/5 h-72"/>

          <button className="bg-green-400 shadow shadow-green-300 p-4 rounded-md text-zinc-50 font-bold hover:opacity-50 transition-opacity">Quero falar em público com segurança</button>

        </div>

      </section>







      <section className="flex flex-col items-center">
        <div className="max-w-5xl flex flex-col gap-6 text-xl px-12">
          <h2>Você já perdeu alguma oportunidade importante na vida por não conseguir se expressar com segurança?</h2>
          <h3>Nossa metodologia de oratória foi criada especialmente para pessoas desejam falar em público com confiança e impacto.</h3>
          <h2>Mas antes de entender melhor esse método que já transformou a vida de milhares de pessoas por todo o Brasil.</h2>
          <h3>Nossa metodologia de oratória foi criada por quem já passou pela timidez e conhece as consequências de não conseguir se expressar com qualidade.</h3>
        </div>
      </section>
    </main>
  )
}
