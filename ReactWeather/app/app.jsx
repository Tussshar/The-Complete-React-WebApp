var React = require('react');
var ReactDOM = require('react-dom');

//Syntax in ES6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
/*
  The above line creates a variable named Route, Router
  and gets its value using require
*/
/*
Code in ES5

var Route = require('react-router').Route;
Similar thing we would have to do for other variables as well
*/

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      //This is our first route. Using path we make sure what we want to show as a route of our application
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
      //IndexRoute only take one argument
      //For Route we use Link and for IndexRoute we use IndexLink
    </Route>
  </Router>,
  document.getElementById('app')
);
