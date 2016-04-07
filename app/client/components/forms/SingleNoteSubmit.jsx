SingleNoteSubmit = React.createClass({
  propTypes: {
    handleInput: React.PropTypes.func.isRequired
  },
  getDefaultProps() {
    return {
      inputValue:  "",
      placeholder: "New..."
    };
  },
  getInitialState() {
    return {
      inputValue: this.props.inputValue
    };
  },
  updateInputValue(e){
  	this.setState({inputValue: e.target.value});
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleInput(this.state.inputValue.trim());
    this.setState({ inputValue: "" });
  },

  render() {
    return (
      <form className="form-block" type="text" onSubmit={this.handleSubmit}>
         <input type="text" className="form-control" placeholder="Title"/>
          <br/>
         <textarea
          className="form-control"
          type="text"
          rows="4"
          placeholder="Add Text"
          value={this.state.inputValue}
          onChange={this.updateInputValue}
        />
          <br/>
        <input class="btn btn-default" type="submit" value="Save" />
      </form>
    )
  }
});
