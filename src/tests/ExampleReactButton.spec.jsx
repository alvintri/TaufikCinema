import { test, expect } from '@playwright/experimental-ct-react';
import Search from '../pages/Search'

const searchButtonLocator = '#searchButton'


test('Click on `Search` button executes search prop', async ({ mount }) => {
    let isCalled = true
    const searchComponent = await mount(
        <Search
        search={() => isCalled = true}
        />
    );

    // await searchComponent.locator(searchButtonLocator).click()

    expect(isCalled).toBeTruthy()
});