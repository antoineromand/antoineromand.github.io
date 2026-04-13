import {Injectable} from '@angular/core';
import data from "../../projects.json";

export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  img: string;
  tags: string[];
  year: number;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private parseQuery(search: string): string[] {
    return search
      .toLowerCase()
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);
  }

  private sortById(data: Project[], order = "ASC") {
    return [...data].sort((a, b) => {
      return order === "ASC"
        ? a.id - b.id
        : b.id - a.id;
    });
  }

  getFilteredProjects(filters: { query: string, orderById: string }): Project[] {
    let result: Project[] = [...data.projects];

    if (filters?.query && filters.query.length > 1) {
      const queries = this.parseQuery(filters.query);

      if (queries.length === 0) return [];

      result = result.filter(project =>
        project.tags.some(tag =>
          queries.some(q => tag.toLowerCase().includes(q))
        )
      );
    }

    return this.sortById(result, filters.orderById);
  }

  getProjects(
    filters: { query: string, orderById: string },
    pagination: { start: number, end: number }
  ): Project[] {
    return this.getFilteredProjects(filters).slice(pagination.start, pagination.end);
  }
}
