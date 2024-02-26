import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { BusinessService } from 'src/app/core/service/business/business.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  protected isOnDarkMode: boolean = false;
  protected isBusinessLogged: boolean = false;
  protected coins: number = 0;
  protected notifications: any[] = [];
  protected hasNewNotifications: boolean = false;
  protected notificationsResponse: any[] = [];

  constructor (private authService: AuthService, private businessService: BusinessService, private router: Router) {

    if (this.authService.getRole().includes('GESTOR')) {
      this.isBusinessLogged = true;
      this.businessService.consultarSaldoCoin().subscribe(
        (res: any) => {
          this.coins = res.saldoCoins;
        }
      )
      
      this.businessService.returnNotifications().subscribe(
        (res: any) => {  
          this.notificationsResponse = res;
          if (res.length > 0) {
            this.hasNewNotifications = true;
      
            const storedNotificationsString = sessionStorage.getItem('notifications');
            const storedNotifications = JSON.parse(storedNotificationsString || '[]');
      
            // Filtra as notificações duplicadas
            const newNotifications = res.filter((newNotification: any) => {
              return !storedNotifications.some((storedNotification: any) => {
                return newNotification.idVaga === storedNotification.idVaga;
              });
            });

            const updatedNotifications = [...storedNotifications, ...newNotifications];
            sessionStorage.setItem('notifications', JSON.stringify(updatedNotifications));

            this.notifications = updatedNotifications.reverse();
          } else {
            this.hasNewNotifications = false;
            this.notifications = JSON.parse(sessionStorage.getItem('notifications') || '[]').reverse();
          }
        }
      );
    }
  }

  confirmNotification(){
    this.hasNewNotifications = false;

    this.notificationsResponse.forEach((notification: any) => {
      this.businessService.confirmNotification(notification.idVaga).subscribe(
        (res: any) => {
        }
      );
    });
  }

  openVacancys(){
    this.router.navigate(['/create-vacancy']);
  }
}
