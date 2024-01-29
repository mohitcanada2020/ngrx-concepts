import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterService } from '../../master.service';
import {
  ADD_BLOG,
  LOAD_BLOG,
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
import { EMPTY, catchError, exhaustMap, map, of } from 'rxjs';
import { BlogModel } from './Blog.model';

@Injectable()
export class BlogEffects {
  constructor(private actions$: Actions, private service: MasterService) {}

  _blog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LOAD_BLOG),
      exhaustMap((action) => {
        return this.service.getAllBlogs().pipe(
          map((data) => {
            return loadBlogSuccess({ bloglist: data });
          }),
          catchError((error) =>
            of(loadBlogFailure({ errorText: 'API Failure' }))
          )
        );
      })
    )
  );

  _addblog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addblog),
      exhaustMap((action) => {
        return this.service.createBlogs(action.bloginput).pipe(
          map((data) => {
            return addBlogSuccess({ bloginput: data as BlogModel });
          }),
          catchError((error) =>
            of(loadBlogFailure({ errorText: 'API Failure' }))
          )
        );
      })
    )
  );

  _updateblog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateblog),
      exhaustMap((action) => {
        return this.service.updateBlogs(action.bloginput).pipe(
          map(() => {
            return updateBlogSuccess({ bloginput: action.bloginput });
          }),
          catchError((error) =>
            of(loadBlogFailure({ errorText: 'API Failure' }))
          )
        );
      })
    )
  );

  _deleteblog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteblog),
      exhaustMap((action) => {
        return this.service.deleteBlog(action.blodId).pipe(
          map(() => {
            return deleteblogsuccess({ blodId: action.blodId });
          }),
          catchError((error) =>
            of(loadBlogFailure({ errorText: 'API Failure' }))
          )
        );
      })
    )
  );
}
