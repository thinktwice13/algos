package grokking

import "testing"

// Do is a set-covering example from grokking algorithms with radio stations and states
// Radio stations are set up in different states and we want to find the minimum number of stations to cover all states
func Do() {
	statesNeeded, stations := setup()
	finalStations := make(map[string]bool)

	for len(statesNeeded) > 0 {
		bestStation := ""
		statesCovered := make(map[string]bool)

		for station, states := range stations {
			covered := make(map[string]bool)
			for state := range states {
				if _, ok := statesNeeded[state]; ok {
					covered[state] = true
				}
			}

			if len(covered) > len(statesCovered) {
				bestStation = station
				statesCovered = covered
			}
		}

		for state := range statesCovered {
			delete(statesNeeded, state)
		}

		finalStations[bestStation] = true
	}

	for station := range finalStations {
		println(station)
	}
}

func setup() (map[string]bool, map[string]map[string]bool) {
	statesNeeded := map[string]bool{
		"mt": true,
		"wa": true,
		"or": true,
		"id": true,
		"nv": true,
		"ut": true,
		"ca": true,
		"az": true,
	}

	stations := map[string]map[string]bool{
		"kone": map[string]bool{
			"id": true,
			"nv": true,
			"ut": true,
		},
		"ktwo": map[string]bool{
			"wa": true,
			"id": true,
			"mt": true,
		},
		"kthree": map[string]bool{
			"or": true,
			"nv": true,
			"ca": true,
		},
		"kfour": map[string]bool{
			"nv": true,
			"ut": true,
		},
		"kfive": map[string]bool{
			"ca": true,
			"az": true,
		},
	}

	return statesNeeded, stations
}

func TestDo(t *testing.T) {
	Do()
}
