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
  handleInsertNote(inputTitle, inputValue) {
	   Meteor.call('/note/insert', inputTitle, inputValue, function(err, result){
	   	 if (err) { console.log('there was an error: ' + err.reason); };
    });
  },
	handleDeleteNote(note) {
		let deleteConfirm = confirm("Are you sure you wish to delete '" + note.title + "'?");
		if(deleteConfirm) {
			Meteor.call('/note/delete', note._id, function(err, result) {
				if(err) {
					console.log('there was an error: ' + err.reason);
        };
			});
		}
	},
  showNotes(){
   return this.data.subsReady?
       <List
           collection={this.data.notes}
           handleAddItem={this.handleInsertNote}
					 handleDeleteItem={this.handleDeleteTask}
           canAddItemItem={true}
					 canDeleteItem={true}
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
                  <PageTitle title="My Notes" />
                  {this.showNotes()}
              </div>
          </div>
      );
  }
});
