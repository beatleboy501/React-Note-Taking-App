Notes = new Mongo.Collection('notes');

Meteor.methods({
  
  '/note/insert': function(title, text) {
    let noteAttributes = {
      title: title,
      text: text,
      createdAt: new Date(),
      ownerId: Meteor.userId()
    };
    Notes.insert(noteAttributes);
  },

  '/note/delete': function(id) {
    Notes.remove({_id: id});
  },

  '/note/update': function(params) {
    let note = Notes.findOne({_id: params.id});
    Notes.update(note._id, {
      $set: {
        title: params.title,
        text: params.text
      }
    });
  }
});
