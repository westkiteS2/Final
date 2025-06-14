/*===========main.html=========*/

// 과제 데이터: 연도별, 월별로 과제 목록을 저장
const assignments = {
  2025: {
    '3월': [{ title: 'WebDemo', url: 'https://web-programing1.vercel.app/' }],
    '4월': [
      {
        title: 'webdemoassignment',
        url: 'https://webdemoassignment.vercel.app/',
      },
    ],
    '5월': [],
    '6월': [],
  },
  2026: {
    '3월': [],
    '4월': [],
    '5월': [],
    '6월': [],
  },
}

const yearSelect = document.getElementById('year-select')
const monthSelect = document.getElementById('month-select')
const assignmentList = document.getElementById('assignment-list')

// 과제 목록 렌더링 함수
function renderAssignments() {
  const year = yearSelect.value
  const month = monthSelect.value

  // 선택한 연도+월의 과제 목록 가져오기
  const tasks = assignments[year]?.[month] ?? []

  // 초기화
  assignmentList.innerHTML = ''

  // 제목 만들기
  const monthTitle = document.createElement('h3')
  monthTitle.textContent = `${month} 과제 목록 (${year}년)`
  assignmentList.appendChild(monthTitle)

  if (tasks.length === 0) {
    // 과제가 없으면 안내 문구 출력
    const noTask = document.createElement('p')
    noTask.className = 'no-task'
    noTask.textContent = '등록된 과제가 없습니다.'
    assignmentList.appendChild(noTask)
  } else {
    // 과제가 있으면 리스트로 출력
    const ul = document.createElement('ul')
    tasks.forEach((task) => {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.href = task.url
      a.target = '_blank'
      a.textContent = task.title
      li.appendChild(a)
      ul.appendChild(li)
    })
    assignmentList.appendChild(ul)
  }
}

// 선택 박스가 바뀔 때마다 렌더링 실행
yearSelect.addEventListener('change', renderAssignments)
monthSelect.addEventListener('change', renderAssignments)

// 페이지 로드 시 초기 렌더링
renderAssignments()
