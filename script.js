
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigeer:"#nav",
        scroller:"body",
        start:"top -10%",
        end: "top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    
    scrollTrigger:{
        trigeer:"#main",
        scroller:"body",
        start:"top -10%",
        end: "top -80%",
        scrub:5

    }
})
