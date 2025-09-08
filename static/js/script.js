document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. FILTERING LOGIC (No changes here) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });

    // --- 2. NEW: MODAL (LIGHTBOX) LOGIC ---
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeModal = document.querySelector(".close-modal");
    const portfolioLinks = document.querySelectorAll('.portfolio-item a');

    // Loop through all portfolio links and add click event
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Stop the link from opening a new page
            modal.style.display = "block";
            modalImg.src = this.href;
        });
    });

    // When the user clicks on <span> (x), close the modal
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the image, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});