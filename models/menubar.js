    import { expect } from '@playwright/test';


    export class SwagMenubar{
        /**
     * @param {import('@playwright/test').Page} page
     */
        constructor(page) {
            this.page = page;
            this.mebubarclick = page.locator('#react-burger-menu-btn');
            this.menubarclosebutton = page.locator("//button[@id='react-burger-cross-btn']");
            this.allitems = page.locator('#inventory_sidebar_link');
            this.aboutclick = page.locator("//a[@id='about_sidebar_link']");
            this.logoutbuttontext = page.locator("//a[@id='logout_sidebar_link']");   
            this.reset = page.locator("//a[@id='reset_sidebar_link']");

        }

        async menubar(){
            await this.mebubarclick.click();
            await expect(this.allitems).toBeVisible();
            await expect(this.aboutclick).toBeVisible();
            await expect(this.logoutbuttontext).toBeVisible();
            await expect(this.reset).toBeVisible();   

        }
        
        async menubarclose(){
            await this.menubarclosebutton.click();

        }

        async about(){
            await this.aboutclick.click();   

        }


    }