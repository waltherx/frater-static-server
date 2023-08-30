import{u as x,j as e,L as p,l as h}from"./index-a4d01ccf.js";import{c as g,a as i,u as j,b,o as f}from"./yup-e23b827f.js";import{L as N}from"./LandingIntro-b8efe387.js";import{s as v,a as w,g as y}from"./localStorage-0825b3d6.js";import"./utils-afa34e80.js";function S(){const t=x(),l={username:"",password:""},c=g({username:i().required("Nombre de usuario es requerido").min(5,"minimo 5").max(10,"el nomnre es muy largo"),password:i().required("Contraseña es requerida").min(8,"minimo 8 ").max(32,"Maximo de longitud 32")}),{register:a,handleSubmit:m,formState:{errors:r},reset:d}=j({defaultValues:l,resolver:f(c)}),n=b(h,{onSuccess:s=>{console.log(s.access),v(s.access),w(s.refresh),localStorage.setItem("token",s.access),localStorage.setItem("User",JSON.stringify(y())),d(),t("/app")},onError:s=>{console.log(s)}}),u=s=>{console.log(s);try{n.mutate(s)}catch(o){console.log(o),alert("User created failed"),alert(o)}};return e.jsx("div",{className:"min-h-screen bg-base-200 flex items-center",children:e.jsx("div",{className:"card mx-auto w-full max-w-5xl  shadow-xl",children:e.jsxs("div",{className:"grid  md:grid-cols-2 grid-cols-1  bg-base-100 rounded-xl",children:[e.jsx("div",{className:"",children:e.jsx(N,{})}),e.jsxs("div",{className:"py-24 px-10",children:[e.jsx("h2",{className:"text-2xl font-semibold mb-2 text-center",children:"Inicia sesión"}),e.jsxs("form",{onSubmit:m(u),children:[e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"form-control w-full mb-4",children:[e.jsx("label",{className:"label",htmlFor:"username",children:"Nombre de Usuario"}),e.jsx("input",{className:"input input-bordered w-full",...a("username"),placeholder:"Ingrese Nombre de usuario",id:"username",type:"text"}),r.username&&e.jsx("p",{className:"error-message",children:r.username.message})]}),e.jsxs("div",{className:"form-control w-full mb-4",children:[e.jsx("label",{htmlFor:"password",children:"Contraseña"}),e.jsx("input",{className:"input input-bordered w-full",...a("password"),placeholder:"Ingrese Contraseña",id:"password",type:"password"}),r.password&&e.jsx("p",{className:"error-message",children:r.password.message})]})]}),e.jsx("div",{className:"text-right text-primary",children:e.jsx("a",{href:"/forgot-password",children:e.jsx("span",{className:"text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200",children:"¿Olvidaste tu contraseña?"})})}),e.jsxs("button",{type:"submit",className:"btn mt-2 w-full btn-primary",children:[n.isLoading&&e.jsx("span",{className:"loading loading-spinner"}),"Inicia Sesión"]}),e.jsxs("div",{className:"text-center mt-4",children:["¿No tienes una cuenta? ",e.jsx(p,{to:"/signup",children:e.jsx("span",{className:"  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200",children:"Regístrate"})})]})]})]})]})})})}function C(){return e.jsx("div",{className:"",children:e.jsx(S,{})})}export{C as default};
