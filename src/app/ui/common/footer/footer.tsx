import { MailIcon, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-teal-600 text-teal-50">
      <div className="w-full h-6 shadow-xl" />
      <div className="w-full mx-auto max-w-[1280px] space-y-10 py-20 px-6 lg:px-12">
        <div className="flex border-b border-b-teal-400 pb-2">
          <span className="text-3xl lg:text-4xl font-bold">
            elaine{" "}
            <span className="text-xl lg:text-2xl font-light text-right">
              costureira
            </span>
          </span>
        </div>
        <div className="md:flex lg:justify-end gap-40 space-y-10 md:space-y-0">
          <div id="contato">
            <h4 className="font-bold text-xl mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <Phone />
                <a href="tel:5198503513">{"(51) 9850-3513"}</a>
              </li>
              <li className="flex gap-2">
                <MailIcon /> elainegouveasilva@gmail.com
              </li>
            </ul>
          </div>

          <address className="not-italic">
            <h4 className="font-bold text-xl mb-4">Endereço</h4>
            <ul className="space-y-2">
              <li>Rua Sevilha, 226 - Guajuviras</li>
              <li>Canoas-RS</li>
              <li>CEP: 92425-658</li>
            </ul>
          </address>
        </div>
      </div>

      <div className="bg-teal-800 text-sm text-teal-200 lg:text-center py-6 px-6 lg:px-12 space-y-6">
        <p>
          © {new Date().getFullYear()} | Elaine Costureira - Confecção, montagem
          e reformas em geral
        </p>

        <p>
          <span className="hidden lg:inline-block">Desenvolvido por</span>{" "}
          <a
            href="https://www.marcelopereira.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline underline-offset-4"
          >
            MP Software
          </a>
        </p>
      </div>
    </footer>
  );
};
