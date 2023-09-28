const imagenInput = document.getElementById('imagenInput');
const aviso = document.getElementById('aviso');
imagenInput.addEventListener('change', function() {
    if (imagenInput.files.length === 0) {
        alert('Falta la imagen del producto');
    } else if (imagenInput.files.length <= 1) {
        alert('Se cargó la imagen');
    }
});