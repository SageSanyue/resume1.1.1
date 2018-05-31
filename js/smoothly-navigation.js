let aTags = document.querySelectorAll('nav.menu > ul > li > a')


function animate(time){
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for(let i=0;i<aTags.length;i++){
   aTags[i].onclick = function(x){
     x.preventDefault()  //阻止默认事件

     let a = x.currentTarget

     let href = a.getAttribute('href')   //'#siteAbout'
     let element = document.querySelector(href)
     //debugger
     //let rect = element.getBoundingClientRect()   //元素距窗口顶端的距离
     //console.log(rect.top)
     //console.log(element.offsetTop) //元素距页面最顶端的距离，而不是距窗口顶端的距离
     let top = element.offsetTop

     let currentTop = window.scrollY
     let targetTop = top-80
     let s = targetTop - currentTop
     //console.log(s)
     var coords = {y:currentTop}
     var t = Math.abs((s/100)*300)   //距离s可以为负，但时间不能为负
     //var t = (s/100)*300
     if(t>500){t = 500}
     var tween = new TWEEN.Tween(coords)
       .to({y:targetTop},t)
       .easing(TWEEN.Easing.Quadratic.InOut)    //淡入淡出
       .onUpdate(function(){
        window.scrollTo(0,coords.y)
       })
       .start();
    }
}  