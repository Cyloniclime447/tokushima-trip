const pageFlip = new St.PageFlip(
  document.getElementById("book"),
  {
    width: 390,
    height: 700,

    size: "stretch",

    minWidth: 300,
    maxWidth: 500,

    minHeight: 500,
    maxHeight: 900,

    showCover: true,

    mobileScrollSupport: false,

    usePortrait: true,

    maxShadowOpacity: 0.3
  }
);


pageFlip.loadFromHTML(
  document.querySelectorAll(".page")
);
