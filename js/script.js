function mostrarGaleria() {
  document.getElementById('galeria').style.display = 'flex';
  const photos = document.querySelectorAll('.photo-block');
  photos.forEach((photo, index) => {
    setTimeout(() => {
      photo.style.display = 'block'; // Mostrar as fotos
      photo.style.opacity = 1;
      photo.style.transform = 'translateY(0)';
    }, index * 500); // Animar uma por uma
  });
}

function mostrarMensagemFinal() {
  document.getElementById('mensagemFinal').style.display = 'block';
}