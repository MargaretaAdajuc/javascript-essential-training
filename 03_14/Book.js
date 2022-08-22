class Book {
  constructor(
    title,
    author,
    publisher,
    year,
    numberOfPages,
    readBook,
    beginDate
  ) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.year = year;
    this.numberOfPages = numberOfPages;
    this.readBook = readBook;
    this.beginDate = beginDate;
  }
  isBookRead(readStatus) {
    this.readBook = readStatus;
  }
  bookReadingTime() {
    let now = new Date();
    let beginReading = new Date(this.beginDate);
    let elapsed = now - beginReading;
    let daysSinceBeginReading = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceBeginReading;
  }
}

export default Book;
