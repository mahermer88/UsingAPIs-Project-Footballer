export function styleDocumentWithMaterialize() {
  // Styling document with materialize javascript
  const sidenav = document.querySelectorAll(`.sidenav`);
  let instances = M.Sidenav.init(sidenav);
  const toolTipped = document.querySelectorAll(`.tool-tipped`);
  instances = M.Tooltip.init(toolTipped);

  let heightValue;
  if (window.innerWidth > 800 && window.innerHeight > 750) {
    // screen
    heightValue = 700;
  } else if (window.innerWidth < 700) {
    //mobile
    heightValue = 570;
  } else if (window.innerHeight > 1000) {
    //ipad
    heightValue = 600;
  } else {
    //laptop
    heightValue = 490;
  }

  const slider = document.querySelector(`.slider`);
  M.Slider.init(slider, {
    indicators: false,
    transition: 500,
    interval: 6000,
    height: heightValue,
  });
}
