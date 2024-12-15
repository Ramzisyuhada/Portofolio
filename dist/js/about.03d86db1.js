(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"041b":function(t,e,a){},"0cb9":function(t,e,a){},"1ba2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Resume")]),t._m(0),t._m(1),a("div",{staticStyle:{clear:"both"}}),a("div",{staticClass:"full-content"},[a("h2",[t._v("Work experience")]),a("h3",[t._v("Game Developer")]),a("h4",[t._v("2024-Present")]),a("div",[t._v("Design and development of games.")]),a("h2",[t._v("Skills")]),a("div",{staticClass:"skill-set"},[a("h3",[t._v("Languages")]),a("SkillRate",{attrs:{name:"Java",rate:5}}),a("SkillRate",{attrs:{name:"C#",rate:5}}),a("SkillRate",{attrs:{name:"Python",rate:3}}),a("SkillRate",{attrs:{name:"C++",rate:3}})],1),a("div",{staticClass:"skill-set"},[a("h3",[t._v("Game Dev")]),a("SkillRate",{attrs:{name:"Unity (2023)",rate:4}})],1),a("div",{staticStyle:{clear:"both"}}),a("h2",[t._v("Education")]),a("h3",[t._v("Institut Teknologi Nasional Bandung - Present")]),a("h4",[t._v("Computer science engineer")]),a("div",[t._v("Specialty in multimedia & information technology ")]),a("h2",[t._v("Languages")]),a("h3",[t._v("Indonesia")]),a("div",[t._v("Basic knowledge but I know lots of one-liners")]),a("h2",[t._v("Besides...")]),t._m(2)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paragraph"},[t._v(" I'm "),a("strong",[t._v("Ramzi syuhada")]),t._v(", I am highly dedicated to developing Virtual Reality (VR) applications and passionate about creating innovative immersive technology experiences. "),a("br"),t._v("I have a strong understanding of VR development using Unity and OpenXR, as well as technical skills in C# programming to deliver interactive and high-quality applications. "),a("div",{staticStyle:{"margin-top":"20px","margin-bottom":"20px"}},[a("a",{staticClass:"download-link",attrs:{href:"https://drive.google.com/file/d/1PDpWl_bdYDvMGf3uwyF1-jlfpNDFAk-i/view?usp=drive_link.pdf",target:"_blank"}},[a("i",{staticClass:"fa fa-download fa-lg fa-fw"}),t._v(" Download as PDF 🇬🇧")]),a("div",{staticStyle:{clear:"both"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/Avat-modified (1).png",alt:"Photo of John"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("I ❤️ Video games")]),a("div",[t._v("Some of my GOTYs: Dark Souls, Stalker, Hunt: Showdown, Into The Breach... I also ruined my teenage years on CS and Q3A. I love playing them, watching them, talking about them, studying them, watching studies about them, designing them...")]),a("h3",[t._v("I 🧡 Music")]),a("div",[t._v("Music has always been my escape and motivation. Back in the day, I was lean and light, but after countless hours of dedication, 10 kilos of supplements, and 1000 daily push-ups, I transformed myself. The rhythm of life is just better with some hard work and good tunes.")])])}],i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"skill-name"},[t._v(t._s(t.name))]),a("div",{staticClass:"skill-rate"},[t._l(5,(function(e){return[e<=t.rate?a("div",{key:t.name+"-"+e,staticClass:"circle circle-full"}):t._e(),e>t.rate?a("div",{key:t.name+"-"+e,staticClass:"circle circle-empty"}):t._e()]}))],2),a("div",{staticClass:"clear"})])},o=[],l=i["a"].extend({name:"SkillRate",props:{name:String,rate:Number}}),c=l,u=(a("bd5f"),a("2877")),p=Object(u["a"])(c,r,o,!1,null,"c97307b4",null),h=p.exports,f=i["a"].extend({name:"Resume",components:{SkillRate:h}}),m=f,d=(a("7b01"),Object(u["a"])(m,n,s,!1,null,"7be8d5bc",null));e["default"]=d.exports},"1e66":function(t,e,a){"use strict";var n=a("dec8"),s=a.n(n);s.a},"27bb":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"projects-list"},[t._l(t.projects,(function(e){return[a("div",{key:e.id,staticClass:"project-item",class:{wide:e.isWide,high:e.isHigh},on:{click:function(a){return t.showDetails(e)}}},[a("div",{staticClass:"project-item-image",style:{"background-image":"url("+e.iconUrl+")"}}),a("div",{staticClass:"title-bar",style:{"background-color":e.accentColor+"DD"}},[a("div",{staticClass:"title-text"},[t._v(" "+t._s(e.name)+" ")])])])]}))],2),a("ProjectDetailsOverlay",{attrs:{visible:t.showPopup,title:t.popupTitle,htmlContent:t.popupContent,color:t.popupColor},on:{close:function(e){t.showPopup=!1}}})],1)},s=[],i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.visible?a("div",[a("div",{staticClass:"overlay"}),a("div",{staticClass:"dialog",style:{"background-color":t.color}},[a("h1",{staticClass:"dialog-title"},[t._v(t._s(t.title))]),a("div",{staticClass:"dialog-close",on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fa fa-times fa-lg fa-fw"})]),a("div",{staticClass:"dialog-content"},[a("div",{domProps:{innerHTML:t._s(t.htmlContent)}}),a("div",{staticClass:"dialog-bottom"},[a("a",{staticClass:"dialog-close-button",on:{click:function(e){return t.$emit("close")}}},[t._v("Close")])])])])]):t._e()])},o=[],l=i["a"].extend({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(t){console.log("fetching image "+t)}}}),c=l,u=(a("1e66"),a("2877")),p=Object(u["a"])(c,r,o,!1,null,"e66acff8",null),h=p.exports,f=i["a"].extend({name:"ProjectsList",components:{ProjectDetailsOverlay:h},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(t){this.popupTitle=t.name,this.popupColor=t.accentColor,this.popupContent=t.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}}),m=f,d=(a("5935"),Object(u["a"])(m,n,s,!1,null,"190958aa",null));e["a"]=d.exports},"416f":function(t,e,a){},"4d97":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Games")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[t._v(" Here are some games I've created, either to be released, or during game jams, or to showcase my skills using Unity. ")]),a("ProjectsList",{attrs:{projects:t.projects}}),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-top":"20px"}},[t._v(" There is more to see on "),a("a",{attrs:{target:"_blank",href:"https://someexternalwebsite.com"}},[t._v("some external website")])])}],i=a("2b0e"),r=a("27bb"),o=a("983d"),l=[new o["a"]("project-1","VR Interior Designer","img/projects/interior.png",'\n    <div class="paragraph">\n     <strong>This VR-based learning app</strong> allows users to interactively explore office space planning principles from the Open University course (ADPU4331). Users can design rooms, arrange furniture, and apply materials, learning both aesthetic and technical aspects of office space planning in a realistic virtual environment.\n    \x3c!-- <br/>Image by <a href="https://www.pexels.com/fr-fr/@knownasovan" target="_blank">OVAN</a>. --\x3e\n    </div>\n    <div class="paragraph center">\n        <iframe class="youtube" src="https://www.youtube.com/embed/oGk_8BZtscM?si=9SIIuiXMZ2CnHENh" frameborder="0" allowfullscreen></iframe>\n    </div>\n    \n    <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Snap Furniture helps users place objects accurately and consistently, aiding in the room layout process. This feature ensures that elements do not overlap and maintain uniform spacing.</li>\n        <li>Users can change the wall color by pointing the laser at the desired wall and pressing the Trigger button on the VR controller. After that, a color menu appears, allowing users to select a color from the palette by pressing the Trigger button. This feature makes it easy for users to modify the wall’s appearance and create the desired atmosphere in the office space.</li>\n        <li>To rotate, resize, or delete furniture, users simply point the laser at the desired furniture and press the Trigger button on the VR controller. A menu with options for Rotate, Size, and Delete will appear. Option explanations:\n\n- Rotate: Users can select the Rotate option and use the VR controller’s joystick to rotate the furniture.\n- Size: Users select the Size option and use the joystick to resize the furniture, making it larger or smaller.\n- Delete: Users select the Delete option to remove the furniture from the room.</li>\n        <li>And then some</li>\n        </ul>\n    </div>\n\n    <div class="paragraph center">\n        <img class="phone-screenshot" src="Image/Interior.png" alt="Optimistic Chubby Screenshot" />\n        <img class="phone-screenshot" src="Image/Interior1.png" alt="Optimistic Chubby Screenshot" />\n    </div>\n    ',"#23bd69",!0)],c=i["a"].extend({name:"GameProjects",components:{ProjectsList:r["a"]},data:function(){return{projects:l}}}),u=c,p=a("2877"),h=Object(p["a"])(u,n,s,!1,null,null,null);e["default"]=h.exports},5754:function(t,e,a){"use strict";var n=a("041b"),s=a.n(n);s.a},5935:function(t,e,a){"use strict";var n=a("416f"),s=a.n(n);s.a},"67f3":function(t,e,a){"use strict";var n=a("ee3f"),s=a.n(n);s.a},"7b01":function(t,e,a){"use strict";var n=a("0cb9"),s=a.n(n);s.a},"7c58":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Other stuff")]),a("div",{staticStyle:{"margin-bottom":"30px"}},[t._v(" And here are some other stuff I've made or heavily contributed to, which are totally different than the stuff from earlier. ")]),a("ProjectsList",{attrs:{projects:t.projects}})],1)},s=[],i=a("2b0e"),r=a("27bb"),o=a("983d"),l=[new o["a"]("project-6","Sultans Of Sing","img/projects/project-6-icon.png",'\n    <div class="paragraph">\n      <strong>Sultans Of Sing</strong> is a thing of beauty that I am so proud of. It\'s available on Windows Store because why not.\n      <br/>Image by <a href="https://www.pexels.com/fr-fr/@aldoalz" target="blank">Aldo Picaso</a>.\n            </div>\n            <div class="paragraph center">\n              <a href="https://www.microsoft.com/en-us/p/some-app" target="_blank"><img src="img/projects/ms-store-logo.png" alt="MS Store button" /></a>\n          </div>\n\n          <div class="paragraph">\n            Main features :\n            <ul>\n            <li>Some stuff</li>\n            <li>Some great stuff</li>\n            <li>More awesome stuff</li>\n            <li>And then some</li>\n            </ul>\n        </div>\n\n        <div class="paragraph center">\n          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />\n          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />\n          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" /> \n        </div>\n    ',"#c10606",!1,!0),new o["a"]("project-7","Drew Blood","img/projects/project-7-icon.png",'\n    <div class="paragraph">\n                <strong>Drew Blood</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@karolina-grabowska">Karolina Grabowska</a>.\n            </div>\n\n            <div class="paragraph">\n              Main features :\n              <ul>\n              <li>Some stuff</li>\n              <li>Some great stuff</li>\n              <li>More awesome stuff</li>\n              <li>And then some</li>\n              </ul>\n          </div>\n\n            <div class="paragraph">\n              <div class="notice">\n                You can download and try the app for free or purchase it directly from <a href="http://www.somewbsite.com/" target="_blank">Some website</a>\n              </div>\n            </div>\n\n            <div class="paragraph center">\n                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />\n                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />\n                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" /> \n            </div>',"#1ca1e2"),new o["a"]("project-8","The Art of Walking","img/projects/project-8-icon.png",'\n    <div class="paragraph">\n                <strong>The Art of Walking</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n            </div>\n\n            <div class="paragraph center">\n              <a href="https://play.google.com/store/apps/details?id=someapp" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>\n          </div>\n\n          <div class="paragraph">\n          Main features :\n          <ul>\n          <li>Some stuff</li>\n          <li>Some great stuff</li>\n          <li>More awesome stuff</li>\n          <li>And then some</li>\n          </ul>\n      </div>\n\n            <div class="paragraph">\n              <div class="notice">\n                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.\n              </div>\n            </div>\n\n            <div class="paragraph center">\n                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />\n                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />\n            </div>'),new o["a"]("project-9","Nikolable","img/projects/project-9-icon.png",'\n     <div class="paragraph">\n                <strong>Nikolable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.\n                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@goumbik">Lukas</a>.\n            </div>\n\n            <div class="paragraph">\n        Main features :\n        <ul>\n        <li>Some stuff</li>\n        <li>Some great stuff</li>\n        <li>More awesome stuff</li>\n        <li>And then some</li>\n        </ul>\n    </div>\n\n            <div class="paragraph">\n              <div class="notice">\n                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.\n              </div>\n            </div>')],c=i["a"].extend({name:"OtherProjects",components:{ProjectsList:r["a"]},data:function(){return{projects:l}}}),u=c,p=a("2877"),h=Object(p["a"])(u,n,s,!1,null,null,null);e["default"]=h.exports},"8cdb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"http-404"},[t._v("404 🙈")])},s=[],i=(a("67f3"),a("2877")),r={},o=Object(i["a"])(r,n,s,!1,null,"c64612d2",null);e["default"]=o.exports},"983d":function(t,e,a){"use strict";var n=function(){function t(t,e,a,n,s,i,r){void 0===s&&(s="#000000"),void 0===i&&(i=!1),void 0===r&&(r=!1),this.id=t,this.name=e,this.htmlDescription=n,this.iconUrl=a,this.isHigh=i,this.isWide=r,this.accentColor=s}return t}();e["a"]=n},b8fa:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Let's get in touch")]),a("div",{staticStyle:{"margin-bottom":"40px"}},[t._v("I'm looking for a job !"),a("br"),t._v("Feel free to contact me about any opportunity, or just to chat about cooking, kittens or anything else.")]),a("ul",[a("li",[a("i",{staticClass:"fa fa-user-circle-o fa-lg fa-fw"}),a("a",{attrs:{href:"http://mywebsite.com",target:"_blank"}},[t._v("https://mywebsite.com")])]),a("li",[a("i",{staticClass:"fa fa-envelope-o fa-lg fa-fw"}),a("a",{attrs:{href:"mailto:my@email.com",target:"_blank"}},[t._v("my@email.com")])]),a("li",[a("i",{staticClass:"fa fa-linkedin fa-lg fa-fw",staticStyle:{"vertical-align":"-5%"}}),a("a",{attrs:{href:"https://www.linkedin.com/me",target:"_blank"}},[t._v("linkedin.com/me")])]),a("li",[a("i",{staticClass:"fa fa-github fa-lg fa-fw"}),a("a",{attrs:{href:"https://github.com/me",target:"_blank"}},[t._v("github.com/me")])]),a("li",[a("i",{staticClass:"fa fa-gamepad fa-lg fa-fw"}),a("a",{attrs:{href:"https://myself.itch.io",target:"_blank"}},[t._v("myself.itch.io")])]),a("li",[a("i",{staticClass:"fa fa-tumblr fa-lg fa-fw"}),a("a",{attrs:{href:"https://myblog.tumblr.com",target:"_blank"}},[t._v("myblog.tumblr.com")])]),a("li",[a("i",{staticClass:"fa fa-steam fa-lg fa-fw"}),a("a",{attrs:{href:"https://steamcommunity.com/id/me",target:"_blank"}},[t._v("steam.com/me")])])])])}],i=(a("cf77"),a("2877")),r={},o=Object(i["a"])(r,n,s,!1,null,"72776aec",null);e["default"]=o.exports},bd5f:function(t,e,a){"use strict";var n=a("eebd"),s=a.n(n);s.a},c01e:function(t,e,a){},cf77:function(t,e,a){"use strict";var n=a("c01e"),s=a.n(n);s.a},dec8:function(t,e,a){},ee3f:function(t,e,a){},eebd:function(t,e,a){},f820:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"margin-bottom":"80px"}},[a("h1",[t._v("Hello!")]),a("div",{staticClass:"paragraph"},[a("div",[t._v(" Hello I'm "),a("strong",[t._v("Ramzi syuhada")]),t._v(", and I am a dedicated game developer with a passion for creating immersive experiences in Virtual Reality (VR) and Augmented Reality (AR)."),a("br"),t._v(" My expertise lies in developing cutting-edge applications that blend creativity and technology to engage users in dynamic and interactive environments. ")])]),a("div",{staticClass:"photo"},[a("img",{attrs:{src:"img/avatar1.png",alt:"Avatar of John"}})]),a("div",{staticStyle:{clear:"both"}})])}],i=(a("5754"),a("2877")),r={},o=Object(i["a"])(r,n,s,!1,null,"5b2f834f",null);e["default"]=o.exports}}]);
//# sourceMappingURL=about.03d86db1.js.map