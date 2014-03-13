requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'core/js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        game: '../../8ball/js',
    },
    shim: {
        
        "amplify": {
            deps: ["jquery"],
            exports: "amplify"
        }
    }
});

requirejs(['jquery', 'amplify', 'knockout', 'game/config', 'game/view-models/colors', 'game/view-models/player-selection', 'game/view-models/end-game', 'game/view-models/scores', 'game/view-models/opener', 'game/view-models/start'],
function   ($, amplify, ko, config, ColorsViewModel, PlayerSelectionViewModel, EndGameViewModel, ScoresViewModel, OpenerViewModel, StartViewModel) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
   	var playerSelectionViewModel = new PlayerSelectionViewModel();
   	ko.applyBindings(playerSelectionViewModel, document.getElementById(player_selection_id));	

   	var endGameViewModel = new EndGameViewModel();
   	ko.applyBindings(endGameViewModel, document.getElementById(end_game_id));	

   	var openerViewModel = new OpenerViewModel();
   	ko.applyBindings(openerViewModel, document.getElementById(opener_id));	

   	var scoresViewModel = new ScoresViewModel();
   	ko.applyBindings(scoresViewModel, document.getElementById(scores_id));	

   	var colorsViewModel = new ColorsViewModel();
   	ko.applyBindings(colorsViewModel, document.getElementById(colors_id));	


   	var startViewModel = new StartViewModel();
   	ko.applyBindings(startViewModel, document.getElementById(start_id));	


});

