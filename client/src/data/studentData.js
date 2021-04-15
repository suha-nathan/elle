const studentData = {
    firstname:"Suhasini",
    lastname:"Padmanathan",
    email:"suha@hotmail.com",
    password:"some-hash",
    avatar: "https://via.placeholder.com/80",
    courseInformation:[
        {   
            id:1,
            courseTitle: "Math 101",
            coursePicture: "https://i.imgur.com/Kmu8EjM.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sagittis odio, egestas commodo neque. ",
            trailerEmbedVideo: "https://www.youtube.com/embed/0JUN9aDxVmI",
            lessons:[
                {
                    seriesNumber: 1.01,
                    lessonTitle: "Addition",
                    mainEmbedVideo: "https://www.youtube.com/embed/AuX7nPBqDts",
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
                    seriesNumber: 1.02,
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
            id:2,
            courseTitle: "History 101",
            coursePicture:"https://i.pinimg.com/564x/c7/1c/52/c71c526827c99dad75aaa4ae05c9085c.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sagittis odio, egestas commodo neque. ",
            trailerEmbedVideo: "https://www.youtube.com/embed/SGNwG_MjslI",
            lessons:[]
        },
        {
            id:3,
            courseTitle: "Geography 101",
            coursePicture: "https://i.pinimg.com/564x/76/9a/6f/769a6f4b75da0c531d1314406a36d817.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sagittis odio, egestas commodo neque. ",
            trailerEmbedVideo: "https://www.youtube.com/embed/SGNwG_MjslI",
            lessons:[]
        },
        {
            id:4,
            courseTitle: "Physics 101",
            coursePicture: "https://i.pinimg.com/originals/43/aa/4c/43aa4ca78f038ed75d9db7dc8b3e0545.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sagittis odio, egestas commodo neque. ",
            trailerEmbedVideo: "https://www.youtube.com/embed/SGNwG_MjslI",
            lessons:[]
        },
        {
            id:5,
            courseTitle: "Biology 101",
            coursePicture: "https://i.pinimg.com/564x/4e/62/21/4e6221871c61e1e27cb04a214f4c1a89.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut sagittis odio, egestas commodo neque. ",
            trailerEmbedVideo: "https://www.youtube.com/embed/ax0yjzbSBa4",
            lessons:[]
        }
    ]

}

export default studentData

//youtube embed
//<iframe width="560" height="315" src="https://youtu.be/SGNwG_MjslI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe width="560" height="315" src="https://www.youtube.com/embed/SGNwG_MjslI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//<iframe width='560' height='315' src=`${link}` title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>