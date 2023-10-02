const campGrounds = [
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

const cardContainer = document.querySelector('#card-container');

function generateCardHTML(camp) {
  return `<div class="w-100 grid grid-flow-row gap-2 border-solid border-2 p-3 transition-all origin-{center left} hover:scale-[1.05] hover:shadow-lg input" key="${camp.id}">
            <img class="rounded-lg w-full" src="${camp.image}" alt="${camp.name}"/>
            <h4 class="text-lg font-bold">${camp.name}</h4>
            <p class="text-slate-600">${camp.description}</p>
            <a href="page2.html?id=${camp.id}" class="view-button text-center input p-3 font-bold hover:animate-pulse hover:bg-[#DAD7CD] hover:border-none"><button data-index="${camp.id}">${camp.button}</button></a>
          </div>`;
}

function renderCards(camps) {
  const cardHTML = camps.map(generateCardHTML).join('');
  cardContainer.innerHTML = cardHTML;
}

renderCards(campGrounds);

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

const menu = document.querySelector("#Menu-btn")
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
});































































// const campGrounds = [
//     {
//       name: "Pine Ridge Campground",
//       description: "Nestled deep in the forest, Pine Ridge Campground offers a serene escape for nature enthusiasts. Enjoy hiking trails, birdwatching, and peaceful nights under the starry sky.",
//       image: "../Assets/Camp-Images/Compressed-Images/BuloySprings.jpg",
//       button: "View Campground"
//     },
//     {
//       name: "Lakeview Campsite",
//       description: "Situated on the shores of a pristine mountain lake, Lakeview Campsite is a water lover's paradise. Fish, swim, and kayak during the day, and gather around the campfire at night.",
//       image: "../Assets/Camp-Images/Compressed-Images/CalaguasIsland.jpg",
//       button: "View Campground"
//     },
//     {
//       name: "Mountain Haven Retreat",
//       description: "Experience the breathtaking beauty of the mountains at Mountain Haven Retreat. This campground is a haven for hikers, with numerous trails that lead to panoramic vistas.",
//       image: "../Assets/Camp-Images/Compressed-Images/LatikRiverside.jpg",
//       button: "View Campground"
//     },
//     {
//       name: "Riverbend Campground",
//       description: "Camp along the scenic riverbanks at Riverbend Campground. Listen to the soothing sounds of the river as you relax by your campfire and enjoy water activities like tubing and fishing.",
//       image: "../Assets/Camp-Images/Compressed-Images/MountUlap.jpg",
//       button: "View Campground"
//     },
//     {
//       name: "Desert Oasis Campground",
//       description: "Discover the wonders of the desert at Desert Oasis Campground. With its unique landscapes and cactus-studded terrain, it's a perfect spot for stargazing and off-roading adventures.",
//       image: "../Assets/Camp-Images/Compressed-Images/OnayBeach.jpg",
//       button: "View Campground"
//     },
//     {
//       name: "Seaside Cove Campground",
//       description: "Seaside Cove Campground offers a coastal camping experience with breathtaking ocean views. Explore tide pools, go beachcombing, and fall asleep to the sound of crashing waves."
//       ,image: "../Assets/Camp-Images/Compressed-Images/SevenSistersWaterfall.jpg",
//       button: "View Campground"
//     },
    
//   ];
  
//   const cards = campGrounds.map((camps, index) => {
//     return `<div class="w-100 grid grid-flow-row gap-2 border-solid border-2 p-3 input" key=${index}>
//                 <img class="rounded-lg w-full" src="${camps.image}" alt="${camps.name}"/>
//                 <h4 class="text-lg font-bold">${camps.name}</h4>
//                 <p class="text-slate-600">${camps.description}</p>
//                 <button class="input p-3 font-bold hover:animate-pulse hover:bg-[#DAD7CD] hover:border-none" onClick={}>${camps.button}</button>
//             </div>`
//   })
// let cardContainer= document.querySelector('#card-container');
// cardContainer.innerHTML = cards.join('');

// const searchBtn = document.querySelector('#btn')

// searchBtn.addEvenListener('click', () => {

//     const inputValue = document.querySelector('input[type="text"]').value.toLowerCase();

//     const filterCards = campGrounds.filter(camps => camps.name.toLowerCase().includes(inputValue))
//     const filterCardsHTML = filterCards.map((camp,index) => {
//         return `<div class="w-100 grid grid-flow-row gap-2 border-solid border-2 p-3 input" key=${index}>
//                 <img class="rounded-lg w-full" src="${camp.image}" alt="${camp.name}"/>
//                 <h4 class="text-lg font-bold">${camp.name}</h4>
//                 <p class="text-slate-600">${camp.description}</p>
//                 <button class="input p-3 font-bold hover:animate-pulse hover:bg-[#DAD7CD] hover:border-none" onClick={}>${camp.button}</button>
//             </div>`
//     })

//     cardContainer.innerHTML = filterCardsHTML.join('');
// });










































































































































