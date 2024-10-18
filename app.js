document.addEventListener('DOMContentLoaded', function () {
  const studentIdInput = document.getElementById('studentId')
  const dobInput = document.getElementById('dob')
  const loginBtn = document.querySelector('.login-btn')

  const autoStudentId = '92212984'
  const autoDob = '20030524'

  const typingSpeed = 150

  function autoType(inputField, text, callback) {
    let index = 0
    const interval = setInterval(() => {
      inputField.value += text[index]
      index++
      if (index === text.length) {
        clearInterval(interval)
        if (callback) callback()
      }
    }, typingSpeed)
  }

  autoType(studentIdInput, autoStudentId, () => {
    autoType(dobInput, autoDob, () => {
      loginBtn.focus()
    })
  })
})

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
