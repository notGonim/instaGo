/* eslint-disable no-plusplus */



// //production rules 
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read;
// 			allow write: if
//           request.auth.uid !=null;
//     }
//   }
// }

export function seedDatabase(firebase) {
    const users = [
        {
            userId: 'vKZnRUyjlleYQNSslFQrx6TuqLH3',
            username: 'gonim',
            fullName: 'mhmod gonim',
            emailAddress: 'karlhadwen@gmail.com',
            following: ['2'],
            followers: ['2', '3', '4'],
            dateCreated: Date.now()
        },
        {
            userId: '2',
            username: 'raphael',
            fullName: 'Raffaello Sanzio da Urbino',
            emailAddress: 'raphael@sanzio.com',
            following: [],
            followers: ['vKZnRUyjlleYQNSslFQrx6TuqLH3'],
            dateCreated: Date.now()
        },
        {
            userId: '3',
            username: 'dali',
            fullName: 'Salvador Dalí',
            emailAddress: 'salvador@dali.com',
            following: [],
            followers: ['NvPY9M9MzFTARQ6M816YAzDJxZ72'],
            dateCreated: Date.now()
        },
        {
            userId: '4',
            username: 'orwell',
            fullName: 'George Orwell',
            emailAddress: 'george@orwell.com',
            following: [],
            followers: ['NvPY9M9MzFTARQ6M816YAzDJxZ72'],
            dateCreated: Date.now()
        }
    ];

    // eslint-disable-next-line prefer-const
    for (let k = 0; k < users.length; k++) {
        firebase.firestore().collection('users').add(users[k]);
    }

    // eslint-disable-next-line prefer-const
    for (let i = 1; i <= 5; ++i) {
        firebase
            .firestore()
            .collection('photos')
            .add({
                photoId: i,
                userId: '2',
                imageSrc: `/images/users/raphael/${i}.jpg`,
                caption: 'Saint George and the Dragon',
                likes: [],
                comments: [
                    {
                        displayName: 'dali',
                        comment: 'Love this place, looks like my animal farm!'
                    },
                    {
                        displayName: 'orwell',
                        comment: 'Would you mind if I used this picture?'
                    }
                ],
                userLatitude: '40.7128°',
                userLongitude: '74.0060°',
                dateCreated: Date.now()
            });
    }
}