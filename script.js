const book =
  document.getElementById("book");

const pages =
  document.querySelectorAll(".page");

const indicator =
  document.getElementById("pageIndicator");

let currentPage = 0;


function movePage(direction) {

  currentPage += direction;

  currentPage =
    Math.max(
      0,
      Math.min(
        currentPage,
        pages.length - 1
      )
    );

  const pageWidth =
    book.clientWidth;

  book.scrollTo({
    left:
      currentPage * pageWidth,

    behavior: "auto"
  });

  updateIndicator();
}


function updateIndicator() {

  indicator.textContent =
    `${currentPage + 1} / ${pages.length}`;
}


book.addEventListener(
  "scroll",
  () => {

    const pageWidth =
      book.clientWidth;

    currentPage =
      Math.round(
        book.scrollLeft /
        pageWidth
      );

    updateIndicator();

  }
);


window.addEventListener(
  "resize",
  () => {

    book.scrollTo({
      left:
        currentPage *
        book.clientWidth,

      behavior: "auto"
    });

  }
);


updateIndicator();
