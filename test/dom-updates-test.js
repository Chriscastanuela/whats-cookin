const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
import DomUpdates from '../src/dom-updates';

chai.use(spies);

// insertAdjacentHTML = {}

describe('DomUpdates', () => {
  let domUpdates;
  beforeEach(() => {
    domUpdates = new DomUpdates();
    chai.spy.on(domUpdates, [
      'viewFavorites',
      'greetUser', 
      'favoriteCard',
      'cardButtonConditionals',
      'displayDirections',
      'getFavorites',
      'populateCards'
    ], () => true);
  });

  afterEach(() => {
    chai.spy.restore(domUpdates);
  });

  it('viewFavorites', () => {
    domUpdates.viewFavorites();
    expect(domUpdates.viewFavorites).to.have.been.called(1);
  });

  it('greetUser', () => {
    domUpdates.greetUser();
    expect(domUpdates.greetUser).to.have.been.called(1);

  });

  it('favoriteCard', () => {
    domUpdates.favoriteCard();
    expect(domUpdates.favoriteCard).to.have.been.called(1);
  });

  it('cardButtonConditionals', () => {
    domUpdates.cardButtonConditionals();
    expect(domUpdates.cardButtonConditionals).to.have.been.called(1);
  });

  it('displayDirections', () => {
    domUpdates.displayDirections();
    expect(domUpdates.displayDirections).to.have.been.called(1);
  });

  it('getFavorites', () => {
    domUpdates.getFavorites();
    expect(domUpdates.getFavorites).to.have.been.called(1);
  });

  it('populateCards', () => {
    domUpdates.populateCards();
    expect(domUpdates.populateCards).to.have.been.called(1);
  });
});