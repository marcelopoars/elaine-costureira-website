import { menuItems } from "@/app/lib";
import { Logo, NavbarMobile } from "..";

export const Header = () => {
  return (
    <header className="bg-teal-700 text-white py-4 drop-shadow-xl">
      <div className="w-full mx-auto max-w-[1440px] flex items-center justify-between px-6 lg:px-12">
        <Logo />

        <nav className="hidden lg:block">
          <ul className="tracking-wide lg:flex items-center gap-8">
            {menuItems.map(({ name, href }) => (
              <li key={href}>
                <a href={href} className="hover:border-b-2 focus-visible:ring-2 focus-visible:ring-white outline-none transition py-1">{name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <NavbarMobile />
      </div>
    </header>
  );
};
