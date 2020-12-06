import {gsap} from "gsap";

export function fuelAnimation() {
    const fuel = gsap.timeline();
    fuel.from("#fuelgaugeClip", {alpha:0, duration: 1})
        .from("#fuel", {y:480, duration: 2},"fill")
        .fromTo("#fuel", {x:0}, {duration:2, ease: "none", repeat:3, yoyo:true, x:-170}, "fill")


return fuel
}