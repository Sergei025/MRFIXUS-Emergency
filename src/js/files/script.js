// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const menuItems = document.querySelectorAll('header .header__menu li')

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Сначала убираем класс у всех элементов
        menuItems.forEach(i => i.classList.remove('_navigator-active'));

        // Добавляем класс только к кликнутому
        item.classList.add('_navigator-active')
    });
});
document.addEventListener("DOMContentLoaded", () => {

    const mapLinks = {
        "Indianapolis": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196237.1863908697!2d-86.29790153304616!3d39.779931327951296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN%2C%20USA!5e0!3m2!1sen!2suk!4v1765223131497!5m2!1sen!2suk",
        "Carmel": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97854.64375496245!2d-86.21495644247476!3d39.96470028182454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814ad973033fa1d%3A0x43b9095f5f7b38fc!2sCarmel%2C%20IN%2C%20USA!5e0!3m2!1sen!2suk!4v1765223378328!5m2!1sen!2suk",
        "Fishers": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97855.58475086179!2d-86.05175554250397!3d39.96404283320921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814b377e061fed9%3A0x5c70915098c7503b!2sFishers%2C%20IN%2C%20USA!5e0!3m2!1sen!2suk!4v1765223487620!5m2!1sen!2suk",
        "Lawrence": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48994.84303680627!2d-86.03815099304617!3d39.87025755791391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b4b9e09e776c5%3A0x70cfba96bf83e70!2sLawrence%2C%20IN%2C%20USA!5e0!3m2!1sen!2suk!4v1765223554982!5m2!1sen!2suk",
        "Beech Grove": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24552.977152198728!2d-86.10333348907167!3d39.71443763476173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b452613c9210d%3A0x12ee0dfe9badb018!2sBeech%20Grove%2C%20IN%2C%20USA!5e0!3m2!1sen!2suk!4v1765223596582!5m2!1sen!2suk",
        "Speedway": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24526.792109244278!2d-86.27088103887328!3d39.7879436486854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b57d0bc256bb1%3A0x70cfba96bf84d40!2sSpeedway%2C%20IN%2C%20USA!5e0!3m2!1sen!2suk!4v1765223642098!5m2!1sen!2suk",
        "Greenwood": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49192.409417745475!2d-86.13994234606504!3d39.59284118672647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b42e1c9ae07a9%3A0x1f1f701ecefcc1e3!2sGreenwood%2C%20IN%2C%20USA!5e0!3m2!1sen!2suk!4v1765223680542!5m2!1sen!2suk",
        "Zionsville": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97808.16827266883!2d-86.42840549102957!3d39.99716026345759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8813557095a85b13%3A0x70cfba84ddeac50!2sZionsville%2C%20IN%2C%20USA!5e0!3m2!1sen!2suk!4v1765223709308!5m2!1sen!2suk",
        "Avon": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98143.9564125777!2d-86.54760093184294!3d39.762138986081695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca55fe577825b%3A0x4450b6ad5d787c0b!2sAvon%2C%20IN%2C%20USA!5e0!3m2!1sen!2suk!4v1765223751916!5m2!1sen!2suk",
        "Brownsburg": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49018.78339572546!2d-86.42448734341215!3d39.83672709165885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886cae0a5dcd0327%3A0x70cfba96bf830e0!2sBrownsburg%2C%20IN%2C%20USA!5e0!3m2!1sen!2suk!4v1765223787317!5m2!1sen!2suk",
        "McCordsville": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48978.96473751774!2d-85.95106694280352!3d39.89248348553887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b35546c2d90a9%3A0x8ce49aa6e265c635!2sMcCordsville%2C%20IN%2C%20USA!5e0!3m2!1sen!2suk!4v1765223823415!5m2!1sen!2suk",
        "Cumberland": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24526.15341952323!2d-85.96350798886846!3d39.78973514780562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b483624c777b5%3A0x7a7e62d4ac3c0323!2sCumberland%2C%20IN%2C%20USA!5e0!3m2!1sen!2suk!4v1765223862879!5m2!1sen!2suk",
        "Southport": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12286.36467206004!2d-86.12961769246184!3d39.65891456267445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b5c982b443247%3A0xf47eae81e4ac7e9e!2sSouthport%2C%20IN%2046227%2C%20USA!5e0!3m2!1sen!2suk!4v1765223892873!5m2!1sen!2suk",
        "Whitestown": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48922.35652122891!2d-86.4086295419381!3d39.97163805580869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881353f00ecccec5%3A0xc2940a5d890aaa31!2sWhitestown%2C%20IN%2C%20USA!5e0!3m2!1sen!2suk!4v1765223920887!5m2!1sen!2suk",
    };

    const btn = document.querySelector(".service__checkaria-button");
    const dropdown = document.getElementById("mapDropdown");
    const selectedLabel = document.getElementById("mapSelectedLabel");
    const iframe = document.querySelector(".service__map iframe");
    const options = document.querySelectorAll("#mapDropdown .option");
    const closeInside = document.querySelector(".map-close-inside");

    if (!btn || !dropdown) return;

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.toggle("open");
    });

    if (closeInside) {
        closeInside.addEventListener("click", (e) => {
            e.stopPropagation();
            dropdown.classList.remove("open");
        });
    }

    options.forEach(option => {
        option.addEventListener("click", (e) => {
            const city = option.dataset.city;
            selectedLabel.textContent = city;
            dropdown.classList.remove("open");

            if (iframe && mapLinks[city]) {
                iframe.src = mapLinks[city];
            }
        });
    });

    document.addEventListener("click", (e) => {
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove("open");
        }
    });
});

