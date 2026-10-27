import { forwardRef } from "react";
import { Link } from "gatsby";

export type NavProps = {
  selected: string;
  useLinks?: boolean;
  pages: [string, string, number][];
  goToPage?: (page: number) => void;
};

export const NavBar = forwardRef<HTMLElement, NavProps>(
  ({ pages, selected, useLinks = false, goToPage }, ref) => {
    const handleClick = (
      e: React.MouseEvent,
      target: [string, string, number],
    ) => {
      if (useLinks) {
        return;
      }

      e.preventDefault();

      if (goToPage) {
        const item = document.querySelector(target[1]);
        const pos = (item?.getBoundingClientRect()?.top ?? 0) + window.scrollY;

        const offset = window.matchMedia("(min-width: 1024px)").matches
          ? 72
          : 0;
        window.scrollTo({
          top: Math.max(0, pos - offset),
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
        });

        goToPage(target[2]);
      }
    };

    return (
      <nav
        ref={ref}
        aria-label="Nawigacja główna"
        className="sticky top-0 z-200 flex min-h-28 w-full items-center justify-center bg-secondary py-6 lg:h-18 lg:min-h-0 lg:py-0 max-lg:static"
      >
        <div className="site-container flex flex-wrap items-center justify-between gap-x-1 gap-y-4 sm:gap-x-4">
          {pages.map((page) => (
            <Link
              key={page[1]}
              to={page[1]}
              aria-current={selected === page[1] ? "location" : undefined}
              className={`group relative inline-block text-center font-ui text-xs font-medium whitespace-nowrap no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-sm sm:tracking-[0.25em] lg:text-base ${selected === page[1] ? "text-primary" : "text-body"}`}
              onClick={(e) => handleClick(e, page)}
            >
              <span aria-hidden="true" className="invisible">{page[0]}</span>
              <span className="absolute top-0 left-0 text-xs transition-[font-size] duration-250 ease-out group-hover:text-sm group-active:text-2xs motion-reduce:transition-none sm:text-sm sm:group-hover:text-base sm:group-active:text-xs lg:text-base lg:group-hover:text-lg lg:group-active:text-sm">
                {page[0]}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    );
  },
);
