import image from "../images/author.webp";
import { AboutMeText } from "../data/about-me";

export const AboutMe = () => (
  <section className="scroll-mt-0 py-12 lg:scroll-mt-18 lg:py-0" id="about-me" aria-labelledby="about-title">
    <div className="site-container flex min-h-svh flex-col items-center gap-8 lg:min-h-[calc(100svh-var(--spacing)*18)] lg:flex-row lg:items-end lg:gap-6">
      <img
        className="mx-auto h-auto max-h-[80vmin] w-auto max-w-full shrink-0 object-contain object-bottom lg:mx-0 lg:max-w-3/5"
        src={image}
        width={683}
        height={1024}
        alt="Patrycja Purgał"
      />

      <div className="min-w-0 font-text text-sm lg:min-h-[70svh] lg:flex-1">
        <h2 id="about-title" className="pb-1.5 text-center font-ui text-xl font-medium text-primary">
          O mnie
        </h2>
        <div className="py-3 text-justify">
          <AboutMeText />
        </div>
      </div>
    </div>
  </section>
);
