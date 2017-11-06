$(function () {
    // When we're using HTTPS, use WSS too.
    var ws_scheme = window.location.protocol == "https:" ? "wss" : "ws";
    var chatsock = new ReconnectingWebSocket(ws_scheme + '://' + window.location.host + "/organico_cooperativas" + window.location.pathname);

    chatsock.onmessage = function (message) {
        var data = JSON.parse(message.data);
        var chat = $("#conversation")
        var ele = $('<div class="row message-body"></div>')

        ele.append('<div class="col-sm-12 message-main-sender">' +
'                        <div class="sender">' +
'                           <div class="message-text">' +
'                               <b>'+ data.handle+'</b><br>' + data.message +
'                           </div>' +
'                        <span class="message-time pull-right">'+ data.timestamp +'</span>' +
'                        </div>' +
'                   </div>')

        chat.append(ele)

        var objDiv = document.getElementById("conversation");
        objDiv.scrollTop = objDiv.scrollHeight;
    };

    $("#sendButton").on("click", function (event) {
        $("#chatform").submit();
    });

    $("#chatform").on("submit", function (event) {
        event.preventDefault();
        if (!!$('#message').val()) {
            var message = {
                handle: "Prueba",
                message: $('#message').val(),
            }

            chatsock.send(JSON.stringify(message));
            $("#message").val('').focus();
        }
        return false;
    });

    //Se hace scroll al final de la conversacion
    var objDiv = document.getElementById("conversation");
        objDiv.scrollTop = objDiv.scrollHeight;

});