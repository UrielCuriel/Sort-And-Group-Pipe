import { SortByPipe } from './sort-by.pipe';

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
const input2=[
  {
    "_id": "5bd7681ad366a94be7674efb",
    "index": 0,
    "guid": "71a82b09-8508-4a95-bb8a-56101fd13619",
    "isActive": true,
    "balance": "$2,376.04",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": {
      "first": "Leann",
      "last": "Slater"
    },
    "company": "PRIMORDIA",
    "email": "leann.slater@primordia.me",
    "phone": "+1 (883) 451-2531",
    "address": "750 Cobek Court, Connerton, Wisconsin, 7649",
    "about": "Qui tempor veniam ad sit nisi amet dolore nisi aliquip et nisi non sunt eiusmod. Sunt cupidatat laborum laboris commodo aliquip anim irure quis ipsum minim consequat ex aute nisi. Sit laborum non voluptate laboris consectetur magna magna eu officia quis. Amet nisi nisi qui aliquip pariatur quis sunt reprehenderit laboris. Qui commodo officia consequat veniam reprehenderit consequat irure laboris non id veniam. Esse reprehenderit proident dolore amet id id elit veniam. Magna laboris voluptate nostrud dolore non labore ullamco ex laboris veniam reprehenderit.",
    "registered": "Friday, November 24, 2017 12:07 AM",
    "latitude": "-72.750829",
    "longitude": "-162.736241",
    "tags": [
      "aliquip",
      "non",
      "duis",
      "ut",
      "id"
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
        "name": "Enid Lewis"
      },
      {
        "id": 1,
        "name": "Charmaine Cox"
      },
      {
        "id": 2,
        "name": "Collier Young"
      }
    ],
    "greeting": "Hello, Leann! You have 10 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5bd7681a21d65ecd81c00352",
    "index": 1,
    "guid": "e5ccb169-1839-44ae-87cc-a4b8746f0400",
    "isActive": false,
    "balance": "$1,331.66",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "green",
    "name": {
      "first": "Nancy",
      "last": "Perez"
    },
    "company": "ORBIFLEX",
    "email": "nancy.perez@orbiflex.co.uk",
    "phone": "+1 (822) 551-3960",
    "address": "459 Lloyd Street, Osmond, New Mexico, 2508",
    "about": "Amet voluptate commodo fugiat cupidatat velit officia et. Sunt labore aliqua labore proident duis. Nulla velit enim aliquip esse proident esse deserunt consequat. Minim irure veniam consequat officia.",
    "registered": "Tuesday, June 26, 2018 1:50 AM",
    "latitude": "-20.494561",
    "longitude": "34.646635",
    "tags": [
      "elit",
      "Lorem",
      "ut",
      "aliqua",
      "sint"
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
        "name": "Margery Oneil"
      },
      {
        "id": 1,
        "name": "Janell Bender"
      },
      {
        "id": 2,
        "name": "Gallagher Graham"
      }
    ],
    "greeting": "Hello, Nancy! You have 8 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5bd7681a08a92e951da864d2",
    "index": 2,
    "guid": "f1c4275d-4055-45ec-9297-706087d01f20",
    "isActive": false,
    "balance": "$2,712.15",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "brown",
    "name": {
      "first": "Beulah",
      "last": "Townsend"
    },
    "company": "OPTICALL",
    "email": "beulah.townsend@opticall.info",
    "phone": "+1 (857) 516-3519",
    "address": "774 Coyle Street, Lupton, Colorado, 2901",
    "about": "Dolore ex irure in nisi culpa. Ex laborum aute proident anim adipisicing minim laborum laboris duis consectetur sint. Officia excepteur tempor aute sunt. Dolore incididunt occaecat aute nulla.",
    "registered": "Saturday, June 27, 2015 8:43 AM",
    "latitude": "33.688124",
    "longitude": "-87.75592",
    "tags": [
      "aliquip",
      "labore",
      "non",
      "id",
      "et"
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
        "name": "Amy Fleming"
      },
      {
        "id": 1,
        "name": "Patsy Hopkins"
      },
      {
        "id": 2,
        "name": "Maria Nguyen"
      }
    ],
    "greeting": "Hello, Beulah! You have 8 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5bd7681a0006502ab4ef2562",
    "index": 3,
    "guid": "da898375-a6eb-49a7-8aa0-b88eb012ad8a",
    "isActive": true,
    "balance": "$2,117.38",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "blue",
    "name": {
      "first": "Cannon",
      "last": "Leonard"
    },
    "company": "COMCUBINE",
    "email": "cannon.leonard@comcubine.org",
    "phone": "+1 (937) 446-2306",
    "address": "289 Coffey Street, Wright, Northern Mariana Islands, 4592",
    "about": "Mollit aliqua in cupidatat ullamco ipsum ea sit. Est velit dolor esse anim nostrud. Ipsum ipsum id elit est excepteur labore id elit nostrud in proident. Consectetur dolor magna exercitation aute ipsum ad eiusmod fugiat sunt ex. Occaecat anim fugiat ea labore commodo incididunt aliqua in fugiat consequat occaecat velit fugiat.",
    "registered": "Friday, June 17, 2016 1:40 AM",
    "latitude": "-49.685245",
    "longitude": "43.35504",
    "tags": [
      "ea",
      "sunt",
      "reprehenderit",
      "reprehenderit",
      "voluptate"
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
        "name": "Lauren Franco"
      },
      {
        "id": 1,
        "name": "Winters Fox"
      },
      {
        "id": 2,
        "name": "Sheryl Frank"
      }
    ],
    "greeting": "Hello, Cannon! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5bd7681a2a4709544006346c",
    "index": 4,
    "guid": "fada7305-8891-4a4b-b87e-3a462379e135",
    "isActive": false,
    "balance": "$1,855.26",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "brown",
    "name": {
      "first": "Conrad",
      "last": "Haney"
    },
    "company": "CONFERIA",
    "email": "conrad.haney@conferia.biz",
    "phone": "+1 (810) 557-3382",
    "address": "838 Chase Court, Como, District Of Columbia, 9534",
    "about": "Aliqua magna aliqua exercitation anim id elit cillum. Velit adipisicing cillum velit laborum tempor. Sit do veniam reprehenderit in.",
    "registered": "Friday, August 22, 2014 8:06 PM",
    "latitude": "-70.272965",
    "longitude": "-149.330157",
    "tags": [
      "ea",
      "exercitation",
      "esse",
      "ullamco",
      "tempor"
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
        "name": "Alisa Solomon"
      },
      {
        "id": 1,
        "name": "Delaney Jensen"
      },
      {
        "id": 2,
        "name": "Mann Donaldson"
      }
    ],
    "greeting": "Hello, Conrad! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5bd7681ad04f9393e914b2da",
    "index": 5,
    "guid": "e4451009-60cf-4677-9c9b-5de0d20fb142",
    "isActive": true,
    "balance": "$1,631.45",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "green",
    "name": {
      "first": "Bates",
      "last": "Hoffman"
    },
    "company": "POWERNET",
    "email": "bates.hoffman@powernet.us",
    "phone": "+1 (966) 494-2712",
    "address": "510 Chestnut Street, Barronett, Puerto Rico, 8950",
    "about": "Lorem laboris proident deserunt ex sint deserunt voluptate id velit ut aliqua esse exercitation. Eiusmod et esse dolore pariatur elit. Ipsum deserunt commodo culpa mollit voluptate proident exercitation sint consequat proident duis. Qui magna magna non est adipisicing. Dolor velit aliqua aliqua aute.",
    "registered": "Tuesday, June 2, 2015 11:36 PM",
    "latitude": "-49.011641",
    "longitude": "98.699105",
    "tags": [
      "officia",
      "qui",
      "aliquip",
      "incididunt",
      "ipsum"
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
        "name": "Cindy Bradford"
      },
      {
        "id": 1,
        "name": "Bradshaw Christian"
      },
      {
        "id": 2,
        "name": "Small Hewitt"
      }
    ],
    "greeting": "Hello, Bates! You have 9 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5bd7681ac5b8934a076302b6",
    "index": 6,
    "guid": "611cebec-053d-4c95-9d2b-d0f23c5a98cd",
    "isActive": true,
    "balance": "$1,029.95",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "blue",
    "name": {
      "first": "Janie",
      "last": "Wall"
    },
    "company": "OHMNET",
    "email": "janie.wall@ohmnet.com",
    "phone": "+1 (829) 493-3073",
    "address": "905 Lenox Road, Jessie, Oklahoma, 7095",
    "about": "Nulla ipsum ea adipisicing do. Et pariatur proident est mollit in aute id amet excepteur. Labore cupidatat nisi velit labore tempor laborum sit. Fugiat quis deserunt commodo et tempor aliqua adipisicing exercitation Lorem nostrud. Dolor pariatur ea veniam ex quis dolor proident laborum pariatur consequat dolor.",
    "registered": "Thursday, May 28, 2015 6:29 AM",
    "latitude": "57.446026",
    "longitude": "-179.229306",
    "tags": [
      "elit",
      "anim",
      "aliqua",
      "do",
      "qui"
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
        "name": "Marshall Horn"
      },
      {
        "id": 1,
        "name": "Carmen Nelson"
      },
      {
        "id": 2,
        "name": "Fay Harrington"
      }
    ],
    "greeting": "Hello, Janie! You have 8 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5bd7681a2199c2203011b233",
    "index": 7,
    "guid": "ce0c2ebc-6489-4149-9701-e981a801a23f",
    "isActive": true,
    "balance": "$2,392.45",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "brown",
    "name": {
      "first": "Lottie",
      "last": "Maynard"
    },
    "company": "KATAKANA",
    "email": "lottie.maynard@katakana.io",
    "phone": "+1 (924) 413-2609",
    "address": "474 Seaview Avenue, Vienna, Kansas, 8216",
    "about": "Minim amet consequat elit eu excepteur velit labore laboris non. Adipisicing nulla do cillum dolor exercitation incididunt veniam laboris deserunt voluptate aliquip cupidatat. Proident sit exercitation pariatur et consequat non dolore proident.",
    "registered": "Thursday, November 30, 2017 6:13 PM",
    "latitude": "48.123094",
    "longitude": "-73.363822",
    "tags": [
      "aliqua",
      "eiusmod",
      "sit",
      "ad",
      "aute"
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
        "name": "Hardin Keith"
      },
      {
        "id": 1,
        "name": "Le Lang"
      },
      {
        "id": 2,
        "name": "Cherie Bond"
      }
    ],
    "greeting": "Hello, Lottie! You have 8 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5bd7681afd9c5cb94bfea8d4",
    "index": 8,
    "guid": "d7b78882-ad7c-49ba-b459-ff39675b1b59",
    "isActive": false,
    "balance": "$1,948.42",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "green",
    "name": {
      "first": "Toni",
      "last": "Olson"
    },
    "company": "NSPIRE",
    "email": "toni.olson@nspire.tv",
    "phone": "+1 (885) 421-2422",
    "address": "238 Roebling Street, Logan, New Jersey, 3285",
    "about": "Et proident dolor aute id adipisicing proident voluptate. Minim sunt eu elit qui dolore. Occaecat cillum irure qui id. Ut incididunt laboris nisi velit exercitation dolor duis adipisicing nostrud labore tempor sint voluptate.",
    "registered": "Saturday, April 14, 2018 12:23 AM",
    "latitude": "-70.601964",
    "longitude": "-23.972781",
    "tags": [
      "anim",
      "enim",
      "ex",
      "reprehenderit",
      "voluptate"
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
        "name": "Hartman Baker"
      },
      {
        "id": 1,
        "name": "Rosanna Schneider"
      },
      {
        "id": 2,
        "name": "Johanna Lowe"
      }
    ],
    "greeting": "Hello, Toni! You have 7 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5bd7681a5f9e9ea36d6e2853",
    "index": 9,
    "guid": "4de62424-11cf-4234-8b6a-dd9dbe9fbe2f",
    "isActive": true,
    "balance": "$2,785.21",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "brown",
    "name": {
      "first": "Gregory",
      "last": "Kramer"
    },
    "company": "RODEOCEAN",
    "email": "gregory.kramer@rodeocean.net",
    "phone": "+1 (930) 457-3953",
    "address": "438 Benson Avenue, Allentown, Ohio, 3802",
    "about": "Exercitation veniam duis minim nostrud ipsum id consectetur ad aliquip culpa quis ea ipsum. Commodo elit tempor tempor laboris proident. Laboris magna cupidatat non culpa est cillum nisi enim qui qui amet fugiat dolore non. Tempor dolor eiusmod incididunt quis commodo excepteur dolore labore sit eu aliquip esse exercitation sit. Cillum do Lorem pariatur nostrud nisi excepteur.",
    "registered": "Wednesday, September 28, 2016 5:36 PM",
    "latitude": "30.754562",
    "longitude": "113.273516",
    "tags": [
      "enim",
      "est",
      "duis",
      "in",
      "voluptate"
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
        "name": "Reba Watkins"
      },
      {
        "id": 1,
        "name": "Bolton Oliver"
      },
      {
        "id": 2,
        "name": "Justice Duke"
      }
    ],
    "greeting": "Hello, Gregory! You have 6 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5bd7681ae64a7fe3b2d831f8",
    "index": 10,
    "guid": "9526ec03-20f2-4a6f-a8b6-db19c5092d94",
    "isActive": false,
    "balance": "$3,417.79",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "green",
    "name": {
      "first": "Shanna",
      "last": "Davidson"
    },
    "company": "UNI",
    "email": "shanna.davidson@uni.ca",
    "phone": "+1 (981) 556-2822",
    "address": "351 Lefferts Place, Brandywine, Kentucky, 278",
    "about": "Ipsum voluptate aute ad pariatur duis qui ipsum id cupidatat sunt excepteur irure quis duis. In proident laboris proident voluptate sint ipsum pariatur proident ipsum ipsum. Cillum elit do sunt est duis eu sint dolor voluptate ex laboris ullamco nostrud. Et pariatur dolore aliquip ullamco excepteur qui cillum incididunt veniam tempor aliqua ullamco. Dolor non sint fugiat nulla culpa aliquip cillum occaecat incididunt. Anim et mollit sint ipsum.",
    "registered": "Wednesday, January 4, 2017 1:31 PM",
    "latitude": "-69.418618",
    "longitude": "93.860783",
    "tags": [
      "ad",
      "amet",
      "adipisicing",
      "eu",
      "ex"
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
        "name": "Melissa Pace"
      },
      {
        "id": 1,
        "name": "Daugherty Coleman"
      },
      {
        "id": 2,
        "name": "Romero Holland"
      }
    ],
    "greeting": "Hello, Shanna! You have 10 unread messages.",
    "favoriteFruit": "apple"
  }
];

describe('SortByPipe', () => {
  it('order by number', () => {
     const pipe = new SortByPipe();
     const output = pipe.transform(input2,['age'],);
  });
  it('order by nested property', () => {
    const pipe = new SortByPipe();
    let output = pipe.transform(input,['name.last']);
    expect(pipe).toBeTruthy();
  });
  it('order by boolean', () => {
    const pipe = new SortByPipe();
    let output = pipe.transform(input,['isActive']);
    expect(pipe).toBeTruthy();
  });
  it('unsuported type', () => {
    const pipe = new SortByPipe();

      expect(()=>
        pipe.transform(input,['name'])
      ).toThrow('OrderBy Pipe does not support object type');
    
  });
});
