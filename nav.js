document.addEventListener("DOMContentLoaded", () => {
    const navBar = document.querySelector(".nav-bar");
    const header = document.querySelector(".header-style");
    let i = 2;

    function myFunction(x) {
        if (x.matches) { 
            const template1 = `
            <section class="logo">
                <h2 class="h2-logo">MAN.LEO 👋</h2>
            </section>
            <div id="drop-down">
                <button type="button" id="drop"><i class="fa-solid fa-bars"></i></button>
                <div id="dropdown-menu">
                    <a href="./index.html">HOME</a>
                    <a href="#abt">ABOUT ME</a>
                    <a href="#known">KNOWLENDGE</a>
                    <a href="#prjct">MY PROJECTS</a>
                </div>
            </div>
            `;

            header.innerHTML = template1;
            const x = document.querySelector("#drop");
            const y = document.querySelector("#dropdown-menu");
            x.addEventListener("click", (e) => {
                if (i%2 === 0) {
                    y.style.display = "block";
                } else {
                    y.style.display = "none";
                }
                i++;
            });
        } else {
            const template2 = `
            <section class="logo">
                <h2 class="h2-logo">MAN.LEO 👋</h2>
            </section>
            <section class="nav-bar">
                <ul class="list">
                    <li class="link"><a href="./index.html">HOME</a></li>
                    <li class="link"><a href="#abt">ABOUT ME</a></li>
                    <li class="link"><a href="#known">KNOWLENDGE</a></li>
                    <li class="link"><a href="#prjct">MY PROJECTS</a>
                    </li>
                </ul>
            </section>
            `;

            header.innerHTML = template2;
        }
      }

    var x = window.matchMedia("(max-width: 800px)");
    myFunction(x);
    x.addListener(myFunction);
});