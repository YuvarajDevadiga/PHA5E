var overlays = document.querySelectorAll(".overlay");
var images = document.querySelectorAll(".img");
var svgDiv = document.querySelectorAll(".svg-div");
var heroDivText = document.querySelector(".hero-div-text");
var svgText = document.querySelector(".svg-text");
svgText.style.display = "none";

//initial animation for text and image
gsap.from(images, {
  opacity: 0,
  scale: 0,
  delay: 1,
  duration: 1.5,
  ease: "power1.out",
  stagger: true,
});

gsap.from("h1", {
  y: 100,
  delay: 1,
  duration: 1,
  ease: "power1.out",
  stagger: true,
});

overlays.forEach((overlay, indx) => {
  overlay.addEventListener("mouseenter", function (e) {
    images[indx].style.zIndex = "3";
    svgText.style.display = "block";

    // Get the position of the cursor relative to the image element being hovered over.
    const left = this.getBoundingClientRect().left;
    const top = this.getBoundingClientRect().top;
    const width = this.getBoundingClientRect().width / 2;
    const height = this.getBoundingClientRect().height / 2;

    // Display all SVG elements except the one being hovered over,
    // hiding the corresponding image elements and the heroDivText.
    svgDiv.forEach((svg, svgIndx) => {
      if (svgIndx !== indx) {
        svg.style.display = "block";
        images[svgIndx].style.display = "none";

        heroDivText.style.display = "none";
      }
    });

    // Event listener to handle the 'mousemove' event, causing the image and SVG element
    // to follow the cursor while maintaining a smooth lag effect. The target image and SVG
    // element will move a certain distance relative to the cursor position based on the offsets
    this.addEventListener("mousemove", function (e) {
      if (e.x < left + width) {
        if (e.y < top + height) {
          gsap.to(images[indx], {
            x: e.x - (left + width),
            y: e.y - (top + height),
            duration: 0.5,
            ease: "power1.out",
          });
          gsap.to(svgDiv[indx], {
            x: e.x - (left + width),
            y: e.y - (top + height),
            duration: 0.5,
            ease: "power1.out",
          });
        } else {
          gsap.to(images[indx], {
            x: e.x - (left + width),
            y: e.y - (top + height),
            duration: 0.5,
            ease: "power1.out",
          });
          gsap.to(svgDiv[indx], {
            x: e.x - (left + width),
            y: e.y - (top + height),
            duration: 0.5,
            ease: "power1.out",
          });
        }
      } else {
        if (e.y < top + height) {
          gsap.to(images[indx], {
            x: e.x - (left + width),
            y: e.y - (top + height),
            duration: 0.5,
            ease: "power1.out",
          });
          gsap.to(svgDiv[indx], {
            x: e.x - (left + width),
            y: e.y - (top + height),
            duration: 0.5,
            ease: "power1.out",
          });
        } else {
          gsap.to(svgDiv[indx], {
            x: e.x - (left + width),
            y: e.y - (top + height),
            duration: 0.5,
            ease: "power1.out",
          });
        }
      }
    });

    // Event listener to handle the 'mouseleave' event, resetting the image and SVG element
    // positions to their initial coordinates (0,0) when the cursor leaves the target area.
    this.addEventListener("mouseleave", function (e) {
      if (e.x < left + width) {
        if (e.y < top + height) {
          gsap.to(images[indx], {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
          });
          gsap.to(svgDiv[indx], {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
          });
        } else {
          gsap.to(images[indx], {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
          });
          gsap.to(svg[indx], {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
          });
        }
      } else {
        if (e.y < top + height) {
          gsap.to(images[indx], {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
          });
          gsap.to(svgDiv[indx], {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
          });
        } else {
          gsap.to(images[indx], {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
          });
          gsap.to(svgDiv[indx], {
            x: 0,
            y: 0,
            duration: 3,
            ease: "power1.out",
          });
        }
      }
    });

    // Event listener for 'mouseleave' on overlay:
    // Resets styles and displays original elements when the mouse leaves the overlay area.
    // Sets the z-index of the current image to "0", hides svgText, and iterates over svgDiv.
    // Shows all images and heroDivText while hiding all SVG elements except the one
    overlay.addEventListener("mouseleave", function (e) {
      images[indx].style.zIndex = "0";
      svgText.style.display = "none";
      svgDiv.forEach((svg, svgIndx) => {
        if (svgIndx !== indx) {
          svg.style.display = "none";
          images[svgIndx].style.display = "block";
          heroDivText.style.display = "block";
        }
      });
    });
  });
});
