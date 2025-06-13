// index.html
if (window.location.pathname.includes('index.html')) {
  const textElement = document.getElementById('text')
  const text = '천서연의 웹페이지에 오신 걸 환영합니다.'
  let i = 0

  function typeWriter() {
    if (i < text.length) {
      textElement.innerHTML += text.charAt(i)
      i++
      setTimeout(typeWriter, 100)
    }
  }

  typeWriter()
}

// team.js

// 팀원 정보 배열 (객체 요소 포함)
const teamMembers = [
  {
    name: '김가연',
    img: 'team-profile/김가연.jpg',
    github: 'https://github.com/bora120',
    portfolio: 'https://web-portfoilo.vercel.app',
  },
  {
    name: '조은수',
    img: 'team-profile/조은수.jpg',
    github: 'https://github.com/myyonop',
    portfolio: 'https://my-midterm.vercel.app/',
  },
  {
    name: '천서연',
    img: 'team-profile/천서연.jpg',
    github: 'https://github.com/westkiteS2',
    portfolio: 'https://webmidterm.vercel.app/',
  },
  {
    name: '최수민',
    img: 'team-profile/최수민.png',
    github: 'https://github.com/sumin8838',
    portfolio: 'https://portfolio-gray-nine-13.vercel.app/',
  },
]

// DOM 요소 가져오기
const teamList = document.getElementById('teamList')
const toggleTitle = document.getElementById('toggle-title')

// 배열 순회하며 HTML 생성
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

// 토글 버튼 클릭 시 class 토글
toggleTitle.addEventListener('click', () => {
  teamList.classList.toggle('active')
})
