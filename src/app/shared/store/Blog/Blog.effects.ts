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
import {
  EMPTY,
  catchError,
  concatMap,
  exhaustMap,
  map,
  mergeMap,
  of,
  switchMap,
} from 'rxjs';
import { BlogModel } from './Blog.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { emptyAction, showAlert } from '../Global/app.actions';

@Injectable()
export class BlogEffects {
  constructor(
    private actions$: Actions,
    private service: MasterService,
    private _snackbar: MatSnackBar
  ) {}

  _blog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBlog),
      switchMap((action) =>
        this.service.getAllBlogs().pipe(
          switchMap((data) =>
            of(
              loadBlogSuccess({ bloglist: data }),
              showAlert({ message: 'Blog loaded successfully' })
            )
          ),
          catchError((_error) => of(showAlert({ message: 'Loading blogs failed due to' + _error.message })))
        )
      )
    )
  );

  _addblog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addblog),
      switchMap((action) =>
        this.service.createBlogs(action.bloginput).pipe(
          switchMap((data) =>
            of(
              addBlogSuccess({ bloginput: data as BlogModel }),
              showAlert({ message: 'Blog added successfully' })
            )
          ),
          catchError((_error) =>
            of(showAlert({ message: 'Adding blogs failed due to' + _error.message }))
          )
        )
      )
    )
  );

  _updateblog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateblog),
      switchMap((action) =>
        this.service.updateBlogs(action.bloginput).pipe(
          switchMap(() =>
            of(
              updateBlogSuccess({ bloginput: action.bloginput }),
              showAlert({ message: 'Blog Updated successfully' })
            )
          ),
          catchError((_error) =>
            of(showAlert({ message: 'Updating blogs failed due to' + _error.message }))
          )
        )
      )
    )
  );

  _deleteblog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteblog),
      switchMap((action) =>
        this.service.deleteBlog(action.blodId).pipe(
          switchMap(() =>
            of(
              deleteblogsuccess({ blodId: action.blodId }),
              showAlert({ message: 'Blog deleted successfully' })
            )
          ),
          catchError((_error) =>
            of(showAlert({ message: 'Deleting blogs failed due to' + _error.message }))
          )
        )
      )
    )
  );
}
