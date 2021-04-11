const NotificationMessage = {
    template: '#notification-message-template',
    props: {
        type: {
            type: String,
            default: 'info'
        },
        header: {
            type: String,
            default: 'Titulo'
        }
    },
    data () {
        return {
            hidden: false
        }
    },
    methods: {
        hide () {
            this.hidden = true
        }
    }
}
new Vue({
    el: '#app',
    components: {
        'notification-message': NotificationMessage
    }
})