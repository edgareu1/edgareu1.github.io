// Prepare the app JS here
import { animateCarousels } from './components/animate-carousels.js'
import { animateGitModal } from './components/animate-git-modal.js'
import { animateNavbar } from './components/animate-navbar.js'
import { animatePageScroll } from './components/animate-page-scroll.js'
import { animateTogglePositioning } from './components/animate-toggle-positioning.js'
import { createGitCalendar } from './components/create-git-calendar.js'
import { loadingPageAnimation } from './components/loading-page-animation.js'

loadingPageAnimation();
animateGitModal();
animateNavbar();
animatePageScroll();
animateTogglePositioning();
animateCarousels();
createGitCalendar();