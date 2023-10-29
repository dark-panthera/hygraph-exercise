import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// Components
import { HeaderComponent } from "src/app/modules/shared/components/header/header.component";

// Modules
import { MaterialModule } from "src/app/modules/material/material.module";

// Pipes
import { TruncatePipe } from "src/app/modules/shared/pipes/truncate.pipe";

@NgModule({
  declarations: [HeaderComponent, TruncatePipe],
  imports: [CommonModule, MaterialModule],
  exports: [HeaderComponent, TruncatePipe]
})
export class SharedModule {}
