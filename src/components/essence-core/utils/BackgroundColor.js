
export default function (element) {
  let color = null;

  if (element) {
    color = window.getComputedStyle (element.currentTarget).getPropertyValue('color').
    replace("rgb", "rgba").replace(")", ", 0.5)");
  }

  return color;
};