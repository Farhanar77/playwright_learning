import { expect } from '@playwright/test';


export class SwagSpecificProddetailsPage{
    /**
 * @param {import('@playwright/test').Page} page
 */
    constructor(page) {
        this.page = page;
        this.successlogin = page.locator("//div[@class='app_logo']");
        this.productdetail = page.locator('.inventory_item_container');
        this.productdetailimg = page.locator('.inventory_item_container').locator('.inventory_details').locator('.inventory_details_container').locator('.inventory_details_img_container');
        this.productdetailname = page.locator("//div[@class='inventory_details_name large_size']");
        this.productdetaildescp = page.locator("//div[@class='inventory_details_desc large_size']"); 
        this.productdetailprice = page.locator("//div[@class='inventory_details_price']"); 
        this.productdetailaddbutton = page.locator("//button[@id='add-to-cart']");
        this.productdetaildremovebutton = page.locator("//button[@id='remove']");
        this.producttohomepage = page.locator('.header_secondary_container').locator('.left_component').locator('#back-to-products');
        

    }    


    async specificproductdetails(){
        
        await expect(this.productdetail).toBeVisible();
        // const attriimg = await this.productdetailimg.getAttribute("src");
        // const le = attriimg.length;
        // await expect(le).toBeGreaterThan(0);

        await expect(this.productdetailname).not.toBeEmpty();
        await expect(this.productdetaildescp).not.toBeEmpty();
        await expect(this.productdetailprice).not.toBeEmpty();
        await expect(this.productdetailprice).toContainText('$');
        await expect(this.productdetailaddbutton).toBeVisible(); 
        await this.productdetailaddbutton.click();
        await expect(this.productdetaildremovebutton).toContainText('Remove');

    }


    async backtohomepage(){

        await this.producttohomepage.click();
        const sl = await this.successlogin.textContent();
        expect(sl).toContain("Swag Labs");

    }
    

}    