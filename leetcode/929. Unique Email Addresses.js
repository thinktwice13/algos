// https://leetcode.com/problems/unique-email-addresses/

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  return emails.reduce(
    (acc, email) =>
      acc.add(
        email
          .split('@')[0]
          .split('+')[0]
          .split('.')
          .join('')
          .concat('@')
          .concat(email.split('@')[1])
      ),
    new Set()
  ).size;
};

const emails = [
  'test.email+alex@leetcode.com',
  'test.e.mail+bob.cathy@leetcode.com',
  'testemail+david@lee.tcode.com',
];
numUniqueEmails(emails);
