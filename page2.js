const campData = [
  {
    id: 1,
    images: "images/BuloySprings.jpg",
    name: "Pine Ridge Campground",
    amount: "$104.99/night",
    description: "Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tuba, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.",
    person: "Submitted by Andrew Mike",
  },
  { 
    id: 2,
    images: "images/CalaguasIsland.jpg",
    name: "Lakeview Campsite",
    amount: "$89.99/night",
    description: "This serene campground is nestled in the heart of the forest, offering a peaceful retreat for nature enthusiasts. Enjoy hiking and birdwatching during your stay.",
    person: "Submitted by Sarah Johnson",
  },
  { 
    id: 3,
    images: "images/LatikRiverside.jpg",
    name: "Mountain Haven Retreat",
    amount: "$124.99/night",
    description: "Experience the tranquility of this lakeside campground. You can fish, kayak, and stargaze by the campfire. Perfect for a family getaway.",
    person: "Submitted by David Smith",
  },
  { 
    id: 4,
    images: "images/SevenSistersWaterfall.jpg",
    name: "Riverbend Campground",
    amount: "$95.99/night",
    description: "Find solace in this secluded forest haven. Surrounded by towering trees, it's an ideal spot for those seeking a peaceful escape.",
    person: "Submitted by Emily Clark",
  },
  { 
    id: 5,
    images: "images/MountUlap.jpg",
    name: "Desert Oasis Campground",
    amount: "$119.99/night",
    description: "Enjoy breathtaking mountain views from this campsite. Hike to the nearby peaks and be rewarded with stunning vistas.",
    person: "Submitted by Michael Davis",
  },
  {
    id: 6,
    images: "images/OnayBeach.jpg",
    name: "Seaside Cove Campground",
    amount: "$149.99/night",
    description: "This coastal campground offers beachfront access. Listen to the soothing sound of waves as you relax in your tent or RV.",
    person: "Submitted by Lisa Rodriguez",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const selectedCamp = campData.find(camp => camp.id == id);

if (selectedCamp) {
    const detailsHTML = `
      <div class="bg-white m-4 sm:m-2">
        <img class="w-full object-cover" src="${selectedCamp.images}" alt="${selectedCamp.name}"/>
        <div class="">
          <div class="flex justify-between py-2">
            <span class="text-l font-bold text-gray-800"> ${selectedCamp.name}</span>
            <span class="text-gray-600 text-m mt-2">${selectedCamp.amount}</span>
          </div>
          <p class="text-gray-700 text-m mt-2 pb-5">${selectedCamp.description}</p>
          <p class="text-gray-500 text-sm italic mt-2">${selectedCamp.person}</p>
        </div>
      </div>
    `;

    const detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.innerHTML = detailsHTML;
} else {
    const errorMessage = '<p>Campground not found.</p>';
    const detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.innerHTML = errorMessage;
}

const campingReviews = [
  {
    name: "John Doe",
    time: "September 10, 2023",
    description: "I had an amazing time camping in the wilderness. The weather was perfect, and the scenery was breathtaking. Definitely, a must-visit spot for nature lovers!"
  },
  {
    name: "Jane Smith",
    time: "August 25, 2023",
    description: "Camping here was an unforgettable experience. The campsite was well-maintained, and the staff was friendly. The starry night sky was a highlight. I'll be back for sure!"
  },
  {
    name: "David Wilson",
    time: "July 5, 2023",
    description: "Our family had a fantastic camping trip. The kids loved exploring the woods, and we enjoyed cooking over the campfire. It's a great place for a weekend getaway."
  }
];

const feedbackContainer = document.querySelector("#feedbackContainer");

function generateReviewHTML(camp) {
    return    `<div class="border-b-2 border-solid rounded items-center w-100">
              <div class="flex justify-between py-5">
                <span class="font-bold text-l text-black">${camp.name}</span>
                <span class="text-sm text-black">${camp.time}</span>
              </div>
              <p class="text-sm pb-2">${camp.description}</p>
            </div>`;
}


const btn = `<div class="flex justify-end"><button id="addReviewBtn" class="bg-black text-lg text-white p-3">Leave a review</button></div>`;

function renderCards(camps) {
    const groundInfoHTML = camps.map(generateReviewHTML).join('');
    feedbackContainer.innerHTML = groundInfoHTML + btn;
}

renderCards(campingReviews);

const popup = document.querySelector('#popupContainer');
const openPopupButton = document.querySelector('#addReviewBtn');
const closePopupButton = document.querySelector('#closePopupButton');
const submitNewDetails = document.querySelector('#addReview');

function openPopup() {
  popup.style.display = 'block';
}

function closePopup() {
  popup.style.display = 'none';
}

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);

window.addEventListener('click', (event) => {
  if (event.target === popup) {
      closePopup();
  }
});

submitNewDetails.addEventListener('click', (e) => {
  e.preventDefault();

  const nameDetails = document.querySelector('#nameOfReviewer').value;
  const descriptionDetails = document.querySelector('#description').value;

  const newDetail = {
    name: nameDetails,
    time: `${new Date().getSeconds()} seconds ago`,
    description: descriptionDetails
  };

  campingReviews.unshift(newDetail);
  renderCards(campingReviews);
})
























/**Another section, on click of a button view campGround**/

/*const campData = [
  {
    id: 1,
    images: "images/BuloySprings.jpg",
    name: "Mount Ulap",
    amount: "$104.99/night",
    description: "Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tuba, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.",
    person: "Submitted by Andrew Mike",
  },
  { 
    id: 2,
    images: "images/CalaguasIsland.jpg",
    name: "Another Campground",
    amount: "$89.99/night",
    description: "This serene campground is nestled in the heart of the forest, offering a peaceful retreat for nature enthusiasts. Enjoy hiking and birdwatching during your stay.",
    person: "Submitted by Sarah Johnson",
  },
  { 
    id: 3,
    images: "images/LatikRiverside.jpg",
    name: "Lakeside Retreat",
    amount: "$124.99/night",
    description: "Experience the tranquility of this lakeside campground. You can fish, kayak, and stargaze by the campfire. Perfect for a family getaway.",
    person: "Submitted by David Smith",
  },
  { 
    id: 4,
    images: "images/SevenSistersWaterfall.jpg",
    name: "Forest Haven",
    amount: "$95.99/night",
    description: "Find solace in this secluded forest haven. Surrounded by towering trees, it's an ideal spot for those seeking a peaceful escape.",
    person: "Submitted by Emily Clark",
  },
  { 
    id: 5,
    images: "images/MountUlap.jpg",
    name: "Mountain View Camp",
    amount: "$119.99/night",
    description: "Enjoy breathtaking mountain views from this campsite. Hike to the nearby peaks and be rewarded with stunning vistas.",
    person: "Submitted by Michael Davis",
  },
  {
    id: 6,
    images: "images/OnayBeach.jpg",
    name: "Coastal Retreat",
    amount: "$149.99/night",
    description: "This coastal campground offers beachfront access. Listen to the soothing sound of waves as you relax in your tent or RV.",
    person: "Submitted by Lisa Rodriguez",
  },
];


// Get the id parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Find the campground in the campData array with the matching id
const selectedCamp = campData.find(camp => camp.id == id);

// Check if a campground with the specified id was found

if (selectedCamp) {
    const detailsHTML = `
      <div class="bg-white m-4 sm:m-2">
        <img class="w-full object-cover" src="${selectedCamp.images}" alt="${selectedCamp.name}" lazy="loading"/>
        <div class="">
          <div class="flex justify-between py-2">
            <span class="text-l font-bold text-gray-800"> ${selectedCamp.name}</span>
            <span class="text-gray-600 text-m mt-2">${selectedCamp.amount}</span>
          </div>
          <p class="text-gray-700 text-m mt-2 pb-5">${selectedCamp.description}</p>
          <p class="text-gray-500 text-sm italic mt-2">${selectedCamp.person}</p>
        </div>
      </div>
      `;

    // Display the detailed information in the detailsContainer
    const detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.innerHTML = detailsHTML;
} else {
    // Handle the case when no campground with the specified id is found
    const errorMessage = '<p>Campground not found.</p>';
    const detailsContainer = document.getElementById('detailsContainer');
    detailsContainer.innerHTML = errorMessage;
}

 
const campingReviews = [
  {
    name: "John Doe",
    time: "September 10, 2023",
    description: "I had an amazing time camping in the wilderness. The weather was perfect, and the scenery was breathtaking. Definitely, a must-visit spot for nature lovers!"
  },
  {
    name: "Jane Smith",
    time: "August 25, 2023",
    description: "Camping here was an unforgettable experience. The campsite was well-maintained, and the staff was friendly. The starry night sky was a highlight. I'll be back for sure!"
  },
  {
    name: "David Wilson",
    time: "July 5, 2023",
    description: "Our family had a fantastic camping trip. The kids loved exploring the woods, and we enjoyed cooking over the campfire. It's a great place for a weekend getaway."
  }
];
  
const feedbackContainer = document.querySelector("#feedbackContainer");

function generateReviewHTML(camp) {
  return    `<div class="border-b-2 border-solid rounded items-center w-100">
              <div class="flex justify-between py-5">
                <span class="font-bold text-l text-black">${camp.name}</span>
                <span class="text-sm text-black">${camp.time}</span>
              </div>
              <p class="text-sm pb-2">${camp.description}</p>
            </div>`;
}

function renderCards(camps) {
  const groundInfoHTML = camps.map(generateReviewHTML).join('');
  feedbackContainer.innerHTML = groundInfoHTML;
};

renderCards(campingReviews);*/































































































































































































































































































































































// <h2>${selectedCamp.name}</h2>
        // <img src="${selectedCamp.images}" alt="${selectedCamp.name}">
        // <p>${selectedCamp.description}</p>
        // <p>Price: ${selectedCamp.amount}</p>
        // <p>${selectedCamp.person}</p>



// const detailedInfoContainer = document.querySelector(".campGroundInfoContainer")

// function generateCampInfoHTML(camp) {

//     return    `<div class="border-2 border-solid rounded items-center mb-10 md:border-2 md:w-96">
//                 <img class="rounded w-64 m-4 md:w-80 md:ml-7" src="${camp.images}" alt="${camp.name}"/>
//                 <h1 class="flex items-center gap-12 m-4 font-bold text-lg md:gap-24 md:ml-8"> ${camp.name}
//                 <small>${camp.amount}</small>
//                 </h1>
//                 <p class="text-slate-600 text-sm m-4 md:ml-8">${camp.description}</p>
//                 <small class="text-slate-600 m-4 text-sm md:ml-8">${camp.person}</small>
//             </div>`;
// }


// function renderCards(camps) {
//     const groundInfoHTML = camps.map(generateCampInfoHTML).join('');
//     detailedInfoContainer.innerHTML = groundInfoHTML;

//     viewButtons.forEach((button) => {
//       button.addEventListener('click', (event) => {
//           const id = event.target.getAttribute('data-index');
//           const selectedCamp = campData.find(camp => camp.id == id);

//           if (selectedCamp) {
//               const detailedInfoHTML = generateCampInfoHTML(selectedCamp);
//               detailedInfoContainer.innerHTML = detailedInfoHTML;
//               // topBar.classList.add('hidden')
//               containerInfo.classList.remove('hidden')
//               detailedInfoContainer.classList.remove('hidden')

//               ;
//           }
//       });
//     })
// }
    
// renderCards(campData);






































// searchBtn.addEventListener('click', () => {
//     const inputValue = document.querySelector('input[type="text"]').value.toLowerCase();
    
//     const filteredCamps = campGrounds.filter(camp => camp.name.toLowerCase().includes(inputValue));

//     renderCards(filteredCamps);
// });







   
    // function showUlap(ulaps) {
    //   const cardHTML = ulaps.map(mountUlapHTML).join('');
    //  boxUlap .innerHTML = cardHTML;
    // }
    
    // showUlap (mountain);