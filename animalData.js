const Queue = require('./queue');


const addCatData = [
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://pbs.twimg.com/profile_images/571260078292865024/0EvP5vXn_400x400.jpeg',
    imageDescription: 'Striped cat wearing a bow tie',
    name: 'Oliver',
    sex: 'Male',
    age: '3 months',
    breed: 'Bengal',
    story: 'Owner passed away'
  },
  {
    imageURL: 'https://cdn.ritely.com/wp-content/uploads/2018/07/cutecats8.jpg',
    imageDescription: 'Orange tabby kitten in a wine glass',
    name: 'Amelia',
    sex: 'Female',
    age: '2 months',
    breed: 'Tabby',
    story: 'Found on the side of the highway'
  }
];

const addDogData = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'https://www.urdogs.com/wp-content/uploads/2016/06/Husky.jpg',
    imageDescription: 'A smiling husky wearing a hat',
    name: 'Julio',
    sex: 'Male',
    age: 5,
    breed: 'Husky',
    story: 'Found in the Alaskan wilderness'
  },
  {
    imageURL: 'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/australian-shepherd.jpg',
    imageDescription: 'A white, black, and golden Australian Shepherd',
    name: 'Susan',
    sex: 'Female',
    age: 2,
    breed: 'Australian Shepherd',
    story: 'Too cute for previous owners'
  }
];

const catData = new Queue;
addCatData.forEach(item => catData.enqueue(item));
const dogData = new Queue;
addDogData.forEach(item => dogData.enqueue(item));

module.exports = { catData, dogData };