import { BusyIndicator } from "@ui5/webcomponents-react";
import { lazy, Suspense } from "react";

import "./styles.scss";

const SearchForm = lazy(() => import("../../components/Search/SearchForm"));

export function MainPage() {
  return (
    <Suspense fallback={<BusyIndicator active />}>
      <SearchForm />
    </Suspense>
  );
}
