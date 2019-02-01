var app = new Vue({
    el: "#termulator",
    data: {
        user: "ilyes",
        pc: "jarvis",
        content: ''
    },
    methods: {
        focusElement(){
            document.querySelector('#caret').focus()
        }
    }
})