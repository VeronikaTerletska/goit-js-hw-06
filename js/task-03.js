const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryRef = document.querySelector(".gallery");
console.log(galleryRef);

// const makeGalerryEL = (image) => {
//   const { url, alt } = image;
//   return `<li class = “gallery-item”><img src = “${url}“alt = “${alt}” width = “150"height = “200"/> </li>`;
// };
// const makeGallerryList = images.map(makeGalerryEL).join(” “);
// // // console.log(makeGallerryList);
// listRef.insertAdjacentHTML(“beforeend”, makeGallerryList);
// // console.log(makeGallerryList);
