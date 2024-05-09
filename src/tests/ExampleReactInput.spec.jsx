import { test, expect } from '@playwright/experimental-ct-react';
import SearchBox from '../pages/Search';

const searchboxLocator = '[placeholder="What do you want to see to ?"]'
const filmTitle = "S"

test('test accepts input text', async ({ mount }) => {
    test.setTimeout(2200000)
    const searchComponent = await mount(<SearchBox />)
    if (await searchComponent.isVisible()) {
        console.log('Komponen berhasil diambil.');
    } else {
        console.log('Komponen tidak berhasil diambil atau tidak terlihat.');
    }
    const searchField = searchComponent.locator(searchboxLocator)


    await searchField.fill(filmTitle)

    await expect(searchField).toHaveValue(filmTitle);
});
