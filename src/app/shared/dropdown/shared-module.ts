import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DropdownComponent } from "./dropdown.component";


@NgModule({
    declarations: [
        DropdownComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [DropdownComponent],
    providers: []
})

export class SharedModule { }
