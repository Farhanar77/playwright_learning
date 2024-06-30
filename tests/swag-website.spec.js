import { test, expect } from "@playwright/test";
import { SwagLoginPage } from "../models/loginpage";

test.describe("Swag Website", () => {
    let login;
    test.beforeEach(async ({ page }) => {
        login = new SwagLoginPage(page);
    });
    
    test("check input fields and login button", async ({ page }) => {
      await login.goto();
      await login.checkinputfield();
      await login.checkloginbutton();

    }); 


    test("login without input values", async ({ page }) => {
      await login.goto();
      await login.checkerrormessgae();

      //cross error message
      await login.crosserrormessgae();

    }); 


    //login with values
    test("login", async ({ page }) => {
      await login.goto();
      await login.authentication();

    });    

    //menubar
  test("Menu bar", async ({ page }) => {

    await login.goto();
    await login.authentication();
    await page.locator("//button[@id='react-burger-menu-btn']").click();
    await page.waitForTimeout(6000);


  });


});
