const list = document.querySelectorAll('.list');

function activelink() {
  list.forEach((item) => item.classList.remove('active'));
  this.classList.add('active');
}

// Cambia el evento 'click' a 'mouseover'
list.forEach((item) => item.addEventListener('mouseover', activelink));