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
        this.cartlst = page.locator('#root').locator('.page_wrapper').locator('#contents_wrapper').locator('#cart_contents_container').locator('div.cart_list').locator('.cart_item');
    }

    async cart(){
        await this.carticon.click();
        await expect(this.yourcartpage).toBeVisible();
        
    }

    async cartlist(){
        await expect(this.cartlst).toBeEmpty();
        
    }


    

}