
def fn(A):
    purchase, sale, max_profit = A[0], A[0], 0
    for day in range(1,len(A)):
        price = A[day]
        if price < purchase:
            # Start a new slice when lowest prce found
            purchase = price
            sale = price
        else:
            if price > sale:
                # Increase current slice profit when highest price found
                sale = price
            # Update max_profit, Compare with current slice
            max_profit = max(max_profit, sale - purchase)

    return max_profit


assert fn([23171, 21011, 21123, 21366, 21013, 21367]) == 356


