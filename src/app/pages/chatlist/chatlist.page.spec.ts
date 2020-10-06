import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatlistPage } from './chatlist.page';

describe('ChatlistPage', () => {
  let component: ChatlistPage;
  let fixture: ComponentFixture<ChatlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
