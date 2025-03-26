$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Feature Files/ERP.feature");
formatter.feature({
  "name": "",
  "description": "As Admin user want to verify customer and supplier modules",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "",
  "description": "As Admin user validate supplier",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Supplier"
    }
  ]
});
formatter.step({
  "name": "Users launch Browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user launch Url",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter password  with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Validate Title with \"Dashboard « Stock Accounting\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Wait for supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "click Add Icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Capture Supplier number  with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003csuppliername\u003e\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cAddress\u003e\" with \"name\" and \"x_Address\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cCity\u003e\" with \"name\" and \"x_City\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cCountry\u003e\" with \"name\" and \"x_Country\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cContactperson\u003e\" with \"name\" and \"x_Contact_Person\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cPhonenumber\u003e\" with \"name\" and \"x_Phone_Number\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cEmail\u003e\" with \"name\" and \"x__Email\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cmobilenumber\u003e\" with \"name\" and \"x_Mobile_Number\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cNotes\u003e\" with \"name\" and \"x_Notes\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Confirm Ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Confirm Ok with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Alert Ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Validate Supplier number",
  "keyword": "Then "
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "suppliername",
        "Address",
        "City",
        "Country",
        "Contactperson",
        "Phonenumber",
        "Email",
        "mobilenumber",
        "Notes"
      ]
    },
    {
      "cells": [
        "Akhilesh1",
        "Ameerpet13",
        "Hyderabad1",
        "India",
        "Qedge1",
        "2145698745",
        "Test@gmail.com",
        "5478954789",
        "Iam new Supplier"
      ]
    },
    {
      "cells": [
        "Akhilesh14",
        "Ameerpet15",
        "Hyderabad1",
        "India",
        "Qedge1",
        "2145698745",
        "Test@gmail.com",
        "5478954789",
        "Iam new Supplier"
      ]
    },
    {
      "cells": [
        "Akhilesh16",
        "Ameerpet41",
        "Hyderabad1",
        "India",
        "Qedge1",
        "2145698745",
        "Test@gmail.com",
        "5478954789",
        "Iam new Supplier"
      ]
    },
    {
      "cells": [
        "Akhilesh17",
        "Ameerpet111",
        "Hyderabad1",
        "India",
        "Qedge1",
        "2145698745",
        "Test@gmail.com",
        "5478954789",
        "Iam new Supplier"
      ]
    },
    {
      "cells": [
        "Akhilesh12",
        "Ameerpet100",
        "Hyderabad1",
        "India",
        "Qedge1",
        "2145698745",
        "Test@gmail.com",
        "5478954789",
        "Iam new Supplier"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "As Admin user validate supplier",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tag"
    },
    {
      "name": "@Supplier"
    }
  ]
});
formatter.step({
  "name": "Users launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.users_launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.user_launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password  with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_logout_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Title with \"Dashboard « Stock Accounting\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_Title_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_supplier_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Add_icon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Add Icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_Icon_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_supplier_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Supplier number  with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.capture_Supplier_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Akhilesh1\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet13\" with \"name\" and \"x_Address\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad1\" with \"name\" and \"x_City\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"name\" and \"x_Country\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge1\" with \"name\" and \"x_Contact_Person\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"2145698745\" with \"name\" and \"x_Phone_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Test@gmail.com\" with \"name\" and \"x__Email\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"5478954789\" with \"name\" and \"x_Mobile_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Iam new Supplier\" with \"name\" and \"x_Notes\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm Ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Confirm_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Confirm Ok with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Confirm_Ok_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert Ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Alert_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Supplier number",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_Supplier_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "As Admin user validate supplier",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tag"
    },
    {
      "name": "@Supplier"
    }
  ]
});
formatter.step({
  "name": "Users launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.users_launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.user_launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password  with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_logout_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Title with \"Dashboard « Stock Accounting\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_Title_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_supplier_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Add_icon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Add Icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_Icon_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_supplier_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Supplier number  with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.capture_Supplier_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Akhilesh14\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet15\" with \"name\" and \"x_Address\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad1\" with \"name\" and \"x_City\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"name\" and \"x_Country\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge1\" with \"name\" and \"x_Contact_Person\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"2145698745\" with \"name\" and \"x_Phone_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Test@gmail.com\" with \"name\" and \"x__Email\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"5478954789\" with \"name\" and \"x_Mobile_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Iam new Supplier\" with \"name\" and \"x_Notes\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm Ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Confirm_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Confirm Ok with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Confirm_Ok_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert Ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Alert_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Supplier number",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_Supplier_number()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: stale element not found\n  (Session info: chrome\u003d134.0.6998.118)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#stale-element-reference-exception\nBuild info: version: \u00274.29.0\u0027, revision: \u00275fc1ec94cb\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002721.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [98963c358af4679639768f3f49c62204, getElementText {id\u003df.93AA198DC54B744B6D39B5EC0954325D.d.EB9AC788FEE0077E6149E075B3A02968.e.224}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 134.0.6998.118, chrome: {chromedriverVersion: 134.0.6998.165 (fd886e2cb29..., userDataDir: C:\\Users\\chotu\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50922}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:50922/devtoo..., se:cdpVersion: 134.0.6998.118, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on windows (98963c358af4679639768f3f49c62204)] -\u003e xpath: //table[@class\u003d\u0027table ewTable\u0027]/tbody/tr[1]/td[6]]\nSession ID: 98963c358af4679639768f3f49c62204\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:62)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:502)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\r\n\tat org.openqa.selenium.remote.ErrorCodec.decode(ErrorCodec.java:167)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:138)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:50)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:215)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:216)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:174)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:223)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:191)\r\n\tat commonFuntions.FunctionLibrary.supplierTable(FunctionLibrary.java:161)\r\n\tat stepDefinitions.Supplier_Customer_Modules_Test.validate_Supplier_number(Supplier_Customer_Modules_Test.java:114)\r\n\tat ✽.Validate Supplier number(./Feature Files/ERP.feature:35)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "As Admin user validate supplier",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tag"
    },
    {
      "name": "@Supplier"
    }
  ]
});
formatter.step({
  "name": "Users launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.users_launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.user_launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password  with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_logout_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Title with \"Dashboard « Stock Accounting\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_Title_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_supplier_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Add_icon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Add Icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_Icon_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_supplier_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Supplier number  with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.capture_Supplier_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Akhilesh16\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet41\" with \"name\" and \"x_Address\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad1\" with \"name\" and \"x_City\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"name\" and \"x_Country\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge1\" with \"name\" and \"x_Contact_Person\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"2145698745\" with \"name\" and \"x_Phone_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Test@gmail.com\" with \"name\" and \"x__Email\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"5478954789\" with \"name\" and \"x_Mobile_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Iam new Supplier\" with \"name\" and \"x_Notes\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm Ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Confirm_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Confirm Ok with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Confirm_Ok_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert Ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Alert_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Supplier number",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_Supplier_number()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: stale element not found\n  (Session info: chrome\u003d134.0.6998.118)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#stale-element-reference-exception\nBuild info: version: \u00274.29.0\u0027, revision: \u00275fc1ec94cb\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002721.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c9d05819fe3fc1fe7a55f6a3c7a0afc5, getElementText {id\u003df.7389FFD120E1EAB85001CA1D0F21EAFC.d.D0DA4F7D1DAEFE6B5BCD85357B8B23BE.e.337}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 134.0.6998.118, chrome: {chromedriverVersion: 134.0.6998.165 (fd886e2cb29..., userDataDir: C:\\Users\\chotu\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50946}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:50946/devtoo..., se:cdpVersion: 134.0.6998.118, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on windows (c9d05819fe3fc1fe7a55f6a3c7a0afc5)] -\u003e xpath: //table[@class\u003d\u0027table ewTable\u0027]/tbody/tr[1]/td[6]]\nSession ID: c9d05819fe3fc1fe7a55f6a3c7a0afc5\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:62)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:502)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\r\n\tat org.openqa.selenium.remote.ErrorCodec.decode(ErrorCodec.java:167)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:138)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:50)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:215)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:216)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:174)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:223)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:191)\r\n\tat commonFuntions.FunctionLibrary.supplierTable(FunctionLibrary.java:161)\r\n\tat stepDefinitions.Supplier_Customer_Modules_Test.validate_Supplier_number(Supplier_Customer_Modules_Test.java:114)\r\n\tat ✽.Validate Supplier number(./Feature Files/ERP.feature:35)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "As Admin user validate supplier",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tag"
    },
    {
      "name": "@Supplier"
    }
  ]
});
formatter.step({
  "name": "Users launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.users_launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.user_launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password  with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_logout_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Title with \"Dashboard « Stock Accounting\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_Title_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_supplier_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Add_icon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Add Icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_Icon_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_supplier_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Supplier number  with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.capture_Supplier_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Akhilesh17\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet111\" with \"name\" and \"x_Address\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad1\" with \"name\" and \"x_City\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"name\" and \"x_Country\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge1\" with \"name\" and \"x_Contact_Person\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"2145698745\" with \"name\" and \"x_Phone_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Test@gmail.com\" with \"name\" and \"x__Email\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"5478954789\" with \"name\" and \"x_Mobile_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Iam new Supplier\" with \"name\" and \"x_Notes\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm Ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Confirm_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Confirm Ok with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Confirm_Ok_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert Ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Alert_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Supplier number",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_Supplier_number()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: stale element not found\n  (Session info: chrome\u003d134.0.6998.118)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#stale-element-reference-exception\nBuild info: version: \u00274.29.0\u0027, revision: \u00275fc1ec94cb\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002721.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f99d30b06c0aee4e04ed9424c155a093, getElementText {id\u003df.DD41E37DBE05511A7DE82A5BFBC36233.d.833153F88804FB1E7635D1E2717C17EA.e.256}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 134.0.6998.118, chrome: {chromedriverVersion: 134.0.6998.165 (fd886e2cb29..., userDataDir: C:\\Users\\chotu\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:50973}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:50973/devtoo..., se:cdpVersion: 134.0.6998.118, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on windows (f99d30b06c0aee4e04ed9424c155a093)] -\u003e xpath: //table[@class\u003d\u0027table ewTable\u0027]/tbody/tr[1]/td[6]]\nSession ID: f99d30b06c0aee4e04ed9424c155a093\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:62)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:502)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\r\n\tat org.openqa.selenium.remote.ErrorCodec.decode(ErrorCodec.java:167)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:138)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:50)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:215)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:216)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:174)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:223)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:191)\r\n\tat commonFuntions.FunctionLibrary.supplierTable(FunctionLibrary.java:161)\r\n\tat stepDefinitions.Supplier_Customer_Modules_Test.validate_Supplier_number(Supplier_Customer_Modules_Test.java:114)\r\n\tat ✽.Validate Supplier number(./Feature Files/ERP.feature:35)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "As Admin user validate supplier",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tag"
    },
    {
      "name": "@Supplier"
    }
  ]
});
formatter.step({
  "name": "Users launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.users_launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.user_launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password  with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_logout_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Title with \"Dashboard « Stock Accounting\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_Title_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_supplier_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Supplier link with \"xpath\" and \"(//a[contains(text(),\u0027Suppliers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Supplier_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Add_icon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Add Icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_Icon_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for supplier number with \"name\" and \"x_Supplier_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_supplier_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Supplier number  with \"name\" and \"x_Supplier_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.capture_Supplier_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Akhilesh12\" with \"name\" and \"x_Supplier_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet100\" with \"name\" and \"x_Address\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Hyderabad1\" with \"name\" and \"x_City\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"name\" and \"x_Country\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Qedge1\" with \"name\" and \"x_Contact_Person\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"2145698745\" with \"name\" and \"x_Phone_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Test@gmail.com\" with \"name\" and \"x__Email\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"5478954789\" with \"name\" and \"x_Mobile_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Iam new Supplier\" with \"name\" and \"x_Notes\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm Ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Confirm_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Confirm Ok with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Confirm_Ok_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert Ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Alert_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Supplier number",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_Supplier_number()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: stale element not found\n  (Session info: chrome\u003d134.0.6998.118)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#stale-element-reference-exception\nBuild info: version: \u00274.29.0\u0027, revision: \u00275fc1ec94cb\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002721.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bb67d6fe15537c9c080fbe57e4a3a4ca, getElementText {id\u003df.6604153E27D0A317F68A33A244157520.d.A2BB72D22D8588A1963FFCC452014899.e.211}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 134.0.6998.118, chrome: {chromedriverVersion: 134.0.6998.165 (fd886e2cb29..., userDataDir: C:\\Users\\chotu\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:51000}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:51000/devtoo..., se:cdpVersion: 134.0.6998.118, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on windows (bb67d6fe15537c9c080fbe57e4a3a4ca)] -\u003e xpath: //table[@class\u003d\u0027table ewTable\u0027]/tbody/tr[1]/td[6]]\nSession ID: bb67d6fe15537c9c080fbe57e4a3a4ca\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:62)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:502)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\r\n\tat org.openqa.selenium.remote.ErrorCodec.decode(ErrorCodec.java:167)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:138)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:50)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:215)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:216)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:174)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:223)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:191)\r\n\tat commonFuntions.FunctionLibrary.supplierTable(FunctionLibrary.java:161)\r\n\tat stepDefinitions.Supplier_Customer_Modules_Test.validate_Supplier_number(Supplier_Customer_Modules_Test.java:114)\r\n\tat ✽.Validate Supplier number(./Feature Files/ERP.feature:35)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "",
  "description": "Validate Customer with multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Customer"
    }
  ]
});
formatter.step({
  "name": "Users launch Browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user launch Url",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter password  with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Validate Title with \"Dashboard « Stock Accounting\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Wait for Customer link with \"xpath\" and \"(//a[starts-with(text(),\u0027Customers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Customer link with \"xpath\" and \"(//a[starts-with(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "click Add Icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Customer number with \"name\" and \"x_Customer_Number\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Capture Customer number  with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cCustomername\u003e\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cAddress\u003e\" with \"name\" and \"x_Address\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cCity\u003e\" with \"name\" and \"x_City\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cCountry\u003e\" with \"name\" and \"x_Country\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cContactperson\u003e\" with \"name\" and \"x_Contact_Person\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cPhonenumber\u003e\" with \"name\" and \"x_Phone_Number\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cEmail\u003e\" with \"name\" and \"x__Email\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cmobilenumber\u003e\" with \"name\" and \"x_Mobile_Number\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enter in \"\u003cNotes\u003e\" with \"name\" and \"x_Notes\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Confirm Ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Confirm Ok with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Wait for Alert Ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.step({
  "name": "Validate customer number",
  "keyword": "Then "
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Customername",
        "Address",
        "City",
        "Country",
        "Contactperson",
        "Phonenumber",
        "Email",
        "mobilenumber",
        "Notes"
      ]
    },
    {
      "cells": [
        "Ramuandranga13",
        "Kukatpalli51",
        "Ameerpet15",
        "India",
        "QedgeTech1",
        "2456987456",
        "ranga@gmail.com",
        "7896541236",
        "iam new Cuatomer1"
      ]
    },
    {
      "cells": [
        "Ramuandranga14",
        "Kukatpalli41",
        "Ameerpet17",
        "India",
        "QedgeTech1",
        "2456987456",
        "ranga@gmail.com",
        "7896541236",
        "iam new Cuatomer1"
      ]
    },
    {
      "cells": [
        "Ramuandranga15",
        "Kukatpalli51",
        "Ameerpet51",
        "India",
        "QedgeTech1",
        "2456987456",
        "ranga@gmail.com",
        "7896541236",
        "iam new Cuatomer1"
      ]
    },
    {
      "cells": [
        "Ramuandranga14",
        "Kukatpalli61",
        "Ameerpet71",
        "India",
        "QedgeTech1",
        "2456987456",
        "ranga@gmail.com",
        "7896541236",
        "iam new Cuatomer1"
      ]
    },
    {
      "cells": [
        "Ramuandranga112",
        "Kukatpalli231",
        "Ameerpet41",
        "India",
        "QedgeTech1",
        "2456987456",
        "ranga@gmail.com",
        "7896541236",
        "iam new Cuatomer1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "Validate Customer with multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tag"
    },
    {
      "name": "@Customer"
    }
  ]
});
formatter.step({
  "name": "Users launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.users_launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.user_launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password  with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_logout_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Title with \"Dashboard « Stock Accounting\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_Title_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Customer link with \"xpath\" and \"(//a[starts-with(text(),\u0027Customers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Customer_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer link with \"xpath\" and \"(//a[starts-with(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Add_icon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Add Icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_Icon_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Customer number with \"name\" and \"x_Customer_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Customer_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Customer number  with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.capture_Customer_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ramuandranga13\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Kukatpalli51\" with \"name\" and \"x_Address\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet15\" with \"name\" and \"x_City\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"name\" and \"x_Country\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"QedgeTech1\" with \"name\" and \"x_Contact_Person\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"2456987456\" with \"name\" and \"x_Phone_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"ranga@gmail.com\" with \"name\" and \"x__Email\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"7896541236\" with \"name\" and \"x_Mobile_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"iam new Cuatomer1\" with \"name\" and \"x_Notes\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm Ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Confirm_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Confirm Ok with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Confirm_Ok_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert Ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Alert_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate customer number",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_customer_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "Validate Customer with multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tag"
    },
    {
      "name": "@Customer"
    }
  ]
});
formatter.step({
  "name": "Users launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.users_launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.user_launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password  with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_logout_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Title with \"Dashboard « Stock Accounting\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_Title_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Customer link with \"xpath\" and \"(//a[starts-with(text(),\u0027Customers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Customer_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer link with \"xpath\" and \"(//a[starts-with(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Add_icon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Add Icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_Icon_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Customer number with \"name\" and \"x_Customer_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Customer_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Customer number  with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.capture_Customer_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ramuandranga14\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Kukatpalli41\" with \"name\" and \"x_Address\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet17\" with \"name\" and \"x_City\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"name\" and \"x_Country\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"QedgeTech1\" with \"name\" and \"x_Contact_Person\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"2456987456\" with \"name\" and \"x_Phone_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"ranga@gmail.com\" with \"name\" and \"x__Email\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"7896541236\" with \"name\" and \"x_Mobile_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"iam new Cuatomer1\" with \"name\" and \"x_Notes\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm Ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Confirm_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Confirm Ok with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Confirm_Ok_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert Ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Alert_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate customer number",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_customer_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "Validate Customer with multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tag"
    },
    {
      "name": "@Customer"
    }
  ]
});
formatter.step({
  "name": "Users launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.users_launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.user_launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password  with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_logout_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Title with \"Dashboard « Stock Accounting\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_Title_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Customer link with \"xpath\" and \"(//a[starts-with(text(),\u0027Customers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Customer_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer link with \"xpath\" and \"(//a[starts-with(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Add_icon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Add Icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_Icon_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Customer number with \"name\" and \"x_Customer_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Customer_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Customer number  with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.capture_Customer_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ramuandranga15\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Kukatpalli51\" with \"name\" and \"x_Address\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet51\" with \"name\" and \"x_City\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"name\" and \"x_Country\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"QedgeTech1\" with \"name\" and \"x_Contact_Person\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"2456987456\" with \"name\" and \"x_Phone_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"ranga@gmail.com\" with \"name\" and \"x__Email\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"7896541236\" with \"name\" and \"x_Mobile_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"iam new Cuatomer1\" with \"name\" and \"x_Notes\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm Ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Confirm_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Confirm Ok with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Confirm_Ok_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert Ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Alert_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate customer number",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_customer_number()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: stale element not found\n  (Session info: chrome\u003d134.0.6998.118)\nFor documentation on this error, please visit: https://www.selenium.dev/documentation/webdriver/troubleshooting/errors#stale-element-reference-exception\nBuild info: version: \u00274.29.0\u0027, revision: \u00275fc1ec94cb\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002721.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9203fc6d3d76a483e8a617787b2e910d, getElementText {id\u003df.27F5E19C9DA518416C8DAEB0FF10CAFB.d.C4177A037057D9FC34F31CDF2D8AE0E6.e.273}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 134.0.6998.118, chrome: {chromedriverVersion: 134.0.6998.165 (fd886e2cb29..., userDataDir: C:\\Users\\chotu\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:51077}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:51077/devtoo..., se:cdpVersion: 134.0.6998.118, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on windows (9203fc6d3d76a483e8a617787b2e910d)] -\u003e xpath: //table[@class\u003d\u0027table ewTable\u0027]/tbody/tr[1]/td[5]]\nSession ID: 9203fc6d3d76a483e8a617787b2e910d\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:62)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:502)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:486)\r\n\tat org.openqa.selenium.remote.ErrorCodec.decode(ErrorCodec.java:167)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:138)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:50)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:215)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:216)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:174)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:223)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:191)\r\n\tat commonFuntions.FunctionLibrary.customerTable(FunctionLibrary.java:208)\r\n\tat stepDefinitions.Supplier_Customer_Modules_Test.validate_customer_number(Supplier_Customer_Modules_Test.java:145)\r\n\tat ✽.Validate customer number(./Feature Files/ERP.feature:75)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "",
  "description": "Validate Customer with multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tag"
    },
    {
      "name": "@Customer"
    }
  ]
});
formatter.step({
  "name": "Users launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.users_launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.user_launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password  with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_logout_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Title with \"Dashboard « Stock Accounting\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_Title_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Customer link with \"xpath\" and \"(//a[starts-with(text(),\u0027Customers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Customer_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer link with \"xpath\" and \"(//a[starts-with(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Add_icon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Add Icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_Icon_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Customer number with \"name\" and \"x_Customer_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Customer_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Customer number  with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.capture_Customer_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ramuandranga14\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Kukatpalli61\" with \"name\" and \"x_Address\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet71\" with \"name\" and \"x_City\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"name\" and \"x_Country\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"QedgeTech1\" with \"name\" and \"x_Contact_Person\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"2456987456\" with \"name\" and \"x_Phone_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"ranga@gmail.com\" with \"name\" and \"x__Email\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"7896541236\" with \"name\" and \"x_Mobile_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"iam new Cuatomer1\" with \"name\" and \"x_Notes\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm Ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Confirm_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Confirm Ok with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Confirm_Ok_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert Ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Alert_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate customer number",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_customer_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "Validate Customer with multiple data",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Tag"
    },
    {
      "name": "@Customer"
    }
  ]
});
formatter.step({
  "name": "Users launch Browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.users_launch_Browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user launch Url",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.user_launch_Url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for username with \"xpath\" and \"//input[@id\u003d\u0027username\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_username_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter user name with \"name\" and \"username\" and \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_user_name_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter password  with \"xpath\" and \"//input[@id\u003d\u0027password\u0027]\" and \"master\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_password_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click login button with \"id\" and \"btnsubmit\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_login_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for logout link with \"xpath\" and \"(//a[starts-with(text(),\u0027 Logout\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_logout_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Title with \"Dashboard « Stock Accounting\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_Title_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Customer link with \"xpath\" and \"(//a[starts-with(text(),\u0027Customers\u0027)])[2]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Customer_link_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Customer link with \"xpath\" and \"(//a[starts-with(text(),\u0027Customers\u0027)])[2]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Customer_link_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Add icon with \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Add_icon_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click Add Icon \"xpath\" and \"(//span[@data-caption\u003d\u0027Add\u0027])[1]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_Icon_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Customer number with \"name\" and \"x_Customer_Number\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Customer_number_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Capture Customer number  with \"name\" and \"x_Customer_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.capture_Customer_number_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ramuandranga112\" with \"name\" and \"x_Customer_Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Kukatpalli231\" with \"name\" and \"x_Address\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"Ameerpet41\" with \"name\" and \"x_City\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"India\" with \"name\" and \"x_Country\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"QedgeTech1\" with \"name\" and \"x_Contact_Person\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"2456987456\" with \"name\" and \"x_Phone_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"ranga@gmail.com\" with \"name\" and \"x__Email\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"7896541236\" with \"name\" and \"x_Mobile_Number\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter in \"iam new Cuatomer1\" with \"name\" and \"x_Notes\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.enter_in_with_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Add button with \"id\" and \"btnAction\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Add_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Confirm Ok button with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Confirm_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Confirm Ok with \"xpath\" and \"//button[normalize-space()\u003d\u0027OK!\u0027]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Confirm_Ok_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for Alert Ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\" and \"10\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.wait_for_Alert_Ok_button_with_and_and(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Alert ok button with \"xpath\" and \"(//button[starts-with(text(),\u0027OK\u0027)])[6]\"",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.click_Alert_ok_button_with_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate customer number",
  "keyword": "Then "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.validate_customer_number()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "When "
});
formatter.match({
  "location": "Supplier_Customer_Modules_Test.close_browser()"
});
formatter.result({
  "status": "passed"
});
});