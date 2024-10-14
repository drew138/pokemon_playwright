import { Page, Locator } from "@playwright/test";

export class TeamBuilderPage {
  readonly page: Page;
  readonly formatButton: Locator;
  readonly addPokemonButton: Locator;
  readonly formatInput: Locator;
  selectedFormatButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.formatButton = page.locator(
      'li[class="format-select"] > button[name="format"]',
    );
    this.formatInput = page.locator('input[name="search"]');
    this.addPokemonButton = page.locator('button[name="addPokemon"]');
    this.selectedFormatButton;
  }

  async selectFormat(format: string, gen: string) {
    await this.formatButton.click();
    let formatInput = await this.createFormatInput(format, gen);
    await this.formatInput.pressSequentially(formatInput);
    await this.setSelectedFormatButton(formatInput);
    await this.selectedFormatButton.click();
  }

  async setSelectedFormatButton(formatInput: string) {
    this.selectedFormatButton = this.page.locator(
      `button[value="${formatInput}"]`,
    );
  }

  async createFormatInput(format: string, gen: string) {
    return (gen.toLowerCase() + format.toLowerCase()).replace(" ", "");
  }

  async addPokemon() {
    await this.addPokemonButton.click();
  }
}
