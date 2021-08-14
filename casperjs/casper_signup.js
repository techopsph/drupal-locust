/*==============================================================================*/
/* Casper generated Fri Aug 09 2019 01:08:45 GMT+0800 (Philippine Standard Time) */
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
   casper.waitForSelector(x("//a[normalize-space(text())='Contact Us']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Contact Us']"));
           this.click(x("//a[normalize-space(text())='Contact Us']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Contact Us']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())=concat('Professional Master',\"'\",'s Degree in Applied Systems Engineering')]"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())=concat('Professional Master',\"'\",'s Degree in Applied Systems Engineering')]"));
           this.click(x("//a[normalize-space(text())=concat('Professional Master',\"'\",'s Degree in Applied Systems Engineering')]"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())=concat('Professional Master',\"'\",'s Degree in Applied Systems Engineering')]"));
   });
   casper.waitForSelector(".form-item.form-type-checkbox.form-item-field-ef-sign-up-und .checkbox-label-wrapper",
       function success() {
           test.assertExists(".form-item.form-type-checkbox.form-item-field-ef-sign-up-und .checkbox-label-wrapper");
           this.click(".form-item.form-type-checkbox.form-item-field-ef-sign-up-und .checkbox-label-wrapper");
       },
       function fail() {
           test.assertExists(".form-item.form-type-checkbox.form-item-field-ef-sign-up-und .checkbox-label-wrapper");
   });
   casper.waitForSelector("form#pmase-entityform-entityform-edit-form input[name='field_ef_sign_up[und]']",
       function success() {
           test.assertExists("form#pmase-entityform-entityform-edit-form input[name='field_ef_sign_up[und]']");
           this.click("form#pmase-entityform-entityform-edit-form input[name='field_ef_sign_up[und]']");
       },
       function fail() {
           test.assertExists("form#pmase-entityform-entityform-edit-form input[name='field_ef_sign_up[und]']");
   });
   casper.waitForSelector("form#pmase-entityform-entityform-edit-form input[name='field_ef_first_name[und][0][value]']",
       function success() {
           test.assertExists("form#pmase-entityform-entityform-edit-form input[name='field_ef_first_name[und][0][value]']");
           this.click("form#pmase-entityform-entityform-edit-form input[name='field_ef_first_name[und][0][value]']");
       },
       function fail() {
           test.assertExists("form#pmase-entityform-entityform-edit-form input[name='field_ef_first_name[und][0][value]']");
   });
   casper.waitForSelector("input[name='field_ef_first_name[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_ef_first_name[und][0][value]']", "Eladio");
       },
       function fail() {
           test.assertExists("input[name='field_ef_first_name[und][0][value]']");
   });
   casper.waitForSelector("input[name='field_ef_last_name[und][0][value]']",
       function success() {
           this.sendKeys("input[name='field_ef_last_name[und][0][value]']", "Abquina");
       },
       function fail() {
           test.assertExists("input[name='field_ef_last_name[und][0][value]']");
   });
   casper.waitForSelector("input[name='field_ef_email[und][0][email]']",
       function success() {
           this.sendKeys("input[name='field_ef_email[und][0][email]']", "eladio@pantheon.io");
       },
       function fail() {
           test.assertExists("input[name='field_ef_email[und][0][email]']");
   });
   casper.waitForSelector("form#pmase-entityform-entityform-edit-form input[name='field_ef_sign_me_up_info[und]']",
       function success() {
           test.assertExists("form#pmase-entityform-entityform-edit-form input[name='field_ef_sign_me_up_info[und]']");
           this.click("form#pmase-entityform-entityform-edit-form input[name='field_ef_sign_me_up_info[und]']");
       },
       function fail() {
           test.assertExists("form#pmase-entityform-entityform-edit-form input[name='field_ef_sign_me_up_info[und]']");
   });
   casper.waitForSelector("form#pmase-entityform-entityform-edit-form input[type=submit][value='Submit']",
       function success() {
           test.assertExists("form#pmase-entityform-entityform-edit-form input[type=submit][value='Submit']");
           this.click("form#pmase-entityform-entityform-edit-form input[type=submit][value='Submit']");
       },
       function fail() {
           test.assertExists("form#pmase-entityform-entityform-edit-form input[type=submit][value='Submit']");
   });
   /* submit form */

   casper.run(function() {test.done();});
});