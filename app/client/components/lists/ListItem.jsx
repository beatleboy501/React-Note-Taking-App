ListItem = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },
  displayTitle(){
    return this.props.item.title;
  },
  displayDeleteBtn(){
    return this.props.canDeleteItem? <span className="pull-right li-option"><DeleteBtn  handleDelete={this.handleDeleteItem}  /></span>: null;
  },
  handleDeleteItem(){
    this.props.handleDeleteItem(this.props.item);
  },
  displayListItem(){
    return this.displayTitle();
      ;
  },
  render(){
    return <li key={this.props.key} className="list-group-item">
             {this.displayDeleteBtn()}
             {this.displayListItem()}
           </li>;
  }
});
