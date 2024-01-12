import React from "react";
const Home = React.lazy(() => import("../pages/Home"));
const Authenticate = React.lazy(() => import("../pages/Authentication"));
const Profile = React.lazy(() => import("../pages/Profile"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Cart = React.lazy(() => import("../pages/Cart"));
const Order = React.lazy(() => import("../pages/Order"));
// const Search = React.lazy(() => import("../pages/Search"));
// const ProductPage = React.lazy(() => import("../pages/ProductPage"));
// const Admin = React.lazy(() => import("../pages/Admin"));

const allRoutes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    status: false,
  },
  {
    id: 2,
    path: "/auth",
    element: <Authenticate />,
    status: false,
  },
  {
    id: 3,
    path: "/profile",
    element: <Profile />,
    status: false,
  },
  {
    id: 4,
    path: "/contact-us",
    element: <Contact />,
    status: false,
  },
  {
    id: 5,
    path: "/cart",
    element: <Cart />,
    status: false,
  },
  {
    id: 6,
    path: "/orders",
    element: <Order />,
    status: false,
  },
  // {
  //   id: 7,
  //   path: "/product-page/:id",
  //   element: <ProductPage />,
  //   status: false,
  // },
  // {
  //   id: 8,
  //   path: "/search",
  //   element: <Search />,
  //   status: false,
  // },
  // {
  //   id: 9,
  //   path: "/orderinfo/:id",
  //   element: <Orderinfo />,
  //   status: false,
  // },
  // {
  //   id:10,
  //   path:"/admin",
  //   element:<Admin/>,
  //   status:false,
  // },
];
export default allRoutes;
