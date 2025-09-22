import "@/style.css";
import { RouterProvider } from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import React from "react";
import ReactDom from "react-dom/client";
import { createRouter } from "@/router";

const ROOT_ELEMENT_ID = "app";

const rootElement = document.getElementById(ROOT_ELEMENT_ID);

if (!rootElement) {
  throw new Error(`Root element with ID '${ROOT_ELEMENT_ID}' not found.`);
}

const router = createRouter();

if (!rootElement.innerHTML) {
  const root = ReactDom.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
        enableSystem
        themes={["light", "dark"]}
      >
        <RouterProvider router={router} />
      </ThemeProvider>
    </React.StrictMode>
  );
}
