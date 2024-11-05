import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import CoffeeCard from "../components/CoffeeCard";
import CoffeeDetails from "../pages/CoffeeDetails";

const routes = createBrowserRouter([
      {
            path: '/',
            element: <Layout />,
            errorElement: <p>Hi Error</p>,
            children: [
                  {
                        path: '/',
                        element: <Home />,
                        loader: () => fetch('../categories.json'),
                        children: [
                              {
                                    path: '/',
                                    element: <CoffeeCard />,
                                    loader: () => fetch('../coffees.json')
                              },
                              {
                                    path: '/category/:category',
                                    element: <CoffeeCard />,
                                    loader: () => fetch('../coffees.json')
                              },
                        ],
                  },
                  {
                        path: '/coffees',
                        element: <Coffees />,
                        loader: () => fetch('../coffees.json')
                  },
                  {
                        path: '/dashboard',
                        element: <Dashboard />
                  },
                  {
                        path: '/coffee/:coffeeId',
                        element: <CoffeeDetails />,
                        loader: () => fetch('../coffees.json')
                  }
            ],
      }
])
export { routes }