import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Falcon9 from "./Pages/falcon9/Falcon9";
import Main from "./Pages/main/Main";
import Shop from "./Pages/shop/Shop";
import Detail from "./Pages/detail/Detail";
// import Cart from "./Pages/cart/Cart";
import Register from "./Pages/register/Register";
import Account from "./Pages/account/Account";

// "/shop/detail/:id"

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/falcon9" component={Falcon9} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/detail/" component={Detail} />
          {/* <Route exact path="/shop/cart" component={Cart} /> */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/account" component={Account} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;