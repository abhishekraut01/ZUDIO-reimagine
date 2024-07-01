function locomotiveanimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}


function loadinganimation(){
    var tl = gsap.timeline()
tl.from(".line h1 ,#line1-part1 h5,#line1-part1 h6",{
    y: 150,
    stagger: 0.3,
    duration: 0.6,
    delay: 0.5
})
tl.from("#line-part1, .line h2", {
    opacity: 0,
    onStart: function () {
        var h5timer = document.querySelector("#line1-part1 h5")
        var grow = 0
        setInterval(function () {
            if (grow < 100) {
                h5timer.innerHTML = grow++
            } else {
                h5timer.innerHTML = grow
            }
        }, 1)
    }
});
tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})
tl.to("#loader", {
    opacity:0,
    delay: 0.1,
    duration:0.5,
    display:"none"
}); 
tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    ease:Power1
});
tl.to("#loader",{
    display:"none"
})
tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero3 h3,#hero4 h1",{
    y:160,
    stagger:0.2
})
tl.from("#nav",{
    opacity:0
})
tl.from(".hero ,#page2",{
    opacity:0
},"-=3")


    const h1Elements = document.querySelectorAll('#page4_right h1');
    const imgElements = document.querySelectorAll('#page4_left img');
    
    h1Elements.forEach(function(h1, index) {
    
    const img = imgElements[index];
    
    
    const tl = gsap.timeline({ paused: true });
    
    tl.to(img, { opacity: 1, duration: 0.3, scale: 1 });
    
    
        h1.addEventListener('mouseover', function() {
            tl.play(); 
        });
    
        h1.addEventListener('mouseout', function() {
            tl.reverse(); 
        });
    
        img.addEventListener('mouseover', function() {
            tl.play();
        });
    
        img.addEventListener('mouseout', function() {
    
        const isHovering = h1.matches(':hover') || img.matches(':hover');
            if (!isHovering) {
                tl.reverse();
                }
            });
        });
}
function curserAnimation(){
    var video =document.querySelector("#video-container video")
    Shery.mouseFollower()
    Shery.makeMagnet("#nav-part2 h4",{
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    Shery.makeMagnet("#lobo i,#bottom h1 ",{
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    Shery.makeMagnet("#btn-1",{
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    Shery.makeMagnet("#circle-btn",{
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
      Shery.imageMasker(".imgEffect" /* Element to target.*/, {
        //Parameters are optional.
        mouseFollower: true,
        text: "SHOP NOW",
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 2,
      });
      Shery.hoverWithMediaCircle(".right-text" /* Element to target.*/, {
        images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
        //videos: ["video1.mp4", "video2.mp4"],
      });
     
var videocontainer = document.querySelector("#video-container")
videocontainer.addEventListener("mouseenter",function(){
    videocontainer.addEventListener("mousemove",function(dets){
        gsap.to(".mouseFollower",{
            opacity:1
        });
        gsap.to("#video-cursor",{
            left:dets.x-500,
            y:dets.y-50
        });
    });
});
videocontainer.addEventListener("mouseleave",function(){
    gsap.to(".mouseFollower",{
        opacity:0
    });
    gsap.to("#video-cursor",{
        right: "20%",
        top: "-10%"
    });
});

var flag=0
videocontainer.addEventListener("click",function(){
    if(flag==0){    
        video.play()
        video.style.opacity = 1
        document.querySelector("#video-cursor").innerHTML=`<i class="ri-pause-line"></i>`
        gsap.to("#video-cursor",{
            scale:0.5
        })
        flag==1
    }
    else{
        video.pause()
        video.style.opacity = 0
        document.querySelector("#video-cursor").innerHTML=`<i class="ri-play-fill"></i>`
        gsap.to("#video-cursor",{
            scale:1
        })
        flag==0
    }
})
}



loadinganimation()
curserAnimation()
locomotiveanimation()
document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        x:dets.x,
        y:dets.y
    })
})
document.querySelector("#hero3").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity:1
    })
})
document.querySelector("#hero3 ").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity:0
    })
})
// ---------------------------------------------------- page 4---------------------------

// document.addEventListener('DOMContentLoaded', function() {
//     const h1Elements = document.querySelectorAll('#page4_right h1');
//     const imgElements = document.querySelectorAll('#page4_left img');
    
//     h1Elements.forEach(function(h1, index) {
    
//     const img = imgElements[index];
    
    
//     const tl = gsap.timeline({ paused: true });
    
//     tl.to(img, { opacity: 1, duration: 0.3, scale: 1 });
    
    
//         h1.addEventListener('mouseover', function() {
//             tl.play(); 
//         });
    
//         h1.addEventListener('mouseout', function() {
//             tl.reverse(); 
//         });
    
//         img.addEventListener('mouseover', function() {
//             tl.play();
//         });
    
//         img.addEventListener('mouseout', function() {
    
//         const isHovering = h1.matches(':hover') || img.matches(':hover');
//             if (!isHovering) {
//                 tl.reverse();
//                 }
//             });
//         });
//     });
    


