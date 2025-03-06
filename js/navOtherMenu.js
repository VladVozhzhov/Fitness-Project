let OtherMenu = 'Other <img src="img/arrow-up-3100.png" width="16" height="16" class="inline">';

function otherMenu() {
    document.querySelector('.js-other-menu-button')
        .addEventListener('click', () => {
            document.querySelector('.js-other-menu').classList.toggle('hidden');
            document.querySelector('.js-other-menu-button').innerHTML = OtherMenu;
            OtherMenu = OtherMenu.includes('arrow-up-3100.png') 
                ? 'Other <img src="img/arrow-down-3101.png" width="16" height="16" class="inline">'
                : 'Other <img src="img/arrow-up-3100.png" width="16" height="16" class="inline">';
        });
}

// Call the function directly
otherMenu();