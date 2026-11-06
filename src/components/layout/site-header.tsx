"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { contactCta, primaryNavigation, siteConfig } from "@/config/site";
import { NavDropdown } from "@/components/layout/nav-dropdown";
import type { NavigationItem } from "@/types/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMobileSubmenu, setExpandedMobileSubmenu] = useState<string | null>(null);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement | null>(null);

  // Manage body scroll locking and keyboard navigation
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    // Focus the first item
    firstFocusableRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      // Focus trap inside mobile menu dialog
      if (event.key === "Tab" && mobileMenuRef.current) {
        const focusables = mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            event.preventDefault();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const isActive = (item: NavigationItem) => {
    if (item.activePath) {
      return item.activePath === pathname;
    }
    return false;
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setExpandedMobileSubmenu(null);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-white/95 text-navy backdrop-blur-md">
      <div className="container-page flex min-h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-aqua-strong"
          aria-label="Odontto Contabilidade — página inicial"
        >
          <Image
            src="/logo-odontto-cor-escura.png"
            alt="Odontto Contabilidade"
            width={178}
            height={51}
            priority
            className="h-auto w-36 sm:w-44"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                {item.children && item.children.length > 0 ? (
                  <NavDropdown item={item} isActive={isActive(item)} />
                ) : (
                  <Link
                    href={item.href}
                    aria-current={isActive(item) ? "page" : undefined}
                    className="nav-link"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <Link href={contactCta.href} className="button button-primary hidden lg:inline-flex">
          <span>{contactCta.label}</span>
          <ArrowRight size={16} aria-hidden="true" />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-border/80 bg-white text-navy transition-colors hover:bg-offwhite lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
          aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        >
          {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-20 bottom-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-20 bg-navy/60 backdrop-blur-sm transition-opacity"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div
            id="menu-mobile"
            ref={mobileMenuRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="menu-mobile-title"
            className="relative z-10 max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border/80 bg-white px-5 py-6 shadow-2xl flex flex-col justify-between"
          >
            <div className="flex items-center justify-between gap-4">
              <p
                id="menu-mobile-title"
                className="text-sm font-extrabold uppercase tracking-wider text-navy"
              >
                Menu
              </p>
              <button
                type="button"
                onClick={closeMenu}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-border bg-white text-navy hover:bg-offwhite"
                aria-label="Fechar menu de navegação"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Navegação mobile" className="mt-4">
              <ul className="grid gap-1">
                {primaryNavigation.map((item, index) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isSubmenuOpen = expandedMobileSubmenu === item.label;

                  return (
                    <li key={item.href} className="border-b border-border/40 pb-1">
                      {hasChildren ? (
                        <div>
                          <button
                            type="button"
                            onClick={() =>
                              setExpandedMobileSubmenu(isSubmenuOpen ? null : item.label)
                            }
                            className="mobile-nav-link flex w-full items-center justify-between"
                            aria-expanded={isSubmenuOpen}
                          >
                            <span>{item.label}</span>
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-200 ${
                                isSubmenuOpen ? "rotate-180 text-aqua-strong" : "text-secondary"
                              }`}
                              aria-hidden="true"
                            />
                          </button>
                          {isSubmenuOpen && (
                            <ul className="ml-4 mt-1 grid gap-1 border-l-2 border-aqua-light pl-3">
                              {item.children!.map((subItem) => (
                                <li key={subItem.href}>
                                  <Link
                                    onClick={closeMenu}
                                    href={subItem.href}
                                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-secondary hover:text-navy"
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <Link
                          ref={index === 0 ? firstFocusableRef : undefined}
                          onClick={closeMenu}
                          href={item.href}
                          aria-current={isActive(item) ? "page" : undefined}
                          className="mobile-nav-link"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 pt-2">
                <Link
                  onClick={closeMenu}
                  href={contactCta.href}
                  className="button button-primary w-full justify-center shadow-md text-base"
                >
                  <span>{contactCta.label}</span>
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>

              {/* Quick direct contact channels */}
              <div className="mt-6 border-t border-border/70 pt-5">
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-secondary">
                  Fale com a Odontto
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={siteConfig.whatsapp.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-aqua-light p-2.5 font-bold text-navy border border-aqua/30 transition-colors hover:bg-aqua/20"
                  >
                    <MessageCircle size={15} className="text-aqua-strong" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={siteConfig.phone.href}
                    className="flex items-center justify-center gap-2 rounded-xl bg-offwhite p-2.5 font-bold text-navy border border-border/80 transition-colors hover:bg-white"
                  >
                    <Phone size={15} className="text-navy" aria-hidden="true" />
                    <span>Telefone</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
