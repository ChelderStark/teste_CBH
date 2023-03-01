const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

const key1 = '330722b02a48e56af4c3008f21ec43362c1d4fab069a105b6639bf81046feb2b6a856591f8d4759dcf2b80d13be20674985e4dab2761bb4f4a20e3c071e9ab47'
const key2 = '330722b02a48e56af4c3008f21ec43362c1d4fab069a105b6639bf81046feb2b6a856591f8d4759dcf2b80d13be20674985e4dab2761bb4f4a20e3c071e9ab47330722b02a48e56af4c3008f21ec43362c1d4fab069a105b6639bf81046feb2b6a856591f8d4759dcf2b80d13be20674985e4dab2761bb4f4a20e3c071e9ab47330722b02a48e56af4c3008f21ec43362c1d4fab069a105b6639bf81046feb2b6a856591f8d4759dcf2b80d13be20674985e4dab2761bb4f4a20e3c071e9ab47330722b02a48e56af4c3008f21ec43362c1d4fab069a105b6639bf81046feb2b6a856591f8d4759dcf2b80d13be20674985e4dab2761bb4f4a20e3c071e9ab47'

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
    expect(trivialKey).toBeDefined();
    expect(trivialKey).toBeTruthy();
  });

  it("returns a string hash when passed just the 'event'.", () => {
    const event = "code test"
    const trivialKey = deterministicPartitionKey(event);
    expect(typeof trivialKey).toBe("string");
    expect(trivialKey).toBeTruthy();
    expect(trivialKey).not.toBeNull()
    expect(trivialKey.length).toBeLessThan(256)
  });

  it("should return a valid hash from 'event.partitionKey'", () => {
    const event = {partitionKey: key1}
    const trivialKey = deterministicPartitionKey(event);
    expect(typeof trivialKey).toBe("string");
    expect(trivialKey).toEqual(event.partitionKey)
    expect(trivialKey).toBeTruthy();
    expect(trivialKey).not.toBeNull()
    expect(trivialKey.length).toBeLessThan(256)
  });

  it("should return a hash of adjusted length when 'event.partitionKey' is greater than 256.", () => {
    const event = {partitionKey: key2}
    const trivialKey = deterministicPartitionKey(event);
    expect(typeof trivialKey).toBe("string");
    expect(trivialKey.length).toBeLessThan(event.partitionKey.length)
    expect(trivialKey).toBeTruthy();
    expect(trivialKey).not.toBeNull()
    expect(trivialKey.length).toBeLessThan(256)
  });
});
