var navBtn = document.getElementById('menu')
var closeBtn = document.getElementById('closeBtn')
var mobileNav = document.getElementById('MobileNavContent')

navBtn.onclick = openClicked

function openClicked(){
    mobileNav.style.display = 'flex'
}

closeBtn.onclick = closeClicked

function closeClicked(){
    mobileNav.style.display = 'none'
}