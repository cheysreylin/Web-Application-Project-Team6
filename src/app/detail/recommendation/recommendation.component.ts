import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Books } from 'src/app/books';

@Component({
  selector: 'lw-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit{
  @Input() books: Books[] = [];
  @Output() selectedBook = new EventEmitter<Books>();
  selectBook(book: Books){
    this.selectedBook.emit(book);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  constructor(){}
  ngOnInit(): void {

  }
  
}
