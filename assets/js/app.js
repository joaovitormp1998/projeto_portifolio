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
          value: 5,
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
          distance: 250,
          color: '#02e0ff',
          opacity: 0.4,
          width: 3
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
            mode: 'trail'
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
            distance: 400,
            duration: 0.6
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


    // Obtém o objeto pJS do Particles.js
    const pJS = particlesJS.particles;

    // Função para desenhar o rastro
    function drawTrails() {
        pJS.forEach((p, index) => {
            const particle = p.pJS.particles.array[index];
            const { ctx } = p.pJS;

            // Limpa o rastro anterior
            ctx.clearRect(0, 0, p.pJS.canvas.w, p.pJS.canvas.h);

            // Redesenha o fundo
            p.pJS.fn.particlesRefresh();

            // Desenha o rastro
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            for (let i = 0; i < particle.trail.length; i++) {
                ctx.lineTo(particle.trail[i].x, particle.trail[i].y);
            }
            ctx.lineWidth = particle.radius * 2;
            ctx.strokeStyle = particle.trail.fillColor;
            ctx.stroke();
        });

        requestAnimationFrame(drawTrails);
    }

    // Inicia o desenho dos rastros
    drawTrails();
  });
  