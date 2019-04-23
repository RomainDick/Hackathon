(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["view-addProduct-Index-vue"],{"37ca":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"banner"},["home"==e.image?i("img",{attrs:{src:r("cd3f"),alt:""}}):e._e(),"login"==e.image?i("img",{attrs:{src:r("e3b7"),alt:""}}):e._e(),"search"==e.image?i("img",{attrs:{src:r("a24c"),alt:""}}):e._e(),"addProduct"==e.image?i("img",{attrs:{src:r("7518"),alt:""}}):e._e(),"productPage"==e.image?i("img",{attrs:{src:r("90c7"),alt:""}}):e._e(),"mesAnnonces"==e.image?i("img",{attrs:{src:r("d9b4"),alt:""}}):e._e(),"all"==e.image?i("img",{attrs:{src:r("ae57"),alt:""}}):e._e(),"account"==e.image?i("img",{attrs:{src:r("e680"),alt:""}}):e._e(),i("h1",{staticClass:"banner__title",domProps:{innerHTML:e._s(e.title)}})])},s=[],a={name:"Banner",props:{title:{type:String,default:""},image:{type:String,default:""}}},n=a,o=(r("63ad"),r("2877")),c=Object(o["a"])(n,i,s,!1,null,null,null);c.options.__file="Banner.vue";t["a"]=c.exports},"63ad":function(e,t,r){"use strict";var i=r("aabc"),s=r.n(i);s.a},7518:function(e,t,r){e.exports=r.p+"img/addProduct.b7186c20.jpg"},"7f7f":function(e,t,r){var i=r("86cc").f,s=Function.prototype,a=/^\s*function ([^ (]*)/,n="name";n in s||r("9e1e")&&i(s,n,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},"8c93":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"addProduct"},[r("Banner",{attrs:{title:"Ajouter une annonce",image:"addProduct"}}),r("Form")],1)},s=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"formProduct"},[r("div",{staticClass:"form"},[r("div",[r("label",{staticClass:"label"},[e._v("Titre du livre")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.item.title,expression:"item.title"}],attrs:{type:"text",name:"title",id:"title"},domProps:{value:e.item.title},on:{input:function(t){t.target.composing||e.$set(e.item,"title",t.target.value)}}}),e.errors.title?r("label",{staticClass:"error"},[r("br"),e._v(e._s(e.errors.title))]):e._e()]),r("div",[r("label",{staticClass:"label"},[e._v("Genre(s)")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.item.category,expression:"item.category"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.item,"category",t.target.multiple?r:r[0])}}},e._l(e.getCategories["hydra:member"],function(t,i){return r("option",{key:i,domProps:{value:t.id}},[e._v(e._s(t.name))])}),0),e.errors.category?r("label",{staticClass:"error"},[r("br"),r("br"),e._v(e._s(e.errors.category))]):e._e()]),r("div",[r("label",{staticClass:"label"},[e._v("Résume du livre")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.item.content,expression:"item.content"}],attrs:{name:"content",id:"content"},domProps:{value:e.item.content},on:{input:function(t){t.target.composing||e.$set(e.item,"content",t.target.value)}}}),e.errors.content?r("label",{staticClass:"error"},[r("br"),e._v(e._s(e.errors.content))]):e._e()]),r("div",[r("label",{staticClass:"label"},[e._v("Prix en €")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.item.price,expression:"item.price",modifiers:{number:!0}}],attrs:{type:"number",name:"price",id:"price",step:"1",min:"0"},domProps:{value:e.item.price},on:{input:function(t){t.target.composing||e.$set(e.item,"price",e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),e.errors.price?r("label",{staticClass:"error"},[r("br"),e._v(e._s(e.errors.price))]):e._e()]),r("div",[r("label",{staticClass:"label"},[e._v("Photo du livre")]),r("input",{ref:"file",attrs:{type:"file",name:"picture",id:"picture",accept:"image/bmp,image/gif,image/jpeg,image/png"},on:{change:function(t){e.createFile()}}}),e.errors.media?r("label",{staticClass:"error"},[r("br"),e._v(e._s(e.errors.media))]):e._e()]),this.getErrors.server?r("label",{staticClass:"error"},[r("br"),e._v("Erreur serveur")]):e._e(),r("br"),r("div",[r("input",{attrs:{type:"submit",value:"Envoyer"},on:{click:function(t){e.checkForm()}}})])])])},n=[],o=(r("7f7f"),r("6e87")),c={name:"Form",components:{},data:function(){return{errors:{title:null,category:null,content:null,price:null,media:null},media:{data:"",name:""},item:{title:null,content:null,price:0,user:null,media:null,category:null}}},computed:{getErrors:function(){return this.$store.getters.getErrors},getUserInfos:function(){return this.$store.getters.getUserInfos},getCategories:function(){return this.$store.getters.getCategories},getMedia:function(){return this.$store.getters.getMedia}},mounted:function(){this.$store.dispatch(o["e"])},methods:{createProduct:function(){this.item.user="/users/"+this.getUserInfos.id,this.item.category="/categories/"+this.item.category,this.$store.dispatch(o["b"],{item:this.item,token:this.getUserInfos.token,id:this.getUserInfos.id})},checkForm:function(){this.errors=[],this.item.title||(this.errors.title="Veuillez donner un titre à votre annonce.",this.errors.hasError=!0),this.item.category||(this.errors.category="Veuillez selectionner une categorie.",this.errors.hasError=!0),this.item.content||(this.errors.content="Veuillez donner le resumé de votre livre.",this.errors.hasError=!0),this.item.content.length>=255&&(this.errors.content="Veuillez réduire la taille du resumé de votre livre (255 caractères max).",this.errors.hasError=!0),this.item.price||(this.errors.price="Veuillez indiquer un prix.",this.errors.hasError=!0),this.media.data||(this.errors.media="Veuillez inserer une image.",this.errors.hasError=!0),this.errors.hasError||this.createMedia()},createMedia:function(){this.item.user="/users/"+this.getUserInfos.id,this.item.category="/categories/"+this.item.category,this.mediaIsCreated&&(this.$store.dispatch(o["a"],{media:this.media,item:this.item,token:this.getUserInfos.token,id:this.getUserInfos.id}),this.media=null),this.mediaIsCreated=!1},createFile:function(){var e=this;this.mediaIsCreated=!0;var t=this.$refs.file.files[0];this.media.name=t.name;var r=new FileReader;r.readAsDataURL(t),r.onloadend=function(){e.media.data=r.result}}}},l=c,u=(r("b6af"),r("2877")),m=Object(u["a"])(l,a,n,!1,null,"24f2b09c",null);m.options.__file="Form.vue";var d=m.exports,g=r("37ca"),p={name:"addProduct",components:{Form:d,Banner:g["a"]}},f=p,h=Object(u["a"])(f,i,s,!1,null,null,null);h.options.__file="Index.vue";t["default"]=h.exports},"90c7":function(e,t,r){e.exports=r.p+"img/productPage.45097e9c.jpg"},a24c:function(e,t,r){e.exports=r.p+"img/search.94e9b74d.jpg"},aabc:function(e,t,r){},ae57:function(e,t,r){e.exports=r.p+"img/all.d5d3b0f7.jpg"},b6af:function(e,t,r){"use strict";var i=r("b958"),s=r.n(i);s.a},b958:function(e,t,r){},cd3f:function(e,t,r){e.exports=r.p+"img/home.c0c534d5.jpg"},d9b4:function(e,t,r){e.exports=r.p+"img/mesAnnonces.b9133e76.jpg"},e3b7:function(e,t,r){e.exports=r.p+"img/login.75e5dae9.jpg"},e680:function(e,t,r){e.exports=r.p+"img/account.45097e9c.jpg"}}]);
//# sourceMappingURL=view-addProduct-Index-vue.a6b1426a.js.map