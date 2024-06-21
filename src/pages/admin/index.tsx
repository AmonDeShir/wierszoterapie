import React from 'react';
import { PageProps, HeadProps, graphql } from "gatsby"
import styled from "@emotion/styled";
import { Page } from "../../components/page/page";
import { Button } from '../../components/button/button';
import { ChangesDetector, ChangesDetectorBar } from '../../components/changes-detector/changes-detector';

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

const AdminPanelPage: React.FC<PageProps<DataType>> = ({ data }) => {
  return (
    <Page>
        <Center>
          <ChangesDetectorBar data={data} />
          <Title>Panel Administratora</Title>
          <div><Button href='/admin/poems' bigger>Edytor Wierszy</Button></div>
          <div><Button href='/admin/update' bigger>Panel Aktualizacji</Button></div>
        </Center>
    </Page>
  )
}

export default AdminPanelPage

interface DataType {
  swapi: {
    getPoems: {
      _id: string,
      updated_at: number,
    }[]
  }
};

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

export function Head(props: HeadProps) {

  return (
      <html lang="pl" />
  );
}