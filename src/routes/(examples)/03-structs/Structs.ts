import {
  Cell,
  Slice,
  Address,
  Builder,
  beginCell,
  ComputeError,
  TupleItem,
  TupleReader,
  Dictionary,
  contractAddress,
  ContractProvider,
  Sender,
  Contract,
  ContractABI,
  TupleBuilder,
  DictionaryValue,
} from "ton-core";

export type StateInit = {
  $$type: "StateInit";
  code: Cell;
  data: Cell;
};

export function storeStateInit(src: StateInit) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeRef(src.code);
    b_0.storeRef(src.data);
  };
}

export function loadStateInit(slice: Slice) {
  let sc_0 = slice;
  let _code = sc_0.loadRef();
  let _data = sc_0.loadRef();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
  let _code = source.readCell();
  let _data = source.readCell();
  return { $$type: "StateInit" as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
  let builder = new TupleBuilder();
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeStateInit(src)).endCell());
    },
    parse: (src) => {
      return loadStateInit(src.loadRef().beginParse());
    },
  };
}

export type Context = {
  $$type: "Context";
  bounced: boolean;
  sender: Address;
  value: bigint;
  raw: Cell;
};

export function storeContext(src: Context) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounced);
    b_0.storeAddress(src.sender);
    b_0.storeInt(src.value, 257);
    b_0.storeRef(src.raw);
  };
}

export function loadContext(slice: Slice) {
  let sc_0 = slice;
  let _bounced = sc_0.loadBit();
  let _sender = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _raw = sc_0.loadRef();
  return { $$type: "Context" as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
  let _bounced = source.readBoolean();
  let _sender = source.readAddress();
  let _value = source.readBigNumber();
  let _raw = source.readCell();
  return { $$type: "Context" as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounced);
  builder.writeAddress(source.sender);
  builder.writeNumber(source.value);
  builder.writeSlice(source.raw);
  return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeContext(src)).endCell());
    },
    parse: (src) => {
      return loadContext(src.loadRef().beginParse());
    },
  };
}

export type SendParameters = {
  $$type: "SendParameters";
  bounce: boolean;
  to: Address;
  value: bigint;
  mode: bigint;
  body: Cell | null;
  code: Cell | null;
  data: Cell | null;
};

export function storeSendParameters(src: SendParameters) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeBit(src.bounce);
    b_0.storeAddress(src.to);
    b_0.storeInt(src.value, 257);
    b_0.storeInt(src.mode, 257);
    if (src.body !== null && src.body !== undefined) {
      b_0.storeBit(true).storeRef(src.body);
    } else {
      b_0.storeBit(false);
    }
    if (src.code !== null && src.code !== undefined) {
      b_0.storeBit(true).storeRef(src.code);
    } else {
      b_0.storeBit(false);
    }
    if (src.data !== null && src.data !== undefined) {
      b_0.storeBit(true).storeRef(src.data);
    } else {
      b_0.storeBit(false);
    }
  };
}

export function loadSendParameters(slice: Slice) {
  let sc_0 = slice;
  let _bounce = sc_0.loadBit();
  let _to = sc_0.loadAddress();
  let _value = sc_0.loadIntBig(257);
  let _mode = sc_0.loadIntBig(257);
  let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
  let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
  return { $$type: "SendParameters" as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
  let _bounce = source.readBoolean();
  let _to = source.readAddress();
  let _value = source.readBigNumber();
  let _mode = source.readBigNumber();
  let _body = source.readCellOpt();
  let _code = source.readCellOpt();
  let _data = source.readCellOpt();
  return { $$type: "SendParameters" as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
  let builder = new TupleBuilder();
  builder.writeBoolean(source.bounce);
  builder.writeAddress(source.to);
  builder.writeNumber(source.value);
  builder.writeNumber(source.mode);
  builder.writeCell(source.body);
  builder.writeCell(source.code);
  builder.writeCell(source.data);
  return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeSendParameters(src)).endCell());
    },
    parse: (src) => {
      return loadSendParameters(src.loadRef().beginParse());
    },
  };
}

export type Deploy = {
  $$type: "Deploy";
  queryId: bigint;
};

export function storeDeploy(src: Deploy) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2490013878, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeploy(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2490013878) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function loadTupleDeploy(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "Deploy" as const, queryId: _queryId };
}

