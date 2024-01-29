import { createReducer, on } from '@ngrx/store';
import { BlogState } from './Blog.state';
import {
  addBlogSuccess,
  addblog,
  deleteblog,
  deleteblogsuccess,
  loadBlog,
  loadBlogFailure,
  loadBlogSuccess,
  updateBlogSuccess,
  updateblog,
} from './Blog.actions';
import { BlogModel } from './Blog.model';

const _blogReducer = createReducer(
  BlogState,
  on(loadBlog, (state) => {
    return {
      ...state,
    };
  }),
  on(loadBlogSuccess, (state, action) => {
    return {
      ...state,
      bloglist: [...action.bloglist],
      errorMessage:''
    };
  }),
  on(loadBlogFailure, (state, action) => {
    return {
      ...state,
      bloglist:[],
      errorMessage: action.errorText,
    };
  }),
  // on(addblog, (state, action) => {
  //   const _blogs = { ...action.bloginput };
  //   _blogs.id = state.bloglist.length + 1;
  //   return {
  //     ...state,
  //     bloglist: [...state.bloglist, _blogs],
  //   };
  // }),
  on(addBlogSuccess, (state, action) => {
    const _blogs = { ...action.bloginput };
    return {
      ...state,
      bloglist: [...state.bloglist, _blogs],
    };
  }),
  on(updateBlogSuccess, (state, action) => {
    const _blog = { ...action.bloginput };
    const updatedBlog = state.bloglist.map((blog) => {
      return _blog.id === blog.id ? _blog : blog;
    });
    return {
      ...state,
      bloglist: updatedBlog,
    };
  }),
  on(deleteblogsuccess, (state, action) => {
    const updatedBlog = state.bloglist.filter((blog: BlogModel) => {
      return blog.id !== action.blodId;
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
