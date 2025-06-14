// index.html
// 타이핑할 텍스트
const textToType = '서연이의 웹페이지에 오신 걸 환영합니다'

// 타이핑할 텍스트를 보여줄 span 요소
const textElement = document.getElementById('text')

// 현재 타이핑 중인 글자 인덱스
let index = 0

// 글자 하나씩 출력하는 함수
function type() {
  if (index < textToType.length) {
    textElement.textContent += textToType.charAt(index)
    index++
    // 150ms마다 한 글자씩 타이핑
    setTimeout(type, 150)
  }
}

// 페이지가 로드되면 타이핑 시작
window.addEventListener('DOMContentLoaded', () => {
  type()
})
