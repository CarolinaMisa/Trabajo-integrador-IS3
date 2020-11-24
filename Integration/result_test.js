Feature('Result');

Scenario('Checking results', ({ I }) => {
    I.amOnPage('https://tp-result.herokuapp.com/');
    I.see(CATS);
    I.see(DOGS);

});

// npx codeceptjs run --steps
