// const assert = require('chai').assert;
import { assert } from 'chai';
import { Astrologer, allocateUsersToAstrologers }  from '../algorithm.js';

describe('Flow Distribution Algorithm', () => {
  it('should distribute users evenly among astrologers', () => {
    const users = Array(100).fill({});
    const astrologers = [
      new Astrologer(1, 'Astrologer 1'),
      new Astrologer(2, 'Astrologer 2'),
      new Astrologer(3, 'Astrologer 3')
    ];

    const result = allocateUsersToAstrologers(users, astrologers);
    assert.strictEqual(result[0].flow, 34);
  });

  it('should give top astrologers more users based on multiplier', () => {
    const users = Array(100).fill({});
    const astrologers = [
      new Astrologer(1, 'Astrologer 1', true, 2),
      new Astrologer(2, 'Astrologer 2'),
      new Astrologer(3, 'Astrologer 3')
    ];

    const result = allocateUsersToAstrologers(users, astrologers);
    assert.isAbove(result[0].flow, result[1].flow);
  });
});
