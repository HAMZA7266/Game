var pi = document.getElementById("backwards")
var lath = document.getElementById("lat")
var go = document.getElementById("forward")
var jj = document.getElementById("j")
var call = document.getElementById("spidy")
var call2 = document.getElementById("spidy2")
var call3 = document.getElementById("spidy3")
var call4 = document.getElementById("spidy4")
var call5 = document.getElementById("spidy5")
var incriment = 0
var left_increase = 0

document.addEventListener("keydown", (e)=>{


if(e.key=="s"){
    incriment+=0.1
    call.style.display="none"
    call2.style.display="none"
    call3.style.display="none"
    call4.style.display="none"
    call5.style.display="flex"
    call.style.left=incriment+"px"
    call5.style.left=incriment+"px"
    lath.style.backgroundColor="grey"



}

    if(e.key=="w"){
        incriment+=1
        call.style.display="none"
        call2.style.display="none"
        call3.style.display="none"
        call4.style.display="flex"
        call4.style.left=incriment+"px"
        jj.style.backgroundColor="grey"
      
        

    }
    if(e.key=="d"){
    incriment+=5
    call2.style.left=incriment+"px"
   
call2.style.display="flex"
call.style.display="none"
go.style.backgroundColor="grey"
}


if(e.key=="a"){
    incriment-=5
call3.style.left=incriment+"px"

call3.style.display="flex"
call.style.display="none"
pi.style.backgroundColor="grey"


document.addEventListener("keyup", function(e){
call2.style.display="none"
call.style.display="flex"
call.style.left=incriment+"px"
go.style.backgroundColor="black"


call3.style.display="none"
call.style.display="flex"
call.style.left=incriment+"px"
pi.style.backgroundColor="black"
})

document.addEventListener("keyup", function(e){
    call3.style.display="flex"
    call2.style.display="none"
    call4.style.display="none"
    call3.style.left=incriment+"px"
    call4.style.left=incriment+"px"
    call.style.left=incriment+"px"
    jj.style.backgroundColor="black"
    
})
document.addEventListener("keyup", function(e){
    call5.style.display="none"
    call.style.display="flex"
    call.style.left=incriment+"px"
    call2.style.left=incriment+"px"
    call3.style.left=incriment+"px"
    call4.style.left=incriment+"px"
    lath.style.backgroundColor="black"
})

document.addEventListener("keyup", function(e){
 
    
    call3.style.display="none"
    call.style.display="flex"
    call.style.right=left_increase+"px"
    })


}
}


)


// ironman






var jump = document.getElementById("jumpup")
var attack = document.getElementById("attack")

var front = document.getElementById("movefront")
var back = document.getElementById("moveback")

var iron5= document.getElementById("fly")
var iron4 = document.getElementById("kick")

var iron3=document.getElementById("WALK2")

var iron2=document.getElementById("WALK")
var iron1=document.getElementById("ironmanstand")

var increase = 0

document.addEventListener("keydown", function(e){

    // if(e.key=="6"){
    // increase-=5
    // iron3.style.left=increase+"px"
    // iron1.style.display="none"
    // iron2.style.display="none"
    // iron3.style.display="flex"
    
    
    // }
if(e.key=="4"){
    increase+=5
    iron2.style.right=increase+"px"
iron1.style.display="none"
iron2.style.display="flex"
front.style.backgroundColor="grey"



    
}
if(e.key=="6"){
increase-=5
iron3.style.display="flex"
iron1.style.display="none"
iron3.style.right=increase+"px"
iron2.style.display="none"
back.style.backgroundColor="grey"

}

if(e.key=="5"){
increase+=0.1
iron1.style.display="none"
iron2.style.display="none"
iron3.style.display="none"
iron4.style.display="flex"
iron4.style.right=increase+"px"
attack.style.backgroundColor="grey"
}

if(e.key=="8"){
    increase+=1
iron1.style.display="none"
iron2.style.display="none"
iron3.style.display="none"
iron4.style.display="none"
iron5.style.display="flex"
iron5.style.right=increase+"px"
jump.style.backgroundColor="grey"

}

}) 





document.addEventListener("keyup", function(e){
 iron1.style.display="flex"
 iron2.style.display="none"
 iron1.style.right=increase+"px"
 front.style.backgroundColor="black"

 
    
 

}


)

document.addEventListener("keyup", function(e){
iron1.style.display="flex"
iron1.style.right=increase+"px"
iron5.style.display="none"
jump.style.backgroundColor="black"
    
    
})
document.addEventListener("keyup", function(e){
    iron2.style.display="none"
    iron3.style.display="none"
    iron1.style.display="flex"
    iron1.style.right=increase+"px"
    back.style.backgroundColor="black"
    
    
})
document.addEventListener("keyup", function(e){
 iron4.style.display="none"
 iron1.style.display="flex"
 iron1.style.right=increase+"px"
 attack.style.backgroundColor="black"
 
    
    
})

// document.addEventListener("keyup", function(e){

//     iron1.style.display="flex"
//     iron3.style.display="none"
//     iron1.style.left=increase="px"
 
//     iron2.style.left=increase+"px"

// })



















// move left

// document.addEventListener("keydown", (e)=>{
//     if(e.key=="a"){
//         left_increase+=5
//     call3.style.right=left_increase+"px"
   
// call3.style.display="flex"
// call.style.display="none"}
// }
// )
// document.addEventListener("keyup", function(e){
// call3.style.display="none"
// call.style.display="flex"
// call.style.right=left_increase+"px"
// })



// keys


