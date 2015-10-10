Template.registerHelper('timeFromX', function (date) {
    return moment(date).from(moment());
});