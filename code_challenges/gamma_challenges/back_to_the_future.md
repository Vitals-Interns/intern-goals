# Back to the Future

> **Marty McFly**: Wait a minute, Doc. Ah... Are you telling me you built a time machine... out of a DeLorean?

> **Dr. Emmett Brown**: The way I see it, if you're gonna build a time machine into a car, why not do it with some style?

A fantastic voyage through the world of time-traveling vehicles of different sorts and the wacky men and ladies who love them.

## Format

> Last night, Darth Vader came down from planet Vulcan and told me that if I didn't take Lorraine out that he'd melt my brain.

**Do it right, y'all**:

- Create all of your Classes in files named after the Class, but in snake case. For example:

File names:
```
vehicle.rb
car.rb
```
In `vehicle.rb`:
```ruby
class Vehicle
  # code
end
```

- Do not read ahead! Always do what is asked of you in the given line or bullet point *only*! Run your code in Ruby or Pry to check that it works.

- Requiring files: Remember to keep all your files in one directory and require them as needed at the top of your files, like so:
```ruby
  require './vehicle.rb'
  require './car.rb'
```
- Make a new PR for each section, and don't move onto the next section until the PR is merged.

## Prologue

> Lorraine, my density has brought me to you...

1. Let's create our world. Make a `back_to_the_future` directory in your `gamma_challenges` directory.

2. In this new directory, create a file called `back_to_the_future.rb` that will require all of your classes (see above) and runs your program. You can add `require 'pry'` at the top of this file.

We need to populate our world with some objects. In particular, we need some **vehicles**.

3. In a `vehicle.rb` file, create a new class, `Vehicle`.
- Vehicles are initialized with a `description` attribute.
- Vehicles also have an attribute `passengers`. (*Hint: it's an empty array.*)
- Vehicles have an attribute `capacity`, which is the maximum number of passengers they can have (and is set at initialization)... Except!...
- Vehicles can *actually* have MORE passengers than capacity! Take that *Safety School*!
- However, the class also responds to the question `#in_danger?`, which is true when there are more passengers than `capacity`!
- The vehicle can `#add_passenger`, which takes a new passenger and adds it to the list.
- Finally, vehicles can *go*:
- They have an attribute `location`, that also needs to be set upon initialization,
- They have a method `#go_to` that takes an argument and sets it as the `location`, returning a descriptive line, and...
- They can't go unless there is at least one passenger!

Run your class through this test code to ensure it works right!

```ruby
v1 = Vehicle.new('horse and buggy', 4, 'Burton, OH')
v1.description
#=> "horse and buggy"
v1.passengers
#=> []
v1.go_to('the barn dance!')
#=> "This horse and buggy is empty!"
v1.location
#=> "Burton, OH"
v1.add_passenger('Jacob Miller')
v1.add_passenger('John Miller')
v1.add_passenger('Isaac Miller')
v1.add_passenger('Mark Yoder')
v1.in_danger?
#=> false
v1.passengers
#=> ['Jacob Miller','John Miller','Isaac Miller','Mark Yoder']
v1.add_passenger('Sarah Hershberger')
v1.in_danger?
#=> true
v1.go_to('the barn dance!')
#=> "The horse and buggy is off to the barn dance!"

v2 = Vehicle.new('skateboard', 1, 'Asbury Park, NJ')
v2.add_passenger('Jerry Viatelli')
v2.go_to('the Boardwalk') # to grind...
v2.location
#=> the Boardwalk
v2.add_passenger('Marky Longello')
v2.in_danger?
#=> true
```

## Part 1: Simple Inheritance and Overriding
> Nobody calls me... *chicken*!

1. In `train.rb`, create a `Train` class that inherits from `Vehicle`. (Remember to require `vehicle.rb` at the top of the file!)
- When you `#pull_the_rope` on the train, it goes: `"Woo woooo!"`

```ruby
orient_express = Train.new('passenger train', 100, 'Istanbul')
orient_express.pull_the_rope
#=> Woo woooo!
```

2. In `skateboard.rb`, create a `Skateboard` class that inherits from `Vehicle`.
- Let's make it easy to initialize our Skateboards: all of them will have a capacity of **1**. (*Does this mean we have to rewrite, aka __override__, the super-class `Vehicle`'s initialize method?!*)
- **NOTE**: you can call overriden methods (in the super-class) from the sub-class by using the keyword `super`! For example, you can call the method `Vehicle#initialize` in `Skateboard` by writing `super(...)`!
- Skateboards are special because you can grind and do kickflips! Add the behaviors (which only work when there is a passenger!):
- `#grind`, no params, returns "khkhkhkhkh klunck khkh"
- `#kickflip`, no params, returns "Rad! I can kickflip!"
- `#goofy?` (no params) returns whether or not the passenger is riding it goofy-footed, and `#goofy=` (a boolean) sets this
- the `goofy` attribute is `false` by default
- Optionally, have the description now refer to the skateboard as a `"#{@description} skateboard"`.

