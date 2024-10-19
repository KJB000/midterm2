const loginForm = document.getElementById('loginForm')
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const studentId = document.getElementById('studentId').value
    const dob = document.getElementById('dob').value

    if (studentId === '92212984' && dob === '20030524') {
      sessionStorage.setItem('isLoggedIn', 'true')
      sessionStorage.setItem('studentId', studentId)

      window.location.href = 'profile.html'
    } else {
      alert('학번 또는 생년월일이 일치하지 않습니다.')
    }
  })
}

const logoutBtn = document.getElementById('logoutBtn')
if (logoutBtn) {
  logoutBtn.addEventListener('click', function () {
    sessionStorage.removeItem('isLoggedIn')
    sessionStorage.removeItem('studentId')

    window.location.href = 'index.html'
  })
}

if (window.location.pathname.includes('profile.html')) {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn')
  if (!isLoggedIn) {
    window.location.href = 'index.html'
  }
}
