# Petful Server
 This server provides users with endpoints that return and delete cat and dog objects from queues.

 ## Cat Endpoint
- A get request to `/api/cat` will return an object containing information about a single cat.
  - Example response:
  `{
    imageURL: 'https://cdn.ritely.com/wp-content/uploads/2018/07/cutecats8.jpg',
    imageDescription: 'Orange tabby kitten in a wine glass',
    name: 'Amelia',
    sex: 'Female',
    age: '2 months',
    breed: 'Tabby',
    story: 'Found on the side of the highway'
  }`
- A delete request to `/api/cat` will dequeue (delete) the cat that is at the beginning of the queue. This request will be followed by a response with a status of 204.


## Dog Endpoint
The dog endpoint works similarly to the cat endpoint, make requests to `api/dog` 

## Tech Stack
This app was built using Node.js and Express. 

## Instructions for Reuse
- To get started, clone this repo and run `npm install`
- To add more dogs or cats, add them to the `addCatData` and `addDogData` arrays in the `animalData.js` file.

## Authors
* **Cameron Hatch** - [cameronhatch92](https://github.com/cameronhatch92)
* **Kent Tokunaga** - [kenttoku](https://github.com/kenttoku)
     
