const myQuiz = [
    {
      'q': "What state is known as the tiger state of India?",
      'options': [
        'Assam',
        'Bengal',
        'Madhya Pradesh'
      ],
      'correctIndex': 2,
      'correctResponse': "That's Right!",
      'incorrectResponse': 'Oops, Thats wrong :('
    },
    {
      'q': 'What are tigers known for?',
      'options': [
        'their camouflaging ability',
        'Being one of natures most feared predators',
        'their striped coat'
      ],
      'correctIndex': 1,
      'correctResponse': "Champion",
      'incorrectResponse': 'try harder'
    },
    {
      'q': 'Which tigers are Critically Endangered?',
      'options': [
        'South China and Siberian',
        'Malayan and Sumatran',
        'Bengal and Sumatran'
        
      ],
      'correctIndex': 1,
      'correctResponse': "Wow",
      'incorrectResponse': 'Better luck next time'
    },
    {
      'q': 'What age do Tigers live till in the wild?',
      'options': [
        '20-26 years',
        '20-24 years',
        '20-22 years'
      ],
      'correctIndex': 0,
      'correctResponse': "Cool",
      'incorrectResponse': 'Go again'
    },
    {
      'q': 'What length do tigers grow till?',
      'options': [
        '12 feet',
        '10 feet',
        '11 feet'
      ],
      'correctIndex': 2,
      'correctResponse': "Total Winner",
      'incorrectResponse': 'Try the quiz again'
    }
  ]

  $(document).ready(function() {
      $('#quiz').quiz({
        questions: myQuiz
      });
  })