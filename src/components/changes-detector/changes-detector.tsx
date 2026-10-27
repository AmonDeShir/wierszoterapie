import { useEffect, useState } from "react";
import { Button } from "../button/button";
import { API_URL } from "../../api";
import { PoemData } from "../poem-reader/poem-reader";

type Props = {
  forceUpdate?: any;
  actualText?: string;
  needUpdateText?: string;
  hideWhenNotNeeded?: boolean;
  showNavButton?: boolean;
  data: {
    swapi: {
      getPoems: {
        _id: string;
        updated_at: number;
      }[];
    };
  };
};

export const ChangesDetector = ({
  data,
  showNavButton,
  hideWhenNotNeeded,
  actualText,
  needUpdateText,
  forceUpdate = 0,
}: Props) => {
  const [needUpdate, setNeedUpdate] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/poems`)
      .then((data) => data.json())
      .then((poems: PoemData[]) => {
        if (poems.length !== data.swapi.getPoems.length) {
          setNeedUpdate(true);
        }

        for (let i = 0; i < poems.length; i++) {
          const poem_a = poems[i];
          const poem_b = data.swapi.getPoems.find(
            ({ _id }) => _id === poem_a._id,
          );

          if (!poem_b || poem_a.updated_at !== poem_b.updated_at) {
            setNeedUpdate(true);

            return;
          }
        }
      });
  }, [forceUpdate]);

  if (needUpdate) {
    return (
      <div className="flex w-full max-w-5xl items-center justify-evenly">
        <div className="text-center font-ui text-xs">
          {needUpdateText ?? `Strona wymaga aktualizacji`}
        </div>
        {showNavButton && (
          <div>
            <Button className="m-0!" medium href="/admin/update">
              Panel aktualizacji
            </Button>
          </div>
        )}
      </div>
    );
  }

  if (hideWhenNotNeeded) {
    return null;
  }

  return (
    <div className="text-center font-ui text-xs">
      {actualText ?? "Strona jest aktualna"}
    </div>
  );
};

export const ChangesDetectorBar = ({
  data,
  forceUpdate,
}: Omit<
  Props,
  "needUpdateText" | "hideWhenNotNeeded" | "showNavButton" | "actualText"
>) => (
  <div className="mb-6 flex w-full items-center justify-evenly bg-dark p-2.5 text-white empty:hidden">
    <ChangesDetector
      data={data}
      forceUpdate={forceUpdate}
      needUpdateText="Wykryto zmiany w bazie danych. Przejdź do panelu aktualizacji aby wygenerować nową wersje strony"
      hideWhenNotNeeded
      showNavButton
    />
  </div>
);
