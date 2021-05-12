# HCSC API Deploy Script

The implementation managers for one of our biggest clients, HCSC, want to be able to run a script that will retrieve the dates of the most recent API deploys for each of HCSC's environments.

Your script should:
- Make a request to [the where endpoint](https://gist.githubusercontent.com/gretchenziegler/853c4f709d45176aa44c8e5aee864cac/raw/010a4c44455ffc93b8039935cfc4e0dff41ae502/hcsc.json) to obtain relevant client information
- Output an array that lists the date of each environment's most recent **platform-api** deploy

Sample output:
```
[
  "2017-10-31T16:10:22.600Z",
  "2017-06-25T19:13:12.272Z",
  "2017-10-23T15:17:19.044Z"
]
```

You may write the script in Ruby or JavaScript.
