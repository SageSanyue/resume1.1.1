var APP_ID = 'lnYDv3m6R5VNPLToaA8JyctT-gzGzoHsz';
var APP_KEY = 'vVHnKetuOn6PBosNlkXm3RB5';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message')
query.find().then(function (messages) {
   /* console.log(messages)
    console.log(messages[0].attributes)
    console.log(messages[1].attributes)*/
    let array = messages.map((item)=>item.attributes)
    array.forEach((item) => {
        let li = document.createElement('li')
        li.innerText = `${item.name}: ${item.content}`
        messageList.appendChild(li)
    });
    // 成功获得实例
  }//, function (error) {
    //alert('提交失败，改天再来哦V_V')}// 异常处理
)//.then(()=>{},(error)=>{console.log(error)})

let myForm = document.querySelector("#postMessageForm")

myForm.addEventListener('submit',function(e){     //‘submit’包含提交按钮被点击、任意一行input打回车两个事件
  e.preventDefault()
  let content = myForm.querySelector('input[name=content]').value
  let name = myForm.querySelector('input[name=name]').value
  var Message = AV.Object.extend('Message')
  var message = new Message()
  message.save({
    'name': name,
    'content': content
  }).then(function(object) {
    let li = document.createElement('li')
    li.innerText = `${object.attributes.name}: ${object.attributes.content}`
    messageList.appendChild(li)
    myForm.querySelector('input[name=content]').value = ''
    /*window.location.reload()  //成功提交后自动帮用户刷新页面，但用户体验极差*/
    //console.log(object);
  })
})
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