const endpoint = "https://www.jsonstore.io/816216fbcd39d1cb88974767393cf418a5536e9d17dcddaacf9d2795468520ac/"

new Vue({
    el: '#app',

    data: {
        longurl : "",
        shorturl : ""
    },

    methods: {
    buildurl:function(longurl){
        this.shorturl=this.longurl+""
        return shorturl
        
    }
}
  });