import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PushnotificationPage } from './pushnotification.page';

describe('PushnotificationPage', () => {
  let component: PushnotificationPage;
  let fixture: ComponentFixture<PushnotificationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushnotificationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PushnotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
