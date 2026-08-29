/* =====================================================
              MENU AKTIF SAAT SCROLL
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        "nav a"
    );


function updateActiveNav() {


    let current =
        "tentang";


    sections.forEach(
        section => {


            const top =
                section.offsetTop - 150;


            if (
                window.scrollY >= top
            ) {

                current =
                    section.id;

            }


        }
    );


    navLinks.forEach(
        link => {


            const target =
                link.getAttribute(
                    "href"
                );


            link.classList.toggle(

                "active",

                target ===
                "#" + current

            );


        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


updateActiveNav();



/* =====================================================
                    TAHUN OTOMATIS
===================================================== */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();



/* =====================================================
              EFEK JELLY SAAT NAMA DIKLIK
===================================================== */

const jellyName =
    document.querySelector(
        ".jelly-name"
    );


jellyName.addEventListener(
    "click",
    function () {


        this.style.animation =
            "none";


        this.offsetHeight;


        this.style.animation =
            "jelly 0.9s ease-in-out";


    }
);
