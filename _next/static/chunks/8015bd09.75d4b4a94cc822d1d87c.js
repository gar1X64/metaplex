"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[766],{59917:function(e,t,r){r.d(t,{RG:function(){return Te},j5:function(){return $e},nh:function(){return I},Am:function(){return X},ze:function(){return q},yc:function(){return V},YW:function(){return T},Sl:function(){return G},BV:function(){return C}});var n=r(56666),s=r(10717),i=r.n(s),a=r(48764),o=r(13550),u=r.n(o),c=r(17022),d=r.n(c),l=r(37503),h=r(83871),p=r(96346),g=r(50974),f=(r(50714),r(87414),r(97637)),y=r.n(f),b=r(83669);const m=e=>a.Buffer.isBuffer(e)?e:e instanceof Uint8Array?a.Buffer.from(e.buffer,e.byteOffset,e.byteLength):a.Buffer.from(e);class k{constructor(e){Object.assign(this,e)}encode(){return a.Buffer.from((0,h.serialize)(S,this))}static decode(e){return(0,h.deserialize)(S,this,e)}static decodeUnchecked(e){return(0,h.deserializeUnchecked)(S,this,e)}}const S=new Map;class I extends k{constructor(e){if(super({}),(0,n.Z)(this,"_bn",void 0),function(e){return void 0!==e._bn}(e))this._bn=e._bn;else{if("string"===typeof e){const t=d().decode(e);if(32!=t.length)throw new Error("Invalid public key input");this._bn=new(u())(t)}else this._bn=new(u())(e);if(this._bn.byteLength()>32)throw new Error("Invalid public key input")}}equals(e){return this._bn.eq(e._bn)}toBase58(){return d().encode(this.toBytes())}toBytes(){return this.toBuffer()}toBuffer(){const e=this._bn.toArrayLike(a.Buffer);if(32===e.length)return e;const t=a.Buffer.alloc(32);return e.copy(t,32-e.length),t}toString(){return this.toBase58()}static async createWithSeed(e,t,r){const n=a.Buffer.concat([e.toBuffer(),a.Buffer.from(t),r.toBuffer()]),s=await(0,l.JQ)(new Uint8Array(n));return new I(a.Buffer.from(s,"hex"))}static async createProgramAddress(e,t){let r=a.Buffer.alloc(0);e.forEach((function(e){if(e.length>32)throw new TypeError("Max seed length exceeded");r=a.Buffer.concat([r,m(e)])})),r=a.Buffer.concat([r,t.toBuffer(),a.Buffer.from("ProgramDerivedAddress")]);let n=await(0,l.JQ)(new Uint8Array(r)),s=new(u())(n,16).toArray(void 0,32);if(w(s))throw new Error("Invalid seeds, address must fall off the curve");return new I(s)}static async findProgramAddress(e,t){let r,n=255;for(;0!=n;){try{const s=e.concat(a.Buffer.from([n]));r=await this.createProgramAddress(s,t)}catch(s){if(s instanceof TypeError)throw s;n--;continue}return[r,n]}throw new Error("Unable to find a viable program address nonce")}static isOnCurve(e){return 1==w(e)}}(0,n.Z)(I,"default",new I("11111111111111111111111111111111")),S.set(I,{kind:"struct",fields:[["_bn","u256"]]});let x=i().lowlevel;function w(e){var t=[x.gf(),x.gf(),x.gf(),x.gf()],r=x.gf(),n=x.gf(),s=x.gf(),i=x.gf(),a=x.gf(),o=x.gf(),u=x.gf();return x.set25519(t[2],A),x.unpack25519(t[1],e),x.S(s,t[1]),x.M(i,s,x.D),x.Z(s,s,t[2]),x.A(i,t[2],i),x.S(a,i),x.S(o,a),x.M(u,o,a),x.M(r,u,s),x.M(r,r,i),x.pow2523(r,r),x.M(r,r,s),x.M(r,r,i),x.M(r,r,i),x.M(t[0],r,i),x.S(n,t[0]),x.M(n,n,i),P(n,s)&&x.M(t[0],t[0],R),x.S(n,t[0]),x.M(n,n,i),P(n,s)?0:1}let A=x.gf([1]),R=x.gf([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function P(e,t){var r=new Uint8Array(32),n=new Uint8Array(32);return x.pack25519(r,e),x.pack25519(n,t),x.crypto_verify_32(r,0,n,0)}new I("BPFLoader1111111111111111111111111111111111");const B=(e="publicKey")=>p.blob(32,e),_=(e="string")=>{const t=p.struct([p.u32("length"),p.u32("lengthPadding"),p.blob(p.offset(p.u32(),-8),"chars")],e),r=t.decode.bind(t),n=t.encode.bind(t);return t.decode=(e,t)=>r(e,t).chars.toString("utf8"),t.encode=(e,t,r)=>{const s={chars:a.Buffer.from(e,"utf8")};return n(s,t,r)},t.alloc=e=>p.u32().span+p.u32().span+a.Buffer.from(e,"utf8").length,t};function W(e){let t=0,r=0;for(;;){let n=e.shift();if(t|=(127&n)<<7*r,r+=1,0===(128&n))break}return t}function v(e,t){let r=t;for(;;){let t=127&r;if(r>>=7,0==r){e.push(t);break}t|=128,e.push(t)}}class Z{constructor(e){(0,n.Z)(this,"header",void 0),(0,n.Z)(this,"accountKeys",void 0),(0,n.Z)(this,"recentBlockhash",void 0),(0,n.Z)(this,"instructions",void 0),this.header=e.header,this.accountKeys=e.accountKeys.map((e=>new I(e))),this.recentBlockhash=e.recentBlockhash,this.instructions=e.instructions}isAccountWritable(e){return e<this.header.numRequiredSignatures-this.header.numReadonlySignedAccounts||e>=this.header.numRequiredSignatures&&e<this.accountKeys.length-this.header.numReadonlyUnsignedAccounts}serialize(){const e=this.accountKeys.length;let t=[];v(t,e);const r=this.instructions.map((e=>{const{accounts:t,programIdIndex:r}=e,n=d().decode(e.data);let s=[];v(s,t.length);let i=[];return v(i,n.length),{programIdIndex:r,keyIndicesCount:a.Buffer.from(s),keyIndices:a.Buffer.from(t),dataLength:a.Buffer.from(i),data:n}}));let n=[];v(n,r.length);let s=a.Buffer.alloc(K);a.Buffer.from(n).copy(s);let i=n.length;r.forEach((e=>{const t=p.struct([p.u8("programIdIndex"),p.blob(e.keyIndicesCount.length,"keyIndicesCount"),p.seq(p.u8("keyIndex"),e.keyIndices.length,"keyIndices"),p.blob(e.dataLength.length,"dataLength"),p.seq(p.u8("userdatum"),e.data.length,"data")]).encode(e,s,i);i+=t})),s=s.slice(0,i);const o=p.struct([p.blob(1,"numRequiredSignatures"),p.blob(1,"numReadonlySignedAccounts"),p.blob(1,"numReadonlyUnsignedAccounts"),p.blob(t.length,"keyCount"),p.seq(B("key"),e,"keys"),B("recentBlockhash")]),u={numRequiredSignatures:a.Buffer.from([this.header.numRequiredSignatures]),numReadonlySignedAccounts:a.Buffer.from([this.header.numReadonlySignedAccounts]),numReadonlyUnsignedAccounts:a.Buffer.from([this.header.numReadonlyUnsignedAccounts]),keyCount:a.Buffer.from(t),keys:this.accountKeys.map((e=>m(e.toBytes()))),recentBlockhash:d().decode(this.recentBlockhash)};let c=a.Buffer.alloc(2048);const l=o.encode(u,c);return s.copy(c,l),c.slice(0,l+s.length)}static from(e){let t=[...e];const r=t.shift(),n=t.shift(),s=t.shift(),i=W(t);let o=[];for(let p=0;p<i;p++){const e=t.slice(0,32);t=t.slice(32),o.push(d().encode(a.Buffer.from(e)))}const u=t.slice(0,32);t=t.slice(32);const c=W(t);let l=[];for(let p=0;p<c;p++){const e=t.shift(),r=W(t),n=t.slice(0,r);t=t.slice(r);const s=W(t),i=t.slice(0,s),o=d().encode(a.Buffer.from(i));t=t.slice(s),l.push({programIdIndex:e,accounts:n,data:o})}const h={header:{numRequiredSignatures:r,numReadonlySignedAccounts:n,numReadonlyUnsignedAccounts:s},recentBlockhash:d().encode(a.Buffer.from(u)),accountKeys:o,instructions:l};return new Z(h)}}function z(e,t){if(!e)throw new Error(t||"Assertion failed")}const E=a.Buffer.alloc(64).fill(0),K=1232;class G{constructor(e){(0,n.Z)(this,"keys",void 0),(0,n.Z)(this,"programId",void 0),(0,n.Z)(this,"data",a.Buffer.alloc(0)),this.programId=e.programId,this.keys=e.keys,e.data&&(this.data=e.data)}}class T{get signature(){return this.signatures.length>0?this.signatures[0].signature:null}constructor(e){(0,n.Z)(this,"signatures",[]),(0,n.Z)(this,"feePayer",void 0),(0,n.Z)(this,"instructions",[]),(0,n.Z)(this,"recentBlockhash",void 0),(0,n.Z)(this,"nonceInfo",void 0),e&&Object.assign(this,e)}add(...e){if(0===e.length)throw new Error("No instructions");return e.forEach((e=>{"instructions"in e?this.instructions=this.instructions.concat(e.instructions):"data"in e&&"programId"in e&&"keys"in e?this.instructions.push(e):this.instructions.push(new G(e))})),this}compileMessage(){const{nonceInfo:e}=this;e&&this.instructions[0]!=e.nonceInstruction&&(this.recentBlockhash=e.nonce,this.instructions.unshift(e.nonceInstruction));const{recentBlockhash:t}=this;if(!t)throw new Error("Transaction recentBlockhash required");let r;if(this.instructions.length<1&&console.warn("No instructions provided"),this.feePayer)r=this.feePayer;else{if(!(this.signatures.length>0&&this.signatures[0].publicKey))throw new Error("Transaction fee payer required");r=this.signatures[0].publicKey}for(let d=0;d<this.instructions.length;d++)if(void 0===this.instructions[d].programId)throw new Error(`Transaction instruction index ${d} has undefined program id`);const n=[],s=[];this.instructions.forEach((e=>{e.keys.forEach((e=>{s.push({...e})}));const t=e.programId.toString();n.includes(t)||n.push(t)})),n.forEach((e=>{s.push({pubkey:new I(e),isSigner:!1,isWritable:!1})})),s.sort((function(e,t){const r=e.isSigner===t.isSigner?0:e.isSigner?-1:1,n=e.isWritable===t.isWritable?0:e.isWritable?-1:1;return r||n}));const i=[];s.forEach((e=>{const t=e.pubkey.toString(),r=i.findIndex((e=>e.pubkey.toString()===t));r>-1?i[r].isWritable=i[r].isWritable||e.isWritable:i.push(e)}));const a=i.findIndex((e=>e.pubkey.equals(r)));if(a>-1){const[e]=i.splice(a,1);e.isSigner=!0,e.isWritable=!0,i.unshift(e)}else i.unshift({pubkey:r,isSigner:!0,isWritable:!0});for(const d of this.signatures){const e=i.findIndex((e=>e.pubkey.equals(d.publicKey)));if(!(e>-1))throw new Error(`unknown signer: ${d.publicKey.toString()}`);i[e].isSigner||(i[e].isSigner=!0,console.warn("Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."))}let o=0,u=0,c=0;const l=[],h=[];i.forEach((({pubkey:e,isSigner:t,isWritable:r})=>{t?(l.push(e.toString()),o+=1,r||(u+=1)):(h.push(e.toString()),r||(c+=1))}));const p=l.concat(h),g=this.instructions.map((e=>{const{data:t,programId:r}=e;return{programIdIndex:p.indexOf(r.toString()),accounts:e.keys.map((e=>p.indexOf(e.pubkey.toString()))),data:d().encode(t)}}));return g.forEach((e=>{z(e.programIdIndex>=0),e.accounts.forEach((e=>z(e>=0)))})),new Z({header:{numRequiredSignatures:o,numReadonlySignedAccounts:u,numReadonlyUnsignedAccounts:c},accountKeys:p,recentBlockhash:t,instructions:g})}_compile(){const e=this.compileMessage(),t=e.accountKeys.slice(0,e.header.numRequiredSignatures);if(this.signatures.length===t.length){if(this.signatures.every(((e,r)=>t[r].equals(e.publicKey))))return e}return this.signatures=t.map((e=>({signature:null,publicKey:e}))),e}serializeMessage(){return this._compile().serialize()}setSigners(...e){if(0===e.length)throw new Error("No signers");const t=new Set;this.signatures=e.filter((e=>{const r=e.toString();return!t.has(r)&&(t.add(r),!0)})).map((e=>({signature:null,publicKey:e})))}sign(...e){if(0===e.length)throw new Error("No signers");const t=new Set,r=[];for(const s of e){const e=s.publicKey.toString();t.has(e)||(t.add(e),r.push(s))}this.signatures=r.map((e=>({signature:null,publicKey:e.publicKey})));const n=this._compile();this._partialSign(n,...r),this._verifySignatures(n.serialize(),!0)}partialSign(...e){if(0===e.length)throw new Error("No signers");const t=new Set,r=[];for(const s of e){const e=s.publicKey.toString();t.has(e)||(t.add(e),r.push(s))}const n=this._compile();this._partialSign(n,...r)}_partialSign(e,...t){const r=e.serialize();t.forEach((e=>{const t=i().sign.detached(r,e.secretKey);this._addSignature(e.publicKey,m(t))}))}addSignature(e,t){this._compile(),this._addSignature(e,t)}_addSignature(e,t){z(64===t.length);const r=this.signatures.findIndex((t=>e.equals(t.publicKey)));if(r<0)throw new Error(`unknown signer: ${e.toString()}`);this.signatures[r].signature=a.Buffer.from(t)}verifySignatures(){return this._verifySignatures(this.serializeMessage(),!0)}_verifySignatures(e,t){for(const{signature:r,publicKey:n}of this.signatures)if(null===r){if(t)return!1}else if(!i().sign.detached.verify(e,r,n.toBuffer()))return!1;return!0}serialize(e){const{requireAllSignatures:t,verifySignatures:r}=Object.assign({requireAllSignatures:!0,verifySignatures:!0},e),n=this.serializeMessage();if(r&&!this._verifySignatures(n,t))throw new Error("Signature verification failed");return this._serialize(n)}_serialize(e){const{signatures:t}=this,r=[];v(r,t.length);const n=r.length+64*t.length+e.length,s=a.Buffer.alloc(n);return z(t.length<256),a.Buffer.from(r).copy(s,0),t.forEach((({signature:e},t)=>{null!==e&&(z(64===e.length,"signature has invalid length"),a.Buffer.from(e).copy(s,r.length+64*t))})),e.copy(s,r.length+64*t.length),z(s.length<=K,`Transaction too large: ${s.length} > ${K}`),s}get keys(){return z(1===this.instructions.length),this.instructions[0].keys.map((e=>e.pubkey))}get programId(){return z(1===this.instructions.length),this.instructions[0].programId}get data(){return z(1===this.instructions.length),this.instructions[0].data}static from(e){let t=[...e];const r=W(t);let n=[];for(let s=0;s<r;s++){const e=t.slice(0,64);t=t.slice(64),n.push(d().encode(a.Buffer.from(e)))}return T.populate(Z.from(t),n)}static populate(e,t){const r=new T;return r.recentBlockhash=e.recentBlockhash,e.header.numRequiredSignatures>0&&(r.feePayer=e.accountKeys[0]),t.forEach(((t,n)=>{const s={signature:t==d().encode(E)?null:d().decode(t),publicKey:e.accountKeys[n]};r.signatures.push(s)})),e.instructions.forEach((t=>{const n=t.accounts.map((t=>{const n=e.accountKeys[t];return{pubkey:n,isSigner:r.signatures.some((e=>e.publicKey.toString()===n.toString())),isWritable:e.isAccountWritable(t)}}));r.instructions.push(new G({keys:n,programId:e.accountKeys[t.programIdIndex],data:d().decode(t.data)}))})),r}}const X=new I("SysvarC1ock11111111111111111111111111111111"),j=new I("SysvarRecentB1ockHashes11111111111111111111"),q=new I("SysvarRent111111111111111111111111111111111"),O=(new I("SysvarRewards111111111111111111111111111111"),new I("SysvarStakeHistory1111111111111111111111111"));new I("Sysvar1nstructions1111111111111111111111111");async function C(e,t,r,n){const s=n&&{skipPreflight:n.skipPreflight,preflightCommitment:n.preflightCommitment||n.commitment},i=await e.sendTransaction(t,r,s),a=(await e.confirmTransaction(i,n&&n.commitment)).value;if(a.err)throw new Error(`Transaction ${i} failed (${JSON.stringify(a)})`);return i}function M(e){return new Promise((t=>setTimeout(t,e)))}function N(e,t){const r=e.layout.span>=0?e.layout.span:function(e,t){let r=0;return e.layout.fields.forEach((e=>{e.span>=0?r+=e.span:"function"===typeof e.alloc&&(r+=e.alloc(t[e.property]))})),r}(e,t),n=a.Buffer.alloc(r),s=Object.assign({instruction:e.index},t);return e.layout.encode(s,n),n}const U=p.nu64("lamportsPerSignature"),$=p.struct([p.u32("version"),p.u32("state"),B("authorizedPubkey"),B("nonce"),p.struct([U],"feeCalculator")]),D=$.span;const L=Object.freeze({Create:{index:0,layout:p.struct([p.u32("instruction"),p.ns64("lamports"),p.ns64("space"),B("programId")])},Assign:{index:1,layout:p.struct([p.u32("instruction"),B("programId")])},Transfer:{index:2,layout:p.struct([p.u32("instruction"),p.ns64("lamports")])},CreateWithSeed:{index:3,layout:p.struct([p.u32("instruction"),B("base"),_("seed"),p.ns64("lamports"),p.ns64("space"),B("programId")])},AdvanceNonceAccount:{index:4,layout:p.struct([p.u32("instruction")])},WithdrawNonceAccount:{index:5,layout:p.struct([p.u32("instruction"),p.ns64("lamports")])},InitializeNonceAccount:{index:6,layout:p.struct([p.u32("instruction"),B("authorized")])},AuthorizeNonceAccount:{index:7,layout:p.struct([p.u32("instruction"),B("authorized")])},Allocate:{index:8,layout:p.struct([p.u32("instruction"),p.ns64("space")])},AllocateWithSeed:{index:9,layout:p.struct([p.u32("instruction"),B("base"),_("seed"),p.ns64("space"),B("programId")])},AssignWithSeed:{index:10,layout:p.struct([p.u32("instruction"),B("base"),_("seed"),B("programId")])},TransferWithSeed:{index:11,layout:p.struct([p.u32("instruction"),p.ns64("lamports"),_("seed"),B("programId")])}});class V{constructor(){}static createAccount(e){const t=N(L.Create,{lamports:e.lamports,space:e.space,programId:m(e.programId.toBuffer())});return new G({keys:[{pubkey:e.fromPubkey,isSigner:!0,isWritable:!0},{pubkey:e.newAccountPubkey,isSigner:!0,isWritable:!0}],programId:this.programId,data:t})}static transfer(e){let t,r;if("basePubkey"in e){t=N(L.TransferWithSeed,{lamports:e.lamports,seed:e.seed,programId:m(e.programId.toBuffer())}),r=[{pubkey:e.fromPubkey,isSigner:!1,isWritable:!0},{pubkey:e.basePubkey,isSigner:!0,isWritable:!1},{pubkey:e.toPubkey,isSigner:!1,isWritable:!0}]}else{t=N(L.Transfer,{lamports:e.lamports}),r=[{pubkey:e.fromPubkey,isSigner:!0,isWritable:!0},{pubkey:e.toPubkey,isSigner:!1,isWritable:!0}]}return new G({keys:r,programId:this.programId,data:t})}static assign(e){let t,r;if("basePubkey"in e){t=N(L.AssignWithSeed,{base:m(e.basePubkey.toBuffer()),seed:e.seed,programId:m(e.programId.toBuffer())}),r=[{pubkey:e.accountPubkey,isSigner:!1,isWritable:!0},{pubkey:e.basePubkey,isSigner:!0,isWritable:!1}]}else{t=N(L.Assign,{programId:m(e.programId.toBuffer())}),r=[{pubkey:e.accountPubkey,isSigner:!0,isWritable:!0}]}return new G({keys:r,programId:this.programId,data:t})}static createAccountWithSeed(e){const t=N(L.CreateWithSeed,{base:m(e.basePubkey.toBuffer()),seed:e.seed,lamports:e.lamports,space:e.space,programId:m(e.programId.toBuffer())});let r=[{pubkey:e.fromPubkey,isSigner:!0,isWritable:!0},{pubkey:e.newAccountPubkey,isSigner:!1,isWritable:!0}];return e.basePubkey!=e.fromPubkey&&r.push({pubkey:e.basePubkey,isSigner:!0,isWritable:!1}),new G({keys:r,programId:this.programId,data:t})}static createNonceAccount(e){const t=new T;"basePubkey"in e&&"seed"in e?t.add(V.createAccountWithSeed({fromPubkey:e.fromPubkey,newAccountPubkey:e.noncePubkey,basePubkey:e.basePubkey,seed:e.seed,lamports:e.lamports,space:D,programId:this.programId})):t.add(V.createAccount({fromPubkey:e.fromPubkey,newAccountPubkey:e.noncePubkey,lamports:e.lamports,space:D,programId:this.programId}));const r={noncePubkey:e.noncePubkey,authorizedPubkey:e.authorizedPubkey};return t.add(this.nonceInitialize(r)),t}static nonceInitialize(e){const t=N(L.InitializeNonceAccount,{authorized:m(e.authorizedPubkey.toBuffer())}),r={keys:[{pubkey:e.noncePubkey,isSigner:!1,isWritable:!0},{pubkey:j,isSigner:!1,isWritable:!1},{pubkey:q,isSigner:!1,isWritable:!1}],programId:this.programId,data:t};return new G(r)}static nonceAdvance(e){const t=N(L.AdvanceNonceAccount),r={keys:[{pubkey:e.noncePubkey,isSigner:!1,isWritable:!0},{pubkey:j,isSigner:!1,isWritable:!1},{pubkey:e.authorizedPubkey,isSigner:!0,isWritable:!1}],programId:this.programId,data:t};return new G(r)}static nonceWithdraw(e){const t=N(L.WithdrawNonceAccount,{lamports:e.lamports});return new G({keys:[{pubkey:e.noncePubkey,isSigner:!1,isWritable:!0},{pubkey:e.toPubkey,isSigner:!1,isWritable:!0},{pubkey:j,isSigner:!1,isWritable:!1},{pubkey:q,isSigner:!1,isWritable:!1},{pubkey:e.authorizedPubkey,isSigner:!0,isWritable:!1}],programId:this.programId,data:t})}static nonceAuthorize(e){const t=N(L.AuthorizeNonceAccount,{authorized:m(e.newAuthorizedPubkey.toBuffer())});return new G({keys:[{pubkey:e.noncePubkey,isSigner:!1,isWritable:!0},{pubkey:e.authorizedPubkey,isSigner:!0,isWritable:!1}],programId:this.programId,data:t})}static allocate(e){let t,r;if("basePubkey"in e){t=N(L.AllocateWithSeed,{base:m(e.basePubkey.toBuffer()),seed:e.seed,space:e.space,programId:m(e.programId.toBuffer())}),r=[{pubkey:e.accountPubkey,isSigner:!1,isWritable:!0},{pubkey:e.basePubkey,isSigner:!0,isWritable:!1}]}else{t=N(L.Allocate,{space:e.space}),r=[{pubkey:e.accountPubkey,isSigner:!0,isWritable:!0}]}return new G({keys:r,programId:this.programId,data:t})}}(0,n.Z)(V,"programId",new I("11111111111111111111111111111111"));const Q=K-300;class H{constructor(){}static getMinNumSignatures(e){return 2*(Math.ceil(e/H.chunkSize)+1+1)}static async load(e,t,r,n,s){{const i=await e.getMinimumBalanceForRentExemption(s.length),a=await e.getAccountInfo(r.publicKey,"confirmed");let o=null;if(null!==a){if(a.executable)return console.error("Program load failed, account is already executable"),!1;a.data.length!==s.length&&(o=o||new T,o.add(V.allocate({accountPubkey:r.publicKey,space:s.length}))),a.owner.equals(n)||(o=o||new T,o.add(V.assign({accountPubkey:r.publicKey,programId:n}))),a.lamports<i&&(o=o||new T,o.add(V.transfer({fromPubkey:t.publicKey,toPubkey:r.publicKey,lamports:i-a.lamports})))}else o=(new T).add(V.createAccount({fromPubkey:t.publicKey,newAccountPubkey:r.publicKey,lamports:i>0?i:1,space:s.length,programId:n}));null!==o&&await C(e,o,[t,r],{commitment:"confirmed"})}const i=p.struct([p.u32("instruction"),p.u32("offset"),p.u32("bytesLength"),p.u32("bytesLengthPadding"),p.seq(p.u8("byte"),p.offset(p.u32(),-8),"bytes")]),o=H.chunkSize;let u=0,c=s,d=[];for(;c.length>0;){const s=c.slice(0,o),l=a.Buffer.alloc(o+16);i.encode({instruction:0,offset:u,bytes:s},l);const h=(new T).add({keys:[{pubkey:r.publicKey,isSigner:!0,isWritable:!0}],programId:n,data:l});if(d.push(C(e,h,[t,r],{commitment:"confirmed"})),e._rpcEndpoint.includes("solana.com")){const e=4;await M(1e3/e)}u+=o,c=c.slice(o)}await Promise.all(d);{const s=p.struct([p.u32("instruction")]),i=a.Buffer.alloc(s.span);s.encode({instruction:1},i);const o=(new T).add({keys:[{pubkey:r.publicKey,isSigner:!0,isWritable:!0},{pubkey:q,isSigner:!1,isWritable:!1}],programId:n,data:i});await C(e,o,[t,r],{commitment:"confirmed"})}return!0}}(0,n.Z)(H,"chunkSize",Q);new I("BPFLoader2111111111111111111111111111111111");var F={exports:{}};!function(e,t){var r=function(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof r)return r;throw new Error("unable to locate global object")}();e.exports=t=r.fetch,r.fetch&&(t.default=r.fetch.bind(r)),t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response}(F,F.exports);Error;const J=(0,g.oQ)((0,g.eE)(I),(0,g.Z_)(),(e=>new I(e))),Y=(0,g.bc)([(0,g.Z_)(),(0,g.i0)("base64")]),ee=(0,g.oQ)((0,g.eE)(a.Buffer),Y,(e=>a.Buffer.from(e[0],"base64")));function te(e){return(0,g.G0)([(0,g.dt)({jsonrpc:(0,g.i0)("2.0"),id:(0,g.Z_)(),result:e}),(0,g.dt)({jsonrpc:(0,g.i0)("2.0"),id:(0,g.Z_)(),error:(0,g.dt)({code:(0,g._4)(),message:(0,g.Z_)(),data:(0,g.jt)((0,g.Yj)())})})])}const re=te((0,g._4)());function ne(e){return(0,g.oQ)(te(e),re,(t=>"error"in t?t:{...t,result:(0,g.Ue)(t.result,e)}))}function se(e){return ne((0,g.dt)({context:(0,g.dt)({slot:(0,g.Rx)()}),value:e}))}function ie(e){return(0,g.dt)({context:(0,g.dt)({slot:(0,g.Rx)()}),value:e})}const ae=(0,g.dt)({foundation:(0,g.Rx)(),foundationTerm:(0,g.Rx)(),initial:(0,g.Rx)(),taper:(0,g.Rx)(),terminal:(0,g.Rx)()}),oe=(ne((0,g.IX)((0,g.AG)((0,g.dt)({epoch:(0,g.Rx)(),effectiveSlot:(0,g.Rx)(),amount:(0,g.Rx)(),postBalance:(0,g.Rx)()})))),(0,g.dt)({epoch:(0,g.Rx)(),slotIndex:(0,g.Rx)(),slotsInEpoch:(0,g.Rx)(),absoluteSlot:(0,g.Rx)(),blockHeight:(0,g.jt)((0,g.Rx)()),transactionCount:(0,g.jt)((0,g.Rx)())})),ue=(0,g.dt)({slotsPerEpoch:(0,g.Rx)(),leaderScheduleSlotOffset:(0,g.Rx)(),warmup:(0,g.O7)(),firstNormalEpoch:(0,g.Rx)(),firstNormalSlot:(0,g.Rx)()}),ce=(0,g.IM)((0,g.Z_)(),(0,g.IX)((0,g.Rx)())),de=(0,g.AG)((0,g.G0)([(0,g.dt)({}),(0,g.Z_)()])),le=(0,g.dt)({err:de}),he=(0,g.i0)("receivedSignature");(0,g.dt)({"solana-core":(0,g.Z_)(),"feature-set":(0,g.jt)((0,g.Rx)())}),se((0,g.dt)({err:(0,g.AG)((0,g.G0)([(0,g.dt)({}),(0,g.Z_)()])),logs:(0,g.AG)((0,g.IX)((0,g.Z_)()))}));ne(ae),ne(oe),ne(ue),ne(ce),ne((0,g.Rx)()),se((0,g.dt)({total:(0,g.Rx)(),circulating:(0,g.Rx)(),nonCirculating:(0,g.Rx)(),nonCirculatingAccounts:(0,g.IX)(J)}));const pe=(0,g.dt)({amount:(0,g.Z_)(),uiAmount:(0,g.AG)((0,g.Rx)()),decimals:(0,g.Rx)(),uiAmountString:(0,g.jt)((0,g.Z_)())}),ge=(se((0,g.IX)((0,g.dt)({address:J,amount:(0,g.Z_)(),uiAmount:(0,g.AG)((0,g.Rx)()),decimals:(0,g.Rx)(),uiAmountString:(0,g.jt)((0,g.Z_)())}))),se((0,g.IX)((0,g.dt)({pubkey:J,account:(0,g.dt)({executable:(0,g.O7)(),owner:J,lamports:(0,g.Rx)(),data:ee,rentEpoch:(0,g.Rx)()})}))),(0,g.dt)({program:(0,g.Z_)(),parsed:(0,g._4)(),space:(0,g.Rx)()})),fe=(se((0,g.IX)((0,g.dt)({pubkey:J,account:(0,g.dt)({executable:(0,g.O7)(),owner:J,lamports:(0,g.Rx)(),data:ge,rentEpoch:(0,g.Rx)()})}))),se((0,g.IX)((0,g.dt)({lamports:(0,g.Rx)(),address:J}))),(0,g.dt)({executable:(0,g.O7)(),owner:J,lamports:(0,g.Rx)(),data:ee,rentEpoch:(0,g.Rx)()})),ye=((0,g.dt)({pubkey:J,account:fe}),(0,g.oQ)((0,g.G0)([(0,g.eE)(a.Buffer),ge]),(0,g.G0)([Y,ge]),(e=>Array.isArray(e)?(0,g.Ue)(e,ee):e))),be=(0,g.dt)({executable:(0,g.O7)(),owner:J,lamports:(0,g.Rx)(),data:ye,rentEpoch:(0,g.Rx)()}),me=((0,g.dt)({pubkey:J,account:be}),(0,g.dt)({state:(0,g.G0)([(0,g.i0)("active"),(0,g.i0)("inactive"),(0,g.i0)("activating"),(0,g.i0)("deactivating")]),active:(0,g.Rx)(),inactive:(0,g.Rx)()}),ne((0,g.IX)((0,g.dt)({signature:(0,g.Z_)(),slot:(0,g.Rx)(),err:de,memo:(0,g.AG)((0,g.Z_)()),blockTime:(0,g.jt)((0,g.AG)((0,g.Rx)()))}))),ne((0,g.IX)((0,g.dt)({signature:(0,g.Z_)(),slot:(0,g.Rx)(),err:de,memo:(0,g.AG)((0,g.Z_)()),blockTime:(0,g.jt)((0,g.AG)((0,g.Rx)()))}))),(0,g.dt)({subscription:(0,g.Rx)(),result:ie(fe)}),(0,g.dt)({pubkey:J,account:fe})),ke=((0,g.dt)({subscription:(0,g.Rx)(),result:ie(me)}),(0,g.dt)({parent:(0,g.Rx)(),slot:(0,g.Rx)(),root:(0,g.Rx)()})),Se=((0,g.dt)({subscription:(0,g.Rx)(),result:ke}),(0,g.G0)([(0,g.dt)({type:(0,g.G0)([(0,g.i0)("firstShredReceived"),(0,g.i0)("completed"),(0,g.i0)("optimisticConfirmation"),(0,g.i0)("root")]),slot:(0,g.Rx)(),timestamp:(0,g.Rx)()}),(0,g.dt)({type:(0,g.i0)("createdBank"),parent:(0,g.Rx)(),slot:(0,g.Rx)(),timestamp:(0,g.Rx)()}),(0,g.dt)({type:(0,g.i0)("frozen"),slot:(0,g.Rx)(),timestamp:(0,g.Rx)(),stats:(0,g.dt)({numTransactionEntries:(0,g.Rx)(),numSuccessfulTransactions:(0,g.Rx)(),numFailedTransactions:(0,g.Rx)(),maxTransactionsPerEntry:(0,g.Rx)()})}),(0,g.dt)({type:(0,g.i0)("dead"),slot:(0,g.Rx)(),timestamp:(0,g.Rx)(),err:(0,g.Z_)()})])),Ie=((0,g.dt)({subscription:(0,g.Rx)(),result:Se}),(0,g.dt)({subscription:(0,g.Rx)(),result:ie((0,g.G0)([le,he]))}),(0,g.dt)({subscription:(0,g.Rx)(),result:(0,g.Rx)()}),(0,g.dt)({pubkey:(0,g.Z_)(),gossip:(0,g.AG)((0,g.Z_)()),tpu:(0,g.AG)((0,g.Z_)()),rpc:(0,g.AG)((0,g.Z_)()),version:(0,g.AG)((0,g.Z_)())}),(0,g.dt)({votePubkey:(0,g.Z_)(),nodePubkey:(0,g.Z_)(),activatedStake:(0,g.Rx)(),epochVoteAccount:(0,g.O7)(),epochCredits:(0,g.IX)((0,g.bc)([(0,g.Rx)(),(0,g.Rx)(),(0,g.Rx)()])),commission:(0,g.Rx)(),lastVote:(0,g.Rx)(),rootSlot:(0,g.AG)((0,g.Rx)())})),xe=(ne((0,g.dt)({current:(0,g.IX)(Ie),delinquent:(0,g.IX)(Ie)})),(0,g.G0)([(0,g.i0)("processed"),(0,g.i0)("confirmed"),(0,g.i0)("finalized")])),we=(0,g.dt)({slot:(0,g.Rx)(),confirmations:(0,g.AG)((0,g.Rx)()),err:de,confirmationStatus:(0,g.jt)(xe)}),Ae=(se((0,g.IX)((0,g.AG)(we))),ne((0,g.Rx)()),(0,g.dt)({signatures:(0,g.IX)((0,g.Z_)()),message:(0,g.dt)({accountKeys:(0,g.IX)((0,g.Z_)()),header:(0,g.dt)({numRequiredSignatures:(0,g.Rx)(),numReadonlySignedAccounts:(0,g.Rx)(),numReadonlyUnsignedAccounts:(0,g.Rx)()}),instructions:(0,g.IX)((0,g.dt)({accounts:(0,g.IX)((0,g.Rx)()),data:(0,g.Z_)(),programIdIndex:(0,g.Rx)()})),recentBlockhash:(0,g.Z_)()})})),Re=(0,g.dt)({parsed:(0,g._4)(),program:(0,g.Z_)(),programId:J}),Pe=(0,g.dt)({accounts:(0,g.IX)(J),data:(0,g.Z_)(),programId:J}),Be=(0,g.G0)([Pe,Re]),_e=(0,g.G0)([(0,g.dt)({parsed:(0,g._4)(),program:(0,g.Z_)(),programId:(0,g.Z_)()}),(0,g.dt)({accounts:(0,g.IX)((0,g.Z_)()),data:(0,g.Z_)(),programId:(0,g.Z_)()})]),We=(0,g.oQ)(Be,_e,(e=>"accounts"in e?(0,g.Ue)(e,Pe):(0,g.Ue)(e,Re))),ve=(0,g.dt)({signatures:(0,g.IX)((0,g.Z_)()),message:(0,g.dt)({accountKeys:(0,g.IX)((0,g.dt)({pubkey:J,signer:(0,g.O7)(),writable:(0,g.O7)()})),instructions:(0,g.IX)(We),recentBlockhash:(0,g.Z_)()})}),Ze=(0,g.dt)({accountIndex:(0,g.Rx)(),mint:(0,g.Z_)(),uiTokenAmount:pe}),ze=(0,g.dt)({err:de,fee:(0,g.Rx)(),innerInstructions:(0,g.jt)((0,g.AG)((0,g.IX)((0,g.dt)({index:(0,g.Rx)(),instructions:(0,g.IX)((0,g.dt)({accounts:(0,g.IX)((0,g.Rx)()),data:(0,g.Z_)(),programIdIndex:(0,g.Rx)()}))})))),preBalances:(0,g.IX)((0,g.Rx)()),postBalances:(0,g.IX)((0,g.Rx)()),logMessages:(0,g.jt)((0,g.AG)((0,g.IX)((0,g.Z_)()))),preTokenBalances:(0,g.jt)((0,g.AG)((0,g.IX)(Ze))),postTokenBalances:(0,g.jt)((0,g.AG)((0,g.IX)(Ze)))}),Ee=(0,g.dt)({err:de,fee:(0,g.Rx)(),innerInstructions:(0,g.jt)((0,g.AG)((0,g.IX)((0,g.dt)({index:(0,g.Rx)(),instructions:(0,g.IX)(We)})))),preBalances:(0,g.IX)((0,g.Rx)()),postBalances:(0,g.IX)((0,g.Rx)()),logMessages:(0,g.jt)((0,g.AG)((0,g.IX)((0,g.Z_)()))),preTokenBalances:(0,g.jt)((0,g.AG)((0,g.IX)(Ze))),postTokenBalances:(0,g.jt)((0,g.AG)((0,g.IX)(Ze)))}),Ke=(ne((0,g.AG)((0,g.dt)({blockhash:(0,g.Z_)(),previousBlockhash:(0,g.Z_)(),parentSlot:(0,g.Rx)(),transactions:(0,g.IX)((0,g.dt)({transaction:Ae,meta:(0,g.AG)(ze)})),rewards:(0,g.jt)((0,g.IX)((0,g.dt)({pubkey:(0,g.Z_)(),lamports:(0,g.Rx)(),postBalance:(0,g.AG)((0,g.Rx)()),rewardType:(0,g.AG)((0,g.Z_)())}))),blockTime:(0,g.AG)((0,g.Rx)())}))),ne((0,g.AG)((0,g.dt)({blockhash:(0,g.Z_)(),previousBlockhash:(0,g.Z_)(),parentSlot:(0,g.Rx)(),signatures:(0,g.IX)((0,g.Z_)()),blockTime:(0,g.AG)((0,g.Rx)())}))),ne((0,g.AG)((0,g.dt)({slot:(0,g.Rx)(),meta:ze,blockTime:(0,g.jt)((0,g.AG)((0,g.Rx)())),transaction:Ae}))),ne((0,g.AG)((0,g.dt)({slot:(0,g.Rx)(),transaction:ve,meta:(0,g.AG)(Ee),blockTime:(0,g.jt)((0,g.AG)((0,g.Rx)()))}))),se((0,g.dt)({blockhash:(0,g.Z_)(),feeCalculator:(0,g.dt)({lamportsPerSignature:(0,g.Rx)()})})),(0,g.dt)({slot:(0,g.Rx)(),numTransactions:(0,g.Rx)(),numSlots:(0,g.Rx)(),samplePeriodSecs:(0,g.Rx)()})),Ge=(ne((0,g.IX)(Ke)),se((0,g.AG)((0,g.dt)({feeCalculator:(0,g.dt)({lamportsPerSignature:(0,g.Rx)()})}))),ne((0,g.Z_)()),ne((0,g.Z_)()),(0,g.dt)({err:de,logs:(0,g.IX)((0,g.Z_)()),signature:(0,g.Z_)()}));(0,g.dt)({result:ie(Ge),subscription:(0,g.Rx)()});class Te{constructor(e){(0,n.Z)(this,"_keypair",void 0),this._keypair=e||s.sign.keyPair()}static generate(){return new Te(s.sign.keyPair())}static fromSecretKey(e,t){const r=s.sign.keyPair.fromSecretKey(e);if(!t||!t.skipValidation){const e=(new TextEncoder).encode("@solana/web3.js-validation-v1"),t=s.sign.detached(e,r.secretKey);if(!s.sign.detached.verify(e,t,r.publicKey))throw new Error("provided secretKey is invalid")}return new Te(r)}static fromSeed(e){return new Te(s.sign.keyPair.fromSeed(e))}get publicKey(){return new I(this._keypair.publicKey)}get secretKey(){return this._keypair.secretKey}}const Xe=new I("StakeConfig11111111111111111111111111111111");class je{constructor(e,t,r){(0,n.Z)(this,"unixTimestamp",void 0),(0,n.Z)(this,"epoch",void 0),(0,n.Z)(this,"custodian",void 0),this.unixTimestamp=e,this.epoch=t,this.custodian=r}}(0,n.Z)(je,"default",new je(0,0,I.default));const qe=Object.freeze({Initialize:{index:0,layout:p.struct([p.u32("instruction"),((e="authorized")=>p.struct([B("staker"),B("withdrawer")],e))(),((e="lockup")=>p.struct([p.ns64("unixTimestamp"),p.ns64("epoch"),B("custodian")],e))()])},Authorize:{index:1,layout:p.struct([p.u32("instruction"),B("newAuthorized"),p.u32("stakeAuthorizationType")])},Delegate:{index:2,layout:p.struct([p.u32("instruction")])},Split:{index:3,layout:p.struct([p.u32("instruction"),p.ns64("lamports")])},Withdraw:{index:4,layout:p.struct([p.u32("instruction"),p.ns64("lamports")])},Deactivate:{index:5,layout:p.struct([p.u32("instruction")])},AuthorizeWithSeed:{index:8,layout:p.struct([p.u32("instruction"),B("newAuthorized"),p.u32("stakeAuthorizationType"),_("authoritySeed"),B("authorityOwner")])}});Object.freeze({Staker:{index:0},Withdrawer:{index:1}});class Oe{constructor(){}static initialize(e){const{stakePubkey:t,authorized:r,lockup:n}=e,s=n||je.default,i=N(qe.Initialize,{authorized:{staker:m(r.staker.toBuffer()),withdrawer:m(r.withdrawer.toBuffer())},lockup:{unixTimestamp:s.unixTimestamp,epoch:s.epoch,custodian:m(s.custodian.toBuffer())}}),a={keys:[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:q,isSigner:!1,isWritable:!1}],programId:this.programId,data:i};return new G(a)}static createAccountWithSeed(e){const t=new T;t.add(V.createAccountWithSeed({fromPubkey:e.fromPubkey,newAccountPubkey:e.stakePubkey,basePubkey:e.basePubkey,seed:e.seed,lamports:e.lamports,space:this.space,programId:this.programId}));const{stakePubkey:r,authorized:n,lockup:s}=e;return t.add(this.initialize({stakePubkey:r,authorized:n,lockup:s}))}static createAccount(e){const t=new T;t.add(V.createAccount({fromPubkey:e.fromPubkey,newAccountPubkey:e.stakePubkey,lamports:e.lamports,space:this.space,programId:this.programId}));const{stakePubkey:r,authorized:n,lockup:s}=e;return t.add(this.initialize({stakePubkey:r,authorized:n,lockup:s}))}static delegate(e){const{stakePubkey:t,authorizedPubkey:r,votePubkey:n}=e,s=N(qe.Delegate);return(new T).add({keys:[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:X,isSigner:!1,isWritable:!1},{pubkey:O,isSigner:!1,isWritable:!1},{pubkey:Xe,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!0,isWritable:!1}],programId:this.programId,data:s})}static authorize(e){const{stakePubkey:t,authorizedPubkey:r,newAuthorizedPubkey:n,stakeAuthorizationType:s,custodianPubkey:i}=e,a=N(qe.Authorize,{newAuthorized:m(n.toBuffer()),stakeAuthorizationType:s.index}),o=[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:X,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!0,isWritable:!1}];return i&&o.push({pubkey:i,isSigner:!1,isWritable:!1}),(new T).add({keys:o,programId:this.programId,data:a})}static authorizeWithSeed(e){const{stakePubkey:t,authorityBase:r,authoritySeed:n,authorityOwner:s,newAuthorizedPubkey:i,stakeAuthorizationType:a,custodianPubkey:o}=e,u=N(qe.AuthorizeWithSeed,{newAuthorized:m(i.toBuffer()),stakeAuthorizationType:a.index,authoritySeed:n,authorityOwner:m(s.toBuffer())}),c=[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!0,isWritable:!1},{pubkey:X,isSigner:!1,isWritable:!1}];return o&&c.push({pubkey:o,isSigner:!1,isWritable:!1}),(new T).add({keys:c,programId:this.programId,data:u})}static split(e){const{stakePubkey:t,authorizedPubkey:r,splitStakePubkey:n,lamports:s}=e,i=new T;i.add(V.createAccount({fromPubkey:r,newAccountPubkey:n,lamports:0,space:this.space,programId:this.programId}));const a=N(qe.Split,{lamports:s});return i.add({keys:[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!0,isWritable:!1}],programId:this.programId,data:a})}static withdraw(e){const{stakePubkey:t,authorizedPubkey:r,toPubkey:n,lamports:s,custodianPubkey:i}=e,a=N(qe.Withdraw,{lamports:s}),o=[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!0},{pubkey:X,isSigner:!1,isWritable:!1},{pubkey:O,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!0,isWritable:!1}];return i&&o.push({pubkey:i,isSigner:!1,isWritable:!1}),(new T).add({keys:o,programId:this.programId,data:a})}static deactivate(e){const{stakePubkey:t,authorizedPubkey:r}=e,n=N(qe.Deactivate);return(new T).add({keys:[{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:X,isSigner:!1,isWritable:!1},{pubkey:r,isSigner:!0,isWritable:!1}],programId:this.programId,data:n})}}(0,n.Z)(Oe,"programId",new I("Stake11111111111111111111111111111111111111")),(0,n.Z)(Oe,"space",200);const{publicKeyCreate:Ce,ecdsaSign:Me}=y(),Ne=p.struct([p.u8("numSignatures"),p.u16("signatureOffset"),p.u8("signatureInstructionIndex"),p.u16("ethAddressOffset"),p.u8("ethAddressInstructionIndex"),p.u16("messageDataOffset"),p.u16("messageDataSize"),p.u8("messageInstructionIndex"),p.blob(20,"ethAddress"),p.blob(64,"signature"),p.u8("recoveryId")]);class Ue{constructor(){}static publicKeyToEthAddress(e){z(64===e.length,`Public key must be 64 bytes but received ${e.length} bytes`);try{return a.Buffer.from(b.keccak_256.update(m(e)).digest()).slice(-20)}catch(t){throw new Error(`Error constructing Ethereum address: ${t}`)}}static createInstructionWithPublicKey(e){const{publicKey:t,message:r,signature:n,recoveryId:s}=e;return Ue.createInstructionWithEthAddress({ethAddress:Ue.publicKeyToEthAddress(t),message:r,signature:n,recoveryId:s})}static createInstructionWithEthAddress(e){const{ethAddress:t,message:r,signature:n,recoveryId:s}=e;let i;i="string"===typeof t?t.startsWith("0x")?a.Buffer.from(t.substr(2),"hex"):a.Buffer.from(t,"hex"):t,z(20===i.length,`Address must be 20 bytes but received ${i.length} bytes`);const o=12+i.length,u=o+n.length+1,c=a.Buffer.alloc(Ne.span+r.length);return Ne.encode({numSignatures:1,signatureOffset:o,signatureInstructionIndex:0,ethAddressOffset:12,ethAddressInstructionIndex:0,messageDataOffset:u,messageDataSize:r.length,messageInstructionIndex:0,signature:m(n),ethAddress:m(i),recoveryId:s},c),c.fill(m(r),Ne.span),new G({keys:[],programId:Ue.programId,data:c})}static createInstructionWithPrivateKey(e){const{privateKey:t,message:r}=e;z(32===t.length,`Private key must be 32 bytes but received ${t.length} bytes`);try{const e=m(t),n=Ce(e,!1).slice(1),s=a.Buffer.from(b.keccak_256.update(m(r)).digest()),{signature:i,recid:o}=Me(s,e);return this.createInstructionWithPublicKey({publicKey:n,message:r,signature:i,recoveryId:o})}catch(n){throw new Error(`Error creating instruction; ${n}`)}}}(0,n.Z)(Ue,"programId",new I("KeccakSecp256k11111111111111111111111111111"));new I("Va1idator1nfo111111111111111111111111111111"),(0,g.dt)({name:(0,g.Z_)(),website:(0,g.jt)((0,g.Z_)()),details:(0,g.jt)((0,g.Z_)()),keybaseUsername:(0,g.jt)((0,g.Z_)())});new I("Vote111111111111111111111111111111111111111"),p.struct([B("nodePubkey"),B("authorizedVoterPubkey"),B("authorizedWithdrawerPubkey"),p.u8("commission"),p.nu64(),p.seq(p.struct([p.nu64("slot"),p.u32("confirmationCount")]),p.offset(p.u32(),-8),"votes"),p.u8("rootSlotValid"),p.nu64("rootSlot"),p.nu64("epoch"),p.nu64("credits"),p.nu64("lastEpochCredits"),p.nu64(),p.seq(p.struct([p.nu64("epoch"),p.nu64("credits"),p.nu64("prevCredits")]),p.offset(p.u32(),-8),"epochCredits")]);const $e=1e9}}]);