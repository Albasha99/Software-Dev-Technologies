import { Component } from '@angular/core';
import { User } from 'src/models/user.model';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
/**
 * Application's login page with login and forgot password functionalities.
 */
export class LoginPage {

    /**
     * Data for the logged-in user. If empty, there isn't any logged-in user.
     */
    public user?: User;

    /**
     * Basic constructor.
     * @param authService Authentication service handling the login process.
     */
    constructor(private authService: AuthenticationService) {}

    /**
     * Event listener fired when the login form is submitted.
     * @param event Event object with the form as target.
     */
    public onSubmit(event: Event) {
        // Prevent page reloading.
        event.preventDefault();

        // Access username and password strings.
        const username = ((event.target as HTMLFormElement).username as HTMLInputElement).value;
        const password = ((event.target as HTMLFormElement).password as HTMLInputElement).value;

        //TODO: Front-end validation!

        // Get login response.
        const response = this.authService.login(username, password);
        if (response.validationError) {
            // Login error.
            //TODO: Display validation error!
        } else {
            // Login successful.
            this.user = response.user;
        }
    }
}
