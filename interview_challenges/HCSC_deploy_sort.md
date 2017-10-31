# HCSC API Deploy Sort

Modify your existing API deploy script so that instead of simply listing the deploy dates, it does the following:
- For each environment, prints a hash that ties the environment (and variant, if there is one) to the deploy date
- Converts the deploy date to MM/DD/YYYY
- Sorts the array so that the environments are ordered by most recent deploy

Sample output:
```
[
  { "uat a" => "10/31/2017" },
  { "qa b" => "9/14/2017" },
  { "integration" => "6/7/2017" }
]
```

You may write the script in Ruby or JavaScript.
