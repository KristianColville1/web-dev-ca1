/**
 * Single page application design
 * 
 * Handles the routing for the website and creates the ability to use advanced template logic for SPA
 */


/**
 * Responsible for navigating to the page the user clicks on
 * @param {*} page 
 */
function navigateTo(page) {
    const path = page === "/" ? "" : page;
    history.pushState(null, null, path);
    router();
}


/**
 * Routes the user to the content they want to view
 */
function router() {
    const routes = {
        '/': 'Home Page'
    };

    const app = document.getElementById('app');
    app.innerHTML = routes[window.location.pathname] || 'Page not found';
}

// initial settings on the window passing our router and function for navigation
window.onpopstate = router;
window.route = navigateTo;

router(); // initial route for home