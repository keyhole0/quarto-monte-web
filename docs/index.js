!function(e){var t={};function i(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(s,n,function(t){return e[t]}.bind(null,n));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=7)}([function(e,t,i){"use strict";function s(e,t){for(let i of e.line_info)for(let e=0;e<4;++e){let s=i[e]+t.param[e];if(4==s||-4==s)return!0}return!1}function n(e,t){let i,s;for(let n=0;n<4;++n)for(let r=0;r<4;++r){if(null!=e.onboard[n][r])continue;let o=e.clone();if(o.setBoard(n,r,t),o.isQuarto())return[n,r];i=n,s=r}return[i,s]}function r(e,t){let i=[];for(let n of t)s(e,n)||i.push(n);return i}function o(e,t,i){let n=e.getIsBlankList();if(0==t.piecelist.length)return n;for(let r=0;r<4;++r)for(let o=0;o<4;++o){if(!n[r][o])continue;let a=e.clone();if(a.setBoard(r,o,i),a.isRiichi()){let e=!1;for(d of t.piecelist)if(!s(a,d)){e=!0;break}n[r][o]=e}}return n}function a(e){return e=Math.floor(e),Math.floor(Math.random()*e)}function l(e){let t=[];for(let i=0;i<4;++i)for(let s=0;s<4;++s)e[i][s]&&t.push([i,s]);return t}function c(e){for(let t=0;t<e.length;++t)for(let i=0;i<e[t].length;++i)if(e[t][i])return!0;return!1}function u(e){let t=e[0],i=0;for(let s=1;s<e.length;++s)t<e[s]&&(i=s,t=e[s]);return i}function h(e){let t=0;for(let i=0;i<e.length;++i)t+=e[i];return t}function f(e){let t=new Array(e);for(let e=0;e<t.length;++e)t[e]=0;return t}i.d(t,"c",function(){return s}),i.d(t,"d",function(){return n}),i.d(t,"g",function(){return r}),i.d(t,"f",function(){return o}),i.d(t,"h",function(){return a}),i.d(t,"e",function(){return l}),i.d(t,"a",function(){return c}),i.d(t,"b",function(){return u}),i.d(t,"i",function(){return h}),i.d(t,"j",function(){return f});class d{static open(e){}static close(){}static print(e){}}},function(e,t,i){"use strict";i.d(t,"a",function(){return s});class s{constructor(e,t,i,s){this.param=[e,t,i,s];let n=1==e?1:0,r=1==t?1:0,o=1==i?1:0,a=1==s?1:0;this.index=(n<<0)+(r<<1)+(o<<2)+(a<<3)}toDict(){return{color:1==this.param[0]?"light":"dark",shape:1==this.param[1]?"circular":"square",top:1==this.param[2]?"hollow":"solid",height:1==this.param[3]?"tall":"short"}}toNumList(){let e=new Array(4);for(let t=0;t<4;++t)e[t]=1==this.param[t]?1:2;return e}static getInstance(e){let t="light"==e.color?1:0,i="circular"==e.shape?1:0,s="hollow"==e.top?1:0,r="tall"==e.height?1:0;return n[(t<<0)+(i<<1)+(s<<2)+(r<<3)]}static getAllPiece(){return n.slice()}}const n=[new s(-1,-1,-1,-1),new s(1,-1,-1,-1),new s(-1,1,-1,-1),new s(1,1,-1,-1),new s(-1,-1,1,-1),new s(1,-1,1,-1),new s(-1,1,1,-1),new s(1,1,1,-1),new s(-1,-1,-1,1),new s(1,-1,-1,1),new s(-1,1,-1,1),new s(1,1,-1,1),new s(-1,-1,1,1),new s(1,-1,1,1),new s(-1,1,1,1),new s(1,1,1,1)]},function(e,t,i){"use strict";i.d(t,"a",function(){return n});var s=i(1);class n{constructor(e=null,t=null){if(this.piecelist=null,e){let t=[];for(let i of e){let e=s.a.getInstance(i);t.push(e)}this.piecelist=t}if(t){this.piecelist=s.a.getAllPiece();for(let e=0;e<4;++e)for(let i=0;i<4;++i){let s=t.onboard[e][i];s&&this.remove(s)}}}clone(){let e=new n;return e.piecelist=this.piecelist.slice(),e}remove(e){for(let t=0;t<this.piecelist.length;++t)this.piecelist[t]==e&&this.piecelist.splice(t,1)}toDict(){let e=[];for(let t of this.piecelist)e.push(t.toDict());return e}isEmpty(){return 0==this.piecelist.length}}},function(e,t,i){"use strict";i.d(t,"a",function(){return r});var s=i(1);class n{constructor(e=null){this.init(e)}init(e){if(this.onboard=null,e){this.onboard=[[null,null,null,null],[null,null,null,null],[null,null,null,null],[null,null,null,null]];for(let t=0;t<e.length;++t){let i=e[t];i.piece&&this.setBoard(i.left,i.top,s.a.getInstance(i.piece))}}}setBoard(e,t,i){this.onboard[e][t]=i}getBoard(e,t){return this.onboard[e][t]}toList(){return this.onboard}toDict(){let e=[];for(let t=0;t<4;++t)for(let i=0;i<4;++i){let s=this.onboard[t][i];s&&(s=s.toDict());let n={left:t,top:i,piece:s};e.push(n)}return e}}class r extends n{constructor(e=null){super(e)}init(e){if(this.countPiecesNum=0,this.line_info=null,e){this.line_info=new Array(10);for(let e=0;e<10;++e)this.line_info[e]=[0,0,0,0]}super.init(e)}setBoard(e,t,i){if(super.setBoard(e,t,i),i){let s=t,n=e+4;o(this.line_info[s],i.param),o(this.line_info[n],i.param),e==t&&o(this.line_info[8],i.param),e+t==3&&o(this.line_info[9],i.param)}++this.countPiecesNum}isQuarto(){for(let e=0;e<10;++e)for(let t=0;t<4;++t){let i=this.line_info[e][t];if(4==Math.abs(i))return!0}return!1}isRiichi(){for(let e=0;e<10;++e)for(let t=0;t<4;++t){let i=this.line_info[e][t];if(3==Math.abs(i))return!0}return!1}getIsBlankList(){let e=[new Array(4),new Array(4),new Array(4),new Array(4)];for(let t=0;t<4;++t)for(let i=0;i<4;++i)e[t][i]=null==this.onboard[t][i];return e}getPiecesNum(){return this.countPiecesNum}clone(){let e=new r;e.onboard=new Array(4);for(let t=0;t<4;++t){e.onboard[t]=new Array(4);for(let i=0;i<4;++i)e.onboard[t][i]=this.onboard[t][i]}e.line_info=new Array(10);for(let t=0;t<10;++t){e.line_info[t]=new Array(4);for(let i=0;i<4;++i)e.line_info[t][i]=this.line_info[t][i]}return e.countPiecesNum=this.countPiecesNum,e}}function o(e,t){for(let i=0;i<e.length;++i)e[i]+=t[i]}},,,,function(e,t,i){"use strict";i.r(t);var s=i(3),n=i(2),r=i(1);class o{constructor(e){this.name=e}setGamesys(e){this.gamesys=e}setPlayerNo(e){this.playerno=e}actionChoice(e,t){let i=this.gamesys.nowPhase();i instanceof c&&i.playerno==this.playerno&&(i.setParam(e,t),i.action())}actionPut(e,t,i){let s=this.gamesys.nowPhase();s instanceof u&&s.playerno==this.playerno&&(s.setParam(e,t,i),s.action())}}class a extends o{constructor(e,t){super(e),this.aiName=t,this.choiceWorker=new Worker("./worker/choice.js"),this.putWorker=new Worker("./worker/put.js"),this.choiceWorker.onmessage=(e=>{let t=r.a.getInstance(e.data.piece),i=e.data.call;this.actionChoice(t,i)}),this.putWorker.onmessage=(e=>{let t=e.data.left,i=e.data.top,s=e.data.call;this.actionPut(t,i,s)})}runAiChoice(){this.choiceWorker.postMessage({aiName:this.aiName,in_board:this.gamesys.board.toDict(),in_box:this.gamesys.box.toDict()})}runAiPut(){this.putWorker.postMessage({aiName:this.aiName,in_board:this.gamesys.board.toDict(),in_piece:this.gamesys.choicePiece.toDict()})}}class l{constructor(e,t){this.gamesys=e,this.playerno=t}}class c extends l{runAi(){let e=this.gamesys.players[this.playerno];e instanceof a&&e.runAiChoice()}setParam(e,t){this.piece=e,this.call=t}action(){this.gamesys.choice(this.piece,this.call),this.gamesys.disp(),this.gamesys.nextPhase()}}class u extends l{runAi(){let e=this.gamesys.players[this.playerno];e instanceof a&&e.runAiPut()}setParam(e,t,i){this.left=e,this.top=t,this.call=i}action(){this.gamesys.put(this.left,this.top,this.call),this.gamesys.disp(),this.gamesys.nextPhase()}}var h=i(0);const f=new o("あなた"),d=new a("プレイヤー１","AiMontecarlo");new a("プレイヤー２","AiRandom");var p=d;const m=new class{constructor(e,t){this.setPlayer(e,t),this.phases=[new c(this,0),new u(this,1),new c(this,1),new u(this,0)]}start(){this.board=new s.a([]),this.box=new n.a(null,this.board),this.choicePiece=null,this.isGameEnd=!1,this.winner=null,this.phasecount=0,this.dispInit(),this.nowPhase().runAi()}nowPhase(){return this.phases[this.phasecount]}nowPlayerNo(){return this.phases[this.phasecount].playerno}setPlayer(e,t){this.releasePlayer(),this.players=[e,t],e.setGamesys(this),e.setPlayerNo(0),t.setGamesys(this),t.setPlayerNo(1)}releasePlayer(){if(null!=this.players){for(let e of this.players)e.setGamesys(null),e.setPlayerNo(null);this.players=null}}setDisplay(e){this.display=e}choice(e,t){this.isGameEnd||this.checkQuarto(t)||(this.choicePiece=e,this.box.remove(this.choicePiece))}put(e,t,i){this.isGameEnd||(this.board.setBoard(e,t,this.choicePiece),this.choicePiece=null,this.checkQuarto(i)||this.checkBox())}checkQuarto(e){if("Quarto"==e){let e=this.nowPhase().playerno;this.board.isQuarto()?this.winner=e:this.winner=1-e,this.isGameEnd=!0}return this.isGameEnd}checkBox(){return this.box.isEmpty()&&(this.isGameEnd=!0),this.isGameEnd}dispInit(){this.display.dispInit(),this.display.dispMain(this.board,this.box,this.choicePiece)}disp(){this.display.dispMain(this.board,this.box,this.choicePiece)}gameover(){let e=null;null!=this.winner&&(e=this.players[this.winner].name),this.display.dispGameOver(e)}nextPhase(){this.isGameEnd?this.gameover():(this.phasecount=(this.phasecount+1)%this.phases.length,this.nowPhase().runAi())}}(f,p),y=new class{setBoard(e){this.canvas_board=e}setBox(e){this.canvas_box=e}setPiece(e){this.canvas_piece=e}setResult(e){this.canvas_result=e}dispInit(){this.canvas_result.innerHTML=""}dispGameOver(e){this.canvas_result.innerHTML="winner:"+e}dispMain(e,t,i){this.dispBoard(e),this.dispBox(t),this.dispPiece(i)}dispBoard(e){for(let t=0;t<4;++t)for(let i=0;i<4;++i){let s=e.onboard[t][i],n=this.canvas_board.querySelector("#c"+t+i);null!=n&&(n.innerHTML=null!=s?""+s.toNumList():"       ")}}dispBox(e){let t="ボックス";if(e.piecelist){let i="<p>",s=0;for(let t of e.piecelist)i+='<span data-ind="'+s+'">['+t.toNumList()+"]</span> ",++s;t+=i+="</p>"}this.canvas_box.innerHTML=t}dispPiece(e){this.canvas_piece.innerHTML=e?"選択されたコマ："+e.toNumList():"選択されたコマ："}};m.setDisplay(y);const g=document.getElementById("gamestart"),b=document.getElementById("board"),w=document.getElementById("box"),P=document.getElementById("piece"),_=document.getElementById("result");y.setBoard(b),y.setBox(w),y.setPiece(P),y.setResult(_),g.addEventListener("click",e=>{document.getElementById("I_plays_first").checked?m.setPlayer(p,f):m.setPlayer(f,p),m.start()}),b.addEventListener("click",e=>{let t=e.srcElement;if("TD"!=t.tagName)return;if(null==m.choicePiece)return;let i=Number(t.dataset.left),s=Number(t.dataset.top),n="Non";null==m.board.getBoard(i,s)&&(h.c(m.board,m.choicePiece)&&(n="Quarto"),f.actionPut(i,s,n))}),w.addEventListener("click",e=>{let t=e.srcElement;if("SPAN"!=t.tagName)return;if(null!=m.choicePiece)return;let i=Number(t.dataset.ind),s=m.box.piecelist[i],n="Non";m.board.isQuarto()&&(n="Quarto"),f.actionChoice(s,n)})}]);