import React, {Component} from 'react';
import {Card, CardTitle, CardText, Button} from 'reactstrap';

class Menu extends Component {
    addItem = () => {
        this.props.addMenuPrice(this.props.itemCost, this.props.itemEmoji)
    }
    render() {
        return (
            <>
                <div style={{ display: "flex", flexWrap: "wrap"}}>
                    <Card body>
                        <CardTitle>Menu Item: { this.props.menuItem }</CardTitle>
                        <CardText>Menu Price: ${ this.props.itemCost }</CardText>
                        <Button onClick={this.addItem }>Add { this.props.menuItem }</Button>
                    </Card>
                </div>
            </>
        )
    }
}
export default Menu;