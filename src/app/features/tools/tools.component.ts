import { Component } from '@angular/core';
import { BranchNameGeneratorComponent } from './branch-name-generator/branch-name-generator.component';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [
    BranchNameGeneratorComponent,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    RouterLinkActive,
    RouterLink,
    RouterOutlet,
    TranslocoModule,
  ],
  templateUrl: './tools.component.html',
  styleUrl: './tools.component.scss',
})
export class ToolsComponent {
  selectedTool: string = '';

  selectTool(tool: string): void {
    this.selectedTool = tool;
  }
}
