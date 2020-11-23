import { logobodyAnimation } from './logo/logo.js';
import { speedometerAnimation } from './dashboard/speedometer.js';
import { fuelAnimation } from './dashboard/fuelgauge.js';
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);

var mainTL = gsap.timeline();

mainTL.add(logobodyAnimation())
        .add(speedometerAnimation(),">-1")
        .add(fuelAnimation(),">-5")
    
    






//instantiate GSDevTools with default settings
GSDevTools.create();
