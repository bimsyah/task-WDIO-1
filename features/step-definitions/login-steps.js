// const {Given, When, Then} = require('@wdio/cucumber-framework');
import {Given, When, Then} from '@wdio/cucumber-framework'

// const FrontPage = require('../pageobjects/front-page')
// const HomePage = require('../pageobjects/home-page');
import FrontPage from '../pageobjects/front-page.js'
import HomePage from '../pageobjects/home-page.js'
import ProductDetailPage from '../pageobjects/product-detail.js'

Given(/^I am on the front page$/, async() => {
    await FrontPage.open()
})

When(/^I try to login with correct credential$/, async() => {
    await FrontPage.login('bimasyah', 'bimahore');
})

Then (/^I am successfully logged in$/, async() => {
    await HomePage.verifyLoginSuccess('bimasyah')
})

When('I try to login with username {string} and password {string}', async(username, password) => {
    await FrontPage.login(username, password)
})

Then('I am successfully login with username {string}', async(username) => {
  await HomePage.verifyLoginSuccess(username)
})

When('I am click logged out and back to the frontpage', async() => {
    await browser.pause(2000)
    await HomePage.clickBtnLogOut()
    await browser.pause(1000)
})

// Then('I am successfully logged out and go to front page', async() => {
//     await FrontPage()
//     // Write code here that turns the phrase above into concrete actions
//   })

When('I add items to cart:', async(table) => {
    let data = table.hashes()
    for(let i=0; i < data.length; i++){
        await HomePage.clickItemName(data[i].itemName)
        await ProductDetailPage.clickAddToCartBtn()
        await ProductDetailPage.acceptAlert()
        await ProductDetailPage.clickBackToProductList()
    }
})



// When(/^I try to login with username \"(.*)\" and password \"(.*)\"$/, async(username, password) => {
//     await FrontPage.login(username, password)
// })

// Then(/^I am successfully login with username \"(.*)\"$/, async(username) => {
//     await HomePage.verifyLoginSuccess(username)
// })