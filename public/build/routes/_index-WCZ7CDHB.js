import{a as m,b as S,c as y}from"/build/_shared/chunk-GMTWMY2Y.js";import{c as n,d as r,e as o,f as i,g as s,h as a,i as x,j as c}from"/build/_shared/chunk-5XCBIPQZ.js";r();o();i();a();s();r();o();i();a();s();r();o();i();a();s();var T=n(c()),V=()=>(0,T.jsx)("div",{className:"home"}),h=V;r();o();i();a();s();var I=n(x());r();o();i();a();s();var _=n(x());r();o();i();a();s();var U=()=>{let t=window.localStorage.getItem(S.NAME);return Promise.resolve(t?JSON.parse(t):void 0)},v=t=>{window.localStorage.setItem(S.NAME,JSON.stringify(t))};var W=t=>{let{sidebarData:u,setSidebarData:d}=(0,_.useContext)(y),g=async()=>{let e={isSidebarOpen:!0,size:m.SIZE_DEFAULT};d(e),v(e),await H()},A=async()=>{let e={isSidebarOpen:!1,size:m.SIZE_MIN};d(e),v(e),await G()},C=()=>{window.addEventListener("mousemove",M),window.addEventListener("mouseup",L)},L=()=>{window.removeEventListener("mousemove",M),window.removeEventListener("mouseup",L)},M=e=>{let l=e.clientX-t.current.offsetLeft;if(u.isSidebarOpen){if(l<m.SIZE_MIN)return A();l>m.SIZE_MAX&&(l=m.SIZE_MAX),z(l),d(J=>{let N={...J,size:l};return v(N),N})}},z=e=>{t.current.style.width=`${e}px`},F=async()=>{let e=await U();e?P(e):X()},P=e=>{d({...e}),z(e.size)},X=()=>{v(S.VALUE_DEFAULT),z(S.VALUE_DEFAULT.size)},G=()=>Promise.resolve(setTimeout(()=>{t.current.classList.add("animable")},100)),H=()=>Promise.resolve(t.current.classList.remove("animable"));return(0,_.useEffect)(()=>(F(),()=>L()),[]),{isSidebarOpen:u.isSidebarOpen,size:u.size,openSidebar:g,closeSidebar:A,resizeSidebar:C}},Z=W;var O=n(c()),$=()=>{let t=(0,I.useRef)(null),u=(0,I.useRef)(null),{isSidebarOpen:d,closeSidebar:g,resizeSidebar:A}=Z(t);return(0,O.jsx)("aside",{ref:t,className:`my-sidebar ${d?"opened":"closed"}`,children:(0,O.jsx)("div",{ref:u,className:"handle",onMouseDown:A,onClick:g})})},R=$;var D=n(c()),k=()=>(0,D.jsxs)("div",{id:"root",children:[(0,D.jsx)(R,{}),(0,D.jsx)(h,{})]}),B=k;export{B as default};
