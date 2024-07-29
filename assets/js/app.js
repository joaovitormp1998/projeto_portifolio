/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

document.addEventListener("DOMContentLoaded", function () {
    // Variável do cursor
    var cursor = document.querySelector('.pointer');

    // Atualizar a posição do cursor
    document.addEventListener('mousemove', function (e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    // Função para ocultar o cursor durante a rolagem
    var lastScrollY = window.scrollY;
    window.addEventListener('scroll', function () {
      if (window.scrollY !== lastScrollY) {
        cursor.style.opacity = '0';
        lastScrollY = window.scrollY;
      } else {
        cursor.style.opacity = '1';
      }
    });

    // Reexibir o cursor ao mover o mouse após a rolagem
    document.addEventListener('mousemove', function () {
      cursor.style.opacity = '1';
    });

    // Parâmetros do Particles.js
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 150,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#02e0ff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#02e0ff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    });
  });
  $(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    // $('a[href*="#"]').on('click', function (e) {
    //     e.preventDefault();
    //     $('html, body').animate({
    //         scrollTop: $($(this).attr('href')).offset().top,
    //     }, 500, 'linear')
    // });

    // <!-- emailjs to mail contato form data -->
    $("#contato-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contato_service', 'template_contato', '#contato-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contato-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contato form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfólio | João Vitor";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Voltar para Portfólio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Desenvolvedor Full-Stack", "Web Designer", "Desenvolvedor React/React Native", "Desenvolvedor Python/Django", "Desenvolvedor Angular", "Desenvolvedor Kotlin"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

async function fetchData(type = "habilidades") {
    let response
    type === "habilidades" ?
        response = await fetch("habilidades.json")
        :
        response = await fetch("./projetos/projetos.json")
    const data = await response.json();
    return data;
}

async function showHabilidades(habilidades) {
    let habilidadesContainer = document.getElementById("habilidadesContainer");
    let skillHTML = "";
    habilidades.forEach(skill => {
      skillHTML += `
        <div class="bar">
          <div class="info">
            <img src="${skill.icon}" alt="skill" />
            <span>${skill.name}</span>
          </div>
        </div>`;
    });
    habilidadesContainer.innerHTML = skillHTML;
  }
  async function criarAbas() {
    // Obtém o elemento da div das abas
    let tabsDiv = document.getElementById("tabs");

    // Obtém os dados do JSON
    let data = await fetchData();

    // Extrai as categorias do objeto de dados
    let categorias = Object.keys(data);

    // Verifica se há categorias
    if (categorias.length > 0) {
        // Cria os links das abas com base nas categorias do JSON
        categorias.forEach(categoria => {
            let tabLink = document.createElement("a");
            tabLink.href = "#"+categoria;
            tabLink.classList.add("tab-link");
            tabLink.dataset.category = categoria;
            tabLink.textContent = categoria;
            tabLink.addEventListener("click", function() {
                mostrarCategoria(categoria);
            });
            tabsDiv.appendChild(tabLink);
        });

        // Mostra as habilidades da primeira categoria por padrão
        mostrarCategoria(categorias[0]);
    } else {
        console.error("Não foram encontradas categorias nos dados.");
    }
}

criarAbas();
// Adicionar manipuladores de eventos para as abas
document.querySelectorAll('.tab-link').forEach(tab => {
    tab.addEventListener('click', async function() {
      // Remover a classe 'active' de todas as abas
      document.querySelectorAll('.tab-link').forEach(tab => {
        tab.classList.remove('active');
      });
      // Adicionar a classe 'active' à aba clicada
      this.classList.add('active');
      
      // Obter a categoria da aba clicada
      const category = this.getAttribute('data-category');
      
      // Obter as habilidades da categoria selecionada
      const data = await fetchData();
      const habilidades = data[category];
      
      // Exibir as habilidades da categoria selecionada
      showHabilidades(habilidades);
    });
  });
  async function mostrarCategoria(categoria) {
    const data = await fetchData();
    const habilidades = data[categoria];
    showHabilidades(habilidades);
}
 
function showProjects(projetos) {
    let projectsContainer = document.querySelector("#projetos .box-container");
    let projectHTML = "";
    projetos.slice(0, 10).filter(project => project.category != "android").forEach(project => {
        projectHTML += `
        <div class="box tilt">  <div class="media-container">
        ${project.hasVideo ? `<video src="/assets/videos/projetos/${project.video}.mp4" controls></video>` : `<img draggable="false" src="/assets/images/projetos/${project.image}.png" alt="project" />`}
      </div>
      <div class="content"> 
        <div class="tag">
        <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
          </div>
        </div>
      </div>
    </div>`
    });
    projectsContainer.innerHTML = projectHTML;

    // <!-- tilt js effect starts -->
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
    // <!-- tilt js effect ends -->

    /* ===== SCROLL REVEAL ANIMATION ===== */
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });

    /* SCROLL PROJECTS */
    srtop.reveal('.work .box', { interval: 200 });

}

fetchData().then(data => {
    const habilidades = data['front-end'];
    showHabilidades(habilidades);
  });


fetchData("projetos").then(data => {
    showProjects(data);
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src='https://embed.tawk.to/664662d2981b6c564771336b/1hu1f42p0';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.sobre .content h3', { delay: 200 });
srtop.reveal('.sobre .content .tag', { delay: 200 });
srtop.reveal('.sobre .content p', { delay: 200 });
srtop.reveal('.sobre .content .box-container', { delay: 200 });
srtop.reveal('.sobre .content .resumebtn', { delay: 200 });


/* SCROLL habilidades */
srtop.reveal('.habilidades .container', { interval: 200 });
srtop.reveal('.habilidades .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.educacao .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.projetos .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experiencia .timeline', { delay: 400 });
srtop.reveal('.experiencia .timeline .container', { interval: 400 });

/* SCROLL contato */
srtop.reveal('.contato .container', { delay: 400 });
srtop.reveal('.contato .container .form-group', { delay: 400 });