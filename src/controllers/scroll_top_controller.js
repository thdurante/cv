import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['scrollTopBtn']

  connect() {
    this.scrollHandler()
  }

  scrollTopBtnTargetConnected(_element) {
    window.addEventListener('scroll', this.boundScrollHandler)
  }

  scrollTopBtnTargetDisconnected(_element) {
    window.removeEventListener('scroll', this.boundScrollHandler)
  }

  get boundScrollHandler() {
    return this.scrollHandler.bind(this)
  }

  scrollHandler() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      this.scrollTopBtnTarget.classList.remove('hidden')
    } else {
      this.scrollTopBtnTarget.classList.add('hidden')
    }
  }

  scrollToTop(_event) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
