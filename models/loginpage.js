    import { expect } from '@playwright/test';
    import { SwagHelper } from '../helpers/precondition';

    export class SwagLoginPage{
        /**
     * @param {import('@playwright/test').Page} page
     */
        constructor(page) {
            this.page = page;
            this.swaglogo = page.getByText("Swag Labs");
            this.username = page.locator("//input[@id='user-name']");
            this.password = page.locator("//input[@id='password']");
            this.loginbutton = page.locator('[data-test="login-button"]'); 
            this.swagHelper = new SwagHelper(page);
            this.successlogin = page.locator("//div[@class='app_logo']");
            this.ussernamefield = page.locator("//input[@id='user-name']");
            this.passwordfield = page.locator("//input[@id='password']");
            this.errormessage = page.locator("h3[data-test='error']");
            this.crosserrormessagebutton = page.locator("button[class='error-button'] svg path");

        }

        async goto() {
            await this.swagHelper.goto();
        }

        async clicklogo(){
            await this.swaglogo.click();

        } 
        
        async checkinputfield(){
            await expect(this.ussernamefield).toBeVisible();
            await expect(this.ussernamefield).toBeEmpty();
            await expect(this.ussernamefield).toBeEditable();
            await expect(this.ussernamefield).toBeEnabled();


            await expect(this.passwordfield).toBeVisible();
            await expect(this.passwordfield).toBeEmpty();
            await expect(this.passwordfield).toBeEditable();
            await expect(this.passwordfield).toBeEnabled();
        }
        
        async checkloginbutton(){
            await expect(this.loginbutton).toBeVisible();

        }    

        async checkerrormessgae(){
            await this.loginbutton.click();
            const errmsg = await this.errormessage.textContent();
            expect(errmsg).toContain("Epic sadface: Username is required");
        }

        async crosserrormessgae(){
            await this.loginbutton.click();
            await this.crosserrormessagebutton.click();
            await expect(this.crosserrormessagebutton).toBeHidden();
        }




        async authentication(){
            await this.username.fill("standard_user");
            await this.password.fill("secret_sauce");
            await this.loginbutton.click();
            const sl = await this.successlogin.textContent();
            expect(sl).toContain("Swag Labs");

        }

    
        

    }