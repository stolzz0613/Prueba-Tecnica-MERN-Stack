(this.webpackJsonpprueba_tecnica_mern=this.webpackJsonpprueba_tecnica_mern||[]).push([[0],{48:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),c=a.n(n),o=a(17),s=a.n(o),i=(a(48),a(13)),l=a(4),u=a(12),b=a(2),j=a(5),p=Object(n.createContext)(),d=Object(n.createContext)(),m=function(e){var t=Object(n.useContext)(p),a=t.alerta,c=t.mostrarAlerta,o=Object(n.useContext)(d),s=o.mensaje,l=o.autenticado,m=o.iniciarSesion;Object(n.useEffect)((function(){l&&e.history.push("/proyectos"),s&&c(s.msg,s.categoria)}),[s,l,e.history]);var O=Object(n.useState)({email:"",password:""}),f=Object(j.a)(O,2),h=f[0],x=f[1],y=h.email,v=h.password,g=function(e){x(Object(b.a)(Object(b.a)({},h),{},Object(u.a)({},e.target.name,e.target.value)))};return Object(r.jsxs)("div",{className:"form-usuario",children:[a?Object(r.jsx)("div",{className:"alerta ".concat(a.categoria),children:a.msg}):null,Object(r.jsxs)("div",{className:"contenedor-form sombra-dark",children:[Object(r.jsx)("h1",{children:"Iniciar Sesi\xf3n"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()&&""!==v.trim()||c("Todos los campos son obligatorios","alerta-error"),m({email:y,password:v})},children:[Object(r.jsxs)("div",{className:"campo-form",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Tu Email",value:y,onChange:g})]}),Object(r.jsxs)("div",{className:"campo-form",children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Tu Password",value:v,onChange:g})]}),Object(r.jsx)("div",{className:"campo-form",children:Object(r.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Iniciar Sesi\xf3n"})})]}),Object(r.jsx)(i.b,{to:"/nueva-cuenta",className:"enlace-cuenta",children:"Obtener Cuenta"})]})]})},O=function(e){var t=Object(n.useContext)(p),a=t.alerta,c=t.mostrarAlerta,o=Object(n.useContext)(d),s=o.mensaje,l=o.autenticado,m=o.registrarUsuario;Object(n.useEffect)((function(){l&&e.history.push("/proyectos"),s&&c(s.msg,s.categoria)}),[s,l,e.history]);var O=Object(n.useState)({nombre:"",email:"",password:"",confirmar:""}),f=Object(j.a)(O,2),h=f[0],x=f[1],y=h.nombre,v=h.email,g=h.password,N=h.confirmar,C=function(e){x(Object(b.a)(Object(b.a)({},h),{},Object(u.a)({},e.target.name,e.target.value)))};return Object(r.jsxs)("div",{className:"form-usuario",children:[a?Object(r.jsx)("div",{className:"alerta ".concat(a.categoria),children:a.msg}):null,Object(r.jsxs)("div",{className:"contenedor-form sombra-dark",children:[Object(r.jsx)("h1",{children:"Obtener Cuenta"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()&&""!==v.trim()&&""!==g.trim()&&""!==N.trim()?g.length<6?c("El password debe ser de minimo 6 caracteres","alerta-error"):g===N?m({nombre:y,email:v,password:g}):c("Los password no son iguales","alerta-error"):c("Todos los campos son obligatorios","alerta-error")},children:[Object(r.jsxs)("div",{className:"campo-form",children:[Object(r.jsx)("label",{htmlFor:"nombre",children:"Nombre"}),Object(r.jsx)("input",{type:"text",id:"nombre",name:"nombre",placeholder:"Tu Nombre",value:y,onChange:C})]}),Object(r.jsxs)("div",{className:"campo-form",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email"}),Object(r.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"Tu Email",value:v,onChange:C})]}),Object(r.jsxs)("div",{className:"campo-form",children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{type:"password",id:"password",name:"password",placeholder:"Tu Password",value:g,onChange:C})]}),Object(r.jsxs)("div",{className:"campo-form",children:[Object(r.jsx)("label",{htmlFor:"confirmar",children:"Confirmar Password"}),Object(r.jsx)("input",{type:"password",id:"confirmar",name:"confirmar",placeholder:"Repite tu Password",value:N,onChange:C})]}),Object(r.jsx)("div",{className:"campo-form",children:Object(r.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Registrarme"})})]}),Object(r.jsx)(i.b,{to:"/",className:"enlace-cuenta",children:"Volver a Iniciar Sesi\xf3n"})]})]})},f=Object(n.createContext)(),h=function(){var e=Object(n.useContext)(f),t=e.formulario,a=e.errorformulario,c=e.mostrarFormulario,o=e.agregarProyecto,s=e.mostrarError,i=Object(n.useState)({nombre:""}),l=Object(j.a)(i,2),p=l[0],d=l[1],m=p.nombre;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{type:"button",className:"btn btn-block btn-primario",onClick:function(){return c()},children:"Nuevo Proyecto"}),t?Object(r.jsxs)("form",{className:"formulario-nuevo-proyecto",onSubmit:function(e){e.preventDefault(),""!==m?(o(p),d({nombre:""})):s()},children:[Object(r.jsx)("input",{type:"text",className:"input-text",placeholder:"Nombre Proyecto",name:"nombre",value:m,onChange:function(e){d(Object(b.a)(Object(b.a)({},p),{},Object(u.a)({},e.target.name,e.target.value)))}}),Object(r.jsx)("input",{type:"submit",className:"btn btn-primario btn-block",value:"Agregar Proyecto",name:"nombre"})]}):null,a?Object(r.jsx)("p",{className:"mensaje error",children:"El nombre del Proyecto es obligatorio"}):null]})},x=Object(n.createContext)(),y=function(e){var t=e.proyecto,a=Object(n.useContext)(f).proyectoActual,c=Object(n.useContext)(x).obtenerTareas;return Object(r.jsx)("li",{children:Object(r.jsx)("button",{type:"button",className:"btn btn-blank",onClick:function(){return e=t._id,a(e),void c(e);var e},children:t.nombre})})},v=a(77),g=a(76),N=function(){var e=Object(n.useContext)(f),t=e.mensaje,a=e.proyectos,c=e.obtenerProyectos,o=Object(n.useContext)(p),s=o.alerta,i=o.mostrarAlerta;return Object(n.useEffect)((function(){t&&i(t.msg,t.categoria),c()}),[t]),0===a.lenght?Object(r.jsx)("p",{children:"No hay proyectos, comienza creando uno"}):Object(r.jsxs)("ul",{className:"listado-proyectos",children:[s?Object(r.jsx)("div",{className:"alerta ".concat(s.categoria),children:s.msg}):null,a.map((function(e){return Object(r.jsx)(v.a,{children:Object(r.jsx)(g.a,{timeout:200,classNames:"proyecto",children:Object(r.jsx)(y,{proyecto:e})})},e._id)}))]})},C=function(){return Object(r.jsxs)("aside",{children:[Object(r.jsxs)("h1",{children:["Prueba Tecnica",Object(r.jsx)("span",{children:"MERN"})]}),Object(r.jsx)(h,{}),Object(r.jsxs)("div",{className:"proyectos",children:[Object(r.jsx)("h2",{children:"Tus Proyectos"}),Object(r.jsx)(N,{})]})]})},R=function(){var e=Object(n.useContext)(d),t=e.usuario,a=e.usuarioAutenticado,c=e.cerrarSesion;return Object(n.useEffect)((function(){a()}),[]),Object(r.jsxs)("header",{className:"app-header",children:[t?Object(r.jsxs)("p",{className:"nombre-usuario",children:["Hola ",Object(r.jsx)("span",{children:t.nombre})]}):null,Object(r.jsx)("nav",{className:"nav-principal",children:Object(r.jsx)("button",{className:"btn btn-blank cerrar-sesion",onClick:function(){return c()},children:"Cerrar Sesi\xf3n"})})]})},T=function(){var e=Object(n.useContext)(f).proyecto,t=Object(n.useContext)(x),a=t.obtenerTareas,c=t.agregarTarea,o=t.validarTarea,s=t.errortarea,i=t.tareaseleccionada,l=t.actualizarTarea,p=Object(n.useState)({nombre:""}),d=Object(j.a)(p,2),m=d[0],O=d[1];if(Object(n.useEffect)((function(){O(null!==i?i:{nombre:""})}),[i]),!e)return null;var h=Object(j.a)(e,1)[0],y=m.nombre;return Object(r.jsxs)("div",{className:"formulario",children:[Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==y.trim()?(null===i?(m.proyecto=h._id,c(m)):l(m),a(h.id),O({nombre:""})):o()},children:[Object(r.jsx)("div",{className:"contenedor-input",children:Object(r.jsx)("input",{type:"text",className:"input-text",placeholder:"Nombre Tarea...",name:"nombre",value:y,onChange:function(e){O(Object(b.a)(Object(b.a)({},m),{},Object(u.a)({},e.target.name,e.target.value)))}})}),Object(r.jsx)("div",{className:"contenedor-input",children:Object(r.jsx)("input",{type:"submit",className:"btn btn-primario btn-submit btn-block",value:i?"Editar Tarea":"Agregar Tarea"})})]}),s?Object(r.jsx)("p",{className:"mensaje error",children:"El nombre de la tarea es obligatorio"}):null]})},E=function(e){var t=e.tarea,a=Object(n.useContext)(f).proyecto,c=Object(n.useContext)(x),o=c.eliminarTarea,s=c.actualizarTarea,i=c.obtenerTareas,l=c.guardarTareaActual,u=function(e){e.estado?e.estado=!1:e.estado=!0,s(e)};return Object(r.jsxs)("li",{className:"tarea sombra",children:[Object(r.jsx)("p",{children:t.nombre}),Object(r.jsx)("div",{className:"estado",children:t.estado?Object(r.jsx)("button",{type:"button",className:"completo",onClick:function(){return u(t)},children:"Completo"}):Object(r.jsx)("button",{type:"button",className:"incompleto",onClick:function(){return u(t)},children:"Incompleto"})}),Object(r.jsxs)("div",{className:"acciones",children:[Object(r.jsx)("button",{type:"button",className:"btn btn-primario",onClick:function(){return function(e){l(e)}(t)},children:"Editar"}),Object(r.jsx)("button",{type:"button",className:"btn btn-secundario",onClick:function(){return e=t._id,o(e,a[0]._id),void i(a[0].id);var e},children:"Eliminar"})]})]})},A=function(){var e=Object(n.useContext)(f),t=e.proyecto,a=e.eliminarProyecto,c=Object(n.useContext)(x).tareasproyecto;if(!t)return Object(r.jsx)("h2",{children:"Selecciona un Proyecto"});var o=Object(j.a)(t,1)[0];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h2",{children:["Proyecto: ",o.nombre]}),Object(r.jsx)("ul",{className:"listado-tareas",children:0===c.length?Object(r.jsx)("li",{className:"tarea",children:Object(r.jsx)("p",{children:"No hay tareas"})}):Object(r.jsx)(v.a,{children:c.map((function(e){return Object(r.jsx)(g.a,{timeout:200,classNames:"tarea",children:Object(r.jsx)(E,{tarea:e})},e._id)}))})}),Object(r.jsx)("button",{type:"button",className:"btn btn-eliminar",onClick:function(){return a(o._id)},children:"Eliminar Proyecto \xd7"})]})},k=function(){var e=Object(n.useContext)(d).usuarioAutenticado;return Object(n.useEffect)((function(){e()}),[]),Object(r.jsxs)("div",{className:"contenedor-app",children:[Object(r.jsx)("aside",{children:Object(r.jsx)(C,{})}),Object(r.jsxs)("div",{className:"seccion-principal",children:[Object(r.jsx)(R,{}),Object(r.jsxs)("main",{children:[Object(r.jsx)(T,{}),Object(r.jsx)("div",{className:"contenedor-tareas",children:Object(r.jsx)(A,{})})]})]})]})},w=a(3),_=a.n(w),P=a(10),S=a(23),I="FORMULARIO_PROYECTO",L="OBTENER_PROYECTOS",F="AGREGAR_PROYECTO",U="VALIDAR_FORMULARIO",G="PROYECTO_ACTUAL",D="ELIMINAR_PROYECTO",M="TAREAS_PROYECTO",Y="AGREGAR_TAREA",z="VALIDAR_TAREA",B="ELIMINAR_TAREA",H="TAREA_ACTUAL",V="ACTUALIZAR_TAREA",J="MOSTRAR_ALERTA",X="OCULTAR_ALERTA",Z="REGISTRO_EXITOSO",q="REGISTRO_ERROR",K="OBTENER_USUARIO",Q="LOGIN_EXITOSO",W="LOGIN_ERROR",$="CERRAR_SESION",ee="PROYECTO_ERROR",te=function(e,t){switch(t.type){case I:return Object(b.a)(Object(b.a)({},e),{},{formulario:!0});case L:return Object(b.a)(Object(b.a)({},e),{},{proyectos:t.payload});case F:return Object(b.a)(Object(b.a)({},e),{},{proyectos:[].concat(Object(S.a)(e.proyectos),[t.payload]),formulario:!1,errorformulario:!1});case U:return Object(b.a)(Object(b.a)({},e),{},{errorformulario:!0});case G:return Object(b.a)(Object(b.a)({},e),{},{proyecto:e.proyectos.filter((function(e){return e._id===t.payload}))});case D:return Object(b.a)(Object(b.a)({},e),{},{proyectos:e.proyectos.filter((function(e){return e._id!==t.payload})),proyecto:null});case ee:return Object(b.a)(Object(b.a)({},e),{},{mensaje:t.payload});default:return e}},ae=a(39),re=a.n(ae).a.create({baseURL:"https://protected-earth-67847.herokuapp.com/"}),ne=function(e){var t=Object(n.useReducer)(te,{formulario:!1,proyectos:[],errorformulario:!1,proyecto:null,mensaje:null}),a=Object(j.a)(t,2),c=a[0],o=a[1],s=function(){var e=Object(P.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.get("api/proyectos");case 3:t=e.sent,o({type:L,payload:t.data.proyectos}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),o({type:ee,payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(P.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.post("/api/proyectos",t);case 3:a=e.sent,console.log(a),o({type:F,payload:a.data}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),o({type:ee,payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(P.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.delete("/api/proyectos/".concat(t));case 3:o({type:D,payload:t}),e.next=10;break;case 6:e.prev=6,e.t0=e.catch(0),o({type:ee,payload:{msg:"Hubo un error",categoria:"alerta-error"}});case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(f.Provider,{value:{proyectos:c.proyectos,formulario:c.formulario,errorformulario:c.errorformulario,proyecto:c.proyecto,mensaje:c.mensaje,mostrarFormulario:function(){o({type:I})},obtenerProyectos:s,agregarProyecto:i,mostrarError:function(){o({type:U})},proyectoActual:function(e){o({type:G,payload:e})},eliminarProyecto:l},children:e.children})},ce=function(e,t){switch(t.type){case M:return Object(b.a)(Object(b.a)({},e),{},{tareasproyecto:t.payload});case Y:return Object(b.a)(Object(b.a)({},e),{},{tareasproyecto:[t.payload].concat(Object(S.a)(e.tareasproyecto)),errortarea:!1});case z:return Object(b.a)(Object(b.a)({},e),{},{errortarea:!0});case B:return Object(b.a)(Object(b.a)({},e),{},{tareasproyecto:e.tareasproyecto.filter((function(e){return e._id!==t.payload}))});case V:return Object(b.a)(Object(b.a)({},e),{},{tareasproyecto:e.tareasproyecto.map((function(e){return e._id===t.payload._id?t.payload:e})),tareaseleccionada:null});case H:return Object(b.a)(Object(b.a)({},e),{},{tareaseleccionada:t.payload});default:return e}},oe=function(e){var t=Object(n.useReducer)(ce,{tareasproyecto:[],errortarea:!1,tareaseleccionada:null}),a=Object(j.a)(t,2),c=a[0],o=a[1],s=function(){var e=Object(P.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.get("/api/tareas",{params:{proyecto:t}});case 3:a=e.sent,o({type:M,payload:a.data.tareas}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(P.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.post("/api/tareas",t);case 3:e.sent,o({type:Y,payload:t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(P.a)(_.a.mark((function e(t,a){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.delete("/api/tareas/".concat(t),{params:{proyecto:a}});case 3:o({type:B,payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=Object(P.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.put("/api/tareas/".concat(t._id),t);case 3:a=e.sent,o({type:V,payload:a.data.tarea}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(x.Provider,{value:{tareasproyecto:c.tareasproyecto,errortarea:c.errortarea,tareaseleccionada:c.tareaseleccionada,agregarTarea:i,obtenerTareas:s,validarTarea:function(){o({type:z})},eliminarTarea:l,guardarTareaActual:function(e){o({type:H,payload:e})},actualizarTarea:u},children:e.children})},se=function(e,t){switch(t.type){case J:return{alerta:t.payload};case X:return{alerta:null};default:return e}},ie=function(e){var t=Object(n.useReducer)(se,{alerta:null}),a=Object(j.a)(t,2),c=a[0],o=a[1];return Object(r.jsx)(p.Provider,{value:{alerta:c.alerta,mostrarAlerta:function(e,t){o({type:J,payload:{msg:e,categoria:t}}),setTimeout((function(){o({type:X})}),5e3)}},children:e.children})},le=function(e,t){switch(t.type){case Q:case Z:return localStorage.setItem("token",t.payload.token),Object(b.a)(Object(b.a)({},e),{},{autenticado:!0,mensaje:null,cargando:!1});case K:return Object(b.a)(Object(b.a)({},e),{},{autenticado:!0,usuario:t.payload,cargando:!1});case W:case $:case q:return localStorage.removeItem("token"),Object(b.a)(Object(b.a)({},e),{},{token:null,usuario:null,autenticado:null,mensaje:t.payload,cargando:!1});default:return e}},ue=function(e){e?re.defaults.headers.common["x-auth-token"]=e:delete re.defaults.headers.common["x-auth-token"]},be=function(e){var t={token:localStorage.getItem("token"),autenticado:null,usuario:null,mensaje:null,cargando:!0},a=Object(n.useReducer)(le,t),c=Object(j.a)(a,2),o=c[0],s=c[1],i=function(){var e=Object(P.a)(_.a.mark((function e(t){var a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.post("/api/usuarios",t);case 3:a=e.sent,console.log(a.data),s({type:Z,payload:a.data}),l(),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},s({type:q,payload:r});case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(P.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=localStorage.getItem("token"))&&ue(t),e.prev=2,e.next=5,re.get("/api/auth");case 5:a=e.sent,s({type:K,payload:a.data.usuario}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),s({type:W});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=Object(P.a)(_.a.mark((function e(t){var a,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.post("/api/auth",t);case 3:a=e.sent,s({type:Q,payload:a.data}),l(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),r={msg:e.t0.response.data.msg,categoria:"alerta-error"},s({type:W,payload:r});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(d.Provider,{value:{token:o.token,autenticado:o.autenticado,usuario:o.usuario,mensaje:o.mensaje,cargando:o.cargando,registrarUsuario:i,iniciarSesion:u,usuarioAutenticado:l,cerrarSesion:function(){s({type:$})}},children:e.children})},je=a(40),pe=function(e){var t=e.component,a=Object(je.a)(e,["component"]),c=Object(n.useContext)(d),o=c.autenticado,s=c.cargando,i=c.usuarioAutenticado;return Object(n.useEffect)((function(){i()}),[]),Object(r.jsx)(l.b,Object(b.a)(Object(b.a)({},a),{},{render:function(e){return o||s?Object(r.jsx)(t,Object(b.a)({},e)):Object(r.jsx)(l.a,{to:"/"})}}))},de=localStorage.getItem("token");de&&ue(de);var me=function(){return Object(r.jsx)(ne,{children:Object(r.jsx)(oe,{children:Object(r.jsx)(ie,{children:Object(r.jsx)(be,{children:Object(r.jsx)(i.a,{children:Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{exact:!0,path:"/",component:m}),Object(r.jsx)(l.b,{exact:!0,path:"/nueva-cuenta",component:O}),Object(r.jsx)(pe,{exact:!0,path:"/proyectos",component:k})]})})})})})})},Oe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),r(e),n(e),c(e),o(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(me,{})}),document.getElementById("root")),Oe()}},[[75,1,2]]]);
//# sourceMappingURL=main.3c5cdac1.chunk.js.map