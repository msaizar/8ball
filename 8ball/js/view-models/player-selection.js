define(['knockout', 'amplify', 'game/models/player'], function(ko, amplify, Player) {
    return function PlayerSelectionViewModel() {
    	var self = this;
    	self.visible = ko.observable(false);
        self.players = ko.observableArray([])
        self.player_number = ko.observable('');

        amplify.subscribe('PlayerSelectionViewModel:setVisible', function(visible) {
            self.visible(visible);
        })
        
        self.addPlayer = function() {
            self.players.push(new Player(''));
        }
   
        self.navigateToOpener = function() {
            self.visible(false);
            amplify.publish('OpenerViewModel:setVisible', true);
            amplify.publish('OpenerViewModel:setPlayers', self.players());
            
        }
    }
});