"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { menuItems } from "@/app/lib";
import { Menu, X } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-teal-700 text-white py-4 drop-shadow-xl">
      <div className="w-full mx-auto max-w-[1280px] flex items-center justify-between px-6 lg:px-12">
        <h1>
          <span className="text-3xl lg:text-4xl font-bold">
            elaine
            <span className="text-white text-xl lg:text-2xl font-light text-right">
              costureira
            </span>
          </span>
        </h1>

        <nav className="hidden lg:block">
          <ul className="font-semibold tracking-wide lg:flex items-center gap-8">
            {menuItems.map(({ name, href }) => (
              <li key={href}>
                <a href={href}>{name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <Dialog.Root>
          <Dialog.Trigger className="lg:hidden">
            <Menu />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content className="fixed top-0 right-0 bottom-0 w-3/4 bg-teal-800 text-white p-8 pt-10">
              <Dialog.Close className="absolute top-6 right-6">
                <X />
              </Dialog.Close>
              <nav>
                <ul className="tracking-wide space-y-4 divide-y-2 divide-black/20">
                  {menuItems.map(({ name, href }) => (
                    <li key={href}>
                      <Dialog.Close>
                        <a href={href} className="block py-3">
                          {name}
                        </a>
                      </Dialog.Close>
                    </li>
                  ))}
                </ul>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
};
