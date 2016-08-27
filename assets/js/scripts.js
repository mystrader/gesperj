 $(document).ready(function() {
        // Initializes search overlay plugin.
        // Replace onSearchSubmit() and onKeyEnter() with 
        // your logic to perform a search and display results
        $('[data-pages="search"]').search({
            searchField: '#overlay-search',
            closeButton: '.overlay-close',
            suggestions: '#overlay-suggestions',
            brand: '.brand',
            onSearchSubmit: function(searchString) {
                console.log("Search for: " + searchString);
            },
            onKeyEnter: function(searchString) {
                console.log("Live search for: " + searchString);
                var searchField = $('#overlay-search');
                var searchResults = $('.search-results');    
                clearTimeout($.data(this, 'timer'));
                searchResults.fadeOut("fast");
                var wait = setTimeout(function() {
                    searchResults.find('.result-name').each(function() {
                        if (searchField.val().length != 0) {
                            $(this).html(searchField.val());
                            searchResults.fadeIn("fast");
                        }
                    });
                }, 500);
                $(this).data('timer', wait);
            }
        });

        // [ inicial ] > banner inicial
        $('.banner-principal').slick({
              dots: true,
                autoplay: true,
                autoplaySpeed: 4000, 
                infinite: true
             }      
        );         
        // [ inicial ] > Carroucel
        $('.carrocel-logos').slick({
                dots: true,
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 3,
                autoplaySpeed: 6000, 
                infinite: true
            });


    })