import { createAction, props } from '@ngrx/store';
import { BlogModel } from './Blog.model';

export const loadBlog = createAction('loadblog');

export const addblog = createAction(
  'addblog',
  props<{ bloginput: BlogModel }>()
);

export const updateblog = createAction(
  'updateblog',
  props<{ bloginput: BlogModel }>()
);

export const deleteblog = createAction(
  'deleteblog',
  props<{ blodId: number }>()
);
