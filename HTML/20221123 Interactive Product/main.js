window.onload = () => {
  const capacity_btn = document.querySelectorAll('.capacity .size');
  const colour_btn = document.querySelectorAll('.colours .colour');
  const image_el = document.querySelector('.imagery .image');
  const imagery_el = document.querySelector('.imagery');

  for(let i = 0; i < capacity_btn.length; i++) {
    let btn = capacity_btn[i];
    btn.addEventListener('click', function() {
      document.querySelector('.capacity .size.selected').classList.remove('selected');
      this.classList.add('selected');
    });
  }

  

  for(let i = 0; i < colour_btn.length; i++) {
    let btn = colour_btn[i];

    btn.addEventListener('click', function() {
      document.querySelector('.colours .colour.selected').classList.remove('selected');
      this.classList.add('selected');
      image_el.src = "images/xr-" + this.dataset.name + '.png';
      imagery_el.style.backgroundColor = this.dataset.colour;
    })
  }
}