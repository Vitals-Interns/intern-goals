# The Basics

Answer the questions below. Feel free to use this [markdown cheat sheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) to help with formatting!

## Question 1

```ruby
a = 5
b = 4
a = b
```

At the end of this program, what are the values of a and b? Try to explain, in plain English, how you got your answer for each one.

**Answer 1:**
At the end of this program, the value of a and b is 4. This is because a is assigned to 5, and then b is assigned to 4, but at the last line, a is assigned to the value of b, which is 4. This means that a=b will return 4.

## Question 2

```ruby
e = 3
f = 9
g = e + f
f == g
e = 3
```

At the end of this program, what are the values of e, f, and g? Try to explain, in plain English, how you got your answer for each one.

**Answer 2:**
By the end of the program, the value of e is 3. This is because e is only assigned to 3 and vice versa throughout the program. By the end of the program, the value of f is 9. This can be explained with the same reasoning as e = 3. By the end of the program, the value of g is 12. This is because the variables f and e are assigned to 9 and 3, and because they're being added to each other to equal g, 9 + 3 = 12. Thus, g = 12.

## Question 3

```ruby
weather = "cloudy"
weather == "cloudy"
```

What is the difference between these two statements? Explain your answer.

**Answer 3:**
The difference between these two statements is that the first is assignment of the variable, weather, to the string, "cloudy". The second is a boolean, where the variable weather is being compared to the string "cloudy" to assess whether the statement is true or false. Because weather was assigned to cloudy in the first statement, the second statment is a true statement.

## Question 4

```ruby
x = 2

if x == 3
  puts "sushi is tasty"
elsif x > 0
  puts "sushi is delicious"
end
```

Imagine that you take the code from this question, save it to a file called `sushi.rb`, and run `ruby sushi.rb` in your Terminal.

What would be the output? Explain your answer.

**Answer 4:**


## Question 5

```ruby
food = "walnut"

if food == "walnut"
  puts "I'm allergic!"
end
```

If you ran this code, what would be the output? Explain your answer.

**Answer 5:**


## Question 6

```ruby
  a = "4" + 10
```

What would happen here and why? How should I change this code to get an output of 14?

**Answer 6:**


## Question 7

```ruby
 turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"]
```

What is the index value of "Michelangelo"?

**Answer 7:**


## Questions 8

```ruby
 jurassic_park = { "T-Rex" => 1, "Triceratops" => 4, "Velociraptors" => 6, "Humans" => ["Dr. Malcolm", "Dr. Grant"] }
```

* In Ruby, write code to access access the number of "Triceratops" in `jurassic_park`.

**Answer 8A:**
```ruby
# write your code here
```

* In Ruby, write code to add "Dr. Satler" to the "Humans" of `jurassic_park`.

**Answer 8B:**
```ruby
# write your code here
```

## Question 9

```ruby
x = 0

while x < 4
  turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"]
  puts turtles[x]

  x = x + 1
end
```

* Examine the above code and imagine that you run it.
* What do you expect the outcome will be? Explain your answer.

**Answer 9:**


## Question 11

* Write a ruby method called `names` that returns an array with two names as strings inside of it.

**Answer 11:**
```ruby
def names
  # write your code in here
end
```

## Question 12

* Write a ruby method called `caps` that takes a string as an argument and returns that string with all capital letters. (Hint: use the format from question 11 to write your method.)

**Answer 12:**
```ruby
# write your code here
```