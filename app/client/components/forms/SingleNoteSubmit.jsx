SingleNoteSubmit = React.createClass({
  propTypes: {
    handleInput: React.PropTypes.func.isRequired
  },
  getDefaultProps() {
    return {
      inputTitle: "",
      inputValue:  "",
      placeholder: "New..."
    };
  },
  getInitialState() {
    return {
      inputTitle: this.props.inputTitle,
      inputValue: this.props.inputValue
    };
  },
  updateInputTitle(e){
    this.setState({inputTitle: e.target.value})
  },
  updateInputValue(e){
  	this.setState({inputValue: e.target.value});
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleInput(
      this.state.inputTitle.trim(),
      this.state.inputValue.trim()
    );
    this.setState({
      inputValue: "",
      inputTitle: ""
    });
    sAlert.info("Your note has been saved", {effect: 'stackslide', position: 'bottom-right', timeout: 2000,});
  },

  render() {
    return (
      <form className="form-block" type="text" onSubmit={this.handleSubmit}>
         <input type="text" className="form-control" placeholder="Title" value={this.state.inputTitle} onChange={this.updateInputTitle} />
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
        <input className="btn btn-default" type="submit" value="Save" />
      </form>
    )
  }
});
