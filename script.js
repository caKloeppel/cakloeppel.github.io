function showSection(section) {
  if (!section) section = "home";
  let sections = [
    "home",
    "animation",
    "sketches",
    "digital",
    "paintings",
    "photography"
  ];
  for (let s_name of sections) {
    let s = "#content-" + s_name;
    if (s_name === section)
      $( s ).show();
    else
      $( s ).hide();
  }
}

function updateSection() {
  let anchor = this.window.location.hash.substr(1);
  showSection(anchor);
}

$( document ).ready(() => {
  updateSection();

  $( ".link-section" ).click((ev) => {
    let section = ev.target.href.split("#")[1];
    showSection(section);
  });
  $( ".link-next" ).click((ev) => {
    let section = ev.target.href.split("#")[1];
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });

    showSection(section);
  });


  $( ".content" ).show();

  

  $("video").on("mousemove", function(ev) {
    let pos =
      (ev.clientX - this.offsetLeft) / this.clientWidth;
    pos = Math.round(pos * 100) / 100;
    pos = 1 - pos;
    this.currentTime = this.duration * pos;
  });
});

