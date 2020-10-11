
window.addEventListener("load",function(){
    var shapeElement=document.querySelector(".background");
    var frames=[
        {transform:'translateX(100%)'},
      
        {transform:'translateX(-100%)'}
    ]
    var timings={
        duration: 36000,
        iterations:Infinity,
        // Delay starting by 500ms.
       //  delay: 1000,
      //  direction:"alternate" // reverse
    }

    var shapeAnimate=shapeElement.animate(frames,timings)


    document.querySelector('.wrapper').addEventListener("click",function(){
        shapeAnimate.updatePlaybackRate(shapeAnimate.playbackRate * 1.5)
    })
})