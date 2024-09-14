export function day2Function() {
    return 'Output from Challenge 1 Day 2';
  }

  function Publication(title, author, pubDate) {
    var publicAPI = {
        print() {
            console.log(`
                Title: ${this.title}
                Author: ${this.author}
                ${this.pubDate}
                `)
        }
    }

    return publicAPI;
  }


  function Book(bookDetails) {
    var pub = Publication(bookDetails.title,
        bookDetails.author,
        bookDetails.pubDate)

    var publicAPI = {
        print() {
            console.log(`
                Publisher: ${this.publisher}
                ISBN: ${this.ISBN}
                `)
        }
    }

    return publicAPI
  }

  function Blog(title, author, pubDate, URL) {

    var pub = new Publication(title, author, pubDate)

    var publicAPI = {
        print() {

            pub.print()
            console.log(URL)
        }
    }

    return publicAPI;
  }
  