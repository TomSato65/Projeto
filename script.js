function toggleMode() {
    
    const html = document.documentElement
    /*
    if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    } 
    */
    html.classList.toggle('light')   

    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/tom-avatar-light.png')
        img.setAttribute('alt', 'Foto de Wellingto Sato no Claro')
    } else {
        img.setAttribute('src', './assets/tom-avatar-dark.png')
        img.setAttribute('alt', 'Foto de Wellington Sato no Escuro')
    }
}