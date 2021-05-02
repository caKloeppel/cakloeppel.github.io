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

  $( "a" ).click((ev) => {
    let section = ev.target.href.split("#")[1];
    showSection(section);
  });

  $( ".content" ).show();

  $(document).ready(function() {
    $("video").on("mouseover", function(event) {
      this.currentTime = 0;
      this.play();

    }).on('mouseout', function(event) {
      this.pause();
      this.currentTime = 0;
    });
  })
});

