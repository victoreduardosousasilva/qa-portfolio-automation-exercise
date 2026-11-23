// pages/ProductsPage.js
export class ProductsPage {
  constructor(page) {
    this.page = page;

    // Busca no catálogo (/products)
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.searchedProductsTitle = page.locator('.features_items h2.title');
    this.productNames = page.locator('.productinfo p');

    // Ações nos cards de produto e modal de confirmação
    this.firstProductAddToCartButton = page.locator('.productinfo a.add-to-cart').first();
    this.viewCartModalLink = page.locator('#cartModal a[href="/view_cart"]');
    this.continueShoppingButton = page.locator('#cartModal button.close-modal');

    // Tela do Carrinho (/view_cart) e Checkout
    this.cartProductDescription = page.locator('#cart_info_table .cart_description h4 a');
    this.proceedToCheckoutButton = page.locator('a.check_out');
  }

  async goto() {
    // Mitigação R-03: Bloqueia scripts de anúncios externos
    await this.page.route('**/*', (route) => {
      const url = route.request().url();
      if (url.includes('doubleclick.net') || url.includes('googlesyndication.com')) {
        return route.abort();
      }
      return route.continue();
    });

    await this.page.goto('https://automationexercise.com/products');
  }

  async searchProduct(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async addFirstProductToCartAndGoToCart() {
    await this.firstProductAddToCartButton.click();
    await this.viewCartModalLink.click();
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }
}