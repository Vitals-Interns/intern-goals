# Ruby Classes

In Ruby, sometimes we want to group methods together to form an object. A great way to do this is to use a class! Once you have a class defined, you can create a new instance of that class and call the methods of that class on the instance using dot notation.

```ruby
class Thing

  def stuff
    puts 'Hey'
  end

  def junk
    puts 'Hi'
  end

end

thing = Thing.new

thing.stuff
# => 'Hey'

thing.junk
# => 'Hi'
```
You can initialize a class with attributes and an attribute reader.

```ruby
class Fruit

  def initialize(fruit_name, type)
    @fruit_name = fruit_name
    @type = type
  end

  def eat
    puts "This #{fruit_name} is delicious!"
  end

  attr_reader :fruit_name, :type

end

orange = Fruit.new('orange', 'citrus')

orange.fruit_name
# => 'orange'

orange.type
# => 'citrus'

orange.eat
# => 'This orange is delicious!'
```

Classes can also inherit from other classes. A child class inherits from a parent class; every method that the parent class has, the child class can also execute. If a child class has a method with the same name as a method in the parent class, the child class's method will take precedence.

```ruby
class Parent

  def initialize(first_name)
    @first_name = first_name
  end

  def last_name
    'Butler'
  end

  def speak
    "I'm an adult!"
  end

  attr_accessor :first_name

end

class Child < Parent

  def speak
    "I'm a kid!"
  end

  def cry
    'Waaah!'
  end

end

parent = Parent.new('Gerald')

parent.first_name
# => 'Gerald'

parent.speak
# => "I'm an adult!"

parent.cry
# => undefined method error

child = Child.new('Bobby')

child.first_name
# => 'Bobby'

child.last_name
# => 'Butler'

child.speak
# => "I'm a kid!"

child.cry
# => 'Waaah!'
```

## HappiTails

Congrats! You are the manager at an animal shelter, and you need to manage your shelter by storing and manipulating information about animals.

1. Touch a new file called `happy_tails.rb`.

2. In the file, create an `Animal` class.
  - An animal should initialize with a name and a species.
  - An animal should have a random cleanliness attribute from 0-100 (i.e. 0-clean 100-dirty).
  - An animal should have a string representation of that cleanliness attribute (e.g. 'Super Dirty', 'Squeaky Clean', 'Kinda Dirty', etc.)
  - An animal can have multiple toys, but doesn't start with any.
  - An animal should be able to get a new toy.
  - An animal should be able to destroy a toy.
  - An animal should have a string status that accounts for its name, species, cleanliness, and toys.

3. Under the `Animal` class, create a `Shelter` class.
  - A shelter should have a name.
  - A shelter can have multiple animals, but it doesn't start with any.
  - A shelter should be able to take in an animal.
  - A shelter should be able to give away a specified animal.
  - A shelter should be able to display all of its animals and their respective statuses.

4. Underneath both classes, write code to create a new shelter instance, and three new animals.

5. Programmatically add your animals to the shelter you created.

6. Test all of your methods and make sure that they work!
