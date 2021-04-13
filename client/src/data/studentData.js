studentData = {
    firstname:"Suhasini",
    lastname:"Padmanathan",
    email:"suha@hotmail.com",
    password:"some-hash",
    avatar: "https://via.placeholder.com/80",
    courseInformation:[
        {
            courseTitle: "Math 101",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sagittis odio, egestas commodo neque. Proin pulvinar elementum orci, ut sollicitudin sem molestie ut. Vestibulum in laoreet neque, non rutrum urna. Nunc nec ornare lacus. Vivamus eu diam tincidunt velit porttitor pharetra. Nam ultricies nibh vel consectetur ullamcorper. Proin sed massa sit amet orci placerat tristique a non neque.          Proin tempor nulla neque, sit amet aliquam libero euismod in. Aliquam consequat feugiat odio id dignissim. Donec gravida lectus ac mi molestie, vel efficitur est cursus. Donec sed vehicula elit. Mauris malesuada dignissim est vitae laoreet. Nullam faucibus varius lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            trailerEmbedVideo: "https://www.youtube.com/embed/SGNwG_MjslI",
            lessons:[
                {
                    seriesNumber: 1,
                    lessonTitle: "Addition",
                    mainEmbedVideo: "https://www.youtube.com/embed/SGNwG_MjslI",
                    lessonDescription: "this is the lesson description ffff",
                    quizList: [
                        {
                            quizNumber: 1,
                            questionTitle: "What is 1 + 1?",
                            questionAnswerChoices: ["1","2","3","4"],
                            correctAnswer:"2"
                        },
                        {
                            quizNumber: 2,
                            questionTitle: "What is 5 + 4?",
                            questionAnswerChoices: ["23","43","9","12"],
                            correctAnswer: "9"
                        }
                    ]
                },
                {
                    seriesNumber: 2,
                    lessonTitle: "Subtraction",
                    mainEmbedVideo: "https://www.youtube.com/embed/SGNwG_MjslI",
                    lessonDescription: "this is another lesson description ffff",
                    quizList: [
                        {
                            quizNumber: 1,
                            questionTitle: "What is 1 - 1?",
                            questionAnswerChoices: ["1","2","3","0"],
                            correctAnswer:"2"
                        },
                        {
                            quizNumber: 2,
                            questionTitle: "What is 5 - 4?",
                            questionAnswerChoices: ["23","1","9","12"],
                            correctAnswer: "9"
                        }
                    ]
                }
            ]
        },
        {
            courseTitle: "History 101",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sagittis odio, egestas commodo neque. Proin pulvinar elementum orci, ut sollicitudin sem molestie ut. Vestibulum in laoreet neque, non rutrum urna. Nunc nec ornare lacus. Vivamus eu diam tincidunt velit porttitor pharetra. Nam ultricies nibh vel consectetur ullamcorper. Proin sed massa sit amet orci placerat tristique a non neque.          Proin tempor nulla neque, sit amet aliquam libero euismod in. Aliquam consequat feugiat odio id dignissim. Donec gravida lectus ac mi molestie, vel efficitur est cursus. Donec sed vehicula elit. Mauris malesuada dignissim est vitae laoreet. Nullam faucibus varius lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            trailerEmbedVideo: "https://www.youtube.com/embed/SGNwG_MjslI",
            lessons:[]
        },
        {
            courseTitle: "Geography 101",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sagittis odio, egestas commodo neque. Proin pulvinar elementum orci, ut sollicitudin sem molestie ut. Vestibulum in laoreet neque, non rutrum urna. Nunc nec ornare lacus. Vivamus eu diam tincidunt velit porttitor pharetra. Nam ultricies nibh vel consectetur ullamcorper. Proin sed massa sit amet orci placerat tristique a non neque.          Proin tempor nulla neque, sit amet aliquam libero euismod in. Aliquam consequat feugiat odio id dignissim. Donec gravida lectus ac mi molestie, vel efficitur est cursus. Donec sed vehicula elit. Mauris malesuada dignissim est vitae laoreet. Nullam faucibus varius lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            trailerEmbedVideo: "https://www.youtube.com/embed/SGNwG_MjslI",
            lessons:[]
        },
        {
            courseTitle: "Physics 101",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sagittis odio, egestas commodo neque. Proin pulvinar elementum orci, ut sollicitudin sem molestie ut. Vestibulum in laoreet neque, non rutrum urna. Nunc nec ornare lacus. Vivamus eu diam tincidunt velit porttitor pharetra. Nam ultricies nibh vel consectetur ullamcorper. Proin sed massa sit amet orci placerat tristique a non neque.          Proin tempor nulla neque, sit amet aliquam libero euismod in. Aliquam consequat feugiat odio id dignissim. Donec gravida lectus ac mi molestie, vel efficitur est cursus. Donec sed vehicula elit. Mauris malesuada dignissim est vitae laoreet. Nullam faucibus varius lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            trailerEmbedVideo: "https://www.youtube.com/embed/SGNwG_MjslI",
            lessons:[]
        },
        {
            courseTitle: "Biology 101",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sagittis odio, egestas commodo neque. Proin pulvinar elementum orci, ut sollicitudin sem molestie ut. Vestibulum in laoreet neque, non rutrum urna. Nunc nec ornare lacus. Vivamus eu diam tincidunt velit porttitor pharetra. Nam ultricies nibh vel consectetur ullamcorper. Proin sed massa sit amet orci placerat tristique a non neque.          Proin tempor nulla neque, sit amet aliquam libero euismod in. Aliquam consequat feugiat odio id dignissim. Donec gravida lectus ac mi molestie, vel efficitur est cursus. Donec sed vehicula elit. Mauris malesuada dignissim est vitae laoreet. Nullam faucibus varius lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
            trailerEmbedVideo: "https://www.youtube.com/embed/SGNwG_MjslI",
            lessons:[]
        }
    ]

}

export default studentData

//youtube embed
//<iframe width="560" height="315" src="https://youtu.be/SGNwG_MjslI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/SGNwG_MjslI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe width='560' height='315' src=`${link}` title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>