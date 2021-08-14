/*==============================================================================*/
/* Casper generated Fri Aug 09 2019 01:05:56 GMT+0800 (Philippine Standard Time) */
/*==============================================================================*/

var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1920, height: 928};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('https://live-georgia-tech-professional-education.pantheonsite.io/');
   casper.waitForSelector(x("//a[normalize-space(text())='Courses']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Courses']"));
           this.click(x("//a[normalize-space(text())='Courses']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Courses']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Course Details']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Course Details']"));
           this.click(x("//a[normalize-space(text())='Course Details']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Course Details']"));
   });
   casper.waitForSelector("form#commerce-cart-add-to-cart-form-10511 input[type=submit][value='Register']",
       function success() {
           test.assertExists("form#commerce-cart-add-to-cart-form-10511 input[type=submit][value='Register']");
           this.click("form#commerce-cart-add-to-cart-form-10511 input[type=submit][value='Register']");
       },
       function fail() {
           test.assertExists("form#commerce-cart-add-to-cart-form-10511 input[type=submit][value='Register']");
   });
   /* submit form */
   casper.waitForSelector(x("//a[normalize-space(text())='proceed to your cart']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='proceed to your cart']"));
           this.click(x("//a[normalize-space(text())='proceed to your cart']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='proceed to your cart']"));
   });
   casper.waitForSelector("form#views-form-commerce-cart-form-gtpe-default input[type=submit][value='Checkout']",
       function success() {
           test.assertExists("form#views-form-commerce-cart-form-gtpe-default input[type=submit][value='Checkout']");
           this.click("form#views-form-commerce-cart-form-gtpe-default input[type=submit][value='Checkout']");
       },
       function fail() {
           test.assertExists("form#views-form-commerce-cart-form-gtpe-default input[type=submit][value='Checkout']");
   });
   /* submit form */
   casper.waitForSelector(x("//a[normalize-space(text())='Create Attendee Account']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Create Attendee Account']"));
           this.click(x("//a[normalize-space(text())='Create Attendee Account']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Create Attendee Account']"));
   });
   casper.waitForSelector("form input[name='mail']",
       function success() {
           test.assertExists("form input[name='mail']");
           this.click("form input[name='mail']");
       },
       function fail() {
           test.assertExists("form input[name='mail']");
   });

   email_test = datetime.timestamp()
   casper.waitForSelector("input[name='mail']",
       function success() {
           this.sendKeys("input[name='mail']", "eladio+" + email_test +  "@pantheon.io");
       },
       function fail() {
           test.assertExists("input[name='mail']");
   });
   casper.waitForSelector("input[name='verify_email']",
       function success() {
           this.sendKeys("input[name='verify_email']", "eladio+" + email_test +  "@pantheon.io");
       },
       function fail() {
           test.assertExists("input[name='verify_email']");
   });
   casper.waitForSelector("input[name='pass[pass1]']",
       function success() {
           this.sendKeys("input[name='pass[pass1]']", "GeorgiaTech1234");
       },
       function fail() {
           test.assertExists("input[name='pass[pass1]']");
   });
   casper.waitForSelector("input[name='pass[pass2]']",
       function success() {
           this.sendKeys("input[name='pass[pass2]']", "GeorgiaTech1234");
       },
       function fail() {
           test.assertExists("input[name='pass[pass2]']");
   });
   casper.waitForSelector("form input[name='pass[pass1]']",
       function success() {
           test.assertExists("form input[name='pass[pass1]']");
           this.click("form input[name='pass[pass1]']");
       },
       function fail() {
           test.assertExists("form input[name='pass[pass1]']");
   });
   casper.waitForSelector("form input[name='pass[pass1]']",
       function success() {
           test.assertExists("form input[name='pass[pass1]']");
           this.click("form input[name='pass[pass1]']");
       },
       function fail() {
           test.assertExists("form input[name='pass[pass1]']");
   });
   casper.waitForSelector("input[name='pass[pass1]']",
       function success() {
           this.sendKeys("input[name='pass[pass1]']", "GeorgiaTech1234");
       },
       function fail() {
           test.assertExists("input[name='pass[pass1]']");
   });
   casper.waitForSelector("input[name='pass[pass2]']",
       function success() {
           this.sendKeys("input[name='pass[pass2]']", "GeorgiaTech1234");
       },
       function fail() {
           test.assertExists("input[name='pass[pass2]']");
   });
   casper.waitForSelector("form input[name='field_person_first_name[und][0][value]']",
       function success() {
           test.assertExists("form input[name='field_person_first_name[und][0][value]']");
           this.click("form input[name='field_person_first_name[und][0][value]']");
       },
       function fail() {
           test.assertExists("form input[name='field_person_first_name[und][0][value]']");
   });
   casper.waitForSelector("input[name='field_person_first_name[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_person_first_name[und][0][value]']", "Eladio");
       },
       function fail() {
           test.assertExists("input[name='field_person_first_name[und][0][value]']");
   });
   casper.waitForSelector("input[name='field_person_preferred_firstname[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_person_preferred_firstname[und][0][value]']", "EL");
       },
       function fail() {
           test.assertExists("input[name='field_person_preferred_firstname[und][0][value]']");
   });
   casper.waitForSelector("input[name='field_person_middle_name[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_person_middle_name[und][0][value]']", "Castro");
       },
       function fail() {
           test.assertExists("input[name='field_person_middle_name[und][0][value]']");
   });
   casper.waitForSelector("input[name='field_person_last_name[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_person_last_name[und][0][value]']", "Abquina");
       },
       function fail() {
           test.assertExists("input[name='field_person_last_name[und][0][value]']");
   });
   casper.waitForSelector("form input[name='field_person_first_name[und][0][value]']",
       function success() {
           test.assertExists("form input[name='field_person_first_name[und][0][value]']");
           this.click("form input[name='field_person_first_name[und][0][value]']");
       },
       function fail() {
           test.assertExists("form input[name='field_person_first_name[und][0][value]']");
   });
   casper.waitForSelector("input[name='field_person_first_name[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_person_first_name[und][0][value]']", " JoselEladio Jose");
       },
       function fail() {
           test.assertExists("input[name='field_person_first_name[und][0][value]']");
   });
   casper.waitForSelector(".form-item.form-type-textfield.form-item-field-person-middle-name-und-0-value label",
       function success() {
           test.assertExists(".form-item.form-type-textfield.form-item-field-person-middle-name-und-0-value label");
           this.click(".form-item.form-type-textfield.form-item-field-person-middle-name-und-0-value label");
       },
       function fail() {
           test.assertExists(".form-item.form-type-textfield.form-item-field-person-middle-name-und-0-value label");
   });
   casper.waitForSelector("form input[name='field_person_middle_name[und][0][value]']",
       function success() {
           test.assertExists("form input[name='field_person_middle_name[und][0][value]']");
           this.click("form input[name='field_person_middle_name[und][0][value]']");
       },
       function fail() {
           test.assertExists("form input[name='field_person_middle_name[und][0][value]']");
   });
   casper.waitForSelector("form input[name='field_person_last_name[und][0][value]']",
       function success() {
           test.assertExists("form input[name='field_person_last_name[und][0][value]']");
           this.click("form input[name='field_person_last_name[und][0][value]']");
       },
       function fail() {
           test.assertExists("form input[name='field_person_last_name[und][0][value]']");
   });
   casper.waitForSelector("input[name='mail']",
       function success() {
           this.sendKeys("input[name='mail']", "eladio@pantheon.io");
       },
       function fail() {
           test.assertExists("input[name='mail']");
   });
   casper.waitForSelector("form input[name='verify_email']",
       function success() {
           test.assertExists("form input[name='verify_email']");
           this.click("form input[name='verify_email']");
       },
       function fail() {
           test.assertExists("form input[name='verify_email']");
   });
   casper.waitForSelector("input[name='verify_email']",
       function success() {
           this.sendKeys("input[name='verify_email']", "eladio@pantheon.io");
       },
       function fail() {
           test.assertExists("input[name='verify_email']");
   });
   casper.waitForSelector("form input[name='pass[pass1]']",
       function success() {
           test.assertExists("form input[name='pass[pass1]']");
           this.click("form input[name='pass[pass1]']");
       },
       function fail() {
           test.assertExists("form input[name='pass[pass1]']");
   });
   casper.waitForSelector("input[name='pass[pass1]']",
       function success() {
           this.sendKeys("input[name='pass[pass1]']", "GeorgiaTech1234");
       },
       function fail() {
           test.assertExists("input[name='pass[pass1]']");
   });
   casper.waitForSelector("form input[name='pass[pass2]']",
       function success() {
           test.assertExists("form input[name='pass[pass2]']");
           this.click("form input[name='pass[pass2]']");
       },
       function fail() {
           test.assertExists("form input[name='pass[pass2]']");
   });
   casper.waitForSelector("form input[name='pass[pass2]']",
       function success() {
           test.assertExists("form input[name='pass[pass2]']");
           this.click("form input[name='pass[pass2]']");
       },
       function fail() {
           test.assertExists("form input[name='pass[pass2]']");
   });
   casper.waitForSelector("input[name='pass[pass2]']",
       function success() {
           this.sendKeys("input[name='pass[pass2]']", "GeorgiaTech1234");
       },
       function fail() {
           test.assertExists("input[name='pass[pass2]']");
   });
   casper.waitForSelector("form input[name='field_person_first_name[und][0][value]']",
       function success() {
           test.assertExists("form input[name='field_person_first_name[und][0][value]']");
           this.click("form input[name='field_person_first_name[und][0][value]']");
       },
       function fail() {
           test.assertExists("form input[name='field_person_first_name[und][0][value]']");
   });
   casper.waitForSelector("input[name='field_person_first_name[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_person_first_name[und][0][value]']", "Eladio Jose");
       },
       function fail() {
           test.assertExists("input[name='field_person_first_name[und][0][value]']");
   });
   casper.waitForSelector("form input[name='field_person_preferred_firstname[und][0][value]']",
       function success() {
           test.assertExists("form input[name='field_person_preferred_firstname[und][0][value]']");
           this.click("form input[name='field_person_preferred_firstname[und][0][value]']");
       },
       function fail() {
           test.assertExists("form input[name='field_person_preferred_firstname[und][0][value]']");
   });
   casper.waitForSelector("input[name='field_person_preferred_firstname[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_person_preferred_firstname[und][0][value]']", "Elladio");
       },
       function fail() {
           test.assertExists("input[name='field_person_preferred_firstname[und][0][value]']");
   });
   casper.waitForSelector("input[name='field_person_middle_name[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_person_middle_name[und][0][value]']", "Castro");
       },
       function fail() {
           test.assertExists("input[name='field_person_middle_name[und][0][value]']");
   });
   casper.waitForSelector("form input[name='field_person_last_name[und][0][value]']",
       function success() {
           test.assertExists("form input[name='field_person_last_name[und][0][value]']");
           this.click("form input[name='field_person_last_name[und][0][value]']");
       },
       function fail() {
           test.assertExists("form input[name='field_person_last_name[und][0][value]']");
   });
   casper.waitForSelector("input[name='field_person_last_name[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_person_last_name[und][0][value]']", "Abquina");
       },
       function fail() {
           test.assertExists("input[name='field_person_last_name[und][0][value]']");
   });
   casper.waitForSelector("#edit-field-person-dob-und-0-value-month",
       function success() {
           test.assertExists("#edit-field-person-dob-und-0-value-month");
           this.click("#edit-field-person-dob-und-0-value-month");
       },
       function fail() {
           test.assertExists("#edit-field-person-dob-und-0-value-month");
   });
   casper.waitForSelector("#edit-field-person-dob-und-0-value-day",
       function success() {
           test.assertExists("#edit-field-person-dob-und-0-value-day");
           this.click("#edit-field-person-dob-und-0-value-day");
       },
       function fail() {
           test.assertExists("#edit-field-person-dob-und-0-value-day");
   });
   casper.waitForSelector("#edit-field-person-dob-und-0-value-year",
       function success() {
           test.assertExists("#edit-field-person-dob-und-0-value-year");
           this.click("#edit-field-person-dob-und-0-value-year");
       },
       function fail() {
           test.assertExists("#edit-field-person-dob-und-0-value-year");
   });
   casper.waitForSelector("#edit-field-person-address-type-und",
       function success() {
           test.assertExists("#edit-field-person-address-type-und");
           this.click("#edit-field-person-address-type-und");
       },
       function fail() {
           test.assertExists("#edit-field-person-address-type-und");
   });
   casper.waitForSelector("#edit-field-person-address-und-0-country",
       function success() {
           test.assertExists("#edit-field-person-address-und-0-country");
           this.click("#edit-field-person-address-und-0-country");
       },
       function fail() {
           test.assertExists("#edit-field-person-address-und-0-country");
   });
   casper.waitForSelector("form input[name='field_person_address[und][0][thoroughfare]']",
       function success() {
           test.assertExists("form input[name='field_person_address[und][0][thoroughfare]']");
           this.click("form input[name='field_person_address[und][0][thoroughfare]']");
       },
       function fail() {
           test.assertExists("form input[name='field_person_address[und][0][thoroughfare]']");
   });
   casper.waitForSelector("input[name='field_person_address[und][0][thoroughfare]']",
       function success() {
           this.sendKeys("input[name='field_person_address[und][0][thoroughfare]']", "Calfirniaornia ");
       },
       function fail() {
           test.assertExists("input[name='field_person_address[und][0][thoroughfare]']");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot1.png", "html");
   });
   casper.waitForSelector("input[name='field_person_address[und][0][thoroughfare]']",
       function success() {
           this.sendKeys("input[name='field_person_address[und][0][thoroughfare]']", "t");
       },
       function fail() {
           test.assertExists("input[name='field_person_address[und][0][thoroughfare]']");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot2.png", "html");
   });
   casper.waitForSelector("input[name='field_person_address[und][0][thoroughfare]']",
       function success() {
           this.sendKeys("input[name='field_person_address[und][0][thoroughfare]']", "t");
       },
       function fail() {
           test.assertExists("input[name='field_person_address[und][0][thoroughfare]']");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot3.png", "html");
   });
   casper.waitForSelector("input[name='field_person_address[und][0][thoroughfare]']",
       function success() {
           this.sendKeys("input[name='field_person_address[und][0][thoroughfare]']", "s");
       },
       function fail() {
           test.assertExists("input[name='field_person_address[und][0][thoroughfare]']");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot4.png", "html");
   });
   casper.waitForSelector("input[name='field_person_address[und][0][thoroughfare]']",
       function success() {
           this.sendKeys("input[name='field_person_address[und][0][thoroughfare]']", "ss");
       },
       function fail() {
           test.assertExists("input[name='field_person_address[und][0][thoroughfare]']");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot5.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot6.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot7.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot8.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot9.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot10.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot11.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot12.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot13.png", "html");
   });
   casper.waitForSelector("input[name='field_person_address[und][0][thoroughfare]']",
       function success() {
           this.sendKeys("input[name='field_person_address[und][0][thoroughfare]']", "street");
       },
       function fail() {
           test.assertExists("input[name='field_person_address[und][0][thoroughfare]']");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot14.png", "html");
   });
   casper.waitForSelector("input[name='field_person_address[und][0][locality]']",
       function success() {
           this.sendKeys("input[name='field_person_address[und][0][locality]']", "asan Francisco");
       },
       function fail() {
           test.assertExists("input[name='field_person_address[und][0][locality]']");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot15.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot16.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot17.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot18.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot19.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot20.png", "html");
   });
   casper.waitForSelector("input[name='field_person_address[und][0][locality]']",
       function success() {
           this.sendKeys("input[name='field_person_address[und][0][locality]']", "s");
       },
       function fail() {
           test.assertExists("input[name='field_person_address[und][0][locality]']");
   });
   casper.waitForSelector("#edit-field-person-address-und-0-administrative-area",
       function success() {
           test.assertExists("#edit-field-person-address-und-0-administrative-area");
           this.click("#edit-field-person-address-und-0-administrative-area");
       },
       function fail() {
           test.assertExists("#edit-field-person-address-und-0-administrative-area");
   });
   casper.waitForSelector("form input[name='field_person_address[und][0][postal_code]']",
       function success() {
           test.assertExists("form input[name='field_person_address[und][0][postal_code]']");
           this.click("form input[name='field_person_address[und][0][postal_code]']");
       },
       function fail() {
           test.assertExists("form input[name='field_person_address[und][0][postal_code]']");
   });
   casper.waitForSelector("input[name='field_person_address[und][0][postal_code]']",
       function success() {
           this.sendKeys("input[name='field_person_address[und][0][postal_code]']", "90");
       },
       function fail() {
           test.assertExists("input[name='field_person_address[und][0][postal_code]']");
   });
   casper.waitForSelector("input[name='field_person_address[und][0][postal_code]']",
       function success() {
           this.sendKeys("input[name='field_person_address[und][0][postal_code]']", "894110");
       },
       function fail() {
           test.assertExists("input[name='field_person_address[und][0][postal_code]']");
   });
   casper.waitForSelector("form input[name='field_person_company_name[und][0][value]']",
       function success() {
           test.assertExists("form input[name='field_person_company_name[und][0][value]']");
           this.click("form input[name='field_person_company_name[und][0][value]']");
       },
       function fail() {
           test.assertExists("form input[name='field_person_company_name[und][0][value]']");
   });
   casper.waitForSelector("input[name='field_person_company_name[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_person_company_name[und][0][value]']", "Pantheon ");
       },
       function fail() {
           test.assertExists("input[name='field_person_company_name[und][0][value]']");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot21.png", "html");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot22.png", "html");
   });
   casper.waitForSelector("input[name='field_person_company_name[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_person_company_name[und][0][value]']", "Aystems");
       },
       function fail() {
           test.assertExists("input[name='field_person_company_name[und][0][value]']");
   });
   casper.wait(1000);
   casper.then(function() {
       this.captureSelector("screenshot23.png", "html");
   });
   casper.waitForSelector("input[name='field_person_company_name[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_person_company_name[und][0][value]']", " s");
       },
       function fail() {
           test.assertExists("input[name='field_person_company_name[und][0][value]']");
   });
   casper.waitForSelector("input[name='field_person_job_title[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_person_job_title[und][0][value]']", "Engagement Manager");
       },
       function fail() {
           test.assertExists("input[name='field_person_job_title[und][0][value]']");
   });
   casper.waitForSelector(".form-item.form-type-select.form-item-field-person-nation-citizenship-und .styled-select",
       function success() {
           test.assertExists(".form-item.form-type-select.form-item-field-person-nation-citizenship-und .styled-select");
           this.click(".form-item.form-type-select.form-item-field-person-nation-citizenship-und .styled-select");
       },
       function fail() {
           test.assertExists(".form-item.form-type-select.form-item-field-person-nation-citizenship-und .styled-select");
   });
   casper.waitForSelector("#edit-field-person-nation-citizenship-und",
       function success() {
           test.assertExists("#edit-field-person-nation-citizenship-und");
           this.click("#edit-field-person-nation-citizenship-und");
       },
       function fail() {
           test.assertExists("#edit-field-person-nation-citizenship-und");
   });
   casper.waitForSelector("#edit-field-person-nation-citizenship-und",
       function success() {
           test.assertExists("#edit-field-person-nation-citizenship-und");
           this.click("#edit-field-person-nation-citizenship-und");
       },
       function fail() {
           test.assertExists("#edit-field-person-nation-citizenship-und");
   });
   casper.waitForSelector("#edit-field-person-phone-type-und",
       function success() {
           test.assertExists("#edit-field-person-phone-type-und");
           this.click("#edit-field-person-phone-type-und");
       },
       function fail() {
           test.assertExists("#edit-field-person-phone-type-und");
   });
   casper.waitForSelector("form input[name='field_person_phone_area_code[und][0][value]']",
       function success() {
           test.assertExists("form input[name='field_person_phone_area_code[und][0][value]']");
           this.click("form input[name='field_person_phone_area_code[und][0][value]']");
       },
       function fail() {
           test.assertExists("form input[name='field_person_phone_area_code[und][0][value]']");
   });
   casper.waitForSelector("input[name='field_person_phone_area_code[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_person_phone_area_code[und][0][value]']", "63");
       },
       function fail() {
           test.assertExists("input[name='field_person_phone_area_code[und][0][value]']");
   });
   casper.waitForSelector("input[name='field_person_phone_number[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_person_phone_number[und][0][value]']", "9088772988");
       },
       function fail() {
           test.assertExists("input[name='field_person_phone_number[und][0][value]']");
   });
   /* submit form */
   casper.waitForSelector("form input[name='field_person_address[und][0][thoroughfare]']",
       function success() {
           test.assertExists("form input[name='field_person_address[und][0][thoroughfare]']");
           this.click("form input[name='field_person_address[und][0][thoroughfare]']");
       },
       function fail() {
           test.assertExists("form input[name='field_person_address[und][0][thoroughfare]']");
   });
   casper.waitForSelector("input[name='field_person_address[und][0][thoroughfare]']",
       function success() {
           this.sendKeys("input[name='field_person_address[und][0][thoroughfare]']", "717 ");
       },
       function fail() {
           test.assertExists("input[name='field_person_address[und][0][thoroughfare]']");
   });
   /* submit form */
   casper.waitForSelector("input[name='pass[pass1]']",
       function success() {
           this.sendKeys("input[name='pass[pass1]']", "GeorgiaTech1234");
       },
       function fail() {
           test.assertExists("input[name='pass[pass1]']");
   });
   casper.waitForSelector("input[name='pass[pass2]']",
       function success() {
           this.sendKeys("input[name='pass[pass2]']", "GeorgiaTech1234");
       },
       function fail() {
           test.assertExists("input[name='pass[pass2]']");
   });
   casper.waitForSelector("form input[type=submit][value='Create Attendee Account']",
       function success() {
           test.assertExists("form input[type=submit][value='Create Attendee Account']");
           this.click("form input[type=submit][value='Create Attendee Account']");
       },
       function fail() {
           test.assertExists("form input[type=submit][value='Create Attendee Account']");
   });
   /* submit form */
   casper.waitForSelector(".gtpe-header__utility-bar.wrapper .user-menu.icon-menu .icon-menu__item:nth-child(2) .icon-menu__text",
       function success() {
           test.assertExists(".gtpe-header__utility-bar.wrapper .user-menu.icon-menu .icon-menu__item:nth-child(2) .icon-menu__text");
           this.click(".gtpe-header__utility-bar.wrapper .user-menu.icon-menu .icon-menu__item:nth-child(2) .icon-menu__text");
       },
       function fail() {
           test.assertExists(".gtpe-header__utility-bar.wrapper .user-menu.icon-menu .icon-menu__item:nth-child(2) .icon-menu__text");
   });
   casper.waitForSelector("form#views-form-commerce-cart-form-gtpe-default input[type=submit][value='Checkout']",
       function success() {
           test.assertExists("form#views-form-commerce-cart-form-gtpe-default input[type=submit][value='Checkout']");
           this.click("form#views-form-commerce-cart-form-gtpe-default input[type=submit][value='Checkout']");
       },
       function fail() {
           test.assertExists("form#views-form-commerce-cart-form-gtpe-default input[type=submit][value='Checkout']");
   });
   /* submit form */
   casper.waitForSelector("form#commerce-checkout-form-checkout input[name='commerce_coupon[coupon_code]']",
       function success() {
           test.assertExists("form#commerce-checkout-form-checkout input[name='commerce_coupon[coupon_code]']");
           this.click("form#commerce-checkout-form-checkout input[name='commerce_coupon[coupon_code]']");
       },
       function fail() {
           test.assertExists("form#commerce-checkout-form-checkout input[name='commerce_coupon[coupon_code]']");
   });
   casper.waitForSelector("input[name='commerce_coupon[coupon_code]']",
       function success() {
           this.sendKeys("input[name='commerce_coupon[coupon_code]']", "GT-50");
       },
       function fail() {
           test.assertExists("input[name='commerce_coupon[coupon_code]']");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='/page_manager_node_view_page/course']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='/page_manager_node_view_page/course']"));
           this.click(x("//a[normalize-space(text())='/page_manager_node_view_page/course']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='/page_manager_node_view_page/course']"));
   });
   casper.waitForSelector("#drilldown_column",
       function success() {
           test.assertExists("#drilldown_column");
           this.click("#drilldown_column");
       },
       function fail() {
           test.assertExists("#drilldown_column");
   });
   casper.waitForSelector(x("//a[@href='/accounts/2428863/applications/307879305/transactions#']"),
       function success() {
           test.assertExists(x("//a[@href='/accounts/2428863/applications/307879305/transactions#']"));
           this.click(x("//a[@href='/accounts/2428863/applications/307879305/transactions#']"));
       },
       function fail() {
           test.assertExists(x("//a[@href='/accounts/2428863/applications/307879305/transactions#']"));
   });
   casper.waitForSelector(x("//a[@id='drilldown_close']"),
       function success() {
           test.assertExists(x("//a[@id='drilldown_close']"));
           this.click(x("//a[@id='drilldown_close']"));
       },
       function fail() {
           test.assertExists(x("//a[@id='drilldown_close']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='/drupal_get_form/commerce_checkout_form_checkout']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='/drupal_get_form/commerce_checkout_form_checkout']"));
           this.click(x("//a[normalize-space(text())='/drupal_get_form/commerce_checkout_form_checkout']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='/drupal_get_form/commerce_checkout_form_checkout']"));
   });
   casper.waitForSelector("input[name='permalink_text']",
       function success() {
           test.assertExists("input[name='permalink_text']");
           this.click("input[name='permalink_text']");
       },
       function fail() {
           test.assertExists("input[name='permalink_text']");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Permalink']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Permalink']"));
           this.click(x("//a[normalize-space(text())='Permalink']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Permalink']"));
   });
   casper.waitForSelector("input[name='permalink_text']",
       function success() {
           test.assertExists("input[name='permalink_text']");
           this.click("input[name='permalink_text']");
       },
       function fail() {
           test.assertExists("input[name='permalink_text']");
   });
   casper.waitForSelector("input[name='permalink_text']",
       function success() {
           test.assertExists("input[name='permalink_text']");
           this.click("input[name='permalink_text']");
       },
       function fail() {
           test.assertExists("input[name='permalink_text']");
   });
   casper.waitForSelector(".kix-paginateddocumentplugin .kix-page.kix-page-paginated:nth-child(3) .kix-page-column > div:nth-child(1) > div > .kix-paragraphrenderer > .kix-lineview > .kix-lineview-content",
       function success() {
           test.assertExists(".kix-paginateddocumentplugin .kix-page.kix-page-paginated:nth-child(3) .kix-page-column > div:nth-child(1) > div > .kix-paragraphrenderer > .kix-lineview > .kix-lineview-content");
           this.click(".kix-paginateddocumentplugin .kix-page.kix-page-paginated:nth-child(3) .kix-page-column > div:nth-child(1) > div > .kix-paragraphrenderer > .kix-lineview > .kix-lineview-content");
       },
       function fail() {
           test.assertExists(".kix-paginateddocumentplugin .kix-page.kix-page-paginated:nth-child(3) .kix-page-column > div:nth-child(1) > div > .kix-paragraphrenderer > .kix-lineview > .kix-lineview-content");
   });
   casper.waitForSelector(".kix-paginateddocumentplugin .kix-page.kix-page-paginated:nth-child(6) .kix-page-column > div:nth-child(1) > div > .kix-paragraphrenderer > .kix-lineview > .kix-lineview-content > span > .goog-inline-block.kix-lineview-text-block > .kix-wordhtmlgenerator-word-node > .goog-inline-block",
       function success() {
           test.assertExists(".kix-paginateddocumentplugin .kix-page.kix-page-paginated:nth-child(6) .kix-page-column > div:nth-child(1) > div > .kix-paragraphrenderer > .kix-lineview > .kix-lineview-content > span > .goog-inline-block.kix-lineview-text-block > .kix-wordhtmlgenerator-word-node > .goog-inline-block");
           this.click(".kix-paginateddocumentplugin .kix-page.kix-page-paginated:nth-child(6) .kix-page-column > div:nth-child(1) > div > .kix-paragraphrenderer > .kix-lineview > .kix-lineview-content > span > .goog-inline-block.kix-lineview-text-block > .kix-wordhtmlgenerator-word-node > .goog-inline-block");
       },
       function fail() {
           test.assertExists(".kix-paginateddocumentplugin .kix-page.kix-page-paginated:nth-child(6) .kix-page-column > div:nth-child(1) > div > .kix-paragraphrenderer > .kix-lineview > .kix-lineview-content > span > .goog-inline-block.kix-lineview-text-block > .kix-wordhtmlgenerator-word-node > .goog-inline-block");
   });
   casper.waitForSelector("input[name='permalink_text']",
       function success() {
           test.assertExists("input[name='permalink_text']");
           this.click("input[name='permalink_text']");
       },
       function fail() {
           test.assertExists("input[name='permalink_text']");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Permalink']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Permalink']"));
           this.click(x("//a[normalize-space(text())='Permalink']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Permalink']"));
   });
   casper.waitForSelector("input[name='permalink_text']",
       function success() {
           test.assertExists("input[name='permalink_text']");
           this.click("input[name='permalink_text']");
       },
       function fail() {
           test.assertExists("input[name='permalink_text']");
   });
   casper.waitForSelector("input[name='permalink_text']",
       function success() {
           test.assertExists("input[name='permalink_text']");
           this.click("input[name='permalink_text']");
       },
       function fail() {
           test.assertExists("input[name='permalink_text']");
   });
   casper.waitForSelector(".kix-paginateddocumentplugin .kix-page.kix-page-paginated:nth-child(6) .kix-page-column > div:nth-child(1) > div > .kix-paragraphrenderer > .kix-lineview > .kix-lineview-content",
       function success() {
           test.assertExists(".kix-paginateddocumentplugin .kix-page.kix-page-paginated:nth-child(6) .kix-page-column > div:nth-child(1) > div > .kix-paragraphrenderer > .kix-lineview > .kix-lineview-content");
           this.click(".kix-paginateddocumentplugin .kix-page.kix-page-paginated:nth-child(6) .kix-page-column > div:nth-child(1) > div > .kix-paragraphrenderer > .kix-lineview > .kix-lineview-content");
       },
       function fail() {
           test.assertExists(".kix-paginateddocumentplugin .kix-page.kix-page-paginated:nth-child(6) .kix-page-column > div:nth-child(1) > div > .kix-paragraphrenderer > .kix-lineview > .kix-lineview-content");
   });
   casper.waitForSelector("form#commerce-checkout-form-checkout input[type=submit][value='Continue to next step']",
       function success() {
           test.assertExists("form#commerce-checkout-form-checkout input[type=submit][value='Continue to next step']");
           this.click("form#commerce-checkout-form-checkout input[type=submit][value='Continue to next step']");
       },
       function fail() {
           test.assertExists("form#commerce-checkout-form-checkout input[type=submit][value='Continue to next step']");
   });
   /* submit form */
   casper.waitForSelector(x("//a[@href='/accounts/2428863/applications/307879305/transactions#']"),
       function success() {
           test.assertExists(x("//a[@href='/accounts/2428863/applications/307879305/transactions#']"));
           this.click(x("//a[@href='/accounts/2428863/applications/307879305/transactions#']"));
       },
       function fail() {
           test.assertExists(x("//a[@href='/accounts/2428863/applications/307879305/transactions#']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Overview']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Overview']"));
           this.click(x("//a[normalize-space(text())='Overview']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Overview']"));
   });
   casper.waitForSelector(".form-item.form-type-radio.form-item-commerce-payment-payment-method:nth-child(4) .option",
       function success() {
           test.assertExists(".form-item.form-type-radio.form-item-commerce-payment-payment-method:nth-child(4) .option");
           this.click(".form-item.form-type-radio.form-item-commerce-payment-payment-method:nth-child(4) .option");
       },
       function fail() {
           test.assertExists(".form-item.form-type-radio.form-item-commerce-payment-payment-method:nth-child(4) .option");
   });
   casper.waitForSelector("form#commerce-checkout-form-review input[name='commerce_payment[payment_method]']",
       function success() {
           test.assertExists("form#commerce-checkout-form-review input[name='commerce_payment[payment_method]']");
           this.click("form#commerce-checkout-form-review input[name='commerce_payment[payment_method]']");
       },
       function fail() {
           test.assertExists("form#commerce-checkout-form-review input[name='commerce_payment[payment_method]']");
   });
   casper.waitForSelector("form#commerce-checkout-form-review input#html5_1dhp2viu85as29q1c38109tfc44",
       function success() {
           test.assertExists("form#commerce-checkout-form-review input#html5_1dhp2viu85as29q1c38109tfc44");
           this.click("form#commerce-checkout-form-review input#html5_1dhp2viu85as29q1c38109tfc44");
       },
       function fail() {
           test.assertExists("form#commerce-checkout-form-review input#html5_1dhp2viu85as29q1c38109tfc44");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Add Files']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Add Files']"));
           this.click(x("//a[normalize-space(text())='Add Files']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Add Files']"));
   });
   casper.waitForSelector("form#commerce-checkout-form-review input[name='extra_pane__node__1985[termsofservice]']",
       function success() {
           test.assertExists("form#commerce-checkout-form-review input[name='extra_pane__node__1985[termsofservice]']");
           this.click("form#commerce-checkout-form-review input[name='extra_pane__node__1985[termsofservice]']");
       },
       function fail() {
           test.assertExists("form#commerce-checkout-form-review input[name='extra_pane__node__1985[termsofservice]']");
   });
   casper.waitForSelector("form#commerce-checkout-form-review input[type=submit][value='Continue to next step']",
       function success() {
           test.assertExists("form#commerce-checkout-form-review input[type=submit][value='Continue to next step']");
           this.click("form#commerce-checkout-form-review input[type=submit][value='Continue to next step']");
       },
       function fail() {
           test.assertExists("form#commerce-checkout-form-review input[type=submit][value='Continue to next step']");
   });
   /* submit form */
   casper.waitForSelector("form#commerce-checkout-form-review input#html5_1dhp30uq6vlb1g8dp371ch8m6o4",
       function success() {
           test.assertExists("form#commerce-checkout-form-review input#html5_1dhp30uq6vlb1g8dp371ch8m6o4");
           this.click("form#commerce-checkout-form-review input#html5_1dhp30uq6vlb1g8dp371ch8m6o4");
       },
       function fail() {
           test.assertExists("form#commerce-checkout-form-review input#html5_1dhp30uq6vlb1g8dp371ch8m6o4");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Add Files']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Add Files']"));
           this.click(x("//a[normalize-space(text())='Add Files']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Add Files']"));
   });
   casper.waitForSelector("#o_1dhp31c9u17lksuakbh2ejj7b",
       function success() {
           test.assertExists("#o_1dhp31c9u17lksuakbh2ejj7b");
           this.click("#o_1dhp31c9u17lksuakbh2ejj7b");
       },
       function fail() {
           test.assertExists("#o_1dhp31c9u17lksuakbh2ejj7b");
   });
   casper.waitForSelector("#o_1dhp31c9u17lksuakbh2ejj7b",
       function success() {
           test.assertExists("#o_1dhp31c9u17lksuakbh2ejj7b");
           this.click("#o_1dhp31c9u17lksuakbh2ejj7b");
       },
       function fail() {
           test.assertExists("#o_1dhp31c9u17lksuakbh2ejj7b");
   });
   casper.waitForSelector("#o_1dhp31c9u17lksuakbh2ejj7b",
       function success() {
           test.assertExists("#o_1dhp31c9u17lksuakbh2ejj7b");
           this.click("#o_1dhp31c9u17lksuakbh2ejj7b");
       },
       function fail() {
           test.assertExists("#o_1dhp31c9u17lksuakbh2ejj7b");
   });
   casper.waitForSelector("form#commerce-checkout-form-review input[type=submit][value='Continue to next step']",
       function success() {
           test.assertExists("form#commerce-checkout-form-review input[type=submit][value='Continue to next step']");
           this.click("form#commerce-checkout-form-review input[type=submit][value='Continue to next step']");
       },
       function fail() {
           test.assertExists("form#commerce-checkout-form-review input[type=submit][value='Continue to next step']");
   });
   /* submit form */
   casper.waitForSelector(".main-navigation__item:nth-child(1) .main-navigation__navbar-text",
       function success() {
           test.assertExists(".main-navigation__item:nth-child(1) .main-navigation__navbar-text");
           this.click(".main-navigation__item:nth-child(1) .main-navigation__navbar-text");
       },
       function fail() {
           test.assertExists(".main-navigation__item:nth-child(1) .main-navigation__navbar-text");
   });

   casper.run(function() {test.done();});
});