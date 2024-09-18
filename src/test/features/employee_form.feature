Feature: Submit the Experian Form with the complete details

  Scenario: Complete Experian form and submit it
    Given user opens the Experian portal '<URL>'
    When user enters the Basic information in the form
    And user answers the yes or no questions in the form
    And user submits the form by confirming the Name
    Then user user should be redirected to Employer servive page '<Service_URL>'

    Examples:
      | URL                                                     | Service_URL                                |
      | https://uat-survey.taxcreditco.com/automation-challenge | https://www.experian.com/employer-services |
