(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{UJ0D:function(t,n,o){"use strict";o.r(n),o.d(n,"ProtectedModule",function(){return a});var e=o("ofXK"),r=o("tyNb"),s=o("fXoL"),c=o("N/25");const i=[{path:"",children:[{path:"",component:(()=>{class t{constructor(t,n){this.router=t,this.authService=n}get usuario(){return this.authService.usuario}ngOnInit(){}logout(){this.router.navigateByUrl("/auth/login"),this.authService.logout()}}return t.\u0275fac=function(n){return new(n||t)(s.Ib(r.a),s.Ib(c.a))},t.\u0275cmp=s.Cb({type:t,selectors:[["app-dashboard"]],decls:12,vars:3,consts:[[3,"click"]],template:function(t,n){1&t&&(s.Lb(0,"h1"),s.Zb(1,"Dashboard"),s.Kb(),s.Jb(2,"hr"),s.Lb(3,"p"),s.Zb(4,"Esta p\xe1gina solo funciona si est\xe1s autenticado"),s.Kb(),s.Lb(5,"h4"),s.Zb(6,"User Info"),s.Kb(),s.Lb(7,"pre"),s.Zb(8),s.Tb(9,"json"),s.Kb(),s.Lb(10,"button",0),s.Rb("click",function(){return n.logout()}),s.Zb(11,"Logout"),s.Kb()),2&t&&(s.yb(8),s.ac(s.Ub(9,1,n.usuario)))},pipes:[e.e],styles:["*[_ngcontent-%COMP%] {\n       margin: 15px;\n     }"]}),t})()},{path:"**",redirectTo:""}]}];let u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({imports:[[r.c.forChild(i)],r.c]}),t})(),a=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.Gb({type:t}),t.\u0275inj=s.Fb({imports:[[e.b,u]]}),t})()}}]);