function alterarDestaque(url) {
    const section = document.querySelector('.destaque');
    fetch(url)
    .then(response => {
        return response.text();
    })
    .then(html =>{
        section.innerHTML = html;
    });
}