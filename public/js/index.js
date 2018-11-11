var socket = io();

socket.on('updatedRoomsList', function (roomsSet){
    console.log('rooms : ', roomsSet);
    var dataOptions = jQuery('#rooms');
    roomsSet.forEach(function (room){
        dataOptions.append(`<option value="${room}">${room}</option>`);
    });
});
