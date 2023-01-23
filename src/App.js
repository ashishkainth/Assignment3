import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/screens/About";
import Contact from "./components/screens/Contact";
import Error from "./components/screens/Error";
import Cart from "./components/screens/Cart";
import RestaurantDetails from "./components/screens/RestaurantDetails";
import Profile from "./components/screens/Profile";
import ProfileClass from "./components/screens/ProfileClass";

const RestaurantAppLayout = () => {
  return (
    /**
     * Header
     *      - Image Logo
     *      - Title
     *      - menu items
     *      - cart
     * Body
     *      - restaurant list
     *          - Restaurant Card
     *              - image
     *              - name
     *              - rating
     *              - tags
     *              -price
     * Footer
     *      - links
     *      - copyright
     */
    <React.Fragment>
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RestaurantAppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
