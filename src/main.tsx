import React from "react";
import ReactDOM from "react-dom/client";
import "./js/input-knobs";
import { PedalChainProvider, MediaSourceProvider } from "./context";

import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MediaSourceProvider>
      <PedalChainProvider>
        <App />
      </PedalChainProvider>
    </MediaSourceProvider>
  </React.StrictMode>
);
