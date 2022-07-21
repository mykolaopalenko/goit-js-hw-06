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



const galaryList = document.querySelector('ul');



// create galery
const galaryElem = images
   .map(function ({ url, alt }) {
      return `<li><img src = '${url}' alt = '${alt}' height="220"></li>`;
   })


console.log(galaryElem);

galaryList.insertAdjacentHTML("afterbegin", galaryElem);



// add css

document.body.style.background = 'rgb(76, 9, 121)';
document.body.style.background = 'linear-gradient(90deg, rgba(76,9,121,1) 21%, rgba(124,9,32,1) 64%, rgba(38,0,255,0.989233193277311) 100%)';

galaryList.style.cssText = `list-style-type: none;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0;
   padding: 0;`;
