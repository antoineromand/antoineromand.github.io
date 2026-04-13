import {Component, OnInit, output, signal} from '@angular/core';

@Component({
  selector: 'app-projects-filter',
  imports: [],
  templateUrl: './app-projects-filter.html',
  styleUrl: './app-projects-filter.scss',
})
export class AppProjectsFilter implements OnInit {
  query = signal<string>("");
  orderById = signal<string>("ASC");

  filterOutputEvent = output<{ query: string, orderById: string }>()

  reloadFilter() {
    this.filterOutputEvent.emit({query: this.query(), orderById: this.orderById()});
  }

  selectOrderById(event: Event) {
    this.orderById.set((event.target as HTMLInputElement).value);
    this.reloadFilter();
  }

  updateQuery(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
    this.reloadFilter();
  }

  ngOnInit() {
    this.reloadFilter();
  }
}
