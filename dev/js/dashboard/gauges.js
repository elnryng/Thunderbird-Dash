import {gsap} from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


export function gaugesAnimation() {
    const gauges = gsap.timeline();
    gauges.from("#tempOutline", {drawSVG: "0%", duration: 2},"gaugedraw")
            .from("#rpmOutline", {drawSVG: "0%", duration: 2},"gaugedraw")
                .from("#tempWhiteOutline", {alpha:0},"needle")
                .from("#rpmWhiteOutline", {alpha:0},"needle")
                .from("#tempNeedle", {alpha: 0},"needle")
                .from("#rpmNeedle", {alpha: 0},"needle")
                .from("#temperature", {alpha:0},"text")
                .from("#rpmx1000", {alpha:0},"text")
                .from("#H", {alpha: 0},"measure")
                .from(".num",{alpha: 0, stagger: 0.2},"measure")
                .to("#rpmNeedle", {rotation: 150, duration: 3, transformOrigin: "top" })
                .from("#C", {alpha: 0}, "measure")
                .to("#tempNeedle", {rotation: -165, transformOrigin: "top" })
        
            
return gauges
}