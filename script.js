function showHobbyDetails(hobby) {
    const details = {
        coding: {
            title: 'Coding',
            description: 'I love creating websites and applications. It allows me to solve problems and build things from scratch, enhancing my problem-solving and analytical skills.'
        },
        photography: {
            title: 'Photography',
            description: 'Capturing moments through the lens is my way of preserving memories. It has taught me patience and attention to detail, which are valuable skills in any profession.'
        },
        hiking: {
            title: 'Hiking',
            description: 'Exploring nature trails and mountains helps me stay fit and appreciate the beauty of the outdoors. It also enhances my endurance and resilience.'
        },
        reading: {
            title: 'Reading',
            description: 'Diving into different worlds through books broadens my knowledge and improves my empathy and communication skills, which are crucial in any professional setting.'
        }
    };

    document.getElementById('details-title').innerText = details[hobby].title;
    document.getElementById('details-description').innerText = details[hobby].description;
    document.getElementById('hobby-details').style.display = 'block';
}

function closeDetails() {
    document.getElementById('hobby-details').style.display = 'none';
}
