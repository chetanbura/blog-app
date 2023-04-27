import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent {
  selectedBlog: string | undefined;
  blogs: string[];

  constructor(service: BlogService) {
    this.blogs = service.getBlogs();
  }

  blogHandler(blog: string) {
    this.selectedBlog = blog;
  }
}
