define(['knockout', 'amplify'], function(ko, amplify) {
    return function ColorsViewModel() {
    	var self = this;
    	self.visible = ko.observable(false);
        self.stripes = ko.observable();
        
        self.players = ko.observableArray([]);
        
        amplify.subscribe('ColorsViewModel:setVisible', function(visible) {
            self.visible(visible);
            
        });
        
        amplify.subscribe('GameModel:setPlayers', function(players) {
            self.players(players); 
        });
   
        self.navigateToEndGame = function() {
            self.visible(false)
            amplify.publish('EndGameViewModel:setVisible', true);
            amplify.publish('GameModel:setStripes', self.stripes());
        }
    }
});