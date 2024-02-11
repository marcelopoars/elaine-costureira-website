import Image from "next/image";

import {
  Calendar,
  Clock3,
  Clock3Icon,
  PencilRuler,
  Scissors,
  Shirt,
  Star,
} from "lucide-react";

import elaineImage from "./assets/elainde-gouvea-costureira.jpg";

// CLientes
import revesteLogo from "./assets/clientes/reveste-logo.png";
import toucasDaLola from "./assets/clientes/toucas-da-lola.png";

export default function Home() {
  return (
    <main>
      <section className="bg-teal-50/50 py-20 lg:py-20">
        <div className="w-full mx-auto max-w-[1280px] flex items-center justify-between gap-12 px-6 lg:px-12">
          <div className="flex-1 max-w-[700px]">
            <h1 className="text-xl text-teal-700 font-semibold mb-3">
              Elaine Gouvea
            </h1>
            <p className="text-3xl leading-snug lg:text-4xl lg:leading-snug xl:text-5xl xl:leading-snug mb-6">
              Costureira com mais de 30 anos de experiência em{" "}
              <strong className="text-teal-700">confecção</strong>,{" "}
              <strong className="text-teal-700">montagem</strong> e{" "}
              <strong className="text-teal-700">reformas em geral</strong>.
            </p>

            <ul className="flex flex-wrap gap-2">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <li key={index}>
                    <Star className="text-yellow-400 fill-yellow-400" />
                  </li>
                ))}
              <li className="lg:ml-2 whitespace-nowrap">
                Nota máxima nas avaliações Google.
              </li>
            </ul>
          </div>

          <div className="hidden lg:block rounded-s-full border-8 border-teal-600">
            <div className="rounded-s-full overflow-hidden  border-y-8 border-teal-600">
              <Image
                src={elaineImage}
                alt="Foto Costureira Elaine Gouvea"
                className="lg:max-w-[280px] xl:max-w-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="servicos">
        <div className="bg-teal-50/50 w-full h-6 shadow-xl" />

        <div className="w-full mx-auto max-w-[1280px] py-20 lg:py-24 px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl lg:text-center mb-12 lg:mb-16">
            Serviços
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <article className="bg-fuchsia-100 text-fuchsia-900 py-10 px-8 rounded-lg shadow-xl">
              <Shirt className="size-16 -translate-x-1 mb-8" />
              <h3 className="text-3xl font-semibold pb-4 mb-4 border-b-2 border-fuchsia-900">
                Confecção
              </h3>
              <ul className="text-lg space-y-3">
                <li>Camisas</li>
                <li>Cama, mesa e banho</li>
              </ul>
            </article>
            <article className="bg-sky-100 text-sky-900 py-10 px-8 rounded-lg shadow-xl">
              <PencilRuler className="size-16 -translate-x-1 mb-8" />
              <h3 className="text-3xl font-semibold pb-4 mb-4 border-b-2 border-sky-900">
                Montagem
              </h3>
              <ul className="text-lg space-y-3">
                <li>Blazers Femininos</li>
                <li>Calças</li>
                <li>Calças Leggings</li>
                <li>Caminhas</li>
                <li>Jalecos</li>
                <li>Jaquetas</li>
                <li>Toucas</li>
              </ul>
            </article>
            <article className="bg-rose-100 text-rose-900 py-10 px-8 rounded-lg shadow-xl">
              <Scissors className="size-16 -translate-x-1 mb-8" />
              <h3 className="text-3xl font-semibold pb-4 mb-4 border-b-2 border-rose-900">
                Reformas
              </h3>
              <ul className="text-lg space-y-3">
                <li>Ajustes</li>
                <li>Bainha</li>
                <li>Troca de Ziper</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="consertos-na-hora" className="bg-teal-50/50">
        <div className="bg-white w-full h-6 shadow-xl" />

        <div className="w-full mx-auto flex flex-col items-start lg:items-center gap-6 lg:max-w-[900px] lg:text-center py-20 lg:py-40 px-6 lg:px-12">
          <Clock3 className="size-20 text-teal-600 " />
          <h2 className="text-4xl lg:text-5xl">Consertos na hora</h2>
          <p className="text-xl lg:text-2xl">
            Um atendimento personalizado para lhe oferecer mais agilidade e uma
            melhor experiência.{" "}
            <strong>Ajustes e reparos feitos na hora sob agendamento</strong>.
          </p>
          <p className="text-xl lg:text-2xl">Agende agora o seu serviço:</p>
          <a
            href="https://api.whatsapp.com/send?phone=5551998503513&text=Olá! Gostaria de agendar um horário de atendimento."
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 bg-teal-700 text-white font-semibold py-4 px-6 rounded-full uppercase tracking-wide lg:hover:bg-teal-800 transition"
          >
            <Calendar /> Agendar horário
          </a>
        </div>
      </section>

      <section id="clientes" className="">
        <div className="bg-teal-50/50 w-full h-6 shadow-xl" />

        <div className="w-full mx-auto max-w-[1280px] px-6 lg:px-12 py-20 lg:py-40">
          <h2 className="text-4xl lg:text-5xl lg:text-center mb-12 lg:mb-16">
            Clientes
          </h2>

          <div className="flex flex-wrap items-center lg:justify-center gap-12 ">
            <a
              href="https://www.revestedesign.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={revesteLogo}
                alt="Logo da empresa Reveste"
                className="w-32 lg:w-40"
              />
            </a>
            <a
              href="https://www.instagram.com/toucasdalola"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={toucasDaLola}
                alt="Logo da empresa Toucas da Lola"
                className="w-32 lg:w-40"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
