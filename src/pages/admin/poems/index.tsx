import { useEffect, useState } from "react";
import { PageProps, HeadProps, graphql } from "gatsby";

import { Page } from "../../../components/page/page";
import { Poem, PoemData } from "../../../components/poem-reader/poem-reader";
import { PoemContainer } from "../../../components/poem-reader/poem-container";
import { Button, SubmitButton } from "../../../components/button/button";
import { API_URL, request } from "../../../api";
import { ChangesDetectorBar } from "../../../components/changes-detector/changes-detector";

const PoemsPage: React.FC<PageProps<DataType>> = ({ data }) => {
  const [poems, setPoems] = useState<PoemData[]>([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    request(`/poems`).then(({ data }) => setPoems(data));
  }, []);

  const handleDelete = (poem: PoemData) => {
    if (confirm(`Czy na pewno chcesz usunąć wiersz "${poem.title}"?`)) {
      setSelected(Math.max(0, selected - 1));
      setPoems((poems) => poems.filter(({ _id }) => _id !== poem._id));

      (async () => {
        await fetch(`${API_URL}/poems/${poem._id}`, { method: "delete" });
        await fetch(`${API_URL}/poems`)
          .then((data) => data.json())
          .then(setPoems);
      })();
    }
  };

  return (
    <Page>
      <div className="flex h-full w-full flex-col items-center justify-start min-h-screen p-2.5">
        <ChangesDetectorBar data={data} forceUpdate={poems} />
        <div>
          <div className="mb-auto pb-1.5 text-center font-ui text-xl font-medium text-primary">
            Wiersze
          </div>
        </div>
        <div>
          {poems.map((poem) => (
            <div
              className={[
                "cursor-pointer text-left font-ui text-base font-medium",
                poems[selected]._id === poem._id ? "text-primary" : "text-body",
              ]
                .filter(Boolean)
                .join(" ")}
              key={poem._id}

              onClick={() =>
                setSelected(poems.findIndex(({ _id }) => _id === poem._id))
              }
            >
              {poem.title}
            </div>
          ))}

          <div className="flex w-full items-center justify-center">
            <div>
              <Button href="/admin/poems/new">Nowy</Button>
            </div>
          </div>
        </div>

        {poems[selected] && (
          <PoemContainer noAbsolute className="mt-6">
            <Poem key={poems[selected]._id} poem={poems[selected]} />
            <div className="flex w-full items-center justify-center">
              <div>
                <Button href={`/admin/poems/edit/${poems[selected]._id}`}>
                  Edytuj
                </Button>
              </div>
              <div>
                <SubmitButton onClick={() => handleDelete(poems[selected])}>
                  Usuń
                </SubmitButton>
              </div>
            </div>
          </PoemContainer>
        )}

        <div className="mt-auto flex w-full items-center justify-start">
          <div>
            <Button href="/admin" bigger>
              Panel Administratora
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default PoemsPage;

export function Head({ location }: HeadProps) {
  return <html lang="pl" />;
}

interface DataType {
  swapi: {
    getPoems: {
      _id: string;
      updated_at: number;
    }[];
  };
}

export const query = graphql`
  {
    swapi {
      getPoems {
        _id
        updated_at
      }
    }
  }
`;
