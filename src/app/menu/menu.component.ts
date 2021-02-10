import { Component, OnInit } from '@angular/core';
import {NbMenuItem, NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/menu/home',
      home: true
    },
    {
      title: 'Services',
      icon: 'briefcase-outline',
      link: '/menu/services'
    },
    {
      title: 'Contact',
      icon: 'phone-outline',
      link: '/menu/contact'
    },
    {
      title: 'VENDOR FEATURES',
      group: true,
    },
    {
      title: 'Profile',
      icon: 'shopping-bag-outline',
      link: '/menu/vendor-profile'
    },
    {
      title: 'CUSTOMER FEATURES',
      group: true,
    },
    {
      title: 'Events',
      icon: 'shopping-bag-outline',
      link: '/menu/event'
    },

    {
      title: 'Settings',
      icon: 'settings-2-outline',
      link: '/menu/settings'
    },
    {
      title: 'ADMIN FEATURES',
      group: true,
    },
    {
      title: 'Event Management',
      icon: 'briefcase-outline',
      children: [
        {
          title: 'View Events',
          icon: 'eye-outline',
          link: '/menu/adm-event/view-event',
        },
        {
          title: 'Meetings',
          icon: 'edit-outline',
          link: '/menu/adm-event/adm-meet',
        }
      ]
    },
    {
      title: 'Employee Management',
      icon: 'people-outline',
      children: [
        {
          title: 'View Employees',
          icon: 'eye-outline',
          link: '/menu/employee/emp-view',
        },
        {
          title: 'Register Employees',
          icon: 'edit-outline',
          link: '/menu/employee/emp-reg',
        }
      ],
    },
    {
      title: 'Vendor Management',
      icon: 'people-outline',
      children: [
        {
          title: 'Register Vendors',
          icon: 'eye-outline',
          link: '/menu/adm-vendor/reg-ven',
        },
      ],
    },
    {
      title: 'Services Management',
      icon: 'briefcase-outline',
      children: [
        {
          title: 'View Services',
          icon: 'eye-outline',
          link: '/menu/adm-services/view-serv',
        },
        {
          title: 'Add Services',
          icon: 'edit-outline',
          link: '/menu/adm-services/add-serv',
        }
      ]
    },
    {
      title: 'Vehicle Management',
      icon: 'car-outline',
      children: [
        {
          title: 'Register Vehicle',
          icon: 'eye-outline',
          link: '/menu/adm-vehicle/reg-veh',
        },
        {
          title: 'Statistics',
          icon: 'eye-outline',
          link: '/menu/adm-vehicle/veh-stat',
        },
        ]
    },
        {
          title: 'Inventory Management',
          icon: 'award-outline',
          children: [
            {
              title: 'Register Inventory',
              icon: 'eye-outline',
              link: '/menu/adm-inventory/reg-inv',
            },
            {
              title: 'Statistics',
              icon: 'edit-outline',
              link: '/menu/adm-inventory/inv-stats',
            }
          ],
        },
    {
      title: 'Finance Management',
      icon: 'cash-outline',
      children: [
        {
          title: 'View Services',
          icon: 'eye-outline',
          link: '/menu/adm-services/view-serv',
        },
        {
          title: 'Add Services',
          icon: 'edit-outline',
          link: '/menu/adm-services/add-serv',
        }
      ]
    },
    {
      title: 'Career Management',
      icon: 'briefcase-outline',
      children: [
        {
          title: 'Add Vacancies',
          icon: 'edit-outline',
          link: '/menu/adm-career/add-vac',
        },
        {
          title: 'View Application',
          icon: 'eye-outline',
          link: '/menu/adm-career/view-app',
        }
      ]
    }

  ];

  constructor(private readonly sidebarService: NbSidebarService) {
  }
  ngOnInit(): void {
  }

}
