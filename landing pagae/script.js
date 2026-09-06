/* =========================================
   FIXED BCCI
   JAVASCRIPT
========================================= */


/* =========================================
   PARTICLES
========================================= */

const particleContainer =
    document.getElementById("particles");

for (let i = 0; i < 45; i++) {

    const particle =
        document.createElement("span");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (4 + Math.random() * 6) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.opacity =
        Math.random();

    particleContainer.appendChild(particle);
}


/* =========================================
   MOUSE GLOW
========================================= */

document.addEventListener(
    "mousemove",
    function (event) {

        const x = event.clientX;
        const y = event.clientY;

        document.body.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(0, 100, 220, 0.13),
                transparent 300px
            ),
            radial-gradient(
                circle at 50% 5%,
                #063b79 0%,
                #021b3d 28%,
                transparent 55%
            ),
            #010713
        `;
    }
);


/* =========================================
   BUTTON CLICK
========================================= */

const joinButton =
    document.querySelector(".join-button");

joinButton.addEventListener(
    "click",
    function () {

        console.log(
            "FIXED BCCI Telegram button clicked"
        );

    }
);


/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener(
    "load",
    function () {

        console.log(
            "FIXED BCCI Landing Page Loaded!"
        );

    }
);