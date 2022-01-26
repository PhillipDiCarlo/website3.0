let header = document.querySelector('#intro');
let anim = [
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{ }", ms: 200 },
    { t: "{_}", ms: 200 },
    { t: "{P_}", ms: 100 },
    { t: "{PH_}", ms: 100 },
    { t: "{PHI_}", ms: 100 },
    { t: "{PHIL_}", ms: 100 },
    { t: "{PHILL_}", ms: 100 },
    { t: "{PHILLI_}", ms: 100 },
    { t: "{PHILLIP_}", ms: 100 },
    { t: "{PHILLIP _}", ms: 100 },
    { t: "{PHILLIP D_}", ms: 100 },
    { t: "{PHILLIP DI_}", ms: 100 },
    { t: "{PHILLIP DIC_}", ms: 100 },
    { t: "{PHILLIP DICA_}", ms: 100 },
    { t: "{PHILLIP DICAR_}", ms: 100 },
    { t: "{PHILLIP DICARL_}", ms: 100 },
    { t: "{PHILLIP DICARLO_}", ms: 100 },
    { t: "{PHILLIP DICARLO }", ms: 200 },
    { t: "{PHILLIP DICARLO_}", ms: 200 },
    { t: "{PHILLIP DICARLO }", ms: 200 },
    { t: "{PHILLIP DICARLO_}", ms: 200 },
    { t: "{PHILLIP DICARLO}", ms: 200 },
    { t: "{PHILLIP DICARLO}", ms: 200 }
];
let stepDenominator = 1;
if (window.localStorage.stepDenominator)
    stepDenominator = window.localStorage.stepDenominator;
let i = 0;
let update = () => {
    let step = anim[i];
    header.innerText = step.t;
    i++;

    if (i < anim.length)
        setTimeout(update, step.ms / stepDenominator);
    else {
        header.classList.add('top');
        setTimeout(() => {
            document.getElementById('main').style.opacity = 1;
            initGlobe();
        }, 500);
        window.localStorage.stepDenominator = 2;
    }
}
update();