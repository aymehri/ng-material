import { NgModule } from '@angular/core';
import {
  // Forms Controls
  MdAutocompleteModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdInputModule,
  MdRadioModule,
  MdSelectModule,
  MdSliderModule,
  MdSlideToggleModule,
  // Navigation
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule,
  // Layout
  MdListModule,
  MdGridListModule,
  MdCardModule,
  MdTabsModule,
  // Buttons & indicators
  MdButtonModule,
  MdButtonToggleModule,
  MdChipsModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  // Popups & Modals
  MdDialogModule,
  MdTooltipModule,
  MdSnackBarModule,
  // Data Table
  MdTableModule,
  MdSortModule,
  MdPaginatorModule
} from '@angular/material';

const MATERIALMODULE = [
  // Forms Controls
  MdAutocompleteModule,
  MdCheckboxModule,
  MdDatepickerModule,
  MdInputModule,
  MdRadioModule,
  MdSelectModule,
  MdSliderModule,
  MdSlideToggleModule,
  // Navigation
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule,
  // Layout
  MdListModule,
  MdGridListModule,
  MdCardModule,
  MdTabsModule,
  // Buttons & indicators
  MdButtonModule,
  MdButtonToggleModule,
  MdChipsModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  // Popups & Modals
  MdDialogModule,
  MdTooltipModule,
  MdSnackBarModule,
  // Data Table
  MdTableModule,
  MdSortModule,
  MdPaginatorModule
];

@NgModule({
  imports: [...MATERIALMODULE],
  exports: [...MATERIALMODULE],
})
export class MyOwnCustomMaterialModule { }
