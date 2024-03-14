document.addEventListener("DOMContentLoaded", function () {
  const block = document.querySelector(".containers .box .title .block");
  const title = document.querySelector(".containers .box .title h1");
  const blockDelay = 5000; // 5 seconds in milliseconds
  const titleDelay = 6600; // 7.6 seconds in milliseconds

  // Function to reset animations
  function resetAnimations() {
    block.style.animation = "none"; // Remove the current block animation
    title.style.animation = "none"; // Remove the current title animation

    void block.offsetWidth; // Trigger reflow
    void title.offsetWidth; // Trigger reflow

    block.style.animation =
      "mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards"; // Reapply the block animation
    title.style.animation = "mainFadeIn 2s forwards"; // Reapply the title animation
    title.style.animationDelay = "1s"; // Reapply the title animation
  }

  // Set interval to reset animations
  setInterval(resetAnimations, Math.max(blockDelay, titleDelay));

  // Initial reset to synchronize with specified delays
  setTimeout(resetAnimations, Math.max(blockDelay, titleDelay));
});

window.onload = function () {
  setTimeout(function () {
    var images1 = [
      "/assets/home/slider3/1.2.png",
      "/assets/home/slider3/1.3.png",
      "/assets/home/slider3/1.1.png",
      // '/assets/home/slider3/1.4.png',
      // '/assets/home/slider3/1.5.png',
    ];
    var index1 = 0;
    setInterval(function () {
      document.getElementById("mainImage1").style.animationName =
        "slideInRight";
      document.getElementById("mainImage1").style.animationDelay = "0s";
      document.getElementById("mainImage1").style.animationDirection = "normal";
      setTimeout(function () {
        document.getElementById("mainImage1").src = images1[index1];
      }, 250);
      index1 = (index1 + 1) % images1.length;
    }, 5000);

    var images2 = [
      "/assets/home/slider3/2.2.png",
      "/assets/home/slider3/2.3.png",
      "/assets/home/slider3/2.1.png",
      // '/assets/home/slider3/2.4.png',
      // '/assets/home/slider3/2.5.png',
    ];
    var index2 = 0;
    setInterval(function () {
      document.getElementById("mainImage2").style.animationName =
        "slideInRight";
      document.getElementById("mainImage2").style.animationDelay = "0s";
      document.getElementById("mainImage2").style.animationDirection = "normal";
      setTimeout(function () {
        document.getElementById("mainImage2").src = images2[index2];
      }, 250);
      index2 = (index2 + 1) % images2.length;
    }, 5000);

    var images3 = [
      "/assets/home/slider3/3.3.png",
      // '/assets/home/slider3/3.4.png',
      // '/assets/home/slider3/3.5.png',
      "/assets/home/slider3/3.1.png",
      "/assets/home/slider3/3.2.png",
    ];
    var index3 = 0;
    setInterval(function () {
      document.getElementById("mainImage3").style.animationName =
        "slideInRight";
      document.getElementById("mainImage3").style.animationDelay = "0s";
      document.getElementById("mainImage3").style.animationDirection = "normal";
      setTimeout(function () {
        document.getElementById("mainImage3").src = images3[index3];
      }, 250);
      index3 = (index3 + 1) % images3.length;
    }, 5000);
  }, 1000); // Show other images after 1 second
};

document.getElementById("downloadBtn").addEventListener("click", function () {
  // Redirect the browser to the download route
  window.location.href = "/download";
});

function downloadAfterDelay() {
  // Show modal (if needed)
  my_modal_3.showModal();

  // Wait for 3 seconds before initiating download
  setTimeout(function () {
    // Create an anchor element
    var downloadLink = document.createElement("a");
    downloadLink.href = "/download"; // URL to your download route
    downloadLink.download = "your_app.apk"; // Specify the filename

    // Append the anchor element to the document body
    document.body.appendChild(downloadLink);

    // Trigger the click event on the anchor element
    downloadLink.click();

    // Clean up
    document.body.removeChild(downloadLink);
  }, 3000); // 3000 milliseconds = 3 seconds
}
