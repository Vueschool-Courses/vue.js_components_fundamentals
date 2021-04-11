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
    el: '#app',
    data: {
        plans: [
            'The Hacker',
            'The Traveler',
            'The Rider'
        ]
    }
})