function storeTupleDeploy(source: Deploy) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeploy(): DictionaryValue<Deploy> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeploy(src)).endCell());
    },
    parse: (src) => {
      return loadDeploy(src.loadRef().beginParse());
    },
  };
}

export type DeployOk = {
  $$type: "DeployOk";
  queryId: bigint;
};

export function storeDeployOk(src: DeployOk) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(2952335191, 32);
    b_0.storeUint(src.queryId, 64);
  };
}

export function loadDeployOk(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 2952335191) {
    throw Error("Invalid prefix");
  }
  let _queryId = sc_0.loadUintBig(64);
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function loadTupleDeployOk(source: TupleReader) {
  let _queryId = source.readBigNumber();
  return { $$type: "DeployOk" as const, queryId: _queryId };
}

function storeTupleDeployOk(source: DeployOk) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.queryId);
  return builder.build();
}

function dictValueParserDeployOk(): DictionaryValue<DeployOk> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeDeployOk(src)).endCell());
    },
    parse: (src) => {
      return loadDeployOk(src.loadRef().beginParse());
    },
  };
}

export type Point = {
  $$type: "Point";
  x: bigint;
  y: bigint;
};

export function storePoint(src: Point) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeInt(src.x, 64);
    b_0.storeInt(src.y, 64);
  };
}

export function loadPoint(slice: Slice) {
  let sc_0 = slice;
  let _x = sc_0.loadIntBig(64);
  let _y = sc_0.loadIntBig(64);
  return { $$type: "Point" as const, x: _x, y: _y };
}

function loadTuplePoint(source: TupleReader) {
  let _x = source.readBigNumber();
  let _y = source.readBigNumber();
  return { $$type: "Point" as const, x: _x, y: _y };
}

function storeTuplePoint(source: Point) {
  let builder = new TupleBuilder();
  builder.writeNumber(source.x);
  builder.writeNumber(source.y);
  return builder.build();
}

function dictValueParserPoint(): DictionaryValue<Point> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storePoint(src)).endCell());
    },
    parse: (src) => {
      return loadPoint(src.loadRef().beginParse());
    },
  };
}

export type Params = {
  $$type: "Params";
  name: string;
  age: bigint | null;
  point: Point;
};

export function storeParams(src: Params) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeStringRefTail(src.name);
    if (src.age !== null && src.age !== undefined) {
      b_0.storeBit(true).storeInt(src.age, 257);
    } else {
      b_0.storeBit(false);
    }
    b_0.store(storePoint(src.point));
  };
}

export function loadParams(slice: Slice) {
  let sc_0 = slice;
  let _name = sc_0.loadStringRefTail();
  let _age = sc_0.loadBit() ? sc_0.loadIntBig(257) : null;
  let _point = loadPoint(sc_0);
  return { $$type: "Params" as const, name: _name, age: _age, point: _point };
}

function loadTupleParams(source: TupleReader) {
  let _name = source.readString();
  let _age = source.readBigNumberOpt();
  const _point = loadTuplePoint(source.readTuple());
  return { $$type: "Params" as const, name: _name, age: _age, point: _point };
}

function storeTupleParams(source: Params) {
  let builder = new TupleBuilder();
  builder.writeString(source.name);
  builder.writeNumber(source.age);
  builder.writeTuple(storeTuplePoint(source.point));
  return builder.build();
}

function dictValueParserParams(): DictionaryValue<Params> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeParams(src)).endCell());
    },
    parse: (src) => {
      return loadParams(src.loadRef().beginParse());
    },
  };
}

export type Add = {
  $$type: "Add";
  point: Point;
};

export function storeAdd(src: Add) {
  return (builder: Builder) => {
    let b_0 = builder;
    b_0.storeUint(4279624855, 32);
    b_0.store(storePoint(src.point));
  };
}

export function loadAdd(slice: Slice) {
  let sc_0 = slice;
  if (sc_0.loadUint(32) !== 4279624855) {
    throw Error("Invalid prefix");
  }
  let _point = loadPoint(sc_0);
  return { $$type: "Add" as const, point: _point };
}

function loadTupleAdd(source: TupleReader) {
  const _point = loadTuplePoint(source.readTuple());
  return { $$type: "Add" as const, point: _point };
}

