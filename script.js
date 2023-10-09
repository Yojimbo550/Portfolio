let colorForAll = document.querySelector('.allProjects');
colorForAll.addEventListener('click',function() {
    colorForAll.classList.add('purple')
    colorForJS.classList.remove('purple')
    colorForVue.classList.remove('purple')
    colorForJava.classList.remove('purple')
})
let colorForVue = document.querySelector('.vueProjects');
colorForVue.addEventListener('click',function() {
    colorForVue.classList.add('purple')
    colorForJS.classList.remove('purple')
    colorForAll.classList.remove('purple')
    colorForJava.classList.remove('purple')
})
let colorForJS = document.querySelector('.jsProjects');
colorForJS.addEventListener('click',function() {
    colorForJS.classList.add('purple')
    colorForAll.classList.remove('purple')
    colorForVue.classList.remove('purple')
    colorForJava.classList.remove('purple')
})
let colorForJava = document.querySelector('.javaProjects');
colorForJava.addEventListener('click',function() {
    colorForJava.classList.add('purple')
    colorForJS.classList.remove('purple')
    colorForVue.classList.remove('purple')
    colorForAll.classList.remove('purple')
})




