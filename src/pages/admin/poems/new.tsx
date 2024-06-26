import { useEffect, useMemo, useState } from 'react';
import { PageProps, HeadProps, graphql } from "gatsby"
import styled from "@emotion/styled";
import { Page } from "../../../components/page/page";
import { FileUploader } from 'react-drag-drop-files';
import { extractRawText } from "mammoth/mammoth.browser";
import { nanoid } from 'nanoid'
import { Poem, PoemData } from '../../../components/poem-reader/poem-reader';
import { Button } from '../../../components/button/button';
import { css } from '@emotion/react';
import { API_URL, request } from '../../../api';

const Label = styled.label`
  display: block;
  font-size: 3.2rem;
  text-align: left;
  font-weight: normal;
  cursor: pointer;
`;

const Input = styled.input`
  display: block;
  border: 0px;
  border-bottom: 1px solid black;
  transition: border-color 0.25s;
  font-size: 3rem;
  padding: 1rem;
  margin-bottom: 5rem;
  width: 50rem;

  &:hover, &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary}; 
  }
`;


const Title = styled.div`
  font-size: 4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.ui};
  text-align: center;
  padding-bottom: 1rem;
  margin-bottom: auto;
`;

const Center = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Upload = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`; 

const Lines = styled.div`
`;

const Line = styled.div<{isTitle?: boolean, isDedication?: boolean, isLocation?: boolean, isRemoved?: boolean}>`
  font-size: 3rem;
  min-height: 4rem;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0 2rem;
  line-height: 4rem;
  text-align: left;
  width: 100%;
  user-select: none;

  &:hover {
    font-weight: bold;
    border-left: 2px solid ${({ theme }) => theme.colors.primary};
    border-right: 2px solid ${({ theme }) => theme.colors.primary};
  }

  ${({ isTitle }) => !isTitle ? "" : css`
    color: red;
  `};

  ${({ isDedication }) => !isDedication ? "" : css`
    text-align: right;
  `};

  ${({ isLocation }) => !isLocation ? "" : css`
    text-align: right;
    padding-top: 2rem;
  `};

  ${({ isRemoved, theme }) => !isRemoved ? "" : css`
    position: relative;

    &::before {
      position: absolute;
      content: " ";
      width: 100%;
      height: 100%;
      bottom: calc(50% - 0.75px);
      left: 0px;
      border-bottom: 1.5px solid ${theme.colors.primary};
    }
  `};
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const Column = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-left: 2rem;
  
  @media (max-width: 600px) {
    padding-top: 10rem;

    &::before {
      position: absolute;
      content: " ";
      left: 0px;
      width: 100vw;
    }
  }
`;

const ToolBox = styled.div`
  width: 50rem;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5rem;
`;

const Buttons = styled.div`
  margin-top: 10rem;
  width: 100%;
  max-width: 60rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`; 

const Tool = styled.div<{active?: boolean}>`
  cursor: pointer;
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-weight: ${({ active }) => active ? "bold" : "normal"};
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.text};
  transition: color 0.25s, font-weight 0.25s;
  user-select: none;
`;

const PoemsPage: React.FC<PageProps> = () => {
  const [lines, setLines] = useState<{ text: string, id: string }[]>([]);
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
      const text = await extractRawText({ arrayBuffer: buffer }).then(res => res.value);
      const lines = text
        .trim()
        .replaceAll("\n\n", "\n")
        .split('\n')
        .map(text => ({ text, id: nanoid() }));

      setLines(lines);
      setTitle(lines[0]?.id);
      setLocation(lines.at(-1)?.id);
      
      if (lines.length >= 2 && lines[1].text === '') {
        setRemoved([lines[1].id]);      
      }

    } catch {}
  };

  const data = useMemo<PoemData>(() => ({
    _id: "",
    author: author,
    title: lines.find(({id}) => id === title)?.text ?? "Nieznany",
    date: lines.find(({id}) => id === location)?.text,
    dedication: lines.find(({id}) => id === dedication)?.text,
    text: lines.filter(({id}) => id !== title && id !== location && id !== dedication && !removed.includes(id)).map(line => line.text).join("\n"),
  }), [lines, author, title, dedication, location, removed]);

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
      setRemoved(ids => ids.filter(item => item != id));

      if (tool === 4) {
        return;
      }
    }

    switch(tool) {
      case 0: break;
      case 1: setTitle(id); break;
      case 2: setDedication(id); break;
      case 3: setLocation(id); break;
      case 4: setRemoved([...removed, id]); break;
    }
  }

  const handleSave = () => {
    setSaving(true);
    const {_id, ...poem} = data;

    request(`/poems`, "post", poem)
      .then(() => window.location.pathname = "/admin/poems");
  };

  const handleCancel = () => {
    if (confirm('Czy na pewno chcesz usunąć ten wiersz?')) {
      window.location.pathname = "/admin/poems";
    }
  };

  return (
    <Page>
        <Center>
          <Title>Nowy wiersz</Title>
          {(!saving && lines.length == 0 &&
            <Upload>
              <FileUploader
                handleChange={handleFileUpload} 
                name="file" 
                types={["DOCX"]} 
              />
            </Upload>
          )}

          {!saving && lines.length > 0 && (
            <Content>
              <Column>
                <Label>
                  Autor
                  <Input value={author} onInput={(e) => setAuthor(e.currentTarget.value)} />
                </Label>
                <ToolBox>
                  <Tool active={tool === 0} onClick={() => setTool(0)}>Wers</Tool>
                  <Tool active={tool === 1} onClick={() => setTool(1)}>Tytuł</Tool>
                  <Tool active={tool === 2} onClick={() => setTool(2)}>Dedykacja</Tool>
                  <Tool active={tool === 3} onClick={() => setTool(3)}>Data</Tool>
                  <Tool active={tool === 4} onClick={() => setTool(4)}>Usuń</Tool>
                </ToolBox>
   
                <Lines>
                  {lines.map((line) => (
                    <Line 
                      key={line.id}
                      isTitle={title === line.id}
                      isDedication={dedication === line.id}
                      isLocation={location === line.id}
                      isRemoved={removed.includes(line.id)}
                      onClick={() => handleLineClick(line.id)}
                    >{line.text}</Line>
                  ))}
                </Lines>
              </Column>

              <Column>
                <Poem poem={data} />
              </Column>
            </Content>
          )}
          {!saving && lines.length > 0 && (
            <Buttons>
              <div><Button onClick={handleSave}>Zapisz</Button></div>
              <div><Button onClick={handleCancel}>Odrzuć</Button></div>
            </Buttons>
          )}

          {saving && (
            <Tool>Trwa zapisywanie proszę czekać!</Tool>
          )}
        </Center>
    </Page>
  )
}

export default PoemsPage


export function Head({ location }: HeadProps) {

  return (
      <html lang="pl" />
  );
}