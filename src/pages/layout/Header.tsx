import { LangToggle } from "@/components/lang-toggle";
import { Button } from "@/components/ui/button";
import { useGetNavLinks } from "@/lib/react-query/query/nav.query";
import { ENUMs } from "@/lib/enums";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { t } = useTranslation();
  const { data: links = [] } = useGetNavLinks();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-primary py-4 md:py-5 flex flex-row justify-between items-center gap-4 shadow-md">
      <Link to={ENUMs.PAGES.HOME} className="flex items-center gap-3 shrink-0">
        <img
          src="/images/logo_without_bg.png"
          alt="Opulent Property Group"
          className="h-10 w-auto object-contain"
        />
        <span className="hidden lg:block text-yellow text-xs font-bold uppercase tracking-[0.15em] max-w-[140px] leading-tight">
          {t("header.label")}
        </span>
      </Link>

      <nav className="hidden xl:block">
        <ul className="flex flex-row justify-center items-center gap-5">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-sm text-white/90 hover:text-yellow transition-colors duration-300",
                    isActive && "text-yellow font-semibold"
                  )
                }>
                {t(link.labelKey)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-3">
        <LangToggle />
        <Button
          render={<Link to={ENUMs.PAGES.CONTACT} />}
          className="hidden md:inline-flex font-semibold"
          size="lg">
          {t("header.button")}
        </Button>
        <button
          type="button"
          className="xl:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="absolute top-full inset-x-0 bg-primary border-t border-white/10 xl:hidden">
          <ul className="flex flex-col p-5 gap-3">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block py-2 text-white hover:text-yellow",
                      isActive && "text-yellow font-semibold"
                    )
                  }>
                  {t(link.labelKey)}
                </NavLink>
              </li>
            ))}
            <li>
              <Button
                render={
                  <Link
                    to={ENUMs.PAGES.CONTACT}
                    onClick={() => setOpen(false)}
                  />
                }
                className="w-full font-semibold mt-2"
                size="lg">
                {t("header.button")}
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
