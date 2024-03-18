// copy menu for mobile
function copyMenu(){
  //copy inside .dpt-cat to departments
  let dptcat = document.querySelector(".dpt-cat");
  let dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptcat.innerHTML;

  // copy inside nav to nav
  var navBar = document.querySelector(".header-nav nav");
  var navPlace = document.querySelector(".off-canvas nav");

  navPlace.innerHTML = navBar.innerHTML;

  // copy the .header-top .wrapper to .thetop-nav
  let thetop = document.querySelector('.off-canvas .thetop-nav')
  let headerTop = document.querySelector('.header-top .wrapper')
  let wraperMain = document.querySelector('.header-main .wrapper')

  thetop.innerHTML = headerTop.innerHTML;
}
copyMenu();

// show menu button
const menuButton = document.querySelector('.trigger'),
  closeButton = document.querySelector('t-close'),
  addClass = document.querySelector('.site');

menuButton.addEventListener('click',()=>{
  addClass.classList.toggle('show-menu');
})

closeButton.addEventListener('click',()=>{
  addClass.classList.remove('show-menu');
})



const subMenu = document.querySelectorAll(".has-chld .icon-small");
subMenu.forEach((menu) => menu.addEventListener('click',toggle()));

// toggle function
function toggle(e){
  e.preventDefault();
  subMenu.forEach((item) => {
    if(item !== this){
      item.closest('.has-child').classList.remove('expand');
    }
  });
  let parent = this.closest('has-child');
  if(!parent.classList.contains('expand')){
    parent.classList.toggle('expand');
  }
}


// Bottom Menu [Show search bar]
const searchBtn = document.querySelector('.t-search'),
      tclose = document.querySelector('.search-close'),
      showClass = document.querySelector('.site');
    
      searchBtn.addEventListener('click',() => {
          showClass.classList.toggle('showSearch');
      })

      tclose.addEventListener('click', () =>{
        showClass.classList.remove('showSearch')
      })

