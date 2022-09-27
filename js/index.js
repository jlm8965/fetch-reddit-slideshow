//images array
let currPhotoArr =  []
const API_URL = 'https://www.reddit.com/search.json?limit=15&q='
const INTERVAL_DELAY = 2000
const currentIndex = 0
const interval = 2000

//forcing JS to wait to run its code until DOM has been loaded
document.addEventListener('DOMContentLoaded', function(){

//event listeners to buttons
//search to search Reddit on click 
document.getElementById(searchButton).addEventListener('submit', fetchFromReddit )
//stop button to stop slides on click
document.getElementById(stopButton).addEventListener('click', stopSlides)
})
//event listener to next button to move to next photo
document.getElementById(nextButton).addEventListener('click', nextPhoto)

//functions
//function fetch photos from Reddit
function fetchFromReddit(e) {
  //asking to not refresh the page
  e.preventDefault()
}

//grabbing value from search box to search on Reddit
const q = document.getElementById('query');
if(query) {
  fetch(API_URL + query)
  .then(function(responseObj){
    return responseObj.json()
  })
  .then(function(jsonResults){
    const results = jsonResults.data.children
  })
}

  //showImage
const showImage = (image) => {
    //getter method - getAttribute
    const imageUrl = image.target.getAttribute('https://b.thumbs.redditmedia.com/1BCF9_RhHGW6ey65N4kIeeFZJDoINM7I0idajXV42lo.jpg')
    fetch(imageUrl)
    //have to return as JSON
    .then(res => res.json())
    .then(showImageSuccess)
    .catch(console.error)


//array of images to be looped through in slideshow
const imagesArray = (image) => {
    imagesArray.results.forEach(image => {
        //creating div for each image
        const imageSpace = document.createElement('div')
        //naming image div
        imageSpace.imageOneSpace = image.name
        //add a class to each div
        imageSpace.classList.add('imageClass')
        //giving img tag an id
        document.getElementById("imageid").src'https://b.thumbs.redditmedia.com/1BCF9_RhHGW6ey65N4kIeeFZJDoINM7I0idajXV42lo.jpg')
        //setter-method
        imageSpace.setAttribute(img src=URL('https://b.thumbs.redditmedia.com/1BCF9_RhHGW6ey65N4kIeeFZJDoINM7I0idajXV42lo.jpg'))
        //click event
        imageSpace.addEventListener('click', moveImageForward)
        //take image and add to the container
        container.appendChild(image)
    })
}

const photoAdvance = (currPhotoArr) => {
    currPhotoIndex++
    if(currPhotoIndex >= 20) {
        currPhotoIndex = 0
    }
}


const getCurrImage = document.querySelector('.photobox')
console.log(getCurrImage)
getCurrImage.removeChild()
const reddit = document.createElement('img')
reddit.classList.add('reddit')
reddit.setAttribute('src', currPhotoArr[currPhotoIndex])
reddit.setAttribute('alt', `this is an image of ${constname} from reddit`)
reddit.appendChild(reddit)


//images slideshow
const currphotoArr = document.querySelectorAll("img");
  let i = 0;
    setInterval(function(){ 
    if(i == 0) {
      currphotoArr[i].className = "fade-in-image";
    } else if(i == photoArray.length ) {
      currphotoArr[i - 1].className = "fade-out-image";
      currphotoArr[0].className = "fade-in-image";
      i = 0;
    } else {
      currphotoArr[i - 1].className = "fade-out-image";
      currphotoArr[i].className = "fade-in-image";
    }
    i++;
  }, 2000);