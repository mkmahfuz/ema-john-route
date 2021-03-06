
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Review from './Components/review/Review';
import Review2 from './Components/Review2/Review2';
import Shop from './Components/Shop/Shop';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>

          </Route>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/review2'>
            <Review2></Review2>
          </Route>
          <Route path='/product/:pdkey'>
          {/* <Route path='/product/'> */}
            <ProductDetails />
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
