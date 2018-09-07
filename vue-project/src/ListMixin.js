export default {
    data(){
        return {
            search: '',
            names: ['Ivan', "Oleg", "Anna"]
        }
    },
    computed: {
        filtered: function () {
            return this.names.filter(name => name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
        }
    },
}