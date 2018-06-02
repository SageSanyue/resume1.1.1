/*
var model = Model({
    resourceName: '表名'
})
*/
window.Model = function(options){
    let resourceName = options.resourceName
    return {
        initAV: function(){
            var APP_ID = 'lnYDv3m6R5VNPLToaA8JyctT-gzGzoHsz';
            var APP_KEY = 'vVHnKetuOn6PBosNlkXm3RB5';

            AV.init({appId: APP_ID,appKey: APP_KEY}) 
        },
        fetch: function(){
            var query = new AV.Query(resourceName)
            return query.find()     //Promise对象
        },
        save: function(object){
            var M = AV.Object.extend(resourceName)
            var m = new M()
            return m.save(object)    //Promise对象 
        }
    }
}