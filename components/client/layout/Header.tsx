"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { useState } from "react";
import DevThemeSwitcher from "@/components/client/DevThemeSwitcher";
import DevSiteStateSwitcher from "@/components/client/DevSiteStateSwitcher";
import { useSiteState } from "@/components/client/SiteStateProvider";
import type { Feature } from "@/lib/site-state/types";

const navItems: ReadonlyArray<{
  label: string;
  href: string;
  feature?: Feature;
}> = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", feature: "aboutUs" },
  { label: "Venue", href: "/venue", feature: "venue" },
  { label: "Activities", href: "/activities", feature: "activities" },
  { label: "Schedule", href: "/schedule", feature: "eventSchedule" },
  { label: "Tickets", href: "/tickets", feature: "ticketRegistration" },
  { label: "Login", href: "/login", feature: "login" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isEnabled } = useSiteState();

  // Filter nav items by the current website lifecycle state.
  const visibleItems = navItems.filter(
    (item) => !item.feature || isEnabled(item.feature),
  );

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="border-border bg-brand-surface sticky top-0 z-20 flex items-center border-b p-4">
      <Link
        href="/"
        onClick={handleLogoClick}
        className="border-brand-secondary text-brand-text border px-2 py-1 text-sm"
      >
        BAH 2027
      </Link>

      {/* Desktop navigation - hidden on small screens */}
      <NavigationMenu.Root className="hidden md:flex md:flex-1 md:justify-center">
        <NavigationMenu.List className="flex justify-center gap-x-4 text-sm">
          {visibleItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavigationMenu.Item key={item.href}>
                <NavigationMenu.Link
                  href={item.href}
                  active={isActive}
                  render={<Link href={item.href} />}
                  className={
                    isActive
                      ? "text-brand-accent underline"
                      : "text-brand-text/70 hover:text-brand-accent hover:underline"
                  }
                >
                  {item.label}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            );
          })}
        </NavigationMenu.List>
      </NavigationMenu.Root>

      {/* Right side controls */}
      <div className="ml-auto flex items-center gap-2">
        {/* Dev-only theme & site-state switchers */}
        {process.env.NODE_ENV === "development" && (
          <>
            <DevThemeSwitcher />
            <DevSiteStateSwitcher />
          </>
        )}

        {/* Hamburger button - visible on mobile only */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          className="text-brand-text flex size-8 items-center justify-center md:hidden"
        >
          <span className="flex flex-col gap-1">
            <span
              className={`block h-px w-5 bg-current transition-transform ${
                mobileOpen ? "translate-y-1.25 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-current transition-transform ${
                mobileOpen ? "-translate-y-1.25 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 cursor-pointer bg-black/50 md:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <nav
        className={`border-border bg-brand-surface fixed top-0 right-0 z-40 flex h-full w-64 flex-col border-l p-6 pt-20 transition-transform duration-200 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        {visibleItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className={`border-border border-b py-3 text-sm transition-colors ${
                isActive
                  ? "text-brand-accent font-medium"
                  : "text-brand-text/70 hover:text-brand-accent"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
