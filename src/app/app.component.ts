/**
 * Rich Text Editor Paste Cleanup functionality Sample
 */
 import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
 import {
   RichTextEditorComponent,
   ToolbarService,
   PasteCleanupSettingsModel,
   LinkService,
   ImageService,
 } from '@syncfusion/ej2-angular-richtexteditor';
 import { PasteCleanupService } from '@syncfusion/ej2-angular-richtexteditor';
 import {
   HtmlEditorService,
   CountService,
   QuickToolbarService,
 } from '@syncfusion/ej2-angular-richtexteditor';

 
 @Component({
   selector: 'app-root',
   templateUrl: 'app.component.html',
   styleUrls: ['app.component.css'],
   encapsulation: ViewEncapsulation.None,
   providers: [
     ToolbarService,
     LinkService,
     ImageService,
     HtmlEditorService,
     CountService,
     QuickToolbarService,
     PasteCleanupService,
   ],
 })
 export class AppComponent {
   @ViewChild('pasteCleanupRTE')
   public rteObj: RichTextEditorComponent | undefined;
 
   public pasteCleanupSettings: PasteCleanupSettingsModel = {
     prompt: true,
     plainText: false,
     keepFormat: true,
   };
 }
 