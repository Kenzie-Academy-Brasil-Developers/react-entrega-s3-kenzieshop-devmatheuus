import { Switch, Route } from "react-router-dom"
import Home from "../pages/Home"
import Checkout from "../pages/Checkout"

import GlobalStyle from "../style/GlobalStyle"

const Routes = () => {
  return (
    <>
    <GlobalStyle />
    <Switch>
      <Route exact path='/'>
        <Home/>        
      </Route>
      <Route path='/checkout'>
        <Checkout/>        
      </Route>
    </Switch>
    </>
  )
}

export default Routes
