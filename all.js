const campGrounds = [
    { 
      id:1,
      name: "Pine Ridge Campground",
      description: "Nestled deep in the forest, Pine Ridge Campground offers a serene escape for nature enthusiasts. Enjoy hiking trails, birdwatching, and peaceful nights under the starry sky.",
      image: "images/pexels-sagui-andrea-618848.jpg",
      button: "View Campground"
    },
    {
      id:2,
      name: "Lakeview Campsite",
      description: "Situated on the shores of a pristine mountain lake, Lakeview Campsite is a water lover's paradise. Fish, swim, and kayak during the day, and gather around the campfire at night.",
      image: "images/pexels-robert-forever-ago-2516423.jpg",
      button: "View Campground"
    },
    {
      id:3,
      name: "Mountain Haven Retreat",
      description: "Experience the breathtaking beauty of the mountains at Mountain Haven Retreat. This campground is a haven for hikers, with numerous trails that lead to panoramic vistas.",
      image: "images/pexels-robert-forever-ago-2496880.jpg",
      button: "View Campground"
    },
    {
      id:4,
      name: "Riverbend Campground",
      description: "Camp along the scenic riverbanks at Riverbend Campground. Listen to the soothing sounds of the river as you relax by your campfire and enjoy water activities like tubing and fishing.",
      image: "images/pexels-matthew-devries-2526025.jpg",
      button: "View Campground"
    },
    {
      id:5,
      name: "Desert Oasis Campground",
      description: "Discover the wonders of the desert at Desert Oasis Campground. With its unique landscapes and cactus-studded terrain, it's a perfect spot for stargazing and off-roading adventures.",
      image: "images/pexels-guduru-ajay-bhargav-939723.jpg",
      button: "View Campground"
    },
    {
      id:6,
      name: "Seaside Cove Campground",
      description: "Seaside Cove Campground offers a coastal camping experience with breathtaking ocean views. Explore tide pools, go beachcombing, and fall asleep to the sound of crashing waves.",
      image: "images/pexels-cliford-mervil-2398220.jpg",
      button: "View Campground"
    },
  ];


  /**CmpGRound detailed info**/

  const campData = [
    {
      id:1,
      images: "images/pexels-sagui-andrea-618848.jpg",
      name: "Mount Ulap",
      amount: "$104.99/night",
      description: "Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tuba, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.",
      person: "Submitted by Andrew Mike",
    },
    {
      id:2,
      images: "images/pexels-robert-forever-ago-2516423.jpg",
      name: "Another Campground",
      amount: "$89.99/night",
      description: "This serene campground is nestled in the heart of the forest, offering a peaceful retreat for nature enthusiasts. Enjoy hiking and birdwatching during your stay.",
      person: "Submitted by Sarah Johnson",
    },
    { 
      id:3,
      images: "images/pexels-robert-forever-ago-2496880.jpg",
      name: "Lakeside Retreat",
      amount: "$124.99/night",
      description: "Experience the tranquility of this lakeside campground. You can fish, kayak, and stargaze by the campfire. Perfect for a family getaway.",
      person: "Submitted by David Smith",
    },
    {
      id:4,
      images: "images/pexels-matthew-devries-2526025.jpg",
      name: "Forest Haven",
      amount: "$95.99/night",
      description: "Find solace in this secluded forest haven. Surrounded by towering trees, it's an ideal spot for those seeking a peaceful escape.",
      person: "Submitted by Emily Clark",
    },
    { 
      id:5,
      images: "images/pexels-guduru-ajay-bhargav-939723.jpg",
      name: "Mountain View Camp",
      amount: "$119.99/night",
      description: "Enjoy breathtaking mountain views from this campsite. Hike to the nearby peaks and be rewarded with stunning vistas.",
      person: "Submitted by Michael Davis",
    },
    {
      id: 6 ,
      images: "images/pexels-cliford-mervil-2398220.jpg",
      name: "Coastal Retreat",
      amount: "$149.99/night",
      description: "This coastal campground offers beachfront access. Listen to the soothing sound of waves as you relax in your tent or RV.",
      person: "Submitted by Lisa Rodriguez",
    },
  ];
