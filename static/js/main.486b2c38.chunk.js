(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItems_ImageGalleryItem__11Dbg",ImageGalleryItemImage:"ImageGalleryItems_ImageGalleryItemImage__2nb1e"}},13:function(e,t,a){e.exports={Button:"Button_Button__2EUP2"}},14:function(e,t,a){e.exports={ModalBackdrop:"Modal_ModalBackdrop__11uuv",ModalContent:"Modal_ModalContent__2EAFR"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__38P4q"}},30:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),c=a.n(o),s=a(15),l=a(4),i=a(5),u=a(7),h=a(6),d=(a(30),a(24)),m=a.n(d);function g(e,t){return m.a.get("".concat("https://pixabay.com/api/","?key=").concat("19964688-39e6ce365709953a823cd9b18","&q=").concat(e,"&image_type=photo&orientation=horizontal&per_page=12&page=").concat(t)).then((function(e){return e.data}))}var b=a(10),j=a.n(b),p=a(8),f=a.n(p),y=a(0),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.query)return alert("Please, enter your request");e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("header",{className:f.a.Searchbar,onSubmit:this.handleSubmit,children:Object(y.jsxs)("form",{className:f.a.SearchForm,children:[Object(y.jsx)("button",{type:"submit",className:f.a.SearchFormButton,children:Object(y.jsx)("span",{className:f.a.SearchFormButtonLabel,children:"Search"})}),Object(y.jsx)("input",{className:f.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.query,onChange:this.handleChange})]})})})}}]),a}(n.Component),v=a(25),S=a.n(v),I=a(12),_=a.n(I),x=function(e){var t=e.photo;return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("li",{className:_.a.ImageGalleryItem,children:Object(y.jsx)("img",{className:_.a.ImageGalleryItemImage,src:t.webformatURL,alt:t.tags,lowsrc:t.largeImageURL})})})};x.defaultProps={largeImageURL:"",webformatURL:"",tags:""};var w=x,k=function(e){var t=e.hits,a=e.onClick;return Object(y.jsx)("ul",{className:S.a.ImageGallery,onClick:a,children:t.map((function(e){return Object(y.jsx)(w,{photo:e},e.id)}))})};k.defaultProps={hits:[]};var C=k,L=a(13),B=a.n(L),F=function(e){var t=e.onFetch;return Object(y.jsx)("div",{className:B.a.ButtonWrapper,children:Object(y.jsx)("button",{type:"button",className:B.a.Button,onClick:t,children:"Load more"})})};F.defaultProps={onClick:function(){return null},children:null};var M=F,G=a(14),P=a.n(G),N=document.querySelector("#modal-root"),q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0},e.handleKeyDown=function(t){"Escape"===t.code&&(e.props.onClose(),e.setState({isImageLoading:!0}))},e.handleBackdropClick=function(t){t.currentTarget===t.target&&(e.props.onClose(),e.setState({isImageLoading:!0}))},e.onImageLoad=function(){e.setState({isLoading:!1})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.state.isLoading,t=this.props,a=t.src,n=t.alt;return Object(o.createPortal)(Object(y.jsx)("div",{className:P.a.ModalBackdrop,onClick:this.handleBackdropClick,children:Object(y.jsxs)("div",{className:P.a.ModalContent,children:[e&&Object(y.jsx)(j.a,{type:"ThreeDots",color:"#ffffff",height:80,width:80}),Object(y.jsx)("img",{src:a,alt:n,onLoad:this.onImageLoad}),this.props.children]})}),N)}}]),a}(n.Component),U=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hits:[],currentPage:1,searchQuery:"",isLoading:!1,error:null,showModal:!1,currentImgObj:{largeUrl:"",alt:""}},e.onChangeQuery=function(t){e.setState({hits:[],searchQuery:t,currentPage:1})},e.fetchHits=function(){var t=e.state,a=t.currentPage,n=t.searchQuery;e.setState({isLoading:!0}),g(n,a).then((function(t){var a=t.hits;e.setState((function(e){return{hits:[].concat(Object(s.a)(e.hits),Object(s.a)(a)),currentPage:e.currentPage+1}})),0===e.state.hits.length&&alert("Oooops, enter the correct request"),e.scrollToButton()})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.scrollToButton=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleClickGalleryItem=function(t){var a=t.target.lowsrc,n=t.target.alt;e.setState({currentImgObj:{largeUrl:a,alt:n}}),e.toggleModal()},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchHits(this.state.searchQuery)}},{key:"render",value:function(){var e=this.state,t=e.hits,a=e.isLoading,n=e.error,r=e.showModal,o=e.currentImgObj,c=t.length>0&&!a;return Object(y.jsxs)("div",{children:[Object(y.jsx)(O,{onSubmit:this.onChangeQuery}),n&&Object(y.jsxs)("p",{children:["Whoops, something went wrong: ",n.message]}),t.length>0&&Object(y.jsx)(C,{hits:t,onClick:this.handleClickGalleryItem}),Object(y.jsxs)("div",{className:"Container",children:[a&&Object(y.jsx)(j.a,{type:"ThreeDots",color:"#000000",height:80,width:80}),c&&Object(y.jsx)(M,{onFetch:this.fetchHits})]}),r&&Object(y.jsx)(q,{src:o.largeUrl,alt:o.alt,onClose:this.toggleModal})]})}}]),a}(n.Component);c.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(U,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1gRRK",SearchForm:"Searchbar_SearchForm__mmPGt",SearchFormButton:"Searchbar_SearchFormButton__1nP1n",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__Y5Qhj",SearchFormInput:"Searchbar_SearchFormInput__1mhFu"}}},[[70,1,2]]]);
//# sourceMappingURL=main.486b2c38.chunk.js.map