/*const campGrounds = [
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

  /*const campData = [
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
  ];*/


  /**Get references to the popup and buttons**/
 /* const popup = document.querySelector('#popupContainer');
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
              <button data-index="${camp.id}" class="view-button input p-3 font-bold hover:animate-pulse hover:bg-[#DAD7CD] hover:border-none"><a href="page2.html?id=${camp.id}">${camp.button}</a></button>
            </div>`;
  }

  

  /*function generateCampInfoHTML(item) {
    return    `<div class="border-2 border-solid rounded items-center mb-10">
                <img class="rounded w-64 m-4 md:w-80 md:ml-7" src="${item.images}" alt="${item.name}"/>
                <h1 class="flex items-center gap-12 m-4 font-bold text-lg md:gap-24 md:ml-8"> ${item.name}
                <small>${item.amount}</small>
                </h1>
                <p class="text-slate-600 text-sm m-4 md:ml-8">${item.description}</p>
                <small class="text-slate-600 m-4 text-sm md:ml-8">${item.person}</small>
            </div>`;
  }*/

 /* const detailedInfoContainer = document.querySelector('#detailedInfoContainer')
  const containerInfo = document.querySelector('#container-info')
  const topBar = document.querySelector('top-bar')
  
  function renderCards(camps) {
    const cardHTML = camps.map(generateCardHTML).join('');
    cardContainer.innerHTML = cardHTML;
    const viewButtons = document.querySelectorAll('.view-button');

    viewButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-index');
            const selectedCamp = campData.find(camp => camp.id == id);
            
            /**This works if we want to render it in a single page**/
            // if (selectedCamp) {
            //     cardContainer.innerHTML = '';
            //     const detailedInfoHTML = generateCampInfoHTML(selectedCamp);
            //     detailedInfoContainer.innerHTML = detailedInfoHTML;
            //     // topBar.classList.add('hidden')
            //     containerInfo.classList.remove('hidden')
            //     detailedInfoContainer.classList.remove('hidden')

            //     ;
            // }
      /*  });
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

   /* function openPopup() {
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




//<button data-index="${camp.id}" class="view-button input p-3 font-bold hover:animate-pulse hover:bg-[#DAD7CD] hover:border-none">${camp.button}</button> 




























































































































































































/*const cardHTML = camps.map(generateCardHTML).join('');
    cardContainer.innerHTML = cardHTML;
    const viewButtons = document.querySelectorAll('.view-button');

    viewButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
          // const selectedCamp = campData[index];
          const filteredCamps = campGrounds.filter(camp => camp.id == campData.id);
          const detailedInfoHTML = generateCampInfoHTML(filteredCamps);
          detailedInfoContainer.innerHTML = detailedInfoHTML;
          detailedInfoContainer.classList.remove('hidden');
      })
    })*/

























/**End of section**/




/*function renderCards(camps) {
  const cardHTML = camps.map((camp, index) => {
      const card = document.createElement('div');
      card.classList.add('camp-card', 'w-full', 'p-3', 'border-solid', 'border-2');
      card.innerHTML = `
          <img class="rounded-lg w-full" src="${camp.image}" alt="${camp.name}"/>
          <h4 class="text-lg font-bold">${camp.name}</h4>
          <p class="text-slate-600">${camp.description}</p>
          <button class="view-button text-white bg-blue-500 px-4 py-2 rounded-full mt-2 hover:bg-blue-600 focus:outline-none">View Campground</button>
      `;

      // Add a click event listener to each "View Campground" button
      const viewButton = card.querySelector('.view-button');
      viewButton.addEventListener('click', () => {
          const selectedCamp = campData[index];
          const detailedInfoHTML = generateDetailedInfoHTML(selectedCamp);
          detailedInfoContainer.innerHTML = detailedInfoHTML;
          detailedInfoContainer.classList.remove('hidden');
      });

      return card;
  });

  // Clear the card container and append the generated cards
  cardContainer.innerHTML = '';
  cardHTML.forEach(card => cardContainer.appendChild(card));
}*/



// const viewButtons = document.querySelectorAll('.view-button');

    // viewButtons.forEach((button) => {
    //     button.addEventListener('click', (event) => {
    //         const index = event.target.getAttribute('data-index');
    //         const selectedCamp = campData[index];
    //         const detailedInfoHTML = generateCampInfoHTML(selectedCamp);
    //         detailedInfoContainer.innerHTML = detailedInfoHTML;
    //         detailedInfoContainer.classList.remove('hidden');
    //     });
    // });
































/*// Function to render campground cards
  function renderCards(camps) {
      const cardHTML = camps.map(generateCardHTML).join('');
      cardContainer.innerHTML = cardHTML;

    // Add click event listeners to each campground card
      const campCards = document.querySelectorAll('.camp-card');

      campCards.forEach((card, index) => {
          card.addEventListener('click', () => {
              const selectedCamp = campData[index];
              const detailedInfoHTML = generateDetailedInfoHTML(selectedCamp);
              detailedInfoContainer.innerHTML = detailedInfoHTML;
              detailedInfoContainer.classList.remove('hidden');
          });
      });
  }*/



  /*addDetailsOfCampGround.addEventListener('click', () => {
    //const newDetail = prompt("Please enter the details of your favourite camp ground");

    const newDetail = ;
  })*/
  
