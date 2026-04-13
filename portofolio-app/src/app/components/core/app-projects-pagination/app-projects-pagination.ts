import {Component, computed, input, output} from '@angular/core';

@Component({
  selector: 'app-projects-pagination',
  imports: [],
  templateUrl: './app-projects-pagination.html',
  styleUrl: './app-projects-pagination.scss',
})
export class AppProjectsPagination {
  offset = input<number>(0);
  limit = input<number>(2);
  total = input<number>(3);
  updateLastIdEvent = output<number>();

  currentPage = computed(() => Math.floor(this.offset() / this.limit()) + 1);
  totalPages = computed(() => Math.ceil(this.total() / this.limit()));

  isFirstPage = computed(() => this.offset() <= 0);
  isLastPage = computed(() => this.offset() + this.limit() >= this.total());

  previous() {
    if (this.isFirstPage()) return;

    const newOffset = this.offset() - this.limit();

    if (newOffset < 0) this.updateLastIdEvent.emit(0);

    this.updateLastIdEvent.emit(newOffset);
  }

  next() {
    if (this.isLastPage()) return;

    const newOffset = this.offset() + this.limit();

    this.updateLastIdEvent.emit(newOffset);

  }
}
