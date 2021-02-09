(this["webpackJsonpscore-board"]=this["webpackJsonpscore-board"]||[]).push([[0],{57:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"addGame",(function(){return w})),t.d(n,"finishGame",(function(){return C})),t.d(n,"updateGame",(function(){return G}));var r=t(0),c=t(11),s=t.n(c),i=t(19),o=t(18),m=t(42),l=(t(54),t(61)),d=t(60),h=t(44),j=t(7),b=t(13),u=t(14),O=t(25),p=t(17),g=t(16),f=t(33),y=t(62),x="add_game",T="finish_game",v="update_game";function w(e){return function(a){a({type:x,game:e})}}function C(e){return function(a){a({type:T,id:e})}}function G(e){return function(a){a({type:v,game:e})}}var S=t(64),H=t(63),N=t(59),V=t(2),_=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(b.a)(this,t),(n=a.call(this,e)).handleChangeHomeTeam=function(e){n.setState({homeTeam:Object(j.a)(Object(j.a)({},n.state.homeTeam),{},{teamName:e.target.value})})},n.handleChangeAwayTeam=function(e){n.setState({awayTeam:Object(j.a)(Object(j.a)({},n.state.awayTeam),{},{teamName:e.target.value})})},n.saveGame=function(){n.state.homeTeam.teamName&&n.state.awayTeam.teamName?(n.setState({error:!0}),n.props.addGame({homeTeam:n.state.homeTeam,awayTeam:n.state.awayTeam})):n.setState({error:!0})},n.state={error:!1,homeTeam:{teamName:"",teamScore:0},awayTeam:{teamName:"",teamScore:0}},n}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(y.a.Header,{closeButton:!0,children:Object(V.jsx)(y.a.Title,{children:"New Game"})}),Object(V.jsxs)(S.a,{variant:"danger",show:this.state.error,onClose:function(){return e.setState({error:!1})},dismissible:!0,children:[Object(V.jsx)(S.a.Heading,{children:"Names are required"}),Object(V.jsx)("p",{children:"You must write teams names."})]}),Object(V.jsx)(y.a.Body,{children:Object(V.jsxs)(H.a,{children:[Object(V.jsxs)(H.a.Group,{controlId:"game.homeTeam",children:[Object(V.jsx)(H.a.Label,{children:"Home Team"}),Object(V.jsx)(H.a.Control,{placeholder:"Name",value:this.state.homeTeam.teamName,onChange:this.handleChangeHomeTeam})]}),Object(V.jsxs)(H.a.Group,{controlId:"game.awayTeam",children:[Object(V.jsx)(H.a.Label,{children:"Away Team"}),Object(V.jsx)(H.a.Control,{placeholder:"Name",value:this.state.awayTeam.teamName,onChange:this.handleChangeAwayTeam})]})]})}),Object(V.jsxs)(y.a.Footer,{children:[Object(V.jsx)(N.a,{variant:"secondary",onClick:function(){return e.props.chatVisibilityHandler()},children:"Close"}),Object(V.jsx)(N.a,{variant:"primary",onClick:this.saveGame,children:"Save Changes"})]})]})}}]),t}(r.Component),k=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(b.a)(this,t),(n=a.call(this,e)).handleChangeHomeTeam=function(e){n.setState({game:Object(j.a)(Object(j.a)({},n.state.game),{},{homeTeam:Object(j.a)(Object(j.a)({},n.state.game.homeTeam),{},{teamScore:Number(e.target.value)})})})},n.handleChangeAwayTeam=function(e){n.setState({game:Object(j.a)(Object(j.a)({},n.state.game),{},{awayTeam:Object(j.a)(Object(j.a)({},n.state.game.awayTeam),{},{teamScore:Number(e.target.value)})})})},n.state={game:{homeTeam:{},awayTeam:{}}},n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)({},this.props.selectedGame);this.setState({game:e})}},{key:"render",value:function(){var e=this;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(y.a.Header,{closeButton:!0,children:Object(V.jsxs)(y.a.Title,{children:[this.props.selectedGame.homeTeam.teamName," -"," ",this.props.selectedGame.awayTeam.teamName]})}),Object(V.jsx)(y.a.Body,{children:Object(V.jsxs)(H.a,{children:[Object(V.jsxs)(H.a.Group,{controlId:"homeTeam",children:[Object(V.jsxs)(H.a.Label,{children:[this.props.selectedGame.homeTeam.teamName," Score (Home)"]}),Object(V.jsx)(H.a.Control,{required:!0,type:"number",placeholder:"Score",value:this.state.game.homeTeam.teamScore,onChange:this.handleChangeHomeTeam})]}),Object(V.jsxs)(H.a.Group,{controlId:"awayTeam",children:[Object(V.jsxs)(H.a.Label,{children:[this.props.selectedGame.awayTeam.teamName," Score (Away)"]}),Object(V.jsx)(H.a.Control,{required:!0,type:"number",placeholder:"Score",value:this.state.game.awayTeam.teamScore,onChange:this.handleChangeAwayTeam})]})]})}),Object(V.jsxs)(y.a.Footer,{children:[Object(V.jsx)(N.a,{variant:"secondary",onClick:function(){return e.props.chatVisibilityHandler()},children:"Close"}),Object(V.jsx)(N.a,{variant:"primary",onClick:function(){return e.props.updateGame(e.state.game)},children:"Save Changes"})]})]})}}]),t}(r.Component),E=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(){var e;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).addGame=function(a){e.props.addGame(Object(j.a)(Object(j.a)({},a),{},{id:e.props.games.length+1})),e.props.chatVisibilityHandler()},e.updateGame=function(a){e.props.updateGame(a),e.props.chatVisibilityHandler()},e}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(V.jsx)(y.a,{show:this.props.isModalOpen,onHide:function(){return e.props.chatVisibilityHandler()},children:null!==this.props.selectedGame&&this.props.selectedGame?Object(V.jsx)(k,{selectedGame:this.props.selectedGame,updateGame:this.updateGame,chatVisibilityHandler:this.props.chatVisibilityHandler}):Object(V.jsx)(_,{addGame:this.addGame,chatVisibilityHandler:this.props.chatVisibilityHandler})})}}]),t}(r.Component),A=Object(i.b)((function(e){return Object(j.a)({},e.scoreboardReducer)}),n)(E),M=function(e){Object(p.a)(t,e);var a=Object(g.a)(t);function t(e){var n;return Object(b.a)(this,t),(n=a.call(this,e)).chatVisibilityHandler=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;n.setState({isModalOpen:!n.state.isModalOpen,selectedGame:e})},n.state={isModalOpen:!1,selectedGame:null},n.chatVisibilityHandler=n.chatVisibilityHandler.bind(Object(O.a)(n)),n}return Object(u.a)(t,[{key:"render",value:function(){var e=this;return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(d.a,{children:Object(V.jsx)(h.a,{xs:{offset:10},lg:{offset:8},children:Object(V.jsx)(f.a,{onClick:function(){return e.chatVisibilityHandler()}})})}),this.props.games.map((function(a,t){return Object(V.jsxs)(d.a,{children:[Object(V.jsxs)(h.a,{xs:"8",lg:{span:4,offset:3},children:[a.homeTeam.teamName," (",a.homeTeam.teamScore,") -"," ",a.awayTeam.teamName," (",a.awayTeam.teamScore,")"]}),Object(V.jsx)(h.a,{xs:"2",lg:"1",children:Object(V.jsx)(f.b,{onClick:function(){return e.chatVisibilityHandler(a)}})}),Object(V.jsx)(h.a,{xs:"2",lg:"1",children:Object(V.jsx)(f.c,{onClick:function(){return e.props.finishGame(a.id)}})})]},t)})),Object(V.jsx)(A,{isModalOpen:this.state.isModalOpen,chatVisibilityHandler:this.chatVisibilityHandler,selectedGame:this.state.selectedGame})]})}}]),t}(r.Component),I=Object(i.b)((function(e){return Object(j.a)({},e.scoreboardReducer)}),n)(M);var L=function(){return Object(V.jsxs)(l.a,{children:[Object(V.jsx)("div",{className:"App-header",children:Object(V.jsx)(d.a,{children:Object(V.jsx)(h.a,{lg:{offset:4},children:Object(V.jsx)("h1",{children:"Score Board"})})})}),Object(V.jsx)("div",{className:"App-body",children:Object(V.jsx)(I,{})})]})},B=t(32),D={games:[]},F=Object(o.c)({scoreboardReducer:function(){var e,a,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case x:return Object(j.a)(Object(j.a)({},t),{},{games:[].concat(Object(B.a)(t.games),[n.game])});case T:return e=(a=Object(B.a)(t.games)).findIndex((function(e){return e.id===n.id})),a.splice(e,1),{games:a};case v:return e=(a=Object(B.a)(t.games)).findIndex((function(e){return e.id===n.game.id})),a[e]=n.game,{games:a};default:return t}}}),R=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):o.d)(Object(o.a)(m.a)),q=Object(o.e)(F,{},R);s.a.render(Object(V.jsx)(i.a,{store:q,children:Object(V.jsx)(L,{})}),document.querySelector("#root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.8cd229e3.chunk.js.map