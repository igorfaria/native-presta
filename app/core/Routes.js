/* 
  ICONS 
  https://oblador.github.io/react-native-vector-icons/
*/
import _l from "../core/Language";
import { HomeController } from "../controller/HomeController";
import { ProductController } from "../controller/ProductController";
import { ProductsController } from "../controller/ProductsController";
import { Page404 } from "../view/error/Page404";

const HomeScreen = props => <HomeController {...props} />
const ProductScreen = props => <ProductController {...props} />
const ProductsScreen = props => <ProductsController {...props} />
const Screen404 = props => <Page404 title={ _l("404 Screen") } content={ _l("The screen for this page was not created yet :D")} />

const routes = [{
    name: "home",
    title: _l("Home"),
    path: "/",
    exact: true,
    icon: "home",
    controller: HomeScreen,
  },
  {
    name: "product", 
    title: _l("Product"),
    path: _l("/product"),
    icon: "apps",
    controller: ProductScreen,
    hidden: true,
    modal: true,
    headerShown: true,
  },
  {
    name: "products", 
    title: _l("Products"),
    path: _l("/products"),
    icon: "apps",
    controller: ProductsScreen,
  },
  {
    name: "cart",
    title: _l("Cart"),
    path: _l("/cart"),
    icon: "cart",
    controller: Screen404,
    headerShown: true,
  },
  {
    name: "account",
    title: _l("Account"),
    path: _l("/account"),
    icon: "account-circle-outline",
    controller: Screen404,
    headerShown: true,
  },
];

const AppRoute = (route) => {
  let routeItem = false;
  routes.forEach(item => {
    if('name' in item && item.name == route) {
      routeItem = item;
      return false;
    }
  });
  return routeItem;
}

export { AppRoute };
export default routes;