import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IJoke } from '../../models/joke';
import { JokesService } from '../../services/jokes.service';
import { Store, select } from '@ngrx/store';
import  IStoreState ,{Actions,Selectors} from '../../jokes-store'

@Component({
  selector: 'app-jokes-component',
  templateUrl: './jokes-component.component.html',
  styleUrls: ['./jokes-component.component.scss']
})
export class JokesComponentComponent implements OnInit {
  jokes:IJoke[]
  numJokes:string="4"

  constructor(
    private jokesService: JokesService,
    private jokeStore: Store<IStoreState>
  ) { }

  ngOnInit() {
    this.getJokes()
    this.jokeStore.pipe(select(Selectors.selectJokes)).subscribe(jokes=>this.jokes=jokes)
    
  }
  
  getJokes(){
    this.jokeStore.dispatch(Actions.loadJokes({numberJokes:Number(this.numJokes)||2}))
    
    
  }

}
