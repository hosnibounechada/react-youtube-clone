import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  render() {
    return (
      <div
        className="ui header"
        style={{ backgroundColor: "#202124", margin: "10px 0px" }}
      >
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search" style={{ color: "white" }}>
              Video search
            </label>
            <input
              placeholder="Type to Search ..."
              id="search"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              style={{
                color: "white",
                backgroundColor: "#121212",
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
