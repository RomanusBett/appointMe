import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandSecComponent } from './command-sec.component';

describe('CommandSecComponent', () => {
  let component: CommandSecComponent;
  let fixture: ComponentFixture<CommandSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandSecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
