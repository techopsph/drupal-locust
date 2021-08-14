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
   casper.start('https://live-proupnetic.pantheonsite.io');
   casper.waitForSelector(x("//a[normalize-space(text())='Login']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Login']"));
           this.click(x("//a[normalize-space(text())='Login']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Login']"));
   });
   casper.waitForSelector("form[name=loginform] input[name='log']",
       function success() {
           test.assertExists("form[name=loginform] input[name='log']");
           this.click("form[name=loginform] input[name='log']");
       },
       function fail() {
           test.assertExists("form[name=loginform] input[name='log']");
   });
   casper.waitForSelector("form[name=loginform] input[name='pwd']",
       function success() {
           test.assertExists("form[name=loginform] input[name='pwd']");
           this.click("form[name=loginform] input[name='pwd']");
       },
       function fail() {
           test.assertExists("form[name=loginform] input[name='pwd']");
   });
   casper.waitForSelector("form[name=loginform] input[type=submit][value='Log In']",
       function success() {
           test.assertExists("form[name=loginform] input[type=submit][value='Log In']");
           this.click("form[name=loginform] input[type=submit][value='Log In']");
       },
       function fail() {
           test.assertExists("form[name=loginform] input[type=submit][value='Log In']");
   });
   /* submit form */
   
   casper.thenOpen('https://live-proupnetic.pantheonsite.io/my-courses', function() {});
   casper.thenOpen('https://live-proupnetic.pantheonsite.io/courses/sexual-harassment-prevention-training-california-supervisors/', function() {});
   casper.thenOpen('https://live-proupnetic.pantheonsite.io/lessons/sexual-harassment-in-the-workplace-ca-sup/', function() {});
   
   casper.thenOpen('https://live-proupnetic.pantheonsite.io/quizzes/sexual-harassment-in-the-workplace-ca-sup/', function() {

        casper.waitForSelector("input[name='question_86_355']",
            function success() {
                test.assertExists("input[name='question_86_355']");
                this.click("input[name='question_86_355']");
            },
            function fail() {
                test.assertExists("input[name='question_86_355']");
        });
        casper.waitForSelector("input[name='question_86_356']",
            function success() {
                test.assertExists("input[name='question_86_356']");
                this.click("input[name='question_86_356']");
            },
            function fail() {
                test.assertExists("input[name='question_86_356']");
        });
        casper.waitForSelector("input[name='question_86_357']",
            function success() {
                test.assertExists("input[name='question_86_357']");
                this.click("input[name='question_86_357']");
            },
            function fail() {
                test.assertExists("input[name='question_86_357']");
        });
        casper.waitForSelector("input[name='question_86_357']",
            function success() {
                test.assertExists("input[name='question_86_357']");
                this.click("input[name='question_86_357']");
            },
            function fail() {
                test.assertExists("input[name='question_86_357']");
        });
        casper.waitForSelector(".wpProQuiz_listItem:nth-child(3) .wpProQuiz_questionListItem:nth-child(1) label",
            function success() {
                test.assertExists(".wpProQuiz_listItem:nth-child(3) .wpProQuiz_questionListItem:nth-child(1) label");
                this.click(".wpProQuiz_listItem:nth-child(3) .wpProQuiz_questionListItem:nth-child(1) label");
            },
            function fail() {
                test.assertExists(".wpProQuiz_listItem:nth-child(3) .wpProQuiz_questionListItem:nth-child(1) label");
        });
        casper.waitForSelector("input[name='question_86_357']",
            function success() {
                test.assertExists("input[name='question_86_357']");
                this.click("input[name='question_86_357']");
            },
            function fail() {
                test.assertExists("input[name='question_86_357']");
        });
        casper.waitForSelector("input[type=button][value='Finish Quiz']",
            function success() {
                test.assertExists("input[type=button][value='Finish Quiz']");
                this.click("input[type=button][value='Finish Quiz']");
            },
            function fail() {
                test.assertExists("input[type=button][value='Finish Quiz']");
        });
        casper.waitForSelector("input[type=button][value='View questions']",
            function success() {
                test.assertExists("input[type=button][value='View questions']");
                this.click("input[type=button][value='View questions']");
            },
            function fail() {
                test.assertExists("input[type=button][value='View questions']");
        });
        casper.waitForSelector(x("//a[normalize-space(text())='User Management']"),
            function success() {
                test.assertExists(x("//a[normalize-space(text())='User Management']"));
                this.click(x("//a[normalize-space(text())='User Management']"));
            },
            function fail() {
                test.assertExists(x("//a[normalize-space(text())='User Management']"));
        });
        casper.waitForSelector(x("//a[normalize-space(text())='Course Management']"),
            function success() {
                test.assertExists(x("//a[normalize-space(text())='Course Management']"));
                this.click(x("//a[normalize-space(text())='Course Management']"));
            },
            function fail() {
                test.assertExists(x("//a[normalize-space(text())='Course Management']"));
        });
    });


    casper.run(function() {test.done();});

});

