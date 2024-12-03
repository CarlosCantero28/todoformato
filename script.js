// Función para mostrar el formulario de generación
function mostrarFormulario() {
  document.getElementById('formulario').style.display = 'block';
}

// Función para generar la carta personalizada
function generarCarta() {
  const nombre = document.getElementById('nombre').value;
  const cargo = document.getElementById('cargo').value;
  const motivo = document.getElementById('motivo').value;

  if (nombre && cargo && motivo) {
    // Crear el contenido de la carta
    const carta = `
      <h2>Carta de Petición</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Cargo:</strong> ${cargo}</p>
      <p><strong>Motivo de la Petición:</strong></p>
      <p>${motivo}</p>
      <p>Atentamente,</p>
      <p>${nombre}</p>
    `;

    // Usar jsPDF para generar el PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.html(carta, {
      callback: function (doc) {
        doc.save(`${nombre}_carta_peticion.pdf`);
      },
      x: 10,
      y: 10
    });
  } else {
    alert("Por favor, complete todos los campos.");
  }
}
