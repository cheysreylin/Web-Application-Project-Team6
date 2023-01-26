import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Books, Review } from '../books';

@Component({
  selector: 'lw-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  @Input() books: Books[] = [];
  changedImg = new EventEmitter<Books["bookcover"]>();
  
  reviews: Review[] = []
  // books: Books[] = []
  selectedBook! : Books;
  bookImage!: string;
  constructor( ){}
  ngOnInit(): void {
    this.books = [
      {
        id:1,
        title: "Tomb Travelers: A Forged From Fantasy Book",
        bookcover: {img1: "https://images-na.ssl-images-amazon.com/images/I/51nOYg8ZbCL._SX331_BO1,204,203,200_.jpg", img2: "https://m.media-amazon.com/images/I/51YGnsnSSxL._AC_SY580_.jpg"},
        description: "When Delie the Grand Wizard sends out the call to arms, many looking for riches answer the call. There is an evil growing that needs to be vanquished but only skilled adventurers can get the job done. Tomb Travelers is an out of this world tale of adventure filled with magic and wonder. Follow along as our heroes discover their original task is just the beginning...",
        genre: "Fantasy",
        author: "Christopher Brandt",
        authorP: "https://m.media-amazon.com/images/I/81UQAQeDntL._SY600_.jpg",
        critic: 4.3,
        cost: 5.47,
        tax: 0.6,
        price: 6.07,
        numberOfReview: 2,
        sale: 177,
        availibilty: true,
        proDetail: {
          printlength:187,
          language: "English",
          publisher:"Independently Published (20 May 2020)",
          pubDate: new Date('19-May-2020'),
          dimension: "6 x 0.47 x 9 inches",
          itemW:99,
      }
      },
      {
        id:2,
        title: "The Book of God",
        bookcover: {img1: "https://images-na.ssl-images-amazon.com/images/I/51Ex6Plv-kL._SX333_BO1,204,203,200_.jpg", img2: "https://www.publishersweekly.com/cover/9780310200055"},
        description: "“. . . a feat of imagination and faith.” —Philip Yancey, award-winning author. The Book of God reads like a novel, dramatizing the sweep of biblical events, bringing to life the men and women of this ancient book in vivid detail and dialogue. From Abraham wandering in the desert to Jesus teaching the multitudes on a Judean hillside,..",
        genre: "Novel",
        author: "Walter Wangerin",
        authorP: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlLJGJqNWymW8YWnKZAFI7S2JJ7VJ_UIeNW9p5EWlX1vFOsFPh",
        critic: 4.3,
        cost: 15.68,
        tax: 1.2,
        price: 16.88,
        numberOfReview: 6,
        sale: 190,
        availibilty: true,
      },
    ]
    this.reviews = [{
      username: "Emma Hildton",
      userP: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'",
      review: ["The story plot is really thilling and i love how there are challenges for the main character to overcome."],
    },
    {
      username: "Jake Morinilla",
      userP: "https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Blank&hatColor=Blue03&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=DarkBrown",
      review: ["The story plot is really thilling and i love how there are challenges for the main character to overcome."],
    },
  ]
  }
  selectBook(book: Books){
    this.selectedBook = book; 
    this.bookImage = this.selectedBook.bookcover.img1;   
  }
  changeImg(img: string){
    // this.changedImg.emit(img);
    this.bookImage = img;
  }

}
