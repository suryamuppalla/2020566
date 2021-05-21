import React from "react";
import './App.css';

const Cards = ({cards}) => {
    return (
        <div>
            <center><h1 className="text-success">Plants</h1></center>
            {cards.map((card) => (
                <div className="card mt-2" key={card.title}>
                    <div className="card-body">
                        <h4 className="card-title text-danger text-capitalize">{card.title}</h4>
                        <h5 className=" text-success text-capitalize">Price: {card.price}</h5>
                        <h6 className="card-subtitle mb-2 mt-3 text-muted">
                            {card.description}
                        </h6>
                    </div>
                </div>
            ))}
        </div>
    )
};

class Todos extends React.Component {

    // Create array of cards in state
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    // Once component is loaded, get data from server
    async componentDidMount() {
        try {
            const res = await fetch("http://localhost/2020566/codeigniter-demo/index.php/api/plants");
            if (res.status >= 400)
                return  new Error("something went wrong")
            const user = await res.json();
            this.setState({ cards: user });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div className="container mt-3 mb-3">
                <Cards cards={this.state.cards}/>
            </div>
        );
    }
}

export default Todos;
