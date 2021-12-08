import { INavData } from '@coreui/angular';

export const navItems2: INavData[] = [
    {
        name: 'Dashboard',
        url: '/client/home',
        icon: 'icon-speedometer',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      },
      {
        name: 'Vendor',
        url: '/client/vendor',
        icon: 'icon-docs',
        // badge: {
        //   variant: 'info',
        //   text: 'NEW'
        // }
      },
    

]