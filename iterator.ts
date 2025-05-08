// 迭代器接口
interface CustomIterator<T> {
  hasNext(): boolean;
  next(): T;
}

// 集合接口
interface Collection<T> {
  createIterator(): CustomIterator<T>;
}

// 具体集合类
class BookCollection implements Collection<Book> {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  createIterator(): CustomIterator<Book> {
    return new BookIterator(this.books);
  }
}

// 具体迭代器类
class BookIterator implements CustomIterator<Book> {
  private position: number = 0;
  private books: Book[];

  constructor(books: Book[]) {
    this.books = books;
  }

  hasNext(): boolean {
    return this.position < this.books.length;
  }

  next(): Book {
    if (this.hasNext()) {
      return this.books[this.position++];
    }
    throw new Error("No more books to iterate");
  }
}

// 图书类
class Book {
  private title: string;
  private author: string;

  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }
}

// 使用示例
function main() {
  // 创建图书集合
  const bookCollection = new BookCollection();

  // 添加图书
  bookCollection.addBook(new Book("设计模式", "Erich Gamma"));
  bookCollection.addBook(new Book("算法导论", "Thomas H. Cormen"));
  bookCollection.addBook(new Book("深入理解计算机系统", "Randal E. Bryant"));

  // 创建迭代器
  const iterator = bookCollection.createIterator();

  // 遍历图书集合
  console.log("图书列表：");
  while (iterator.hasNext()) {
    const book = iterator.next();
    console.log(`书名：${book.getTitle()}，作者：${book.getAuthor()}`);
  }
}

// 运行示例
main();
