package golang

import "math"

// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/flags/
func placeFlags(A []int) int {
	// most mf we could possibly take is sqrt(lastPeak - firstPeak)
	// start with that number and try to set the mf. If it does not work, lower the number of mf

	// find peaks
	// if < 3, that's also the result
	ps := peaks(A)
	if len(ps) < 3 {
		return len(ps)
	}

	mf := maxFlags(ps)

	// start with the maximum number of mf and try to set them all
	// on failure, lower the possible number of mf
	for {
		if mf == 0 {
			return 0
		}

		// always start with planting first flag at the first peak and search firther
		// position is valid if mf further than previous lastPlantedIdx flag
		flagsLeft := mf - 1
		lastPlantedIdx := 0
		for p := 1; p < len(ps); p++ {
			if ps[p] >= ps[lastPlantedIdx]+mf {
				// awesome, plant it
				lastPlantedIdx = p
				flagsLeft--
			}
		}

		if flagsLeft < 1 {
			// great, all lastPlantedIdx. We're done
			return mf
		}

		// didn't work. Try with fewer flags
		mf--
	}
}

func maxFlags(ps []int) interface{} {
	// maximum we could plant is sqrt of distance between first and last peak plus 1
	return 1 + int(math.Floor(math.Sqrt(float64(ps[len(ps)-1]-ps[0]))))
}

func peaks(a []int) []int {
	// find all ps indexes
	var ps []int
	// first and last position are never ps
	for pos := 1; pos < len(A)-1; pos++ {
		alt := A[pos]
		// is this is a peak?
		if alt > A[pos-1] && alt > A[pos+1] {
			ps = append(ps, pos)
		}
	}

	return ps
}
