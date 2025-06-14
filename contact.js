/*===== contact===*/
document.addEventListener('DOMContentLoaded', () => {
  // === 섹션 스크롤 ===
  const sections = document.querySelectorAll('.slide-section')
  let currentIndex = 0
  let isScrolling = false

  const scrollToSection = (index) => {
    if (index >= 0 && index < sections.length) {
      sections[index].scrollIntoView({ behavior: 'smooth' })
      currentIndex = index
      isScrolling = true
      setTimeout(() => {
        isScrolling = false
      }, 1000) // 애니메이션 시간
    }
  }

  window.addEventListener('wheel', (e) => {
    if (isScrolling) return
    if (e.deltaY > 0) {
      scrollToSection(currentIndex + 1)
    } else {
      scrollToSection(currentIndex - 1)
    }
  })

  // === 토글 버튼 ===
  const toggleButtons = document.querySelectorAll('.toggle-btn')

  toggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling
      if (content.classList.contains('open')) {
        content.classList.remove('open')
        content.style.maxHeight = null
      } else {
        content.classList.add('open')
        content.style.maxHeight = content.scrollHeight + 'px'
      }
    })
  })
})
