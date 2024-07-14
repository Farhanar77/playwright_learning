  import { test, expect } from "@playwright/test";
  import { SwagLoginPage } from "../models/loginpage";
  import { SwagLogoutPage } from "../models/logout";
  import { SwagMenubar } from "../models/menubar";
  import { SwagShoppingCartPage } from "../models/shopping_cartpage";
  import { SwagProductlistPage } from "../models/product_list_page";
  import { SwagSpecificProddetailsPage } from "../models/specific_product_deail_page.js";

  test.describe("Swag Website", () => {
      let login , menubarp, logout, shopping_cart, product_listes,speciprodct;
      test.beforeEach(async ({ page }) => {
          login = new SwagLoginPage(page);
          logout = new SwagLogoutPage(page);
          menubarp = new SwagMenubar(page);
          shopping_cart = new SwagShoppingCartPage(page); 
          product_listes = new SwagProductlistPage(page);
          speciprodct = new SwagSpecificProddetailsPage(page);

      });
      
      test("check input fields and login button", async ({ page }) => {
        await login.goto();
        await login.checkinputfield();
        await login.checkloginbutton();

      }); 


      test("login without input values", async ({ page }) => {
        await login.goto();
        await login.checkerrormessgae();

        //cross error message
        await login.crosserrormessgae();

      }); 


      //login with values
      test("login", async ({ page }) => {
        await login.goto();
        await login.authentication();

      });    

      //menubar click
    test("Menu bar click", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await menubarp.menubar();

    });


    //menubar clsoe

    test("Menu bar Close", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await menubarp.menubar();
      await menubarp.menubarclose();

    });   

 
    //menubar about click

    test("Menu bar about click", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await menubarp.menubar();
      await menubarp.about();

    }); 
    

    //Logout
    test("Logout", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await menubarp.menubar();
      await logout.logoutpage();

    });


    //Product List
    test("Product list", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.productlist(); 

    });

    //Product name and description
    test("Product Info", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.productinfo(); 

    });


    //CLick add to cart
    test("Add to cart", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.addtocartclick(); 

    });

    //Remove to cart
    test("Remove to cart", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.removeitem(); 

    });


    //Product filter
    test("Product filter", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.productfilter(); 

    });

     //Product Item Click
     test("Product Item Click", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.productcontain(); 

    });

    //Specific Product Details
    test("Specific product details", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.productcontain(); 
      await speciprodct.specificproductdetails();

    });



    //Redirect to hoempage
    test("From product to redirect to homepgae", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.productcontain(); 
      await speciprodct.backtohomepage();

    });



    //Shopping cart icon click
    test("Shopping cart icon click", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await shopping_cart.cart();
      await shopping_cart.cartitem();

    });
  


  });
