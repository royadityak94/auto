_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"0oBi":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.isDarkMode=function(){if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return!0;return!1},t.useDarkMode=function(){var e=o.default.useState(!1),t=(0,r.default)(e,2),a=t[0],n=t[1];return(0,d.default)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)"),t=function(){n(window.matchMedia("(prefers-color-scheme: dark)").matches)};return t(),e.addListener(t),function(){e.removeListener(t)}}),[]),a};var r=n(a("nxTg")),o=n(a("mXGw")),d=n(a("YO29"))},"63Ad":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"6f/q":function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("RiSW")),o=n(a("mXGw")),d=n(a("9fEB")),l=a("GDok"),i=a("nZpd"),u=a("AFBu"),c=a("0oBi"),s=function(e){var t=e.children,a=(0,r.default)(e,["children"]),n=o.default.useState(!1);o.default.useEffect((function(){if("undefined"!==typeof document)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"/"===e.key&&(document.getElementById("search").focus(),e.preventDefault())}}),[]);var s=(0,c.useDarkMode)();return o.default.createElement(i.MobileMenuContext.Provider,{value:a.menuState||n},o.default.createElement(d.default,null,o.default.createElement("link",{rel:"shortcut icon",media:"(prefers-color-scheme:dark)",href:(0,u.formatPath)(s?"favicon-dark.png":"favicon.png")})),o.default.createElement("div",{id:"ignite",className:"min-h-screen flex flex-col dark:bg-gray-1000"},o.default.createElement(l.NavBar,{sections:["docs","blog"],hasHomePage:!0}),t))};t.default=s},AFBu:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.formatPath=function(e){return r.default.join("/auto","/".concat(e.replace(/\.mdx$/,"")))},t.postFixHTML=function(e){return e};var r=n(a("R8iU"))},C3pV:function(e,t,a){"use strict";(function(e){var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.Sidebar=t.SidebarActiveItem=void 0;var r=n(a("OvAC")),o=n(a("RiSW")),d=n(a("nxTg")),l=n(a("mXGw")),i=n(a("5dyF")),u=n(a("9fEB")),c=n(a("R8iU")),s=n(a("PDtE")),m=a("/FXl"),f=a("bBV7"),p=a("nZpd"),h=a("AFBu");function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(Object(a),!0).forEach((function(t){(0,r.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=l.default.createContext({pathname:"",sidebarFileLocation:""});t.SidebarActiveItem=x;var v=function(e){var t=e.href,a=e.children,n=l.default.useContext(x),r=(0,m.useMDXComponents)().SidebarLink,o=c.default.join(n.sidebarFileLocation,t),d=t;return n.sidebarFileLocation&&((d=o).endsWith("/index")&&(d=d.replace("/index","")),d.endsWith("/")&&(d=d.slice(0,-1))),l.default.createElement(i.default,{passHref:!0,href:(0,h.postFixHTML)(d)},l.default.createElement(r,{isActive:n.pathname.replace("/index","")===(0,h.formatPath)(d)},a))};t.Sidebar=function(t){var n=t.links,r=t.folder,i=l.default.useContext(p.MobileMenuContext),g=(0,d.default)(i,1)[0],w="/".concat(r),y=function(e){try{return a("f+ue")("./pages"+e+"/_sidebar.mdx").default}catch(t){try{return a("NDOZ")("./pages"+e+"/_sidebar.js").default}catch(t){}}}(w),O=function(t){var a=(0,f.useRouter)(),n="phase-production-build"!==e.env.NEXT_PHASE&&a.pathname.includes("/auto")?c.default.relative("/auto",a.pathname):c.default.relative("/",a.pathname),r=t.find((function(e){return e.__resourcePath.replace(".mdx","")===n}));return r||(r=t.find((function(e){var t=e.__resourcePath.replace(".mdx","");return t.endsWith("index")&&a.pathname.includes(t.replace("/index",""))}))),{title:r.title||"auto",pathname:(0,h.formatPath)(r.__resourcePath)}}(n),E=(0,m.useMDXComponents)(),j=E.SidebarItemWrapper,k=(E.SidebarLink,E.SidebarTitle),N=E.SidebarDivider,_=E.SidebarList,M=E.Sidebar,P=(0,o.default)(E,["SidebarItemWrapper","SidebarLink","SidebarTitle","SidebarDivider","SidebarList","Sidebar"]);return l.default.createElement(x.Provider,{value:b({},O,{sidebarFileLocation:y?w:""})},l.default.createElement(m.MDXProvider,{components:b({},P,{li:j,ul:_,a:v,p:k,hr:N})},l.default.createElement(u.default,null,l.default.createElement("title",null,O.title.replace(/\\`/g,"`"))),l.default.createElement(M,{className:(0,s.default)(!g&&"hidden","lg:block")},y?l.default.createElement(y,null):l.default.createElement(_,null,n.map((function(e){return l.default.createElement(j,{key:e.__resourcePath},l.default.createElement(v,{href:e.__resourcePath},e.title))}))))))}}).call(this,a("5IsQ"))},GDok:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.NavBar=void 0;var r=n(a("nxTg")),o=n(a("8VmE")),d=n(a("RiSW")),l=n(a("mXGw")),i=n(a("5dyF")),u=a("V5Fo"),c=a("/FXl"),s=n(a("PDtE")),m=a("nZpd"),f=a("AFBu"),p=function(e){var t=e.className,a=(0,d.default)(e,["className"]);return l.default.createElement("svg",(0,o.default)({className:(0,s.default)("fill-current w-5 h-5",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},a),l.default.createElement("path",{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}))},h=function(){var e=(0,c.useMDXComponents)().SearchInput;return l.default.createElement("div",{className:"relative h-full flex items-center w-full lg:w-auto lg:flex-1 lg:mr-4 px-4"},l.default.createElement(e,null))};t.NavBar=function(e){var t=e.sections,a=e.hasHomePage,n=l.default.useContext(m.MobileMenuContext),o=(0,r.default)(n,2),d=o[0],s=o[1],g=(0,c.useMDXComponents)(),b=g.Logo,x=g.NavBarWrapper,v=g.NavBar,w=g.NavBarItem,y=g.MobileMenuButton;return l.default.createElement(l.default.Fragment,null,l.default.createElement(x,null,l.default.createElement(v,null,a?l.default.createElement(i.default,{passHref:!0,href:"/"},l.default.createElement(b,null)):l.default.createElement(b,null),l.default.createElement("div",{className:"w-full h-full flex items-center lg:flex flex-1 lg:max-w-screen-md lg:mx-auto"},l.default.createElement(h,null),l.default.createElement(y,{open:d,setOpen:s,className:"lg:hidden"}),l.default.createElement("div",{className:"hidden lg:flex h-full"},t.map((function(e){return l.default.createElement(i.default,{passHref:!0,key:e,href:(0,f.postFixHTML)("/".concat(e))},l.default.createElement(w,null,(0,u.titleCase)(e)))})),l.default.createElement(w,{href:"https://github.com/intuit/auto",target:"_blank","aria-label":"Open on GitHub"},l.default.createElement(p,null)))))),d&&l.default.createElement("div",{className:"lg:hidden"},t.map((function(e){return l.default.createElement(i.default,{passHref:!0,key:e,href:(0,f.postFixHTML)("/".concat(e))},l.default.createElement(w,null,(0,u.titleCase)(e)))})),l.default.createElement(w,{href:"https://github.com/intuit/auto",target:"_blank"},l.default.createElement(p,{className:"mr-2"}),"Open on GitHub")))}},YEs5:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"default",(function(){return f}));var n=a("Fcif"),r=a("dV/x"),o=a("mXGw"),d=a.n(o),l=a("/FXl"),i=a("pu0P"),u=a.n(i),c=(d.a.createElement,{title:"Troubleshooting",layout:"docs",date:null,author:"",email:"",__resourcePath:"docs/configuration/troubleshooting.mdx",__scans:{}}),s={frontMatter:c},m=u.a;function f(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.mdx)(m,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("h2",{id:"error-cant-find-a-github-token-to-use"},Object(l.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#error-cant-find-a-github-token-to-use"}),"Error: Can't find a GitHub token to use")),Object(l.mdx)("p",null,"You must set a ",Object(l.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/settings/tokens"}),Object(l.mdx)("inlineCode",{parentName:"a"},"GH_TOKEN"))," for ",Object(l.mdx)("inlineCode",{parentName:"p"},"auto")," to work. If you publish to npm make sure to add your ",Object(l.mdx)("inlineCode",{parentName:"p"},"NPM_TOKEN")," while you're at it as well."),Object(l.mdx)("h2",{id:"working-directory-not-clean"},Object(l.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#working-directory-not-clean"}),"Working directory not clean")),Object(l.mdx)("p",null,"To version and publish you cannot have any changes in the git repo during publish. This means that if you build some files before release that aren't git-ignored ",Object(l.mdx)("inlineCode",{parentName:"p"},"auto")," will fail to continue. To fix this either add those ",Object(l.mdx)("inlineCode",{parentName:"p"},"dist")," files to your ",Object(l.mdx)("inlineCode",{parentName:"p"},".gitignore")," or commit them somehow before the release."),Object(l.mdx)("h2",{id:"you-cannot-publish-over-the-previously-published-versions"},Object(l.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#you-cannot-publish-over-the-previously-published-versions"}),"You cannot publish over the previously published versions")),Object(l.mdx)("p",null,"If you've encountered any of these errors you'll probably run into this problem. If the whole release process doesn't complete you can end up in a state when ",Object(l.mdx)("inlineCode",{parentName:"p"},"auto"),' published the new version, but doesn\'t push that back to github. To fix this just bump the version number to the "previously published version".'),Object(l.mdx)("h2",{id:"how-do-i-auto-a-fork-of-another-repo"},Object(l.mdx)("a",Object(n.a)({parentName:"h2"},{className:'header-link no-underline text-gray-900" hover:underline',href:"#how-do-i-auto-a-fork-of-another-repo"}),"How do I auto a fork of another repo?")),Object(l.mdx)("p",null,"If auto doesn't find a last release it will default to the first commit for version calculation (and a log of other things). If you have forked a repo, you fork all the merge commit messages as well. This confuses ",Object(l.mdx)("inlineCode",{parentName:"p"},"auto")," since it will look for those pull requests in your fork and not the main one."),Object(l.mdx)("p",null,"To remedy this first tag your first commit in the fork with your first version. If the tags from the original repo are still in your repo you should just bump that version. This will let ",Object(l.mdx)("inlineCode",{parentName:"p"},"auto")," ignore all the old merge commits."),Object(l.mdx)("blockquote",null,Object(l.mdx)("p",{parentName:"blockquote"},"\u26a0\ufe0f You must also match this new tag version in your package.json")),Object(l.mdx)("pre",{className:"language-bash"},Object(l.mdx)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"# Set head to last release and tag it with 2.10.1"),"\n",Object(l.mdx)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"git")," tag v2.10.1\n")),Object(l.mdx)("p",null,"Then on GitHub go to your project, click release, then draft a new release. Select the tag you just published and ",Object(l.mdx)("inlineCode",{parentName:"p"},"publish release"),". Now auto will be able to use the correct version and git log!"))}f.isMDXComponent=!0},e3AK:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/configuration/troubleshooting",function(){return a("YEs5")}])},nZpd:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.MobileMenuContext=void 0;var r=n(a("mXGw")).default.createContext([!1,function(){}]);t.MobileMenuContext=r},pu0P:function(e,t,a){"use strict";var n=a("63Ad");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("nxTg")),o=n(a("mXGw")),d=n(a("R8iU")),l=a("/FXl"),i=n(a("PDtE")),u=a("C3pV"),c=n(a("6f/q")),s=n(a("x3GE")),m=/([^`]*)`([^`]*)`(.*)/m;var f=function(e){var t=e.children,a=e.frontMatter,n=o.default.useState(!1),f=(0,r.default)(n,2),p=f[0],h=f[1],g=(0,l.useMDXComponents)(),b=a.__resourcePath.split("/")[0],x=(0,s.default)(),v=["index.mdx","blog/both-worlds.mdx","blog/npm-canary-scope.mdx","blog/pr-in-progress.mdx","blog/using-shipit.mdx","blog/v8.mdx","blog/why.mdx","docs/_sidebar.mdx","docs/index.mdx","docs/build-platforms/circleci.mdx","docs/build-platforms/github-actions.mdx","docs/build-platforms/jenkins.mdx","docs/build-platforms/travis.mdx","docs/configuration/autorc.mdx","docs/configuration/non-npm.mdx","docs/configuration/plugins.mdx","docs/configuration/troubleshooting.mdx","docs/generated/all-contributors.mdx","docs/generated/brew.mdx","docs/generated/canary.mdx","docs/generated/changelog.mdx","docs/generated/chrome.mdx","docs/generated/cocoapods.mdx","docs/generated/comment.mdx","docs/generated/conventional-commits.mdx","docs/generated/crates.mdx","docs/generated/create-labels.mdx","docs/generated/docker.mdx","docs/generated/exec.mdx","docs/generated/first-time-contributor.mdx","docs/generated/gem.mdx","docs/generated/gh-pages.mdx","docs/generated/git-tag.mdx","docs/generated/gradle.mdx","docs/generated/info.mdx","docs/generated/init.mdx","docs/generated/jira.mdx","docs/generated/label.mdx","docs/generated/latest.mdx","docs/generated/maven.mdx","docs/generated/next.mdx","docs/generated/npm.mdx","docs/generated/omit-commits.mdx","docs/generated/omit-release-notes.mdx","docs/generated/pr-body-labels.mdx","docs/generated/pr-body.mdx","docs/generated/pr-check.mdx","docs/generated/pr-status.mdx","docs/generated/release.mdx","docs/generated/released.mdx","docs/generated/s3.mdx","docs/generated/shipit.mdx","docs/generated/slack.mdx","docs/generated/twitter.mdx","docs/generated/upload-assets.mdx","docs/generated/version.mdx","docs/plugins/changelog-hooks.mdx","docs/plugins/configuration-hooks.mdx","docs/plugins/hook-api-docs.mdx","docs/plugins/init-hooks.mdx","docs/plugins/log-parse-hooks.mdx","docs/plugins/release-lifecycle-hooks.mdx","docs/plugins/writing-plugins.mdx","docs/plugins/writing-publishing-plugins.mdx","docs/welcome/getting-started.mdx","docs/welcome/quick-merge.mdx"].map((function(e){return d.default.relative("./",e)})).filter((function(e){return e.startsWith(b)})).map((function(e){return x.find((function(t){return t.__resourcePath===e}))}));return o.default.createElement(c.default,{menuState:[p,h]},o.default.createElement("div",{className:"flex flex-1 w-full max-w-screen-sm lg:max-w-screen-xl mx-auto"},o.default.createElement(u.Sidebar,{links:v,folder:b}),o.default.createElement("main",{className:(0,i.default)("DocSearch-content","pt-8 pb-32 px-4 lg:mx-auto max-w-full md:max-w-screen-sm lg:max-w-screen-md","flex-1","lg:block",p&&"hidden")},o.default.createElement(g.h1,null,function(e,t){if(t){for(var a=[],n=t.replace(/\\`/g,"`");m.test(n);){var d=n.match(m),l=(0,r.default)(d,4),i=l[1],u=l[2],c=l[3];a.push(i),a.push(o.default.createElement(e.inlineCode,null,u)),n=c}return a.push(n),o.default.createElement("div",null,a)}}(g,a.title)),t)))};t.default=f},x3GE:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("jmz1");t.default=function(){try{return n.keys().map(n)}catch(e){return[]}}}},[["e3AK",0,1,2,3,4]]]);