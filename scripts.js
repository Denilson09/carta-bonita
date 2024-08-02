document.getElementById('leerMensaje').onclick = function() {
    document.getElementById('mensaje').style.display = 'block';
    this.style.display = 'none';
    document.querySelector('.blossom .flower').classList.add('animate');
}
