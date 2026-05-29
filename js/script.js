const main = document.getElementById("main");

document.getElementById('exibir').addEventListener('click', e => {
    const paragraph = document.createElement('p')
    paragraph.textContent = 'merda'
    main.append(paragraph)
})