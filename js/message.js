!function(){
    var view = View('#message')

    var model = Model({resourceName: 'Message'})

    var controller = {
        view: null,
        model: null,
        messageList: null,
        init: function(view,model){
            this.view = view
            this.model = model
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('#postMessageForm')
            this.model.initAV()
            this.loadMessages()
            this.bindEvents()
        },
        
        loadMessages: function(){
           this.model.fetch()
            .then((messages)=> {
                let array = messages.map((item)=>item.attributes)
                array.forEach((item) => {
                    let li = document.createElement('li')
                    li.innerText = `${item.name}: ${item.content}`
                    this.messageList.appendChild(li)
                });
                // 成功获得实例
            }//, function (error) {
                //alert('提交失败，改天再来哦V_V')}// 异常处理
            )//.then(()=>{},(error)=>{console.log(error)})

        },
        bindEvents: function(){
            this.form.addEventListener('submit',(e)=>{     //‘submit’包含提交按钮被点击、任意一行input打回车两个事件
                e.preventDefault()
                this.saveMessages()
            }) 
        },
        saveMessages: function(){
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            
            this.model.save({'name':name,'content':content})
             .then(function(object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                messageList.appendChild(li)
                view.querySelector('input[name=content]').value = ''
                /*window.location.reload()  //成功提交后自动帮用户刷新页面，但用户体验极差*/
                //console.log(object);
            })
        } 
    }
    controller.init(view,model)

}.call()


/*
//创建TestObject表
var TestObject = AV.Object.extend('Sage');
//在表中创建一行数据
var testObject = new TestObject();
//数据内容是words:'Hello World!'保存
//如果保存成功则运行alert('')
testObject.save({
  words: '你好鸡腿!'
}).then(function(object) {
  alert('你好鸡腿!');
})
*/