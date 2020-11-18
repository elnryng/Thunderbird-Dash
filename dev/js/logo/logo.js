import {gsap} from "gsap";


/* -----------------
    Demo Script
----------------- */

export function logobodyAnimation() {
    const logobody = gsap.timeline();
    logobody.from("#ThunderbirdLogo", {y: 1000, duration: 3}
    );



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