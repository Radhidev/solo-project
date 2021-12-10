/*withdrawcode*/
var ballance =$("#lastname").val()
$("#twenty").click(function(){
    var audio = document.getElementById('audio20')
    var y = ballance -20
    audio.play()
    alert( "your new ballance is "+ y)

})

var ballance =$("#lastname").val()
$("#fifty").click(function(){
    var audio = document.getElementById('audio50')
    var y = ballance -50
    audio.play()
alert( "your new ballance is "+ y)})

var ballance =$("#lastname").val()
$("#seventy").click(function(){
    var audio = document.getElementById('audio70')
    var y = ballance -70
    audio.play()
alert( "your new ballance is "+ y)})

var ballance =$("#lastname").val()
$("#onehundred").click(function(){
    var audio = document.getElementById('audio100')
    var y = ballance -100
    audio.play()
alert( "your new ballance is "+ y)})
/*depositcode*/
$("#depositconfirm").click(function(){
    var deposit=$("#depositnumber").val()
    var y = ballance+deposit
alert("your new ballance is "+y)
$("audio20").append()
})






