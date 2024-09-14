export function day1Function() {
    //return 'Output from Challenge 1 Day 1';
    console.log(true)
    ABC.print()
   
   return  Times.print();;
  }
  
  //class components in JavaScript

  class Page {
    constructor(text) {
        this.text = text;

    }

    print() {
       console.log(this.text) 
    }
  }

  class Notebook {
    constructor() {
        this.pages = []
    }

    addPage(text) {
        var page = new Page(text);
        this.pages.push(page);
    }

    print() {
        for(let page of this.pages) {
            page.print();
        }
    }
  }

  var mathNotes = new Notebook();
  mathNotes.addPage("Arithmetic");
  mathNotes.addPage("Trignometry")

  //Inheritence and Polymorphisn

  class Publication {
    constructor(title, author, pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }

    print() {
        console.log(`
            Title: ${this.title}
            Author: ${this.author}
            ${this.pubDate}
            `)
    }
  }

  class Book extends Publication {

    constructor(bookDetails) {
        super(
            bookDetails.title,
            bookDetails.author,
            bookDetails.pubDate

        )
        this.publisher = bookDetails.publisher;
        this.ISBN = bookDetails.ISBN;
    }

    print() {
        super.print();
        console.log(`
            Publisher: ${this.publisher}
            ISBN: ${this.ISBN}
            `)
    }
  }

  class BlogPost extends Publication {
    constructor(title, author, pubDate) {
        super(title, author, pubDate)
            this.URL = URL  
    }
    print() {
        super.print()
        console.log(this.URL)
    }
  }

  var Times = new BlogPost('Times', 'SV', '09/14/2024', 'https://google.com')
  Times.print();
  var ABC = new Book({
    title: 'ABC',
    author: 'SV',
    pubDate: '09/14/2024',
    publisher: 'SV',
    ISBN: '1234567'
  })


  