function initMobileScrollAnimation() {
    if (window.innerWidth > 768) return;

    const wrapper = document.querySelector('.steps-wrapper');
    const steps = wrapper.querySelectorAll('.step');
    const line = wrapper.querySelector('.line');
    const fill = wrapper.querySelector('.line-fill');

    const stepCenters = Array.from(steps).map(step =>
        step.offsetTop + step.offsetHeight / 2
    );

    const first = stepCenters[0];
    const last = stepCenters[stepCenters.length - 1];
    const totalHeight = last - first;

    // линия должна идти через центр блоков
    line.style.top = first + "px";
    line.style.height = totalHeight + "px";

    let activated = new Array(steps.length).fill(false);

    function check() {
        const screenCenter = window.innerHeight / 2;

        steps.forEach((step, i) => {
            if (activated[i]) return;

            const rect = step.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;

            // Активируем, когда центр блока достиг центра экрана
            if (elementCenter <= screenCenter) {
                step.classList.add("active");
                activated[i] = true;

                // Увеличиваем линию-заполнение до центра этого блока
                const fillHeight = stepCenters[i] - first;
                fill.style.height = fillHeight + "px";
            }
        });
    }

    window.addEventListener("scroll", check);
    check();
}

function startDesktopLineAnimation() {
    if (window.innerWidth <= 768) return; // только для десктопа

    const wrapper = document.querySelector('.steps-wrapper');
    const steps = wrapper.querySelectorAll('.step');
    const line = wrapper.querySelector('.line');       // серая линия
    const fill = wrapper.querySelector('.line-fill');  // закрашиваемая линия

    let started = false;

    function run() {
        if (started) return;
        started = true;

        const stepCenters = Array.from(steps).map(step => {
            const dot = step.querySelector('.dot');
            return dot.getBoundingClientRect().top - wrapper.getBoundingClientRect().top + dot.offsetHeight / 2;
        });

        const first = stepCenters[0];
        const last = stepCenters[stepCenters.length - 1];
        const totalHeight = last - first;

        // Серая линия видна сразу
        line.style.top = first + 'px';
        line.style.height = totalHeight + 'px';

        // Закрашиваемая линия стартует с 0
        fill.style.top = first + 'px';
        fill.style.height = 0;

        const duration = 3000;
        let startTime = null;
        const activated = new Array(steps.length).fill(false);

        function animate(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Анимируем заполнение линии
            fill.style.height = (totalHeight * progress) + 'px';

            // Подсветка точек и блоков
            stepCenters.forEach((center, i) => {
                if (!activated[i] && (first + totalHeight * progress) >= center) {
                    steps[i].classList.add("active");
                    steps[i].querySelector(".dot").classList.add("active");
                    activated[i] = true;
                }
            });

            if (progress >= 1) {
                line.classList.add("full");
            } else {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    // Запуск анимации, когда wrapper пересекает середину экрана
    function checkStart() {
        const rect = wrapper.getBoundingClientRect();
        const screenCenter = window.innerHeight / 2;

        if (rect.top <= screenCenter) {
            run();
            window.removeEventListener("scroll", checkStart);
        }
    }

    window.addEventListener("scroll", checkStart);
    checkStart(); // если уже видно — запускаем
}

window.addEventListener("load", () => {
    requestAnimationFrame(() => {
        initMobileScrollAnimation(); 
        startDesktopLineAnimation();
    });
	document.documentElement.classList.remove('preload')
})
document.addEventListener("DOMContentLoaded", () => {
  // Проверяем, мобильное ли устройство
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (!isMobile) return; // выходим, если не мобильное

  const bg = document.getElementById("emergency-bg");

  let images = [
      "img/bg-mobile__image1.webp",
      "img/bg-mobile__image2.webp",
      "img/bg-mobile__image3.webp",
      "img/bg-mobile__image4.webp",
      "img/bg-mobile__image5.webp",
      "img/bg-mobile__image6.webp"
  ];

  function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
  }

  shuffleArray(images);

  let index = 0;
  bg.src = images[0];
  index = 1;

  function changeBackground() {
      bg.style.opacity = 0; // плавное исчезновение

      setTimeout(() => {
          bg.src = images[index]; // меняем src
          bg.style.opacity = 1;   // плавное появление

          index++;
          if (index >= images.length) {
              shuffleArray(images);
              index = 0;
          }
      }, 400); // совпадает с transition
  }

  setInterval(changeBackground, 5000);
});


window.addEventListener("load", () => {

    const swiper = document.querySelector('.cases__slider').swiper;

    document.querySelectorAll('.cases__slide').forEach(slide => {
        const p = slide.querySelector('.cases-slide-info__description');
        const btn = slide.querySelector('.toggle-btn');

        if (p.scrollHeight > 168) {
            p.style.maxHeight = "140px";
            btn.classList.remove("hidden");
            btn.textContent = "Read more";
        }

        btn.addEventListener("click", () => {

            if (p.style.maxHeight) {
                p.style.maxHeight = "";
                btn.textContent = "Hide";
            } 
            else {
                p.style.maxHeight = "140px";
                btn.textContent = "Read more";
            }

            swiper.updateAutoHeight();
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("ContactSelectBtn");
    const dropdown = document.getElementById("ContactDropdown");
    const label = document.getElementById("ContactSelectedLabel");

    btn.addEventListener("click", () => {
        dropdown.classList.toggle("open");
    });

    const closeInside = document.querySelector("#ContactDropdown li:first-child svg");

    closeInside.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdown.classList.remove("open");
    });

    const options = document.querySelectorAll("#ContactDropdown .option");

    options.forEach(option => {
        option.addEventListener("click", () => {
            const city = option.dataset.city;

            label.textContent = city;
            dropdown.classList.remove("open");
        });
    });

    document.addEventListener("click", (e) => {
        if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove("open");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.querySelector(".contact-us__textarea");

    textarea.addEventListener("input", () => {
        textarea.style.height = "auto"; 
        textarea.style.height = textarea.scrollHeight + "px";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileUpload");
    const fileName = document.getElementById("fileName");

    fileInput.addEventListener("change", () => {
        if (fileInput.files.length > 0) {
            fileName.textContent = `Selected: ${fileInput.files[0].name}`;
        } else {
            fileName.textContent = "";
        }
    });
});
document.querySelectorAll('.faq__item').forEach(item => {
    const btn = item.querySelector('.faq__btn');
    const content = item.querySelector('.faq__text');
    const icon = item.querySelector('.faq__icon');

    btn.addEventListener('click', () => {
        const isOpen = item.classList.toggle('open');

        if (isOpen) {
            content.style.maxHeight = content.scrollHeight + "px";
            btn.classList.add('pb-4');
            icon.classList.add('rotate-45');
            icon.classList.remove('rotate-0');
        } else {
            content.style.maxHeight = null;
            btn.classList.remove('pb-4');
            icon.classList.remove('rotate-45');
            icon.classList.add('rotate-0');
        }
    });
});
document.getElementById('footer__to-top').addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' })
})

