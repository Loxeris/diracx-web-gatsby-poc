import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import {
  NavigationProvider,
  OIDCConfigurationProvider,
  ThemeProvider,
} from "diracx-web-components/contexts";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { LoginForm } from "diracx-web-components/components";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = () => {
  const location = useLocation();
  const getSearchParams = () => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams;
  };
  return (
    <main>
      <OIDCConfigurationProvider>
        <ThemeProvider>
          <NavigationProvider
            getPath={() => location.pathname}
            setPath={(path) => {
              if (path === location.pathname + location.search) {
                return;
              }
              navigate(path);
            }}
            getSearchParams={getSearchParams}
          >
            <LoginForm logoURL="https://raw.githubusercontent.com/DIRACGrid/management/master/branding/diracx/svg/diracx-logo-square-minimal.svg" />
          </NavigationProvider>
        </ThemeProvider>
      </OIDCConfigurationProvider>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
