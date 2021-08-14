/*==============================================================================*/
/* Casper generated Sun Apr 07 2019 00:16:31 GMT+0800 (Philippine Standard Time) */
/*==============================================================================*/

var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1920, height: 845};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('http://dev-mapinas.pantheonsite.io/');
   casper.waitForSelector(x("//a[normalize-space(text())='Log in']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Log in']"));
           this.click(x("//a[normalize-space(text())='Log in']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Log in']"));
   });
   casper.waitForSelector("form input[name='name']",
       function success() {
           test.assertExists("form input[name='name']");
           this.click("form input[name='name']");
       },
       function fail() {
           test.assertExists("form input[name='name']");
   });
   casper.waitForSelector("input[name='name']",
       function success() {
           this.sendKeys("input[name='name']", "admin");
       },
       function fail() {
           test.assertExists("input[name='name']");
   });


   /* submit form */
   casper.waitForSelector("#main",
       function success() {
           test.assertExists("#main");
           this.click("#main");
       },
       function fail() {
           test.assertExists("#main");
   });
   
   casper.waitForSelector("form input[name='pass']",
       function success() {
           test.assertExists("form input[name='pass']");
           this.click("form input[name='pass']");
       },
       function fail() {
           test.assertExists("form input[name='pass']");
   });
   casper.waitForSelector("input[name='pass']",
       function success() {
           this.sendKeys("input[name='pass']", "Admin1234~");
       },
       function fail() {
           test.assertExists("input[name='pass']");
   });
   
   casper.wait(2000, function() {
    this.echo("I've waited for 2 second.");
   });

   casper.waitForSelector("form input[type=submit][value='Log in']",
       function success() {
           test.assertExists("form input[type=submit][value='Log in']");
           this.click("form input[type=submit][value='Log in']");
       },
       function fail() {
           test.assertExists("form input[type=submit][value='Log in']");
   });
   /* submit form */
   casper.waitForSelector("#main",
       function success() {
           test.assertExists("#main");
           this.click("#main");
       },
       function fail() {
           test.assertExists("#main");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='Home']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Home']"));
           this.click(x("//a[normalize-space(text())='Home']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Home']"));
   });
   casper.waitForSelector(x("//a[normalize-space(text())='POI']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='POI']"));
           this.click(x("//a[normalize-space(text())='POI']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='POI']"));
   });

   casper.run(function() {test.done();});
});