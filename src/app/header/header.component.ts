import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService} from '@nebular/theme';
import {map, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{

  private destroy$: Subject<void> = new Subject<void>();

  userPictureOnly: boolean = false;
  themes = [

    {
      value: 'default',
      name: 'Light Mode',
    },

    {
      value: 'dark',
      name: 'Dark Mode',
    },




  ];

  currentTheme = 'default';
  userMenu = [

    { title: 'Profile' },
    { title: 'Log out' }
    ];



  constructor(private sidebarService: NbSidebarService,

              private menuService: NbMenuService,

              private themeService: NbThemeService,

              private breakpointService: NbMediaBreakpointsService) {

  }

  ngOnInit(): void {
    this.currentTheme = this.themeService.currentTheme;



    const { xl } = this.breakpointService.getBreakpointsMap();

    this.themeService.onMediaQueryChange()

      .pipe(

        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),

        takeUntil(this.destroy$),

      )

      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);



    this.themeService.onThemeChange()

      .pipe(

        map(({ name }) => name),

        takeUntil(this.destroy$),

      )

      .subscribe(themeName => this.currentTheme = themeName);

  }

  changeTheme(themeName: string): any{

    this.themeService.changeTheme(themeName);

  }

  ngOnDestroy(): any {

    this.destroy$.next();

    this.destroy$.complete();

  }

  toggleSidebar(): boolean {

    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;

  }

  navigateHome(): any {

    this.menuService.navigateHome();

    return false;

  }

}
