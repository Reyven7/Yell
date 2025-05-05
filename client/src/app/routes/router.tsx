import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "@/App";
import Moodboard from "@/components/moodboard/moodboard";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import LoginPage from "@/pages/login-page";
import { SidebarProvider } from "@/components/ui/sidebar";

const pictures = [
  "https://i.pinimg.com/736x/3f/e0/f1/3fe0f1a648447e7873e95d750f3ced85.jpg",
  "https://i.pinimg.com/474x/2c/c8/21/2cc821b1bda8e6a327cd60c0e6c61d4b.jpg",
  "https://i.pinimg.com/474x/47/d6/f8/47d6f8191e52f2b3f04b2ec9f7be17be.jpg",
  "https://i.pinimg.com/474x/c4/2c/d0/c42cd0d71985bedeca3d5b503ff88ca9.jpg",
  "https://i.pinimg.com/474x/07/6e/b4/076eb43dabdc2aa9fec12edc56052a43.jpg",
  "https://i.pinimg.com/474x/c2/bf/9e/c2bf9e65289e2f50bf4bf7ca426708a3.jpg",
  "https://i.pinimg.com/736x/d2/47/f8/d247f8291a109cf0e6fe74363597950c.jpg",
  "https://i.pinimg.com/474x/ee/c8/64/eec864712d0631dd0552d5b193ac01a8.jpg",
  "https://i.pinimg.com/474x/a5/b1/18/a5b11852139574ec46034f48c928c928.jpg",
  "https://i.pinimg.com/474x/7a/8f/d8/7a8fd8814fbd5b67a00d16a388ec32e7.jpg",
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/moodboard", element: <Moodboard pictures={pictures} /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export const Root = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
