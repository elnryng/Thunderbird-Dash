import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


export function radioAnimation() {
    const radio = gsap.timeline();
    radio.from(".bigLine", {drawSVG: "0%", stagger: 0.1})
        .from(".smallLine", {drawSVG: "0%", stagger: 0.1})
        .from("#radioNeedle", {alpha: 0, y: -50})
        .to("#radioNeedle", {x:300, duration: 3})
        .from("#ShBoombytheChords", {alpha: 0})
            


return radio
}