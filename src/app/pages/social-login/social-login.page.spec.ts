import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SocialLoginPage } from './social-login.page';

describe('SocialLoginPage', () => {
  let component: SocialLoginPage;
  let fixture: ComponentFixture<SocialLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
