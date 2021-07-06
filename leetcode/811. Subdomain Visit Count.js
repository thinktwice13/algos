// https://leetcode.com/problems/subdomain-visit-count/

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const hash = new Map();

  for (const cpd of cpdomains) {
    const [count, domain] = cpd.split(' ');

    domain.indexOf('.', 0);

    hash.set(domain, (hash.get(domain) || 0) + Number(count));

    let startIdx = 0;
    while (startIdx > -1) {
      startIdx = domain.indexOf('.', startIdx);
      if (startIdx > -1) {
        const parentDomain = domain.slice(startIdx + 1);
        hash.set(parentDomain, (hash.get(parentDomain) || 0) + Number(count));
        startIdx++;
      }
    }
  }

  return Array.from(hash, ([domain, count]) => `${count} ${domain}`);
};

const cpdomains = ['9001 discuss.leetcode.com'];
subdomainVisits(cpdomains);
