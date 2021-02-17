import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import {
  HomePage,
  NotFoundPage
} from "../pages"

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  )
}
