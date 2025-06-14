/*====== about =======*/

document.addEventListener('DOMContentLoaded', () => {
  const timelineData = [
    { year: '2004', desc: '8월 28일 생일' },
    { year: '2011', desc: '금창초등학교 입학' },
    { year: '2017', desc: '저동초 졸업, 저동중 입학' },
    { year: '2020', desc: '저동중 졸업, 저동고 입학' },
    { year: '2023', desc: '저동고 졸업' },
    { year: '2024', desc: '중부대 정보보호학전공 입학' },
  ]

  const buttonsContainer = document.getElementById('timeline-buttons')
  const detailArea = document.getElementById('timeline-detail')
  let activeIndex = null

  timelineData.forEach((item, index) => {
    const btn = document.createElement('button')
    btn.textContent = item.year
    btn.className = 'timeline-year'
    btn.setAttribute('data-index', index)
    buttonsContainer.appendChild(btn)
  })

  buttonsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('timeline-year')) {
      const idx = e.target.getAttribute('data-index')
      if (activeIndex === idx) {
        e.target.classList.remove('active')
        detailArea.textContent = ''
        activeIndex = null
      } else {
        Array.from(buttonsContainer.children).forEach((btn) =>
          btn.classList.remove('active')
        )
        e.target.classList.add('active')
        detailArea.textContent = timelineData[idx].desc
        activeIndex = idx
      }
    }
  })
})
