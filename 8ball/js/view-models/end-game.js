define(['knockout', 'amplify'], function(ko, amplify) {
    return function EndGameViewModel() {
    	var self = this;
    	self.visible = ko.observable(false);
        amplify.subscribe('EndGameViewModel:setVisible', function(visible) {
            self.visible(visible);
        });
    }
});