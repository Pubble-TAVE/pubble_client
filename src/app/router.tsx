import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/app/layouts/RootLayout';
import LoginPage from '@/pages/LoginPage';
import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  { path: '*', element: <NotFoundPage /> },
]);
