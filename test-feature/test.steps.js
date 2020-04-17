import { defineFeature, loadFeature } from 'jest-cucumber';
 
const feature = loadFeature('./test-feature/test.feature');
 
defineFeature(feature, test => {
  test('Launching a SpaceX rocket', ({ given, when, then }) => {
 
    given('I am Elon Musk attempting to launch a rocket into space', () => {
        console.log("testing given....")
    });
 
    when('I launch the rocket', () => {
        console.log("testing when....");
        expect(true).toBe(true);
    });
 
    then('the rocket should end up in space', () => {
        console.log("testing then....")
        expect(true).toBe(true);
    });
  });
});