import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkInfrastructureComponent } from './network-infrastructure.component';

describe('NetworkInfrastructureComponent', () => {
  let component: NetworkInfrastructureComponent;
  let fixture: ComponentFixture<NetworkInfrastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetworkInfrastructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkInfrastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
