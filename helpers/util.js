export async function retry_click(page, locator, num_of_retry=3){
    let retry = 0;
    await page.locator(locator).waitFor();
    while(retry<num_of_retry)
    {
       try {
        await page.locator(locator).click();
        retry++;

       } catch (error) {
         console.error(error);
       }
       
    }
}




