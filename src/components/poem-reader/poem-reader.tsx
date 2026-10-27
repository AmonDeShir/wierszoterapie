import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import gsap from "gsap";
import { PoemContainer } from "./poem-container";

export type PoemData = {
  _id: string;
  text: string;
  title: string;
  author: string;
  date?: string;
  dedication?: string;
  updated_at?: number;
};

type Props = {
  poems: PoemData[];
};

export const Poem = ({ poem }: { poem: PoemData }) => (
  <div className="max-w-full">
    <p className="pb-2.5 text-left text-sm font-bold">{poem.author}</p>
    <h2 className="pt-2.5 pb-5 text-left font-text text-xl font-bold text-primary">
      {poem.title}
    </h2>
    {poem.dedication && <p className="text-right text-sm">{poem.dedication}</p>}
    <p className="text-left text-sm whitespace-pre-line">{poem.text}</p>
    {poem.date && <p className="pt-2.5 text-right text-sm">{poem.date}</p>}
  </div>
);

const arrowClasses =
  "flex size-10 shrink-0 cursor-pointer items-center justify-center text-dark transition-[scale,color] duration-200 hover:scale-120 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary aria-disabled:cursor-default motion-reduce:transition-none";

export const PoemReader = ({ poems }: Props) => {
  const [selected, setSelected] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const animation = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => () => { animation.current?.kill(); }, []);

  const changePoem = (direction: number) => {
    if (isChanging || poems.length < 2) return;

    const selectNext = () =>
      setSelected((current) => (current + direction + poems.length) % poems.length);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      selectNext();
      return;
    }

    setIsChanging(true);
    animation.current = gsap
      .timeline({ onComplete: () => setIsChanging(false) })
      .to(ref.current, { opacity: 0, duration: 0.4, ease: "power1.inOut" })
      .call(() => flushSync(selectNext))
      .to(ref.current, { opacity: 1, duration: 0.5, ease: "power1.inOut" });
  };

  const poem = poems[selected] ?? poems[0];
  if (!poem) return null;

  return (
    <div className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-8">
      <button
        type="button"
        aria-label="Poprzedni wiersz"
        className={arrowClasses}
        disabled={poems.length < 2}
        aria-disabled={isChanging || poems.length < 2}
        onClick={() => changePoem(-1)}
      >
        <FaChevronLeft className="size-5" aria-hidden="true" />
      </button>
      <PoemContainer
        ref={ref}
        noAbsolute
        aria-live="polite"
        aria-atomic="true"
        className="min-w-0"
      >
        <Poem key={poem._id} poem={poem} />
      </PoemContainer>
      <button
        type="button"
        aria-label="Następny wiersz"
        className={arrowClasses}
        disabled={poems.length < 2}
        aria-disabled={isChanging || poems.length < 2}
        onClick={() => changePoem(1)}
      >
        <FaChevronRight className="size-5" aria-hidden="true" />
      </button>
    </div>
  );
};
