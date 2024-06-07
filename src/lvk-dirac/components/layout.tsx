"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import { OIDCSecure, Dashboard } from "diracx-web-components/components";
import { ApplicationsProvider } from "diracx-web-components/contexts";
import { useMUITheme } from "diracx-web-components/hooks";
import { applicationList } from "../../lvk-dirac/applicationList";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useMUITheme();

  const defaultSections: {
    title: string;
    extended: boolean;
    items: {
      title: string;
      type: string;
      id: string;
      icon: React.ComponentType<{}>;
      data?: any;
    }[];
  }[] = [
    {
      title: "Default Applications",
      extended: true,
      items: [
        {
          title: "Test App",
          id: "Test App 1",
          type: "Test App",
          icon:
            applicationList.find((app) => app.name === "Test App")?.icon ||
            (() => <div></div>),
        },
        {
          title: "Dashboard",
          id: "Dashboard 1",
          type: "Dashboard",
          icon:
            applicationList.find((app) => app.name === "Dashboard")?.icon ||
            (() => <div></div>),
        },
        {
          title: "Job Monitor",
          id: "Job Monitor 1",
          type: "Job Monitor",
          icon:
            applicationList.find((app) => app.name === "Job Monitor")?.icon ||
            (() => <div></div>),
        },
        {
          title: "File Catalog",
          id: "File Catalog 1",
          type: "File Catalog",
          icon:
            applicationList.find((app) => app.name === "File Catalog")?.icon ||
            (() => <div></div>),
        },
      ],
    },
  ];
  return (
    <section>
      <ApplicationsProvider
        appList={applicationList}
        defaultSections={defaultSections}
      >
        <OIDCSecure>
          <Dashboard
            logoURL="https://raw.githubusercontent.com/DIRACGrid/management/81ba3d4ccc763d1d4b58878cbe6957f894c1576f/branding/diracx/svg/diracx-logo-full.svg"
            drawerWidth={250}
          >
            <MUIThemeProvider theme={theme}>
              <CssBaseline />
              <Box
                sx={{
                  ml: "5%",
                  mr: "5%",
                }}
              >
                {children}
              </Box>
            </MUIThemeProvider>
          </Dashboard>
        </OIDCSecure>
      </ApplicationsProvider>
    </section>
  );
}
