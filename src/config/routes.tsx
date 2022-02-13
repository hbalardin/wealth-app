import { FaChartLine, FaDollarSign } from "react-icons/fa";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import { Sidebar } from "../components/layout/Sidebar";
import { HomePage } from "../pages/HomePage";
import { WealthPage } from "../pages/WealthPage";

export const Routes = () => {
  const paths = [
    {
      element: HomePage,
      icon: <FaChartLine size={20} />,
      path: "/",
      text: "Progresso",
    },
    {
      element: WealthPage,
      icon: <FaDollarSign size={20} />,
      path: "/patrimonio",
      text: "Patrimonio",
    },
  ];

  return (
    <BrowserRouter>
      <Sidebar items={paths} />
      <Router>
        {paths.map((route) => (
          <Route key={route.path} path={route.path} element={route.element()} />
        ))}
      </Router>
    </BrowserRouter>
  );
};
