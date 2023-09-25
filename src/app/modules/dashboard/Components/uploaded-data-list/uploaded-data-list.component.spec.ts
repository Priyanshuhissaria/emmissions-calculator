import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadedDataListComponent } from './uploaded-data-list.component';

describe('UploadedDataListComponent', () => {
  let component: UploadedDataListComponent;
  let fixture: ComponentFixture<UploadedDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadedDataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadedDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
