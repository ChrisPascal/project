$(document).ready(function() {
    // Handle button clicks to open player info
    $('.player-info-button').click(function() {
        const targetId = $(this).data('target');
        const $playerInfoOverlay = $('#player-info-overlay');
        const $playerInfoCard = $('#player-info-card');
        const $targetInfo = $(targetId).html();

        $playerInfoCard.html($targetInfo);
        $playerInfoOverlay.show();
    });

    // Close player info overlay when clicking outside the card
    $('#player-info-overlay').click(function(event) {
        if (event.target.id === 'player-info-overlay') {
            $(this).hide();
        }
    });



    $('.players-info-button').click(function() {
        const targetId = $(this).data('target');
        const $playerInfoOverlay = $('#players-info-overlay');
        const $playerInfoCard = $('#players-info-card');
        const $targetInfo = $(targetId).html();

        $playerInfoCard.html($targetInfo);
        $playerInfoOverlay.show();
    });

    // Close player info overlay when clicking outside the card
    $('#players-info-overlay').click(function(event) {
        if (event.target.id === 'players-info-overlay') {
            $(this).hide();
        }
    });


    $('.player3-info-button').click(function() {
        const targetId = $(this).data('target');
        const $playerInfoOverlay = $('#player3-info-overlay');
        const $playerInfoCard = $('#player3-info-card');
        const $targetInfo = $(targetId).html();

        $playerInfoCard.html($targetInfo);
        $playerInfoOverlay.show();
    });

    // Close player info overlay when clicking outside the card
    $('#player3-info-overlay').click(function(event) {
        if (event.target.id === 'player3-info-overlay') {
            $(this).hide();
        }
    });
});