import cn from "classnames";
import { FC, useState } from "react";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";

const links = [
  { name: "Speakers", href: "/#speakers" },
  { name: "Agenda", href: "/#agenda" },
  { name: "Sponsors", href: "/#sponsors" },
  { name: "Organizing team", href: "/#organizers" },
  { name: "FAQs", href: "/#faqs" },
];

const Header: FC = () => {
  const [active, setActive] = useState("");
  return (
    <header
      className={cn(
        "sticky top-2 mt-2 sm:top-4 sm:mt-4 z-50 px-4 w-full mx-auto max-w-screen-xl"
      )}
    >
      <div
        className={cn(
          "flex justify-between w-full max-w-screen-2xl rounded-xl shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border  py-2 sm:top-4 px-4 lg:px-8",
          "card card-foreground"
        )}
      >
        <Logo />
        <div className="hidden flex-1 lg:block pl-4">
          <nav className="flex flex-col gap-1 min-w-[240px] font-sans text-base font-normal text-blue-gray-700 mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            {links.map((link) => {
              return (
                <a
                  key={link.name}
                  className="font-medium"
                  href={link.href}
                  onClick={() => {
                    setActive(link.name);
                  }}
                >
                  <div
                    className={cn(
                      "w-full p-3 rounded-lg text-start transition-all hover:bg-opacity-80 focus:bg-opacity-80 active:bg-opacity-80 outline-none flex items-center gap-2 py-2 pr-4 text-sm",
                      "dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:active:bg-neutral-800",
                      "hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100",
                      "hover:text-slate-950 focus:text-slate-950 active:text-slate-950",
                      "dark:hover:text-slate-50 dark:focus:text-slate-50 dark:active:text-slate-50",
                      link.name === active &&
                        "dark:bg-neutral-800 bg-slate-100 text-slate-950 dark:text-slate-50"
                    )}
                  >
                    {link.name}
                  </div>
                </a>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center justify-between text-slate-900 dark:text-slate-50">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
export default Header;
