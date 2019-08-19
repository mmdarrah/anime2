// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: function(el, i) {
      return 34 * (i+1)
    }
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  // 

  var Timeline = anime.timeline({
    autoplay:true,
    loop:true
  });
  
  Timeline
    .add({
      targets:".red",
      translateX:{value:200, duration:1000, easing:"easeInOutQuad"}
    })
    .add({
      targets:".red",
      translateX:{value:200, duration:1000, easing:"easeInOutQuad"},
      translateY:{value:200, duration:1000, easing:"easeInOutQuad"}
    })
    .add({
      targets:".red",
      width:{value:200, duration:1000, easing:"easeInOutQuad"},
    })
    .add({
      targets:".red",
      height:{value:200, duration:1000, easing:"easeInOutQuad"}
    })
    .add({
      targets:".blue",
      opacity:{value:1, duration:1000, easing:"easeInOutQuad"}
    })
    .add({
      targets:".blue",
      translateX:{value:300, duration:1000, easing:"easeInOutQuad"}
    })
    .add({
      targets:".green",
      opacity:{value:1, duration:1000, easing:"easeInOutQuad"}
    })
    .add({
      targets:".green",
      translateX:{value:300, duration:1000, easing:"easeInOutQuad"}
    })
  .add({
      targets:".yellow",
      opacity:{value:1, duration:1000, easing:"easeInOutQuad"}
    })
    .add({
      targets:".yellow",
      translateX:{value:300, duration:1000, easing:"easeInOutQuad"}
    })
    .add({
      targets:".red",
      translateX:{value:200, duration:1000, easing:"easeInOutQuad"},
      translateY:{value:500, duration:1000, easing:"easeInOutQuad"}
    })
    .add({
      targets:".blue",
      translateX:{value:300, duration:1000, easing:"easeInOutQuad"},
      translateY:{value:300, duration:1000, easing:"easeInOutQuad"}
    })
    .add({
      targets:".blue",
      translateX:{value:900, duration:1000, easing:"easeInOutQuad"},
      translateY:{value:300, duration:1000, easing:"easeInOutQuad"}
    })
    .add({
      targets:".red",
      translateX:{value:800, duration:1000, easing:"easeInOutQuad"},
      translateY:{value:500, duration:1000, easing:"easeInOutQuad"}
    })
    .add({
      targets:".red, .blue, .green, .yellow",
      opacity:{value:0, duration:1000, easing:"easeInOutQuad"}
    });