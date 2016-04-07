Notes = new Mongo.Collection('notes');


Meteor.methods({

  '/note/insert': function(title) {
    let noteAttributes = {
      title: title,
      createdAt: new Date(),
      ownerId: Meteor.userId()
    };
    Notes.insert(noteAttributes);
  }

});

