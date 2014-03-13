define(['knockout', 'amplify'], function(ko, amplify) {
    return function ScoresViewModel() {
    	var self = this;
    	self.visible = ko.observable(false);
        self.players = ko.observableArray([]);
        
        amplify.subscribe('ScoresViewModel:setVisible', function(visible) {
            self.visible(visible);
        });
        
        amplify.subscribe('ScoresViewModel:setPlayers', function(players) {
            self.players(players);
        });
        
    }
});