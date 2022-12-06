// Get the current year for the copyright 

$('#year').text(new Date().getFullYear());

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


// slider Infinite

function initMarquee() {
	const marqueeWrappers = document.querySelectorAll('[ficus-marquee]')
  marqueeWrappers.forEach((wrapper, key) => {
    console.log(key)
    const marquee = wrapper.querySelector('.marquee')
    marquee.classList.add(`marquee-${key}`)
    const speed = 1 / wrapper.getAttribute('ficus-marquee-speed') * 100
    wrapper.appendChild(marquee.cloneNode(true))
	  wrapper.appendChild(marquee.cloneNode(true))
    const width = marquee.offsetWidth

    new TimelineMax().to(`.marquee-${key}`, speed, {
      x: -width,
      ease: Linear.easeNone,
      repeat: -1,
    })
  })
}

initMarquee()