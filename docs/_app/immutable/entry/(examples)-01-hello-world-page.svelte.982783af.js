var m=Object.defineProperty;var p=(s,e,t)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var i=(s,e,t)=>(p(s,typeof e!="symbol"?e+"":e,t),t);import{S as w,i as h,s as C,I as f,ac as y}from"../chunks/index.9fe14626.js";import{d as o,g as d,s as g}from"../chunks/store.3c4e3faa.js";import{d as b}from"../chunks/index.47089f7b.js";const I=`# Hello World

This is probably the simplest possible Tact program. It will provide callers with the classic output "hello world".

Tact lets you write smart contracts. This code defines a single contract named \`HelloWorld\`. Smart contracts must be deployed on-chain to be usable, try to deploy this contract by pressing the <span class="mdButton blue">Deploy</span> button.

## A simple interaction

Contracts can have _getters_ like \`greeting()\`. These are special functions that allow users to query information from the contract. Try to call the getter by pressing the <span class="mdButton teal">Get greeting</span> button.
`,B=`contract HelloWorld {

    get fun greeting(): String {
        return "Hello World";
    }

}`;async function u(){const s=o.Cell.fromBase64("te6ccgECCQEAAT8AART/APSkE/S88sgLAQIBYgIDAtjQAdDTAwFxsMABkX+RcOIB+kABINdJgQELuvLgiCDXCwoggwm6IYEE/7qx8uCIgwm68uCJVFBTA28E+GEC+GLtRNDUAfhj0gAwkW2Ojfgo1wsKgwm68uCJ2zziWds8MDDI+EMBzH8BygDJ7VQHBAIBIAUGAD5wIddJwh+VMCDXCx/eApJbf+ABwAAB10nBIbCRf+BwAkG9jVdqJoagD8MekAGEi2x0b8FGuFhUGE3XlwRO2ecW2eQHCAC5vd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkAAJtABwwi7SGVsbG8gV29ybGSA=="),e=o.Cell.fromBase64("te6cckECCwEAAUkAAQHAAQEFoPYVAgEU/wD0pBP0vPLICwMCAWIIBAIBIAYFALm93owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQCQb2NV2omhqAPwx6QAYSLbHRvwUa4WFQYTdeXBE7Z5xbZ5AoHABwwi7SGVsbG8gV29ybGSALY0AHQ0wMBcbDAAZF/kXDiAfpAASDXSYEBC7ry4Igg1wsKIIMJuiGBBP+6sfLgiIMJuvLgiVRQUwNvBPhhAvhi7UTQ1AH4Y9IAMJFtjo34KNcLCoMJuvLgids84lnbPDAwyPhDAcx/AcoAye1UCgkAPnAh10nCH5UwINcLH94Cklt/4AHAAAHXScEhsJF/4HAAAm1XlKj1");let t=o.beginCell();t.storeRef(e),t.storeUint(0,1);const n=t.endCell();return{code:s,data:n}}const v={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"}};class l{constructor(e,t){i(this,"address");i(this,"init");i(this,"abi",{errors:v});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=o.contractAddress(0,e);return new l(t,e)}static fromAddress(e){return new l(e)}async send(e,t,n,r){let a=null;if(r===null&&(a=new o.Cell),a===null)throw new Error("Invalid message type");await e.internal(t,{...n,body:a})}async getGreeting(e){let t=new o.TupleBuilder;return(await e.get("greeting",t.build())).stack.readString()}}function E(s,e,t){let n;f(s,g,a=>t(2,n=a));let r;return y(g,n={markdown:I,tactCode:B,deploy:async()=>{const a=await b.Blockchain.create(),c=await a.treasury("deployer");c.getSender(),r=a.openContract(await l.fromInit());const A={[c.address.toString()]:"deployer",[r.address.toString()]:"contract"};return[r,A,[await r.send(c.getSender(),{value:o.toNano(1)},null)]]},messages:{},getters:{greeting:async()=>await r.getGreeting()},prev:d(import.meta.url).prev,next:d(import.meta.url).next},n),[]}class H extends w{constructor(e){super(),h(this,e,E,null,C,{})}}export{H as default};