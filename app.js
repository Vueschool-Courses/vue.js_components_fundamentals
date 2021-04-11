Vue.component('plan-picker', {
    template: '#plan-picker-template',
    data() {
        return {
            plans: [
                'The Hacker',
                'The Traveler',
                'The Rider'
            ]
        }
    }
})

Vue.component('plan', {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            default: 'Codigo Atomico',
            required: true
        }
    }   
})

new Vue({
    el: '#app'
})