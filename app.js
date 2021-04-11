//Local Component: Solo funciona dentro del componente que lo invoca, no puede ser usado en cualquier lugar de la aplicacion y al ser transpilado si no es invocado no genera carga en JS
let PlanComponent = {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            default: 'Codigo Atomico',
            required: true
        },
        selectedPlan: {
            type: String
        }
    },  
    computed : {
        isSelected(){
            return this.name === this.selectedPlan
        }
    },
    methods: {
        select (){
            this.$emit('select', this.name)
        }
    }
}

//Global component: Puede ser llamado en cualquier lugar de la aplicacion, tambien cuando es transpilado por el webpack generando mas carga en el JS
/* Se deja en comentario estructura de ejemplo
Vue.component('plan-picker', {
    template: '#plan-picker-template',
    components: {
        plan: PlanComponent
    },
    data() {
        return {
            plans: [
                'The Hacker',
                'The Traveler',
                'The Rider'
            ]
        }
    }
})*/

let PlanPickerComponent = {
    template: '#plan-picker-template',
    components: {
        plan: PlanComponent
    },
    data() {
        return {
            plans: [
                'The Hacker',
                'The Traveler',
                'The Rider'
            ],
            selectedPlan: null
        }
    },
    methods: {
        selectPlan(plan){
            this.selectedPlan = plan
        }
    }
}


new Vue({
    el: '#app',
    components: {
        'plan-picker': PlanPickerComponent
    },
})