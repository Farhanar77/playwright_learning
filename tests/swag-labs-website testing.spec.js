// @ts-check
const { test, expect } = require('@playwright/test');
const {retry_click} = require('../helpers/util');

//login Feature
test.describe('login feature', () => {
    test.beforeEach('go to website', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/',{waitUntil: "domcontentloaded"});
    });
  
    // click swag labs logo text.
    test('click logo', async ({ page }) => {

        await page.getByText('Swag Labs').click();

    });

    //field verification
    test('login without input value', async ({ page }) => {
     //check visible or not
     await expect(page.locator("//input[@id='user-name']")).toBeVisible();
     await expect(page.locator("//input[@id='password']")).toBeVisible();

     //field empty or not
     await expect(page.locator("//input[@id='user-name']")).toBeEmpty();
     await expect(page.locator("//input[@id='password']")).toBeEmpty();
 
     //field editable or not
     await expect(page.locator("//input[@id='user-name']")).toBeEditable();
     await expect(page.locator("//input[@id='password']")).toBeEditable();
 
     //field enabled or not
     await expect(page.locator("//input[@id='user-name']")).toBeEnabled();
     await expect(page.locator("//input[@id='password']")).toBeEnabled();
    }); 

    //try to login without input value  
    test('withoutinput', async ({ page }) => {
  
    const login_button_locator = '[data-test="login-button"]';
    await retry_click(page,login_button_locator);
  
    //check error message
    const error_message = await page.locator("h3[data-test='error']").textContent();
    await expect(error_message).toContain("Epic sadface: Username is required");
    
    //cross error message
    const cross_button = page.locator("button[class='error-button'] svg path");
    await cross_button.click();
    await expect(cross_button).toBeHidden();

    });

    test('invalid Login', async ({ page }) => {
  
    await page.locator("//input[@id='user-name']").fill("lolo");
    await page.locator("//input[@id='password']").fill("gameover");
    await page.waitForTimeout(6000);
    const login_button_locator = '[data-test="login-button"]';
    await retry_click(page,login_button_locator);
    const error_message = await page.locator("h3[data-test='error']").textContent();
    await expect(error_message).toContain("Epic sadface: Username and password do not match any user in this service");
   
    });

    //valid login
    test('Valid login', async ({ page }) => {
  
      await page.goto('https://www.saucedemo.com/',{waitUntil: "domcontentloaded"});
      
      // type username
      await page.locator("//input[@id='user-name']").fill("standard_user");
  
      // type password
      await page.locator("//input[@id='password']").fill("secret_sauce");
  
  
      //login button
      const login_button_locator = '[data-test="login-button"]';
      await retry_click(page,login_button_locator,1);
  
      //success page
   
      const success_login = await page.locator("//div[@class='app_logo']").textContent();
      await expect(success_login).toContain("Swag Labs"); 
  
  
    });

    
     
  
  
  });
  
  
  
  
  
  