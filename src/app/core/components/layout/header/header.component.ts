import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TranslocoService, TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';
import { Languages } from '@core/constants/languages';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
    BsDropdownModule,
    TranslocoDirective,
    BsDropdownModule,
    TranslocoPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly Languages = Languages;

  constructor(private translocoService: TranslocoService) {}

  switchLanguage(lang: string): void {
    this.translocoService.setActiveLang(lang);
  }
}
