define(['knockout'], function(ko) {
    return function Player(name) {
	    var self = this;
        self.name = name;
        self.games_played = ko.observable(0);
        self.games_won = ko.observable(0);
        self.games_lost = ko.observable(0);
        self.points = ko.computed(function() {
            return self.games_won() * 3;
        });
        
    }
});