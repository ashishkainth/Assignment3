import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Body from "./components/Body/Body";



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
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RestaurantAppLayout />);
