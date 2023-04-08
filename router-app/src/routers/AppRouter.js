import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProfilePage from "../pages/ProfilePage";
import CategoriesRouter from "./CategoriesRouter";

export default function AppRouter() {
  return (
    // Con <Router> estoy definiendo un nuevo router, y dentro puedo definir las rutas de mi aplicación
    <Router>
      <Navbar />
      {/* El Swicth cuando lea la primera ruta, en caso que entre, ya no tendrá en cuenta a las demás */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/profile/:username" component={ProfilePage} />
        <Route path="/categories" component={CategoriesRouter} />
        <Route path="/404" component={NotFoundPage} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}