/**Individual Reviews**/
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


  /**Get references to the popup and buttons**/
  const popup = document.querySelector('#popupContainer');
  const openPopupButton = document.querySelector('#addDetails');
  const closePopupButton = document.querySelector('#closePopupButton');
  const submitNewDetails = document.querySelector('#addCamp')
  
  const cardContainer = document.querySelector('#card-container');
  
  function generateCardHTML(camp) {
    return `<div class="w-100 grid grid-flow-row gap-2 border-solid border-2 p-3 input" key="${camp.id}">
              <img class="rounded-lg w-full" src="${camp.image}" alt="${camp.name}"/>
              <h4 class="text-lg font-bold">${camp.name}</h4>
              <p class="text-slate-600">${camp.description}</p>
              <!-- Inside your generateCardHTML function in index.html -->
              <button data-index="${camp.id}" class="view-button input p-3 font-bold hover:animate-pulse hover:bg-[#DAD7CD] hover:border-none">${camp.button}</button>
            </div>`;
            //<a href="page2.html?id=${camp.id}">${camp.button}</a>
  }

  

  function generateCampInfoHTML(selectedCamp) {
    return  `
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
  }

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
const landingPage = document.querySelector('#landingPage');
const searchPage = document.querySelector('#searchPage');
const individualPage = document.querySelector('#IndividualPage');

  const landingPageBtn = document.querySelector('#nextFromLP');
  landingPageBtn.addEventListener('click', () => {
    // landingPage.style.display='hidden';
    landingPage.classList.add('hidden')
    searchPage.classList.remove('hidden')
  })

  const detailedInfoContainer = document.querySelector('#detailedInfoContainer')
  const containerInfo = document.querySelector('#container-info')
  const topBar = document.querySelector('top-bar')

  function renderData(data,functionMarkup) {
        return data.map(functionMarkup).join('');
    }
const selectedCamp = "";
function renderCards(camps) {
    const cardHTML = camps.map(generateCardHTML).join('');
    cardContainer.innerHTML = cardHTML;

    const viewButtons = document.querySelectorAll('.view-button');

    viewButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-index');
            const selectedCamp = campData.find(camp => camp.id == id);
            feedbackContainer.innerHTML = renderData(campingReviews,generateReviewHTML) + btn;
            /**This works if we want to render it in a single page**/
            if (selectedCamp) {
                cardContainer.innerHTML = '';
                const detailedInfoHTML = generateCampInfoHTML(selectedCamp);
                detailedInfoContainer.innerHTML = detailedInfoHTML;
                individualPage.classList.remove('hidden');
                searchPage.classList.add('hidden');
                detailedInfoContainer.classList.remove('hidden');
            }
        });
    });

}
renderCards(campGrounds);

 
//the search button filters through the array to get corresponding data output
const searchBtn = document.querySelector('#btn');

searchBtn.addEventListener('click', () => {
    const inputValue = document.querySelector('input[type="text"]').value.toLowerCase();

    const filteredCamps = campGrounds.filter(camp => camp.name.toLowerCase().includes(inputValue));

    renderCards(filteredCamps);
});

/**To add new camp ground to the existing from the user**/

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
    e.preventDefault()

    const nameDetails = document.querySelector('#nameOfCampGround').value;
    const descriptionDetails = document.querySelector('#description').value;
    const imageDetails = document.querySelector('#imageOfCampGround').value;

    const newDetail = 
    {
        name:`"${nameDetails}"` , 
        description: `"${descriptionDetails}"`, 
        image: `"${imageDetails}"`,
        button: "View Campground"
    }

    campGrounds.unshift(newDetail)
    renderCards(campGrounds)
})

/*const popupB = document.querySelector('#popupContainer');
const openPopupButtonB = document.querySelector('#addReviewBtn');
const closePopupButtonB = document.querySelector('#closePopupButton');
const submitNewDetailsB = document.querySelector('#addReview');

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
})*/












































































































































































/*const campGrounds = [
    {
      id: 1,
      name: "Pine Ridge Campground",
      description: "Nestled deep in the forest, Pine Ridge Campground offers a serene escape for nature enthusiasts. Enjoy hiking trails, birdwatching, and peaceful nights under the starry sky.",
      image: "images/pexels-sagui-andrea-618848.jpg",
      button: "View Campground"
    },
    {
      id: 2,
      name: "Lakeview Campsite",
      description: "Situated on the shores of a pristine mountain lake, Lakeview Campsite is a water lover's paradise. Fish, swim, and kayak during the day, and gather around the campfire at night.",
      image: "images/pexels-robert-forever-ago-2516423.jpg",
      button: "View Campground"
    },
    {
      id: 3,
      name: "Mountain Haven Retreat",
      description: "Experience the breathtaking beauty of the mountains at Mountain Haven Retreat. This campground is a haven for hikers, with numerous trails that lead to panoramic vistas.",
      image: "images/pexels-robert-forever-ago-2496880.jpg",
      button: "View Campground"
    },
    {
      id: 4,
      name: "Riverbend Campground",
      description: "Camp along the scenic riverbanks at Riverbend Campground. Listen to the soothing sounds of the river as you relax by your campfire and enjoy water activities like tubing and fishing.",
      image: "images/pexels-matthew-devries-2526025.jpg",
      button: "View Campground"
    },
    {
      id: 5,
      name: "Desert Oasis Campground",
      description: "Discover the wonders of the desert at Desert Oasis Campground. With its unique landscapes and cactus-studded terrain, it's a perfect spot for stargazing and off-roading adventures.",
      image: "images/pexels-guduru-ajay-bhargav-939723.jpg",
      button: "View Campground"
    },
    {
      id: 6,
      name: "Seaside Cove Campground",
      description: "Seaside Cove Campground offers a coastal camping experience with breathtaking ocean views. Explore tide pools, go beachcombing, and fall asleep to the sound of crashing waves.",
      image: "images/pexels-cliford-mervil-2398220.jpg",
      button: "View Campground"
    },
  ];


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
  
  const cardContainer = document.querySelector('#card-container');
  
  function generateCardHTML(camp) {
    return `<div class="w-100 grid grid-flow-row gap-2 border-solid border-2 p-3 input" key="${camp.id}">
              <img class="rounded-lg w-full" src="${camp.image}" alt="${camp.name}"/>
              <h4 class="text-lg font-bold">${camp.name}</h4>
              <p class="text-slate-600">${camp.description}</p>
              <button data-index="${camp.id}" class="view-button input p-3 font-bold hover:animate-pulse hover:bg-[#DAD7CD] hover:border-none"><a href="#IndividualPage">${camp.button}</a></button>
            </div>`;
  }

  function generateReviewHTML(camp) {
    return    `<div class="border-b-2 border-solid rounded items-center w-100">
                <div class="flex justify-between py-5">
                <span class="font-bold text-l text-black">${camp.name}</span>
                <span class="text-sm text-black">${camp.time}</span>
                </div>
                <p class="text-sm pb-2">${camp.description}</p>
            </div>`;
    }

    function generateCampInfoHTML(item) {
        return    `<div class="border-2 border-solid rounded items-center mb-10">
                    <img class="rounded w-64 m-4 md:w-80 md:ml-7" src="${item.images}" alt="${item.name}"/>
                    <h1 class="flex items-center gap-12 m-4 font-bold text-lg md:gap-24 md:ml-8"> ${item.name}
                    <small>${item.amount}</small>
                    </h1>
                    <p class="text-slate-600 text-sm m-4 md:ml-8">${item.description}</p>
                    <small class="text-slate-600 m-4 text-sm md:ml-8">${item.person}</small>
                </div>`;
      }
  
//   function renderCards(camps) {
//     const cardHTML = camps.map(generateCardHTML).join('');
//     cardContainer.innerHTML = cardHTML;
//   }

const landingPage = document.querySelector('#landingPage');
const searchPage = document.querySelector('#searchPage');
const individualPage = document.querySelector('#IndividualPage');
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

  const landingPageBtn = document.querySelector('#nextFromLP');
  landingPageBtn.addEventListener('click', () => {
    // landingPage.style.display='hidden';
    landingPage.classList.add('hidden')
    searchPage.classList.remove('hidden')
  })
  const btn = `<div class="flex justify-end"><button id="addReviewBtn" class="bg-black text-lg text-white p-3">Leave a review</button></div>`;

// function renderReviews(camps) {
//     const groundInfoHTML = camps.map(generateReviewHTML).join('');
//     feedbackContainer.innerHTML = groundInfoHTML + btn;
// }

/*function renderCards(camps) {
    const cardHTML = camps.map(generateCardHTML).join('');
    cardContainer.innerHTML = cardHTML;
    const viewButtons = document.querySelectorAll('.view-button');
    const feedbackContainer = document.querySelector("#feedbackContainer");

    viewButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-index');
            console.log(typeof id)
            const selectedCamp = campData.find(camp => camp.id == id);
            console.log(selectedCamp())
            searchPage.classList.add('hidden')
            individualPage.classList.remove('hidden')
            /**This works if we want to render it in a single page**
            if (selectedCamp) {
                const detailedInfoHTML = generateCampInfoHTML(selectedCamp);
                detailedInfoContainer.innerHTML = detailedInfoHTML;
                const groundInfoHTML = camps.map(generateReviewHTML).join('');
                feedbackContainer.innerHTML = groundInfoHTML + btn;

            }
        });
    });*/
    // ... (previous code)

/*function renderCards(camps) {
    const cardHTML = camps.map(generateCardHTML).join('');
    cardContainer.innerHTML = cardHTML;
    const viewButtons = document.querySelectorAll('.view-button');
  
    viewButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const id = event.target.getAttribute('data-index');
        const selectedCamp = campData.find((camp) => camp.id == id);
        
        if (selectedCamp) {
          const detailedInfoHTML = generateCampInfoHTML(selectedCamp);
          const feedbackContainer = document.querySelector("#feedbackContainer");
          //feedbackContainer.innerHTML = ''; // Clear existing content
          feedbackContainer.innerHTML = detailedInfoHTML + btn;
          
          // Display reviews
          const reviewsHTML = campingReviews.map(generateReviewHTML).join('');
          feedbackContainer.insertAdjacentHTML('beforeend', reviewsHTML);
        }
        
        searchPage.classList.add('hidden');
        individualPage.classList.remove('hidden');
      });
    });
  }
  
  // ... (rest of your code)
  
  renderCards(campGrounds);

  

  
//   renderCards(campGrounds);
  
 const searchBtn = document.querySelector('#btn');
  
  searchBtn.addEventListener('click', () => {
    const inputValue = document.querySelector('input[type="text"]').value.toLowerCase();
    const filteredCamps = campGrounds.filter(camp => camp.name.toLowerCase().includes(inputValue));
    renderCards(filteredCamps);
  });
  
  const popup = document.querySelector('#popupContainer');
  const openPopupButton = document.querySelector('#addDetails');
  const closePopupButton = document.querySelector('#closePopupButton');
  const submitNewDetails = document.querySelector('#addCamp');
  
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
  
    const nameDetails = document.querySelector('#nameOfCampGround').value;
    const descriptionDetails = document.querySelector('#description').value;
    const imageDetails = document.querySelector('#imageOfCampGround').value;
  
    const newDetail = {
        name: nameDetails,
        description: descriptionDetails,
        image: imageDetails,
        button: "View Campground"
    };
  
    campGrounds.unshift(newDetail);
    renderCards(campGrounds);
  });
  
  /*const menu = document.querySelector("#Menu-btn")
  const showMenu = document.querySelector("#show-menu")
  const closeBtn = document.querySelector('#close-btn')
  
  menu.addEventListener('click', () => {
    showMenu.classList.remove('hidden')
    showMenu.classList.add('block')
  })
  closeBtn.addEventListener('click', () => {
    showMenu.classList.add('hidden')
  })
  
  const body = document.querySelector('#body')
  
  window.addEventListener('click', (event) => {
    if (event.target === body) {
      showMenu.classList.add('hidden')
    }
  });*/

  

/**Page2 javaScript**/

  
//   const urlParams = new URLSearchParams(window.location.search);
//   const id = urlParams.get('id');
  
//   const selectedCamp = campData.find(camp => camp.id == id);
  
//   if (selectedCamp) {
//       const detailsHTML = `
//         <div class="bg-white m-4 sm:m-2">
//           <img class="w-full object-cover" src="${selectedCamp.images}" alt="${selectedCamp.name}"/>
//           <div class="">
//             <div class="flex justify-between py-2">
//               <span class="text-l font-bold text-gray-800"> ${selectedCamp.name}</span>
//               <span class="text-gray-600 text-m mt-2">${selectedCamp.amount}</span>
//             </div>
//             <p class="text-gray-700 text-m mt-2 pb-5">${selectedCamp.description}</p>
//             <p class="text-gray-500 text-sm italic mt-2">${selectedCamp.person}</p>
//           </div>
//         </div>
//       `;
  
//       const detailsContainer = document.getElementById('detailsContainer');
//       detailsContainer.innerHTML = detailsHTML;
//   } else {
//       const errorMessage = '<p>Campground not found.</p>';
//       const detailsContainer = document.getElementById('detailsContainer');
//       detailsContainer.innerHTML = errorMessage;
//   }
  
  /*const campingReviews = [
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
  */
 /* function renderCards(camps) {
      const groundInfoHTML = camps.map(generateReviewHTML).join('');
      feedbackContainer.innerHTML = groundInfoHTML + btn;
  }
  
  renderCards(campingReviews);
  
  const popupB = document.querySelector('#popupContainer');
  const openPopupButtonB = document.querySelector('#addReviewBtn');
  const closePopupButtonB = document.querySelector('#closePopupButton');
  const submitNewDetailsB = document.querySelector('#addReview');
  
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
  })*/
  

/*  `<div class="border-2 border-solid rounded items-center mb-10">
                <img class="rounded w-64 md:w-80 lg:w-full " src="${item.images}" alt="${item.name}"/>
                <h1 class="flex items-center gap-12 m-4 font-bold text-lg md:gap-24 md:ml-8"> ${item.name}
                <small>${item.amount}</small>
                </h1>
                <p class="text-slate-600 text-sm m-4 md:ml-8">${item.description}</p>
                <small class="text-slate-600 m-4 text-sm md:ml-8">${item.person}</small>
            </div>` */
