document.addEventListener("DOMContentLoaded", () => {
  var gallery = document.querySelector(".gallery");
  var masonry = new Masonry(gallery, {
    itemSelector: ".gallery-item",
    columnWidth: ".gallery-item",
    percentPosition: true,
    gutter: 43
  });
});

document.addEventListener("DOMContentLoaded", () => {
  var gallery = document.querySelector(".gallery");
  var expandButton = document.querySelector(".expand-button");
  var expandButtonContent = document.querySelector(".expand-button-content");

  gallery.style.maxHeight = "1475px";

  toggleGallery = () => {
    if (gallery.style.maxHeight === "1475px") {
      gallery.style.maxHeight = gallery.scrollHeight + "px";
      expandButtonContent.textContent = "Zwiń";

      expandButton.classList.add("expanded");
    } else {
      gallery.style.maxHeight = 1475 + "px";
      expandButtonContent.textContent = "Rozwiń";

      expandButton.classList.remove("expanded");
    }
  }

  if (expandButton) {
    expandButton.addEventListener("click", toggleGallery);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const popup = document.querySelector(".popup");
  const popupImage = document.querySelector(".popup-image");
  const closePopup = document.querySelector(".close-popup");
  const nextButton = document.querySelector(".next-button");
  const prevButton = document.querySelector(".prev-button");
  const thumbnailsContainer = document.querySelector(".thumbnails");

  let currentImageIndex = 0;

  galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      currentImageIndex = index;

      openPopupWithImage(currentImageIndex);
    });
  });

  openPopupWithImage = (index) => {
    popupImage.src = galleryItems[index].src;
    popup.style.display = "block";
  }

  navigateToNextImage = () => {
    currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
    openPopupWithImage(currentImageIndex);
  }

  navigateToPrevImage = () => {
    currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
    openPopupWithImage(currentImageIndex);
  }

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  nextButton.addEventListener("click", navigateToNextImage);
  prevButton.addEventListener("click", navigateToPrevImage);

  openPopupWithImage = (index) => {
    currentImageIndex = index;
    const image = new Image();
    image.src = galleryItems[index].src;

    image.onload = () => {
      popupImage.src = galleryItems[index].src;
      popup.style.display = "flex";

      updateThumbnailVisibility();
    };
  }

  generateThumbnails = () => {
    const thumbnailsContainer = document.querySelector(".thumbnails");

    galleryItems.forEach((item, index) => {
      const thumbnail = document.createElement("div");

      thumbnail.classList.add("thumbnail");
      thumbnail.innerHTML = `<img src="${item.src}" alt="Thumbnail ${index}">`;

      thumbnail.addEventListener("click", () => {
        openPopupWithImage(index);
      });
      thumbnailsContainer.appendChild(thumbnail);
    });
  }

  updateThumbnailVisibility = () => {
    thumbnails = thumbnailsContainer.querySelectorAll(".thumbnail");

    thumbnails.forEach((thumbnail, index) => {
      if (index === currentImageIndex) {
        thumbnail.classList.add("selected-thumbnail");
      } else {
        thumbnail.classList.remove("selected-thumbnail");
      }
    });
  }

  generateThumbnails();
});

