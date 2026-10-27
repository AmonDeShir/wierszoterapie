import { PoemData, PoemReader } from "../components/poem-reader/poem-reader";

type Props = {
  poems: PoemData[];
};

export const Poems = ({ poems }: Props) => (
  <div
    className="flex min-h-svh scroll-mt-0 items-center py-12 lg:scroll-mt-18"
    id="poems"
  >
    <div className="site-container">
      <PoemReader poems={poems} />
    </div>
  </div>
);
