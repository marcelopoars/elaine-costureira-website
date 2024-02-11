import { MailIcon, Phone } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "..";

export const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white">
      <div className="w-full h-6 shadow-xl" />
      <div className="w-full mx-auto max-w-[1280px] space-y-10 py-20 px-6 lg:px-12">
        <div className="flex border-b border-b-teal-800 pb-2">
          <span className="text-3xl lg:text-4xl font-bold">
            elaine{" "}
            <span className="text-xl lg:text-2xl font-light text-right">
              costureira
            </span>
          </span>
        </div>
        <div className="md:flex lg:justify-end gap-40 space-y-10 md:space-y-0">
          <div id="contato">
            <h2 className="font-bold text-xl mb-4">Contato</h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone />
                <a href="tel:51998503513">{"(51) 99850-3513"}</a>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon />
                <a href="mailto:elainegouveasilva@gmail.com">
                  elainegouveasilva@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="fill-white w-[27px]" />
                <a
                  href="https://www.instagram.com/elainecoestureira"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @elainecostureira
                </a>
              </li>
            </ul>
          </div>

          <address className="not-italic">
            <h3 className="font-bold text-xl mb-4">Endereço</h3>
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

      <a
        href="https://api.whatsapp.com/send?phone=5551998503513&text=Olá%20Elaine!%20Encontrei%20seu%20site%2C%20e%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 xl:bottom-12 xl:right-12 flex items-center gap-2 text-lg font-semibold bg-[#25D366] hover:bg-[#075E54] p-3 lg:px-5 rounded-full transition drop-shadow-xl"
        aria-label="Clique para enviar uma mensagem via WhatsApp"
      >
        <WhatsAppIcon className="fill-slate-50 size-12" />
        <span className="hidden lg:block">WhatsApp</span>
      </a>
    </footer>
  );
};
