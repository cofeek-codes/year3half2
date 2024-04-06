import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NewQuestionPage from "./pages/NewQuestionPage";
import Root from "./pages/Root";
import "./index.scss";

const router = createBrowserRouter([
   {
      path: "/",
      element: <IndexPage />,
   },
   {
      path: "/newquestion",
      element: <NewQuestionPage />,
   },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>,
);
