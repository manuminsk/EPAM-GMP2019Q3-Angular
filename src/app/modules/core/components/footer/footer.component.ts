import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  public param: {
    [key: string]: number;
  };

  constructor() {
    this.param = {
      year: new Date().getFullYear()
    };
  }
}
