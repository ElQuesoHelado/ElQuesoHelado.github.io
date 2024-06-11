const icons = document.querySelectorAll('.icon');

icons.forEach((icon) => {
  icon.addEventListener('mouseover', (event) => {
    const image = event.target;

    image.style.transform = `scale(1.2)`;
  });

  icon.addEventListener('mouseout', () => {
    const image = event.target;

    image.style.transform = 'scale(1)';
  });
});
