import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(AuthService);
  const IsLoggedIn = service.IsLoggedIn();
  console.log(IsLoggedIn, 'logged');

  if (IsLoggedIn) {
    return true;
  } else {
    alert('Access denied, Please login');
    router.navigateByUrl('/login');
    return false;
  }
};
