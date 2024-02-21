
  // Choose-us Counter

document.addEventListener("DOMContentLoaded", function () {
    // Define the count values
    var countValues = [1000, 14, 300, 8]; // Add more values if needed

    // Loop through each count-item and initiate the animation
    countValues.forEach(function (value, index) {
      var countItem = document.getElementById("count-item-" + (index + 1));
      if (countItem) {
        animateCount(countItem, value);
      }
    });

    function animateCount(countItem, finalValue) {
      var countElement = countItem.querySelector(".count");
      var duration = 2000; // Duration of the animation in milliseconds
      var frameRate = 30; // Number of frames per second
      var increment = finalValue / (duration / 1000 * frameRate);

      var currentCount = 0;

      var interval = setInterval(function () {
        currentCount += increment;
        var formattedCount = Math.round(currentCount).toString().padStart(2, '0');
        countElement.textContent = formattedCount;

        if (currentCount >= finalValue) {
          clearInterval(interval);
          // countElement.textContent = finalValue;

          if(finalValue >=10){
              countElement.textContent = finalValue;

          }
          else{
              countElement.textContent = "0"+finalValue;

          }
        }
      }, 1000 / frameRate);
    }
  });




  // Home page banner

        let currentBanner = 1;
        const totalBanners = 3;
    
        function showNextBanner() {
            currentBanner = (currentBanner % totalBanners) + 1;
            updateBannerVisibility();
        }
    
        function showPrevBanner() {
            currentBanner = (currentBanner - 2 + totalBanners) % totalBanners + 1;
            updateBannerVisibility();
        }
    
        function updateBannerVisibility() {
            hideAllBanners();
            document.getElementById(`banner${currentBanner}`).style.display = "block";
    
            // Disable/Enable arrows based on the current banner
            document.getElementById('arrow-btn-left').disabled = currentBanner === 1;
            document.getElementById('arrow-btn-right').disabled = currentBanner === totalBanners;
        }
    
        function hideAllBanners() {
            for (let i = 1; i <= totalBanners; i++) {
                document.getElementById(`banner${i}`).style.display = "none";
            }
        }
    
        // Initial setup
        updateBannerVisibility();