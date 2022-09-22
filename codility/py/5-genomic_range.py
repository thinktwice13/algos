# https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/

def fn(S, P, Q):
    impacts = {
        'A': 1,
        'C': 2,
        'G': 3,
        'T': 4,
    }
    impact_total = []

    for i in range(len(P)):
        impact = 4  # Max possible impact
        for n in S[P[i]:Q[i]+1]:
            impact = min(impacts[n], impact)
        impact_total.append(impact)

    print(impact_total)
    return impact_total


assert fn('CAGCCTA', [2, 5, 0], [4, 5, 6]) == [2, 4, 1]