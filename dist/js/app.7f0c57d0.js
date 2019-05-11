(function(e){function t(t){for(var a,d,s=t[0],o=t[1],u=t[2],c=0,m=[];c<s.length;c++)d=s[c],i[d]&&m.push(i[d][0]),i[d]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(m.length)m.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(a=!1)}a&&(r.splice(t--,1),e=d(d.s=n[0]))}return e}var a={},i={app:0},r=[];function d(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=e,d.c=a,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)d.d(n,a,function(t){return e[t]}.bind(null,a));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/static/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=n("bb71");n("da64");a["default"].use(i["a"],{iconfont:"md"});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-card",[n("v-card-title",[n("h1",[e._v("User Credit")])]),n("v-card-text",[n("DataTable")],1)],1)],1)},d=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){t.on;return[n("v-btn",{on:{click:function(t){return e.newItem()}}},[e._v("Add New User")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[-1==this.editedIndex?n("span",[e._v("New User")]):n("span",[e._v("User "+e._s(e.editedItem.student_number))])]),n("v-card-text",[n("v-container",[n("v-flex",[-1==this.editedIndex?n("v-text-field",{attrs:{label:"RFID Serial Number"},model:{value:e.editedItem.rfid_number,callback:function(t){e.$set(e.editedItem,"rfid_number",t)},expression:"editedItem.rfid_number"}}):e._e()],1),n("v-flex",[n("v-text-field",{attrs:{label:"Student Number"},model:{value:e.editedItem.student_number,callback:function(t){e.$set(e.editedItem,"student_number",t)},expression:"editedItem.student_number"}})],1),n("v-flex",[n("v-text-field",{attrs:{label:"Name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),n("v-flex",[n("v-text-field",{attrs:{label:"Balance",suffix:"seconds"},model:{value:e.editedItem.balance,callback:function(t){e.$set(e.editedItem,"balance",t)},expression:"editedItem.balance"}})],1)],1)],1),n("v-card-actions",[n("v-btn",{on:{click:function(t){return e.close()}}},[e._v("Cancel")]),n("v-btn",{staticClass:"green",on:{click:function(t){return e.submitItem()}}},[e._v("Submit")])],1)],1)],1),n("v-data-table",{attrs:{headers:e.headers,items:e.users},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",[e._v(e._s(t.item.rfid_number))]),n("td",[e._v(e._s(t.item.student_number))]),n("td",[e._v(e._s(t.item.name))]),n("td",[e._v(e._s(e.formatTime(t.item.balance)))]),n("td",[n("v-icon",{attrs:{color:e.isUsingColor(t.item.is_using)}},[e._v(e._s(e.isUsingIcon(t.item.is_using)))])],1),n("td",[n("v-icon",{attrs:{color:"green"},on:{click:function(n){return e.editItem(t.item)}}},[e._v("edit")]),n("v-icon",{attrs:{color:"red"},on:{click:function(n){return e.deleteItem(t.item)}}},[e._v("delete")])],1)]}}])})],1)},o=[],u=(n("7f7f"),{name:"DataTable",data:function(){return{dialog:!1,editedIndex:-1,editedItem:{student_number:0,name:"",rfid_number:0,balance:0},defaultItem:{student_number:0,balance:0},headers:[{text:"RFID Number",align:"left",sortable:!0,value:"rfid_number"},{text:"Student Number",align:"left",sortable:!0,value:"student_number"},{text:"Student Name",align:"left",sortable:!0,value:"name"},{text:"Balance",align:"left",sortable:!0,value:"balance"},{text:"In Use",align:"left",sortable:!0,value:"is_using"},{text:"Actions",align:"left",sortable:!1,value:"student_number"}],users:[]}},mounted:function(){this.getItems()},methods:{isUsingIcon:function(e){return e?"power":"power_off"},isUsingColor:function(e){return e?"blue":"#424242"},getItems:function(){var e=this;this.$http.get("/students").then(function(t){e.users=t.data}).catch(function(e){console.log(e)})},formatTime:function(e){var t=parseInt(e/3600),n=parseInt(e%3600/60),a=e%60;return t=(t<10?"0":"")+t,n=(n<10?"0":"")+n,a=(a<10?"0":"")+a,t+":"+n+":"+a},newItem:function(){this.editedIndex=-1,this.editedItem.student_number="0",this.editedItem.balance=0,this.dialog=!0},editItem:function(e){this.editedIndex=this.users.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},close:function(){this.editedItem=Object.assign({},{student_number:0,name:"",rfid_number:0,balance:0}),this.dialog=!1},submitItem:function(){var e=this;this.editedIndex>-1?this.$http.patch("/students/".concat(this.editedItem.rfid_number,"/"),{name:this.editedItem.name,balance:this.editedItem.balance,rfid_number:this.editedItem.rfid_number}).then(function(t){e.getItems(),console.log(t)}).catch(function(e){console.log(e)}):this.$http.post("/students/",{student_number:this.editedItem.student_number,name:this.editedItem.name,balance:this.editedItem.balance,rfid_number:this.editedItem.rfid_number}).then(function(t){e.getItems(),console.log(t)}).catch(function(e){console.log(e)}),this.editedItem=Object.assign({},{student_number:0,name:"",rfid_number:0,balance:0}),this.close()},deleteItem:function(e){var t=this;confirm("Are you sure you want to delete account number "+e.student_number+"?")&&this.$http.delete("/students/".concat(e.rfid_number,"/")).then(function(e){console.log(e),t.getItems()}).catch(function(e){console.log(e)})}}}),l=u,c=n("2877"),m=n("6544"),f=n.n(m),b=n("8336"),v=n("b0af"),p=n("99d9"),h=n("12b2"),_=n("a523"),I=n("8fea"),g=n("169a"),x=n("0e8f"),y=n("132d"),w=n("2677"),k=Object(c["a"])(l,s,o,!1,null,"0102e952",null),O=k.exports;f()(k,{VBtn:b["a"],VCard:v["a"],VCardActions:p["a"],VCardText:p["b"],VCardTitle:h["a"],VContainer:_["a"],VDataTable:I["a"],VDialog:g["a"],VFlex:x["a"],VIcon:y["a"],VTextField:w["a"]});var V={name:"App",components:{DataTable:O},data:function(){return{}}},T=V,j=n("7496"),C=Object(c["a"])(T,r,d,!1,null,null,null),S=C.exports;f()(C,{VApp:j["a"],VCard:v["a"],VCardText:p["b"],VCardTitle:h["a"]});var $=n("ce5b"),U=n.n($),N=(n("bf40"),n("bc3a")),D=n.n(N);a["default"].prototype.$http=D.a,D.a.defaults.baseURL="/api/",a["default"].config.productionTip=!1,a["default"].use(U.a),new a["default"]({render:function(e){return e(S)}}).$mount("#app")}});
//# sourceMappingURL=app.7f0c57d0.js.map