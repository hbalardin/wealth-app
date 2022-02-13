import { FaChartLine, FaDollarSign } from "react-icons/fa";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import { Sidebar } from "../components/layout/Sidebar";
import { Home } from "../pages/Home";

export const Routes = () => {
  const paths = [
    {
      element: () => <></>,
      icon: <FaChartLine size={24} />,
      path: "/",
      text: "Progresso",
    },
    {
      element: Home,
      icon: <FaDollarSign size={24} />,
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
