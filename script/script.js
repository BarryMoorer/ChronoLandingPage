   
   /*Search Bar Handler*/
   const searchInput = document.getElementsByClassName('menu-search')[0]

    const searchButton = document.getElementsByClassName('menu-button')[0]

    searchButton.addEventListener('mouseover', () => {
        searchInput.classList.toggle('active')
        console.log("this has been clicked")
    })
/* Menu Icon Handler */
    const menuIcon = document.getElementsByClassName('menu-icon')[0]

    const menuBar = document.getElementsByClassName('menu-UL')[0]

    menuIcon.addEventListener('click', () => {
        menuBar.classList.toggle('active');
    })

    