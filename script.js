function onLoad() {
    // create reference to button
    const btn = document.querySelector(".nav-button")
    // create reference to the menu
    const menu = document.querySelector(".sidebar")
    // add a listener for a click on button
    btn.addEventListener("click", ()=>{
        if( menu.classList.contains("open") ) {
            // remove "open" ie close the sidebar
            menu.classList.remove("open")
        }
        else {
            menu.classList.add("open")
        }
    } )
}

window.addEventListener("load", onLoad )