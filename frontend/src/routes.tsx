import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Bar, Label, Page, ThemeProvider } from "@ui5/webcomponents-react";

import { MainPage } from "./pages/Main";
import { ShowPage } from "./pages/Show";

function Routes() {
  return (
    <ThemeProvider>
      <Page
        floatingFooter={false}
        header={
          <Bar>
            <Label>Lista de Filmes</Label>
          </Bar>
        }
        style={{
          height: "100vh",
        }}
        footer={
          <Bar>
            <Label>Todos Direitos Reservados</Label>
          </Bar>
        }
      >
        <BrowserRouter>
          <Route path="/" exact component={MainPage} />
          <Route path="/show/:id" component={ShowPage} />
        </BrowserRouter>
      </Page>
    </ThemeProvider>
  );
}

export default Routes;
