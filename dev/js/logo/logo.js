import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);
/* -----------------
    Demo Script
----------------- */

export function logobodyAnimation() {
    const logobody = gsap.timeline();
    logobody.from("#ThunderbirdLogo", {y: 1000, duration: 2})
            .from("#bgShape", {alpha: 0})
            .from("#TStem", {drawSVG: "0%", duration: 1}, "t")
            .from("#TCrossbar", {drawSVG: "0%", duration: 1}, "t")
            .from("#script", {drawSVG: "0%", duration: 2}, "t")
            .to("#ThunderbirdLogo", {y: -1000, duration: 1, delay: 0.5})



return logobody
}


// logobody.to("#body")


// var Speed = 2;

// var demoTimeline = gsap.timeline();

// demoTimeline.to(".blue-ball",
// {duration: Speed, 
//     width: 150, 
//     repeat: 100, 
//     y: 200,
//     yoyo: true
//     })

//     .to(".red-ball",
// {duration: Speed, 
//     width: 150, 
//     repeat: 100, 
//     y: 200,
//     yoyo: true 
//     })

//     .to(".yellow-ball",
// {duration: Speed, 
//     width: 150, 
//     repeat: 100,
//     y: 200, 
//     yoyo: true
//     })

// console.log