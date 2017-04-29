import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { CrisisService } from '../../crisis-center/crisis-service';
import { Crisis } from '../../crisis-center/crisis-service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  crises: Observable<Crisis[]>;
  selectedId: number;

  constructor(
    private service : CrisisService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit() {
    this.crises = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id'];
        return this.service.getCrisis();
      });
  }

  onSelect(crisis : Crisis){
    this.selectedId = crisis.id;
    this.router.navigate([crisis.id], { relativeTo: this.route });
  }

  isSelected(crisis: Crisis) {
    return crisis.id === this.selectedId;
  }

}
