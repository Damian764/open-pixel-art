const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
cursor.classList.add('active');
cursor.style.top = `-100%`;
cursor.style.left = `-100%`;
document.body.appendChild(cursor);
document.addEventListener('mousemove', updateCursorPosition);

function getMousePos(e) {
  let x = 0,
    y = 0;
  e = e || window.event;

  x = e.clientX;
  y = e.clientY;

  x = x + window.pageXOffset;
  y = y + window.pageYOffset;
  return {
    x: x,
    y: y
  };
}
function updateCursorPosition(e) {
  e = e || window.event;
  const pos = getMousePos(e);
  cursor.style.top = pos.y - cursor.offsetHeight / 2 + 'px';
  cursor.style.left = pos.x - cursor.offsetWidth / 2 + 'px';
}

function toggleCursor(button) {
  if (cursor.classList.contains('active')) {
    cursor.classList.remove('active');
    button.textContent = 'Enable cursor effect';
    document.removeEventListener('mousemove', updateCursorPosition);
  } else {
    cursor.classList.add('active');
    updateCursorPosition();
    button.textContent = 'Disable cursor effect';
    document.addEventListener('mousemove', updateCursorPosition);
  }
}
