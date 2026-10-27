import React from "react";
import { useEffect, useMemo, useState } from "react";
import { PageProps, HeadProps, graphql } from "gatsby";

import { Page } from "../../components/page/page";
import {
  Poem,
  PoemData,
  PoemReader,
} from "../../components/poem-reader/poem-reader";
import { Button, SubmitButton } from "../../components/button/button";
import { API_URL, request } from "../../api";
import { PoemContainer } from "../../components/poem-reader/poem-container";
import { ChangesDetector } from "../../components/changes-detector/changes-detector";

type Progress = {
  all: number;
  completed: number;
  steps: {
    [key: string]: {
      id: string;
      job: string;
      name: string;
      status?: string;
      conclusion?: string;
      number: number;
    }[];
  };
};

const UpdatePage: React.FC<PageProps<DataType>> = ({ data }) => {
  const [updateState, setUpdateState] = useState(0);
  const [jobID, setJobID] = useState("");
  const [progress, setProgress] = useState<Progress>({
    all: 0,
    completed: 0,
    steps: {},
  });

  const handleUpdate = () => {
    setUpdateState(1);
  };

  const updateProgress = () => {
    request<Progress>(`/frontend/progress/${jobID}`).then(({ data }) =>
      setProgress(data),
    );
  };

  useEffect(() => {
    if (updateState === 0) {
      return;
    }

    if (updateState === 1) {
      request(`/frontend/build`, "post")
        .then(({ data }) => setJobID(data.id))
        .then(() => setUpdateState(2));
    }

    if (updateState === 2) {
      updateProgress();
    }

    if (updateState === 3) {
      request(`/frontend/replace`, "post").then(() => setUpdateState(4));
    }
  }, [updateState]);

  useEffect(() => {
    if (updateState != 2) {
      return;
    }

    if (
      progress.all > 0 &&
      progress.all === progress.completed &&
      Object.keys(progress.steps).length == 2
    ) {
      setUpdateState(3);
      return;
    }

    setTimeout(updateProgress, 3000);
  }, [progress]);

  return (
    <Page>
      <div className="flex h-full w-full flex-col items-center justify-start p-2.5">
        <div className="mb-auto pb-1.5 text-center font-ui text-xl font-medium text-primary">
          Panel Aktualizacji
        </div>
        {updateState === 0 && (
          <>
            <ChangesDetector data={data} />
            <div className="flex h-full min-h-[80vh] w-full flex-col items-center justify-center">
              <div>
                <Button href="/admin" bigger>
                  Panel Administratora
                </Button>
              </div>
              <div>
                <SubmitButton className="m-1.5!" onClick={handleUpdate} bigger>
                  Zaktualizuj Strone
                </SubmitButton>
              </div>
            </div>
          </>
        )}

        {(updateState === 1 || (updateState === 2 && progress.all <= 0)) && (
          <div className="px-1.5 text-center font-ui text-xs text-body">
            Uruchamianie systemu aktualizacji, proszę czekać.
          </div>
        )}

        {updateState === 2 && progress.all > 0 && (
          <div className="flex w-full flex-col items-center justify-center">
            <div className="px-1.5 text-center font-ui text-xs text-body">
              Postęp: {progress.completed}/{progress.all}
            </div>

            {Object.keys(progress.steps).map((workflow) => (
              <div key={workflow ?? "no-workflow"} className="w-full">
                <div className="px-1.5 text-center font-ui text-xs text-body">
                  {workflow}
                </div>
                <div className="flex flex-col items-start justify-center bg-dark">
                  {progress.steps[workflow].map((step, i) => (
                    <>
                      {step.status === "completed" && (
                        <div
                          className="flex w-full justify-between"
                          key={step.id}
                        >
                          <div className="px-1.5 text-center font-ui text-xs text-secondary">
                            <b>{i}: </b>
                            {step.job}/{step.name}
                          </div>
                          <div className="px-1.5 text-center font-ui text-xs text-secondary">
                            {step.conclusion}
                          </div>
                        </div>
                      )}

                      {step.status === "in_progress" && (
                        <div
                          className="flex w-full flex-col items-start justify-center py-2.5 text-justify text-white"
                          key={step.id}
                        >
                          <div className="px-1.5 text-center font-ui text-xs text-secondary">
                            <b>
                              {i} {step.job}/{step.name}
                            </b>
                          </div>
                          <div className="px-1.5 text-center font-ui text-xs text-secondary">
                            <b>Step:</b> {step.number}
                          </div>
                          <div className="px-1.5 text-center font-ui text-xs text-secondary">
                            <b>ID:</b> {step.id}
                          </div>
                          <div className="px-1.5 text-center font-ui text-xs text-secondary">
                            <b>Status:</b> {step.status ?? "undefined"}
                          </div>
                          <div className="px-1.5 text-center font-ui text-xs text-secondary">
                            <b>Conclusion:</b> {step.conclusion ?? "undefined"}
                          </div>
                        </div>
                      )}

                      {step.status !== "completed" &&
                        step.status !== "in_progress" && (
                          <div
                            className="flex w-full justify-between"
                            key={step.id}
                          >
                            <div className="px-1.5 text-center font-ui text-xs text-secondary">
                              <b>{i}: </b>
                              {step.job}/{step.name}
                            </div>
                            <div className="px-1.5 text-center font-ui text-xs text-secondary">
                              {step.status}
                            </div>
                          </div>
                        )}
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {updateState === 3 && (
          <div className="px-1.5 text-center font-ui text-xs text-body">
            Trwa podmienianie plików strony. Prosze czekać.
          </div>
        )}

        {updateState === 4 && (
          <>
            <div className="px-1.5 text-center font-ui text-xs text-body">
              Strona została pomyślnie zaktualizowana.
            </div>

            <div>
              <SubmitButton onClick={() => location.reload()} bigger>
                Ok
              </SubmitButton>
            </div>
          </>
        )}
      </div>
    </Page>
  );
};

export default UpdatePage;

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

export function Head(props: HeadProps) {
  return <html lang="pl" />;
}
