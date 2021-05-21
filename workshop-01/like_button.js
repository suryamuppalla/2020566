"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return (
          <h4 className="text-success">You liked me, I'm happy</h4>
      );
    }

    // Display a "Like" <button>
    return (
      <button
        className="btn btn-danger"
        onClick={() => this.setState({ liked: true })}
      >
        Like me
      </button>
    );
  }
}

const domContainer = document.querySelector("#react-container");
ReactDOM.render(e(LikeButton), domContainer);
