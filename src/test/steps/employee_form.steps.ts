import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';
import { EmployeeServices } from '../pages/employeeForm';

setDefaultTimeout(60 * 1000 * 2);

const employeeForm = new EmployeeServices(pageFixture.page);

Given('user opens the Experian portal {string}', async (url) => {
  //open Experian portal
  employeeForm.open(url);
});

When('user enters the Basic information in the form', async () => {
  //Enter Basic info in the Form
  employeeForm.enterBasicInfo();
});

When('user answers the yes or no questions in the form', async () => {
  //Answers yes or no questions in the Form
  employeeForm.answerYesOrNo();
});

When('user submits the form by confirming the Name', async () => {
  //submits the form
  employeeForm.verifyNameAndSubmit();
});

Then('user user should be redirected to Employer servive page {string}', async (url) => {
  //validate the redirected page
  employeeForm.verifyRedirectUrl(url);
});
