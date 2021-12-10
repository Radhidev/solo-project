/*withdrawcode*/
var ballance =$("#lastname").val()
$("#twenty").click(function(){
    var y = ballance -20
alert( "your new ballance is "+ y)})

var ballance =$("#lastname").val()
$("#fifty").click(function(){
    var y = ballance -50
alert( "your new ballance is "+ y)})

var ballance =$("#lastname").val()
$("#seventy").click(function(){
    var y = ballance -70
alert( "your new ballance is "+ y)})

var ballance =$("#lastname").val()
$("#onehundred").click(function(){
    var y = ballance -100
alert( "your new ballance is "+ y)})
/*depositcode*/
$("#depositconfirm").click(function(){
    var deposit=$("#depositnumber").val()

    var y = ballance+deposit
alert( "your new ballance is "+y)})




