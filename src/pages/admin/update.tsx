import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { PageProps, HeadProps, graphql } from "gatsby"
import styled from "@emotion/styled";
import { Page } from "../../components/page/page";
import { Poem, PoemData, PoemReader } from "../../components/poem-reader/poem-reader";
import { Button, SubmitButton } from '../../components/button/button';
import { API_URL, request } from '../../api';
import { PoemContainer } from '../../components/poem-reader/poem-reader.styles';
import { ChangesDetector } from '../../components/changes-detector/changes-detector';

type Progress = {
  all: number,
  completed: number,
  steps: {[key: string]: {
    id: string,
    job: string,
    name: string,
    status?: string,
    conclusion?: string,
    number: number
  }[]};
};

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

const CenterButtons = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.div<{ white?: boolean }>`
  font-size: 2.3rem;
  font-family: ${({ theme }) => theme.fonts.ui};
  text-align: center;
  color: ${({ white, theme }) => white ? theme.colors.secondary : theme.colors.text};
  padding: 0px 1rem;
`;

const BuildProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Jobs = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.dark};
`;

const Job = styled.div`
  padding: 2rem 0rem;
  text-align: justify;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: white;
  width: 100%;
`;

const JobDone = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const UpdatePage: React.FC<PageProps<DataType>> = ({ data }) => {
  const [updateState, setUpdateState] = useState(0);
  const [jobID, setJobID] = useState("");
  const [progress, setProgress] = useState<Progress>({ all: 0, completed: 0, steps: {} })

  const handleUpdate = () => {
    setUpdateState(1);
  };

  const updateProgress = () => {
    request<Progress>(`/frontend/progress/${jobID}`)
      .then(({data}) => setProgress(data))
  }

  useEffect(() => {
    if (updateState === 0) {
      return;
    }

    if (updateState === 1) {
      request(`/frontend/build`, "post")
        .then(({data}) => setJobID(data.id))
        .then(() => setUpdateState(2));
    }

    if (updateState === 2) {
      updateProgress();
    }

    if (updateState === 3) {
      request(`/frontend/replace`, "post")
        .then(() => setUpdateState(4));
    }
  }, [updateState]);

  useEffect(() => {
    if (updateState != 2) {
      return;
    }

    if (progress.all > 0 && progress.all === progress.completed && Object.keys(progress.steps).length == 2) {
      setUpdateState(3);
      return;
    }

    setTimeout(updateProgress, 3000);
  }, [progress])

  return (
    <Page>
        <Center>
          <Title>Panel Aktualizacji</Title>
          {updateState === 0 && (
            <>
              <ChangesDetector data={data} />
              <CenterButtons>
                <div><Button href='/admin' bigger>Panel Administratora</Button></div>
                <div><SubmitButton style={{ margin: "1rem"}} onClick={handleUpdate} bigger>Zaktualizuj Strone</SubmitButton></div>
              </CenterButtons>
            </>
          )}

          {(updateState === 1 || (updateState === 2 && progress.all <= 0)) && (
            <Text>
              Uruchamianie systemu aktualizacji, proszę czekać.
            </Text>
          )}

          {updateState === 2 && progress.all > 0 && (
            <BuildProgress>
              <Text>
                Postęp: {progress.completed}/{progress.all}
              </Text>

              {Object.keys(progress.steps).map(workflow => (
                <div key={workflow ?? "no-workflow"} style={{ width: "100%" }}>
                  <Text>{workflow}</Text>
                  <Jobs>
                    {progress.steps[workflow].map((step, i) => (
                      <>
                        {step.status === 'completed' && (
                          <JobDone key={step.id}>
                            <Text white><b>{i}: </b>{step.job}/{step.name}</Text>
                            <Text white>{step.conclusion}</Text>
                          </JobDone>
                        )}

                        {step.status === 'in_progress' && (
                          <Job key={step.id}>
                            <Text white><b>{i} {step.job}/{step.name}</b></Text>
                            <Text white><b>Step:</b> {step.number}</Text>
                            <Text white><b>ID:</b> {step.id}</Text>
                            <Text white><b>Status:</b> {step.status ?? "undefined"}</Text>
                            <Text white><b>Conclusion:</b> {step.conclusion ?? "undefined"}</Text>
                          </Job>
                        )}

                        { step.status !== 'completed' && step.status !== 'in_progress' && (
                          <JobDone key={step.id}>
                            <Text white><b>{i}: </b>{step.job}/{step.name}</Text>
                            <Text white>{step.status}</Text>
                          </JobDone>
                        )}
                      </>
                    ))}
                  </Jobs>
                </div>
              ))}
            </BuildProgress>
          )}

          {updateState === 3 && (
            <Text>
              Trwa podmienianie plików strony. Prosze czekać.
            </Text>
          )}

          {updateState === 4 && (
            <>
              <Text>
                Strona została pomyślnie zaktualizowana.
              </Text>

              <div><SubmitButton onClick={() => location.reload()} bigger>Ok</SubmitButton></div>
            </>
          )}


        </Center>
    </Page>
  )
}

export default UpdatePage

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