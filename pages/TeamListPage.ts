import { Page, Locator } from "@playwright/test";

export class TeamListPage {
  readonly page: Page;
  readonly newTeamButton: Locator;
  readonly validateButton: Locator;
  readonly validatePopUp: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTeamButton = page.locator('button[value="team"]');
    this.validateButton = page.locator('button[name="validate"]');
    this.validatePopUp = page.locator('div[class="ps-popup"] > form > p');
  }

  async createNewTeam() {
    await this.newTeamButton.click();
  }

  async validate(): Promise<String> {
    await this.validateButton.click();
    const content = await this.validatePopUp.nth(0).textContent();
    return String(content);
  }
}
