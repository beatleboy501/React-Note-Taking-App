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
  handleUpdateNote(inputTitle, inputValue, id) {
      Meteor.call('/note/update', { title: inputTitle, text: inputValue, id: id}, function(err, result){
	if(err) { console.log('there was an error: ' + err.reason); };
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
	sAlert.info("Your note has been deleted", {effect: 'stackslide', position: 'bottom-right', timeout: 2000,});
      }
  },
  showNotes(){
   return this.data.subsReady?
       <List
           collection={this.data.notes}
           handleAddItem={this.handleInsertNote}
	   handleDeleteItem={this.handleDeleteNote}
	   handleEditItem={this.handleUpdateNote}
           canAddItemItem={true}
	   canDeleteItem={true}
	   canEditItem={true}
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
	    <PageTitle title="Create Note" />
	      <ul className="list-group">
	        <li className="list-group-item editable">
	          <SingleNoteSubmit
	            placeholder="New note..."
	            handleInput={this.handleInsertNote}
	          />
	        </li>
	      </ul>
	      {this.showNotes()}
	    </div>
          </div>
      );
  }
});
