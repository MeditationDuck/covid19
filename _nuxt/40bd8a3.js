(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{357:function(t,e,n){var content=n(381);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("4778035a",content,!0,{sourceMap:!1})},363:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{iconPath:{type:String,required:!1,default:""}}}),o=(n(380),n(8)),d=n(32),c=n.n(d),l=n(321),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.iconPath?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.iconPath)+"\n    ")]):this._e(),this._v(" "),this._t("pageHeader")],2)])}),[],!1,null,"c07f27fc",null);e.default=component.exports;c()(component,{VIcon:l.a})},380:function(t,e,n){"use strict";n(357)},381:function(t,e,n){(e=n(19)(!1)).push([t.i,".header[data-v-c07f27fc]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-c07f27fc]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400;margin:0 .5em 0 0}@media screen and (max-width:600px){.pageTitle[data-v-c07f27fc]{font-size:2rem}}",""]),t.exports=e},475:function(t,e,n){var content=n(564);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("17faccc4",content,!0,{sourceMap:!1})},563:function(t,e,n){"use strict";n(475)},564:function(t,e,n){(e=n(19)(!1)).push([t.i,".MainPage .Header[data-v-6e200d58]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width:600px){.MainPage .Header[data-v-6e200d58]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-6e200d58]{font-size:1.4rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-6e200d58]{font-size:1.2rem;color:#707070}@media screen and (min-width:601px){.MainPage .Annotation[data-v-6e200d58]{margin:0 0 0 auto}}",""]),t.exports=e},596:function(t,e,n){"use strict";n.r(e);var r=n(36),o=n(0),d=n(363),c=n(355),l=n(123),f=o.a.extend({components:{PageHeader:d.default},data:function(){var t=c.lastUpdate;return{headerItem:{iconPath:r.b,title:this.$t("Common.岩手の最新感染動向")},lastUpdate:t}},head:function(){return{title:this.$t("Common.岩手の最新感染動向")}},computed:{updatedAt:function(){return Object(l.c)(this.$data.lastUpdate)},formattedDateForDisplay:function(){return"".concat(this.$d(new Date(this.$data.lastUpdate),"dateTime")," JST")}}}),h=(n(563),n(8)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{"icon-path":t.headerItem.iconPath},scopedSlots:t._u([{key:"pageHeader",fn:function(){return[t._v("\n        "+t._s(t.headerItem.title)+"\n      ")]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.formattedDateForDisplay))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja"].includes(t.$i18n.locale),expression:"!['ja'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈")))])])],1),t._v(" "),n("lazy-static-info",{staticClass:"mb-4",attrs:{url:t.localePath("/flow"),text:t.$t("自分や家族の症状に不安や心配があればまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}})],1)}),[],!1,null,"6e200d58",null);e.default=component.exports;installComponents(component,{PageHeader:n(363).default,LazyStaticInfo:function(){return n.e(14).then(n.bind(null,598)).then((function(t){return t.default||t}))}})}}]);