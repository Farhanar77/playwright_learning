import { expect } from '@playwright/test';
import { SwagProductlistPage } from "../models/product_list_page";
import { SwagLoginPage } from "../models/loginpage";
import { SwagSpecificProddetailsPage } from "../models/specific_product_deail_page"

export class SwagShoppingCartPage{
    /**
 * @param {import('@playwright/test').Page} page
 */
    constructor(page) {
        this.page = page;
        this.productp = new SwagProductlistPage (page);
        this.lgn = new SwagLoginPage (page);
        this.spfcfooter = new SwagSpecificProddetailsPage (page);
        this.carticon = page.locator("//a[@class='shopping_cart_link']");
        this.yourcartpage = page.locator("//span[@class='title']");
        this.cartitmlst = page.locator('.cart_item');
        this.shoppingcartbadge = page.locator('.shopping_cart_badge');
        this.cartqty = page.locator('.cart_quantity_label');
        this.cartdesc  = page.locator('.cart_desc_label');
        this.cartitem = page.locator('.cart_item').first();
        this.cartitemqty = page.locator('.cart_quantity');
        this.cartitemname = page.locator('.inventory_item_name').first();
        this.cartitemdesc = page.locator('.inventory_item_desc').first();
        this.cartitemprice = page.locator('.inventory_item_price').first();
        this.cartitembutton = page.locator('.cart_button').first();
        this.contnueshopngbtn = page.locator('#continue-shopping');
        this.checkoutbtn = page.locator('.checkout_button');
        this.checkoutpage = page.locator('.checkout_info_container');



    }
    
    async cart(){
        await this.carticon.click();
        await expect(this.yourcartpage).toBeVisible();
        
    }

    async cartbadge(n){
        await expect(this.shoppingcartbadge).toBeVisible();
        await expect(this.shoppingcartbadge).toContainText(n);
        
    }


    async cartitemlist(){
        await expect(this.cartqty).toBeVisible();
        await expect(this.cartdesc).toBeVisible();
        await expect(this.cartitmlst).not.toBeVisible();
        
    }

    async cartitems(){
        await expect(this.cartqty).toBeVisible();
        await expect(this.cartdesc).toBeVisible();
        await expect(this.cartitem).toBeVisible();
        await expect(this.cartitemqty).toBeVisible();
        await expect(this.cartitemqty).toContainText('1');

        await expect(this.cartitemname).not.toBeEmpty();

        await expect(this.cartitemdesc).not.toBeEmpty();
        await expect(this.cartitemprice).not.toBeEmpty();

        await expect(this.cartitemprice).toBeVisible();
        await expect(this.cartitembutton).toHaveText('Remove');

        await this.cartitemname.click();
        await expect(this.productp.productcontainer).toBeVisible();
        
    }


    async shoppingcontinuebutton(){
        await expect(this.contnueshopngbtn).toBeVisible();
        await this.contnueshopngbtn.click();
        await expect(this.lgn.successlogin).toContainText('Swag Labs');
        
    }


    async checkoutbutton(){
        await expect(this.checkoutbtn).toBeVisible();
        await this.checkoutbtn.click();
        await expect(this.checkoutpage).toBeVisible();
        
    }

    

}