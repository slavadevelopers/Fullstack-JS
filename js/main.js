// Because this is possible
// It doesn't mean that this is a best solution
// This is a case when you may look at some more complex tools
// Like very cool Flickity or Swiper

const siemas = document.querySelectorAll('.siema');

// Extend prototype with method that adds arrows to DOM
// Style the arrows with CSS or JS — up to you mate
Siema.prototype.addArrows = function() {
    
  // make buttons & append them inside Siema's container
  this.prevArrow = document.createElement('span');
  this.nextArrow = document.createElement('span');
  this.prevArrow.textContent = 'previous slide';
  this.nextArrow.textContent = 'next slide';
  this.selector.appendChild(this.prevArrow)
  this.selector.appendChild(this.nextArrow)
  
  // event handlers on buttons
  this.prevArrow.addEventListener('click', () => this.prev());
  this.nextArrow.addEventListener('click', () => this.next());
}

// this is fairly new way of looping through DOM Elements
// More about ithere: https://pawelgrzybek.com/loop-through-a-collection-of-dom-elements/
// For better compatibility I suggest using for loop
for(const siema of siemas) {
  const instance = new Siema({
    selector: siema,
    loop: true,
	perPage: 4,
  });
  instance.addArrows();
}
