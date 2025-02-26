const titlesAndImages = [
        { title: 'Happy Birthday', image: 'images/birthday.jpg' },
        { title: 'Crazy Clown', image: 'images/clown.jpg' },
        { title: 'Its Raining', image: 'images/rain.jpg' },
        { title: 'Quiet Time', image: 'images/read.jpg' },
        { title: 'Working Hard', image: 'images/shovel.jpg' },
        { title: 'Work form Home', image: 'images/work.jpg' }
    ];

    const titleListElement = document.getElementById('title-list');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupImage = document.getElementById('popup-image');
    const closeBtn = document.getElementById('close');

    // Function to create title items
    function createTitleItems() {
        titlesAndImages.forEach(item => {
            const titleItem = document.createElement('div');
            titleItem.classList.add('title-item');
            titleItem.textContent = item.title;

            // Add event listener for the popup
            titleItem.addEventListener('click', () => {
                popupTitle.textContent = item.title;
                popupImage.src = item.image;
                popup.classList.remove('hidden');  // Show the popup
            });

            titleListElement.appendChild(titleItem);
        });
    }

    // Close popup when the close button is clicked
    closeBtn.addEventListener('click', () => {
        popup.classList.add('hidden');  // Hide the popup
    });

    // Initialize the page by creating the title items
    createTitleItems();