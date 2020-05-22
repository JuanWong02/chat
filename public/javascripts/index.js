var socket = io();

var app = new Vue({
    el: '#app',

    data: {
        //mensajes del chat
        messages: [],
        //mensaje actual del input
        message: '',
    },
    methods: {
        sendMessage() {
            socket.emit('message.new', this.message);

            this.message = '';
        }
    },
    created: function () {
        let _this = this;
        socket.on('message.received', function(message) {
            _this.messages.push(message);
           
    });

    }
});
