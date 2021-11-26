class Navbar {
    static show() {
        Navbar.navigate();
    }

    static navigate() {

        const nav = document.getElementById('navbar');
        nav.innerHTML = `
            <ul>
                <li data-section="book-page" class="link active"> Books </li>
                <li data-section="add-page" class="link"> Add a book </li>
                <li data-section="contact-page" class="link"> Contact </li>
            </ul>
        `;
        
        const links = document.querySelectorAll("#navbar .link");

        const showPage = (e) => {
            const currentLink = e.target;
            
            if ( currentLink.classList.contains("link") && !currentLink.classList.contains("active") ) {
                links.forEach( link => link.classList.remove("active") );
                currentLink.classList.add("active");

                const pageId = e.target.getAttribute("data-section");
                const currentPage = document.getElementById(pageId);

                const pages = document.querySelectorAll(".page");
                pages.forEach( page => page.classList.add("not-showing"));
                currentPage.classList.remove("not-showing");
                currentPage.classList.add("showing");
            }

        }

        nav.addEventListener("click", (e) => showPage(e))
        
    }
}