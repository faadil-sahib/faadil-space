(this["webpackJsonpfaadil-sahib"]=this["webpackJsonpfaadil-sahib"]||[]).push([[0],{33:function(e,t,i){},34:function(e,t,i){},70:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i.n(s),r=i(27),n=i.n(r),u=(i(33),i(34),i(8)),l=i(9),c=i(10),o=i(12),m=i(11),d=i(20),b=i(3),p=i(14);function j(e,t,i){var s;return function(){var a=this,r=arguments,n=function(){s=null,i||e.apply(a,r)},u=i&&!s;clearTimeout(s),s=setTimeout(n,t),u&&e.apply(a,r)}}var g=i(21),h=i(22),v=i(0),f=function(){var e=Object(s.useState)(0),t=Object(p.a)(e,2),i=t[0],a=t[1],r=Object(s.useState)(!0),n=Object(p.a)(r,2),u=n[0],l=n[1],c=j((function(){var e=window.pageYOffset;l(e<10),a(e)}),100);return Object(s.useEffect)((function(){return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}),[i,u,c]),Object(v.jsxs)("nav",{className:"navbar navbar-expand-lg fixed-top ".concat(u?"navbar-dark":"navbar-light"),children:[Object(v.jsx)("a",{className:"navbar-brand",href:"/#",style:{marginLeft:"1rem"},children:"Faadil Sahib"}),Object(v.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(v.jsx)("span",{className:"navbar-toggler-icon"})}),Object(v.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarText",children:[Object(v.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(v.jsx)("li",{className:"nav-item active",children:Object(v.jsxs)("a",{className:"nav-link",href:"/#",children:["Home ",Object(v.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)("a",{className:"nav-link",href:"/blog",children:"Blog"})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)("a",{className:"nav-link",href:"/aboutme",children:"Me"})})]}),Object(v.jsxs)("ul",{className:"navbar-nav",style:{marginLeft:"auto",marginRight:"1rem"},children:[Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)("a",{href:"https://github.com/faadil-sahib",target:"_blank",rel:"noreferrer",children:Object(v.jsx)(g.a,{icon:h.a,style:{fontSize:"1.5rem",color:"grey"}})})}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)("a",{href:"https://www.linkedin.com/in/faadil-garda-sahib-090a82112/",target:"_blank",rel:"noreferrer",children:Object(v.jsx)(g.a,{icon:h.b,style:{fontSize:"1.5rem",color:"grey"}})})})]})]})]})},O=function(e){var t=e.isHome,i=e.mainLine,a=e.subLine,r=Object(s.useState)(0),n=Object(p.a)(r,2),l=n[0],c=n[1],o=Object(s.useState)(!0),m=Object(p.a)(o,2),d=m[0],b=m[1],g=j((function(){var e=window.pageYOffset;b(e<10),c(e)}),100);Object(s.useEffect)((function(){return window.addEventListener("scroll",g),function(){return window.removeEventListener("scroll",g)}}),[l,d,g]);var h={position:"fixed",width:"100%",backgroundColor:"#282d30",textAlign:"center",transition:"top 0.6s"};return t?Object(v.jsx)("div",{style:Object(u.a)(Object(u.a)({},h),{},{height:"100%",top:d?"0":"-100%",backgroundImage:"url(".concat("","/images/vscbackgroundblurred.jpg)"),filter:"grayscale(100%)",left:"0%"}),children:Object(v.jsx)("div",{className:"home-intro-text",children:Object(v.jsxs)("span",{style:{fontSize:"4.2rem",color:"white"},children:[i,Object(v.jsx)("br",{}),Object(v.jsx)("p",{style:{fontSize:"2.7rem"},children:a})]})})}):Object(v.jsx)("div",{style:Object(u.a)(Object(u.a)({},h),{},{height:"200px",top:d?"0":"-200px",backgroundImage:"url(".concat("","/images/vscbackgroundblurred.jpg)"),filter:"grayscale(100%)",left:"0%"}),children:Object(v.jsx)("div",{className:"home-intro-text",children:Object(v.jsxs)("span",{style:{fontSize:"2.1rem",color:"#EFEFEF"},children:[i,Object(v.jsx)("br",{}),Object(v.jsx)("p",{style:{fontSize:"1.2rem",color:"#A5A5A5"},children:a})]})})})},x=function(e){return e.blogItems.map((function(e){return Object(v.jsx)("a",{href:"/blog/"+e.id,style:{textDecoration:"none"},children:Object(v.jsxs)("div",{className:"card border-dark mb-3",style:{maxWidth:"18rem",maxHeight:"10rem",fontSize:"0.7rem",backgroundColor:"#E2E0E0"},children:[Object(v.jsx)("div",{className:"card-header",style:{color:"#282d30",fontSize:"1rem",paddingLeft:"0.5rem"},children:e.tags.map((function(e){return Object(v.jsx)("span",{className:"badge m-1 bg-secondary",children:e})}))}),Object(v.jsxs)("div",{className:"card-body text-dark",children:[Object(v.jsx)("h5",{className:"card-title",style:{color:"#282d30",fontSize:"1rem"},children:e.title}),Object(v.jsx)("p",{className:"card-text",style:{color:"#282d30"},children:e.description.substr(0,50)})]})]},e.id)},e.id)}))},q=function(e){Object(o.a)(i,e);var t=Object(m.a)(i);function i(){return Object(l.a)(this,i),t.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){var e=this.props.blogItems;return Object(v.jsxs)("div",{className:"container-fluid px-5",style:{paddingTop:200,overflowX:"hidden"},children:[Object(v.jsxs)("div",{className:"row align-items-start gx-5",children:[Object(v.jsx)("div",{className:"col-sm left-area order-md-1 order-2",children:Object(v.jsx)(x,{blogItems:e})}),Object(v.jsx)("div",{className:"col-sm-5 center-area order-md-2 order-1",style:{textAlign:"justify"},children:Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Hello there!"}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"I do not often get visitors. Do come in, and feel free to make yourself at home.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"Since you've found your way here, I suppose I should let you know what this place is all about.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"I see this as my personal space to express myself regarding anything I feel the need to. Since I'm a software developer, I do believe that you will mostly find content related to my experiences as I undergo my long journey through the ocean of computer science.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"Throughout my travels, I have dabbled in game development and tinkered with machine learning tech. I am also much interested in all things cloud.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"I however see myself as more of a .NET character, having firm roots in C# and Microsoft technologies. Oh, and I definitely find front end development to be quite intriguing. Kindly do not judge me by the quality of this website.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"In no way do I see myself as an expert in any of the domains and topics I speak about here. That would be oh so preposterous, absurd, ludicrous even. I am but a student in these fields, and only wish to have a central repository for my knowledge. A journal of sorts.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"I only write to teach myself, to review my mediocre knowledge, to strengthen parts that may yet be unclear. I wish to have a place to store the current state of my mind, so that I may later on look back on how things have changed over time, or simply enjoy reading through my old notes in a few decades, to laugh at how foolish I once was, over a cup of tea.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"I do also have other hobbies, but you may find them somewhat more scarce. I should perhaps dedicate a separate section for such pursuits.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),"You may also come across a semblance of a bio/resume of mine if you press the right buttons. I do hope that it will be of a certain interest to you. I truly enjoy sharing the things I've learnt and done and experienced.",Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{})]})}),Object(v.jsxs)("div",{className:"col-sm right-area order-md-3 order-3",style:{fontWeight:"bold"},children:[Object(v.jsxs)("label",{children:["If you would like to receive email notifications about new stuff, kindly do share your email address below.",Object(v.jsx)("br",{}),Object(v.jsx)("p",{style:{color:"#8E3030"},children:"[WIP//Not yet functional]"})]}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"d-flex align-items-end",children:[Object(v.jsx)("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Your email"}),Object(v.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]}),Object(v.jsx)("br",{}),Object(v.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"It will be kept strictly confidential and only used for the mentioned purpose, no sharing with annoying advertisers or anything of the like!"})]})]}),Object(v.jsx)(O,{isHome:!0,mainLine:"I am a software developer.",subLine:"And this is my personal space."})]})}}]),i}(s.Component),y=function(e){Object(o.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(l.a)(this,i);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={blogId:e.props.blogId,blogItems:e.props.blogItems,mainQuote:e.props.mainQuote,mainSubQuote:e.props.mainSubQuote},e}return Object(c.a)(i,[{key:"getCoverScreen",value:function(){var e=this;return void 0!=this.props.match.params.blogid?Object(v.jsx)(O,{mainLine:this.state.blogItems.filter((function(t){return t.id===parseInt(e.props.match.params.blogid)}))[0].title,subLine:this.state.blogItems.filter((function(t){return t.id===parseInt(e.props.match.params.blogid)}))[0].quote}):Object(v.jsx)(O,{mainLine:this.state.mainQuote,subLine:this.state.mainSubQuote})}},{key:"getBlogBody",value:function(){var e=this;return void 0!=this.props.match.params.blogid?Object(v.jsxs)(a.a.Fragment,{children:[this.state.blogItems.filter((function(t){return t.id===parseInt(e.props.match.params.blogid)}))[0].tags.map((function(e){return Object(v.jsx)("span",{className:"badge m-1 bg-secondary",children:e})})),Object(v.jsx)("h1",{style:{paddingTop:"3rem",paddingBottom:"3rem",textAlign:"left"},children:this.state.blogItems.filter((function(t){return t.id===parseInt(e.props.match.params.blogid)}))[0].title}),Object(v.jsx)("div",{id:"blogTextBody",style:{whiteSpace:"pre-line"},children:this.state.blogItems.filter((function(t){return t.id===parseInt(e.props.match.params.blogid)}))[0].description})]}):this.state.blogItems.map((function(e){return Object(v.jsx)("a",{href:"/blog/"+e.id,style:{textDecoration:"none"},children:Object(v.jsxs)("div",{className:"card border-light mb-3",style:{maxWidth:"auto",maxHeight:"auto",fontSize:"0.7rem",backgroundColor:"#E2E0E0"},children:[Object(v.jsx)("div",{className:"card-header",style:{color:"#282d30",fontSize:"1rem"},children:e.tags.map((function(e){return Object(v.jsx)("span",{className:"badge m-1 bg-secondary",children:e})}))}),Object(v.jsxs)("div",{className:"card-body text-dark",children:[Object(v.jsx)("h5",{className:"card-title",style:{color:"#282d30",fontSize:"1rem"},children:e.title}),Object(v.jsx)("p",{className:"card-text",style:{color:"#282d30"},children:e.description.substr(0,250)+"..."})]})]},e.id)},e.id)}))}},{key:"render",value:function(){var e=this.props.blogItems;return Object(v.jsxs)("div",{className:"container-fluid px-5",style:{paddingTop:200,overflowX:"hidden"},children:[Object(v.jsxs)("div",{className:"row align-items-start gx-5",children:[Object(v.jsx)("div",{className:"col-sm left-area order-md-1 order-2",children:Object(v.jsx)(x,{blogItems:e})}),Object(v.jsx)("div",{className:"col-sm-5 center-area order-md-2 order-1",style:{textAlign:"justify"},children:this.getBlogBody()}),Object(v.jsxs)("div",{className:"col-sm right-area order-md-3 order-3",style:{fontWeight:"bold"},children:[Object(v.jsxs)("label",{children:["If you would like to receive email notifications about new stuff, kindly do share your email address below.",Object(v.jsx)("br",{}),Object(v.jsx)("p",{style:{color:"#8E3030"},children:"[WIP//Not yet functional]"})]}),Object(v.jsx)("br",{}),Object(v.jsx)("br",{}),Object(v.jsxs)("div",{className:"d-flex align-items-end",children:[Object(v.jsx)("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Your email"}),Object(v.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]}),Object(v.jsx)("br",{}),Object(v.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"It will be kept strictly confidential and only used for the mentioned purpose, no sharing with annoying advertisers or anything of the like!"})]})]}),this.getCoverScreen()]})}}]),i}(s.Component),I=Object(b.f)(y),N=function(e){Object(o.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(l.a)(this,i);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(c.a)(i,[{key:"render",value:function(){return Object(v.jsx)(a.a.Fragment,{children:Object(v.jsxs)("div",{style:{paddingTop:200},children:[Object(v.jsx)(O,{isHome:!1,mainLine:"I am a software developer.",subLine:"And this is my personal space."}),Object(v.jsxs)("div",{className:"row align-items-start",children:[Object(v.jsx)("div",{className:"col-sm left-area order-md-1 order-2",children:"One of three columns"}),Object(v.jsxs)("div",{className:"col-sm center-area order-md-2 order-1",children:["One of three columns",Object(v.jsx)("br",{}),"One of three columns",Object(v.jsx)("br",{}),"One of three columns",Object(v.jsx)("br",{})]}),Object(v.jsx)("div",{className:"col-sm right-area order-md-3 order-3",children:"One of three columns"})]})]})})}}]),i}(s.Component),w=function(e){Object(o.a)(i,e);var t=Object(m.a)(i);function i(){var e;Object(l.a)(this,i);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={blogs:[{id:1,title:".NET Core Clean Architecture pattern",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id interdum velit laoreet id. Convallis posuere morbi leo urna molestie at elementum eu facilisis. Velit laoreet id donec ultrices tincidunt arcu non sodales neque. Iaculis at erat pellentesque adipiscing. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Facilisi nullam vehicula ipsum a arcu cursus vitae. Augue eget arcu dictum varius. At urna condimentum mattis pellentesque id. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Egestas integer eget aliquet nibh praesent. In iaculis nunc sed augue lacus viverra vitae. A condimentum vitae sapien pellentesque. Diam in arcu cursus euismod quis viverra nibh cras. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Vulputate eu scelerisque felis imperdiet proin.\n\n\t\t\t\t\tMassa sapien faucibus et molestie. Laoreet suspendisse interdum consectetur libero. Eget aliquet nibh praesent tristique magna. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Vitae elementum curabitur vitae nunc. Mauris pharetra et ultrices neque ornare aenean euismod. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Convallis aenean et tortor at. Pretium aenean pharetra magna ac placerat. Tellus integer feugiat scelerisque varius morbi enim. Bibendum arcu vitae elementum curabitur vitae. Eget felis eget nunc lobortis mattis aliquam faucibus. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Odio tempor orci dapibus ultrices in.\n\t\t\t\t\t\n\t\t\t\t\tTurpis massa tincidunt dui ut. Est sit amet facilisis magna etiam tempor orci eu. Feugiat in ante metus dictum at. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Tempor id eu nisl nunc mi. Vestibulum mattis ullamcorper velit sed ullamcorper. Mattis vulputate enim nulla aliquet porttitor lacus luctus. A lacus vestibulum sed arcu non odio. Dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc. Bibendum neque egestas congue quisque. Ac tincidunt vitae semper quis lectus.\n\t\t\t\t\t\n\t\t\t\t\tIn egestas erat imperdiet sed euismod nisi porta lorem. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Orci porta non pulvinar neque laoreet. Laoreet sit amet cursus sit. Facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Ornare arcu odio ut sem nulla pharetra diam sit amet. Iaculis urna id volutpat lacus laoreet non. Senectus et netus et malesuada fames. Morbi quis commodo odio aenean sed adipiscing. Dui sapien eget mi proin sed libero. Diam in arcu cursus euismod quis viverra. Quis lectus nulla at volutpat diam. Elementum nibh tellus molestie nunc non blandit. Elit ut aliquam purus sit. Hac habitasse platea dictumst vestibulum rhoncus. Ut aliquam purus sit amet.\n\t\t\t\t\t\n\t\t\t\t\tIn vitae turpis massa sed. Cras sed felis eget velit aliquet sagittis id consectetur. Sit amet venenatis urna cursus eget nunc scelerisque. A scelerisque purus semper eget duis at tellus at urna. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Pellentesque habitant morbi tristique senectus. Ac felis donec et odio. Senectus et netus et malesuada fames ac. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Commodo sed egestas egestas fringilla. Vitae et leo duis ut. Orci sagittis eu volutpat odio facilisis. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Nec ullamcorper sit amet risus nullam eget felis eget. Purus faucibus ornare suspendisse sed nisi lacus sed. Vel quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Facilisi nullam vehicula ipsum a arcu cursus vitae. Consequat interdum varius sit amet mattis vulputate. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",tags:["C#",".NET"],quote:'"Decoupling is the fundamental goal of good architecture."'},{id:2,title:"Building React applications",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Nunc sed augue lacus viverra vitae congue eu consequat ac. Curabitur gravida arcu ac tortor. Lacus vel facilisis volutpat est velit egestas dui id ornare. Pretium viverra suspendisse potenti nullam ac. Risus sed vulputate odio ut enim blandit volutpat. Augue eget arcu dictum varius duis at consectetur. Id interdum velit laoreet id donec ultrices. Nisl rhoncus mattis rhoncus urna.\n\n\t\t\t\tAmet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Lectus urna duis convallis convallis tellus id. Semper quis lectus nulla at volutpat diam ut venenatis. Cras semper auctor neque vitae tempus quam pellentesque nec. Condimentum id venenatis a condimentum vitae. Volutpat consequat mauris nunc congue nisi vitae. At augue eget arcu dictum. Elit sed vulputate mi sit amet mauris. Viverra maecenas accumsan lacus vel facilisis volutpat. Morbi tristique senectus et netus.\n\t\t\t\t\n\t\t\t\tVarius vel pharetra vel turpis. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Erat imperdiet sed euismod nisi. Aliquam malesuada bibendum arcu vitae. Felis eget nunc lobortis mattis aliquam. At imperdiet dui accumsan sit amet nulla facilisi. Viverra adipiscing at in tellus. Eget sit amet tellus cras adipiscing enim. Sed sed risus pretium quam vulputate dignissim suspendisse. Diam quis enim lobortis scelerisque fermentum. Sollicitudin nibh sit amet commodo nulla facilisi. Lectus mauris ultrices eros in cursus turpis. Egestas diam in arcu cursus. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget. Nunc scelerisque viverra mauris in aliquam sem. Laoreet non curabitur gravida arcu ac tortor dignissim. Tellus pellentesque eu tincidunt tortor aliquam nulla. Tristique senectus et netus et malesuada fames ac.\n\t\t\t\t\n\t\t\t\tRhoncus mattis rhoncus urna neque viverra justo nec. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Nunc congue nisi vitae suscipit tellus. Interdum velit laoreet id donec ultrices. Interdum velit laoreet id donec ultrices tincidunt arcu non. Augue ut lectus arcu bibendum. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Justo nec ultrices dui sapien eget mi. Feugiat nisl pretium fusce id velit. Eu volutpat odio facilisis mauris sit amet massa vitae. Leo urna molestie at elementum eu facilisis sed odio. Morbi leo urna molestie at elementum eu. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Nullam eget felis eget nunc lobortis mattis. Volutpat diam ut venenatis tellus in metus vulputate. Vulputate dignissim suspendisse in est ante.\n\t\t\t\t\n\t\t\t\tNascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Pretium nibh ipsum consequat nisl vel. Sagittis nisl rhoncus mattis rhoncus. Amet purus gravida quis blandit turpis cursus in hac. Lacus viverra vitae congue eu consequat ac. Sodales ut etiam sit amet nisl purus in. Eu tincidunt tortor aliquam nulla. Lorem mollis aliquam ut porttitor leo a diam. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Viverra justo nec ultrices dui sapien. Elit eget gravida cum sociis natoque penatibus. Sed elementum tempus egestas sed sed risus pretium quam. Tempus urna et pharetra pharetra massa massa ultricies mi quis.",tags:["React","Web"],quote:'"Knowing a popular web framework never hurt anybody."'},{id:3,title:"Using SignalR to get live updates from database",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla aliquet porttitor lacus luctus accumsan. Ut eu sem integer vitae justo eget magna fermentum. Massa placerat duis ultricies lacus. Non arcu risus quis varius quam quisque. Viverra tellus in hac habitasse. Luctus accumsan tortor posuere ac ut. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Quis auctor elit sed vulputate. Semper eget duis at tellus. Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada. Semper viverra nam libero justo. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Mauris sit amet massa vitae tortor. At tellus at urna condimentum mattis pellentesque id nibh. Lorem sed risus ultricies tristique nulla aliquet.\n\n\t\t\t\tAt in tellus integer feugiat scelerisque varius morbi enim. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Porta non pulvinar neque laoreet suspendisse. Tincidunt id aliquet risus feugiat in ante metus dictum. Lorem donec massa sapien faucibus et. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Tellus elementum sagittis vitae et leo duis. Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Tristique senectus et netus et malesuada fames ac turpis egestas. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. In hendrerit gravida rutrum quisque non tellus orci ac. Nunc lobortis mattis aliquam faucibus purus in. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Lectus mauris ultrices eros in cursus turpis. Id ornare arcu odio ut sem nulla. Et netus et malesuada fames. Pellentesque habitant morbi tristique senectus. Purus sit amet luctus venenatis lectus magna.\n\t\t\t\t\n\t\t\t\tMolestie at elementum eu facilisis sed odio. Risus viverra adipiscing at in tellus integer feugiat. Dictum non consectetur a erat. Volutpat blandit aliquam etiam erat velit scelerisque in. Sit amet dictum sit amet justo. Sit amet consectetur adipiscing elit ut aliquam purus sit. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Viverra nam libero justo laoreet sit amet cursus sit. Natoque penatibus et magnis dis parturient. Quis risus sed vulputate odio ut. Est pellentesque elit ullamcorper dignissim cras tincidunt. Tempus egestas sed sed risus pretium quam. Morbi non arcu risus quis. Nisl nunc mi ipsum faucibus vitae aliquet nec. Integer malesuada nunc vel risus commodo viverra maecenas accumsan.\n\t\t\t\t\n\t\t\t\tEnim nunc faucibus a pellentesque sit amet porttitor eget. Eget dolor morbi non arcu risus quis. Eu sem integer vitae justo eget magna fermentum iaculis eu. Gravida rutrum quisque non tellus orci. Tortor id aliquet lectus proin nibh. Consectetur purus ut faucibus pulvinar. Egestas congue quisque egestas diam in arcu cursus euismod. Amet justo donec enim diam vulputate ut pharetra sit amet. Fames ac turpis egestas integer eget aliquet nibh praesent tristique. Donec enim diam vulputate ut pharetra sit amet. Vulputate odio ut enim blandit volutpat maecenas volutpat. Lorem ipsum dolor sit amet consectetur adipiscing.",tags:["C#","SQL"],quote:'"You don\'t call your database. Your database calls you."'}]},e}return Object(c.a)(i,[{key:"render",value:function(){var e=this;return Object(v.jsxs)(a.a.Fragment,{children:[Object(v.jsx)(f,{}),Object(v.jsx)("main",{className:"container-fluid p-0",style:{overflowX:"hidden"},children:Object(v.jsx)(d.a,{children:Object(v.jsxs)(b.c,{children:[Object(v.jsx)(b.a,{exact:!0,path:"/",render:function(t){return Object(v.jsx)(q,Object(u.a)(Object(u.a)({},t),{},{blogItems:e.state.blogs}))}}),Object(v.jsx)(b.a,{exact:!0,path:"/blog",render:function(t){return Object(v.jsx)(I,Object(u.a)(Object(u.a)({},t),{},{blogItems:e.state.blogs,mainQuote:"Enlighten ourselves.",mainSubQuote:'"It is a two-way street. This is me attempting to give back to the community that taught me."'}))}}),Object(v.jsx)(b.a,{path:"/blog/:blogid",render:function(t){return Object(v.jsx)(I,Object(u.a)(Object(u.a)({},t),{},{blogItems:e.state.blogs}))}}),Object(v.jsx)(b.a,{path:"/aboutme",component:N})]})})})]})}}]),i}(s.Component),S=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,73)).then((function(t){var i=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;i(e),s(e),a(e),r(e),n(e)}))};i(46),i(47),i(48);n.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root")),S()}},[[70,1,2]]]);
//# sourceMappingURL=main.b3285902.chunk.js.map