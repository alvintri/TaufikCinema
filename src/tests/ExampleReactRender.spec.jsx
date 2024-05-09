import { test, expect } from '@playwright/experimental-ct-react';
import Header from '../components/Template/Header';

test('renders learn react link', async ({ mount }) => {
  const component = await mount(<Header />);
  if (await component.isVisible()) {
    console.log('Locator berhasil diambil.');
  } else {
    console.log('Locator tidak berhasil diambil atau tidak terlihat.');
  }
  await expect(component).toContainText("Taufik");
});
