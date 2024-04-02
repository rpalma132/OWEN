document.addEventListener('DOMContentLoaded', function() {
    const sizeSwatches = document.querySelectorAll('.SizeSwatch');
    const modalCloseButton = document.querySelector('.btn-close');
    
    // Agrega un evento de clic a cada talla
    sizeSwatches.forEach(function(swatch) {
        swatch.addEventListener('click', function() {
            // Elimina la clase 'selected' de todas las tallas
            sizeSwatches.forEach(function(swatch) {
                swatch.classList.remove('selected');
            });

            // Agrega la clase 'selected' a la talla seleccionada
            this.classList.add('selected');
        });
    });
    
    // Agrega un evento de clic al botón de cierre del modal
    modalCloseButton.addEventListener('click', function() {
        // Elimina la clase 'selected' de todas las tallas
        sizeSwatches.forEach(function(swatch) {
            swatch.classList.remove('selected');
        });
    });
});
