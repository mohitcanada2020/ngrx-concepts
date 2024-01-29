import { createAction, props } from '@ngrx/store';
import { BlogModel } from './Blog.model';

export const LOAD_BLOG = '[blog page] load blog';
export const LOAD_BLOG_SUCCESS = '[blog page] load blog success';
export const LOAD_BLOG_FAILURE = '[blog page] load blog failure';
export const ADD_BLOG = '[blog page] add blog';
export const ADD_BLOG_SUCCESS = '[blog page] add blog success';
export const UPDATE_BLOG = '[blog page] update blog';
export const UPDATE_BLOG_SUCCESS = '[blog page] update blog success';
export const DELETE_BLOG = '[blog page] delete blog';
export const DELETE_BLOG_SUCCESS = '[blog page] delete blog success';

export const SHOW_SNACKBAR = '[Material UI] show snackbar';

export const loadBlog = createAction(LOAD_BLOG);

export const loadBlogSuccess = createAction(
  LOAD_BLOG_SUCCESS,
  props<{ bloglist: BlogModel[] }>()
);

export const loadBlogFailure = createAction(
  LOAD_BLOG_FAILURE,
  props<{ errorText: string }>()
);

export const addblog = createAction(
  ADD_BLOG,
  props<{ bloginput: BlogModel }>()
);

export const addBlogSuccess = createAction(
  ADD_BLOG_SUCCESS,
  props<{ bloginput: BlogModel }>()
);

export const updateblog = createAction(
  UPDATE_BLOG,
  props<{ bloginput: BlogModel }>()
);

export const updateBlogSuccess = createAction(
  UPDATE_BLOG_SUCCESS,
  props<{ bloginput: BlogModel }>()
);

export const deleteblog = createAction(
  DELETE_BLOG,
  props<{ blodId: number }>()
);

export const deleteblogsuccess = createAction(
  DELETE_BLOG_SUCCESS,
  props<{ blodId: number }>()
);
