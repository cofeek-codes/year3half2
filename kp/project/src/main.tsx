import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NewQuestionPage from "./pages/NewQuestionPage";
import Root from "./pages/Root";
import "./index.scss";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { ChakraProvider } from "@chakra-ui/react";
import QuestionPage from "./pages/QuestionPage";

const router = createBrowserRouter([
   {
      path: "/",
      element: <IndexPage />,
   },
   {
      path: "/newquestion",
      element: <NewQuestionPage />,
   },
   {
      path: "/auth/register",
      element: <RegisterPage />,
   },
   {
      path: "/auth/login",
      element: <LoginPage />,
   },
   {
      path: "/question/:id",
      element: <QuestionPage />,
   },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <ChakraProvider>
         <RouterProvider router={router} />
      </ChakraProvider>
   </React.StrictMode>,
);
