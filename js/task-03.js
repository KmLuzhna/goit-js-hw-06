const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listOfImages = document.querySelector('.gallery');

const itemOfImages = images
 .map( ({url, alt}) => { return `<li><img src = '${url}' alt = '${alt}' width="380px" height="250px" ></li>`})
 .join("");
console.log(itemOfImages);

listOfImages.insertAdjacentHTML("afterbegin", itemOfImages);


listOfImages.style.display = "flex";
listOfImages.style.alignItems = "center";
listOfImages.style.justifyContent = "center";
listOfImages.style.padding = "20px";
listOfImages.style.gridGap = "60px";
listOfImages.style.listStyle = "none";
listOfImages.style.border = "1.5px solid #d3e0db";
listOfImages.style.backgroundColor = `#f2f7f5`;