function storeTupleAdd(source: Add) {
  let builder = new TupleBuilder();
  builder.writeTuple(storeTuplePoint(source.point));
  return builder.build();
}

function dictValueParserAdd(): DictionaryValue<Add> {
  return {
    serialize: (src, buidler) => {
      buidler.storeRef(beginCell().store(storeAdd(src)).endCell());
    },
    parse: (src) => {
      return loadAdd(src.loadRef().beginParse());
    },
  };
}

type Structs_init_args = {
  $$type: "Structs_init_args";
};

function initStructs_init_args(src: Structs_init_args) {
  return (builder: Builder) => {
    let b_0 = builder;
  };
}

async function Structs_init() {
  const __code = Cell.fromBase64(
    "te6ccgECFAEAAygAART/APSkE/S88sgLAQIBYgIDAujQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVFds8MMj4QwHMfwHKAFVQRlQCyj/KP0Q0yFAEzxbJUATMIW6zmX8BygCBAQHPAJRwMsoA4lkCyj/KP8ntVBEEAgFYCAkC9O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghD/FeSXuo4dMdMfAYIQ/xXkl7ry4IHSP9I/WWwSUHegUFagBH/gIYIQlGqYtrqOrjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gAcAABQYByshxAcoBUAcBygBwAcoCUAUg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIzxZQA/oCcAHKaCNus5F/kyRus+KXMzMBcAHKAOMNIW6znH8BygABIG7y0IABzJUxcAHKAOLJAfsABwBsjjD5AYLwrpsV8NUOlRZO9nf+vFel+a43mzrPchtpSkgsd9tlw9W6mTQ0dHVQVH/bMeCRMOJwAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAgEgCgsCAUgNDgIRtG7bZ5tnjYxQEQwAubd6ME4LnYerpZXPY9CdhzrJUKNs0E4TusalpWyPlmRadeW/vixHME4ECrgDcAzscpnLB1XI5LZYcE4DepO98qiy3jjqenvAqzhk0E4TsunLVmnZbmdB0s2yjN0UkAAEU1QCAUgPEAB1sm7jQ1aXBmczovL1FtUFlRRXdtb3NLMmthOTh0aGhnemtxSkttZ2k1S1NnWGZqQnZDclJtWnBkM2+CAAEKq+7UTQ0gABAhSq1ds82zxsZG8CERIBfu1E0NQB+GPSAAGOJNI/0j9ZAtQB0AHSAAGVgQEB1wCSbQHi0j/SP1kQJBAjEEZsFuAw+CjXCwqDCbry4InbPBMACFRzISMAHnJzXIt1NhdG9zaGmAJtAg==",
  );
  const __system = Cell.fromBase64(
    "te6cckECFgEAAzIAAQHAAQEFoTyfAgEU/wD0pBP0vPLICwMCAWIPBAIBWAsFAgFIBwYAdbJu40NWlwZnM6Ly9RbVBZUUV3bW9zSzJrYTk4dGhoZ3prcUpLbWdpNUtTZ1hmakJ2Q3JSbVpwZDNvggAgFICggCFKrV2zzbPGxkbwIUCQAIVHMhIwAQqr7tRNDSAAECASANDAC5t3owTgudh6ullc9j0J2HOslQo2zQThO6xqWlbI+WZFp15b++LEcwTgQKuANwDOxymcsHVcjktlhwTgN6k73yqLLeOOp6e8CrOGTQThOy6ctWadluZ0HSzbKM3RSQAhG0bttnm2eNjFAUDgAEU1QC6NAB0NMDAXGwowH6QAEg10mBAQu68uCIINcLCiCBBP+68tCJgwm68uCIVFBTA28E+GEC+GLbPFUV2zwwyPhDAcx/AcoAVVBGVALKP8o/RDTIUATPFslQBMwhbrOZfwHKAIEBAc8AlHAyygDiWQLKP8o/ye1UFBAC9O2i7ftwIddJwh+VMCDXCx/eApJbf+AhghD/FeSXuo4dMdMfAYIQ/xXkl7ry4IHSP9I/WWwSUHegUFagBH/gIYIQlGqYtrqOrjHTHwGCEJRqmLa68uCB0z8BMcgBghCv+Q9XWMsfyz/Jf/hCcFgDgEIBbW3bPH/gAcAAEhEAbI4w+QGC8K6bFfDVDpUWTvZ3/rxXpfmuN5s6z3IbaUpILHfbZcPVupk0NHR1UFR/2zHgkTDicAHKyHEBygFQBwHKAHABygJQBSDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFlAD+gJwAcpoI26zkX+TJG6z4pczMwFwAcoA4w0hbrOcfwHKAAEgbvLQgAHMlTFwAcoA4skB+wATAJh/AcoAyHABygBwAcoAJG6znX8BygAEIG7y0IBQBMyWNANwAcoA4iRus51/AcoABCBu8tCAUATMljQDcAHKAOJwAcoAAn8BygACyVjMAX7tRNDUAfhj0gABjiTSP9I/WQLUAdAB0gABlYEBAdcAkm0B4tI/0j9ZECQQIxBGbBbgMPgo1wsKgwm68uCJ2zwVAB5yc1yLdTYXRvc2hpgCbQLkYOxW",
  );
  let builder = beginCell();
  builder.storeRef(__system);
  builder.storeUint(0, 1);
  initStructs_init_args({ $$type: "Structs_init_args" })(builder);
  const __data = builder.endCell();
  return { code: __code, data: __data };
}

