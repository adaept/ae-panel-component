import { newE2EPage } from '@stencil/core/testing';

describe('ae-panel-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<ae-panel-component></ae-panel-component>');
    const element = await page.find('ae-panel-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<ae-panel-component></ae-panel-component>');
    const component = await page.find('ae-panel-component');
    const element = await page.find('ae-panel-component >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'Panel');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm Panel`);

    component.setProperty('last', 'Component');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm Panel Component`);

    component.setProperty('middle', 'I don\'t have a middle name');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm Panel I don\'t have a middle name Component`);
  });
});
