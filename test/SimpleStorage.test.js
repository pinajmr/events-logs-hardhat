const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", async () => {
  let simpleStorage
  beforeEach(async () => {
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorage.deploy()
    await simpleStorage.deployed()
  })
  it("Should emit stored Number event", async () => {
    const newFavoriteNumber = 1
    const transactionResponse = await simpleStorage.store(newFavoriteNumber)
    expect(transactionResponse).to.emit(simpleStorage, 'storedNumber')
  })

});
