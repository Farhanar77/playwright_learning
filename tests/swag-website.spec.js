  import { test, expect } from "@playwright/test";
  import { SwagLoginPage } from "../models/loginpage";
  import { SwagLogoutPage } from "../models/logout";
  import { SwagMenubar } from "../models/menubar";
  import { SwagShoppingCartPage } from "../models/shopping_cartpage";
  import { SwagProductlistPage } from "../models/product_list_page";
  import { SwagSpecificProddetailsPage } from "../models/specific_product_deail_page.js";
  import { SwagCheckoutPage } from "../models/checkoutpage.js";

  test.describe("Swag Website", () => {
      let login , menubarp, logout, shopping_cart, product_listes, speciprodct, checkoutp;
      test.beforeEach(async ({ page }) => {
          login = new SwagLoginPage(page);
          logout = new SwagLogoutPage(page);
          menubarp = new SwagMenubar(page);
          shopping_cart = new SwagShoppingCartPage(page); 
          product_listes = new SwagProductlistPage(page);
          speciprodct = new SwagSpecificProddetailsPage(page);
          checkoutp = new SwagCheckoutPage(page);

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
      await speciprodct.specificproductremove();

    });



    //speficic page Redirect to homwpage
    test("From product to redirect to homepgae", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.productcontain(); 
      await speciprodct.backtohomepage();

    });

    //Specific Product menubar
    test("Specific product menubar", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.productcontain(); 
      await speciprodct.secpfmenubar();

    });

    //Specific Product menubar all items click
    test("Specific product menubar all items option", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.productcontain(); 
      await menubarp.menubar();
      await speciprodct.secpfmenuallitems();

    });

    //Specific Product menubar logout click
    test("Specific product menubar logout option", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.productcontain(); 
      await menubarp.menubar();
      await speciprodct.secpfmenulogout();
      specificproductfooter

    });

    //Specific Product footer
    test("Specific product footer", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.productcontain(); 
      await speciprodct.specificproductfooter();

    });

    //Specific Product footer twitter
    test("Specific product footer twitter", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.productcontain(); 
      await speciprodct.footersocialtwitter();

    });

    //Specific Product footer facebook
    test("Specific product footer facebook", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.productcontain(); 
      await speciprodct.footersocialfacebook();
      

    });

    //Specific Product footer linkedin
    test("Specific product footer linkedin", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.productcontain(); 
      await speciprodct.footersociallinkedin();

    });



    //Shopping cart icon click
    test("Shopping cart icon click", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await shopping_cart.cart();
      await shopping_cart.cartitemlist();

    });


    //Shopping cart badge
    test("Shopping cart badge", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.addtocartclick();
      await product_listes.addtocartclick2()
      await shopping_cart.cartbadge('2');

    });

    //Shopping cart Item
    test("Shopping cart item", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.addtocartclick();
      await shopping_cart.cart();
      await shopping_cart.cartitems();
      shoppingcontinuebutton

    });

    //back from Shopping cart
    test("Continue shopping button", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.addtocartclick();
      await shopping_cart.cart();
      await shopping_cart.shoppingcontinuebutton();

    });

    //checkoutbutton
    test("Checkout Button", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.addtocartclick();
      await shopping_cart.cart();
      await shopping_cart.checkoutbutton();

    });

    //checkout page
    test("Checkout page", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.addtocartclick();
      await shopping_cart.cart();
      await shopping_cart.checkoutbutton();
      await checkoutp.checkoutpage();

    });

    //checkout form
    test("Checkout form", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.addtocartclick();
      await shopping_cart.cart();
      await shopping_cart.checkoutbutton();
      await checkoutp.checkoutform();

    });

    //checkout with info 
    test("Checkout with info", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.addtocartclick();
      await shopping_cart.cart();
      await shopping_cart.checkoutbutton();
      await checkoutp.checkoutform();
      await checkoutp.checkoutinfo();
    });


    //checkout without info
    test("Checkout without info", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.addtocartclick();
      await shopping_cart.cart();
      await shopping_cart.checkoutbutton();
      await checkoutp.checkoutform();
      await checkoutp.checkoutcontnuebutton();
      await checkoutp.checkouterrormessage();
      await checkoutp.checkoutcrosserrormessage();
      await checkoutp.checkoutformcanelbutton();
      
    });


    //checkout summary
    test("Checkout summary", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.addtocartclick();
      await shopping_cart.cart();
      await shopping_cart.checkoutbutton();
      await checkoutp.checkoutinfo();
      await checkoutp.checkoutsummary();
      
    });

    //checkout cancel
    test("Checkout cancel", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.addtocartclick();
      await shopping_cart.cart();
      await shopping_cart.checkoutbutton();
      await checkoutp.checkoutinfo();
      await checkoutp.checkoutcancelbutton();
      
    });

    //checkout done
    test("Checkout done", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.addtocartclick();
      await shopping_cart.cart();
      await shopping_cart.checkoutbutton();
      await checkoutp.checkoutinfo();
      await checkoutp.checkoutdonebutton();
      
    });


    //order complete page
    test("Order complete page", async ({ page }) => {

      await login.goto();
      await login.authentication();
      await product_listes.addtocartclick();
      await shopping_cart.cart();
      await shopping_cart.checkoutbutton();
      await checkoutp.checkoutinfo();
      await checkoutp.checkoutdonebutton();
      await checkoutp.ordercomplete();
      
    });



  });