```ruby
my_sweet_deck = Skateboard.new('SantaCruz™', 'Washington Square Park')
my_sweet_deck.grind
#=> "This Santa Cruz skateboard is empty!"
my_sweet_deck.add_passenger('PJ')
my_sweet_deck.goofy?
#=> false
my_sweet_deck.goofy = true
my_sweet_deck.goofy?
#=> true
my_sweet_deck.grind
#=> "khkhkhkhkh klunck khkh"
my_sweet_deck.kickflip
#=> "Rad! I can kickflip!"
my_sweet_deck.go_to('Chelsea Piers')
```

3. In `bicycle.rb`, create a `Bicycle` class that inherits from `Vehicle`.
- Bikes are cool, but they are *super* dangerous!
- Override the super-class (`Vehicle`) methods, so that you have a capacity of **2** always.
- The passenger limit is enforced (you can't add more than 2 passengers)!
- Whenever you have 2 passengers, `#in_danger?` returns true!
- One-half of the time (`rand < 0.5`) that you are in danger and attempt to `#go_to` somewhere, you don't go there and instead return the String "Crash!!"
- When you crash, you lose all of your passengers!

```ruby
hot_ride = Bicycle.new('Huffy', 'Milwaukee, WI')
hot_ride.add_passenger('Travis')
hot_ride.add_passenger('Taryn') # pegs!
hot_ride.in_danger?
#=> true
hot_ride.go_to('Rich\'s Restaurant')
#=> "Crash!!"
hot_ride.passengers
#=> []
```

Final question: was it even smart to inherit the `Bicycle` from the `Vehicle` class?

## Part 2: Complex Inheritance
> No, no, no, no, no, this sucker's electrical, but I need a nuclear reaction to generate the 1.21 gigawatts!

1. Define a `Car` class. This class should inherit from the `Vehicle` class.
- Its `initialize` method should take 5 arguments and set them to instance variables.
- `capacity` (same as `Vehicle`)
- `year_produced`
- `make`
- `model`
- `color`
- `location` (same as `Vehicle`)
- `initialize` should also assign a `passengers` instance variable to an empty array  (same as Vehicle), and override the `description` getter to return:
- `"#{color} #{year_produced} #{make} #{model}"`
- Assign a `fuel` instance variable to false by default.
- Write a setter method for `color`.
- Write getters for all of the instance variables assigned in the initialize method.
- Write an **instance method** called `refuel` that:
- changes the the fuel instance variable to `true` if the value is currently `false`, and...
- Returns the string `"No need to top off!"` if the fuel value is currently `true`.
- Override the `#go_to` method so that returns `false` if there is no fuel, and should deplete the fuel whenever you succesfully go anywhere (ie, set `fuel` to false, if you need it spelled out). Otherwise it should act the same as it always did!

```ruby
delorean = Car.new(2, 1981, 'DeLorean', 'DMC-12', 'gray', 'Hill Valley')
delorean.add_passenger('Marty McFly')
delorean.refuel
delorean.go_to('the dance')
#=> "You're now at the dance."
```
