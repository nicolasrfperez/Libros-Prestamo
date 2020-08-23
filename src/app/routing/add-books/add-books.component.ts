import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../service/books.service';
import { GenderService } from '../../service/gender.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
 
  // @Output () hayUnNuevoLibro = new EventEmitter();

 name:any;
 author:any; 
 lended:any;
 genders:any;

constructor (private genderService: GenderService) { }

  ngOnInit(): void {
    
    this.genders =this.genderService.listaGeneros();
    console.log("generos" , this.genders);
  }
  async guardar (){
   
    var book = {
      name: this.name,
      genders: this.genders,
      author: this.author,
      lended: this.lended
    }

    var respuesta: any ;
   // respuesta = await this.BooksService.guardar(book);
    //this.hayUnNuevoLibro.emit();
    
  
  }

}

