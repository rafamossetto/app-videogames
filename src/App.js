import { Route } from "react-router-dom";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import SignupForm from "./components/signup/SignupForm";
import MovieDetail from "./components/details/Details";
import Billboard from "./components/billboard/Billboard";
import AdminPage from "./components/adminpage/AdminPage";
import UserProfile from "./components/userprofile/UserProfile";
import Home from "./components/home/Home";
import LogInForm from "./components/login/LogIn";
import EditMovie from "./components/editmovie/EditMovie";
import Users from "./components/adminpage/users/index";
import AdminMovies from "./components/adminpage/AdminMovies";
import AdminOrders from "./components/adminpage/orders/AdminOrders";
import Success from "./components/success/Success";
import ComingSoon from "./components/comingSoon/ComingSoon";
import ResetPassword from "./components/restorepassword/restorePassword";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/login" component={LogInForm} />
      <Route path="/movies/:id" component={MovieDetail} />
      <Route path="/billboard" component={Billboard} />
      <Route path="/comingsoon" component={ComingSoon} />
      <Route exact path="/administration/:id" component={EditMovie} />
      <Route exact path="/administration" component={AdminPage} />
      <Route path="/profile" component={UserProfile} />
      <Route path="/users" component={Users} />
      <Route path="/AdminMovies" component={AdminMovies} />
      <Route path="/adminorders" component={AdminOrders} />
      <Route path="/success/:id" component={Success} />
      <Route path="/restorepassword" component={ResetPassword} />
    </div>
  );
}

export default App;
