import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Error from "../pages/Error";
import NotFound from "../pages/NotFound";
import { ENUMs } from "../lib/enums";
import { ReactElement } from "react";
import GlobalProvider from "@/providers/GlobalProvider";
import Layout from "@/pages/layout/Layout";
import Home from "@/pages/root/Home";
import About from "@/pages/root/About";
import Services from "@/pages/root/Services";
import CareSector from "@/pages/root/CareSector";
import Projects from "@/pages/root/Projects";
import DesignStudio from "@/pages/root/DesignStudio";
import Invest from "@/pages/root/Invest";
import Contact from "@/pages/root/Contact";

export type MyRoute = {
  path: string;
  element: ReactElement;
  index?: boolean;
};

type RouteSection = {
  path: string;
  element: ReactElement;
  routes: MyRoute[];
};

const routes: RouteSection[] = [
  {
    path: `${ENUMs.SECTIONS.HOME_SECTION}`,
    element: <Layout />,
    routes: [
      { path: ENUMs.PAGES.HOME, element: <Home /> },
      { path: ENUMs.PAGES.ABOUT, element: <About /> },
      { path: ENUMs.PAGES.SERVICES, element: <Services /> },
      { path: ENUMs.PAGES.CARE_SECTOR, element: <CareSector /> },
      { path: ENUMs.PAGES.PROJECTS, element: <Projects /> },
      { path: ENUMs.PAGES.DESIGN_STUDIO, element: <DesignStudio /> },
      { path: ENUMs.PAGES.INVEST, element: <Invest /> },
      { path: ENUMs.PAGES.CONTACT, element: <Contact /> },
    ],
  },
];

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<GlobalProvider />} errorElement={<Error />}>
      {routes.map((val: RouteSection, _index: number) => {
        return (
          <Route
            key={_index}
            path={val.path}
            errorElement={<Error />}
            element={val.element}>
            {val.routes.map((one: MyRoute, childIndex: number) => (
              <Route
                key={childIndex}
                path={one.path}
                errorElement={<Error />}
                element={one.element}
              />
            ))}
          </Route>
        );
      })}

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
