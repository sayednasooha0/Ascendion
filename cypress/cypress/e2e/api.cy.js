describe("API GET Request Status Code Verification", () => {
    const urls = [
      "https://magento.softwaretestingboard.com/what-is-new.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/js-translation.json",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-slide.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/tooltip/tooltip.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-custom.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Checkout/template/minicart/content.html",
      "https://magento.softwaretestingboard.com/women.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Captcha/template/checkout/captcha.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-slide.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-custom.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-slide.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-custom.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-slide.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-slide.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-custom.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-slide.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-popup.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-custom.html",
      "https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/Magento_Ui/templates/modal/modal-custom.html",
    ];
  
    urls.forEach((url, index) => {
      it(`Verify status code for URL - page${index + 1}`, () => {
        cy.request(url).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
    });
  });
  