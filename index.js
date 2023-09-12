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


const campGrounds = [
    {
      name: "Pine Ridge Campground",
      description: "Nestled deep in the forest, Pine Ridge Campground offers a serene escape for nature enthusiasts. Enjoy hiking trails, birdwatching, and peaceful nights under the starry sky.",
      image: "/images/pexels-sagui-andrea-618848.jpg",
      button: "View Campground"
    },
    {
      name: "Lakeview Campsite",
      description: "Situated on the shores of a pristine mountain lake, Lakeview Campsite is a water lover's paradise. Fish, swim, and kayak during the day, and gather around the campfire at night.",
      image: "/images/pexels-robert-forever-ago-2516423.jpg",
      button: "View Campground"
    },
    {
      name: "Mountain Haven Retreat",
      description: "Experience the breathtaking beauty of the mountains at Mountain Haven Retreat. This campground is a haven for hikers, with numerous trails that lead to panoramic vistas.",
      image: "/images/pexels-robert-forever-ago-2496880.jpg",
      button: "View Campground"
    },
    {
      name: "Riverbend Campground",
      description: "Camp along the scenic riverbanks at Riverbend Campground. Listen to the soothing sounds of the river as you relax by your campfire and enjoy water activities like tubing and fishing.",
      image: "/images/pexels-matthew-devries-2526025.jpg",
      button: "View Campground"
    },
    {
      name: "Desert Oasis Campground",
      description: "Discover the wonders of the desert at Desert Oasis Campground. With its unique landscapes and cactus-studded terrain, it's a perfect spot for stargazing and off-roading adventures.",
      image: "/images/pexels-guduru-ajay-bhargav-939723.jpg",
      button: "View Campground"
    },
    {
      name: "Seaside Cove Campground",
      description: "Seaside Cove Campground offers a coastal camping experience with breathtaking ocean views. Explore tide pools, go beachcombing, and fall asleep to the sound of crashing waves.",
      image: "/images/pexels-cliford-mervil-2398220.jpg",
      button: "View Campground"
    },
  ];

  /**Get references to the popup and buttons**/
  const popup = document.querySelector('#popupContainer');
  const openPopupButton = document.querySelector('#addDetails');
  const closePopupButton = document.querySelector('#closePopupButton');
  const submitNewDetails = document.querySelector('#addCamp')
  
  const cardContainer = document.querySelector('#card-container');
  
  function generateCardHTML(camp) {
    return `<div class="w-100 grid grid-flow-row gap-2 border-solid border-2 p-3 input">
              <img class="rounded-lg w-full" src="${camp.image}" alt="${camp.name}"/>
              <h4 class="text-lg font-bold">${camp.name}</h4>
              <p class="text-slate-600">${camp.description}</p>
              <button class="input p-3 font-bold hover:animate-pulse hover:bg-[#DAD7CD] hover:border-none">${camp.button}</button>
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

  /*addDetailsOfCampGround.addEventListener('click', () => {
    //const newDetail = prompt("Please enter the details of your favourite camp ground");

    const newDetail = ;
  })*/
  
