jest.setMock('selenium-webdriver', webdriver);
// This file was generated using Selenium IDE
const tests = require("./commons.js");
global.Key = require('selenium-webdriver').Key;
global.URL = require('url').URL;
global.BASE_URL = configuration.baseUrl || 'http://dev-kedb-d7.pantheonsite.io';
let vars = {};
jest.setTimeout(300000);
describe("Default Suite", () => {
  it("kedb-login-search", async () => {
    await tests["kedb-login-search"](driver, vars);
    expect(true).toBeTruthy();
  });
});
beforeEach(() => {
  vars = {};
});
afterEach(async () => (cleanup()));