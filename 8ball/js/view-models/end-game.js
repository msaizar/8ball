define(['knockout', 'amplify', 'game/models/player'], function(ko, amplify, Player) {
    return function EndGameViewModel() {
    	var self = this;
    	self.visible = ko.observable(false);
        
        self.player1 = ko.observable(new Player(''));
        self.player2 = ko.observable(new Player(''));

        self.stripes = ko.observable(new Player(''));
        
        amplify.subscribe('EndGameViewModel:setVisible', function(visible) {
            self.visible(visible);
        });
        
        amplify.subscribe('GameModel:setStripes', function(stripes) {
            self.stripes(stripes);
        })
    }
});