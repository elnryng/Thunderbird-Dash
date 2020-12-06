import { logobodyAnimation } from './logo/logo.js';
import { speedometerAnimation } from './dashboard/speedometer.js';
import { fuelAnimation } from './dashboard/fuelgauge.js';
import { clockAnimation } from './dashboard/clock.js';
import { radioAnimation } from './dashboard/radio.js';
import { gaugesAnimation } from './dashboard/gauges.js';
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

var mainTL = gsap.timeline();

mainTL.add(logobodyAnimation())
        .add(speedometerAnimation(),"same")
        .add(gaugesAnimation(),"same")
        .add(fuelAnimation(),"same")
        .add(clockAnimation(), ">-7")
        .add(radioAnimation(),">-23")
        
    
    






//instantiate GSDevTools with default settings
GSDevTools.create();
