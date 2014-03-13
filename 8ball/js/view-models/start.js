define(['knockout', 'amplify'], function(ko, amplify) {
    return function StartViewModel() {
    	var self = this;
    	self.visible = ko.observable(true);
        amplify.subscribe('StartViewModel:setVisible', function(visible) {
            self.visible(visible);
        });
        
        self.getStarted = function() {
            self.visible(false);
            amplify.publish('PlayerSelectionViewModel:setVisible', true);
        }
    }
    
    
});