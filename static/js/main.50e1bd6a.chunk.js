(this.webpackJsonpmon_cv=this.webpackJsonpmon_cv||[]).push([[0],[,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/profile.b2e4ca31.jpg"},function(e,t,a){e.exports=a.p+"static/media/logo1.1ed29ac5.svg"},function(e,t,a){e.exports=a.p+"static/media/logo2.23982a99.svg"},function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=(a(17),a(1)),o=a(2),s=a(5),u=a(3),m=a(4),d=(a(18),a(19),a(20),a(21),a(22),a(23),function(e){var t={position:"fixed",top:0,display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",height:e.styles.topBarHeight,backgroundColor:"#fff",borderBottom:"1px solid #d8d8d8",fontWeight:"bold",padding:"0px 20px",boxSizing:"border-box"};return r.a.createElement("div",{id:"topbar",style:t},r.a.createElement("span",null,"\ud83d\ude3a\ufe0f"),r.a.createElement("h3",null,"CURRICULUM VITAE"),r.a.createElement("span",null,"\u2699\ufe0f"))}),p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).UpdateContactInput=function(e){n.setState({contactInput:e.target.value})},n.ChangeContact=function(e){var t=e.target.value;"Enter"===e.key&&(n.setState({contact:t}),document.querySelectorAll(".DefaultContact").forEach((function(e){e.style.display="none"})))},n.UpdateEmailInput=function(e){n.setState({emailInput:e.target.value})},n.ChangeEmail=function(e){var t=e.target.value;"Enter"===e.key&&n.setState({email:t,emailInput:""})},n.state={contact:n.props.contact,email:n.props.email,emailInput:"",contactInput:""},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h4",null,"Email"),r.a.createElement("input",{className:"changeInput",value:this.state.emailInput,onChange:this.UpdateEmailInput,onKeyPress:this.ChangeEmail}),r.a.createElement("a",{target:"email",className:"App-link",href:"mailto:"+this.state.email},this.state.email)),r.a.createElement("div",null,r.a.createElement("h4",null,"Tel"),r.a.createElement("textarea",{className:"changeInput",value:this.state.contactInput,onChange:this.UpdateContactInput,onKeyPress:this.ChangeContact}),r.a.createElement("div",{id:"ContentObjectif"},r.a.createElement("center",null,this.state.contact))),r.a.createElement("div",{className:"DefaultContact"},"Dakar, S\xe9n\xe9gal",r.a.createElement("dt",null,this.props.tel),r.a.createElement("dt",null,this.props.nais)),r.a.createElement("div",{className:"DefaultContact"},r.a.createElement("h4",null,"LinkedIn"),r.a.createElement("a",{className:"App-link",target:"link",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/hakim-gueye-20a6511b3/"},"Compte LinkedIn")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),a}(r.a.Component);p.defaultProps={email:"beatsjordy@gmail.com"};var h=p,E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).ChangeName=function(e){if("Enter"===e.key){var t=e.target.value;n.setState({name:t,changeNom:""})}},n.UpdateName=function(e){n.setState({changeNom:e.target.value})},n.UpdateProfession=function(e){n.setState({changeProfession:e.target.value})},n.ChangeProfession=function(e){var t=e.target.value;"Enter"===e.key&&n.setState({profession:t,changeProfession:""})},n.state={name:n.props.name,profession:n.props.profession,changeNom:"",changeProfession:""},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui header"},r.a.createElement("span",{id:"profile"},r.a.createElement("h6",{className:"titre"},"Prenom & Nom : ",this.state.changeNom),r.a.createElement("input",{id:"prenom",className:"changeInput",value:this.state.changeNom,onKeyPress:this.ChangeName,onChange:this.UpdateName}),r.a.createElement("h1",{id:"nom"},this.state.name),r.a.createElement("h6",{className:"titre"},"Profession : ",this.state.changeProfession),r.a.createElement("input",{id:"input-profession",className:"changeInput",value:this.state.changeProfession,onKeyPress:this.ChangeProfession,onChange:this.UpdateProfession}),r.a.createElement("h4",{id:"profession"},this.state.profession)),r.a.createElement("div",{className:"ui small images "},r.a.createElement("img",{className:"photo",src:this.props.src,alt:"Photo_De_Profile"})))}}]),a}(r.a.Component);E.defaultProps={name:"Hakim Gueye",profession:"Developpeur Web"};var g=E,f=a(9),b=a.n(f),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).UpdateObjectifInput=function(e){n.setState({ObjectInput:e.target.value})},n.ChangeObjectif=function(e){var t=e.target.value;"Enter"===e.key&&(n.setState({objectif:t}),document.querySelector("#DefaultObjectif").style.display="none")},n.state={objectif:n.props.objectifChange,ObjectInput:""},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"sidebarmobile",className:"ui center aligned container"},r.a.createElement("div",{className:"colorBtn"}),r.a.createElement("div",null,r.a.createElement(g,{src:b.a})),r.a.createElement("div",{id:"ContentObjectif"},r.a.createElement("h1",null,"Objectif "),r.a.createElement("h6",{className:"titre"},"Commencez \xe0 Saisir :"),r.a.createElement("textarea",{className:"changeInput",value:this.state.ObjectInput,onKeyPress:this.ChangeObjectif,onChange:this.UpdateObjectifInput}),r.a.createElement("p",null,this.state.objectif),r.a.createElement("div",{id:"DefaultObjectif"},r.a.createElement("p",null,"D\xe9veloppeur web et technicien r\xe9seau ",r.a.createElement("em",null,"CISCO")," d\xe9butant depuis maintenant ",r.a.createElement("strong",null,"2 ans")),r.a.createElement("p",null,"Je suis une personne rigoureuse, pr\xe9cise, qui appr\xe9cie l'informatique dans tous ses aspects."),r.a.createElement("p",null,"D\xe9crocher ce poste me cherche \xe0 acqu\xe9rir de nouvelles comp\xe9tences encore trop peu exploit\xe9es jusqu'\xe0 aujourd'hui.")),r.a.createElement("div",null,r.a.createElement(h,{contact:this.props.contact,email:this.props.email,tel:"+221 765383755",nais:"18-08-1997"}))))}}]),a}(r.a.Component),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).changeColor=function(e){var t=e.target.dataset.color;document.querySelector(".App-header").style.background=t,document.querySelector(".ui.ribbon.label").style.background=t,"rgba(165, 42, 42, 0.932)"===t&&(document.querySelector(".App-header").style.background=t,document.querySelector(".ui.ribbon.label").style.backgroundColor="rgb(182, 73, 73)")},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"colorBtn"},r.a.createElement("button",{id:"blue",className:"ui button","data-color":"rgba(0, 0, 255, 0.555)",onClick:this.changeColor},"Blue"),r.a.createElement("button",{id:"orange",className:"ui button","data-color":"rgba(255, 102, 0, 0.692)",onClick:this.changeColor},"Orange"),r.a.createElement("button",{id:"noire",className:"ui button","data-color":"rgba(128, 0, 128, 0.432)",onClick:this.changeColor},"Violet"),r.a.createElement("button",{id:"verte",className:"ui button","data-color":"rgba(0, 128, 0, 0.623)",onClick:this.changeColor},"Verte"),r.a.createElement("button",{id:"marron",className:"ui button","data-color":"rgba(165, 42, 42, 0.932)",onClick:this.changeColor},"Marron"))}}]),a}(r.a.Component),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).showPage=function(e){document.querySelectorAll(".ContenuPage").forEach((function(e){e.style.display="none"}));var t=e.target.dataset.page;document.querySelectorAll(".ContenuPage").forEach((function(e){e.style.animationPlayState="paused"})),document.querySelector("#".concat(t)).style.display="block",document.querySelector("#accueil").style.display="none",document.querySelector("#".concat(t)).style.animationPlayState="running",document.querySelector("#accueil").style.animationPlayState="paused","accueil"===t&&(document.querySelector("#accueil").style.display="block",document.querySelector("#accueil").style.animationPlayState="running"),document.querySelector("#pages").style.position="page5"===t?"relative":"fixed",window.innerWidth<=825&&(document.querySelector("#pages").style.position="relative")},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"ui button",onClick:this.showPage,"data-page":"accueil"},"Accueil"),r.a.createElement("button",{className:"ui button",onClick:this.showPage,"data-page":"page1"},"Experience"),r.a.createElement("button",{className:"ui button",onClick:this.showPage,"data-page":"page2"},"Diplomes"),r.a.createElement("button",{className:"ui button",onClick:this.showPage,"data-page":"page3"},"Competences"),r.a.createElement("button",{className:"ui button",onClick:this.showPage,"data-page":"page4"},"Certificat"),r.a.createElement("button",{className:"ui button",onClick:this.showPage,"data-page":"page5"},"Imprimer"))}}]),a}(r.a.Component),w=function(e){var t=e.styles,a={height:"auto",width:t.sidebarWidth,paddingTop:4},n={display:"flex",justifyContent:t.sidebarCollapsed?"center":"flex-start",alignItems:"center",padding:"6px ".concat(t.sidebarCollapsed?0:10,"px"),color:t.white(.9),marginTop:65};return r.a.createElement("div",{className:"App-header"},r.a.createElement("div",{style:{marginLeft:178,position:"fixed"},className:"ui ribbon label"},r.a.createElement(C,null)),r.a.createElement("div",{style:a},r.a.createElement("div",{style:n},r.a.createElement(y,null)),r.a.createElement(v,null)))},k=a(10),j=a.n(k),N=a(11),O=a.n(N),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).ShowBtn=function(){document.querySelectorAll(".changeInput").forEach((function(e){e.style.display="block"})),document.querySelectorAll(".titre").forEach((function(e){e.style.display="block"})),document.querySelector("#modifier-btn").style.display="none",document.querySelector("#annuler-btn").style.display="block"},e.CancelBtn=function(){document.querySelectorAll(".changeInput").forEach((function(e){e.style.display="none"})),document.querySelectorAll(".titre").forEach((function(e){e.style.display="none"})),document.querySelector("#annuler-btn").style.display="none",document.querySelector("#modifier-btn").style.display="block"},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"imagesPhoto"},r.a.createElement("img",{className:"img",src:this.props.src,alt:"images"}),r.a.createElement("img",{className:"img1",src:this.props.src1,alt:"Images 1"}),r.a.createElement("span",null,r.a.createElement("h3",{className:"h3"},"Bienvenue sur Mon Curriculum Vitae"),r.a.createElement("h4",{className:"h4"},"Vous pouvez creer votre propre cv en modifiant le style Actuelle"),r.a.createElement("h5",{className:"h5"},"Cliquez sur le Boutton Modifier pour commencez a creer Votre propre cv , modifier la couleur du theme de votre choix puis imprimer le Cv creer."),r.a.createElement("div",{className:"h5"},r.a.createElement("center",null," ",r.a.createElement("button",{id:"modifier-btn",className:"ui buttom",onClick:this.ShowBtn},"Modifier"))),r.a.createElement("div",null,r.a.createElement("center",null,"  ",r.a.createElement("button",{id:"annuler-btn",className:"ui buttom",onClick:this.CancelBtn},"Annuler"))),r.a.createElement("br",null)))}}]),a}(r.a.Component),A=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("span",null,r.a.createElement("center",null,r.a.createElement("h1",null,this.props.title))),r.a.createElement(S,{src:this.props.photo,src1:this.props.photo1}))}}]),a}(r.a.Component),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(A,{title:"Curriculum Vitae",photo:j.a,photo1:O.a})),r.a.createElement("div",null))}}]),a}(r.a.Component),P=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h3",null,e.title)),r.a.createElement("hr",null)),r.a.createElement("div",null,r.a.createElement("center",null,"\u2022 Formation de base de la cyber s\xe9curit\xe9, y compris les bases de la s\xe9curit\xe9 r\xe9seau, DevSecOps (d\xe9veloppement, s\xe9curit\xe9, op\xe9rations), les lois de cryptage et de cyber s\xe9curit\xe9, Certifi\xe9es\xa0Cisco Networking Academy Cybersecurity Essentials."),r.a.createElement("br",null),r.a.createElement("center",null,"\u2022 Formation sur la Cyber s\xe9curit\xe9, Certifi\xe9es Cisco Networking Academy Introduction to Cybersecurity."),r.a.createElement("br",null),r.a.createElement("center",null,"\u2022 Formation sur l\u2019Entreprenariat, certifi\xe9es   Cisco Networking Academy Entrepreneurship."),r.a.createElement("br",null),r.a.createElement("center",null,"\u2022 Formation sur React Native Basics, Certificat of Graduation Graduating from React Native Basics\xa0: Build a Currency Converter."),r.a.createElement("br",null),r.a.createElement("center",null," \u2022 Formation  Cisco Networking Academy\xae Emerging Technologies Workshop on Model Driven Programmability.")))},q=function(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h3",null,e.title)),r.a.createElement("hr",null)),r.a.createElement("center",null,"Maroc, Mekn\xe8s"),r.a.createElement("center",null,r.a.createElement("dt",null,"Juin 2019 A Distance")," D\xe9veloppeur Web"),r.a.createElement("p",null,r.a.createElement("em",null,"Entreprise Lyon Dynasty Cr\xe9er, r\xe9viser et corriger des Communications d'entreprise et marketing sur le web digital (E-commerce) .")))},x=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"titrecv"},r.a.createElement("h3",null,e.title),r.a.createElement("hr",null)),r.a.createElement("div",null,r.a.createElement("article",null,r.a.createElement("center",null,"Bamako, Mali"),r.a.createElement("center",null,"2010-2011"),r.a.createElement("center",null,"Dipl\xf4me d'Etudes Fondamentales DEF Ecole Fondamentale Maridie Diarra")),r.a.createElement("br",null),r.a.createElement("article",null,r.a.createElement("center",null,"Bamako, Mali"),r.a.createElement("center",null,"2016-2017"),r.a.createElement("center",null,"Dipl\xf4mes de Baccalaur\xe9at Malien S\xc9RIE Science Exp\xe9rimentale (BAC)",r.a.createElement("center",null,"Lyc\xe9e Mamadou Moctar Ba"),r.a.createElement("center",null,"Moyenne D\u2019admission : 13,39"),"Mention : Assez-Bien")),r.a.createElement("br",null),r.a.createElement("article",null,r.a.createElement("center",null,"Bamako, Mali"),r.a.createElement("center",null,"2018-2020"),r.a.createElement("center",null,"Dipl\xf4me Universitaire de Technologie (DUT2) Analyse Programmation BAC+2",r.a.createElement("br",null)," Universit\xe9 TechnoLab-ISTA")),r.a.createElement("br",null)))},B=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"titrecv"},r.a.createElement("h3",null,e.title),r.a.createElement("hr",null)),r.a.createElement("div",null,r.a.createElement("p",null,"\u2022 Administration de bureau"),r.a.createElement("p",null,"\u2022 R\xe9solution des probl\xe8mes informatiques"),r.a.createElement("p",null,"\u2022 Ventes en Lignes"),r.a.createElement("p",null,"\u2022 Cr\xe9ation de site Web"),r.a.createElement("p",null,"\u2022 Configuration de r\xe9seau CISCO"),r.a.createElement("p",null,"\u2022 React Native"),r.a.createElement("p",null,"\u2022 GitHub"),r.a.createElement("p",null,"\u2022 HTML, JavaScript et Python"),r.a.createElement("p",null,"\u2022 Adaptation aux nouvelles technologies")))},D=(a(7),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).imprimer=function(){document.querySelectorAll(".changeInput").forEach((function(e){e.style.display="none"})),document.querySelectorAll(".titre").forEach((function(e){e.style.display="none"})),document.querySelector(".colorBtn").style.display="none",document.querySelector(".ui.ribbon.label").style.display="none",document.querySelector("#telechargerTitleBtn").style.display="none",document.querySelector(".curriculumVitae").style.display="block",window.print()},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"nofixed"},r.a.createElement("div",{id:"telechargerTitleBtn"},r.a.createElement("h2",null,this.props.title),r.a.createElement("button",{className:"ui button",onClick:this.imprimer},"Cliquez Ici")),r.a.createElement("h1",{className:"curriculumVitae"},"CURRICULUM VITAE"),r.a.createElement("div",null,r.a.createElement(q,{title:"Experiences"})),r.a.createElement("div",null,r.a.createElement(x,{title:"Diplomes"})),r.a.createElement("div",null,r.a.createElement(B,{title:"Competences"})),r.a.createElement("div",null,r.a.createElement(P,{title:"Certificats"})))}}]),a}(n.Component)),M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"pages"},r.a.createElement("div",{className:"ui center aligned container"},r.a.createElement("div",{className:"accueil",id:"accueil"},r.a.createElement(I,{title:"Accueil"}),r.a.createElement("div",{id:"yy"})),r.a.createElement("div",{className:"ContenuPage",id:"page1"},r.a.createElement(q,{title:"Experiences"})),r.a.createElement("div",{className:"ContenuPage",id:"page2"},r.a.createElement(x,{title:"Diplomes"})),r.a.createElement("div",{className:"ContenuPage",id:"page3"},r.a.createElement(B,{title:"Competences"})),r.a.createElement("div",{className:"ContenuPage",id:"page4"},r.a.createElement(P,{title:"Certification et Cours"})),r.a.createElement("div",{className:"ContenuPage",id:"page5"},r.a.createElement(D,{title:"Telecharger le CV"}))))}}]),a}(n.Component),U=function(e){var t=e.styles,a=t.showSidebar,n={paddingTop:a?67:t.topBarHeight+20,paddingRight:"auto",paddingBottom:a?20:t.footerMenuHeight+20,paddingLeft:a?t.sidebarWidth+1:20,position:"absolute",color:t.white(),marginRight:1};return r.a.createElement("div",{style:n},r.a.createElement(M,null))},T=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).changeColor=function(e){var t=e.target.dataset.color;document.querySelector(".App-header").style.background=t,document.querySelector("#footer").style.background=t,"rgba(165, 42, 42, 0.932)"===t&&(document.querySelector(".App-header").style.background=t)},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"colorBtnM"},r.a.createElement("button",{className:"ui tiny button","data-color":"rgba(0, 0, 255, 0.555)",onClick:this.changeColor},"Blue"),r.a.createElement("button",{className:"ui tiny button","data-color":"rgba(255, 102, 0, 0.692)",onClick:this.changeColor},"Orange"),r.a.createElement("button",{className:"ui tiny button","data-color":"rgba(128, 0, 128, 0.432)",onClick:this.changeColor},"Violet"),r.a.createElement("button",{className:"ui tiny button","data-color":"rgba(0, 128, 0, 0.623)",onClick:this.changeColor},"Verte"))}}]),a}(r.a.Component),W=function(e){e.menuItems;var t=e.styles;return r.a.createElement("div",{id:"footer",style:{display:"flex",alignItems:"stretch",width:"100%",height:t.footerMenuHeight,backgroundColor:"#333",color:"#fff",position:"fixed",bottom:0}},r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flex:1}},r.a.createElement(T,null)))},R=function(e){e.menuItems,e.styles;return r.a.createElement("div",{style:{height:"0vh",width:"200px",position:"none",paddingTop:40}},r.a.createElement("div",{className:"App-header"},r.a.createElement(v,null)))},V=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).imprimer=function(){document.querySelector("#telechargerTitleBtn").style.display="none",document.querySelector("#footer").style.display="none",window.print()},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"nofixed"},r.a.createElement("div",{id:"telechargerTitleBtn"},r.a.createElement("h2",null,this.props.title),r.a.createElement("button",{className:"ui button",onClick:this.imprimer},"Ici")),r.a.createElement("h1",{className:"curriculumVitae"},"CURRICULUM VITAE"),r.a.createElement("div",null,r.a.createElement(q,{title:"Experiences"})),r.a.createElement("div",null,r.a.createElement(x,{title:"Diplomes"})),r.a.createElement("div",null,r.a.createElement(B,{title:"Competences"})),r.a.createElement("div",null,r.a.createElement(P,{title:"Certificats"})))}}]),a}(n.Component),L=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"pageMobile"},r.a.createElement("div",{className:"ui center aligned container"},r.a.createElement("div",{id:"page5"},r.a.createElement(V,{title:"Telecharger le CV"}))))}}]),a}(n.Component),H=function(e){var t=e.styles,a=t.showSidebar,n={paddingTop:a?20:t.topBarHeight+20,paddingRight:20,paddingBottom:a?20:t.footerMenuHeight+20,paddingLeft:a?t.sidebarWidth+20:212,color:t.white()};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(R,null)),r.a.createElement("div",{style:n},r.a.createElement(L,null)))},F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={windowWidth:0,windowHeight:0},n.updateDimensions=n.updateDimensions.bind(Object(s.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions)}},{key:"updateDimensions",value:function(){var e="undefined"!==typeof window?window.innerWidth:0,t="undefined"!==typeof window?window.innerHeight:0;this.setState({windowWidth:e,windowHeight:t})}},{key:"render",value:function(){var e=this.state.windowWidth,t=e<1100,a={white:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"rgba(255, 255, 255, ".concat(e,")")},black:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"rgba(165, 42, 42,  ".concat(e,")")},topBarHeight:40,footerMenuHeight:50,showFooterMenuText:e>500,showSidebar:e>768,sidebarCollapsed:t,sidebarWidth:t?50:250};return r.a.createElement("div",{className:"App",style:{backgroundColor:"282c34"}},a.showSidebar&&r.a.createElement(U,{styles:a}),a.showSidebar?r.a.createElement(w,{styles:a}):r.a.createElement(d,{styles:a}),!a.showSidebar&&r.a.createElement(H,{styles:a}),!a.showSidebar&&r.a.createElement(W,{styles:a}))}}]),a}(r.a.Component),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):J(t,e)}))}}()}],[[12,1,2]]]);
//# sourceMappingURL=main.50e1bd6a.chunk.js.map