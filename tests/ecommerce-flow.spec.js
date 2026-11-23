import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage.js';

test.describe('Fluxo de Produtos e Carrinho', () => {
  test('CT-06 | Deve buscar um produto existente e adicioná-lo ao carrinho', async ({ page }) => {
    const productsPage = new ProductsPage(page);

    await productsPage.goto();
    await productsPage.searchProduct('Blue Top');

    // Valida que o título da seção mudou para SEARCHED PRODUCTS e o item apareceu
    await expect(productsPage.searchedProductsTitle).toHaveText('Searched Products');
    await expect(productsPage.productNames.first()).toContainText('Blue Top');

    // Adiciona ao carrinho e valida que o item está listado em /view_cart
    await productsPage.addFirstProductToCartAndGoToCart();
    await expect(page).toHaveURL(/.*\/view_cart/);
    await expect(productsPage.cartProductDescription.first()).toContainText('Blue Top');
  });
});

