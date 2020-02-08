(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(39)},27:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);n(40);var r,a,o=n(0),c=n.n(o),s=n(17),i=n.n(s),u=n(43),l=n(2),m=n(3),d=n(5),h=n(4),p=n(6),f="https://localhost:8000",g="9523aef9-3169-48d5-afc8-da43244c4d86",E=n(18),b=n.n(E),v={saveAuthToken:function(e){window.localStorage.setItem(g,e)},getAuthToken:function(){return window.localStorage.getItem(g)},clearAuthToken:function(){window.localStorage.removeItem(g)},hasAuthToken:function(){return!!v.getAuthToken()},parseJwt:function(e){return b()(e)},parseAuthToken:function(){var e=v.getAuthToken();return e?v.parseJwt(e):void 0},_getMsUntilExpiry:function(e){return 1e3*e.exp-Date.now()},queueCallbackBeforeExpiry:function(e){var t=v._getMsUntilExpiry(v.parseAuthToken());r=setTimeout(e,t-1e4)},clearCallbackBeforeExpiry:function(){clearTimeout(r)}},w=v,y={postUser:function(e){return fetch("".concat(f,"/user"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},postLogin:function(e){var t=e.username,n=e.password;return fetch("".concat(f,"/auth/token"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:t,password:n})}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},refreshToken:function(){return fetch("".concat(f,"/auth/token"),{method:"PUT",headers:{authorization:"Bearer ".concat(w.getAuthToken())}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})}},k=null,j=["mousedown","mousemove","keypress","scroll","touchstart"],C={setIdleCallback:function(e){k=e},resetIdleTimer:function(e){clearTimeout(a),a=setTimeout(k,3e5)},regiserIdleTimerResets:function(){j.forEach(function(e){return document.addEventListener(e,C.resetIdleTimer,!0)})},unRegisterIdleResets:function(){clearTimeout(a),j.forEach(function(e){return document.removeEventListener(e,C.resetIdleTimer,!0)})}},O=C,S=c.a.createContext({user:{},error:null,setError:function(){},clearError:function(){},setUser:function(){},processLogin:function(){},processLogout:function(){}}),T=S,N=function(e){function t(e){var n;Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).setError=function(e){console.error(e),n.setState({error:e})},n.clearError=function(){n.setState({error:null})},n.setUser=function(e){n.setState({user:e})},n.processLogin=function(e){w.saveAuthToken(e);var t=w.parseAuthToken();n.setUser({id:t.user_id,name:t.name,username:t.sub}),O.regiserIdleTimerResets(),w.queueCallbackBeforeExpiry(function(){n.fetchRefreshToken()})},n.processLogout=function(){w.clearAuthToken(),w.clearCallbackBeforeExpiry(),O.unRegisterIdleResets(),n.setUser({})},n.logoutBecauseIdle=function(){w.clearAuthToken(),w.clearCallbackBeforeExpiry(),O.unRegisterIdleResets(),n.setUser({idle:!0})},n.fetchRefreshToken=function(){y.refreshToken().then(function(e){w.saveAuthToken(e.authToken),w.queueCallbackBeforeExpiry(function(){n.fetchRefreshToken()})}).catch(function(e){n.setError(e)})};var r={user:{},error:null},a=w.parseAuthToken();return a&&(r.user={id:a.user_id,name:a.name,username:a.sub}),n.state=r,O.setIdleCallback(n.logoutBecauseIdle),n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.hasAuthToken()&&(O.regiserIdleTimerResets(),w.queueCallbackBeforeExpiry(function(){e.fetchRefreshToken()}))}},{key:"componentWillUnmount",value:function(){O.unRegisterIdleResets(),w.clearCallbackBeforeExpiry()}},{key:"render",value:function(){var e={user:this.state.user,error:this.state.error,setError:this.setError,clearError:this.clearError,setUser:this.setUser,processLogin:this.processLogin,processLogout:this.processLogout};return c.a.createElement(S.Provider,{value:e},this.props.children)}}]),t}(o.Component),I=n(45),x=n(44),L=n(41),A=(n(27),function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).handleLogoutClick=function(){n.context.processLogout()},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"renderLogoutLink",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"log-out-user"},c.a.createElement("div",{className:"logged-in-user"},this.context.user.name),c.a.createElement(L.a,{className:"log-out-user-link",onClick:this.handleLogoutClick,to:"/login"},"Logout")))}},{key:"renderLoginLink",value:function(){return c.a.createElement("nav",{className:"heading login-page-heading"},c.a.createElement(L.a,{className:"heading login-page-login",to:"/login"},"Login")," ",c.a.createElement(L.a,{className:"heading login-page-register",to:"/register"},"Sign up"))}},{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement("h1",{className:"heading login-page-header"},c.a.createElement(L.a,{className:"heading login-page-link",to:"/login"},"Maori in Motion")),w.hasAuthToken()?this.renderLogoutLink():this.renderLoginLink())}}]),t}(o.Component));A.contextType=T;var W=A,R=n(10),B=n(42);function P(e){var t=e.component,n=Object(R.a)(e,["component"]),r=t;return c.a.createElement(x.a,Object.assign({},n,{render:function(e){return c.a.createElement(T.Consumer,null,function(t){return t.user.id?c.a.createElement(r,e):c.a.createElement(B.a,{to:{pathname:t.user.idle?"/login":"/register",state:{from:e.location}}})})}}))}function D(e){var t=e.component,n=Object(R.a)(e,["component"]),r=t;return c.a.createElement(x.a,Object.assign({},n,{render:function(e){return c.a.createElement(T.Consumer,null,function(t){return t.user.id?c.a.createElement(B.a,{to:"/"}):c.a.createElement(r,e)})}}))}var U=n(13),q=n.n(U);n(31);function G(e){var t=e.className,n=Object(R.a)(e,["className"]);return c.a.createElement("label",Object.assign({className:q()("Label",t)},n))}var _=c.a.forwardRef(function(e,t){var n=e.className,r=Object(R.a)(e,["className"]);return c.a.createElement("input",Object.assign({className:q()("Input",n),type:"text",ref:t},r))});function F(e){var t=e.className,n=Object(R.a)(e,["className"]);return c.a.createElement("span",Object.assign({className:q()("Required",t)},n),"*")}n(32);var M=c.a.forwardRef(function(e,t){var n=e.className,r=Object(R.a)(e,["className"]);return c.a.createElement("button",Object.assign({className:q()("Button",n),ref:t},r))}),J=(n(33),function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={error:null},n.firstInput=c.a.createRef(),n.handleSubmit=function(e){e.preventDefault();var t=e.target,r=t.name,a=t.username,o=t.password;y.postUser({name:r.value,username:a.value,password:o.value}).then(function(e){r.value="",a.value="",o.value="",n.props.onRegistrationSuccess()}).catch(function(e){n.setState({error:e.error})})},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.firstInput.current.focus()}},{key:"render",value:function(){var e=this.state.error;return c.a.createElement("form",{id:"sign-up-form",onSubmit:this.handleSubmit},c.a.createElement("div",{role:"alert"},e&&c.a.createElement("p",null,e)),c.a.createElement("section",{id:"sign-up-container"},c.a.createElement("div",null,c.a.createElement(G,{className:"name-label",htmlFor:"registration-name-input"},"Enter your name",c.a.createElement(F,null)),c.a.createElement("br",null),c.a.createElement(_,{ref:this.firstInput,id:"registration-name-input",className:"name-input",name:"name",required:!0})),c.a.createElement("div",null,c.a.createElement(G,{htmlFor:"registration-username-input"},"Choose a username",c.a.createElement(F,null)),c.a.createElement("br",null),c.a.createElement(_,{id:"registration-username-input",name:"username",required:!0})),c.a.createElement("div",null,c.a.createElement(G,{htmlFor:"registration-password-input"},"Choose a password",c.a.createElement(F,null)),c.a.createElement("br",null),c.a.createElement(_,{id:"registration-password-input",name:"password",type:"password",required:!0}))),c.a.createElement("footer",null,c.a.createElement(M,{id:"sign-up-button",type:"submit"},"Sign up")," ",c.a.createElement("br",null),c.a.createElement(L.a,{className:"already-have-an-account-link",to:"/login"},"Already have an account?")))}}]),t}(o.Component));J.defaultProps={onRegistrationSuccess:function(){}};var z=J,Y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).handleRegistrationSuccess=function(){n.props.history.push("/login")},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{id:"sign-up-heading-container"},c.a.createElement("h2",{id:"sign-up-heading"},"Sign up"),c.a.createElement("p",{id:"sign-up-desc"},"Practice learning a language with the spaced repetition revision technique."),c.a.createElement(z,{onRegistrationSuccess:this.handleRegistrationSuccess}))}}]),t}(o.Component);Y.defaultProps={history:{push:function(){}}};var H=Y,$=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={error:null},n.firstInput=c.a.createRef(),n.handleSubmit=function(e){e.preventDefault();var t=e.target,r=t.username,a=t.password;n.setState({error:null}),y.postLogin({username:r.value,password:a.value}).then(function(e){r.value="",a.value="",n.context.processLogin(e.authToken),n.props.onLoginSuccess()}).catch(function(e){n.setState({error:e.error})})},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.firstInput.current.focus()}},{key:"render",value:function(){var e=this.state.error;return c.a.createElement("form",{className:"LoginForm heading",onSubmit:this.handleSubmit},c.a.createElement("div",{role:"alert"},e&&c.a.createElement("p",null,e)),c.a.createElement("div",null,c.a.createElement(G,{className:"heading login-page-username",htmlFor:"login-username-input"},"Username"),c.a.createElement(_,{ref:this.firstInput,id:"login-username-input",name:"username",required:!0})),c.a.createElement("br",null),c.a.createElement("div",null,c.a.createElement(G,{className:"heading login-page-password",htmlFor:"login-password-input"},"Password"),c.a.createElement(_,{id:"login-password-input",name:"password",type:"password",required:!0})),c.a.createElement("br",null),c.a.createElement(M,{className:"heading login-page-submit",type:"submit"},"Login"))}}]),t}(o.Component);$.defaultProps={onLoginSuccess:function(){}},$.contextType=T;var K=$,Q=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).handleLoginSuccess=function(){var e=n.props,t=e.location,r=e.history,a=(t.state||{}).from||"/";r.push(a)},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("h2",{className:"heading login-page-login-h2"},"Login"),c.a.createElement(K,{onLoginSuccess:this.handleLoginSuccess}))}}]),t}(o.Component);Q.defaultProps={location:{},history:{push:function(){}}};var V=Q,X=(n(34),function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"renderWords",value:function(){for(var e=this.props.words,t=[],n=0;n<e.length;n++)t.push(c.a.createElement("li",{key:this.props.words[n].id,className:"dashboard-individual-word-container"},c.a.createElement("h4",{className:"word-dashboard"},e[n].original),"correct answer count: ",e[n].correct_count,c.a.createElement("br",null),"incorrect answer count: ",e[n].incorrect_count,c.a.createElement("br",null),c.a.createElement("h4",{className:"attempts-dashboard"})));return t}},{key:"render",value:function(){return c.a.createElement("section",{id:"words-to-practice-container"},c.a.createElement("ul",null,c.a.createElement("div",{id:"list-of-words-and-attempts"},this.renderWords())))}}]),t}(o.Component));X.defaultProps={words:[]};var Z=X,ee=function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={words:[],totalScore:null,language:"",key:null},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getWords()}},{key:"getWords",value:function(){var e=this;return fetch("".concat(f,"/language"),{method:"GET",headers:{"content-type":"application/json",authorization:"Bearer ".concat(w.getAuthToken())}}).then(function(e){return e.json()}).then(function(t){e.setState({words:t.words,totalScore:t.language.total_score,language:t.language.name,key:t.words.id})})}},{key:"render",value:function(){var e=this.state.words,t=this.state.key;return c.a.createElement("section",null,c.a.createElement("section",{id:"dashboard-container"},c.a.createElement("h2",{id:"welcome-message"},this.context.user.name," is learning ",this.state.language,"!",c.a.createElement("p",{id:"total-score-dashboard"},"Total correct answers: ",this.state.totalScore)),c.a.createElement(L.a,{to:"/learn",id:"button-lets-learn",type:"submit"},c.a.createElement("div",{id:"learn-button-text"},"Start practicing")),c.a.createElement("h3",{id:"words-header-dashboard"},"Words to practice"),c.a.createElement(Z,{words:e,id:t}),c.a.createElement("section",{className:"stats"})))}}]),t}(o.Component);ee.contextType=T;var te=ee,ne={getWords:function(){var e=this;return fetch("".concat(f,"/language"),{method:"GET",headers:{"content-type":"application/json",authorization:"Bearer ".concat(w.getAuthToken())}}).then(function(e){return e.json()}).then(function(t){e.setState({words:t.words,totalScore:t.language.total_score})})},getWord:function(){return fetch("".concat(f,"/language/head"),{method:"GET",headers:{"content-type":"application/json",authorization:"Bearer ".concat(w.getAuthToken())}}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})},postGuess:function(e){var t=w.getAuthToken(),n=JSON.stringify({guess:e}),r="".concat(f,"/language/guess");return fetch(r,{method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(t)},body:n}).then(function(e){return e.ok?e.json():e.json().then(function(e){return Promise.reject(e)})})}},re=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleInput=function(e){e.preventDefault(),n.setState({currentGuess:e.target.value})},n.postGuessHandler=function(e){e.preventDefault();var t=n.state.currentGuess;ne.postGuess(t).then(function(e){n.tempSpace.wordCorrectCount=e.wordCorrectCount,n.tempSpace.wordIncorrectCount=e.wordIncorrectCount,n.setState({isCorrect:e.isCorrect,totalScore:e.totalScore,nextWord:e.nextWord,answer:e.answer}),!0===n.state.isCorrect?n.setState({wordCorrectCount:n.state.wordCorrectCount+1}):n.setState({wordIncorrectCount:n.state.wordIncorrectCount+1})})},n.setNextWordOnClick=function(){n.setState({isCorrect:null,wordCorrectCount:n.tempSpace.wordCorrectCount,wordIncorrectCount:n.tempSpace.wordIncorrectCount})},n.state={currentWord:"",isCorrect:null,wordCorrectCount:n.props.wordCorrectCount,wordIncorrectCount:n.props.wordIncorrectCount,totalScore:n.props.totalScore,nextWord:n.props.nextWord,currentGuess:"",answer:null},n.tempSpace={wordCorrectCount:0,wordIncorrectCount:0},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("section",{id:"translate-page-container"},c.a.createElement("div",{className:"learning_stats"},c.a.createElement("h4",{className:"learning_correct"},"You have answered this word correctly ",this.state.wordCorrectCount," ","times."),c.a.createElement("h4",{className:"learning_incorrect"},"You have answered this word incorrectly"," ",this.state.wordIncorrectCount," times.")),c.a.createElement("section",{className:"DisplayScore"},c.a.createElement("p",null,"Your total score is: ",this.state.totalScore)),!0===this.state.isCorrect&&c.a.createElement("section",{id:"correct-answer-feedback",className:"DisplayFeedback"},c.a.createElement("h2",null,"You were correct! :D"),c.a.createElement("p",null,"The correct translation for ",this.state.currentWord," was"," ",this.state.answer," and you chose ",this.state.currentGuess,"!")),!1===this.state.isCorrect&&c.a.createElement("section",{id:"incorrect-answer-feedback",className:"DisplayFeedback"},c.a.createElement("h2",null,"Good try, but not quite right :("),c.a.createElement("p",null,"The correct translation for ",this.state.currentWord," was"," ",this.state.answer," and you chose ",this.state.currentGuess,"!")),null===this.state.isCorrect&&c.a.createElement("form",{id:"translation-guess-form",onSubmit:function(t){return e.setState({currentWord:e.state.nextWord}),e.postGuessHandler(t)}},c.a.createElement("h2",null,"Translate the word:")," ",c.a.createElement("span",null,this.state.nextWord),c.a.createElement("label",{htmlFor:"learn-guess-input"},c.a.createElement("p",null,"What's the translation for this word?")),c.a.createElement("input",{type:"text",name:"guess",required:!0,onChange:this.handleInput.bind(this),id:"learn-guess-input"}),c.a.createElement(M,{id:"button-show-form",type:"submit",onClick:this.updateCounts},"Submit your answer")),null!==this.state.isCorrect&&c.a.createElement(M,{id:"button-show-form",type:"submit",onClick:this.setNextWordOnClick},"Try another word!"),c.a.createElement(L.a,{to:"/",className:"button-to-dashboard",type:"submit"},c.a.createElement("div",{className:"button-to-dashboard-text"},"Dashboard")))}}]),t}(o.Component),ae=(n(35),function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={wordCorrectCount:0,wordIncorrectCount:0,nextWord:"",totalScore:0},n.handleSetState=function(e){return n.setState({nextWord:e.nextWord,wordCorrectCount:e.wordCorrectCount,wordIncorrectCount:e.wordIncorrectCount,totalScore:e.totalScore})},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;ne.getWord().then(function(t){e.handleSetState(t)})}},{key:"getWord",value:function(){return""!==this.state.nextWord?c.a.createElement("section",null,c.a.createElement(re,{nextWord:this.state.nextWord,wordCorrectCount:this.state.wordCorrectCount,wordIncorrectCount:this.state.wordIncorrectCount,totalScore:this.state.totalScore})):c.a.createElement("div",null)}},{key:"render",value:function(){return c.a.createElement("section",null,this.getWord())}}]),t}(o.Component)),oe=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("section",null,c.a.createElement("h2",null,"404 - Page not found"),c.a.createElement("p",null,"Try going back to your previous page."))}}]),t}(o.Component),ce=(n(36),function(e){function t(){var e,n;Object(l.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).state={hasError:!1},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.hasError;return c.a.createElement("div",{className:"App"},c.a.createElement(W,null),c.a.createElement("main",null,e&&c.a.createElement("p",null,"There was an error! Oh no!"),c.a.createElement(I.a,null,c.a.createElement(P,{exact:!0,path:"/",component:te}),c.a.createElement(P,{path:"/learn",component:ae}),c.a.createElement(D,{path:"/register",component:H}),c.a.createElement(D,{path:"/login",component:V}),c.a.createElement(x.a,{component:oe}))))}}],[{key:"getDerivedStateFromError",value:function(e){return console.error(e),{hasError:!0}}}]),t}(o.Component));n(37),n(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(u.a,null,c.a.createElement(N,null,c.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.b28cb41d.chunk.js.map