const Structs_errors: { [key: number]: { message: string } } = {
  2: { message: `Stack undeflow` },
  3: { message: `Stack overflow` },
  4: { message: `Integer overflow` },
  5: { message: `Integer out of expected range` },
  6: { message: `Invalid opcode` },
  7: { message: `Type check error` },
  8: { message: `Cell overflow` },
  9: { message: `Cell underflow` },
  10: { message: `Dictionary error` },
  13: { message: `Out of gas error` },
  32: { message: `Method ID not found` },
  34: { message: `Action is invalid or not supported` },
  37: { message: `Not enough TON` },
  38: { message: `Not enough extra-currencies` },
  128: { message: `Null reference exception` },
  129: { message: `Invalid serialization prefix` },
  130: { message: `Invalid incoming message` },
  131: { message: `Constraints error` },
  132: { message: `Access denied` },
  133: { message: `Contract stopped` },
  134: { message: `Invalid argument` },
  135: { message: `Code of a contract was not found` },
  136: { message: `Invalid address` },
  137: { message: `Masterchain support is not enabled for this contract` },
};

export class Structs implements Contract {
  static async init() {
    return await Structs_init();
  }

  static async fromInit() {
    const init = await Structs_init();
    const address = contractAddress(0, init);
    return new Structs(address, init);
  }

  static fromAddress(address: Address) {
    return new Structs(address);
  }

  readonly address: Address;
  readonly init?: { code: Cell; data: Cell };
  readonly abi: ContractABI = {
    types: [
      { name: "StateInit", header: null, fields: [] },
      { name: "Context", header: null, fields: [] },
      { name: "SendParameters", header: null, fields: [] },
      { name: "Deploy", header: 2490013878, fields: [] },
      { name: "DeployOk", header: 2952335191, fields: [] },
      { name: "Point", header: null, fields: [] },
      { name: "Params", header: null, fields: [] },
      { name: "Add", header: 4279624855, fields: [] },
    ],
    errors: Structs_errors,
  };

  private constructor(address: Address, init?: { code: Cell; data: Cell }) {
    this.address = address;
    this.init = init;
  }

  async send(
    provider: ContractProvider,
    via: Sender,
    args: { value: bigint; bounce?: boolean | null | undefined },
    message: "show ops" | Add | Deploy,
  ) {
    let body: Cell | null = null;
    if (message === "show ops") {
      body = beginCell().storeUint(0, 32).storeStringTail(message).endCell();
    }
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "Add") {
      body = beginCell().store(storeAdd(message)).endCell();
    }
    if (message && typeof message === "object" && !(message instanceof Slice) && message.$$type === "Deploy") {
      body = beginCell().store(storeDeploy(message)).endCell();
    }
    if (body === null) {
      throw new Error("Invalid message type");
    }

    await provider.internal(via, { ...args, body: body });
  }

  async getPoint(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("point", builder.build())).stack;
    const result = loadTuplePoint(source);
    return result;
  }

  async getParams(provider: ContractProvider) {
    let builder = new TupleBuilder();
    let source = (await provider.get("params", builder.build())).stack;
    const result = loadTupleParams(source);
    return result;
  }
}
