"use client";

import { menuItems } from "@/app/lib";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";

export const NavbarMobile = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="lg:hidden">
        <Menu />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 data-[state=open]:backdrop-blur-sm bg-white/10" />
        <Dialog.Content
          className={`
          fixed top-0 right-0 
          w-3/4 min-h-full
          bg-teal-800 text-white 
          p-8 pt-16 
          opacity-0 
          data-[state=open]:opacity-100 transition
          `}
        >
          <Dialog.Close className="absolute top-6 right-6">
            <X />
          </Dialog.Close>
          <nav>
            <ul className="tracking-wide divide-y-2 divide-black/20">
              {menuItems.map(({ name, href }) => (
                <li key={href}>
                  <Dialog.Close className="w-full text-left">
                    <a href={href} className="block py-6">
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
  );
};
