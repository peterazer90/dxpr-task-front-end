(function (Drupal) {
    Drupal.behaviors.fullScreenSearch = {
        attach(context, settings) {
            const searchButton = document.querySelector(".full-screen-search-button");
            const searchForm = document.querySelector(".full-screen-search-form");
            const searchFormInput = document.querySelector(".search-query");
            const body = document.querySelector("body");

            // clear search function /////////////////////////////////////////////////////////
            function clearSearchForm() {
                searchForm.classList.toggle("invisible");
                body.classList.toggle("body--full-screen-search");
                setTimeout(() => {
                    searchFormInput.setAttribute("value", "");
                }, 350);
            }

            // event listeners ///////////////////////////////////////////////////////////////
            searchButton.addEventListener('touchstart', onSearchButtonTouch);
            searchForm.addEventListener('touchstart', onSearchFormTouch);
            document.addEventListener("keydown", onKeyDown);

            //on search button function //////////////////////////////////////////////////////
            function onSearchButtonTouch(event) {
                event.preventDefault();
                searchForm.classList.toggle("invisible");
                body.classList.toggle("body--full-screen-search");
                searchFormInput.focus();
            }

            // on search form function ////////////////////////////////////////////////////////
            function onSearchFormTouch(event) {
                const targetTouch = event.targetTouches[0].target.classList;
                if (!targetTouch.contains("search-query")) clearSearchForm();
            }

            // on key down function //////////////////////////////////////////////////////////
            function onKeyDown(event) {
                const escapeCode = 27;
                const searchFormClasses = searchForm.classList;
                if (event.keyCode == escapeCode && !searchFormClasses.contains("invisible"))
                    clearSearchForm();
            }
        }
    };
})(Drupal);
