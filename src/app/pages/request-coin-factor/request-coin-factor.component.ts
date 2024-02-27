import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { BusinessService } from 'src/app/core/service/business/business.service';

@Component({
  selector: 'app-request-coin-factor',
  templateUrl: './request-coin-factor.component.html',
  styleUrls: ['./request-coin-factor.component.scss']
})
export class RequestCoinFactorComponent {
  protected coins: number = 0;

  constructor(private authService: AuthService, private businessService: BusinessService) {
    if (this.authService.getRole().includes('GESTOR')) {
      this.businessService.consultarSaldoCoin().subscribe(
        (res: any) => {
          this.coins = res.saldoCoins;
        }
      )
    }
  }
}
