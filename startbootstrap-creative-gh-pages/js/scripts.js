window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
    
    //Toastr
    $(document).ready(function(){
        $("#toastrbutton").click(function(){
            toastr.success('Thanks for enjoying our company!');
        });
    });

    //Content toggle
    $(document).ready(function(){
        $(".toggle-btn").click(function(){
            var targetId = $(this).attr('data-target');
            $("#" + targetId).toggle();
        });
        $("#tg1").hide();
    });

    //REST API
    $(document).ready(function() {
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            // Populate the dropdown menu with the list of countries
            const countryDropdown = document.getElementById('country');
            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name.common;
                option.text = country.name.common;
                countryDropdown.appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching countries:', error));
    });
    
});