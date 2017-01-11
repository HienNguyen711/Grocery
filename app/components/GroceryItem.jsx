var React = require('react/addons');
var action = require('./../actions/GroceryItemActionCreator.jsx')

module.exports = React.createClass({


    //togglePurchased
    togglePurchased:function(e){
        e.preventDefault();
        var sumPrice =0;
            sumPrice +=this.props.item.price;

        if (this.props.item.purchased){
            action.unbuy(this.props.item);
        } else {
            action.buy(this.props.item);
        }

    },
    //delete
    delete:function(e){
        e.preventDefault();
        action.delete(this.props.item);

    },

    render:function(){
        return (

           <div className="grocery-item row">

                <div className="six columns">
                    <h4 className={this.props.item.purchased ? "strikethrough" : "" }>
                        {this.props.item.name}
                    </h4>
                </div>

                <div className="price">
                    <h5>{this.props.item.price} $</h5>
                </div>


                <form onSubmit={this.togglePurchased} className="three columns">
                    <button className={this.props.item.purchased ? "" : "button-primary"} >{this.props.item.purchased ? "unbuy" : "buy"}</button>
                </form>
                <form className="three columns" onSubmit={this.delete}>
                    <button>Delete</button>
                </form>
            </div>
        )
    }
})




