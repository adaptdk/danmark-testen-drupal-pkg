(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t){},150:function(e,t){},166:function(e,t,s){},190:function(e,t,s){"use strict";s.r(t);s(99),s(128);var n=s(0),a=s.n(n),r=s(95),o=s.n(r),c=s(27),i=s(37),u=s(38),l=s(40),p=s(39),h=s(41),f=s(3),g=s(19),m=s.n(g),d=(s(166),s(97)),v=s(63),w={given_answers:[],step:0,history:[]},b={given_answers:[],step:1},E=function(e,t){var s=e.calcScore(t.given_answers),n=Object(c.a)({},t,{score:s});if(e.isDebugging()){for(var a in console.group("historyRecord"),n)console.log(a,n[a]);console.groupEnd("historyRecord")}e.setState({history:Object(v.a)(e.state.history).concat([n])})},j=function(e){var t=Object(v.a)(e.state.history);t.pop();var s=(t=t.length?t:b)[t.length-1];if(e.isDebugging()){for(var n in console.group("historyGoBack"),s)console.log(n,s[n]);console.groupEnd("historyGoBack")}s.score;var a=Object(d.a)(s,["score"]);e.setState(Object(c.a)({},{history:t},a))},_=function(e){return"/api/".concat(e)},y=s(96),k=function(e){function t(e){var s;Object(i.a)(this,t),(s=Object(l.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e){s.setState({age:parseInt(e.target.value),showMessage:!1})},s.handleNext=function(e){var t=s.state.age;if(t<16)s.setState({showMessage:!0});else{var n=Object(y.find)(s.state.intervals,function(e){return t>=e.from&&t<=e.to});s.props.nextStep(n.id,s.state.answer_ids)}};var n=[];e.answers.forEach(function(e){var t=e.text.split("-");n.push({from:t[0],to:t[1],id:e.answer_id})});var a=e.answers.map(function(e){return e.answer_id});return s.state={age:"",intervals:n,answer_ids:a,showMessage:!1},s}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.showMessage?"next disabled":"next";return a.a.createElement("div",{className:"age-step"},a.a.createElement("label",{htmlFor:"age"},"Indtast alder:"),a.a.createElement("input",{name:"age",type:"number",value:this.state.age,onChange:this.handleChange}),a.a.createElement("button",{className:e,onClick:this.handleNext},"N\xe6ste"),this.state.showMessage&&this.props.message&&a.a.createElement("div",{className:"message"},m()(this.props.message)))}}]),t}(n.Component),O=s(171),S=function(e){var t=a.a.Children.map(e.children,function(e){return e.props.className?a.a.cloneElement(e,{className:e.props.className+" fade-in"}):e});return a.a.createElement("div",null,t)};function N(e){return a.a.createElement(S,e,a.a.createElement("p",null,"Henter data..."))}function q(e){return a.a.createElement(S,e,a.a.createElement("div",{className:"test-wrapper--intro"},m()(e.intro),a.a.createElement("button",{onClick:e.start},"Start testen")))}function C(e){var t=e.step,s=e.info,n=e.onClick,r=e.answered,o=s.answers.map(function(e){return e.answer_id});return a.a.createElement("div",{className:"test-wrapper--step"},a.a.createElement("h2",null,s.question),s.text&&s.text.map(function(e,t){return a.a.createElement("p",{key:t},e)}),1===t&&a.a.createElement(k,{answers:s.answers,nextStep:n,message:s.message}),t>1&&s.answers&&s.answers.map(function(e){var t;return r.includes(e.answer_id)&&(t="active"),a.a.createElement("div",{key:e.answer_id},a.a.createElement("button",{className:t,onClick:n.bind(null,e.answer_id,o)},e.text))}),s.extra&&m()(s.extra))}function x(e){var t=e.step,s=e.question,n=e.given_answers,r=e.recordAnswerAndStep;return a.a.createElement(S,e,a.a.createElement("div",{className:"Question"},a.a.createElement(C,{step:t,info:s,onClick:function(e,t){r(e,t)},answered:n})))}function A(e){var t=e.result,s="result result__group--".concat(t.group);return a.a.createElement(S,e,a.a.createElement("div",{className:"test-wrapper--result"},a.a.createElement("div",{className:s},m()(t.html))))}function B(e){for(var t=[],s=0;s<e.count;++s)t[s]="";for(var n=0;n<e.step-1;++n)t[n]+="seen ";return t[e.step-1]+="active ",t[e.count-1]+="final ",a.a.createElement("ul",{className:"test-wrapper--status"},t.map(function(e,t){return a.a.createElement("li",{key:t,className:e},a.a.createElement("i",null))}))}var M=function(e){function t(e){var s;return Object(i.a)(this,t),(s=Object(l.a)(this,Object(p.a)(t).call(this,e))).startTest=function(){s.setState(function(){return{step:1}}),E(Object(f.a)(Object(f.a)(s)),b)},s.recordAnswerAndStep=function(e,t){var n=s.state.given_answers.filter(function(e){return!t.includes(e)});n.push(e);var a={given_answers:n};if(s.calcScore(n)<0)return a.step=s.state.count,E(Object(f.a)(Object(f.a)(s)),{step:a.step,given_answers:a.given_answers}),void s.setState(a);var r=0,o=s.state.step+1;for(o>=s.state.count&&(r=s.state.count);!r&&o<s.state.count;){var c=s.state.json.questions[o-1],i=c.depends||[];i.length?function(){var e=0;i.forEach(function(t){n.forEach(function(s){t===s&&++e})}),0<e&&(c.operator&&"or"===c.operator&&(r=o),e===i.length&&(r=o))}():r=o,o++}(!r||r>=s.state.count)&&(r=s.state.count),a.step=r,E(Object(f.a)(Object(f.a)(s)),{step:a.step,given_answers:a.given_answers}),s.setState(a)},s.findScores=function(e,t,s){for(var n=0;n<t.length;++n){var a=t[n];e[a.answer_id]=Array.isArray(a.score)?a.score[s]:a.score}return e},s.calcScore=function(e){if(!s.state.json)return 0;for(var t=e||s.state.given_answers,n=s.state.json.questions,a=[],r=t[0]||0,o=0;o<n.length;++o){var c=n[o];s.findScores(a,c.answers,r),c.sub&&c.sub.forEach(function(e){s.findScores(a,e.answers,r)})}return t.reduce(function(e,t){return e+a[t]},0)},s.getResult=function(){for(var e=s.calcScore(),t=s.state.json.results,n=0;n<t.length;++n){var a=t[n];if(a.up_to&&e<a.up_to||a.in&&a.in.includes(e)||!a.in&&!a.up_to)return a}return{}},s.goBack=function(){return j(Object(f.a)(Object(f.a)(s)))},s.isDebugging=function(){return!1},e.json?s.state=Object(c.a)({},w,{steps:e.json.questions[e.json.questions.length-1].step+1,count:e.json.questions.length+1,json:e.json}):(s.state=w,O.get(_(s.props.quiz)).then(function(e){var t=e.data;s.setState(function(){return{steps:t.questions[t.questions.length-1].step+1,count:t.questions.length+1,json:t}})}).catch(function(e){console.warn&&console.warn(e)})),s}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=0;return this.state.step&&(e=this.state.step>=this.state.count?this.state.steps:this.state.json.questions[this.state.step-1].step),this.isDebugging()&&(console.group("Current state"),console.log("History",this.state.history),console.log("Current score",this.calcScore()),console.log("State",this.state),console.groupEnd("Current state")),a.a.createElement("div",{className:"test-wrapper"},1<this.state.step&&a.a.createElement("div",{className:"button-back",onClick:this.goBack},"Tilbage"),a.a.createElement("div",{className:"test-wrapper-body"},0===this.state.step&&!this.state.json&&a.a.createElement(N,{key:"loading"}),0===this.state.step&&this.state.json&&a.a.createElement(q,{key:"testintro",intro:this.state.json.intro,start:this.startTest}),0<this.state.step&&this.state.step>=this.state.count&&a.a.createElement(A,{key:"result",result:this.getResult()}),0<this.state.step&&this.state.step<this.state.count&&a.a.createElement(x,{step:this.state.step,key:"question"+this.state.step,question:this.state.json.questions[this.state.step-1],given_answers:this.state.given_answers,recordAnswerAndStep:this.recordAnswerAndStep}),0<this.state.step&&a.a.createElement(B,{key:"status",step:e,count:this.state.steps})))}}]),t}(n.Component);o.a.render(a.a.createElement(M,{quiz:"danmark-testen"}),document.getElementById("danmark-testen"))},98:function(e,t,s){e.exports=s(190)}},[[98,2,1]]]);
//# sourceMappingURL=main.fe106d6b.chunk.js.map