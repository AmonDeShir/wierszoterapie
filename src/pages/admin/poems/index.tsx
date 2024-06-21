import { useEffect, useState } from 'react';
import { PageProps, HeadProps, graphql } from "gatsby"
import styled from "@emotion/styled";
import { Page } from "../../../components/page/page";
import { Poem, PoemData, PoemReader } from "../../../components/poem-reader/poem-reader";
import { PoemContainer } from '../../../components/poem-reader/poem-reader.styles';
import { Button, SubmitButton } from '../../../components/button/button';
import { API_URL } from '../../../data/api';

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

const PoemLink = styled.div<{ selected?: boolean }>`
  font-size: 3rem;
  text-align: left;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.ui};
  color: ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.text };
  cursor: pointer;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`; 

const PoemsPage: React.FC<PageProps> = () => {
  const [poems, setPoems] = useState<PoemData[]>([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => { 
    fetch(`${API_URL}/poems`)
      .then(data => data.json())
      .then(setPoems) 
  }, []);

  return (
    <Page>
        <Center>
          <Title>Wiersze</Title>
          <div>
            {poems?.map(poem => (
              <PoemLink 
                key={poem._id} 
                selected={poems[selected]._id === poem._id}
                onClick={() => setSelected(poems.findIndex(({_id}) => _id === poem._id))}
              >{poem.title}</PoemLink>
            ))}

            <Buttons>
                <div><Button href='/admin/poems/new'>Nowy</Button></div>
            </Buttons>
          </div>
          
          {(poems[selected] && (
            <PoemContainer>
              <Poem key={poems[selected]._id} poem={poems[selected]} />
              <Buttons>
                <div><Button href={`/admin/poems/edit?poem=${poems[selected]._id}`}>Edytuj</Button></div>
                <div><SubmitButton>Usuń</SubmitButton></div>
              </Buttons>
            </PoemContainer>
          ))}
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