import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                NavigationComponent
            ],
        }).compileComponents();
    });

    it('should create the navigation component', () => {
        const fixture = TestBed.createComponent(NavigationComponent);
        const nav = fixture.componentInstance;
        expect(nav).toBeTruthy();
    });

    it('should display the user name correctly', () => {
        // Arrange
        const fixture = TestBed.createComponent(NavigationComponent);
        const nav = fixture.componentInstance;

        nav.userInput = {
            firstName: "test",
            lastName: "gUY"
        };

        // Act
        const username = nav.getDisplayName();

        // Assert
        expect(username).toBe('T. Guy');
    });

    it('should display login when nobody is logged in', () => {
        // Arrange
        const fixture = TestBed.createComponent(NavigationComponent);
        fixture.detectChanges();
        const navElem = fixture.nativeElement as HTMLElement;
        const profileElem = navElem.querySelector('#profile');
        const loginElem = navElem.querySelector('#login');

        // Assert
        expect(loginElem).toBeTruthy();
        expect(profileElem).toBeNull();
    });

    it('should display profile info when somebody is logged in', () => {
        // Arrange
        const fixture = TestBed.createComponent(NavigationComponent);
        const nav = fixture.componentInstance;

        nav.userInput = {
            firstName: "test",
            lastName: "gUY"
        };

        fixture.detectChanges();
        const navElem = fixture.nativeElement as HTMLElement;
        const profileElem = navElem.querySelector('#profile');
        const loginElem = navElem.querySelector('#login');

        // Assert
        expect(profileElem).toBeTruthy();
        expect(loginElem).toBeNull();
    });
});
