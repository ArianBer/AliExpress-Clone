(this["webpackJsonpmy-shop"]=this["webpackJsonpmy-shop"]||[]).push([[0],{11:function(e,t,c){},42:function(e){e.exports=JSON.parse('{"data":[{"name":"Women\'s Fashion","position":"-3780px","id":1},{"name":"Men\'s Fashion","position":"-2807px","id":2},{"name":"Phones & Telecommunications","position":"-2999px","id":3},{"name":"Computer","position":"-675px","id":4},{"name":"Consumer Electronics","position":"-763px","id":5},{"name":"Jewelry","position":"-1697px","id":6},{"name":"Home","position":"-1449px","id":7},{"name":"Bags","position":"-399px","id":8},{"name":"Toys","position":"-1785px","id":9},{"name":"Outdoor Fun & Sports","position":"-3504px","id":10},{"name":"Beauty, Health","position":"-487px","id":11},{"name":"Automobiles & Motorcycles","position":"-311px","id":12}]}')},51:function(e,t,c){},87:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(17),a=c.n(n),r=(c(51),c(12)),o=c(4),j=(c(11),c(15),c(22)),l=c(23),d=c(32),m=c(39),b=c(40),h=c(46),O=c(45),p=c(41),x=c.n(p),u=c.p+"static/media/banner1.6284a067.png",g=c.p+"static/media/banner2.5956b771.png",v=c.p+"static/media/banner3.b624f0b1.png",f=c.p+"static/media/banner4.4afa482a.png",S=c(0),N=function(e){Object(h.a)(c,e);var t=Object(O.a)(c);function c(){return Object(m.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){return Object(S.jsxs)(x.a,Object(d.a)(Object(d.a)({},{className:"",dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0}),{},{children:[Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:u})}),Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:g})}),Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:v})}),Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:f})})]}))}}]),c}(s.Component),T=c(42),L=c.p+"static/media/icons.ead3d868.png",y=c(7),A=c(14),k=c.n(A);var C=function(){return Object(S.jsxs)("div",{className:"ranking-loading",children:[Object(S.jsx)("p",{style:{width:"100%"},children:Object(S.jsx)(k.a,{duration:1,count:4,width:"125px",height:"120px"})}),Object(S.jsx)("div",{style:{width:"100%"},children:Object(S.jsx)(k.a,{duration:1,count:4,width:"125px",height:"20px"})})]})};function w(){var e=Object(s.useState)([""]),t=Object(y.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(!0),a=Object(y.a)(n,2),r=a[0],o=a[1];return Object(s.useEffect)((function(){fetch("https://cryptic-headland-94862.herokuapp.com/https://fakestoreapi.com/products?limit=4",{method:"GET",mode:"cors",headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){i(e),o(!1)}))}),[]),Object(S.jsx)("div",{className:"ranking-wrapper",children:r?Object(S.jsx)(C,{}):c.map((function(e){return Object(S.jsxs)("div",{className:"ranking-products",children:[Object(S.jsx)("div",{className:"ranking-image",children:Object(S.jsx)("img",{src:e.image})}),Object(S.jsx)("div",{className:"ranking-title",children:Object(S.jsx)("h5",{children:e.title})})]},e.id)}))})}var M=c(43),B=c.n(M),H=c(24),D=c(25),W=Object(D.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),R=W.actions,E=R.login,F=(R.logout,W.reducer),U=function(){var e=Object(s.useState)(!1),t=Object(y.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(""),a=Object(y.a)(n,2),r=a[0],o=a[1],j=Object(s.useState)(""),l=Object(y.a)(j,2),d=l[0],m=l[1],b=Object(s.useState)(!1),h=Object(y.a)(b,2),O=h[0],p=h[1];var x=Object(H.b)();return Object(S.jsxs)("div",{children:[Object(S.jsx)("button",{onClick:function(){i(!0)},children:"Sign in"}),Object(S.jsx)(B.a,{isOpen:c,onRequestClose:function(){i(!1)},style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",width:450,borderRadius:8}},contentLabel:"Example Modal",children:Object(S.jsxs)("div",{className:"modal-login",children:[Object(S.jsx)("div",{className:"modal-logo",children:Object(S.jsx)("img",{src:"https://ae01.alicdn.com/kf/H499c11b7e0094a2294b33e4af09ebea34.png"})}),Object(S.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),fetch("https://reqres.in/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:d})}).then((function(e){e.json().then((function(e){console.log("result",e),e.error?p(e.error):(localStorage.setItem("login",JSON.stringify({token:e.token,login:!0})),x(E({email:r,password:d,isSignedIn:!0})),i(!1))}))}))}(e)},children:[Object(S.jsx)("input",{type:"email",name:"email",className:"modal-input",placeholder:"Email address or member ID",onChange:function(e){return o(e.target.value)},value:r}),Object(S.jsx)("input",{type:"password",name:"password",className:"modal-input",placeholder:"Password",onChange:function(e){return m(e.target.value)},value:d}),Object(S.jsx)("input",{type:"submit",className:"modal-submit",disabled:function(){return r.length>0&&d.length>0},value:"Sign In"})]}),O?Object(S.jsx)("div",{className:"error",children:Object(S.jsx)("p",{children:O})}):null,Object(S.jsx)("p",{className:"forgot-password",children:Object(S.jsx)("a",{href:"#",children:"Forgot Password?"})})]})})]})};function q(){var e=Object(s.useState)(!1),t=Object(y.a)(e,2),c=t[0],i=t[1];Object(s.useEffect)((function(){n()}),[]);var n=function(){var e=JSON.parse(localStorage.getItem("login"));e&&e.login&&i(!0)};return console.log(c),Object(S.jsxs)("div",{className:"main",children:[Object(S.jsx)("div",{className:"user",children:c?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("img",{src:"https://ae01.alicdn.com/kf/Hf768b4fa794e44bfb7cc86e4a528a035h.png"}),Object(S.jsx)("h5",{children:"Welcome Arian"})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("img",{src:"https://ae01.alicdn.com/kf/Hf768b4fa794e44bfb7cc86e4a528a035h.png"}),Object(S.jsx)("h5",{children:"Welcome to AliExpress"})]})}),Object(S.jsxs)("div",{className:"buttons",children:[Object(S.jsx)("button",{children:"Join"}),Object(S.jsx)(U,{})]})]})}function X(){return Object(S.jsxs)("div",{className:"first-screen",children:[Object(S.jsxs)("div",{className:"categories",children:[Object(S.jsx)("div",{className:"categories-title",children:Object(S.jsxs)("a",{href:"#",children:[Object(S.jsx)(j.a,{icon:l.b,color:"#000",size:"1x"}),Object(S.jsx)("h3",{children:"Categories"})]})}),Object(S.jsx)("div",{className:"categories-list-box",children:Object(S.jsx)("ul",{children:T.data.map((function(e){return Object(S.jsx)("a",{href:"#",children:Object(S.jsxs)("li",{className:"item",children:[Object(S.jsx)("div",{className:"categories-icon",style:{backgroundImage:"url(".concat(L,")"),backgroundPosition:"0 ".concat(e.position)}}),Object(S.jsx)("div",{className:"categories-name",style:{width:"100%",paddingLeft:5,fontSize:"14px"},children:e.name})]})})}))})})]}),Object(S.jsxs)("div",{className:"advertise",children:[Object(S.jsx)("div",{className:"banner",children:Object(S.jsx)(N,{})}),Object(S.jsx)("div",{className:"ranking",children:Object(S.jsx)(w,{})})]}),Object(S.jsx)("div",{className:"account-main",children:Object(S.jsx)(q,{})})]})}var V=function(){return Object(S.jsxs)("div",{className:"ranking-loading",children:[Object(S.jsx)("p",{style:{width:"100%"},children:Object(S.jsx)(k.a,{duration:1,count:15,width:"225px",height:"200px"})}),Object(S.jsx)("div",{style:{width:"100%"},children:Object(S.jsx)(k.a,{duration:1,count:15,width:"125px",height:"20px"})})]})};function P(){var e=Object(s.useState)([""]),t=Object(y.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(!0),a=Object(y.a)(n,2),o=a[0],j=a[1];return Object(s.useEffect)((function(){fetch("https://cryptic-headland-94862.herokuapp.com/https://fakestoreapi.com/products",{method:"GET",mode:"cors",headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){i(e),j(!1)}))}),[]),Object(S.jsxs)("div",{className:"second-screen",children:[Object(S.jsx)("div",{className:"section-title",children:Object(S.jsx)("h2",{children:"More to Love"})}),Object(S.jsx)("ul",{className:"products",children:o?Object(S.jsx)(V,{}):c.map((function(e){return Object(S.jsx)("li",{className:"product-item",children:Object(S.jsxs)(r.b,{to:"/"+e.id,children:[Object(S.jsx)("div",{className:"product-image",children:Object(S.jsx)("img",{src:e.image})}),Object(S.jsxs)("div",{className:"product-content",children:[Object(S.jsx)("h5",{className:"product-title",children:e.title}),Object(S.jsxs)("h4",{className:"product-price",children:[e.price,"$"]})]})]})})}))})]})}var G=function(){return Object(S.jsx)("div",{className:"home-page",children:Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)(X,{}),Object(S.jsx)(P,{})]})})};var I=function(){return Object(S.jsx)("div",{})};var J=function(){return Object(S.jsx)("div",{children:"Hello from search"})};var z=function(e){return Object(S.jsx)("div",{className:"single",children:Object(S.jsx)("div",{className:"product-main",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"product",children:[Object(S.jsx)("div",{className:"product-image",children:Object(S.jsx)("img",{src:"https://ae01.alicdn.com/kf/Hf97ee816f6744ca180dcc4814115edb8l/World-Premiere-In-Stock-Global-Version-Xiaomi-Redmi-Note-10-Smartphone-Snapdragon-678-AMOLED-Display.jpg_Q90.jpg_.webp"})}),Object(S.jsxs)("div",{className:"product-content",children:[Object(S.jsx)("div",{className:"product-title",children:Object(S.jsx)("h3",{children:"Shoes for man only so cheapp"})}),Object(S.jsx)("div",{className:"product-price",children:Object(S.jsx)("h3",{children:"US $895.00 - 1,408.35"})}),Object(S.jsxs)("div",{className:"product-ships",children:[Object(S.jsx)("div",{children:"Ships from:"}),Object(S.jsx)("button",{children:"China"}),Object(S.jsx)("button",{children:"Spain"})]}),Object(S.jsxs)("div",{className:"product-colors",children:[Object(S.jsx)("div",{children:"Color:"}),Object(S.jsxs)("ul",{className:"images",children:[Object(S.jsx)("li",{children:Object(S.jsx)("img",{src:"https://ae01.alicdn.com/kf/Hb30ba1e9981c4145bf08426983f8556bT/World-Premiere-In-Stock-Global-Version-Xiaomi-Redmi-Note-10-Smartphone-Snapdragon-678-AMOLED-Display.jpg_50x50.jpg_.webp"})}),Object(S.jsx)("li",{children:Object(S.jsx)("img",{src:"https://ae01.alicdn.com/kf/Hb30ba1e9981c4145bf08426983f8556bT/World-Premiere-In-Stock-Global-Version-Xiaomi-Redmi-Note-10-Smartphone-Snapdragon-678-AMOLED-Display.jpg_50x50.jpg_.webp"})}),Object(S.jsx)("li",{children:Object(S.jsx)("img",{src:"https://ae01.alicdn.com/kf/Hb30ba1e9981c4145bf08426983f8556bT/World-Premiere-In-Stock-Global-Version-Xiaomi-Redmi-Note-10-Smartphone-Snapdragon-678-AMOLED-Display.jpg_50x50.jpg_.webp"})}),Object(S.jsx)("li",{children:Object(S.jsx)("img",{src:"https://ae01.alicdn.com/kf/Hb30ba1e9981c4145bf08426983f8556bT/World-Premiere-In-Stock-Global-Version-Xiaomi-Redmi-Note-10-Smartphone-Snapdragon-678-AMOLED-Display.jpg_50x50.jpg_.webp"})}),Object(S.jsx)("li",{children:Object(S.jsx)("img",{src:"https://ae01.alicdn.com/kf/Hb30ba1e9981c4145bf08426983f8556bT/World-Premiere-In-Stock-Global-Version-Xiaomi-Redmi-Note-10-Smartphone-Snapdragon-678-AMOLED-Display.jpg_50x50.jpg_.webp"})}),Object(S.jsx)("li",{children:Object(S.jsx)("img",{src:"https://ae01.alicdn.com/kf/Hb30ba1e9981c4145bf08426983f8556bT/World-Premiere-In-Stock-Global-Version-Xiaomi-Redmi-Note-10-Smartphone-Snapdragon-678-AMOLED-Display.jpg_50x50.jpg_.webp"})})]})]}),Object(S.jsx)("div",{className:"product-quantity",children:Object(S.jsx)("h3",{children:"Shoes for man only so cheapp"})}),Object(S.jsx)("div",{className:"buttons",children:Object(S.jsx)("h3",{children:"Shoes for man only so cheapp"})})]}),Object(S.jsx)("div",{className:"may-like"})]})})})})};var Z=function(){return Object(S.jsx)("div",{})};function Q(){return Object(S.jsx)("div",{className:"header",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"header-main",children:[Object(S.jsx)("div",{className:"logo",children:Object(S.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAoCAMAAABD7HHtAAAAn1BMVEUAAADmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgTmLgQMedD3AAAANHRSTlMAUOEwD5Bg8XAfA6DRBwv5sPvowSMUR0Iau4k1K9y1q/XXeXZmOyftmMeUfVxXzaWCbEybvvzF9gAABMtJREFUWMPtlmmT2jAMhgVJYBNIyElCgHDf18L6//+2SnZsh1BmaGc6Szt9v2B7ZfuRLGkD/5Bs+BtkWvA3aNl04Y1k23YCWp5pmnw5ZJ/065r3cuBbNGSMRaBlMdbEn7SJ6xYCN9i9UvgWbRlqXcNsRYKpna/fA9NrM1T+EM1GiMuX7F2ieWSk0KljQrxhewCBuWhpZfAdGjBWBIzdHjDhI/Qk5rd30BghVj5j/iNmsoe3wfxkbAw3xoLkARNuv4HpjlZDD+py1qkyiFdr9746RmJFG68Ms7a/ydgcnBDTr46ZWlb+c8xs4vsddbCJs4spTjsNegzVnctroig6gXHBMhWMrSjAv/f8vq4NvjK9rGV/nExxHkQNqKiPK1gTOR5dx/zAdvQkmnNc2sqJj5MWH43OTGpzBC4cHi6MxBFmyqBIRGJFcqF3BVKuLCaVR5ngBvxZ4/LwdUwoFBoscPjFR2mbVZRLzIBJzEaPaY2J04kIsBuFtPJBAeB/irg7A9V9EtzIo7uj8LyOaTbxnUacDSm6Lo8lPdZsabvJDZ0vs0hG5oTGK6LsXg17lZNDUXn21qRXHbPggOfiGbuY4oaB8FU4r/g8/I4WMnnPMQe+1FeZQXjlGM/PQrSKeV520c5yyuJDjsCQmE0agdfEtYUwsMn4BLAnWq7EN2gfel/W8v4ISmht8QG5cXyOqdWUn08UI/FoItlbKl9lkIsSM7ShPI9dVRWiH2fMOb1HHtKEBxm4cySGHfTrRUy1gX3kKgkpbULv/kshE5hlzc7wUe6r0Ka72qu7iqZkqWtPLgmt0CB+ijnpSOWq23VFdUSOeDQcfoLWSBQZFYRYsHHYB6U1n6a8VFqxOnRD+T0fOnetGCO/lJMxXvNyCZFiXthhpt1MoSJM2j3H3OpAdSsSbliMK7y08CV0M5gOFvrKUzVOM6RzXsPUiaQD1FD5o9O+wzHn6hOnrhbleFhO2iJgw105D7ae+uqoqf8rmE7BUJ0K5hAqGkvMD2XwiIly0nyHyaMNR4tiyucDmS11TX4F88C4lpriCFpeD5OoimlQ8rbupFPy5lObT1QEhjk9/kre02tqhWT4OmY/wPob4x5DYU5Ai+ZpFdNpU1N4qrn6v6Yb84f86jhUCwqr7PoyZobWG9vgXV5Y3b26i6kZugJTt6hp/BTTFVmsNShLOq1dT3zdVzHdHaWyKCNfYTYz+Wod3gDvMGN0aZZIgzwVbyI/hBLR/G3VNXcl9kW3W93qhj/HXDYqMoUvwtkvioKqkLAhiKg4u67C1MncFAajiAVXWgp6S+1XCv0N63iqMVCumz36ryqkHdj/DLMmA1uZ+oBxz4wFqbBqU2/eL/JBQMQx1DCdCUONtwdrxwcmJSB180ZjMSO/HG9MG61Tf1lQSWXqq+NOS7zJfQVzPUWbRHf5MONWq7E2msWgMBXnnmmdEYKip9Qe4ZufmRaP85lCp6S+P04vYHozdFWVyw2Xdi5ZmV4+La/89OABk7AkxmYhQpR1AiZUcL/cuQSf9UUfMwwTalobRgaZYYx4Upe/plGTRytxZRetcUwA72gNCutEkPKWBKoaHi4D32rod8yWX0XxdVXnuQ3LLy6HlQN/QgLz7fUf8z/mu+o/5vtj/gDCHxvHNSqvpwAAAABJRU5ErkJggg=="})}),Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:Object(S.jsx)(r.b,{to:"/",children:"Home"})}),Object(S.jsx)("li",{children:Object(S.jsx)(r.b,{to:"/search",children:"About"})})]}),Object(S.jsxs)("div",{className:"search",children:[Object(S.jsx)("input",{type:"text",placeholder:"ssd 240gb",className:"search-input"}),Object(S.jsxs)("select",{id:"cars",children:[Object(S.jsx)("option",{children:"All Categories"}),Object(S.jsx)("option",{value:"saab",children:"Saab"}),Object(S.jsx)("option",{value:"opel",children:"Opel"}),Object(S.jsx)("option",{value:"audi",children:"Audi"})]}),Object(S.jsx)("button",{className:"search-button",type:"submit",children:Object(S.jsx)(j.a,{icon:l.a,color:"#fff",size:"1x"})})]}),Object(S.jsx)("div",{className:"header-items",children:Object(S.jsx)("a",{href:"#",children:Object(S.jsx)("span",{class:"right-cart-number",id:"right-cart-num",children:"0"})})})]})})})}var K=function(){return Object(S.jsx)("div",{className:"footer",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"footer-content",children:[Object(S.jsxs)("div",{className:"footer-item",children:[Object(S.jsx)("h3",{children:"Help"}),Object(S.jsx)("span",{children:"Customer Service,Customer ServiceCustomer ServiceCustomer ServiceCustomer ServiceCustomer Service"})]}),Object(S.jsxs)("div",{className:"footer-item",children:[Object(S.jsx)("h3",{children:"Help"}),Object(S.jsx)("span",{children:"Customer Service,Customer ServiceCustomer ServiceCustomer ServiceCustomer ServiceCustomer Service"})]}),Object(S.jsxs)("div",{className:"footer-item",children:[Object(S.jsx)("h3",{children:"Help"}),Object(S.jsx)("span",{children:"Customer Service,Customer ServiceCustomer ServiceCustomer ServiceCustomer ServiceCustomer Service"})]}),Object(S.jsxs)("div",{className:"footer-item",children:[Object(S.jsx)("h3",{children:"Help"}),Object(S.jsx)("span",{children:"Customer Service,Customer ServiceCustomer ServiceCustomer ServiceCustomer ServiceCustomer Service"})]})]})})})};function Y(){return Object(S.jsxs)(r.a,{children:[Object(S.jsx)(Q,{}),Object(S.jsxs)(o.c,{children:[Object(S.jsx)(o.a,{exact:!0,path:"/",children:Object(S.jsx)(G,{})}),Object(S.jsx)(o.a,{path:"/cateogries",children:Object(S.jsx)(I,{})}),Object(S.jsx)(o.a,{path:"single/:id",children:Object(S.jsx)(z,{})}),Object(S.jsx)(o.a,{path:"/favorites",children:Object(S.jsx)(Z,{})}),Object(S.jsx)(o.a,{path:"/search",children:Object(S.jsx)(J,{})})]}),Object(S.jsx)(K,{})]})}var _=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,88)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),n(e),a(e)}))},$=Object(D.a)({reducer:{user:F}});a.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(H.a,{store:$,children:Object(S.jsx)(o.b,{children:Object(S.jsx)(Y,{})})})}),document.getElementById("root")),_()}},[[87,1,2]]]);
//# sourceMappingURL=main.809fc44e.chunk.js.map