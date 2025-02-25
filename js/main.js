 
 // Nav Bar
 AOS.init();
 window.addEventListener('scroll',function(e){
    let navBar = document.getElementById('navBar');
    if(window.scrollY > 0){
        navBar.classList.add('scrolled')
    }else{
        navBar.classList.remove('scrolled')
    }

    
    let herobg = document.querySelector('.heroBg');
    if(window.scrollY > 0){
        herobg.style.height = ' 80%';
    }else{
        herobg.style.height = ' 60%';
    }
 })

 window.addEventListener('load', function(){
    let navBar = document.getElementsByClassName('navBar') [0];

    let hero = document.getElementById('hero');
    let content = document.querySelector('.ani' );

    hero.style.transform = 'scale(1)';
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
    navBar.style.opacity = '1';    
 })

