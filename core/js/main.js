requirejs.config({
    baseUrl: 'core/js',
    paths: {
        game: '../../8ball/js',
        vms: '../../8ball/js/view-models'
    },
    shim: {
        
        "amplify": {
            deps: ["jquery"],
            exports: "amplify"
        }
    }
});

requirejs(['knockout', 'game/config', 'vms/colors', 'vms/player-selection', 'vms/end-game', 'vms/scores', 'vms/start'],
function   (ko, config, ColorsViewModel, PlayerSelectionViewModel, EndGameViewModel, ScoresViewModel, StartViewModel) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
   	var playerSelectionViewModel = new PlayerSelectionViewModel();
   	ko.applyBindings(playerSelectionViewModel, document.getElementById(player_selection_id));	

   	var endGameViewModel = new EndGameViewModel();
   	ko.applyBindings(endGameViewModel, document.getElementById(end_game_id));	

   	var scoresViewModel = new ScoresViewModel();
   	ko.applyBindings(scoresViewModel, document.getElementById(scores_id));	

   	var colorsViewModel = new ColorsViewModel();
   	ko.applyBindings(colorsViewModel, document.getElementById(colors_id));	


   	var startViewModel = new StartViewModel();
   	ko.applyBindings(startViewModel, document.getElementById(start_id));	


});

