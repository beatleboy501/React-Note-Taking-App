NotesList = React.createClass({
	mixins: [ReactMeteorData],
  getMeteorData() {
    const
      subscription = Meteor.subscribe("myNotes"),
      subsReady = subscription.ready()
    ;

    return {
      subsReady: subsReady,
      notes: Notes.find({}, {sort: { createdAt: -1 }}).fetch()
    }
  },
  handleInsertNote(inputValue) {
	   Meteor.call('/note/insert', inputValue, function(err, result){
	   	 if (err) { console.log('there was an error: ' + err.reason); };
    });
  },
  showNotes(){
   return this.data.subsReady?
       <List
           collection={this.data.notes}
           handleAddItem={this.handleInsertNote}
           canAdd={true}
           newItemPlaceHolder="New Note..."
       />
       :
       <div className="loading">
           Loading...
       </div>
      ;
  },
  render() {
      return (
          <div className="row">
              <div className="col-md-6 col-md-offset-3">
                  <h1>My Notes</h1>
                  {this.showNotes()}
              </div>
          </div>
      );
  }
});
