var React = require('react');
var {Link ,IndexLink}= require('react-router');
var Nav = React.createClass({
  render:function(){
    return(
      <div>
      <h3>Nav component</h3>
      <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight:'bold',fontSize:12}}>Get Weather</IndexLink>
      <Link to='/about'activeClassName="active" activeStyle={{fontWeight:'bold',fontSize:12}}>About</Link>
      <Link to='/examples'activeClassName="active" activeStyle={{fontWeight:'bold',fontSize:12}}>Examples</Link>
      
      </div>
    );
  }
});
module.exports=Nav;