document.addEventListener("DOMContentLoaded", () => {
  const offerItem = document.getElementById('offer');
  const mobileOfferItem = document.getElementById('mobile-offer');
  const submenu = offerItem.querySelector('.submenu');
  const mobileSubmenu = document.getElementById('mobile-submenu');

  offerItem.addEventListener('click', () => {
    offerItem.classList.toggle('active');
    
    if (offerItem.classList.contains('active')) {
      const offerItemHeight = offerItem.clientHeight;
      submenu.style.top = `${offerItemHeight}px`;
    }
  });

  mobileOfferItem.addEventListener('click', () => {
    mobileOfferItem.classList.toggle('active');
    
    if (mobileOfferItem.classList.contains('active')) {
      const mobileOfferItemHeight = mobileOfferItem.clientHeight;
      mobileSubmenu.style.top = `${mobileOfferItemHeight}px`;
    }
  });

  window.addEventListener('click', (event) => {
    if (offerItem.classList.contains('active') && !offerItem.contains(event.target)) {
      offerItem.classList.remove('active');
    }

    if (mobileOfferItem.classList.contains('active') && !mobileOfferItem.contains(event.target)) {
      mobileOfferItem.classList.remove('active');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById('mobile-menu');

  const checkNavbarSize = () => {
    const screenWidth = window.innerWidth;

    if (mobileMenu && mobileMenu.classList.contains('show') && screenWidth > 767.98) {
      mobileMenu.classList.remove('show');
    }
  };

  window.addEventListener('resize', checkNavbarSize);
});

document.addEventListener("DOMContentLoaded", () => {
  let searchIcon = document.getElementById('search-icon');
  let mobileSearchIcon = document.getElementById('mobile-search-icon');
  let searchInput = document.getElementById('search-input');
  let mobileSearchInput = document.getElementById('mobile-search-input');

  const handleInputClick = (event) => {
    event.stopPropagation();
  };

  const toggleSearchActive = () => {
    searchIcon.classList.toggle('active');

    if (searchIcon.classList.contains('active')) {
      searchInput.focus();
    } else {
      searchInput.blur();
    }
  };
  
  const toggleMobileSearchActive = () => {
    mobileSearchIcon.classList.toggle('active');

    if (mobileSearchIcon.classList.contains('active')) {
      mobileSearchInput.focus();
    } else {
      mobileSearchInput.blur();
    }
  };

  const resetSearch = () => {
    searchInput.value = '';
    mobileSearchInput.value = '';
  };

  mobileSearchInput.addEventListener('click', handleInputClick);
  searchInput.addEventListener('click', handleInputClick);

  searchIcon.addEventListener('click', (event) => {
    if (!searchIcon.contains(event.target)) {
      searchIcon.classList.remove('active');
      resetSearch();
    } else {
      toggleSearchActive();
    }
  });

  mobileSearchIcon.addEventListener('click', (event) => {
    if (!mobileSearchIcon.contains(event.target)) {
      mobileSearchIcon.classList.remove('active');
      resetSearch();
    } else {
      toggleMobileSearchActive();
    }
  });

  window.addEventListener('click', (event) => {
    if (!searchIcon.contains(event.target) && !searchInput.contains(event.target)) {
      searchIcon.classList.remove('active');
      resetSearch();
    }

    if (!mobileSearchIcon.contains(event.target) && !mobileSearchIcon.contains(event.target)) {
      mobileSearchIcon.classList.remove('active');
      resetSearch();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const aboutUsImageWrapper = document.querySelector(".about-us-image-wrapper");
  const gardenImagesWrapper = document.querySelectorAll(".garden-image-wrapper");

  handleAboutUsScrollAnimation = () => {
    const boundingRect = aboutUsImageWrapper.getBoundingClientRect();

    if (boundingRect.top <= window.innerHeight && boundingRect.bottom >= 0) {
      aboutUsImageWrapper.style.animation = "slideInLeft 1s ease-out";
    } else {
      aboutUsImageWrapper.style.animation = "none";
    }
  }

  handleGardenScrollAnimation = () => {
    const boundingRect = gardenImagesWrapper[0].getBoundingClientRect();

    if (boundingRect.top <= window.innerHeight && boundingRect.bottom >= 0) {
      gardenImagesWrapper.forEach((gardenImageWrapper) => {
        gardenImageWrapper.style.animation = "slideInRight 1s ease-out";
      });
    } else {
      gardenImagesWrapper.forEach((gardenImageWrapper) => {
        gardenImageWrapper.style.animation = "none";
      });
    }
  }

  window.addEventListener("scroll", handleGardenScrollAnimation);
  window.addEventListener("scroll", handleAboutUsScrollAnimation);
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const offerItems = document.querySelectorAll(".info-box");

  offerItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        offerItems.forEach((otherItem) => {
          otherItem.classList.remove("active");
        });

        item.classList.add("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sliderContainers = document.querySelectorAll('.slider-container');
  
  sliderContainers.forEach(sliderContainer => {
    const sliderButtons = sliderContainer.querySelectorAll('.slider-button');
    const slides = sliderContainer.querySelectorAll('.garden-container');
    let currentSlide = 0;
  
    showSlide = (slideIndex) => {
      slides.forEach((slide, index) => {
        if (index === slideIndex) {
          sliderContainer.style.height = slide.offsetHeight + 'px';
          slide.style.display = 'flex';
  
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    }
  
    sliderButtons.forEach((button, index) => {
      if (index % 2 === 0) {
        button.addEventListener('click', () => {
          currentSlide = (currentSlide + 1) % slides.length;

          showSlide(currentSlide);
        });
      } else {
        button.addEventListener('click', () => {
          currentSlide = (currentSlide - 1 + slides.length) % slides.length;

          showSlide(currentSlide);
        });
      }
    });
  
    showSlide(currentSlide);

    window.addEventListener('resize', () => {
      showSlide(currentSlide);
    });
  });
});
