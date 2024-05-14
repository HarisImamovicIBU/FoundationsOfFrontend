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

    //Theme switcher
    document.getElementById("themeSwitcher").addEventListener("click", function(){
        const body=document.body;
        body.classList.toggle("dark-theme");
    })

    //Data driven content

    $(document).ready(function() {
        $.ajax({
            url: 'data.json',
            dataType: 'json',
            success: function(data) {
                $('#jsonheading').text(data.jsonheading);
            }
        });
        $('button:contains("Write")').click(function() {
            var newText = prompt('Enter new text:');
            if (newText !== null) {
                $('#jsonheading').text(newText);
                updateJson('jsonheading', newText);
            }
        });
        $('button:contains("Delete")').click(function() {
            if (confirm('Are you sure you want to delete?')) {
                $('#jsonheading').text('');
                //Update JSON file with empty text
                updateJson('jsonheading', '');
            }
        });
    
        function updateJson(key, value) {
            $.ajax({
                url: 'data.json',
                dataType: 'json',
                success: function(data) {
                    //Update the JSON object with new value
                    data[key] = value;
                    //Write object back to the file
                    $.ajax({
                        url: 'data.json',
                        type: 'POST',
                        contentType: 'application/json',
                        data: JSON.stringify(data),
                        success: function(response) {
                            console.log('JSON file updated successfully.');
                        },
                        error: function(xhr, status, error) {
                            console.error('Error updating JSON file:', error);
                        }
                    });
                }
            });
        }
    }); 
});