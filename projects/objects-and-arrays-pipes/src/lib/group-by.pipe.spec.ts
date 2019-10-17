import { GroupByPipe } from './group-by.pipe';

const input = [
  {
    "_id": "5bd7645656017da6d0c3389d",
    "index": 0,
    "guid": "cc8579a6-4941-466e-96cc-51ab59bd7aa9",
    "isActive": false,
    "balance": "$1,407.88",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "green",
    "name": {
      "first": "Brittney",
      "last": "Summers"
    },
    "company": "PROVIDCO",
    "email": "brittney.summers@providco.com",
    "phone": "+1 (831) 550-2793",
    "address": "776 Schenectady Avenue, Taft, Rhode Island, 290",
    "about": "Aute enim ad proident aliqua officia anim ad. Occaecat duis cupidatat dolor est aute nisi. Excepteur minim ex do ea sit Lorem tempor et nostrud sint esse.",
    "registered": "Wednesday, August 10, 2016 9:53 AM",
    "latitude": "-11.390328",
    "longitude": "120.153605",
    "tags": [
      "amet",
      "pariatur",
      "sit",
      "nostrud",
      "occaecat"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Alisa Ortiz"
      },
      {
        "id": 1,
        "name": "Debora Irwin"
      },
      {
        "id": 2,
        "name": "Rhodes David"
      }
    ],
    "greeting": "Hello, Brittney! You have 5 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5bd76456df71a5ac752cae16",
    "index": 1,
    "guid": "63d97009-d573-4bdf-aa6e-eed08836efbf",
    "isActive": true,
    "balance": "$1,145.72",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "brown",
    "name": {
      "first": "Foley",
      "last": "Nguyen"
    },
    "company": "EXTREMO",
    "email": "foley.nguyen@extremo.biz",
    "phone": "+1 (995) 563-3577",
    "address": "898 Noel Avenue, Wattsville, Alabama, 9403",
    "about": "Nisi ea ad elit Lorem Lorem laboris dolore minim tempor. Irure laboris laborum id veniam. Dolor id exercitation ipsum esse deserunt ex nisi consequat voluptate excepteur in consectetur eiusmod. Ipsum nulla excepteur labore consectetur nulla exercitation dolor anim reprehenderit est eu. Eiusmod adipisicing occaecat aliquip velit ex. Dolor incididunt labore anim aliqua pariatur reprehenderit. Minim proident nisi non pariatur cillum commodo id elit eiusmod duis commodo consequat proident eiusmod.",
    "registered": "Monday, February 8, 2016 4:23 AM",
    "latitude": "-14.791872",
    "longitude": "102.663087",
    "tags": [
      "eu",
      "dolore",
      "tempor",
      "deserunt",
      "excepteur"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Robertson Massey"
      },
      {
        "id": 1,
        "name": "Bernadette Burks"
      },
      {
        "id": 2,
        "name": "Lyons Pena"
      }
    ],
    "greeting": "Hello, Foley! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5bd7645611e80d65d2136bc1",
    "index": 2,
    "guid": "4390950a-3d72-4abb-be14-3337f40fd538",
    "isActive": false,
    "balance": "$3,105.76",
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "eyeColor": "green",
    "name": {
      "first": "Mayer",
      "last": "Johns"
    },
    "company": "DOGNOST",
    "email": "mayer.johns@dognost.us",
    "phone": "+1 (867) 418-3660",
    "address": "517 Kenmore Terrace, Rosburg, South Carolina, 4463",
    "about": "Lorem nostrud consequat amet do officia. Tempor adipisicing esse consequat eu deserunt nisi aliquip excepteur exercitation magna cillum laboris. Irure eu minim dolore laboris. Excepteur incididunt non ea irure amet pariatur. Ut culpa aute est excepteur voluptate reprehenderit occaecat amet consectetur cupidatat aliqua consectetur dolore consectetur. Irure exercitation laboris sit ad nisi mollit duis.",
    "registered": "Wednesday, December 10, 2014 10:43 AM",
    "latitude": "-50.333063",
    "longitude": "-72.913716",
    "tags": [
      "amet",
      "ullamco",
      "ad",
      "consectetur",
      "labore"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Aguilar Mcguire"
      },
      {
        "id": 1,
        "name": "Rosalie Ray"
      },
      {
        "id": 2,
        "name": "Mcfarland Jacobson"
      }
    ],
    "greeting": "Hello, Mayer! You have 7 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5bd76456ce1faf4937b61167",
    "index": 3,
    "guid": "a1598a55-f836-4024-befa-c950910f77dc",
    "isActive": true,
    "balance": "$3,438.79",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "blue",
    "name": {
      "first": "Delacruz",
      "last": "Merritt"
    },
    "company": "NURPLEX",
    "email": "delacruz.merritt@nurplex.co.uk",
    "phone": "+1 (977) 540-3708",
    "address": "740 National Drive, Gorst, Iowa, 7907",
    "about": "Et quis ad exercitation nostrud minim. Laboris adipisicing sint consectetur sit ea commodo est. Proident minim occaecat aliquip dolore ad. Id laboris excepteur occaecat ex Lorem nostrud excepteur Lorem incididunt officia sunt nostrud eiusmod. Culpa deserunt velit veniam commodo.",
    "registered": "Saturday, November 22, 2014 2:51 PM",
    "latitude": "-24.46586",
    "longitude": "-13.479787",
    "tags": [
      "elit",
      "quis",
      "id",
      "enim",
      "laboris"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Craft Phillips"
      },
      {
        "id": 1,
        "name": "Faye Richmond"
      },
      {
        "id": 2,
        "name": "Palmer Lawrence"
      }
    ],
    "greeting": "Hello, Delacruz! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5bd76456238412a9af936ab5",
    "index": 4,
    "guid": "117d2d3e-39de-4b6d-b440-baf37e15485e",
    "isActive": false,
    "balance": "$2,944.90",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "green",
    "name": {
      "first": "Shelia",
      "last": "Trujillo"
    },
    "company": "BLEEKO",
    "email": "shelia.trujillo@bleeko.org",
    "phone": "+1 (826) 540-2294",
    "address": "911 Forrest Street, Omar, Illinois, 1442",
    "about": "Cupidatat est cillum culpa non voluptate consectetur nisi duis. Esse dolore ad ad ipsum tempor laborum. Lorem nostrud proident ad quis enim non aliqua labore enim ex qui ex.",
    "registered": "Friday, April 7, 2017 4:54 PM",
    "latitude": "11.612158",
    "longitude": "101.164602",
    "tags": [
      "anim",
      "exercitation",
      "et",
      "cupidatat",
      "mollit"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Trina Bradley"
      },
      {
        "id": 1,
        "name": "Rosalinda Jackson"
      },
      {
        "id": 2,
        "name": "Douglas Hays"
      }
    ],
    "greeting": "Hello, Shelia! You have 7 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5bd764564b9504ffa878a9d7",
    "index": 5,
    "guid": "b70a5f18-da4e-4725-b6d5-41ce4c4b93ba",
    "isActive": true,
    "balance": "$3,839.39",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "brown",
    "name": {
      "first": "Barber",
      "last": "Kaufman"
    },
    "company": "NIQUENT",
    "email": "barber.kaufman@niquent.tv",
    "phone": "+1 (811) 583-3886",
    "address": "444 Gatling Place, Accoville, Florida, 332",
    "about": "Irure ipsum laboris proident incididunt ullamco duis quis cillum enim laborum. Lorem cupidatat nulla duis excepteur ea sunt. Pariatur aliquip aliqua amet non. Qui in sit non nisi dolor pariatur irure magna labore minim. Amet id in occaecat pariatur in velit do ad mollit.",
    "registered": "Tuesday, July 1, 2014 10:47 AM",
    "latitude": "-10.501139",
    "longitude": "27.005591",
    "tags": [
      "est",
      "ad",
      "pariatur",
      "adipisicing",
      "consequat"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Leticia Mueller"
      },
      {
        "id": 1,
        "name": "Melody Justice"
      },
      {
        "id": 2,
        "name": "Gilliam Griffith"
      }
    ],
    "greeting": "Hello, Barber! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5bd764567a84fe0d62ba1774",
    "index": 6,
    "guid": "e4131482-3eb2-4d83-ba35-1891ef3c77ee",
    "isActive": false,
    "balance": "$3,259.61",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "green",
    "name": {
      "first": "Ella",
      "last": "Jacobs"
    },
    "company": "BULLZONE",
    "email": "ella.jacobs@bullzone.me",
    "phone": "+1 (982) 531-3344",
    "address": "256 Glendale Court, Jamestown, Maryland, 3981",
    "about": "Duis veniam Lorem nulla eiusmod. Duis id sit cillum nisi mollit ipsum esse. Dolore aliquip irure ad consectetur enim Lorem tempor veniam deserunt esse enim. Anim veniam ad veniam quis deserunt velit dolore. Qui deserunt aliquip consectetur laborum do ipsum consequat incididunt ea sint laboris minim nostrud. Occaecat ut qui aliqua deserunt sit ea eiusmod nostrud consequat id in dolor dolore.",
    "registered": "Saturday, October 29, 2016 4:50 AM",
    "latitude": "-36.269132",
    "longitude": "67.896534",
    "tags": [
      "in",
      "aliquip",
      "aliqua",
      "minim",
      "consectetur"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Moran Perkins"
      },
      {
        "id": 1,
        "name": "Johnston Crosby"
      },
      {
        "id": 2,
        "name": "Lessie Beck"
      }
    ],
    "greeting": "Hello, Ella! You have 5 unread messages.",
    "favoriteFruit": "strawberry"
  }
];

describe('GroupByPipe', () => {
  it('group by first lvl properties', () => {
    const pipe = new GroupByPipe();
  
    let output = pipe.transform(input,'favoriteFruit');
    expect(pipe).toBeTruthy();
  });
  it('group by deep lvl properties', () => {
    const pipe = new GroupByPipe();
  
    let output = pipe.transform(input,'name.last');
    expect(pipe).toBeTruthy();
  });
});
