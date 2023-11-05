import Head from "./components/Head";
import { Provider } from "react-redux";
import {store} from "./utils/store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Body, WatchPage } from "./components/components.js";
import MainContainer from "./components/MainContainer.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  

  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={appRouter}>
        <Outlet />
      </RouterProvider>
    </Provider>
  );
}

export default App
