Feature('github');

Scenario('I choose dogs', ({ I }) => {
    I.anOnPage('https://tp-vote.herokuapp.com/');
    I.see('Cats');
    I.see('Dogs');
    I.seeElement('//*[@id="a"]');
    I.seeElement('//*[@id="b"]');
});

