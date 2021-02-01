import React , {Component} from 'react';
import Auxi from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    //this could be a function al component doesnt have to ba a class
    
   
    render(){
        const ingredientSummary=Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li>
                            <span style={{textTransform: 'capitalize'}}>
                                 {igKey}
                            </span> : {this.props.ingredients[igKey]}
                        </li>;
            });
 
        return (
            <Auxi>
                <h3>Your Order</h3>
                <p>A delicius Burger with the following ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
            
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE TO CHECKOUT</Button>
            </Auxi>
        );
    }
}
    
   
export default OrderSummary;