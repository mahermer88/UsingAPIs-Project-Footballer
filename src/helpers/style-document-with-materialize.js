export function styleDocumentWithMaterialize() {
  // Styling document with materialize javascript
  const sidenav = document.querySelectorAll(".sidenav");
  let instances = M.Sidenav.init(sidenav);
  const toolTipped = document.querySelectorAll(".tool-tipped");
  instances = M.Tooltip.init(toolTipped);
  const parallax = document.querySelectorAll(".parallax");
  instances = M.Parallax.init(parallax);
  const scrollspy = document.querySelectorAll(".scrollspy");
  instances = M.ScrollSpy.init(scrollspy);
  const slider = document.querySelector(".slider");
  if (window.innerWidth > 670) {
    M.Slider.init(slider, {
      indicators: false,
      transition: 500,
      interval: 6000,
      height: 700,
    });
  } else {
    M.Slider.init(slider, {
      indicators: false,
      duration: 500,
      interval: 6000,
      height: 450,
    });
  }
}
