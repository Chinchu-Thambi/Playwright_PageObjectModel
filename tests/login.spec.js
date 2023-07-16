import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test('test', async ({ page }) => {
  //object intsance of LoginPage
  const loginPage = new LoginPage(page);
  
  await loginPage.launchApplication();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');
});