import React, { Component } from "react";
import { connect } from "react-redux";

import { postBook, resetErrors } from "./redux/actions/index";

class BookForm extends Component {
  state = {
    title: "",
    color: "",
    authors: [this.props.author.id]
  };

  textChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  submitBook = e => {
    e.preventDefault();
    this.props.postBook(this.state, this.props.closeModal);
  };

  render() {
    const { errors } = this.props;
    return (
      <div className="mt-5 p-2">
        <form onSubmit={this.submitBook}>
          {!!errors.length && (
            <div className="alert alert-danger" role="alert">
              {errors.map(error => (
                <p key={error}>{error}</p>
              ))}
            </div>
          )}
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Title</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={this.textChangeHandler}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Colors</span>
            </div>
            <select
              id="inputGroupSelect01"
              type="text"
              className="form-control"
              name="color"
              onChange={this.textChangeHandler}
            >
              <option selected>Choose color...</option>
              <option
                value="black"
                style={{ backgroundColor: "black", color: "white" }}
              >
                Black
              </option>
              <option value="white" style={{ backgroundColor: "white" }}>
                White
              </option>
              <option
                value="blue"
                style={{ backgroundColor: "blue", color: "white" }}
              >
                Black
              </option>

              <option value="yellow" style={{ backgroundColor: "yellow" }}>
                Yellow
              </option>
              <option
                value="green"
                style={{ backgroundColor: "green", color: "white" }}
              >
                Green
              </option>
            </select>
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    errors: state.errorsState.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postBook: (newBook, closeModal) => dispatch(postBook(newBook, closeModal)),
    resetErrors: () => dispatch(resetErrors())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BookForm);
