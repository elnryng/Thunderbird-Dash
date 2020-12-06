import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export function clockAnimation() {
    const clock = gsap.timeline();
    clock.from("#clockOutline", {drawSVG: "0%", duration: 1})
        .from("#clockWhiteOutline", {alpha:0})
        .from(".numbers", {alpha: 0, stagger: 0.2})
        .from("#hourHand", {drawSVG: "0%"})
        .from("#minuteHand", {drawSVG: "0%"})
        .from("#secondHand", {drawSVG: "0%"})
        .to("#secondHand", {rotation: 120, ease: "steps(20)", duration: 20},"last")
        .from(".ticks", {alpha: 0, stagger: 0.2},"last")

return clock
}