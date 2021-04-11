const GithubUserCard = {
    template: '#github-user-card-template',
    props: {
        username: {
            type: String,
            default: 'juanhz02',
            required: true
        }
    },    
    data () {
        return {
            user: {}
        }
    },
    created(){
        axios.get('https://api.github.com/users/' + this.username)
        .then(response => {
            this.user = response.data
        })
    }
}
new Vue({
    el: '#app',
    components: {
        'github-user-card': GithubUserCard
    },
    data: {
        usernames: ['hootlex', 'juanhz02', 'akryum', 'rahaug','sdras']
    }

})