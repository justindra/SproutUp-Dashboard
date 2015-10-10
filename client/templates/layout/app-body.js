Template.appBody.events({
    'click [data-action="logout"]': function (evt, template) {
        Meteor.logout();
    }
});