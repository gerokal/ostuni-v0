// Navbar scroll effect with error handling
const navbar = document.getElementById("navbar")
const navContent = document.getElementById("nav-content")
const logoInitial = document.getElementById("logo-initial")
const logoSticky = document.getElementById("logo-sticky")
const heroSection = document.getElementById("home")

// Check if required elements exist
if (!navbar || !logoInitial || !logoSticky || !heroSection) {
  console.warn("Required navigation elements not found")
}

// Optimized scroll handler with throttling
let ticking = false

function updateNavbar() {
  if (!navbar || !logoInitial || !logoSticky || !heroSection) return
  
  const heroHeight = heroSection.offsetHeight
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  // Check if we've scrolled past the hero section
  if (scrollTop >= heroHeight) {
    // Make navbar sticky and apply scrolled styles
    navbar.classList.remove("absolute")
    navbar.classList.add("fixed")
    navbar.classList.add("navbar-scrolled")

    // Swap logos
    logoInitial.style.opacity = "0"
    logoSticky.style.opacity = "1"
  } else {
    // Keep navbar absolute (scrolls with page)
    navbar.classList.remove("fixed")
    navbar.classList.add("absolute")
    navbar.classList.remove("navbar-scrolled")

    // Show initial logo
    logoInitial.style.opacity = "1"
    logoSticky.style.opacity = "0"
  }
  
  ticking = false
}

function updateParallax() {
  const parallaxBg = document.querySelector(".parallax-bg")
  if (parallaxBg) {
    const scrolled = window.pageYOffset
    parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`
  }
  ticking = false
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateNavbar()
      updateParallax()
    })
    ticking = true
  }
}

window.addEventListener("scroll", requestTick, { passive: true })

// Side menu toggle with error handling
const menuToggle = document.getElementById("menu-toggle")
const sideMenu = document.getElementById("side-menu")
const menuIcon = document.getElementById("menu-icon")
const closeIcon = document.getElementById("close-icon")
const menuLinks = document.querySelectorAll(".menu-link")
const body = document.body

// Check if menu elements exist
if (!menuToggle || !sideMenu || !menuIcon || !closeIcon) {
  console.warn("Menu elements not found")
}

if (menuToggle && sideMenu && menuIcon && closeIcon) {
  menuToggle.addEventListener("click", () => {
    const isOpen = sideMenu.classList.contains("translate-x-0")

    if (isOpen) {
      sideMenu.classList.remove("translate-x-0")
      sideMenu.classList.add("-translate-x-full")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
      body.classList.remove("no-scroll")
    } else {
      sideMenu.classList.remove("-translate-x-full")
      sideMenu.classList.add("translate-x-0")
      menuIcon.classList.add("hidden")
      closeIcon.classList.remove("hidden")
      body.classList.add("no-scroll")
    }
  })
}

// Close menu when clicking on a link
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("translate-x-0")
    sideMenu.classList.add("-translate-x-full")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
    body.classList.remove("no-scroll")
  })
})

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  const isMenuOpen = sideMenu.classList.contains("translate-x-0")
  const isClickInsideMenu = sideMenu.contains(e.target)
  const isClickOnToggle = menuToggle.contains(e.target)

  if (isMenuOpen && !isClickInsideMenu && !isClickOnToggle) {
    sideMenu.classList.remove("translate-x-0")
    sideMenu.classList.add("-translate-x-full")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
    body.classList.remove("no-scroll")
  }
})

// Newsletter form submission with error handling
const newsletterForm = document.getElementById("newsletter-form")
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const emailInput = e.target.querySelector('input[type="email"]')
    if (emailInput) {
      const email = emailInput.value
      console.log("[v0] Newsletter subscription:", email)
      alert("Thank you for subscribing! We'll keep you updated with our latest news.")
      e.target.reset()
    }
  })
} else {
  console.warn("Newsletter form not found")
}

// Reservations form submission
const reservationsForm = document.querySelector('form')
if (reservationsForm) {
  reservationsForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log("[v0] Reservation request:", data)
    alert("Thank you for your reservation request! We'll contact you shortly to confirm your booking.")
    e.target.reset()
  })
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Keyboard navigation for cards
document.querySelectorAll('[role="button"]').forEach((card) => {
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      // Add click functionality here if needed
      console.log("Card clicked:", card.getAttribute("aria-label"))
    }
  })
})

// Focus management for accessibility
document.addEventListener("keydown", (e) => {
  // Skip to main content
  if (e.key === "Tab" && e.shiftKey && e.target === document.body) {
    const mainContent = document.querySelector('[role="main"]')
    if (mainContent) {
      mainContent.focus()
      e.preventDefault()
    }
  }
})

// Footer accordion functionality
const footerAccordionToggle = document.getElementById("footer-accordion-toggle")
const footerAccordionContent = document.getElementById("footer-accordion-content")
const footerAccordionIcon = document.getElementById("footer-accordion-icon")

if (footerAccordionToggle && footerAccordionContent && footerAccordionIcon) {
  footerAccordionToggle.addEventListener("click", () => {
    const isOpen = !footerAccordionContent.classList.contains("hidden")
    
    if (isOpen) {
      // Close accordion
      footerAccordionContent.classList.add("hidden")
      footerAccordionIcon.style.transform = "rotate(0deg)"
    } else {
      // Open accordion
      footerAccordionContent.classList.remove("hidden")
      footerAccordionIcon.style.transform = "rotate(180deg)"
    }
  })
}
