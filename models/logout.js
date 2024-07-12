import { expect } from '@playwright/test';
import { SwagMenubar } from '../models/menubar';    


    export class SwagLogoutPage{
        /**
     * @param {import('@playwright/test').Page} page
     */
        constructor(page) {
            this.page = page;
            //this.swagmenubar = new SwagMenubar(page);
            this.logoutbuttontext = page.locator("//a[@id='logout_sidebar_link']");    
            this.successlogout = page.locator("//div[@class='login_logo']");    

        }


        async logoutpage(){
          
            await this.logoutbuttontext.click();
            const sl = await this.successlogout.textContent();
            expect(sl).toContain("Swag Labs");

        }


        

    }