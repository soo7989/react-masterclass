import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* 순서 조심
        Route는 위에서 부터 아래로 먼저 맞는 경로가 있을 경우에 보여주기 때문에
        Router 내부에 있는 Route의 순서를 신경써서 작성해야겠다.
        */}
        <Route path="/:coinId">
          <Coin/>
        </Route>
        <Route path="/">
          <Coins/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
