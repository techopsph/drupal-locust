const utils = require("./utils.js");
const tests = {};
tests["kedb-login-search"] = async (driver, vars, opts = {}) => {
  await driver.get((new URL(`/`, BASE_URL)).href);
  await driver.wait(until.elementLocated(By.id(`edit-name`)), configuration.timeout);
  await driver.findElement(By.id(`edit-name`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`edit-name`)), configuration.timeout);
  await driver.findElement(By.id(`edit-name`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`eladio@getpantheon.com`);
    });
  });
  await driver.wait(until.elementLocated(By.id(`edit-pass`)), configuration.timeout);
  await driver.findElement(By.id(`edit-pass`)).then(element => {
    return element.clear().then(() => {
      return element.sendKeys(`[Pantheon]1234`);
    });
  });
  await driver.wait(until.elementLocated(By.id(`edit-submit`)), configuration.timeout);
  await driver.findElement(By.id(`edit-submit`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.id(`facetapi-link--556`)), configuration.timeout);
  await driver.findElement(By.id(`facetapi-link--556`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`#block-facetapi-qjejqftyhn5j90hmbhoy3t0dllnssrjt > .block-title`)), configuration.timeout);
  await driver.findElement(By.css(`#block-facetapi-qjejqftyhn5j90hmbhoy3t0dllnssrjt > .block-title`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.linkText(`Log out`)), configuration.timeout);
  await driver.findElement(By.linkText(`Log out`)).then(element => {
    return element.click();
  });
  try {
    await driver.manage().window().setRect({
      width: 960,
      height: 1008
    });
  } catch (error) {
    console.log('Unable to resize window. Skipping.');
  };
}
module.exports = tests;