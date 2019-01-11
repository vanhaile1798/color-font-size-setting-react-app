import React, { Component } from 'react';

class Products extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        	<div className="thumbnail">
        		<img src="https://images-na.ssl-images-amazon.com/images/I/51We979ipcL.jpg" alt="" />
        		<div className="caption">
        			<h3>iPhone 6 Plus</h3>
        			<p>
        				$1000
        			</p>
        			<p>
        				<a href="#" className="btn btn-primary">Buy</a>
        				
        			</p>
        		</div>
        	</div>
        </div>
      </div>
    );
  }
}

export default Products;
