gsap.fromTo('#bar-top-1', { height: 0 }, { duration: 1.5, height: '50%' });
gsap.fromTo('#bar-top-2', { height: 0 }, { duration: 1.5, height: '100%' });
gsap.fromTo(
  '#bar-top-3',
  { height: 0, zIndex: 1 },
  { duration: 1.5, height: '80%' }
);
gsap.fromTo(
  '#bar-bottom-1',
  { height: 0, zIndex: 1 },
  { duration: 1.5, height: '50%' }
);
gsap.fromTo('#bar-bottom-2', { height: 0 }, { duration: 1.5, height: '60%' });
gsap.fromTo('#bar-bottom-3', { height: 0 }, { duration: 1.5, height: '35%' });
gsap.fromTo(
  '#bar-bottom-4',
  { height: 0, zIndex: 1 },
  { duration: 1.5, height: '60%' }
);
gsap.fromTo('#bar-bottom-5', { height: 0 }, { duration: 1.5, height: '100%' });
gsap.fromTo(
  '#bar-bottom-6',
  { height: 0, zIndex: 1 },
  { duration: 1.5, height: '65%' }
);
gsap.fromTo('#bar-bottom-7', { height: 0 }, { duration: 1.5, height: '80%' });

let el = document.querySelector('.testimonials');
let x = 0,
  y = 0,
  coorTop = 0,
  coorLeft = 0;

let draggingFunction = e => {
  document.addEventListener('mouseup', () => {
    document.removeEventListener('mousemove', draggingFunction);
  });

  el.scrollLeft = coorLeft - e.pageX + x;
  el.scrollTop = coorTop - e.pageY + y;
};

el.addEventListener('mousedown', e => {
  e.preventDefault();

  y = e.pageY;
  x = e.pageX;
  coorTop = el.scrollTop;
  coorLeft = el.scrollLeft;

  document.addEventListener('mousemove', draggingFunction);
});
