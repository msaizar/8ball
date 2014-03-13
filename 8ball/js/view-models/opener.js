define(['knockout', 'amplify'], function(ko, amplify) {
    return function OpenerViewModel() {
    	var self = this;
    	self.visible = ko.observable(false);
        self.players = ko.observableArray([]);
        amplify.subscribe('OpenerViewModel:setVisible', function(visible) {
            self.visible(visible);
        });
        
        
        amplify.subscribe('OpenerViewModel:setPlayers', function(players) {
            self.players(players);
        });
        
    }
});