import {gsap} from "gsap";

export function fuelAnimation() {
    const fuel = gsap.timeline();
    fuel.from("#fuelgaugeClip", {alpha:0, duration: 1})
        .from("#fuel", {y:450, duration: 2},"fill")
        .fromTo("#fuel", {x:-10}, {duration:2, ease: "none", repeat:3, yoyo:true, x:200}, "fill")

    
    // phm.from("#speedval", {alpha: 0})
    // mph.to(Cont,3,{val:NewVal,roundProps:"val",onUpdate:function(){

    //     document.getElementById("speedval").innerHTML=Cont.val
    //   }});
            // .from("#bgShape", {alpha: 0})
            // .from("#TStem", {drawSVG: "0%", duration: 1}, "t")
            // .from("#TCrossbar", {drawSVG: "0%", duration: 1}, "t")
            // .from("#script", {drawSVG: "0%", duration: 2}, "t")
            // .to("#ThunderbirdLogo", {y: -1000, duration: 1})
return fuel
}