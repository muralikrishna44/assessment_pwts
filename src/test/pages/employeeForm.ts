import { DriverEvents } from '../../helper/driverEvents';
import { pageFixture } from '../../hooks/pageFixture';
import { expect, Page } from '@playwright/test';

class EmployeeServices {

    constructor(public page: Page) {
        pageFixture.page = page;
    }

    private driverEvents = new DriverEvents(pageFixture.page);

    private firstName: string = '//div[@data-question-id-text="VoterFirstName"]/div/input';
    private lastName: string = '//div[@data-question-id-text="VoterLastName"]/div/input';
    private email: string = '//div[@data-question-id-text="VoterEmail"]/div/input';
    private addressLine1: string =
        '//div[@data-question-id-text="VoterAddressLine1"]/div/input';
    private city: string = '//div[@data-question-id-text="VoterCity"]/div/input';
    private postalCode: string =
        '//div[@data-question-id-text="VoterPostalCode"]/div/input';
    private nextBtn: string = '#SurveyControl_SurveySubmit';
    private noBtns: string = "//div[@class='ima-answer-item-container']/label[contains(text(),'No')]";
    private nextBtn2: string = "//input[@type='submit']";
    private cnfrmName: string = "//input[@type='text']";


    // Open the EmployeeServices page with the given URL
    async open(url: string): Promise<void> {
        await this.driverEvents.visit(url);
    }

    async enterBasicInfo(): Promise<void> {
        await this.driverEvents.enterDataInTextField(this.firstName, 'MuraliKrishna');
        await this.driverEvents.enterDataInTextField(this.lastName, 'Kancherla');
        await this.driverEvents.enterDataInTextField(
            this.email,
            'kancherlamuralikrishna44@gmail.com',
        );
        await this.driverEvents.enterDataInTextField(this.addressLine1, 'Ambajipeta');
        await this.driverEvents.enterDataInTextField(this.city, 'Guntur');
        await this.driverEvents.enterDataInTextField(this.postalCode, '522001');
        await this.driverEvents.clickElement(this.nextBtn);
    }

    async answerYesOrNo(): Promise<void> {
        for (let i=0; i<5; i++) {
            await pageFixture.page.locator(this.noBtns).nth(i).click();
        }
        await this.driverEvents.clickElement(this.nextBtn2);
    }

    async verifyNameAndSubmit(): Promise<void> {
        const inputElement = await pageFixture.page.locator(this.cnfrmName);
        const fullName = await inputElement.inputValue();
        expect(fullName).toBe('MuraliKrishna Kancherla');
        await this.driverEvents.clickElement(this.nextBtn2);
    }

    async verifyRedirectUrl(url: string): Promise<void> {
        const redirectURL = await pageFixture.page.url();
        expect(redirectURL).toBe(url);
    }
}

export { EmployeeServices };
