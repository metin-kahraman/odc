import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import AppAppBar from "../components/AppAppBar";
import Container from "@mui/material/Container";
import Footer from "../components/Footer";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <AppAppBar />
            <Container
              maxWidth="lg"
              component="main"
              sx={{
                display: "flex",
                flexDirection: "column",
                mb: 16,
                gap: 4,
              }}
            >
              {props.children}
            </Container>
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
