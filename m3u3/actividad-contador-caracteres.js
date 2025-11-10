// Contador de caracteres para un textarea

const textarea = document.getElementById('textarea');
const contador = document.getElementById('contador');

// console.log(textarea, contador);



textarea.addEventListener('input', () => {
  const texto = textarea.value;
  const numeroCaracteres = texto.length;
  contador.textContent = `${numeroCaracteres}`;
});

