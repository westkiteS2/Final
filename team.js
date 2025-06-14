// team

const teamMembers = [
  {
    name: '김가연',
    img: 'team-profile/김가연.jpg',
    github: 'https://github.com/bora120',
    portfolio: 'https://last-portfolio-zeta.vercel.app/',
  },
  {
    name: '조은수',
    img: 'team-profile/조은수.jpg',
    github: 'https://github.com/myyonop',
    portfolio: 'https://portfolio-psi-drab-14.vercel.app/',
  },
  {
    name: '천서연',
    img: 'team-profile/천서연.jpg',
    github: 'https://github.com/westkiteS2',
    portfolio: 'https://final-chi-snowy.vercel.app/',
  },
  {
    name: '최수민',
    img: 'team-profile/최수민.png',
    github: 'https://github.com/sumin8838',
    portfolio: 'https://portfolio-two-alpha-self.vercel.app/',
  },
]

const teamList = document.getElementById('teamList')
const toggleTitle = document.getElementById('toggle-title')

// 팀원 목록 생성
teamMembers.forEach((member) => {
  const li = document.createElement('li')
  li.innerHTML = `
    <img src="${member.img}" alt="${member.name} 사진" />
    <div class="name">${member.name}</div>
    <div class="links">
      <a href="${member.github}" target="_blank">🔗 GitHub</a>
      <a href="${member.portfolio}" target="_blank">💼 Portfolio</a>
    </div>
  `
  teamList.appendChild(li)
})

// 토글 이벤트
toggleTitle.addEventListener('click', () => {
  if (teamList.classList.contains('active')) {
    // 닫기
    teamList.style.height = teamList.scrollHeight + 'px' // 현재 높이 고정
    requestAnimationFrame(() => {
      teamList.style.height = '0'
      teamList.style.opacity = '0'
    })
    teamList.classList.remove('active')
  } else {
    // 열기
    teamList.classList.add('active')
    const height = teamList.scrollHeight + 'px'
    teamList.style.height = '0'
    teamList.style.opacity = '0'
    requestAnimationFrame(() => {
      teamList.style.height = height
      teamList.style.opacity = '1'
    })
  }
})

// 트랜지션 끝나면 높이 auto로 변경해서 유동적 높이 유지
teamList.addEventListener('transitionend', () => {
  if (teamList.classList.contains('active')) {
    teamList.style.height = 'auto'
  }
})
