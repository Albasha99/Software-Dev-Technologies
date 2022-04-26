import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ]
        }).compileComponents();
    });

    it('exists', () => {
        const authService = new AuthenticationService();

        expect(authService).toBeTruthy();
    });
});
