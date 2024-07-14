import { expect } from '@playwright/test';
import { SwagLoginPage } from '../helpers/precondition';

export class SwagShoppingCartPage{
    /**
 * @param {import('@playwright/test').Page} page
 */
    constructor(page) {
        this.page = page;
        //this.loginpage = new SwagLoginPage(page);
        this.carticon = page.locator("//a[@class='shopping_cart_link']");
        this.yourcartpage = page.locator("//span[@class='title']");
        this.cartitm = page.locator('.cart_item');
        this.
}

    async cart(){
        await this.carticon.click();
        await expect(this.yourcartpage).toBeVisible();
        
    }

    async cartitem(){
        await expect(this.cartitm).not.toBeVisible();
        
    }


    

}