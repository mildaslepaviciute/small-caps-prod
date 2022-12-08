// Get the current year for the copyright 

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Init Scroll Smoother
const smoother = new ScrollSmoother({
	wrapper: '#smooth-wrapper',
	content: '#smooth-content',
	smooth: 1.6,
	smoothTouch: 0.1, 
	effects: true,
})


// slider Infinite

function initMarquee() {
	const marqueeWrappers = document.querySelectorAll('[ficus-marquee]')
  marqueeWrappers.forEach((wrapper, key) => {
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



function initSoundToggler() {
	const video = document.getElementById("hero-video")
	const soundToggler = document.getElementById("sound-toggler")

  soundToggler.addEventListener("click", function() {
    video.muted = false
    soundToggler.classList.add('d-none')
  })
}

initSoundToggler()


function initFicusFadeUp() {
  const defaultFadeUpDelay = 0
  const defaultFadeUpDuration = 1000

  gsap.utils.toArray("[ficus-fade-up]").forEach(el => {
    const delay = el.getAttribute('ficus-fade-up-delay')
    const duration = el.getAttribute('ficus-fade-up-duration')
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 95%",
      }
    })
  
    tl.from(el, {
      y: 50,
      delay: (delay ? delay : defaultFadeUpDelay) / 1000,
      duration: (duration ? duration : defaultFadeUpDuration) / 1000,
      autoAlpha: 0,
    })
  })
}

initFicusFadeUp()


function initArrowFadeIn() {
  gsap.utils.toArray(".arrow__animation").forEach(el => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 95%",
      }
    })
  
    tl.from(el, {
      y: -20,
      x: -20,
      duration: 1,
      delay: 0.8,
      autoAlpha: 0,
    })
  })
}

initArrowFadeIn()




function initPolicyAcceptance() {
	const animatePolicyAcceptance = gsap.from("#policy-acceptance-box", {
		yPercent: 100,
		duration: 1,
		autoAlpha: 0,
		paused: true,
	})
	
	setTimeout(() => {
		const isCookieNoticeAccepted = localStorage.getItem("cookieNoticeAccepted") === 'true'
		if (!isCookieNoticeAccepted) {
			animatePolicyAcceptance.play()
		}
	}, 3000)

	document.getElementById("policy-acceptance-button").addEventListener("click", function() {
		animatePolicyAcceptance.reverse()
		localStorage.setItem("cookieNoticeAccepted", true)
	})
}

initPolicyAcceptance()