import React, { useEffect } from "react";
import { PageProps, HeadProps, graphql } from "gatsby";

import { Page } from "../../components/page/page";
import { Button, SubmitButton } from "../../components/button/button";
import {
  ChangesDetector,
  ChangesDetectorBar,
} from "../../components/changes-detector/changes-detector";
import { request } from "../../api";

const AdminPanelPage: React.FC<PageProps<DataType>> = ({ data }) => {
  const handleLogout = () => {
    request("/auth/logout", "post").then(
      () => (window.location.pathname = "/admin/login"),
    );
  };

  useEffect(() => {
    request(`/poems`);
  });

  return (
    <Page>
      <div className="flex h-full w-full flex-col items-center justify-start p-2.5">
        <ChangesDetectorBar data={data} />
        <div className="mb-auto pb-1.5 text-center font-ui text-xl font-medium text-primary">
          Panel Administratora
        </div>
        <div>
          <Button href="/admin/poems" bigger>
            Edytor Wierszy
          </Button>
        </div>
        <div>
          <Button href="/admin/update" bigger>
            Panel Aktualizacji
          </Button>
        </div>
        <div>
          <SubmitButton onClick={handleLogout} bigger>
            Logout
          </SubmitButton>
        </div>
      </div>
    </Page>
  );
};

export default AdminPanelPage;

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
