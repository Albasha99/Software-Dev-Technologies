import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPage } from './login.page';

describe('LoginPage', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                LoginPage
            ],
        }).compileComponents();
    });

    it('exists', () => {
        const fixture = TestBed.createComponent(LoginPage);

        expect(fixture).toBeTruthy();
    });
});
