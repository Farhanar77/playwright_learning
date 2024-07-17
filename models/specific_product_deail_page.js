import { expect } from '@playwright/test';
import { SwagMenubar } from  "../models/menubar";
import { SwagLoginPage } from "../models/loginpage";
import { SwagLogoutPage } from "../models/logout";


export class SwagSpecificProddetailsPage{
    /**
 * @param {import('@playwright/test').Page} page
 */
    constructor(page) {
        this.page = page;
        this.specificpagemenubar = new SwagMenubar (page);
        this.lg = new SwagLoginPage (page);
        this.lgout = new SwagLogoutPage (page);
        this.successlogin = page.locator("//div[@class='app_logo']");
        this.productdetail = page.locator('.inventory_item_container');
        this.productdetailitem = page.locator('.inventory_details_container'); 
        this.productdetailimg = page.locator('.inventory_item_container').locator('.inventory_details').locator('.inventory_details_container').locator('.inventory_details_img_container');
        this.productdetailname = page.locator("//div[@class='inventory_details_name large_size']");
        this.productdetaildescp = page.locator("//div[@class='inventory_details_desc large_size']"); 
        this.productdetailprice = page.locator("//div[@class='inventory_details_price']"); 
        this.productdetailaddbutton = page.locator("//button[@id='add-to-cart']");
        this.productdetaildremovebutton = page.locator("//button[@id='remove']");
        this.producttohomepage = page.locator('.header_secondary_container').locator('.left_component').locator('#back-to-products');
        this.productdetailsfooter = page.locator('.footer');
        this.productdetailsfootecpy = page.locator('.footer_copy');
        this.footersociallink = page.locator('.social');
        this.footertwitter = page.locator('.social_twitter');
        this.footerfacebook = page.locator('.social_facebook');
        this.footerlinkedin = page.locator('.social_linkedin');

    }    


    async specificproductdetails(){
        
        await expect(this.productdetailitem).toBeVisible();
        // const attriimg = await this.productdetailimg.getAttribute("src");
        // const le = attriimg.length;
        // //console.log(le);
        // expect(le).toBeGreaterThan(0);


        await expect(this.productdetailname).not.toBeEmpty();
        await expect(this.productdetaildescp).not.toBeEmpty();
        await expect(this.productdetailprice).not.toBeEmpty();
        await expect(this.productdetailprice).toContainText('$');
        await expect(this.productdetailaddbutton).toBeVisible(); 
        await this.productdetailaddbutton.click();
        await expect(this.productdetaildremovebutton).toContainText('Remove');
        

    }

    async specificproductremove(){

        await this.productdetaildremovebutton.click();
        await expect(this.productdetailaddbutton).toContainText('Add to cart');

    }

    async secpfmenubar(){

        await this.specificpagemenubar.menubar();
        await this.specificpagemenubar.menubarclose();

    }

    async secpfmenuallitems(){

        await this.specificpagemenubar.allitems.click();
        await expect(this.lg.successlogin).toContainText('Swag Labs');

    }

    async secpfmenulogout(){

        await this.lgout.logoutpage();
    }



    async backtohomepage(){

        await this.producttohomepage.click();
        const sl = await this.successlogin.textContent();
        expect(sl).toContain("Swag Labs");
  

    }
    async specificproductfooter(){

        await expect(this.productdetailsfooter).toBeVisible();
        await expect(this.productdetailsfootecpy).not.toBeEmpty();
        await expect(this.footersociallink).not.toBeEmpty();

    }
    async footersocialtwitter(){
        await expect(this.footertwitter).toBeVisible();
        await this.footertwitter.click();
        //const tw = await this.  getAttribute("href= https://titter.com/saucelabs");

    }

    async footersocialfacebook(){
        await expect(this.footerfacebook).toBeVisible();
        const fb = await this.footerfacebook.click();
        //await expect(fb).getAttribute(" href = https://www.facebook.com/saucelabs");

    }

    async footersociallinkedin(){
        await expect(this.footerlinkedin).toBeVisible();
        const ld = await this.footerlinkedin.click();
       // await expect(ld).getAttribute("href = https://www.linkedin.com/company/sauce-labs/");

    }
    
    
    

}    