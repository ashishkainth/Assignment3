import React, { lazy, Suspense } from "react";
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
import Shimmer from "./components/Shimmer";
import { useState } from "react";
import UserContext from "./utils/UserContext";

const Instamart = lazy(() => import("./components/screens/Instamart"));

const RestaurantAppLayout = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Ashish kainth",
    email: "kainth.ashish@gmail.com",
  });
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
    <UserContext.Provider value={{ user: userInfo, setUserInfo: setUserInfo }}>
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </UserContext.Provider>
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
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
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
