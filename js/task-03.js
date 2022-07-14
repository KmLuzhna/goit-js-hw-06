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
 .map( ({url, alt}) => { return `<li><img src = '${url}' alt = '${alt}' width="300px"><li>`})
 .join("");
console.log(itemOfImages);

listOfImages.insertAdjacentHTML("afterbegin", itemOfImages);




listOfImages.style.display = "flex";
listOfImages.style.flexDirection = "column";
listOfImages.style.justifyContent = "center";
listOfImages.style.padding = "20px";
listOfImages.style.gridGap = "10px";
listOfImages.style.listStyle = "none";




