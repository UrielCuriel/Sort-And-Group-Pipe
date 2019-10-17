# Pipes for Sort and Group Arrays and Convert Object in Array

## Sort Pipe

this pipe sort an array by property in the inner items,

``` js
const items = [{
        name: {
            first: 'Ann',
            last:'Summers'
        },
        score: '99'
    },
    {
        name: {
            first: 'John',
            last:'Nyugen'
        },
        score: '72'
    },
    {
        name: {
            first: 'Javier',
            last:'Trujillo'
        },
        score: '45'
    },
    {
        name: {
            first: 'Rose',
            last:'Jacobs',
        },
        score: '63'
    },
]
```
Only accept `String Number and Date` types
``` html
<ul>
    <li *ngFor="let item of items | sortBy:['-score']"></li>
</ul>
```

the **ASC** order is implicit, for **DESC** order use a `-` before property name 

``` html
<ul>
    <li *ngFor="let item of items | sortBy:['-score']">{{item.name}} - {{item.score}}</li>
</ul>
```

you can use nested properties

``` html
<ul>
    <li *ngFor="let item of items | sortBy:['-score']">{{item.name}} - {{item.score}}</li>
</ul>
```

## OrderBy Pipe 

*documentation under construction*