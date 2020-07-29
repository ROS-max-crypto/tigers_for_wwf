const myQuiz = [
    {
      'q': "What's your nameWhat state is known as the tiger state of India??",
      'options': [
        'Assam',
        'Bengal',
        'Madhya Pradesh',
        ''
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
      'incorrectResponse': 'What were you tinking?'
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
      'incorrectResponse': 'You are Trash at this'
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
      'incorrectResponse': 'Total Loser'
    }
  ]

  $(document).ready(function() {
      $('#quiz').quiz({
        questions: myQuiz
      });
  })