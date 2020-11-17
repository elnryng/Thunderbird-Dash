import {gsap} from "gsap";


/* -----------------
    Demo Script
----------------- */

var Speed = 2;

var demoTimeline = gsap.timeline();

demoTimeline.to(".blue-ball",
{duration: Speed, 
    width: 150, 
    repeat: 100, 
    y: 200,
    yoyo: true
    })

    .to(".red-ball",
{duration: Speed, 
    width: 150, 
    repeat: 100, 
    y: 200,
    yoyo: true 
    })

    .to(".yellow-ball",
{duration: Speed, 
    width: 150, 
    repeat: 100,
    y: 200, 
    yoyo: true
    })
