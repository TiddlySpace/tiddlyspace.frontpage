var casper = require('casper').create({
    verbose: true,
    logLevel: "debug"
});

casper.start('http://localhost:8080/frontpage.html', function thenCheckThePageIsCorrect() {

    this.test.assertTitle('tiddlyspace - bring your thoughts to life', 'frontpage title is the one expected');
});

casper.then(function checkTheUserIsLoggedIn() {

    this.test.assertTextExists('Welcome back ts-test-bot!', 'test user is logged in');
});

casper.then(function checkTheRegistrationFormIsNotPresent() {

    this.test.assertNotVisible('form.ts-registration', 'registration form is not visible when user is logged in');
});

casper.run(function() {

    this.test.done(3);
    this.test.renderResults(true);
});