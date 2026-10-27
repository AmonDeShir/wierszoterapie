import { useEffect, useMemo, useState } from "react";
import { PageProps, HeadProps, graphql } from "gatsby";

import { Page } from "../../../components/page/page";
import { FileUploader } from "react-drag-drop-files";
import { extractRawText } from "mammoth/mammoth.browser";
import { nanoid } from "nanoid";
import { Poem, PoemData } from "../../../components/poem-reader/poem-reader";
import { Button } from "../../../components/button/button";

import { API_URL, request } from "../../../api";

const PoemsPage: React.FC<PageProps> = () => {
  const [lines, setLines] = useState<{ text: string; id: string }[]>([]);
  const [author, setAuthor] = useState<string>("Patrycja Purgał");
  const [title, setTitle] = useState<string>();
  const [dedication, setDedication] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [removed, setRemoved] = useState<string[]>([]);
  const [tool, setTool] = useState(0);
  const [saving, setSaving] = useState(false);

  const handleFileUpload = async (file: File) => {
    try {
      const buffer = await file.arrayBuffer();
      const text = await extractRawText({ arrayBuffer: buffer }).then(
        (res) => res.value,
      );
      const lines = text
        .trim()
        .replaceAll("\n\n", "\n")
        .split("\n")
        .map((text) => ({ text, id: nanoid() }));

      setLines(lines);
      setTitle(lines[0]?.id);
      setLocation(lines.at(-1)?.id);

      if (lines.length >= 2 && lines[1].text === "") {
        setRemoved([lines[1].id]);
      }
    } catch {}
  };

  const data = useMemo<PoemData>(
    () => ({
      _id: "",
      author: author,
      title: lines.find(({ id }) => id === title)?.text ?? "Nieznany",
      date: lines.find(({ id }) => id === location)?.text,
      dedication: lines.find(({ id }) => id === dedication)?.text,
      text: lines
        .filter(
          ({ id }) =>
            id !== title &&
            id !== location &&
            id !== dedication &&
            !removed.includes(id),
        )
        .map((line) => line.text)
        .join("\n"),
    }),
    [lines, author, title, dedication, location, removed],
  );

  const handleLineClick = (id: string) => {
    if (id === title) {
      setTitle(undefined);

      if (tool === 1) {
        return;
      }
    }

    if (id === dedication) {
      setDedication(undefined);

      if (tool === 2) {
        return;
      }
    }

    if (id === location) {
      setLocation(undefined);

      if (tool === 3) {
        return;
      }
    }

    if (removed.includes(id)) {
      setRemoved((ids) => ids.filter((item) => item != id));

      if (tool === 4) {
        return;
      }
    }

    switch (tool) {
      case 0:
        break;
      case 1:
        setTitle(id);
        break;
      case 2:
        setDedication(id);
        break;
      case 3:
        setLocation(id);
        break;
      case 4:
        setRemoved([...removed, id]);
        break;
    }
  };

  const handleSave = () => {
    setSaving(true);
    const { _id, ...poem } = data;

    request(`/poems`, "post", poem).then(
      () => (window.location.pathname = "/admin/poems"),
    );
  };

  const handleCancel = () => {
    if (confirm("Czy na pewno chcesz usunąć ten wiersz?")) {
      window.location.pathname = "/admin/poems";
    }
  };

  return (
    <Page>
      <div className="flex h-full w-full flex-col items-center justify-start p-2.5">
        <div className="mb-auto pb-1.5 text-center font-ui text-xl font-medium text-primary">
          Nowy wiersz
        </div>
        {!saving && lines.length == 0 && (
          <div className="flex w-full items-center justify-center">
            <FileUploader
              handleChange={handleFileUpload}
              name="file"
              types={["DOCX"]}
            />
          </div>
        )}

        {!saving && lines.length > 0 && (
          <div className="flex w-full items-center justify-between max-sm:flex-col">
            <div className="flex w-full flex-col sm:w-1/2 items-center justify-start pl-2.5 max-sm:pt-12 max-sm:before:absolute max-sm:before:left-0 max-sm:before:w-screen max-sm:before:content-['']">
              <label className="block cursor-pointer text-left text-base font-normal">
                Autor
                <input
                  className="block border-0 border-b border-solid border-black p-1.5 text-base [transition:border-color_0.25s] hover:border-primary hover:outline-none focus:border-primary focus:outline-none mb-6 w-full max-w-64"
                  value={author}
                  onInput={(e) => setAuthor(e.currentTarget.value)}
                />
              </label>
              <div className="flex w-full max-w-64 items-center justify-between pb-6 text-left">
                <div
                  className={[
                    "cursor-pointer font-ui text-xs select-none [transition:color_0.25s,font-weight_0.25s]",
                    tool === 0
                      ? "font-bold text-primary"
                      : "font-normal text-body",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setTool(0)}
                >
                  Wers
                </div>
                <div
                  className={[
                    "cursor-pointer font-ui text-xs select-none [transition:color_0.25s,font-weight_0.25s]",
                    tool === 1
                      ? "font-bold text-primary"
                      : "font-normal text-body",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setTool(1)}
                >
                  Tytuł
                </div>
                <div
                  className={[
                    "cursor-pointer font-ui text-xs select-none [transition:color_0.25s,font-weight_0.25s]",
                    tool === 2
                      ? "font-bold text-primary"
                      : "font-normal text-body",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setTool(2)}
                >
                  Dedykacja
                </div>
                <div
                  className={[
                    "cursor-pointer font-ui text-xs select-none [transition:color_0.25s,font-weight_0.25s]",
                    tool === 3
                      ? "font-bold text-primary"
                      : "font-normal text-body",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setTool(3)}
                >
                  Data
                </div>
                <div
                  className={[
                    "cursor-pointer font-ui text-xs select-none [transition:color_0.25s,font-weight_0.25s]",
                    tool === 4
                      ? "font-bold text-primary"
                      : "font-normal text-body",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setTool(4)}
                >
                  Usuń
                </div>
              </div>

              <div>
                {lines.map((line) => (
                  <div
                    className={[
                      "box-border min-h-5 w-full cursor-pointer border-0 px-2.5 text-base leading-5 select-none hover:border-x-2 hover:border-solid hover:border-primary hover:font-bold",
                      title === line.id ? "text-[#ff0000]" : "",
                      location === line.id ? "pt-2.5" : "",
                      removed.includes(line.id)
                        ? "relative before:absolute before:bottom-[calc(50%_-_0.75px)] before:left-0 before:h-full before:w-full before:border-0 before:border-b-[1.5px] before:border-solid before:border-primary before:content-['']"
                        : "",
                      dedication === line.id || location === line.id
                        ? "text-right"
                        : "text-left",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    key={line.id}

                    onClick={() => handleLineClick(line.id)}
                  >
                    {line.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col sm:w-1/2 items-center justify-start pl-2.5 max-sm:pt-12 max-sm:before:absolute max-sm:before:left-0 max-sm:before:w-screen max-sm:before:content-['']">
              <Poem poem={data} />
            </div>
          </div>
        )}
        {!saving && lines.length > 0 && (
          <div className="mt-12 flex w-full max-w-80 items-center justify-evenly">
            <div>
              <Button onClick={handleSave}>Zapisz</Button>
            </div>
            <div>
              <Button onClick={handleCancel}>Odrzuć</Button>
            </div>
          </div>
        )}

        {saving && (
          <div className="cursor-pointer font-ui text-xs select-none [transition:color_0.25s,font-weight_0.25s] font-normal text-body">
            Trwa zapisywanie proszę czekać!
          </div>
        )}
      </div>
    </Page>
  );
};

export default PoemsPage;

export function Head({ location }: HeadProps) {
  return <html lang="pl" />;
}
