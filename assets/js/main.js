//********LEV 1.2**********/

let hamster = {
    name: "George",
    alter: 3,
    sagNameater: () => {
        alert(hamster.name, hamster.name);
    }
}
console.log(hamster.name, hamster.alter);

//********LEV 1.4******/

let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere);
console.log(unsereHaustiere[0].names[1], unsereHaustiere[1].names[2])
console.log(unsereHaustiere[1].names);

unsereHaustiere[1].names[3] = "Balu";       //hinzugefügt :)
unsereHaustiere[1].names[4] = "Snoopy";

console.log(unsereHaustiere[1].names);

/********LEV 1.5***********/

let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

/*********LEV 1.6***********/

let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
]

console.log(myMusic);

myMusic[3] = {
    artist: "Chelsea Wolfe",
    title: "Pain Is Beauty",
    release_year: 2013,
    medium: ["CD", "LP", "Download"],
    gold: false
};

console.log(myMusic[0].artist);
console.log(myMusic[1].medium[3]);
console.log(myMusic[1].gold);
console.log(myMusic[2].release_year + " und 1983 ");
console.log(myMusic[3].title);
console.log(myMusic[3].title + " Best Album! ");
console.log(myMusic[2].title);
console.log(myMusic[1].artist[5])  //?

/**********LEV 1.7**********/

myMusic.forEach((alle) => {                                  //SICH MERKEN! - alle = ALLE
    console.log(alle.title, alle.artist, alle.medium);          //PArameter anhand von Variable neu deklarieren
})

/**********LEV 1.8**********/

let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.forEach((elt) => {
    console.log(elt.name, elt.coop, elt.address.city, elt.emails);
})





