const load = gsap.timeline();
load.to(".power-on",{
    delay: 8,
    duration: 1,
    opacity: 0
});
load.from(".load-screen",{
    duration: .2,
    opacity: 0
},"-=1");
load.to(".load-screen",{
    duration: .5,
    delay: 3,
    opacity: 0
});
load.to(".load-screen, .power-on",{
    display: "none"
});

const start = gsap.timeline({
    paused: "true"
});

start.to("#start-menu",{
    opacity: 1,
    y: "0%",
    duration: .5
});

function openmenu(){
    start.reversed() ? start.play() : start.reverse();
}