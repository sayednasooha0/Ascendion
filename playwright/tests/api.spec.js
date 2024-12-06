const { test, expect } = require("@playwright/test");
 
test.describe("API GET Request Status Code Verification", () => {
  test("page1", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/what-is-new.html"
    );
    expect(response.status()).toBe(200);
  });
 
  test("page2", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/js-translation.json"
    );
    expect(response.status()).toBe(200);
  });
 
  test("page3", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-slide.html"
    );
    expect(response.status()).toBe(200);
  });
 
  test("page4", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/tooltip/tooltip.html"
    );
    expect(response.status()).toBe(200);
  });
 
  test("page5", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-custom.html"
    );
    expect(response.status()).toBe(200);
  });
 
  test("page6", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
 
  test("page7", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/js-translation.json"
    );
    expect(response.status()).toBe(200);
  });
 
  test("page8", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/tooltip/tooltip.html"
    );
    expect(response.status()).toBe(200);
  });
 
  test("page9", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
 
  test("page10", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
 
  test("page11", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
 
  test("page12", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
 
  test("page13", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Checkout/template/minicart/content.html"
    );
    expect(response.status()).toBe(200);
  });
 
  test("page14", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/women.html"
    );
    expect(response.status()).toBe(200);
  });
 
  test("page15", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Captcha/template/checkout/captcha.html"
    );
    expect(response.status()).toBe(200);
  });
 
  test("page16", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page17", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page18", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page19", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page20", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page21", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page22", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page23", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page24", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page25", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page26", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page27", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page28", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page29", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page30", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page31", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page33", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page34", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
  test("page35", async ({ request }) => {
    const response = await request.get(
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html"
    );
    expect(response.status()).toBe(200);
  });
});