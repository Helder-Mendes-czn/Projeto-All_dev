// Menu Sidebar


const menu__sidebar = document.querySelector('#menu__sidebar');
const menu__open_btn = document.querySelector('#menu__open-btn');
menu__open_btn.addEventListener('click', function(){
    menu__sidebar.style.display = 'block';

    const menu__close_btn = document.querySelector('#menu__close-btn');
    menu__close_btn.addEventListener('click', function(){
        menu__sidebar.style.display = 'none';
    })

    if (document.querySelector('body').style.width > '1600px'){
        menu__sidebar.style.display = 'block';  
    }
})

// Menu btns

const code_editor__btn = menu__sidebar.querySelector('#code-editor__btn');
const community__btn = menu__sidebar.querySelector('#community__btn');

const code_editor = document.querySelector('#code-editor');
const code_editor__custom = document.querySelector('#code-editor__custom');
const community = document.querySelector('#community')

code_editor__btn.addEventListener('click', function(){
    code_editor.style.display = 'block';
    code_editor__custom.style.display = 'block';
    code_editor__btn.classList.remove('unselect');

    community.style.display = 'none';
    community__btn.classList.add('unselect');
})

community__btn.addEventListener('click', function(){
    code_editor.style.display = 'none';
    code_editor__custom.style.display = 'none';
    code_editor__btn.classList.add('unselect');

    community.style.display = 'flex';
    community__btn.classList.remove('unselect');
})

// search-bar mobile

const searchBarMobileBtn = document.querySelector('#search-bar__btn');
searchBarMobileBtn.addEventListener('click', function(){
    let searchBarMobile = document.querySelector('#search-bar__mobile');

    if(searchBarMobile.style.display == 'none'){
        searchBarMobile.style.display = 'block';
    }else{
        searchBarMobile.style.display = 'none';
    }
})


