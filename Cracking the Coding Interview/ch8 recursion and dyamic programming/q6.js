// Towers of Hanoi

// Use JS array as Stack and the end (pop & push)
const moveDisks = (orig, dest = [], aux = [], disk = orig.length) => {
  if (!disk) return;

  // Move smaller part of the pyramid first. Use aux as dest
  moveDisks(orig, aux, dest, disk - 1)

  dest.push(orig.pop())

  // Move rest of the disks
  moveDisks(aux, dest, orig, disk - 1)

  return { orig, dest }
}

// TEST
const o = [4,3,2,1]
const towers = moveDisks(o)


