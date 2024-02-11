import { menuItems } from "@/app/lib";

export const Header = () => {
  return (
    <header className="bg-teal-600 text-teal-50 py-4 drop-shadow-xl">
      <div className="w-full mx-auto max-w-[1280px] lg:flex items-center justify-between px-6 lg:px-12">
        <h1>
          <span className="text-3xl lg:text-4xl font-bold">
            elaine{" "}
            <span className="text-white text-xl lg:text-2xl font-light text-right">
              costureira
            </span>
          </span>
        </h1>

        <nav className="hidden lg:block">
          <ul className="font-semibold lg:flex items-center gap-8">
            {menuItems.map(({ name, href }) => (
              <li key={href}>
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
