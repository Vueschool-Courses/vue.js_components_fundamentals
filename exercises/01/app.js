
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
            img: null,
            name: null,
            joined: null,
            bio: null,
            followers: null
        }
    },
    created(){
        axios.get('https://api.github.com/users/' + this.username)
        .then(response => {
            const data = response.data
            this.img = data.avatar_url
            this.name = data.name
            this.joined = data.created_at
            this.bio = data.bio
            this.followers = data.followers
        })
    }
}
new Vue({
    el: '#app',
    components: {
        'github-user-card': GithubUserCard
    }

})