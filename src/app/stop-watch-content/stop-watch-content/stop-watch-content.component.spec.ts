import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopWatchContentComponent } from './stop-watch-content.component';

describe('StopWatchContentComponent', () => {
  let component: StopWatchContentComponent;
  let fixture: ComponentFixture<StopWatchContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StopWatchContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopWatchContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
