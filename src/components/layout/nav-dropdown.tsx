"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import type { NavigationItem } from "@/types/navigation";

type NavDropdownProps = {
  item: NavigationItem;
  isActive: boolean;
  isDark?: boolean;
};

export function NavDropdown({ item, isActive, isDark = false }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const submenuId = useId();

  // Close on click outside or Escape
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const buttonClasses = isDark
    ? `flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-bold transition-all cursor-pointer ${
        isActive || isOpen
          ? "bg-white/20 text-white shadow-xs"
          : "text-white/80 hover:bg-white/10 hover:text-white"
      }`
    : `nav-link flex items-center gap-1.5 cursor-pointer ${
        isActive || isOpen ? "bg-white text-navy shadow-sm" : ""
      }`;

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={submenuId}
        onClick={() => setIsOpen((prev) => !prev)}
        className={buttonClasses}
      >
        <span>{item.label}</span>
        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180 text-lime" : isDark ? "text-white/60" : "text-secondary"
          }`}
          aria-hidden="true"
        />
      </button>

      {isOpen && item.children && item.children.length > 0 && (
        <div
          id={submenuId}
          className="reveal-soft absolute left-0 top-full z-50 mt-2 w-56 rounded-2xl border border-border bg-white p-2 shadow-soft ring-1 ring-black/5"
        >
          <ul aria-label={`Submenu de ${item.label}`}>
            {item.children.map((subItem) => (
              <li key={subItem.href}>
                <Link
                  href={subItem.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center rounded-xl px-3 py-2.5 text-sm font-semibold text-secondary hover:bg-offwhite hover:text-navy transition-colors"
                >
                  {subItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
