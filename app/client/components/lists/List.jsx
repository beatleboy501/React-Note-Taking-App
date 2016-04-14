List = React.createClass({
  propTypes: {
    collection:         React.PropTypes.array.isRequired,
    canAddItem:         React.PropTypes.bool,
    canDeleteItem:      React.PropTypes.bool,
    handleDeleteItem:   React.PropTypes.func,
    newItemPlaceholder: React.PropTypes.string,
    handleAddItem:      React.PropTypes.func,
    canEditItem:        React.PropTypes.bool,
    handleEditItem:     React.PropTypes.func
  },
  getDefaultProps() {
    return {
      canAddItem: false,
      canDeleteItem: false,
      canEditItem: false
    };
  },
  getCollection(){
    return this.props.collection.map((item) => {
            return <ListItem
              key={item._id}
              item={item}
              {...this.props}
             />;
    });
  },
  render() {
    return this.props.collection.length > 0? (
        <div>
          <PageTitle title="My Saved Notes" />
          <ul className="list-group">
            {this.getCollection()}
          </ul>
        </div>
    )
    : null;
  }
});
