import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { BlogModel } from '../../shared/store/Blog/Blog.model';
import { AppStateModel } from '../../shared/store/Global/AppState.Model';
import { addblog, updateblog } from '../../shared/store/Blog/Blog.actions';
import { getBlogById } from '../../shared/store/Blog/Blog.selector';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.css'],
})
export class AddblogComponent implements OnInit {
  pagetitle = '';
  editblogid = 0;
  editData!: BlogModel;

  constructor(
    private dialogRef: MatDialogRef<AddblogComponent>,
    private fb: FormBuilder,
    private store: Store<AppStateModel>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  blogForm: FormGroup = this.fb.group({
    id: [0],
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  ngOnInit() {
    this.pagetitle = this.data.title;
    if (this.data.isedit) {
      this.editblogid = this.data.id;
      this.store.select(getBlogById(this.data.id)).subscribe((data) => {
        this.editData = data;
        console.log(this.editData);
        this.blogForm.setValue({
          id: this.editData.id,
          title: this.editData.title,
          description: this.editData.description,
        });
      });
    }
  }

  closePopup() {
    this.dialogRef.close();
  }

  saveBlog() {
    debugger;
    if (this.blogForm.valid) {
      const _bloginput: BlogModel = {
        id: 0,
        title: this.blogForm.controls['title'].value as string,
        description: this.blogForm.controls['description'].value as string,
      };
      console.log(this.blogForm.value);
      if (this.data.isedit) {
        _bloginput.id=this.blogForm.value.id as number;
        this.store.dispatch(updateblog({ bloginput: _bloginput }));
      } else {
        this.store.dispatch(addblog({ bloginput: _bloginput }));
      }

      this.closePopup();
    }
  }
}
