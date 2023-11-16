function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else{
    //     html.classList.add('light')
    // }

    

    // Alterar a imgagem para outra no modo light

    const img = document.querySelector("#profile img")
    
    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
        img.setAttribute('alt', 'Foto de Mayk Brito')
    } 
    else {
        img.setAttribute('src', './assets/avatar.jpg')
        img.setAttribute('alt', 'Foto de Joao Borrachini')
    }
}