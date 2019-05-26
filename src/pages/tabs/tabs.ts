import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
// import { UserPage } from '../user/user';
import {TabHomePage} from "../learn-tab-page/tab-home-page/tab-home-page";
import {TabDiscoverPage} from "../learn-tab-page/tab-discover-page/tab-discover-page";
import {TabMorePagePage} from "../learn-tab-page/tab-my-page-page/tab-my-page-page";
@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  tabRoots: Object[];
  constructor() {
    this.tabRoots = [
      {
        root: TabHomePage,
        tabTitle: '首页',
        tabIcon: 'home'
      },
      {
        root: TabDiscoverPage,
        tabTitle: '分类',
        tabIcon: 'list'
      },
      {
        root:TabMorePagePage,
        tabTitle: '我的',
        tabIcon: 'settings'
      }
    ];
  }
}
