import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BlogModel, Blogs } from './Blog.model';

export const getblogState = createFeatureSelector<Blogs>('blog');

export const getBlogs = createSelector(getblogState, (state) => {
  return state.bloglist;
});

export const getBlogById = (blogId: number) =>
  createSelector(getblogState, (state) => {
    return state.bloglist.find((blog: BlogModel) => blog.id === blogId) as BlogModel;
});
