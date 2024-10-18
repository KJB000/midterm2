// DOM이 모두 로드된 후 실행
document.addEventListener('DOMContentLoaded', function () {
  // 로그인 폼 제출 이벤트 처리
  const loginForm = document.getElementById('loginForm')
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault() // 기본 폼 제출 동작 방지

      // 입력된 학번과 생년월일을 가져옵니다.
      const studentId = document.getElementById('studentId').value
      const dob = document.getElementById('dob').value

      // 하드코딩된 학번과 생년월일로 로그인 확인
      if (studentId === '92212984' && dob === '20030524') {
        // 로그인 성공 시 sessionStorage에 로그인 상태 저장
        sessionStorage.setItem('isLoggedIn', 'true')
        sessionStorage.setItem('studentId', studentId) // 학번 저장 (필요할 경우 사용)
        // 프로필 페이지로 이동
        window.location.href = 'profile.html'
      } else {
        // 로그인 실패 시 경고 메시지
        alert('학번 또는 생년월일이 일치하지 않습니다.')
      }
    })
  }

  // 로그아웃 버튼 처리
  const logoutBtn = document.getElementById('logoutBtn')
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
      // sessionStorage에서 로그인 정보 삭제
      sessionStorage.removeItem('isLoggedIn')
      sessionStorage.removeItem('studentId')
      // 로그아웃 후 로그인 페이지로 이동
      window.location.href = 'index.html'
    })
  }

  // 프로필 페이지 보호 (로그인 상태 확인)
  if (window.location.pathname.includes('profile.html')) {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      // 로그인 상태가 아니면 로그인 페이지로 리디렉션
      window.location.href = 'login.html'
    }
  }
})
