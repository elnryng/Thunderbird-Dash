import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);
/* -----------------
    Demo Script
----------------- */
// var Cont={val:1} , NewVal = 65;

// TweenLite.to(Cont,5,{val:NewVal,roundProps:"val",onUpdate:function(){
//   document.getElementById("counter").innerHTML=Cont.val
// }});
export function speedometerAnimation() {
    var Cont={val:0} , NewVal = 65;
    const speedometer = gsap.timeline();
    speedometer.from("#speedometerOutline", {drawSVG: "0%", duration: 2},"first")
                .from("#speedometerWhiteOutline", {alpha:0})
                .from("#speedometerFill", {drawSVG: "0%", duration: 3, ease: "power4.out"},"second")
                .from("#speedval", {alpha: 0}, "first")
                .from("#mph", {alpha: 0},"first")
                .to(Cont,3,{val:NewVal,roundProps:"val",onUpdate:function(){

        document.getElementById("speedval").innerHTML=Cont.val
      }},"second");
        
            // .from("#bgShape", {alpha: 0})
            // .from("#TStem", {drawSVG: "0%", duration: 1}, "t")
            // .from("#TCrossbar", {drawSVG: "0%", duration: 1}, "t")
            // .from("#script", {drawSVG: "0%", duration: 2}, "t")
            // .to("#ThunderbirdLogo", {y: -1000, duration: 1})



return speedometer
}


