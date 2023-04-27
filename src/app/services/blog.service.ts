import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: string[];

  constructor() {
    this.blogs = ['Blog 1', 'Blog 2', 'Blog 3'];
  }

  getBlogs() {
    return this.blogs;
  }
}
