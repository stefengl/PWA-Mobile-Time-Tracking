import { Route } from "@angular/router";
import { LoginComponent } from "../authentication/components/login/login.component";
import { RegistrationComponent } from "../authentication/components/registration/registration.component";
import { TabsComponent } from "../time-tracking/components/tabs/tabs.component";

const routes: Route[] = [
    { path: "", component: LoginComponent },
    { path: "registration", component: RegistrationComponent },
    { path: "tabs", component: TabsComponent }
]

export { routes };