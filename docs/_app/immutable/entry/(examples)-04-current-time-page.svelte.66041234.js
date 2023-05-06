var m=Object.defineProperty;var y=(i,e,t)=>e in i?m(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var A=(i,e,t)=>(y(i,typeof e!="symbol"?e+"":e,t),t);import{S as I,i as C,s as B,I as h,ac as b}from"../chunks/index.9fe14626.js";import{d as r,g,s as d}from"../chunks/store.d3ab02ad.js";import{d as p}from"../chunks/index.78404594.js";const f=`# Current Time

Many blockchains rely on the current *block number* to give a sense of progress to contracts. This approach isn't well suited for TON because contracts on TON can run on multiple workchains and those may have different block seqnos. 

In TON, the best practice is to rely on the current time instead, which is available by calling \`now()\`. Standard [unix time](https://en.wikipedia.org/wiki/Unix_time) is returned, meaning the number of seconds since 1 January 1970. 

Transactions are not executed until validators add them to a new block. The current time will therefore be the timestamp of the new block when called in the context of a *receiver*.

If you need to store the time in state or encode it in a message, use \`Int as uint32\`.

If you need to compare two points in time simply subtract the earlier from the later. This will give you the number of seconds between the two. Divide by 60 to get the difference in minutes, by 60 * 60 to get the difference in hours and by 24 * 60 * 60 to get the difference in days.`,D=`import "@stdlib/deploy";

contract CurrentTime with Deployable {

    deployTime: Int as uint32;

    init() {
        self.deployTime = now(); // returns unix time, the number of seconds since the epoch
    }

    receive("wait 10s") {
        require(now() - self.deployTime > 10, "Did not wait long enough");
        dump("thanks for waiting 10 seconds");
    }

    receive("wait 10d") {
        require(now() - self.deployTime > 10*24*60*60, "Did not wait long enough");
        dump("thanks for waiting 10 days");
    }

    get fun unixTime(): Int {
        return now();
    }

    get fun stringTime(): String {
        let sb: StringBuilder = beginString();
        sb.append(now().toString());
        sb.append(" seconds elapsed since 1 January 1970");
        return sb.toString();
    }
}`;function M(i){return e=>{let t=e;t.storeUint(2490013878,32),t.storeUint(i.queryId,64)}}async function u(){const i=r.Cell.fromBase64("te6ccgECFgEABEMAART/APSkE/S88sgLAQIBYgIDApTQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxZ2zwwyPhDAcx/AcoAAQHLH8ntVA8EAgFYCQoCru2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+ABwACRMOMNcAUGAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7AAcB/vkBIILwocdfzR1fLZfM2AIu6FrXesV1RGEgDHXcbk2VSprGGvW6jjMwggDlpvgjIqHCCvL0jQddGhhbmtzIGZvciB3YWl0aW5nIDEwIHNlY29uZHOD+FDB/2zHggvBcbm1vWtvV7jRLUnrsq++8EziQnBDfSw8HNngGvJlPoLoIAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAGyOM4IA5ab4IyKhgggNLwC88vSNBp0aGFua3MgZm9yIHdhaXRpbmcgMTAgZGF5c4P4UMH/bMeACASALDAIBSBQVAg+1Rptnm2eGMA8RAgEgDQ4CD7E8Ns82zwxgDxAAubL0YJwXOw9XSyuex6E7DnWSoUbZoJwndY1LStkfLMi068t/fFiOYJwIFXAG4BnY5TOWDquRyWyw4JwG9Sd75VFlvHHU9PeBVnDJoJwnZdOWrNOy3M6DpZtlGbopIAE87UTQ1AH4Y9IAAZTTHwEx4DD4KNcLCoMJuvLgids8EQOWyG8AAW+MbW+M+CPbPNs8jQlIHNlY29uZHMgZWxhcHNlZCBzaW5jZSAxIEphbnVhcnkgMTk3MINs8byIByZMhbrOWAW8iWczJ6DHQEhMTAAT4IwDeyCHBAJiALQHLBwGjAd4hgjgyfLJzQRnTt6mqHbmOIHAgcY4UBHqpDKYwJagSoASqBwKkIcAARTDmMDOqAs8BjitvAHCOESN6qQgSb4wBpAN6qQQgwAAU5jMipQOcUwJvgaYwWMsHAqVZ5DAx4snQALog10oh10mXIMIAIsIAsY5KA28igH8izzGrAqEFqwJRVbYIIMIAnCCqAhXXGFAzzxZAFN5ZbwJTQaHCAJnIAW8CUEShqgKOEjEzwgCZ1DDQINdKIddJknAg4uLoXwMAEbCvu1E0NIAAYAB1sm7jQ1aXBmczovL1FtZlZYVnk5NWpUU3h6Nms4bjZuTFh2NkIyb0M0RWNhd3dvcUhYUnZoRW4yZEeCA="),e=r.Cell.fromBase64("te6cckECGAEABE0AAQHAAQEFoBIXAgEU/wD0pBP0vPLICwMCAWIQBAIBWAgFAgFIBwYAdbJu40NWlwZnM6Ly9RbWZWWFZ5OTVqVFN4ejZrOG42bkxYdjZCMm9DNEVjYXd3b3FIWFJ2aEVuMmRHggABGwr7tRNDSAAGACASAPCQIBIAsKALmy9GCcFzsPV0srnsehOw51kqFG2aCcJ3WNS0rZHyzItOvLf3xYjmCcCBVwBuAZ2OUzlg6rkclssOCcBvUne+VRZbxx1PT3gVZwyaCcJ2XTlqzTstzOg6WbZRm6KSACD7E8Ns82zwxgFgwDlshvAAFvjG1vjPgj2zzbPI0JSBzZWNvbmRzIGVsYXBzZWQgc2luY2UgMSBKYW51YXJ5IDE5NzCDbPG8iAcmTIW6zlgFvIlnMyegx0A4NDQC6INdKIddJlyDCACLCALGOSgNvIoB/Is8xqwKhBasCUVW2CCDCAJwgqgIV1xhQM88WQBTeWW8CU0GhwgCZyAFvAlBEoaoCjhIxM8IAmdQw0CDXSiHXSZJwIOLi6F8DAN7IIcEAmIAtAcsHAaMB3iGCODJ8snNBGdO3qaoduY4gcCBxjhQEeqkMpjAlqBKgBKoHAqQhwABFMOYwM6oCzwGOK28AcI4RI3qpCBJvjAGkA3qpBCDAABTmMyKlA5xTAm+BpjBYywcCpVnkMDHiydACD7VGm2ebZ4YwFhcClNAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFnbPDDI+EMBzH8BygABAcsfye1UFhECru2i7ftwIddJwh+VMCDXCx/eApJbf+AhghCUapi2uo6uMdMfAYIQlGqYtrry4IHTPwExyAGCEK/5D1dYyx/LP8l/+EJwWAOAQgFtbds8f+ABwACRMOMNcBQSAf75ASCC8KHHX80dXy2XzNgCLuha13rFdURhIAx13G5NlUqaxhr1uo4zMIIA5ab4IyKhwgry9I0HXRoYW5rcyBmb3Igd2FpdGluZyAxMCBzZWNvbmRzg/hQwf9sx4ILwXG5tb1rb1e40S1J67KvvvBM4kJwQ30sPBzZ4BryZT6C6EwBsjjOCAOWm+CMioYIIDS8AvPL0jQadGhhbmtzIGZvciB3YWl0aW5nIDEwIGRheXOD+FDB/2zHgAcrIcQHKAVAHAcoAcAHKAlAFINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiM8WUAP6AnABymgjbrORf5MkbrPilzMzAXABygDjDSFus5x/AcoAASBu8tCAAcyVMXABygDiyQH7ABUAmH8BygDIcAHKAHABygAkbrOdfwHKAAQgbvLQgFAEzJY0A3ABygDiJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4nABygACfwHKAALJWMwBPO1E0NQB+GPSAAGU0x8BMeAw+CjXCwqDCbry4InbPBcABPgjrgbHXQ==");let t=r.beginCell();t.storeRef(e),t.storeUint(0,1);const o=t.endCell();return{code:i,data:o}}const v={2:{message:"Stack undeflow"},3:{message:"Stack overflow"},4:{message:"Integer overflow"},5:{message:"Integer out of expected range"},6:{message:"Invalid opcode"},7:{message:"Type check error"},8:{message:"Cell overflow"},9:{message:"Cell underflow"},10:{message:"Dictionary error"},13:{message:"Out of gas error"},32:{message:"Method ID not found"},34:{message:"Action is invalid or not supported"},37:{message:"Not enough TON"},38:{message:"Not enough extra-currencies"},128:{message:"Null reference exception"},129:{message:"Invalid serialization prefix"},130:{message:"Invalid incoming message"},131:{message:"Constraints error"},132:{message:"Access denied"},133:{message:"Contract stopped"},134:{message:"Invalid argument"},135:{message:"Code of a contract was not found"},136:{message:"Invalid address"},137:{message:"Masterchain support is not enabled for this contract"},58790:{message:"Did not wait long enough"}};class c{constructor(e,t){A(this,"address");A(this,"init");A(this,"abi",{types:[{name:"StateInit",header:null,fields:[]},{name:"Context",header:null,fields:[]},{name:"SendParameters",header:null,fields:[]},{name:"Deploy",header:2490013878,fields:[]},{name:"DeployOk",header:2952335191,fields:[]}],errors:v});this.address=e,this.init=t}static async init(){return await u()}static async fromInit(){const e=await u(),t=r.contractAddress(0,e);return new c(t,e)}static fromAddress(e){return new c(e)}async send(e,t,o,n){let s=null;if(n==="wait 10s"&&(s=r.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n==="wait 10d"&&(s=r.beginCell().storeUint(0,32).storeStringTail(n).endCell()),n&&typeof n=="object"&&!(n instanceof r.Slice)&&n.$$type==="Deploy"&&(s=r.beginCell().store(M(n)).endCell()),s===null)throw new Error("Invalid message type");await e.internal(t,{...o,body:s})}async getUnixTime(e){let t=new r.TupleBuilder;return(await e.get("unixTime",t.build())).stack.readBigNumber()}async getStringTime(e){let t=new r.TupleBuilder;return(await e.get("stringTime",t.build())).stack.readString()}}function Q(i,e,t){let o;h(i,d,a=>t(2,o=a));let n,s;return b(d,o={markdown:f,tactCode:D,deploy:async()=>{const a=await p.Blockchain.create(),l=await a.treasury("deployer");n=l.getSender(),s=a.openContract(await c.fromInit());const w={[l.address.toString()]:"deployer",[s.address.toString()]:"contract"};return[[s],w,[await s.send(l.getSender(),{value:r.toNano(1)},{$$type:"Deploy",queryId:0n})]]},messages:{"wait 10s":async()=>[await s.send(n,{value:r.toNano(1)},"wait 10s")],"wait 10d":async()=>[await s.send(n,{value:r.toNano(1)},"wait 10d")]},getters:{unixTime:async()=>await s.getUnixTime(),stringTime:async()=>await s.getStringTime()},prev:g(import.meta.url).prev,next:g(import.meta.url).next},o),[]}class S extends I{constructor(e){super(),C(this,e,Q,null,B,{})}}export{S as default};