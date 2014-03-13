define(['knockout', 'amplify'], function(ko, amplify) {
    return function ColorsViewModel() {
    	var self = this;
    	self.visible = ko.observable(false);
        amplify.subscribe('ColorsViewModel:setVisible', function(visible) {
            self.visible(visible);
        });
    }
});