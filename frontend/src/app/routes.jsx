import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Shop } from "./components/Shop";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Cart } from "./components/Cart";
import { Auth } from "./components/Auth";
import { StoreInfo } from "./components/StoreInfo";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "cart", Component: Cart },
      { path: "auth", Component: Auth },
      { path: "store-info", Component: StoreInfo },
      { path: "*", Component: NotFound },
    ],
  },
]);
