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
A=5 and B=4 however in the end there is no solution to this problem because the two numbers are not equal to one another.

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
E=3, f=12,G=12 this is because when you add the given values of e and f you get 12, however, after plugging in your sum to both F and G they have equal values of 12.

## Question 3

```ruby
weather = "cloudy"
weather == "cloudy"
```

What is the difference between these two statements? Explain your answer.

**Answer 3:**
In the first statement they state that cloudy is the variable for the weather however in the second statement it shows that "cloudy" is the current weather status.

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
The output of this would by a command not found. This is because there was no specific command given to find a certain directory or repository.

## Question 5

```ruby
food = "walnut"

if food == "walnut"
  puts "I'm allergic!"
end
```

If you ran this code, what would be the output? Explain your answer.

**Answer 5:**
When this code is run siince the variable of walnut was inputed, the system would return saying "Im allergic"

## Question 6

```ruby
  a = "4" + 10
```

What would happen here and why? How should I change this code to get an output of 14?
If this code were put into the terminal it would return with no output meaning that the code would not run at all. In order to change this, the code would need three variables, two for the adding numbers and one for the final sum. In addition it would need a return value.
**Answer 6:**
a = "4"
b = "10"
c = "14"

if "a + b" equal? "c" 
  return "c" 
 end

## Question 7

```ruby
 turtles = ["Leonardo", "Raphael", "Michelangelo", "Donatello"]
```

What is the index value of "Michelangelo"?
**Answer 7:**
The index value of "Michaelangelo" would be 3

## Questions 8

```ruby
 jurassic_park = { "T-Rex" => 1, "Triceratops" => 4, "Velociraptors" => 6, "Humans" => ["Dr. Malcolm", "Dr. Grant"] }
```

* In Ruby, write code to access access the number of "Triceratops" in `jurassic_park`.

**Answer 8A:**
```ruby
def Triceratops
 jurassic_park[0][:triceraptops].count
end```

* In Ruby, write code to add "Dr. Satler" to the "Humans" of `jurassic_park`.

**Answer 8B:**
```ruby
jurassic_park = { "T-Rex" => 1, "Triceratops" => 4, "Velociraptors" => 6, "Humans" => ["Dr. Malcolm", "Dr. Grant"] }

if "Humans" => ["Dr.Malcolm", "Dr.Grant"]"
  then ;"Dr_Satler"
end
end```

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
In the case that I ran into this code I believe the output would be the variables being repeated this is cause the X value is set to being less than the 4 values which are shown.

## Question 11

* Write a ruby method called `names` that returns an array with two names as strings inside of it.

**Answer 11:**
```ruby
names= "kyle, chad"
def 'names'
  name.each | word | do
   word[:names].each | name | do
    puts name
    end
  end
end
```

## Question 12

* Write a ruby method called `caps` that takes a string as an argument and returns that string with all capital letters. (Hint: use the format from question 11 to write your method.)

**Answer 12:**
```ruby
str1 = "word"
str2 = "word"
str3 = "word"

a = str1.upcase
b = str2.upcase
c = str3.upcase

puts a
puts b
puts c```