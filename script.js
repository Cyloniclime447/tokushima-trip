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
      currentPage
      * pageWidth,

    behavior: "auto"

  });


  updateIndicator();
}


function updateIndicator() {

  indicator.textContent =
    `${currentPage + 1} / ${pages.length}`;

}


/* スワイプ時のページ番号更新 */

book.addEventListener(
  "scroll",
  () => {

    const pageWidth =
      book.clientWidth;

    currentPage =
      Math.round(
        book.scrollLeft
        /
        pageWidth
      );

    updateIndicator();

  }
);
