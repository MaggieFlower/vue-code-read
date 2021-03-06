
let treeData = [{
    "title": "1",
    "key": "1",
    "children": [
        {
            "title": "1-1",
            "key": "1-1",
            "children": [
                { "title": "1-1-1", "key": "1-1-1" },
                { "title": "1-1-2", "key": "1-1-2" },
                { "title": "1-1-3", "key": "1-1-3" }
            ]
        }, 
        {
            "title": "1-2",
            "key": "1-2",
            "children": [
                { "title": "1-2-1", "key": "1-2-1" },
                { "title": "1-2-2", "key": "1-2-2" },
                { "title": "1-2-3", "key": "1-2-3" }
            ]
        }, 
        {
            "title": "1-3",
            "key": "1-3"
        }
    ]
  }, 
  {
    "title": "2",
    "key": "2",
    "disabled": "true",
    "children": [
        { "title": "2-1", "key": "2-1" },
        { "title": "2-2", "key": "2-2" },
        { "title": "2-3", "key": "2-3" }
    ]
  }, 
  {
    "title": "3",
    "key": "3"
  }]


Vue.component('cascader', {
    template: '.cascader',
    data() {
        return {
            open: false,
            currentInput: [],
        }
    },

})

new Vue({
    el: '#app',
    data: {
        treeData,
    }
})
