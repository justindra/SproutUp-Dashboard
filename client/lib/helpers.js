Template.registerHelper('timeFromX', function (date) {
    return moment(date).fromNow();
});

getIconForSensor = function (type) {
    if (type == 'moist') {
        return 'tint';
    } else if (type == 'temp') {
        return 'fire';
    } else if (type == 'light') {
        return 'sun-o';
    }
}

getColorForSensor = function (type) {
    if (type == 'moist') {
        return 'primary';
    } else if (type == 'temp') {
        return 'red';
    } else if (type == 'light') {
        return 'yellow';
    }
}