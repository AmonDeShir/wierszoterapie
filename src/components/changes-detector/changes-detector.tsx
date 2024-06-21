import { useEffect, useState } from "react";
import { Button } from "../button/button";
import { API_URL } from "../../data/api";
import { PoemData } from "../poem-reader/poem-reader";
import styled from "@emotion/styled";


const Background = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem;
  margin-bottom: 5rem;
  color: white;
  background-color: ${({ theme }) => theme.colors.dark};

  &:empty {
    display: none;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: min(100%, 200rem);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Text = styled.div`
  font-size: 2.3rem;
  font-family: ${({ theme }) => theme.fonts.ui};
  text-align: center;
`;

type Props = {
  actualText?: string,
  needUpdateText?: string,
  hideWhenNotNeeded?: boolean,
  showNavButton?: boolean,
  data: {
    swapi: {
      getPoems: {
        _id: string,
        updated_at: number,
      }[]
    }
  }
}

export const ChangesDetector = ({ data, showNavButton, hideWhenNotNeeded, actualText, needUpdateText }: Props) => {
  const [needUpdate, setNeedUpdate] = useState(false);

  useEffect(() => { 
    fetch(`${API_URL}/poems`)
      .then(data => data.json())
      .then((poems: PoemData[]) => {
        if (poems.length !== data.swapi.getPoems.length) {
          setNeedUpdate(true);
        }
       
        for (let i = 0; i < poems.length; i++) {
          const poem_a = poems[i];
          const poem_b = data.swapi.getPoems.find(({ _id }) => _id === poem_a._id);

          if (!poem_b || poem_a.updated_at !== poem_b.updated_at) {
            setNeedUpdate(true);

            return;
          }
        } 
      });
  }, []);

  if (needUpdate) {
    return (
        <Content>
          <Text>{needUpdateText ?? `Strona wymaga aktualizacji` }</Text>
          {showNavButton && <div><Button style={{margin: 0}} medium href="/admin/update">Panel aktualizacji</Button></div> }
        </Content>
    );
  }

  if (hideWhenNotNeeded) {
    return null;
  }

  return (
    <Text>{actualText ?? "Strona jest aktualna"}</Text>
  );
};

export const ChangesDetectorBar = ({ data }: Omit<Props, "needUpdateText" | "hideWhenNotNeeded" | "showNavButton" | "actualText">) => (
  <Background>
    <ChangesDetector 
      data={data}  
      needUpdateText="Wykryto zmiany w bazie danych. Przejdź do panelu aktualizacji aby wygenerować nową wersje strony"
      hideWhenNotNeeded
      showNavButton
    />
  </Background>
)