"use strict";(self.webpackChunkmy_big_project=self.webpackChunkmy_big_project||[]).push([[342],{2126:function(e,s,t){t.r(s),t.d(s,{default:function(){return N}});var i=t(2791),a=t(8261),n=t(2681),r=t.p+"static/media/Landscape-Color.15acb824bff477d61d20.jpg",l=t(885),o=t(9434),c=t(184),u=function(e){var s=(0,i.useState)(!1),t=(0,l.Z)(s,2),a=t[0],n=t[1],r=(0,i.useState)(e.status),u=(0,l.Z)(r,2),d=u[0],f=u[1],p=(0,o.I0)();return(0,c.jsx)("div",{className:"L-profile-status",children:a?(0,c.jsx)("div",{className:"L-status-child",children:(0,c.jsx)("input",{autoFocus:!0,onBlur:function(){n(!a),p(e.updateStatus(d))},onChange:function(e){var s=e.currentTarget.value;f(s)},type:"text",value:d})}):(0,c.jsx)("div",{className:"L-status-child",children:(0,c.jsx)("span",{onClick:function(){n(!a)},children:e.status||"my status"})})})},d=function(e){return e.profile?(0,c.jsxs)("div",{className:"L-profile-info ",children:[(0,c.jsx)("div",{className:"L-profile-info-cover",style:{backgroundImage:"url('".concat(r,"')")}}),(0,c.jsxs)("div",{className:"L-profile-info-content G-flex G-align-center",children:[(0,c.jsxs)("div",{className:"L-profile-info-child",children:[(0,c.jsx)("img",{src:e.profile.photos.small?e.profile.photos.small:n,alt:"img"}),(0,c.jsx)(u,{status:e.status,updateStatus:e.updateStatus})]}),(0,c.jsxs)("div",{className:"L-profile-info-child",children:[(0,c.jsxs)("div",{className:"L-profile-about-me",children:["About Me::",e.profile.aboutMe?e.profile.aboutMe:" ***"]}),(0,c.jsxs)("div",{className:"L-profile-about-me",children:["Full Name::",e.profile.fullName?!e.profile.fullName:" ***"]}),(0,c.jsxs)("div",{className:"L-profile-about-me",children:["Job Description::",e.profile.lookingForAJobDescription?e.profile.lookingForAJobDescription:" ***"]})]})]})]}):(0,c.jsx)("div",{className:"profilePreloader",children:(0,c.jsx)(a.Z,{})})},f=t.p+"static/media/icon.38948e8765236f4c6356.png",p=function(e){var s=e.message,t=e.likesCount;return(0,c.jsxs)("div",{className:"L-posts",children:[(0,c.jsxs)("div",{className:"L-post-item G-flex G-align-center",children:[(0,c.jsx)("img",{src:f,alt:"img",style:{width:"50px"}}),(0,c.jsx)("p",{children:s})]}),(0,c.jsxs)("b",{className:"L-post-like",children:["Like ",t]})]})},m=t(3101),x=function(){var e=(0,o.v9)((function(e){return e.profileReducer})),s=(0,o.I0)(),t=e.posts,i=e.newPostText,a=t.map((function(e){return(0,c.jsx)(p,{message:e.message,likesCount:e.likesCount},e.id)}));return(0,c.jsx)("div",{className:"L-my-posts ",children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"L-title-posts",children:"My Posts"}),(0,c.jsxs)("div",{className:"L-edit-posts G-flex",children:[(0,c.jsx)("textarea",{placeholder:"Enter Your Message",onChange:function(e){var t=e.target.value;s((0,m.dB)(t))},value:i}),(0,c.jsx)("button",{onClick:function(){i&&s((0,m.dH)())},children:"Add"})]}),(0,c.jsx)("div",{className:"L-posts-items G-flex G-flex-wrap ",children:a})]})})},h=function(e){return(0,c.jsxs)("div",{className:"G-container ",children:[(0,c.jsx)(d,{profile:e.profile,status:e.status,updateStatus:e.updateProfileStatusTC}),(0,c.jsx)(x,{})]})},j=t(1548),v=t(7781),g=t(9271),N=(0,v.qC)(g.EN,j.Z)((function(e){var s=(0,o.I0)(),t=(0,o.v9)((function(e){return e.profileReducer.profile})),a=(0,o.v9)((function(e){return e.profileReducer.status})),n=(0,o.v9)((function(e){return e.auth.data.id}));return(0,i.useEffect)((function(){var t=e.match.params.userId;t||(t=n)||e.history.push("/login"),s((0,m.jD)(t)),s((0,m.Ix)(t))}),[]),(0,c.jsx)(h,{profile:t,status:a,updateProfileStatusTC:m.xr})}))},1548:function(e,s,t){var i=t(1413),a=(t(2791),t(9434)),n=t(9271),r=t(184);s.Z=function(e){return function(s){return(0,a.v9)((function(e){return e.auth.data.isAuth}))?(0,r.jsx)(e,(0,i.Z)({},s)):(0,r.jsx)(n.l_,{to:"/login"})}}}}]);
//# sourceMappingURL=342.2151222f.chunk.js.map