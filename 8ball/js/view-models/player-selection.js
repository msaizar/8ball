define(['knockout', 'amplify', 'game/models/player'], function(ko, amplify, Player) {
    return function PlayerSelectionViewModel() {
    	var self = this;
    	self.visible = ko.observable(false);
        self.players = ko.observableArray([new Player(''), new Player(''), new Player('')])

        amplify.subscribe('PlayerSelectionViewModel:setVisible', function(visible) {
            self.visible(visible);
        })
        
        self.addPlayer = function() {
            self.players.push(new Player(''));
        }
   
        self.navigateToOpener = function() {
            self.visible(false);
            amplify.publish('ScoresViewModel:setVisible', true);                        
            amplify.publish('ColorsViewModel:setVisible', true);            
            amplify.publish('GameModel:setPlayers', self.players());
            
        }
    }
});