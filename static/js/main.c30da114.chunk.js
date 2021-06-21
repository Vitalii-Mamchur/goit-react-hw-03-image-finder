(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{26:function(t,e,a){},67:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),c=a(19),s=a.n(c),o=(a(26),a(10)),i=a(4),u=a(5),h=a(7),l=a(6),j=a(20),b=a.n(j),m=a(21),d=a.n(m),g=(a(65),a(9),a(0)),p=function(t){Object(h.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={query:""},t.handleChange=function(e){t.setState({query:e.currentTarget.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.query),t.setState({query:""})},t}return Object(u.a)(a,[{key:"render",value:function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})})}}]),a}(n.Component),f=function(t){var e=t.src,a=t.alt;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("li",{className:"ImageGalleryItem",children:Object(g.jsx)("img",{className:"ImageGalleryItem-image",src:e,alt:a})})})},y=function(t){var e=t.hits;return Object(g.jsx)("ul",{className:"ImageGallery",children:e.map((function(t){var e=t.id,a=t.tags,n=t.webformatURL;return Object(g.jsx)(f,{src:n,alt:a},e)}))})},O=function(t){var e=t.onFetch;return Object(g.jsx)("button",{className:"Button",type:"button",onClick:e,children:"Load more"})},x=function(t){Object(h.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={hits:[],currentPage:1,searchQuery:"",isLoading:!1,error:null},t.onChangeQuery=function(e){t.setState({hits:[],searchQuery:e,currentPage:1})},t.fetchHits=function(){var e=t.state,a=e.currentPage,n=e.searchQuery;t.setState({isLoading:!0}),b.a.get("https://pixabay.com/api/?q=".concat(n,"&key=19964688-39e6ce365709953a823cd9b18&image_type=photo&orientation=horizontal&per_page=12&page=").concat(a)).then((function(e){t.setState((function(t){return{hits:[].concat(Object(o.a)(t.hits),Object(o.a)(e.data.hits)),currentPage:t.currentPage+1}})),t.scrollToButton()})).catch((function(e){return t.setState({error:e})})).finally((function(){return t.setState({isLoading:!1})}))},t.scrollToButton=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},t}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(t,e){e.searchQuery!==this.state.searchQuery&&this.fetchHits()}},{key:"render",value:function(){var t=this.state,e=t.hits,a=t.isLoading,n=t.error,r=e.length>0&&!a;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(p,{onSubmit:this.onChangeQuery}),n&&alert("Oooops"),Object(g.jsx)(y,{hits:e}),Object(g.jsxs)("div",{className:"Container",children:[a&&Object(g.jsx)(d.a,{type:"ThreeDots",color:"#000000",height:80,width:80}),r&&Object(g.jsx)(O,{onFetch:this.fetchHits})]})]})}}]),a}(n.Component);s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(x,{})}),document.getElementById("root"))},9:function(t,e,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.c30da114.chunk.js.map