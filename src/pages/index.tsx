import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  NavigationProvider,
  OIDCConfigurationProvider,
  ThemeProvider,
} from "diracx-web-components/contexts";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import Layout from "../lvk-dirac/components/layout";
import Dashboard from "../lvk-dirac/components/dashboard";

const IndexPage: React.FC<PageProps> = () => {
  const location = useLocation();
  const getSearchParams = () => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams;
  };
  const setPath = React.useCallback(
    (path: string) => {
      if (path === location.pathname + location.search) {
        return;
      }
      navigate(path);
    },
    [location.pathname, location.search]
  );
  return (
    <main>
      <OIDCConfigurationProvider>
        <ThemeProvider>
          <NavigationProvider
            getPath={() => location.pathname}
            setPath={setPath}
            getSearchParams={getSearchParams}
          >
            <Layout>
              <Dashboard />
            </Layout>
          </NavigationProvider>
        </ThemeProvider>
      </OIDCConfigurationProvider>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
