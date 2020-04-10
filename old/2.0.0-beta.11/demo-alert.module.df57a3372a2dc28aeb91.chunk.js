webpackJsonp(["demo-alert.module"],{"/AYY":function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-alert-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoAlertBasicComponent {}\n"},"7Wkq":function(n,l){n.exports='<div *ngFor="let alert of alerts">\n  <alert [type]="alert.type"><span [innerHtml]="alert.msg"></span></alert>\n</div>\n'},"8mpx":function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-alert-styling-local',\n  templateUrl: './styling-local.html',\n  /* tslint:disable no-unused-css*/\n  styles: [\n    `\n  :host >>> .alert-md-local {\n    background-color: #009688;\n    border-color: #00695C;\n    color: #fff;\n  }\n  `\n  ]\n})\nexport class DemoAlertStylingLocalComponent {}\n"},C2y6:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-alert-content-html',\n  templateUrl: './dynamic-content.html'\n})\nexport class DemoAlertDynamicContentComponent {\n  index = 0;\n  messages = [\n    'You successfully read this important alert message.',\n    'Now this text is different from what it was before. Go ahead and click the button one more time',\n    'Well done! Click reset button and you\\'ll see the first message'\n  ];\n\n  changeText() {\n    if (this.messages.length - 1 !== this.index) {\n      this.index++;\n    }\n  }\n}\n"},DP5p:function(n,l){n.exports="import { Component } from '@angular/core';\nimport { AlertConfig } from 'ngx-bootstrap/alert';\n\n// such override allows to keep some initial values\n\nexport function getAlertConfig(): AlertConfig {\n  return Object.assign(new AlertConfig(), { type: 'success' });\n}\n\n@Component({\n  selector: 'demo-alert-config',\n  templateUrl: './config.html',\n  providers: [{ provide: AlertConfig, useFactory: getAlertConfig }]\n})\nexport class DemoAlertConfigComponent {}\n"},DXpI:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-alert-content',\n  templateUrl: './content.html'\n})\nexport class DemoAlertContentComponent {}\n"},GsEN:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-alert-timeout',\n  templateUrl: './dismiss-on-timeout.html'\n})\nexport class DemoAlertTimeoutComponent {\n  alerts: any = [];\n\n  add(): void {\n    this.alerts.push({\n      type: 'info',\n      msg: `This alert will be closed in 5 seconds (added: ${new Date().toLocaleTimeString()})`,\n      timeout: 5000\n    });\n  }\n}\n"},N674:function(n,l){n.exports='<style>\n  .alert-md-color {\n    background-color: #7B1FA2;\n    border-color: #4A148C;\n    color: #fff;\n  }\n</style>\n<alert type="md-color">\n  <strong>Well done!</strong> You successfully read this important alert message.\n</alert>\n'},ND8E:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-alert-dismiss',\n  templateUrl: './dismiss.html'\n})\nexport class DemoAlertDismissComponent {\n  dismissible = true;\n  alerts: any = [\n    {\n      type: 'success',\n      msg: `You successfully read this important alert message.`\n    },\n    {\n      type: 'info',\n      msg: `This alert needs your attention, but it's not super important.`\n    },\n    {\n      type: 'danger',\n      msg: `Better check yourself, you're not looking too good.`\n    }\n  ];\n\n  reset(): void {\n    this.alerts = this.alerts.map((alert: any) => Object.assign({}, alert));\n  }\n}\n"},POqY:function(n,l){n.exports='<alert type="md-local">\n  <strong>Well done!</strong> You successfully read this important alert message.\n</alert>\n'},Sb8m:function(n,l){n.exports='<alert type="success">\n  <strong>Well done!</strong> You successfully read this important alert message.\n</alert>\n<alert type="info">\n  <strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.\n</alert>\n<alert type="warning">\n  <strong>Warning!</strong> Better check yourself, you\'re not looking too good.\n</alert>\n<alert type="danger">\n  <strong>Oh snap!</strong> Change a few things up and try submitting again.\n</alert>\n'},VkHi:function(n,l){n.exports="import { Component, SecurityContext } from '@angular/core';\nimport { DomSanitizer } from '@angular/platform-browser';\n\n@Component({\n  selector: 'demo-alert-dynamic-html',\n  templateUrl: './dynamic-html.html'\n})\nexport class DemoAlertDynamicHtmlComponent {\n  alerts: any = [\n    {\n      type: 'success',\n      msg: `<strong>Well done!</strong> You successfully read this important alert message.`\n    },\n    {\n      type: 'info',\n      msg: `<strong>Heads up!</strong> This alert needs your attention, but it's not super important.`\n    },\n    {\n      type: 'danger',\n      msg: `<strong>Warning!</strong> Better check yourself, you're not looking too good.`\n    }\n  ];\n\n  constructor(sanitizer: DomSanitizer) {\n    this.alerts = this.alerts.map((alert: any) => ({\n      type: alert.type,\n      msg: sanitizer.sanitize(SecurityContext.HTML, alert.msg)\n    }));\n  }\n}\n"},XODE:function(n,l){n.exports='<alert type="success">\n  <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.\n</alert>\n<alert type="info">\n  <strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it\'s not super important.\n</alert>\n<alert type="warning">\n  <strong>Warning!</strong> Better check yourself, you\'re <a href="#" class="alert-link">not looking too good</a>.\n</alert>\n<alert type="danger">\n  <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.\n</alert>\n'},Xpf3:function(n,l){n.exports='<alert type="success" dismissOnTimeout="5000">\n  <strong>Well done!</strong> You successfully read this important alert message.\n</alert>\n\n<p>If you missed alert on top of me, just press <code>Add more</code> button</p>\n<div *ngFor="let alert of alerts">\n  <alert [type]="alert.type" [dismissOnTimeout]="alert.timeout">{{ alert.msg }}</alert>\n</div>\n<button type="button" class="btn btn-primary" (click)="add()">Add more</button>\n'},bt9e:function(n,l){n.exports='<alert>\n  <strong>Well done!</strong> You successfully read this important alert message.\n</alert>\n<alert type="info">\n  <strong>Heads up!</strong> This alert needs your attention, but it\'s not super important.\n</alert>\n'},fGnF:function(n,l){n.exports='<alert type="success">\n  <h4 class="alert-heading">Well done!</h4>\n  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\n  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\n</alert>\n'},gJdh:function(n,l){n.exports="<pre class=\"prettyprint lang-typescript\">// RECOMMENDED (doesn't work with system.js)\nimport { AlertModule } from 'ngx-bootstrap/alert';\n// or\nimport { AlertModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [AlertModule.forRoot(),...]\n})\nexport class AppModule(){}</pre>"},gwzB:function(n,l){n.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-alert-link',\n  templateUrl: './link.html'\n})\nexport class DemoAlertLinkComponent {}\n"},jQuK:function(n,l){n.exports="import { Component, ViewEncapsulation } from '@angular/core';\n\n@Component({\n  selector: 'demo-alert-styling-global',\n  templateUrl: './styling-global.html',\n  encapsulation: ViewEncapsulation.None\n})\nexport class DemoAlertStylingGlobalComponent {}\n"},rKpk:function(n,l){n.exports='<div *ngFor="let alert of alerts">\n  <alert [type]="alert.type" [dismissible]="dismissible">{{ alert.msg }}</alert>\n</div>\n<button type="button" class="btn btn-primary" (click)="dismissible = !dismissible">Toggle dismissible</button>\n<button type="button" class="btn btn-primary" (click)="reset()">Reset</button>\n'},uKBk:function(n,l){n.exports='<alert type="success">{{messages[index]}}</alert>\n\n<div *ngIf="index !== messages.length -1; else elseBlock">\n  <button class="btn btn-primary" (click)="changeText()">Change text</button>\n</div>\n<ng-template #elseBlock>\n  <button class="btn btn-primary" (click)="index = 0">Reset</button>\n</ng-template>\n'},x5BN:function(n,l,t){"use strict";function e(){return Object.assign(new z,{type:"success"})}function o(n){return w._45(0,[(n()(),w._43(null,[" "])),(n()(),w._22(0,null,null,7,"button",[["aria-label","Close"],["class","close"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.close()&&e),e},null,null)),(n()(),w._43(null,[" "])),(n()(),w._22(0,null,null,1,"span",[["aria-hidden","true"]],null,null,null,null,null)),(n()(),w._43(null,["\xd7"])),(n()(),w._43(null,[" "])),(n()(),w._22(0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(n()(),w._43(null,["Close"])),(n()(),w._43(null,[" "])),(n()(),w._43(null,[" "]))],null,null)}function u(n){return w._45(0,[(n()(),w._43(null,[" "])),(n()(),w._22(0,null,null,7,"div",[["role","alert"]],null,null,null,null,null)),w._20(278528,null,0,P.k,[w.A,w.B,w.p,w.P],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),w._43(null,[" "])),(n()(),w._16(16777216,null,null,1,null,o)),w._20(16384,null,0,P.n,[w._4,w.Z],{ngIf:[0,"ngIf"]},null),(n()(),w._43(null,[" "])),w._34(null,0),(n()(),w._43(null,[" "])),(n()(),w._43(null,[" "]))],function(n,l){var t=l.component;n(l,2,0,"alert alert-"+t.type,t.classes),n(l,5,0,t.dismissible)},null)}function s(n){return w._45(2,[(n()(),w._16(16777216,null,null,1,null,u)),w._20(16384,null,0,P.n,[w._4,w.Z],{ngIf:[0,"ngIf"]},null),(n()(),w._43(null,[" "]))],function(n,l){n(l,1,0,l.component.isOpen)},null)}function r(n){return w._45(2,[(n()(),w._22(0,null,null,11,"demo-section",[],null,null,null,on.b,on.a)),w._20(49152,null,0,un.a,[],{name:[0,"name"],src:[1,"src"],componentContent:[2,"componentContent"]},null),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"p",[],null,null,null,null,null)),(n()(),w._43(null,["Provides contextual feedback messages for typical user actions with the handful of available and flexible alert messages."])),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),w._43(null,["Contents"])),(n()(),w._43(0,["\n\n  "])),(n()(),w._22(0,null,0,1,"docs-section",[],null,null,null,sn.b,sn.a)),w._20(49152,null,0,rn.a,[w.y],{content:[0,"content"]},null),(n()(),w._43(0,["\n"])),(n()(),w._43(null,["\n"]))],function(n,l){var t=l.component;n(l,1,0,t.name,t.src,t.componentContent),n(l,10,0,t.componentContent)},null)}function i(n){return w._45(0,[(n()(),w._22(0,null,null,5,"alert",[["type","success"]],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"]},null),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),w._43(null,["Well done!"])),(n()(),w._43(0,[" You successfully read this important alert message.\n"])),(n()(),w._43(null,["\n"])),(n()(),w._22(0,null,null,5,"alert",[["type","info"]],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"]},null),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),w._43(null,["Heads up!"])),(n()(),w._43(0,[" This alert needs your attention, but it's not super important.\n"])),(n()(),w._43(null,["\n"])),(n()(),w._22(0,null,null,5,"alert",[["type","warning"]],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"]},null),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),w._43(null,["Warning!"])),(n()(),w._43(0,[" Better check yourself, you're not looking too good.\n"])),(n()(),w._43(null,["\n"])),(n()(),w._22(0,null,null,5,"alert",[["type","danger"]],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"]},null),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),w._43(null,["Oh snap!"])),(n()(),w._43(0,[" Change a few things up and try submitting again.\n"])),(n()(),w._43(null,["\n"]))],function(n,l){n(l,1,0,"success");n(l,8,0,"info");n(l,15,0,"warning");n(l,22,0,"danger")},null)}function a(n){return w._45(0,[(n()(),w._22(0,null,null,8,"alert",[["type","success"]],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"]},null),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),w._43(null,["Well done!"])),(n()(),w._43(0,[" You successfully read "])),(n()(),w._22(0,null,0,1,"a",[["class","alert-link"],["href","#"]],null,null,null,null,null)),(n()(),w._43(null,["this important alert message"])),(n()(),w._43(0,[".\n"])),(n()(),w._43(null,["\n"])),(n()(),w._22(0,null,null,8,"alert",[["type","info"]],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"]},null),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),w._43(null,["Heads up!"])),(n()(),w._43(0,[" This "])),(n()(),w._22(0,null,0,1,"a",[["class","alert-link"],["href","#"]],null,null,null,null,null)),(n()(),w._43(null,["alert needs your attention"])),(n()(),w._43(0,[", but it's not super important.\n"])),(n()(),w._43(null,["\n"])),(n()(),w._22(0,null,null,8,"alert",[["type","warning"]],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"]},null),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),w._43(null,["Warning!"])),(n()(),w._43(0,[" Better check yourself, you're "])),(n()(),w._22(0,null,0,1,"a",[["class","alert-link"],["href","#"]],null,null,null,null,null)),(n()(),w._43(null,["not looking too good"])),(n()(),w._43(0,[".\n"])),(n()(),w._43(null,["\n"])),(n()(),w._22(0,null,null,8,"alert",[["type","danger"]],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"]},null),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),w._43(null,["Oh snap!"])),(n()(),w._43(0,[" "])),(n()(),w._22(0,null,0,1,"a",[["class","alert-link"],["href","#"]],null,null,null,null,null)),(n()(),w._43(null,["Change a few things up"])),(n()(),w._43(0,[" and try submitting again.\n"])),(n()(),w._43(null,["\n"]))],function(n,l){n(l,1,0,"success");n(l,11,0,"info");n(l,21,0,"warning");n(l,31,0,"danger")},null)}function c(n){return w._45(0,[(n()(),w._22(0,null,null,11,"alert",[["type","success"]],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"]},null),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"h4",[["class","alert-heading"]],null,null,null,null,null)),(n()(),w._43(null,["Well done!"])),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"p",[],null,null,null,null,null)),(n()(),w._43(null,["Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."])),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"p",[["class","mb-0"]],null,null,null,null,null)),(n()(),w._43(null,["Whenever you need to, be sure to use margin utilities to keep things nice and tidy."])),(n()(),w._43(0,["\n"])),(n()(),w._43(null,["\n"]))],function(n,l){n(l,1,0,"success")},null)}function p(n){return w._45(0,[(n()(),w._22(0,null,null,5,"div",[],null,null,null,null,null)),(n()(),w._43(null,["\n  "])),(n()(),w._22(0,null,null,2,"alert",[],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"],dismissible:[1,"dismissible"]},null),(n()(),w._43(0,["",""])),(n()(),w._43(null,["\n"]))],function(n,l){var t=l.component;n(l,3,0,l.context.$implicit.type,t.dismissible)},function(n,l){n(l,4,0,l.context.$implicit.msg)})}function m(n){return w._45(0,[(n()(),w._16(16777216,null,null,1,null,p)),w._20(802816,null,0,P.m,[w._4,w.Z,w.A],{ngForOf:[0,"ngForOf"]},null),(n()(),w._43(null,["\n"])),(n()(),w._22(0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!=(o.dismissible=!o.dismissible)&&e),e},null,null)),(n()(),w._43(null,["Toggle dismissible"])),(n()(),w._43(null,["\n"])),(n()(),w._22(0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.reset()&&e),e},null,null)),(n()(),w._43(null,["Reset"])),(n()(),w._43(null,["\n"]))],function(n,l){n(l,1,0,l.component.alerts)},null)}function d(n){return w._45(0,[(n()(),w._22(0,null,null,5,"div",[],null,null,null,null,null)),(n()(),w._43(null,["\n  "])),(n()(),w._22(0,null,null,2,"alert",[],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"]},null),(n()(),w._22(0,null,0,0,"span",[],[[8,"innerHTML",1]],null,null,null,null)),(n()(),w._43(null,["\n"]))],function(n,l){n(l,3,0,l.context.$implicit.type)},function(n,l){n(l,4,0,l.context.$implicit.msg)})}function g(n){return w._45(0,[(n()(),w._16(16777216,null,null,1,null,d)),w._20(802816,null,0,P.m,[w._4,w.Z,w.A],{ngForOf:[0,"ngForOf"]},null),(n()(),w._43(null,["\n"]))],function(n,l){n(l,1,0,l.component.alerts)},null)}function _(n){return w._45(0,[(n()(),w._22(0,null,null,4,"div",[],null,null,null,null,null)),(n()(),w._43(null,["\n  "])),(n()(),w._22(0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.changeText()&&e),e},null,null)),(n()(),w._43(null,["Change text"])),(n()(),w._43(null,["\n"]))],null,null)}function f(n){return w._45(0,[(n()(),w._43(null,["\n  "])),(n()(),w._22(0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==(o.index=0)&&e),e},null,null)),(n()(),w._43(null,["Reset"])),(n()(),w._43(null,["\n"]))],null,null)}function y(n){return w._45(0,[(n()(),w._22(0,null,null,2,"alert",[["type","success"]],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"]},null),(n()(),w._43(0,["",""])),(n()(),w._43(null,["\n\n"])),(n()(),w._16(16777216,null,null,1,null,_)),w._20(16384,null,0,P.n,[w._4,w.Z],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),w._43(null,["\n"])),(n()(),w._16(0,[["elseBlock",2]],null,0,null,f)),(n()(),w._43(null,["\n"]))],function(n,l){var t=l.component;n(l,1,0,"success"),n(l,5,0,t.index!==t.messages.length-1,w._35(l,7))},function(n,l){var t=l.component;n(l,2,0,t.messages[t.index])})}function h(n){return w._45(0,[(n()(),w._22(0,null,null,5,"div",[],null,null,null,null,null)),(n()(),w._43(null,["\n  "])),(n()(),w._22(0,null,null,2,"alert",[],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"],dismissOnTimeout:[1,"dismissOnTimeout"]},null),(n()(),w._43(0,["",""])),(n()(),w._43(null,["\n"]))],function(n,l){n(l,3,0,l.context.$implicit.type,l.context.$implicit.timeout)},function(n,l){n(l,4,0,l.context.$implicit.msg)})}function b(n){return w._45(0,[(n()(),w._22(0,null,null,5,"alert",[["dismissOnTimeout","5000"],["type","success"]],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"],dismissOnTimeout:[1,"dismissOnTimeout"]},null),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),w._43(null,["Well done!"])),(n()(),w._43(0,[" You successfully read this important alert message.\n"])),(n()(),w._43(null,["\n\n"])),(n()(),w._22(0,null,null,4,"p",[],null,null,null,null,null)),(n()(),w._43(null,["If you missed alert on top of me, just press "])),(n()(),w._22(0,null,null,1,"code",[],null,null,null,null,null)),(n()(),w._43(null,["Add more"])),(n()(),w._43(null,[" button"])),(n()(),w._43(null,["\n"])),(n()(),w._16(16777216,null,null,1,null,h)),w._20(802816,null,0,P.m,[w._4,w.Z,w.A],{ngForOf:[0,"ngForOf"]},null),(n()(),w._43(null,["\n"])),(n()(),w._22(0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0,o=n.component;return"click"===l&&(e=!1!==o.add()&&e),e},null,null)),(n()(),w._43(null,["Add more"])),(n()(),w._43(null,["\n"]))],function(n,l){var t=l.component;n(l,1,0,"success","5000"),n(l,14,0,t.alerts)},null)}function k(n){return w._45(0,[(n()(),w._43(null,["\n"])),(n()(),w._22(0,null,null,5,"alert",[["type","md-color"]],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"]},null),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),w._43(null,["Well done!"])),(n()(),w._43(0,[" You successfully read this important alert message.\n"])),(n()(),w._43(null,["\n"]))],function(n,l){n(l,2,0,"md-color")},null)}function C(n){return w._45(0,[(n()(),w._22(0,null,null,5,"alert",[["type","md-local"]],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"]},null),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),w._43(null,["Well done!"])),(n()(),w._43(0,[" You successfully read this important alert message.\n"])),(n()(),w._43(null,["\n"]))],function(n,l){n(l,1,0,"md-local")},null)}function x(n){return w._45(0,[(n()(),w._22(0,null,null,5,"alert",[],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],null,null),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),w._43(null,["Well done!"])),(n()(),w._43(0,[" You successfully read this important alert message.\n"])),(n()(),w._43(null,["\n"])),(n()(),w._22(0,null,null,5,"alert",[["type","info"]],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],{type:[0,"type"]},null),(n()(),w._43(0,["\n  "])),(n()(),w._22(0,null,0,1,"strong",[],null,null,null,null,null)),(n()(),w._43(null,["Heads up!"])),(n()(),w._43(0,[" This alert needs your attention, but it's not super important.\n"])),(n()(),w._43(null,["\n"]))],function(n,l){n(l,1,0);n(l,8,0,"info")},null)}Object.defineProperty(l,"__esModule",{value:!0});var w=t("/oeL"),v=function(){return function(){}}(),O=function(){return function(){}}(),A=function(){return function(){}}(),T=function(){function n(){this.dismissible=!0,this.alerts=[{type:"success",msg:"You successfully read this important alert message."},{type:"info",msg:"This alert needs your attention, but it's not super important."},{type:"danger",msg:"Better check yourself, you're not looking too good."}]}return n.prototype.reset=function(){this.alerts=this.alerts.map(function(n){return Object.assign({},n)})},n}(),D=t("fc+i"),j=function(){function n(n){this.alerts=[{type:"success",msg:"<strong>Well done!</strong> You successfully read this important alert message."},{type:"info",msg:"<strong>Heads up!</strong> This alert needs your attention, but it's not super important."},{type:"danger",msg:"<strong>Warning!</strong> Better check yourself, you're not looking too good."}],this.alerts=this.alerts.map(function(l){return{type:l.type,msg:n.sanitize(w.U.HTML,l.msg)}})}return n.ctorParameters=function(){return[{type:D.c}]},n}(),W=function(){function n(){this.index=0,this.messages=["You successfully read this important alert message.","Now this text is different from what it was before. Go ahead and click the button one more time","Well done! Click reset button and you'll see the first message"]}return n.prototype.changeText=function(){this.messages.length-1!==this.index&&this.index++},n}(),Y=function(){function n(){this.alerts=[]}return n.prototype.add=function(){this.alerts.push({type:"info",msg:"This alert will be closed in 5 seconds (added: "+(new Date).toLocaleTimeString()+")",timeout:5e3})},n}(),B=function(){return function(){}}(),I=function(){return function(){}}(),z=function(){function n(){this.type="warning",this.dismissible=!1,this.dismissOnTimeout=void 0}return n.decorators=[{type:w.w}],n.ctorParameters=function(){return[]},n}(),F=t("NMz1"),N=this&&this.__decorate||function(n,l,t,e){var o,u=arguments.length,s=u<3?l:null===e?e=Object.getOwnPropertyDescriptor(l,t):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(n,l,t,e);else for(var r=n.length-1;r>=0;r--)(o=n[r])&&(s=(u<3?o(s):u>3?o(l,t,s):o(l,t))||s);return u>3&&s&&Object.defineProperty(l,t,s),s},E=this&&this.__metadata||function(n,l){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,l)},H=function(){function n(n,l){var t=this;this.changeDetection=l,this.type="warning",this.dismissible=!1,this.isOpen=!0,this.onClose=new w.r,this.onClosed=new w.r,this.classes="",this.dismissibleChange=new w.r,Object.assign(this,n),this.dismissibleChange.subscribe(function(n){t.classes=t.dismissible?"alert-dismissible":"",t.changeDetection.markForCheck()})}return n.prototype.ngOnInit=function(){var n=this;this.dismissOnTimeout&&setTimeout(function(){return n.close()},parseInt(this.dismissOnTimeout,10))},n.prototype.close=function(){this.isOpen&&(this.onClose.emit(this),this.isOpen=!1,this.changeDetection.markForCheck(),this.onClosed.emit(this))},n.decorators=[{type:w.l,args:[{selector:"alert,bs-alert",template:'<ng-template [ngIf]="isOpen"> <div [class]="\'alert alert-\' + type" role="alert" [ngClass]="classes"> <ng-template [ngIf]="dismissible"> <button type="button" class="close" aria-label="Close" (click)="close()"> <span aria-hidden="true">&times;</span> <span class="sr-only">Close</span> </button> </ng-template> <ng-content></ng-content> </div> </ng-template> ',changeDetection:w.i.OnPush}]}],n.ctorParameters=function(){return[{type:z},{type:w.j}]},n.propDecorators={type:[{type:w.z}],dismissible:[{type:w.z}],dismissOnTimeout:[{type:w.z}],isOpen:[{type:w.z}],onClose:[{type:w.K}],onClosed:[{type:w.K}]},N([Object(F.a)(),E("design:type",Object)],n.prototype,"dismissible",void 0),n}(),P=t("qbdv"),M=function(){function n(){}return n.forRoot=function(){return{ngModule:n,providers:[z]}},n.decorators=[{type:w.D,args:[{imports:[P.c],declarations:[H],exports:[H],entryComponents:[H]}]}],n.ctorParameters=function(){return[]},n}(),R=function(){return function(){}}(),L=t("SY0Y"),U=t("EWuz"),q=t("bZLq"),S=t("vN/N"),K=[{name:"Usage",anchor:"usage",outlet:L.a,content:{doc:t("gJdh")}},{name:"Examples",anchor:"examples",outlet:U.a,content:[{title:"Basic",anchor:"basic",description:'<p>Alerts are available for any length of text, as well as an optional dismiss\n          button. For proper styling, use one of the four <strong>required</strong>\n          contextual classes (e.g., <code>.alert-success</code>). For inline\n          dismissal, use the <a routerLink="." fragment="dismissing"><code>dismiss\n          property</code></a>.</p>',component:t("/AYY"),html:t("Sb8m"),outlet:v},{title:"Link color",anchor:"link-color",description:"<p>Use the <code>.alert-link</code> utility class to quickly provide matching\n          colored links within any alert.</p>",component:t("gwzB"),html:t("XODE"),outlet:O},{title:"Additional content",anchor:"additional-content",description:"<p>Alerts can also contain additional HTML elements like headings and\n          paragraphs.</p>",component:t("DXpI"),html:t("fGnF"),outlet:A},{title:"Dismissing",anchor:"dismissing",description:"<p>Alerts have <code>dismiss</code> option. Enabling it will show close button\n          to the right of the alert.</p>",component:t("ND8E"),html:t("rKpk"),outlet:T},{title:"Dynamic html",anchor:"dynamic-html",description:"<p>Sometimes you will need to show dynamically generated html in alerts, here\n          is how you can make it. And don't forget to sanitize your html.</p>",component:t("VkHi"),html:t("7Wkq"),outlet:j},{title:"Dynamic content",anchor:"dynamic-content",description:"<p>Alerts fully support bindings.</p>",component:t("C2y6"),html:t("uKBk"),outlet:W},{title:"Dismiss on timeout",anchor:"dismiss-on-timeout",description:"<p>You can simply set timeout in milliseconds to <code>dismissOnTimeout</code>\n          property to create self closable alerts.</p>",component:t("GsEN"),html:t("Xpf3"),outlet:Y},{title:"Global styling",anchor:"global-styling",description:"<p>You can add additional types of alerts globally.</p>",component:t("jQuK"),html:t("N674"),outlet:B},{title:"Component level styling",anchor:"local-styling",description:"<p>You can add additional types of alerts directly to containing component</p>",component:t("8mpx"),html:t("POqY"),outlet:I},{title:"Configuring defaults",anchor:"configuration",description:"<p>It is possible to override default alert config partially or completely.</p>",component:t("DP5p"),html:t("bt9e"),outlet:R}]},{name:"API Reference",anchor:"api-reference",outlet:q.a,content:[{title:"AlertComponent",anchor:"alert-component",outlet:S.b},{title:"AlertConfig",anchor:"alert-config",outlet:S.c}]}],G=function(){return function(){this.name="Alerts",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/alert",this.componentContent=K}}(),$=[{path:"",component:G}],X=function(){function n(){}return n.routes=$,n}(),Z=w._19({encapsulation:2,styles:[],data:{}}),J=w._17("alert,bs-alert",H,function(n){return w._45(0,[(n()(),w._22(0,null,null,1,"alert",[],null,null,null,s,Z)),w._20(114688,null,0,H,[z,w.j],null,null)],function(n,l){n(l,1,0)},null)},{type:"type",dismissible:"dismissible",dismissOnTimeout:"dismissOnTimeout",isOpen:"isOpen"},{onClose:"onClose",onClosed:"onClosed"},["*"]),V=t("urbl"),Q=t("QUTT"),nn=t("PJTy"),ln=t("v1cn"),tn=t("qEIf"),en=t("rNzy"),on=t("Jggs"),un=t("c+jj"),sn=t("LfeD"),rn=t("lgdf"),an=w._19({encapsulation:2,styles:[],data:{}}),cn=w._17("alert-section",G,function(n){return w._45(0,[(n()(),w._22(0,null,null,1,"alert-section",[],null,null,null,r,an)),w._20(49152,null,0,G,[],null,null)],null,null)},{},{},[]),pn=w._19({encapsulation:2,styles:[],data:{}}),mn=w._17("demo-alert-basic",v,function(n){return w._45(0,[(n()(),w._22(0,null,null,1,"demo-alert-basic",[],null,null,null,i,pn)),w._20(49152,null,0,v,[],null,null)],null,null)},{},{},[]),dn=w._19({encapsulation:2,styles:[],data:{}}),gn=w._17("demo-alert-link",O,function(n){return w._45(0,[(n()(),w._22(0,null,null,1,"demo-alert-link",[],null,null,null,a,dn)),w._20(49152,null,0,O,[],null,null)],null,null)},{},{},[]),_n=w._19({encapsulation:2,styles:[],data:{}}),fn=w._17("demo-alert-content",A,function(n){return w._45(0,[(n()(),w._22(0,null,null,1,"demo-alert-content",[],null,null,null,c,_n)),w._20(49152,null,0,A,[],null,null)],null,null)},{},{},[]),yn=w._19({encapsulation:2,styles:[],data:{}}),hn=w._17("demo-alert-dismiss",T,function(n){return w._45(0,[(n()(),w._22(0,null,null,1,"demo-alert-dismiss",[],null,null,null,m,yn)),w._20(49152,null,0,T,[],null,null)],null,null)},{},{},[]),bn=w._19({encapsulation:2,styles:[],data:{}}),kn=w._17("demo-alert-dynamic-html",j,function(n){return w._45(0,[(n()(),w._22(0,null,null,1,"demo-alert-dynamic-html",[],null,null,null,g,bn)),w._20(49152,null,0,j,[D.c],null,null)],null,null)},{},{},[]),Cn=w._19({encapsulation:2,styles:[],data:{}}),xn=w._17("demo-alert-content-html",W,function(n){return w._45(0,[(n()(),w._22(0,null,null,1,"demo-alert-content-html",[],null,null,null,y,Cn)),w._20(49152,null,0,W,[],null,null)],null,null)},{},{},[]),wn=w._19({encapsulation:2,styles:[],data:{}}),vn=w._17("demo-alert-timeout",Y,function(n){return w._45(0,[(n()(),w._22(0,null,null,1,"demo-alert-timeout",[],null,null,null,b,wn)),w._20(49152,null,0,Y,[],null,null)],null,null)},{},{},[]),On=w._19({encapsulation:2,styles:["\n  .alert-md-color {\n    background-color: #7B1FA2;\n    border-color: #4A148C;\n    color: #fff;\n  }\n"],data:{}}),An=w._17("demo-alert-styling-global",B,function(n){return w._45(0,[(n()(),w._22(0,null,null,1,"demo-alert-styling-global",[],null,null,null,k,On)),w._20(49152,null,0,B,[],null,null)],null,null)},{},{},[]),Tn=w._19({encapsulation:0,styles:["[_nghost-%COMP%]     .alert-md-local {\n    background-color: #009688;\n    border-color: #00695C;\n    color: #fff;\n  }"],data:{}}),Dn=w._17("demo-alert-styling-local",I,function(n){return w._45(0,[(n()(),w._22(0,null,null,1,"demo-alert-styling-local",[],null,null,null,C,Tn)),w._20(49152,null,0,I,[],null,null)],null,null)},{},{},[]),jn=w._19({encapsulation:2,styles:[],data:{}}),Wn=w._17("demo-alert-config",R,function(n){return w._45(0,[(n()(),w._22(0,null,null,2,"demo-alert-config",[],null,null,null,x,jn)),w._40(5120,null,z,e,[]),w._20(49152,null,0,R,[],null,null)],null,null)},{},{},[]),Yn=t("bm2B"),Bn=t("zNK2"),In=t("BkNc"),zn=t("5bcs"),Fn=t("W6cK"),Nn=t("yroR"),En=t("XH7w"),Hn=t("bqLD");t.d(l,"DemoAlertsModuleNgFactory",function(){return Pn});var Pn=w._18(X,[],function(n){return w._32([w._33(512,w.m,w._14,[[8,[J,V.a,Q.a,nn.a,ln.a,tn.a,en.a,cn,mn,gn,fn,hn,kn,xn,vn,An,Dn,Wn]],[3,w.m],w.G]),w._33(4608,P.p,P.o,[w.C]),w._33(4608,Yn.z,Yn.z,[]),w._33(4608,Bn.a,Bn.a,[P.i,In.n]),w._33(4608,zn.a,zn.a,[]),w._33(4608,Fn.a,Fn.a,[]),w._33(4608,z,z,[]),w._33(512,P.c,P.c,[]),w._33(512,M,M,[]),w._33(512,Nn.a,Nn.a,[]),w._33(512,Yn.w,Yn.w,[]),w._33(512,Yn.k,Yn.k,[]),w._33(512,S.d,S.d,[]),w._33(512,In.q,In.q,[[2,In.v],[2,In.n]]),w._33(512,U.b,U.b,[]),w._33(512,q.b,q.b,[]),w._33(512,L.b,L.b,[]),w._33(512,En.a,En.a,[]),w._33(512,Hn.a,Hn.a,[]),w._33(512,X,X,[]),w._33(1024,In.l,function(){return[[{path:"",component:G}]]},[])])})}});