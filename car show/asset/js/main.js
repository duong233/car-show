const show = (togId,menuId)=>{
    const tog=document.getElementById(togId),
    menu=document.getElementById(menuId)

    if(tog && menu){
        tog.addEventListener('click',()=>{
            menu.classList.toggle('show')
        })
    }
}
show("nav__toggle",'nav__menu')