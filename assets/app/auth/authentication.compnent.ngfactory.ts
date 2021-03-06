/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '@angular/router';
import * as import2 from '@angular/common';
import * as import3 from './authentication.compnent';
import * as import4 from './auth.service';
const styles_AuthenticationComponent:any[] = ([] as any[]);
export const RenderType_AuthenticationComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 2,
  styles: styles_AuthenticationComponent,
  data: {}
}
);
function View_AuthenticationComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'li',[[
        'routerLinkActive',
        'active'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(860160,(null as any),2,import1.RouterLinkActive,[
      import1.Router,
      import0.ElementRef,
      import0.Renderer,
      import0.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import0.ɵqud(301989888,3,{links: 1}),
    import0.ɵqud(301989888,4,{linksWithHrefs: 1}),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',([] as any[]),[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,5).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(335872,[[
        4,
        4
      ]
    ],0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(1),
    (l()(),import0.ɵted((null as any),['Signin']))
  ]
  ,(ck,v) => {
    const currVal_0:any = 'active';
    ck(v,1,0,currVal_0);
    const currVal_3:any = ck(v,6,0,'signin');
    ck(v,5,0,currVal_3);
  },(ck,v) => {
    const currVal_1:any = import0.ɵnov(v,5).target;
    const currVal_2:any = import0.ɵnov(v,5).href;
    ck(v,4,0,currVal_1,currVal_2);
  });
}
function View_AuthenticationComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'li',[[
        'routerLinkActive',
        'active'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(860160,(null as any),2,import1.RouterLinkActive,[
      import1.Router,
      import0.ElementRef,
      import0.Renderer,
      import0.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import0.ɵqud(301989888,5,{links: 1}),
    import0.ɵqud(301989888,6,{linksWithHrefs: 1}),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',([] as any[]),[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,5).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(335872,[[
        6,
        4
      ]
    ],0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(1),
    (l()(),import0.ɵted((null as any),['Logout']))
  ]
  ,(ck,v) => {
    const currVal_0:any = 'active';
    ck(v,1,0,currVal_0);
    const currVal_3:any = ck(v,6,0,'logout');
    ck(v,5,0,currVal_3);
  },(ck,v) => {
    const currVal_1:any = import0.ɵnov(v,5).target;
    const currVal_2:any = import0.ɵnov(v,5).href;
    ck(v,4,0,currVal_1,currVal_2);
  });
}
export function View_AuthenticationComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵted((null as any),['\n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),22,'header',[[
        'class',
        'row spacing'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),19,'nav',[[
        'class',
        'col-md-8 col-md-offset-2'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n            '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),16,'ul',[[
        'class',
        'nav nav-tabs'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n                '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'li',[[
        'routerLinkActive',
        'active'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(860160,(null as any),2,import1.RouterLinkActive,[
      import1.Router,
      import0.ElementRef,
      import0.Renderer,
      import0.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import0.ɵqud(301989888,1,{links: 1}),
    import0.ɵqud(301989888,2,{linksWithHrefs: 1}),
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'a',([] as any[]),[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,12).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import0.ɵdid(335872,[[
        2,
        4
      ]
    ],0,import1.RouterLinkWithHref,[
      import1.Router,
      import1.ActivatedRoute,
      import2.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import0.ɵpad(1),
    (l()(),import0.ɵted((null as any),['Signup'])),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AuthenticationComponent_1)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n                '])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AuthenticationComponent_2)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n            '])),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n    \n    '])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'row spacing'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n        '])),
    (l()(),import0.ɵeld(8388608,(null as any),(null as any),1,'router-outlet',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(73728,(null as any),0,import1.RouterOutlet,[
      import1.RouterOutletMap,
      import0.ViewContainerRef,
      import0.ComponentFactoryResolver,
      [
        8,
        (null as any)
      ]

    ]
    ,(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n    '])),
    (l()(),import0.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    var co:import3.AuthenticationComponent = v.component;
    const currVal_0:any = 'active';
    ck(v,8,0,currVal_0);
    const currVal_3:any = ck(v,13,0,'signup');
    ck(v,12,0,currVal_3);
    const currVal_4:boolean = !co.isLoggedIn();
    ck(v,17,0,currVal_4);
    const currVal_5:any = co.isLoggedIn();
    ck(v,20,0,currVal_5);
  },(ck,v) => {
    const currVal_1:any = import0.ɵnov(v,12).target;
    const currVal_2:any = import0.ɵnov(v,12).href;
    ck(v,11,0,currVal_1,currVal_2);
  });
}
function View_AuthenticationComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'app-authentication',([] as any[]),(null as any),(null as any),(null as any),View_AuthenticationComponent_0,RenderType_AuthenticationComponent)),
    import0.ɵdid(24576,(null as any),0,import3.AuthenticationComponent,[import4.AuthService],(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const AuthenticationComponentNgFactory:import0.ComponentFactory<import3.AuthenticationComponent> = import0.ɵccf('app-authentication',import3.AuthenticationComponent,View_AuthenticationComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvTGVuMTU5L0Rlc2t0b3AvU3R1ZGRpZXMvVWRlbXkvTUVBTiAyL3NlZWQtcHJvamVjdC9hc3NldHMvYXBwL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG5lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvTGVuMTU5L0Rlc2t0b3AvU3R1ZGRpZXMvVWRlbXkvTUVBTiAyL3NlZWQtcHJvamVjdC9hc3NldHMvYXBwL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG5lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy9MZW4xNTkvRGVza3RvcC9TdHVkZGllcy9VZGVteS9NRUFOIDIvc2VlZC1wcm9qZWN0L2Fzc2V0cy9hcHAvYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wbmVudC50cy5BdXRoZW50aWNhdGlvbkNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvTGVuMTU5L0Rlc2t0b3AvU3R1ZGRpZXMvVWRlbXkvTUVBTiAyL3NlZWQtcHJvamVjdC9hc3NldHMvYXBwL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG5lbnQudHMuQXV0aGVudGljYXRpb25Db21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcbiAgICA8aGVhZGVyIGNsYXNzPVwicm93IHNwYWNpbmdcIj5cbiAgICAgICAgPG5hdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCI+XG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj48YSBbcm91dGVyTGlua109XCJbJ3NpZ251cCddXCI+U2lnbnVwPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiAqbmdJZj1cIiFpc0xvZ2dlZEluKClcIj48YSBbcm91dGVyTGlua109XCJbJ3NpZ25pbiddXCI+U2lnbmluPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiAqbmdJZj1cImlzTG9nZ2VkSW4oKVwiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnbG9nb3V0J11cIj5Mb2dvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICAgIFxuICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgPC9kaXY+XG4gICIsIjxhcHAtYXV0aGVudGljYXRpb24+PC9hcHAtYXV0aGVudGljYXRpb24+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0tnQjtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtnQkFBQTtJQUFvRDtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFHO0lBQTBCOzs7SUFBN0U7SUFBSixTQUFJLFNBQUo7SUFBdUQ7SUFBSCxTQUFHLFNBQUg7O0lBQUE7SUFBQTtJQUFBLFNBQUEsbUJBQUE7Ozs7O01BQ3BEO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO0lBQW1EO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUc7SUFBMEI7OztJQUE1RTtJQUFKLFNBQUksU0FBSjtJQUFzRDtJQUFILFNBQUcsU0FBSDs7SUFBQTtJQUFBO0lBQUEsU0FBQSxtQkFBQTs7Ozs7SUFObkU7TUFDSTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTRCO01BQ3hCO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBc0M7TUFDbEM7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUF5QjtNQUNyQjtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtnQkFBQTtJQUE4QjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFHO0lBQTBCO0lBQWU7SUFDMUU7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFnRztJQUNoRztnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQStGO0lBQzlGO0lBQ0g7SUFDRDtNQUVUO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBeUI7SUFDckI7Z0JBQUE7Ozs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQStCO0lBQzdCOzs7O0lBVFU7SUFBSixTQUFJLFNBQUo7SUFBaUM7SUFBSCxVQUFHLFNBQUg7SUFDQTtJQUE5QixVQUE4QixTQUE5QjtJQUM4QjtJQUE5QixVQUE4QixTQUE5Qjs7SUFGOEI7SUFBQTtJQUFBLFVBQUEsbUJBQUE7Ozs7O0lDSjlDO2dCQUFBOzs7OyJ9
