var casper = require('casper').create({
    verbose: true,
    logLevel: "debug"
});

casper.start('http://localhost:8080/frontpage.html', function thenCheckThePageIsCorrect() {

    this.test.assertTitle('tiddlyspace - bring your thoughts to life', 'frontpage title is the one expected');
});

casper.then(function checkThereIsNoUserIsLoggedIn() {

    this.test.assertVisible('a.loginlink', 'no user is logged in');
});

casper.then(function checkTheRegistrationFormIsPresent() {

    this.test.assertVisible('form.ts-registration', 'regisration form is visible when no user is logged in');
});

casper.run(function() {

    this.test.done(3);
    this.test.renderResults(true);
});