(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{331:function(t,e,n){"use strict";n.r(e);var l=n(36),o=n(0),r=n(343),d=o.a.extend({props:{expansionPanelText:{type:String,required:!0}},data:function(){return{showDetails:!1,mdiChevronRight:l.d}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){r.a.$emit(r.b,{dataView:this.$parent})}}}),c=(n(338),n(8)),f=n(32),w=n.n(f),h=n(582),x=n(583),m=n(584),v=n(585),_=n(321),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return this.$slots.notes?n("div",{staticClass:"NotesExpansionPanel"},[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon grey--text text--darken-2"},[n("v-icon",{attrs:{left:"",size:"24"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text grey--text text--darken-2"},[t._v("\n          "+t._s(t.expansionPanelText)+"\n        ")])]),t._v(" "),n("v-expansion-panel-content",{staticClass:"grey--text text--darken-2"},[t._t("notes")],2)],1)],1):[t._t("notes")]],2):t._e()}),[],!1,null,null,null);e.default=component.exports;w()(component,{VExpansionPanel:h.a,VExpansionPanelContent:x.a,VExpansionPanelHeader:m.a,VExpansionPanels:v.a,VIcon:_.a})},334:function(t,e,n){var content=n(339);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("56069591",content,!0,{sourceMap:!1})},338:function(t,e,n){"use strict";n(334)},339:function(t,e,n){(e=n(19)(!1)).push([t.i,".v-expansion-panels{color:#4d4d4d!important}.v-expansion-panel-header{padding:5px 0}.v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{font-size:1.2rem}",""]),t.exports=e},362:function(t,e,n){"use strict";n.r(e);n(59),n(72),n(61);var l=n(0),o=n(73),r=n(332),d=n(333),c=n(377),f=n(331),w={components:{AppLink:o.default,DataView:r.default,DataViewDataSetPanel:d.default,DataViewExpansionPanel:c.default,NotesExpansionPanel:f.default},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},date:{type:String,required:!0,default:""},items:{type:Array,required:!0,default:function(){}}},mounted:function(){var t=this.$refs.displayedTable.$el.querySelectorAll("table");Array.prototype.slice.call(t,0).forEach((function(table){table.setAttribute("tabindex","0")}))}},h=l.a.extend(w),x=(n(398),n(8)),m=n(32),v=n.n(m),_=n(590),component=Object(x.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"notes",fn:function(){return[n("notes-expansion-panel",{staticClass:"DataView-ExpansionPanel",attrs:{"expansion-panel-text":t.$t("Common.注")},scopedSlots:t._u([{key:"notes",fn:function(){return[t._t("notes")]},proxy:!0}],null,!0)})]},proxy:!0},{key:"dataSetPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{title:t.title}})]},proxy:!0}])},[n("div",{staticClass:"WhatsNew-Content"},[n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{items:t.items,height:350,"items-per-page":100,"mobile-breakpoint":0,"hide-default-header":"","hide-default-footer":""},scopedSlots:t._u([{key:"body",fn:function(e){var l=e.items;return[n("tbody",t._l(l,(function(e,i){return n("tr",{key:i},[n("td",{staticClass:"text-start"},[e.url?[n("app-link",{attrs:{to:e.url,"show-icon":!1}},[t._v("\n                  "+t._s(e.icon)+"\n                  "+t._s(e.text)+"\n                ")])]:[t._v("\n                "+t._s(e.text)+"\n              ")]],2),t._v(" "),n("td",{staticClass:"text-end text-no-wrap"},[n("span",[t._v(t._s(e.date))])])])})),0)]}}])})],1)])}),[],!1,null,null,null);e.default=component.exports;v()(component,{AppLink:n(73).default,NotesExpansionPanel:n(331).default,DataViewDataSetPanel:n(333).default,DataView:n(332).default}),v()(component,{VDataTable:_.a})},376:function(t,e,n){var content=n(399);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("0ffcf5da",content,!0,{sourceMap:!1})},398:function(t,e,n){"use strict";n(376)},399:function(t,e,n){(e=n(19)(!1)).push([t.i,".WhatsNew-Content .cardTable table tbody tr td{padding:10px!important;font-size:1.2rem}",""]),t.exports=e},464:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020-07-31T00:00:00+09:00","icon":"🍀","url":{"ja":"https://www.pref.iwate.jp/kurashikankyou/iryou/covid19/1032521.html","en":null},"text":{"ja":"人権に配慮し、差別・偏見・誹謗中傷はやめましょう","en":null}},{"date":"2020-11-29T00:00:00+09:00","icon":"📺","url":{"ja":"https://www.youtube.com/watch?v=ewGUZq-Ku-c","en":null},"text":{"ja":"盛岡市保健所 矢野所長 メッセージ (記者会見)","en":null}},{"date":"2020-12-04T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.iwate.jp/kurashikankyou/iryou/kenkou/jouhou/1035134.html","en":null},"text":{"ja":"岩手県新型コロナウイルス感染症対策本部 第25回本部員会議","en":null}},{"date":"2020-12-04T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.mext.go.jp/content/20201203-mxt_kouhou01-000004520_01.pdf","en":null},"text":{"ja":"文部科学省「学校の新しい生活様式」がVer.5に改訂","en":null}},{"date":"2020-12-04T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.iwate.jp/_res/projects/default_project/_page_/001/035/134/20201204_06_1.pdf","en":null},"text":{"ja":"岩手県新型コロナウイルス感染症対策本部 第25回本部員会議 その他資料 (「学校の新しい生活様式」Ver.5の変更内容p61-65に基づいて、学校で感染者が発生した場合でも直ちに臨時休業をしない)","en":null}},{"date":"2020-12-08T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.iwate.jp/_res/projects/default_project/_page_/001/034/435/20201022dai6kai.pdf","en":null},"text":{"ja":"いわて医療福祉施設等クラスター制御タスクフォース(ICAT)とは","en":null}},{"date":"2020-12-24T00:00:00+09:00","icon":"🔍","url":{"ja":"https://www.pref.iwate.jp/kurashikankyou/iryou/covid19/1036186.html","en":null},"text":{"ja":"ステラ（スナック）(一関市大町1-22ツインズビル2F)を12/18〜12/22に利用した人は一関保健所(0191-26-1415)に連絡を","en":null}},{"date":"2020-12-30T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.wakayama.lg.jp/chiji/message/20201228.html","en":null},"text":{"ja":"他県に学ぶ (和歌山県知事 メッセージ / 対コロナ政策の技術解説)","en":null}},{"date":"2020-12-30T00:00:00+09:00","icon":"📺","url":{"ja":"https://www.pref.iwate.jp/kurashikankyou/iryou/kenkou/jouhou/1036257.html","en":null},"text":{"ja":"岩手県知事 メッセージ / 往来は慎重に・三密回避・基本対策の徹底 (前回と同じ内容の繰り返し)","en":null}},{"date":"2021-01-05T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/covid19-jihikensa_00001.html","en":null},"text":{"ja":"自費検査を提供する機関一覧(厚生労働省)","en":null}},{"date":"2021-01-07T00:00:00+09:00","icon":"📄","url":{"ja":"https://corona.go.jp/emergency/","en":null},"text":{"ja":"緊急事態宣言まとめ(内閣官房)","en":null}},{"date":"2021-01-08T00:00:00+09:00","icon":"📄","url":{"ja":"https://www.pref.iwate.jp/kurashikankyou/iryou/kenkou/jouhou/1035134.html","en":null},"text":{"ja":"岩手県 新型コロナウイルス感染症対策本部 第26回 本部員会議","en":null}}]}')},492:function(t,e,n){"use strict";n.r(e);n(35);var l=n(12),o=n.n(l),r=n(0),d=n(362),c=n(464),f={components:{WhatsNew:d.default},data:function(){var t=this,e={newsItems:[]};return e.newsItems=c.newsItems.sort((function(a,b){return o()(a.date).isBefore(o()(b.date))?1:-1})).map((function(e){var n,l,r=t.$i18n.locale;return{date:t.$d(o()(e.date).toDate(),"dateWithoutYear"),icon:e.icon,text:null!==(n=e.text[r])&&void 0!==n?n:e.text.ja,url:null!==(l=e.url[r])&&void 0!==l?l:e.url.ja}})),{newsItems:e,date:o()(c.newsItems.sort((function(a,b){return o()(a.date).isBefore(o()(b.date))?1:-1}))[0].date).format()}}},w=r.a.extend(f),h=n(8),x=n(32),m=n.n(x),v=n(588),component=Object(h.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{id:"WhatsNewCard",cols:"12",md:"6"}},[e("client-only",[e("whats-new",{attrs:{title:this.$t("WhatsNew.title"),"title-id":"whats-new",date:this.date,items:this.newsItems.newsItems}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{WhatsNew:n(362).default}),m()(component,{VCol:v.a})}}]);