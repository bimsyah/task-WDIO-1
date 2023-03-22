Feature: Demoblaze app Login Scenario

  # login
  Scenario: Successfully login using correct username password
    Given I am on the front page
    When I try to login with correct credential
    Then I am successfully logged in

  
  # add to cart
  Scenario: Add item to cart
    Given I am on the front page
    When I try to login with username "bimasyah" and password "bimahore"
    Then I am successfully login with username "bimasyah"
    When I add items to cart:
      | itemName          | quantity |
      | Samsung galaxy s6 |        1 |
      | Nokia lumia 1520  |        1 |

    # log out
    @logout
  Scenario: Login and then Logout account
    Given I am on the front page
    When I try to login with username "bimasyah" and password "bimahore"
    Then I am successfully login with username "bimasyah"
    When I am click logged out and back to the frontpage
    # Then I am successfully logged out and go to front page