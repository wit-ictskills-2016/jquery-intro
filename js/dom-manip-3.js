const $images = $('[name="imgs"]');
alert('There are ' + $images.length + ' images with name="imgs" in this page');
let index = 0;
$images.each(function () {
  alert('Image ' + index + ' height is ' + $(this).height());
  index += 1;
});