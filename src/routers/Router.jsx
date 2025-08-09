import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainLayout from "../layout/MainLayout";
import LoginPage from "../pages/LoginPage";
import SignPage from "../pages/SignPage";
import Support from "../components/support/Support";
import PasswordPage from "../pages/PasswordPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignPage />,
  },
  {
    path: '/support',
    element: <Support />,
  },
  {
    path:'/password',
    element:<PasswordPage />
  }
]);
