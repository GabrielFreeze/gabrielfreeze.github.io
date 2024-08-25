function fadeOut() {
    var main = document.getElementsByTagName("main")[0];
    main.animate({
        opacity: 0
    }, 400, function () {
        $(document).css("display", "none");
    });

    setTimeout(function () {
        main.style.display = "none";
    }, 300);
}

var links = document.getElementsByClassName("navanimate");

for (let link of links) {
    link.addEventListener("mouseenter", function () {
        link.classList.add("hovered");
    });
}

function showMobileNav() {
    var mobileNav = document.getElementById("nav-mobile");

    if (mobileNav.style.display === "none") {
        mobileNav.style.display = "flex";
        // prevent all scrolling
        document.body.style.overflowY = "hidden";
    }
    else {
        mobileNav.animate({
            opacity: 0
        }, 200);

        setTimeout(function () {
            mobileNav.style.display = "none";
        }, 200);
        
        // allow scrolling
        document.body.style.overflowY = "scroll";
    }
}

// function darkMode(dark) {
//     // get cv from index
//     var cv = document.getElementById("cv");
//     console.log(cv)

//     // change colours in root
//     var root = document.documentElement;

//     if (dark) {

//         root.style.setProperty('--white', '#0D1117');
//         root.style.setProperty('--whitedim', '#121820');
//         root.style.setProperty('--dim', '#5b5b61');
//         root.style.setProperty('--dimselect', '#b6c0ce');
//         root.style.setProperty('--navy', '#f5f5f5');
//         root.style.setProperty('--lightnavy', '#b6c0ce');
//         root.style.setProperty('--border', '#dbe1e9');
//         root.style.setProperty('--link', '#51698a');
//         root.style.setProperty('--linkhover', '#6a83a7');

//         setTimeout(function () {
//             cv.src = "images/cv-light.png";
//         }, 200);

//     }
//     else {
//         root.style.setProperty('--white', '#f5f5f5');
//         root.style.setProperty('--whitedim', '#e4e4e4');
//         root.style.setProperty('--dim', '#5b5b61');
//         root.style.setProperty('--dimselect', '#707076');
//         root.style.setProperty('--navy', '#0D1117');
//         root.style.setProperty('--lightnavy', '#121820');
//         root.style.setProperty('--border', '#b6c0ce');
//         root.style.setProperty('--link', '#5278ad');
//         root.style.setProperty('--linkhover', '#3c5e99');

//         setTimeout(function () {
//             cv.src = "images/cv.png";
//         }, 200);
//     }
// }
