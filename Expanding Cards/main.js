const panels = document.querySelectorAll('.panel');

panels.forEach((panel) =>{
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active');
    })
})


function removeActiveClasses(){
    // for(let i = 0; i<panels.length; i++){
    //     panels[i].classList.remove("active");
    // }

    panels.forEach((panel) =>{
        panel.classList.remove("active");
    })

}