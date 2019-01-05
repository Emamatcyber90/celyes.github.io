var app = new Vue({
    el: "#app",
    data: {
        title: "Circale",
        name : prompt("ما هو إسمك ؟"),
        cfb: "https://fb.com/celyes01",
        gfb: "https://fb.com/groups/CircaleWebTeam/"
    },
    methods: {
        checkName: function(){
            if(this.name==""){
                document.getElementById('#welcome').style.display="none"
            }
        }
    },
    beforeMount(){
        this.checkName()
    }
})