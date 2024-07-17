import { expect } from '@playwright/test';
import { SwagShoppingCartPage } from  "../models/shopping_cartpage";
import { SwagLoginPage } from "../models/loginpage";
import exp from 'constants';


export class SwagCheckoutPage{
    /**
 * @param {import('@playwright/test').Page} page
 */
    constructor(page) {
        this.page = page;
        this.shopngcart = new SwagShoppingCartPage(page);
        this.lgi = new SwagLoginPage(page);
        this.pagetitle = page.locator('.title');
        this.chekoutform = page.locator('.checkout_info');
        this.formfirstname = page.locator('.checkout_info').locator('.form_input').nth(0);
        this.formlastname = page.locator('.checkout_info').locator('.form_input').nth(1);
        this.formzipcode = page.locator('.checkout_info').locator('.form_input').nth(2);
        this.continuebutton = page.locator('.submit-button');
        this.errormsg = page.locator("h3[data-test='error']");
        this.crosserrormsgbtn = page.locator('.error-button');
        this.cancelbutton = page.locator('#cancel');
        this.overview = page.locator('.header_secondary_container').locator('.title');
        this.checkoutoverview = page.locator('.checkout_summary_container');
        this.checkoutsummaryinfo = page.locator('.summary_info');
        this.payemntinfo = page.locator('.summary_info_label').nth(0);
        this.orderid =page.locator('.summary_value_label').nth(0);
        this.shippinginfo =page.locator('.summary_info_label').nth(1);
        this.shippinginfotext =page.locator('.summary_value_label').nth(1);
        this.pricetotalsection = page.locator('.summary_info_label').nth(2);
        this.itemcost = page.locator('.summary_subtotal_label');
        this.taxcost = page.locator('.summary_tax_label');
        this.totalcost = page.locator('.summary_total_label');
        this.submitbutton = page.locator('.cart_button');
        this.ordercancelbutton = page.locator('.cart_cancel_link');
        this.checkoutcompletetest = page.locator('.header_secondary_container').locator('.title');
        this.ordercompletep = page.locator('#checkout_complete_container');
        this.greentickimg = page.locator('.pony_express');
        this.completemsg = page.locator('.complete-header');
        this.completesubtext = page.locator('.complete-text');
        this.backtohomapge = page.locator('.checkout_complete_container').locator('button');
    }


    async checkoutpage(){
        await expect(this.pagetitle).not.toBeEmpty();
        await expect(this.chekoutform).toBeVisible();
        
    }

    async checkoutform(){
        await expect(this.formfirstname).toBeVisible();
        await expect(this.formfirstname).toBeEmpty();
        await expect(this.formfirstname).toBeEditable();
        await expect(this.formfirstname).toBeEnabled();

        await expect(this.formlastname).toBeVisible();
        await expect(this.formlastname).toBeEmpty();
        await expect(this.formlastname).toBeEditable();
        await expect(this.formlastname).toBeEnabled();

        await expect(this.formzipcode).toBeVisible();
        await expect(this.formzipcode).toBeEmpty();
        await expect(this.formzipcode).toBeEditable();
        await expect(this.formzipcode).toBeEnabled();

    }

    async checkoutinfo(){
        await this.formfirstname.fill('farhana');
        await this.formlastname.fill('rahman');
        await this.formzipcode.fill('1219');
        await this.continuebutton.click();
        await expect(this.overview).not.toBeEmpty();
        await expect(this.overview).toBeVisible();
        await expect(this.checkoutoverview).toBeVisible();
        
    }

    async checkoutcontnuebutton(){
        await this.continuebutton.click();
        
    }


    async checkouterrormessage(){
        await this.continuebutton.click();
        await expect(this.errormsg).toBeVisible();
        await expect(this.errormsg).toContainText('Error: First Name is required');
        
    }

    async checkoutcrosserrormessage(){
        await this.crosserrormsgbtn.click();
        await expect(this.crosserrormsgbtn).toBeHidden();
       
    }

    async checkoutformcanelbutton(){
        await this.cancelbutton.click();
        await expect(this.shopngcart.cartitmlst).toBeVisible();

    }


    async checkoutsummary(){
        await expect(this.shopngcart.cartitmlst).toBeVisible();
        await expect(this.shopngcart.shoppingcartbadge).toBeVisible();
        await expect(this.shopngcart.cartqty).toBeVisible();
        await expect(this.shopngcart.cartdesc).toBeVisible();
        await expect(this.shopngcart.cartitem).toBeVisible();
        await expect(this.shopngcart.cartitemqty).toBeVisible();
        await expect(this.shopngcart.cartitemname).toBeVisible();
        await expect(this.shopngcart.cartitemdesc).toBeVisible();
        await expect(this.shopngcart.cartitemprice).toBeVisible();

        
        await expect(this.checkoutsummaryinfo).toBeVisible();
        await expect(this.payemntinfo).toBeVisible();
        await expect(this.orderid).not.toBeEmpty();

        await expect(this.shippinginfo).toBeVisible();
        await expect(this.shippinginfotext).not.toBeEmpty();

        await expect(this.pricetotalsection).toBeVisible();
        await expect(this.itemcost).not.toBeEmpty();
        await expect(this.taxcost).not.toBeEmpty();
        await expect(this.totalcost).not.toBeEmpty();
        
    }

    async checkoutdonebutton(){
        await this.submitbutton.click();
        await expect(this.ordercompletep).toBeVisible();
    }

    async checkoutcancelbutton(){
        await this.cancelbutton.click();
        await expect(this.lgi.successlogin).toContainText('Swag Labs');
        
    }

    async ordercomplete(){
        await expect(this.checkoutcompletetest).toBeVisible();
        await expect(this.ordercompletep).toBeVisible();

        await expect(this.greentickimg).toBeVisible();
        const imgattribute = await this.greentickimg.getAttribute("src");
        const len = imgattribute.length;
        expect(len).toBeGreaterThan(0);

        await expect(this.completemsg).toBeVisible();
        await expect(this.completesubtext).toBeVisible();

        await this.backtohomapge.click(); 
        await expect(this.lgi.successlogin).toContainText('Swag Labs');
        
    }



}   