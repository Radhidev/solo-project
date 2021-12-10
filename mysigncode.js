$("#mywithdraw").hide()
$("#myatm").hide()
$("#mydeposit").hide()
$("#login").hide()
$(".mysignsubmit").click(function(){
$("#sign").hide()
$("#login").show()
$("#myatm").hide()
$("#mydeposit").hide() 
$("#mywithdraw").hide()
})

$("#myloginsubmit").click(function(){
$("#sign").hide()
$("#login").hide()
$("#myatm").show()
$("#mywithdraw").hide()
$("#mydeposit").hide() 
})

$("#withdraw").click(function(){
$("#sign").hide()
$("#login").hide()
$("#mydeposit").hide() 
$("#myatm").hide()
$("#mywithdraw").show()
})

$("#deposit").click(function(){
$("#sign").hide()
$("#login").hide()
$("#myatm").hide()
$("#mywithdraw").hide()
$("#mydeposit").show()
})
                                                             
$("#already").click(function(){
$("#sign").hide()
$("#login").show()
$("#myatm").hide()
$("#mydeposit").hide() 
$("#mywithdraw").hide()
})
                                                   
$("#gobacklogin").click(function(){
$("#sign").show()
$("#login").hide()
$("#myatm").hide()
$("#mydeposit").hide() 
$("#mywithdraw").hide()
})
                                                                        
$("#exit").click(function(){
$("#sign").show()
$("#login").hide()
$("#myatm").hide()
$("#mydeposit").hide() 
$("#mywithdraw").hide()
})

$("#gobackdeposit").click(function(){
$("#sign").hide()
$("#login").hide()
$("#myatm").show()
$("#mywithdraw").hide()
$("#mydeposit").hide() 
})
    
$("#gobackwithdraw").click(function(){
$("#sign").hide()
$("#login").hide()
$("#myatm").show()
$("#mywithdraw").hide()
$("#mydeposit").hide() 
})

