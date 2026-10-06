"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/site";
import AmbientSound from "@/components/AmbientSound";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);

  // Client-side navigation keeps focus on the clicked link, which would hold
  // the dropdown open via :focus-within — blur it, as a full page load would.
  const closeAll = () => {
    setMenuOpen(false);
    setDdOpen(false);
    (document.activeElement as HTMLElement | null)?.blur();
  };

  // Escape closes the menus (as in Aji's script); links close them on click.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDdOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("lehar-theme", next);
    } catch {
      /* ignore */
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#081116" : "#F7F9FA");
  };

  return (
    <header className="site">
      <div className="wrap nav">
        <Link className="logo has-img" href="/" onClick={closeAll} aria-label="Léhar Studio home">
          <Image className="logo-for-light" src="/images/lehar-logo-dark.avif" alt="" width={124} height={124} priority />
          <Image className="logo-for-dark" src="/images/lehar-logo-light.avif" alt="" width={124} height={124} priority />
          <span className="logo-text">Léhar Studio</span>
        </Link>

        <nav className={`main${menuOpen ? " open" : ""}`} id="menu" aria-label="Main">
          <ul>
            {NAV.map((item) =>
              item.children ? (
                <li key={item.label} className={`has-dd${ddOpen ? " open" : ""}`}>
                  <button className="dd" aria-haspopup="true" aria-expanded={ddOpen} onClick={() => setDdOpen((o) => !o)}>
                    {item.label} <i className="fa-solid fa-chevron-down" style={{ fontSize: ".7rem" }} />
                  </button>
                  <ul className="dd-menu">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} onClick={closeAll} aria-current={pathname === c.href ? "page" : undefined}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} onClick={closeAll} aria-current={pathname === item.href ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="tools">
          <Link className="btn book" href="/booking" onClick={closeAll}>
            Book Your First Step
          </Link>
          <AmbientSound />
          <button className="theme-btn" onClick={toggleTheme} aria-label="Switch colour theme">
            <i className="fa-solid fa-moon" />
            <i className="fa-solid fa-sun" />
          </button>
          <button
            className="burger"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </div>
    </header>
  );
}
