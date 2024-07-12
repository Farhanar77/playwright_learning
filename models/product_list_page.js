import { expect } from '@playwright/test';
import exp from 'constants';

export class SwagProductlistPage{
    /**
 * @param {import('@playwright/test').Page} page
 */
    constructor(page) {
        this.page = page;
        this.productlists = page.locator("//div[@class='inventory_list']");
        this.productitem = page.locator("(//div[@class='inventory_item'])[1]");
        this.productimage = page.locator('.inventory_list').locator('.inventory_item').first().locator('img.inventory_item_img');
        this.productcontainer = page.locator('#inventory_item_container');
        this.productitemname = page.locator('.inventory_list').locator('.inventory_item').first().locator('.inventory_item_description').locator('.inventory_item_label').locator('.inventory_item_name');
        this.productitemdescrp = page.locator('.inventory_list').locator('.inventory_item').first().locator('.inventory_item_description').locator('.inventory_item_label').locator('.inventory_item_desc');
        this.productprice = page.locator('.inventory_list').locator('.inventory_item').first().locator('.inventory_item_description').locator('.pricebar').locator('.inventory_item_price');
        this.addtocartbutton = page.locator('.inventory_list').locator('.inventory_item').first().locator('.inventory_item_description').locator('.pricebar').locator('button');
        this.productfilteroption = page.locator('.product_sort_container');

    }

    async productlist(){
        await expect(this.productlists).toBeVisible();

    }


    async productcontain(){
        await expect(this.productitem).toBeVisible();
        const attribute = await this.productimage.getAttribute("src");
        const len = attribute.length;
        await expect(len).toBeGreaterThan(0);
        const productclick = await this.productimage.click();
        await expect(this.productcontainer).toBeVisible();
        

    }
     
    async productinfo(){
      
        await expect(this.productitemname).not.toBeEmpty();
        await expect(this.productitemdescrp).not.toBeEmpty();
        await expect(this.productprice).not.toBeEmpty();
        await expect(this.productprice).toContainText('$');
        await expect(this.addtocartbutton).toBeVisible();       

    }


    async addtocartclick(){
      
        await this.addtocartbutton.click(); 
        await expect(this.addtocartbutton).toContainText('Remove');

    }

    async removeitem(){
      
        await this.addtocartbutton.click(); 
        await this.addtocartbutton.click(); 
       

    }

    async productfilter(){
      
        await expect(this.productfilteroption).toBeVisible();
        await this.productfilteroption.click();
        await this.productfilteroption.selectOption('za');

    }

  

}



