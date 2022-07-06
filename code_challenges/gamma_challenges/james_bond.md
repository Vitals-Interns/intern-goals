# Bonding with Data

```ruby
bond_films = [
  { title: "Skyfall", year: 2012, actor: "Daniel Craig", gross: "$1,108,561,008" },
  { title: "Thunderball", year: 1965, actor: "Sean Connery", gross: "$1,014,941,117" },
  { title: "Goldfinger", year: 1964, actor: "Sean Connery", gross: "$912,257,512" },
  { title: "Live and Let Die", year: 1973, actor: "Roger Moore", gross: "$825,110,761" },
  { title: "You Only Live Twice", year: 1967, actor: "Sean Connery", gross: "$756,544,419" },
  { title: "The Spy Who Loved Me", year: 1977, actor: "Roger Moore", gross: "$692,713,752" },
  { title: "Casino Royale", year: 2006, actor: "Daniel Craig", gross: "$669,789,482" },
  { title: "Moonraker", year: 1979, actor: "Roger Moore", gross: "$655,872,400" },
  { title: "Diamonds Are Forever", year: 1971, actor: "Sean Connery", gross: "$648,514,469" },
  { title: "Quantum of Solace", year: 2008, actor: "Daniel Craig", gross: "$622,246,378" },
  { title: "From Russia with Love", year: 1963, actor: "Sean Connery", gross: "$576,277,964" },
  { title: "Die Another Day", year: 2002, actor: "Pierce Brosnan", gross: "$543,639,638" },
  { title: "Goldeneye", year: 1995, actor: "Pierce Brosnan", gross: "$529,548,711" },
  { title: "On Her Majesty's Secret Service", year: 1969, actor: "George Lazenby", gross: "$505,899,782" },
  { title: "The World is Not Enough", year: 1999, actor: "Pierce Brosnan", gross: "$491,617,153" },
  { title: "For Your Eyes Only", year: 1981, actor: "Roger Moore", gross: "$486,468,881" },
  { title: "Tomorrow Never Dies", year: 1997, actor: "Pierce Brosnan", gross: "$478,946,402" },
  { title: "The Man with the Golden Gun", year: 1974, actor: "Roger Moore", gross: "$448,249,281" },
  { title: "Dr. No", year: 1962, actor: "Sean Connery", gross: "$440,759,072" },
  { title: "Octopussy", year: 1983, actor: "Roger Moore", gross: "$426,244,352" },
  { title: "The Living Daylights", year: 1987, actor: "Timothy Dalton", gross: "$381,088,866" },
  { title: "A View to a Kill", year: 1985, actor: "Roger Moore", gross: "$321,172,633" },
  { title: "License to Kill", year: 1989, actor: "Timothy Dalton", gross: "$285,157,191" }
]
```

## Level 1: Agent (power weapons, facility)

### Write methods that return the following:

1. Given a title, the year the film was released.

```ruby
# write your code here
```

2. Given a title, the starring actor of that film.

```ruby
# write your code here
```

3. Given a year, a hash with the title of the film released, the amount earned, and the starring actor.

Example output given 1999 as the input:
```
{
  title: "The World is Not Enough",
  actor: "Pierce Brosnan",
  gross: "$491,617,153"
}
```

```ruby
# write your code here
```

## Level 2: Secret Agent (remote mines, archives)

### Write methods to evaluate the following:

1. Given two titles, the difference between the years the films were released.

```ruby
# write your code here
```

2. Given two titles, the combined value of the years the films were released.

```ruby
# write your code here
```

3. Given the filmography, determine the total culumative gross of the entire franchise.

```ruby
# write your code here
```

4. Given the filmography, output a new array with the names of the all actors who have ever played Bond, but with no duplicates. (One Roger Moore is more than enough.)

```ruby
# write your code here
```

5. Given the filmography, output a new array with the names of the Bond films.

```ruby
# write your code here
```

6. Given the filmography, output a new array of the titles of only the Bond films released on odd-numbered years.

```ruby
# write your code here
```

7. Given the filmography, output a new array of the titles all Bond films released after 1980.

```ruby
# write your code here
```

## Level 3: Undercover Agent (top secret access, realistic masks)

1. Given the filmography, identify the actor who starred in the fewest films.

```ruby
# write your code here
```

2. Given the filmography, return the title of the highest grossing film.

```ruby
# write your code here
```

3. Given the filmography, return the title of the lowest grossing film.

```ruby
# write your code here
```

4. Given the filmography, output a new array where each value in the array is a hash displaying the actor and the number of films (e.g. `{ "Daniel Craig" => 3 }` )

```ruby
# write your code here
```
