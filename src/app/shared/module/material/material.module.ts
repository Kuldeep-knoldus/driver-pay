import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAccordion,
    MatExpansionPanelHeader,
    MatAccordion,
    MatExpansionPanel,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatButton,
    MatIcon,
    MatToolbar,
    MatAnchor,

  ],
  exports: [
    MatAccordion,
    MatExpansionPanelHeader,
    MatAccordion,
    MatExpansionPanel,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatButton,
    MatIcon,
    MatToolbar,
    MatAnchor,
  ],
})
export class MaterialModule {
}
