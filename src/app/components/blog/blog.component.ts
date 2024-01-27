import { Component, OnInit } from '@angular/core';
import { customincrement } from '../../shared/store/counter.actions';
import { BlogModel } from '../../shared/store/Blog/Blog.model';
import { Store } from '@ngrx/store';
import { getBlogs } from '../../shared/store/Blog/Blog.selector';
import { AppStateModel } from '../../shared/store/Global/AppState.Model';
import { MatDialog } from '@angular/material/dialog';
import { AddblogComponent } from '../addblog/addblog.component';
import { updateblog,deleteblog } from '../../shared/store/Blog/Blog.actions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  constructor(private store: Store<AppStateModel>, private dialog: MatDialog) {}

  blogList$ = this.store.select(getBlogs);

  addBlog() {
    this.openPopUp(0, 'Add Blog');
  }

  openPopUp(id: any, title: any, isedit = false) {
    this.dialog.open(AddblogComponent, {
      width: '40%',
      data: {
        id: id,
        title: title,
        isedit: isedit,
      },
    });
  }

  editBlog(id: any) {
    console.log('id', id);

    this.openPopUp(id, 'Edit Blog', true);
  }

  deleteBlog(id:any){
    if(confirm('Do you want to delete the blog?')){
      this.store.dispatch(deleteblog({blodId:id}));
    }
  }
}