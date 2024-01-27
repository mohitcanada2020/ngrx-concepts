import { createReducer, on } from '@ngrx/store';
import { BlogState } from './Blog.state';
import { addblog, deleteblog, loadBlog, updateblog } from './Blog.actions';
import { BlogModel } from './Blog.model';

const _blogReducer = createReducer(
  BlogState,
  on(loadBlog, (state) => {
    return {
      ...state,
    };
  }),
  on(addblog, (state, action) => {
    const _blogs = { ...action.bloginput };
    _blogs.id = state.bloglist.length + 1;
    return {
      ...state,
      bloglist: [...state.bloglist, _blogs],
    };
  }),
  on(updateblog, (state, action) => {
    const _blog = { ...action.bloginput };
    const updatedBlog = state.bloglist.map((blog) => {
      return _blog.id === blog.id ? _blog : blog;
    });

    console.log(updatedBlog);
    return {
      ...state,
      bloglist: updatedBlog,
    };
  }),
  on(deleteblog, (state, action) => {
    const updatedBlog = state.bloglist.filter((blog:BlogModel) => {
      return (blog.id !== action.blodId);
    });

    return {
      ...state,
      bloglist: updatedBlog,
    };
  })
);

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
