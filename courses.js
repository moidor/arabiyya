/* Arabiyya — catalogue pédagogique v3 : 86 modules A1 → B2.
   50 nouveaux cours (25 A1, 25 A2) suivis des 36 cours v2 inchangés.
   Les données locales sont identifiées par ID : ne pas renommer les anciens IDs.
   Les voix audio dépendent du navigateur et du système ; pas de TTS serveur.
*/
const roadmap = [
  {
    "level": "A2",
    "goal": "Mois 1 à 4 : réviser systématiquement les structures, écrire des récits et mener des dialogues usuels."
  },
  {
    "level": "B1",
    "goal": "Mois 5 à 9 : complexifier les temps, modes, relatives, passifs et l’argumentation autonome."
  },
  {
    "level": "B2",
    "goal": "Mois 10 à 16 : textes analytiques, concessions, hypothèses, registres, synthèses et débats."
  }
];
const lessons = [
  {
    "id": "a1-01-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 1,
    "month": 1,
    "emoji": "👋",
    "title": "Saluer et se présenter",
    "minutes": 110,
    "goal": "Saluer poliment, dire son nom et demander celui de son interlocuteur.",
    "grammar": [
      {
        "title": "Deux façons de saluer",
        "body": "السَّلَامُ عَلَيْكُمْ appelle وَعَلَيْكُمُ السَّلَامُ ; مَرْحَبًا est plus neutre. صَبَاحُ الْخَيْرِ signifie « bonjour » le matin. En arabe, la politesse varie selon la situation, mais ces expressions conviennent à un débutant."
      },
      {
        "title": "Dire son nom",
        "body": "أَنَا سَامِي signifie « je suis Sami ». Pour dire « mon nom est », emploie اِسْمِي لَيْلَى : le suffixe ـِي marque « mon ». En phrase nominale au présent, il n’est pas nécessaire d’ajouter un verbe « être ». Écris أَنَا avec son alif final."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : السَّلَامُ عَلَيْكُمْ. Lis ensuite la réponse : وَعَلَيْكُمُ السَّلَامُ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "مَرْحَبًا! اِسْمِي سَامِي. أَنَا مِنْ فَرَنْسَا، وَأَتَعَلَّمُ الْعَرَبِيَّةَ. هَذِهِ صَدِيقَتِي لَيْلَى. نَتَكَلَّمُ بِالْعَرَبِيَّةِ فِي الصَّفِّ.",
      "fr": "Bonjour ! Je m’appelle Sami. Je viens de France et j’apprends l’arabe. Voici mon amie Leïla. Nous parlons arabe en classe."
    },
    "examples": [
      {
        "ar": "السَّلَامُ عَلَيْكُمْ.",
        "fr": "Que la paix soit sur vous.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "لَا",
              "لَا"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَعَلَيْكُمُ السَّلَامُ.",
        "fr": "Et sur vous la paix.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "لَا",
              "لَا"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "مَا اسْمُكَ؟",
        "fr": "Comment t’appelles-tu ? (à un homme)",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "اِسْمٌ",
              "اِسْمٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "اِسْمِي سَامِي. تَشَرَّفْتُ بِمَعْرِفَتِكَ.",
        "fr": "Je m’appelle Sami. Enchanté de te connaître.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "اِسْمٌ",
              "اِسْمٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "تَعَلَّمَ",
        "present": "يَتَعَلَّمُ",
        "masdar": "تَعَلُّمٌ",
        "fr": "apprendre",
        "lookup": "تعلم"
      },
      {
        "past": "تَكَلَّمَ",
        "present": "يَتَكَلَّمُ",
        "masdar": "تَكَلُّمٌ",
        "fr": "parler",
        "lookup": "تكلم"
      }
    ],
    "words": [
      [
        "مَرْحَبًا",
        "Bonjour"
      ],
      [
        "اِسْمٌ",
        "Nom"
      ],
      [
        "أَنَا",
        "Je"
      ],
      [
        "أَنْتَ",
        "Tu (masculin)"
      ],
      [
        "أَنْتِ",
        "Tu (féminin)"
      ],
      [
        "صَدِيقٌ",
        "Ami"
      ],
      [
        "صَدِيقَةٌ",
        "Amie"
      ],
      [
        "صَفٌّ",
        "Classe"
      ],
      [
        "فَرَنْسَا",
        "France"
      ],
      [
        "تَعَلَّمَ",
        "apprendre (accompli)"
      ],
      [
        "تَكَلَّمَ",
        "parler (accompli)"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ],
      [
        "مِنْ فَضْلِكَ",
        "S’il te plaît (à un homme)"
      ],
      [
        "شُكْرًا",
        "Merci"
      ]
    ],
    "dialect": [
      {
        "msa": "كَيْفَ حَالُكَ؟",
        "levant": "كِيفَكْ؟",
        "fr": "Comment vas-tu ?",
        "note": "كِيفَكْ (m.) / كِيفِكْ (f.) est courant en libanais et en syrien."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle expression signifie « mon nom est » ?",
        "options": [
          "اِسْمِي",
          "هَذَا",
          "فِي"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Deux façons de saluer ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَرْحَبًا ?",
        "options": [
          "Bonjour",
          "Tu (masculin)",
          "Classe"
        ],
        "answer": 0,
        "why": "مَرْحَبًا signifie « Bonjour ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie اِسْمٌ ?",
        "options": [
          "Ami",
          "apprendre (accompli)",
          "Nom"
        ],
        "answer": 2,
        "why": "اِسْمٌ signifie « Nom ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَنَا ?",
        "options": [
          "Oui",
          "Je",
          "Classe"
        ],
        "answer": 1,
        "why": "أَنَا signifie « Je ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَنْتَ ?",
        "options": [
          "Tu (masculin)",
          "apprendre (accompli)",
          "S’il te plaît (à un homme)"
        ],
        "answer": 0,
        "why": "أَنْتَ signifie « Tu (masculin) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَنْتِ ?",
        "options": [
          "Oui",
          "Bonjour",
          "Tu (féminin)"
        ],
        "answer": 2,
        "why": "أَنْتِ signifie « Tu (féminin) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie صَدِيقٌ ?",
        "options": [
          "Je",
          "Ami",
          "S’il te plaît (à un homme)"
        ],
        "answer": 1,
        "why": "صَدِيقٌ signifie « Ami ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَعَلَّمَ ?",
        "options": [
          "تَعَلُّمٌ",
          "تَكَلُّمٌ",
          "فَرَنْسَا"
        ],
        "answer": 0,
        "why": "تَعَلَّمَ — يَتَعَلَّمُ — تَعَلُّمٌ : apprendre."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَكَلَّمَ ?",
        "options": [
          "تَعَلُّمٌ",
          "تَعَلَّمَ",
          "تَكَلُّمٌ"
        ],
        "answer": 2,
        "why": "تَكَلَّمَ — يَتَكَلَّمُ — تَكَلُّمٌ : parler."
      },
      {
        "type": "input",
        "prompt": "Écris « Amie » en arabe (voyelles facultatives).",
        "answer": "صَدِيقَةٌ",
        "accepted": [
          "صديقة"
        ],
        "why": "صَدِيقَةٌ signifie « Amie »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Que la paix soit sur vous. » ?",
        "options": [
          "السَّلَامُ عَلَيْكُمْ.",
          "مَا اسْمُكَ؟",
          "اِسْمِي سَامِي. تَشَرَّفْتُ بِمَعْرِفَتِكَ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "السَّلَامُ عَلَيْكُمْ.",
        "fr": "Que la paix soit sur vous."
      },
      {
        "speaker": "سَامِي",
        "ar": "وَعَلَيْكُمُ السَّلَامُ.",
        "fr": "Et sur vous la paix."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَا اسْمُكَ؟",
        "fr": "Comment t’appelles-tu ? (à un homme)"
      },
      {
        "speaker": "سَامِي",
        "ar": "اِسْمِي سَامِي. تَشَرَّفْتُ بِمَعْرِفَتِكَ.",
        "fr": "Je m’appelle Sami. Enchanté de te connaître."
      }
    ],
    "writing": {
      "prompt": "Présente-toi en six phrases : nom, pays, langue maternelle, langue étudiée et salutation finale.",
      "modelAr": "مَرْحَبًا! اِسْمِي سَامِي. أَنَا مِنْ فَرَنْسَا، وَأَتَعَلَّمُ الْعَرَبِيَّةَ. هَذِهِ صَدِيقَتِي لَيْلَى. نَتَكَلَّمُ بِالْعَرَبِيَّةِ فِي الصَّفِّ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Saluer et se présenter ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue تَعَلَّمَ et تَكَلَّمَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Présente-toi en six phrases : nom, pays, langue maternelle, langue étudiée et salutation finale."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-02-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 2,
    "month": 1,
    "emoji": "🔤",
    "title": "Les lettres, les voyelles et le sens de lecture",
    "minutes": 110,
    "goal": "Reconnaître les sons de base et lire des mots courts vocalisés.",
    "grammar": [
      {
        "title": "Consonnes et voyelles brèves",
        "body": "L’arabe s’écrit de droite à gauche. Les signes َ (fatḥa), ِ (kasra) et ُ (ḍamma) indiquent a, i et ou bref. Ainsi كَ / كِ / كُ se lisent ka / ki / kou. Un signe de voyelle placé sur la lettre n’est pas une lettre supplémentaire."
      },
      {
        "title": "Voyelles longues et sukūn",
        "body": "ا, و et ي peuvent allonger les voyelles : بَا، بُو، بِي. Le sukūn ـْ marque l’absence de voyelle après une consonne : مِنْ. Les formes des lettres changent selon leur position ; cherche à reconnaître le même caractère dans بَابٌ et كِتَابٌ."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَا هَذَا؟ Lis ensuite la réponse : هَذَا كِتَابٌ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "هَذَا بَابٌ. وَهَذَا كِتَابٌ. فِي الْكِتَابِ كَلِمَاتٌ عَرَبِيَّةٌ. أَقْرَأُ كَلِمَةً، ثُمَّ أَكْتُبُهَا.",
      "fr": "Ceci est une porte. Et ceci est un livre. Il y a des mots arabes dans le livre. Je lis un mot puis je l’écris."
    },
    "examples": [
      {
        "ar": "مَا هَذَا؟",
        "fr": "Qu’est-ce que c’est ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "هَذَا كِتَابٌ.",
        "fr": "C’est un livre.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "كِتَابٌ",
              "كِتَابٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ تَقْرَأُ الْعَرَبِيَّةَ؟",
        "fr": "Lis-tu l’arabe ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "قَرَأَ",
              "قَرَأَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، أَقْرَأُ كَلِمَاتٍ قَصِيرَةً.",
        "fr": "Oui, je lis des mots courts.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "قَرَأَ",
              "قَرَأَ"
            ],
            [
              "نَعَمْ",
              "نَعَمْ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "قَرَأَ",
        "present": "يَقْرَأُ",
        "masdar": "قِرَاءَةٌ",
        "fr": "lire",
        "lookup": "قرأ"
      },
      {
        "past": "كَتَبَ",
        "present": "يَكْتُبُ",
        "masdar": "كِتَابَةٌ",
        "fr": "écrire",
        "lookup": "كتب"
      }
    ],
    "words": [
      [
        "حَرْفٌ",
        "Lettre"
      ],
      [
        "حَرَكَةٌ",
        "Voyelle brève"
      ],
      [
        "فَتْحَةٌ",
        "Fatḥa (a)"
      ],
      [
        "كَسْرَةٌ",
        "Kasra (i)"
      ],
      [
        "ضَمَّةٌ",
        "Ḍamma (ou)"
      ],
      [
        "سُكُونٌ",
        "Absence de voyelle"
      ],
      [
        "بَابٌ",
        "Porte"
      ],
      [
        "كِتَابٌ",
        "Livre"
      ],
      [
        "كَلِمَةٌ",
        "Mot"
      ],
      [
        "قَرَأَ",
        "lire (accompli)"
      ],
      [
        "قِرَاءَةٌ",
        "maṣdar : lire"
      ],
      [
        "كَتَبَ",
        "écrire (accompli)"
      ],
      [
        "كِتَابَةٌ",
        "maṣdar : écrire"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ]
    ],
    "dialect": [
      {
        "msa": "هَذَا كِتَابٌ.",
        "levant": "هَيْدَا كْتَابْ.",
        "fr": "C’est un livre.",
        "note": "La réalisation هَيْدَا est fréquente au Liban ; en Syrie, هَادَ est également courant selon la région."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel signe marque une consonne sans voyelle ?",
        "options": [
          "سُكُونٌ",
          "فَتْحَةٌ",
          "ضَمَّةٌ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Consonnes et voyelles brèves ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie حَرْفٌ ?",
        "options": [
          "Lettre",
          "Kasra (i)",
          "Livre"
        ],
        "answer": 0,
        "why": "حَرْفٌ signifie « Lettre ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie حَرَكَةٌ ?",
        "options": [
          "Absence de voyelle",
          "lire (accompli)",
          "Voyelle brève"
        ],
        "answer": 2,
        "why": "حَرَكَةٌ signifie « Voyelle brève ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie فَتْحَةٌ ?",
        "options": [
          "écrire (accompli)",
          "Fatḥa (a)",
          "Livre"
        ],
        "answer": 1,
        "why": "فَتْحَةٌ signifie « Fatḥa (a) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie كَسْرَةٌ ?",
        "options": [
          "Kasra (i)",
          "lire (accompli)",
          "Oui"
        ],
        "answer": 0,
        "why": "كَسْرَةٌ signifie « Kasra (i) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie ضَمَّةٌ ?",
        "options": [
          "écrire (accompli)",
          "Lettre",
          "Ḍamma (ou)"
        ],
        "answer": 2,
        "why": "ضَمَّةٌ signifie « Ḍamma (ou) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie سُكُونٌ ?",
        "options": [
          "Fatḥa (a)",
          "Absence de voyelle",
          "Oui"
        ],
        "answer": 1,
        "why": "سُكُونٌ signifie « Absence de voyelle ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَرَأَ ?",
        "options": [
          "قِرَاءَةٌ",
          "كِتَابَةٌ",
          "كَلِمَةٌ"
        ],
        "answer": 0,
        "why": "قَرَأَ — يَقْرَأُ — قِرَاءَةٌ : lire."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de كَتَبَ ?",
        "options": [
          "قِرَاءَةٌ",
          "قَرَأَ",
          "كِتَابَةٌ"
        ],
        "answer": 2,
        "why": "كَتَبَ — يَكْتُبُ — كِتَابَةٌ : écrire."
      },
      {
        "type": "input",
        "prompt": "Écris « Porte » en arabe (voyelles facultatives).",
        "answer": "بَابٌ",
        "accepted": [
          "باب"
        ],
        "why": "بَابٌ signifie « Porte »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Qu’est-ce que c’est ? » ?",
        "options": [
          "مَا هَذَا؟",
          "هَلْ تَقْرَأُ الْعَرَبِيَّةَ؟",
          "نَعَمْ، أَقْرَأُ كَلِمَاتٍ قَصِيرَةً."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَا هَذَا؟",
        "fr": "Qu’est-ce que c’est ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "هَذَا كِتَابٌ.",
        "fr": "C’est un livre."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ تَقْرَأُ الْعَرَبِيَّةَ؟",
        "fr": "Lis-tu l’arabe ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، أَقْرَأُ كَلِمَاتٍ قَصِيرَةً.",
        "fr": "Oui, je lis des mots courts."
      }
    ],
    "writing": {
      "prompt": "Lis dix mots vocalisés, copie-les et indique quelle voyelle brève tu vois sur chaque consonne.",
      "modelAr": "هَذَا بَابٌ. وَهَذَا كِتَابٌ. فِي الْكِتَابِ كَلِمَاتٌ عَرَبِيَّةٌ. أَقْرَأُ كَلِمَةً، ثُمَّ أَكْتُبُهَا.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Les lettres, les voyelles et le sens de lecture ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue قَرَأَ et كَتَبَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Lis dix mots vocalisés, copie-les et indique quelle voyelle brève tu vois sur chaque consonne."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-03-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 3,
    "month": 1,
    "emoji": "✍️",
    "title": "Hamza, tāʾ marbūṭa et shadda",
    "minutes": 110,
    "goal": "Déchiffrer les signes orthographiques qui changent la lecture.",
    "grammar": [
      {
        "title": "Hamza et alif",
        "body": "La hamza ء représente un coup de glotte. Observe أَكَلَ, إِسْمٌ et سَأَلَ : le support graphique varie. Ne confonds pas أَ en début de mot avec ا de l’article الْـ."
      },
      {
        "title": "Shadda et tāʾ marbūṭa",
        "body": "Le signe ّ double la consonne : دَرَسَ est différent de دَرَّسَ (« enseigner »). La tāʾ marbūṭa ة termine de nombreux noms féminins : مَدْرَسَةٌ. En liaison grammaticale, elle peut se prononcer t, notamment dans une annexion."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : هَلْ هَذِهِ مَدْرَسَةٌ؟ Lis ensuite la réponse : نَعَمْ، هَذِهِ مَدْرَسَةٌ جَدِيدَةٌ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أَنَا فِي مَدْرَسَةٍ جَدِيدَةٍ. عِنْدِي مُدَرِّسَةٌ طَيِّبَةٌ. أَقْرَأُ كَلِمَةً فِيهَا شَدَّةٌ، وَأَكْتُبُ الْحَرْفَ مَرَّتَيْنِ.",
      "fr": "Je suis dans une nouvelle école. J’ai une gentille enseignante. Je lis un mot contenant une shadda et j’écris la lettre deux fois."
    },
    "examples": [
      {
        "ar": "هَلْ هَذِهِ مَدْرَسَةٌ؟",
        "fr": "Est-ce une école ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مَدْرَسَةٌ",
              "مَدْرَسَةٌ"
            ],
            [
              "مُدَرِّسَةٌ",
              "مُدَرِّسَةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، هَذِهِ مَدْرَسَةٌ جَدِيدَةٌ.",
        "fr": "Oui, c’est une nouvelle école.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مَدْرَسَةٌ",
              "مَدْرَسَةٌ"
            ],
            [
              "مُدَرِّسَةٌ",
              "مُدَرِّسَةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "مَا هَذَا الرَّمْزُ؟",
        "fr": "Quel est ce signe ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "رَمْزٌ",
              "رَمْزٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَذِهِ شَدَّةٌ، وَهِيَ تُضَاعِفُ الْحَرْفَ.",
        "fr": "C’est une shadda, elle double la consonne.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "شَدَّةٌ",
              "شَدَّةٌ"
            ],
            [
              "حَرْفٌ",
              "حَرْفٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "قَرَأَ",
        "present": "يَقْرَأُ",
        "masdar": "قِرَاءَةٌ",
        "fr": "lire",
        "lookup": "قرأ"
      },
      {
        "past": "كَتَبَ",
        "present": "يَكْتُبُ",
        "masdar": "كِتَابَةٌ",
        "fr": "écrire",
        "lookup": "كتب"
      }
    ],
    "words": [
      [
        "هَمْزَةٌ",
        "Hamza"
      ],
      [
        "شَدَّةٌ",
        "Shadda"
      ],
      [
        "مَدْرَسَةٌ",
        "École"
      ],
      [
        "مُدَرِّسَةٌ",
        "Enseignante"
      ],
      [
        "رَمْزٌ",
        "Symbole"
      ],
      [
        "حَرْفٌ",
        "Lettre"
      ],
      [
        "جَدِيدَةٌ",
        "Nouvelle"
      ],
      [
        "طَيِّبَةٌ",
        "Gentille"
      ],
      [
        "مَرَّةٌ",
        "Fois"
      ],
      [
        "قَرَأَ",
        "lire (accompli)"
      ],
      [
        "قِرَاءَةٌ",
        "maṣdar : lire"
      ],
      [
        "كَتَبَ",
        "écrire (accompli)"
      ],
      [
        "كِتَابَةٌ",
        "maṣdar : écrire"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ]
    ],
    "dialect": [
      {
        "msa": "هَذِهِ مَدْرَسَةٌ.",
        "levant": "هَيْدِي مَدْرَسِة.",
        "fr": "C’est une école.",
        "note": "Hēdi est une forme libanaise ; les consonnes et voyelles varient entre villes levantines."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel signe indique une consonne doublée ?",
        "options": [
          "الشَّدَّةُ",
          "السُّكُونُ",
          "الْكَسْرَةُ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Hamza et alif ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie هَمْزَةٌ ?",
        "options": [
          "Hamza",
          "Enseignante",
          "Gentille"
        ],
        "answer": 0,
        "why": "هَمْزَةٌ signifie « Hamza ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie شَدَّةٌ ?",
        "options": [
          "Lettre",
          "lire (accompli)",
          "Shadda"
        ],
        "answer": 2,
        "why": "شَدَّةٌ signifie « Shadda ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَدْرَسَةٌ ?",
        "options": [
          "écrire (accompli)",
          "École",
          "Gentille"
        ],
        "answer": 1,
        "why": "مَدْرَسَةٌ signifie « École ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُدَرِّسَةٌ ?",
        "options": [
          "Enseignante",
          "lire (accompli)",
          "Oui"
        ],
        "answer": 0,
        "why": "مُدَرِّسَةٌ signifie « Enseignante ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie رَمْزٌ ?",
        "options": [
          "écrire (accompli)",
          "Hamza",
          "Symbole"
        ],
        "answer": 2,
        "why": "رَمْزٌ signifie « Symbole ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie حَرْفٌ ?",
        "options": [
          "École",
          "Lettre",
          "Oui"
        ],
        "answer": 1,
        "why": "حَرْفٌ signifie « Lettre ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَرَأَ ?",
        "options": [
          "قِرَاءَةٌ",
          "كِتَابَةٌ",
          "مَرَّةٌ"
        ],
        "answer": 0,
        "why": "قَرَأَ — يَقْرَأُ — قِرَاءَةٌ : lire."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de كَتَبَ ?",
        "options": [
          "قِرَاءَةٌ",
          "قَرَأَ",
          "كِتَابَةٌ"
        ],
        "answer": 2,
        "why": "كَتَبَ — يَكْتُبُ — كِتَابَةٌ : écrire."
      },
      {
        "type": "input",
        "prompt": "Écris « Nouvelle » en arabe (voyelles facultatives).",
        "answer": "جَدِيدَةٌ",
        "accepted": [
          "جديدة"
        ],
        "why": "جَدِيدَةٌ signifie « Nouvelle »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Est-ce une école ? » ?",
        "options": [
          "هَلْ هَذِهِ مَدْرَسَةٌ؟",
          "مَا هَذَا الرَّمْزُ؟",
          "هَذِهِ شَدَّةٌ، وَهِيَ تُضَاعِفُ الْحَرْفَ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ هَذِهِ مَدْرَسَةٌ؟",
        "fr": "Est-ce une école ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، هَذِهِ مَدْرَسَةٌ جَدِيدَةٌ.",
        "fr": "Oui, c’est une nouvelle école."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَا هَذَا الرَّمْزُ؟",
        "fr": "Quel est ce signe ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "هَذِهِ شَدَّةٌ، وَهِيَ تُضَاعِفُ الْحَرْفَ.",
        "fr": "C’est une shadda, elle double la consonne."
      }
    ],
    "writing": {
      "prompt": "Explique avec tes propres mots la différence entre أَكَلَ et إِسْمٌ et donne trois mots avec ة.",
      "modelAr": "أَنَا فِي مَدْرَسَةٍ جَدِيدَةٍ. عِنْدِي مُدَرِّسَةٌ طَيِّبَةٌ. أَقْرَأُ كَلِمَةً فِيهَا شَدَّةٌ، وَأَكْتُبُ الْحَرْفَ مَرَّتَيْنِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Hamza, tāʾ marbūṭa et shadda ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue قَرَأَ et كَتَبَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Explique avec tes propres mots la différence entre أَكَلَ et إِسْمٌ et donne trois mots avec ة."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-04-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 4,
    "month": 1,
    "emoji": "📖",
    "title": "La phrase nominale : ceci est un livre",
    "minutes": 110,
    "goal": "Construire des phrases simples sans verbe « être » au présent.",
    "grammar": [
      {
        "title": "Sujet et attribut",
        "body": "هَذَا كِتَابٌ signifie « ceci est un livre ». Le sujet هَذَا est déterminé ; le nom كِتَابٌ est souvent indéfini. Au présent, la phrase nominale n’exige pas de verbe « être ». Une phrase négative peut employer لَيْسَ, étudié plus tard."
      },
      {
        "title": "La finale -un",
        "body": "Le tanwīn ـٌ marque souvent l’indétermination d’un nom au nominatif : بَيْتٌ. Après الْـ, on dira الْبَيْتُ. Les finales casuelles sont écrites ici pour apprendre la morphologie, mais souvent non prononcées en fin de pause."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَا هَذَا؟ Lis ensuite la réponse : هَذَا بَيْتٌ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "هَذَا بَيْتٌ صَغِيرٌ، وَهَذِهِ غُرْفَةٌ كَبِيرَةٌ. الْبَيْتُ جَمِيلٌ وَنَظِيفٌ. فِي الْغُرْفَةِ كِتَابٌ وَقَلَمٌ.",
      "fr": "Voici une petite maison et une grande pièce. La maison est belle et propre. Dans la pièce se trouvent un livre et un stylo."
    },
    "examples": [
      {
        "ar": "مَا هَذَا؟",
        "fr": "Qu’est-ce que c’est ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "هَذَا",
              "هَذَا"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَذَا بَيْتٌ.",
        "fr": "C’est une maison.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "بَيْتٌ",
              "بَيْتٌ"
            ],
            [
              "هَذَا",
              "هَذَا"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلِ الْبَيْتُ كَبِيرٌ؟",
        "fr": "La maison est-elle grande ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "بَيْتٌ",
              "بَيْتٌ"
            ],
            [
              "كَبِيرٌ",
              "كَبِيرٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَا، الْبَيْتُ صَغِيرٌ وَلَكِنَّهُ جَمِيلٌ.",
        "fr": "Non, elle est petite, mais belle.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "بَيْتٌ",
              "بَيْتٌ"
            ],
            [
              "جَمِيلٌ",
              "جَمِيلٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "قَرَأَ",
        "present": "يَقْرَأُ",
        "masdar": "قِرَاءَةٌ",
        "fr": "lire",
        "lookup": "قرأ"
      },
      {
        "past": "كَتَبَ",
        "present": "يَكْتُبُ",
        "masdar": "كِتَابَةٌ",
        "fr": "écrire",
        "lookup": "كتب"
      }
    ],
    "words": [
      [
        "بَيْتٌ",
        "Maison"
      ],
      [
        "غُرْفَةٌ",
        "Pièce"
      ],
      [
        "قَلَمٌ",
        "Stylo"
      ],
      [
        "جَمِيلٌ",
        "Beau"
      ],
      [
        "نَظِيفٌ",
        "Propre"
      ],
      [
        "صَغِيرٌ",
        "Petit"
      ],
      [
        "كَبِيرٌ",
        "Grand"
      ],
      [
        "هَذَا",
        "Ceci (masculin)"
      ],
      [
        "هَذِهِ",
        "Ceci (féminin)"
      ],
      [
        "قَرَأَ",
        "lire (accompli)"
      ],
      [
        "قِرَاءَةٌ",
        "maṣdar : lire"
      ],
      [
        "كَتَبَ",
        "écrire (accompli)"
      ],
      [
        "كِتَابَةٌ",
        "maṣdar : écrire"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ]
    ],
    "dialect": [
      {
        "msa": "هَذَا بَيْتٌ.",
        "levant": "هَادَا بَيْتْ.",
        "fr": "C’est une maison.",
        "note": "Au Levant هَادَا / هَيْدَا sont employés selon la variété, sans tanwīn en langue parlée."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel est le sens de هَذَا بَيْتٌ ?",
        "options": [
          "Ceci est une maison.",
          "Il y a deux maisons.",
          "Cette maison est à moi."
        ],
        "answer": 0,
        "why": "Règle du chapitre : Sujet et attribut ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie بَيْتٌ ?",
        "options": [
          "Maison",
          "Beau",
          "Ceci (masculin)"
        ],
        "answer": 0,
        "why": "بَيْتٌ signifie « Maison ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie غُرْفَةٌ ?",
        "options": [
          "Petit",
          "lire (accompli)",
          "Pièce"
        ],
        "answer": 2,
        "why": "غُرْفَةٌ signifie « Pièce ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie قَلَمٌ ?",
        "options": [
          "écrire (accompli)",
          "Stylo",
          "Ceci (masculin)"
        ],
        "answer": 1,
        "why": "قَلَمٌ signifie « Stylo ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie جَمِيلٌ ?",
        "options": [
          "Beau",
          "lire (accompli)",
          "Oui"
        ],
        "answer": 0,
        "why": "جَمِيلٌ signifie « Beau ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie نَظِيفٌ ?",
        "options": [
          "écrire (accompli)",
          "Maison",
          "Propre"
        ],
        "answer": 2,
        "why": "نَظِيفٌ signifie « Propre ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie صَغِيرٌ ?",
        "options": [
          "Stylo",
          "Petit",
          "Oui"
        ],
        "answer": 1,
        "why": "صَغِيرٌ signifie « Petit ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَرَأَ ?",
        "options": [
          "قِرَاءَةٌ",
          "كِتَابَةٌ",
          "هَذِهِ"
        ],
        "answer": 0,
        "why": "قَرَأَ — يَقْرَأُ — قِرَاءَةٌ : lire."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de كَتَبَ ?",
        "options": [
          "قِرَاءَةٌ",
          "قَرَأَ",
          "كِتَابَةٌ"
        ],
        "answer": 2,
        "why": "كَتَبَ — يَكْتُبُ — كِتَابَةٌ : écrire."
      },
      {
        "type": "input",
        "prompt": "Écris « Grand » en arabe (voyelles facultatives).",
        "answer": "كَبِيرٌ",
        "accepted": [
          "كبير"
        ],
        "why": "كَبِيرٌ signifie « Grand »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Qu’est-ce que c’est ? » ?",
        "options": [
          "مَا هَذَا؟",
          "هَلِ الْبَيْتُ كَبِيرٌ؟",
          "لَا، الْبَيْتُ صَغِيرٌ وَلَكِنَّهُ جَمِيلٌ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَا هَذَا؟",
        "fr": "Qu’est-ce que c’est ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "هَذَا بَيْتٌ.",
        "fr": "C’est une maison."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلِ الْبَيْتُ كَبِيرٌ؟",
        "fr": "La maison est-elle grande ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "لَا، الْبَيْتُ صَغِيرٌ وَلَكِنَّهُ جَمِيلٌ.",
        "fr": "Non, elle est petite, mais belle."
      }
    ],
    "writing": {
      "prompt": "Décris cinq objets présents dans ta pièce en utilisant une phrase nominale et un adjectif.",
      "modelAr": "هَذَا بَيْتٌ صَغِيرٌ، وَهَذِهِ غُرْفَةٌ كَبِيرَةٌ. الْبَيْتُ جَمِيلٌ وَنَظِيفٌ. فِي الْغُرْفَةِ كِتَابٌ وَقَلَمٌ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « La phrase nominale : ceci est un livre ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue قَرَأَ et كَتَبَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Décris cinq objets présents dans ta pièce en utilisant une phrase nominale et un adjectif."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-05-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 5,
    "month": 1,
    "emoji": "👥",
    "title": "Pronoms personnels et genre",
    "minutes": 110,
    "goal": "Différencier « je », « tu », « il », « elle » et « nous ». ",
    "grammar": [
      {
        "title": "Pronoms séparés",
        "body": "أَنَا = je ; أَنْتَ = tu masculin ; أَنْتِ = tu féminin ; هُوَ = il ; هِيَ = elle ; نَحْنُ = nous. Ces pronoms servent à insister ou à constituer le sujet d’une phrase nominale."
      },
      {
        "title": "Le genre en contexte",
        "body": "هُوَ طَالِبٌ et هِيَ طَالِبَةٌ. Beaucoup de noms et d’adjectifs féminins ajoutent ة, mais des exceptions existent. L’accord se fait avec la personne décrite, non avec la personne qui parle."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَنْ هُوَ؟ Lis ensuite la réponse : هُوَ مُدَرِّسٌ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أَنَا طَالِبٌ فِي مَدْرَسَةِ اللُّغَاتِ. هَذِهِ لَيْلَى، هِيَ طَالِبَةٌ. وَهَذَا سَامِي، هُوَ مُدَرِّسٌ. نَحْنُ نُحِبُّ الْعَرَبِيَّةَ.",
      "fr": "Je suis étudiant dans une école de langues. Voici Leïla, elle est étudiante. Voici Sami, il est professeur. Nous aimons l’arabe."
    },
    "examples": [
      {
        "ar": "مَنْ هُوَ؟",
        "fr": "Qui est-il ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "هُوَ",
              "هُوَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هُوَ مُدَرِّسٌ.",
        "fr": "Il est professeur.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "هُوَ",
              "هُوَ"
            ],
            [
              "مُدَرِّسٌ",
              "مُدَرِّسٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَمَنْ هِيَ؟",
        "fr": "Et qui est-elle ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "هِيَ",
              "هِيَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هِيَ طَالِبَةٌ جَدِيدَةٌ.",
        "fr": "Elle est une nouvelle étudiante.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "هِيَ",
              "هِيَ"
            ],
            [
              "طَالِبٌ",
              "طَالِبٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "أَحَبَّ",
        "present": "يُحِبُّ",
        "masdar": "حُبٌّ",
        "fr": "aimer",
        "lookup": "أحب"
      },
      {
        "past": "دَرَسَ",
        "present": "يَدْرُسُ",
        "masdar": "دِرَاسَةٌ",
        "fr": "étudier",
        "lookup": "درس"
      }
    ],
    "words": [
      [
        "أَنَا",
        "Je"
      ],
      [
        "نَحْنُ",
        "Nous"
      ],
      [
        "أَنْتَ",
        "Tu (masculin)"
      ],
      [
        "أَنْتِ",
        "Tu (féminin)"
      ],
      [
        "هُوَ",
        "Il"
      ],
      [
        "هِيَ",
        "Elle"
      ],
      [
        "طَالِبٌ",
        "Étudiant"
      ],
      [
        "طَالِبَةٌ",
        "Étudiante"
      ],
      [
        "مُدَرِّسٌ",
        "Professeur"
      ],
      [
        "أَحَبَّ",
        "aimer (accompli)"
      ],
      [
        "حُبٌّ",
        "maṣdar : aimer"
      ],
      [
        "دَرَسَ",
        "étudier (accompli)"
      ],
      [
        "دِرَاسَةٌ",
        "maṣdar : étudier"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ]
    ],
    "dialect": [
      {
        "msa": "أَنَا طَالِبٌ.",
        "levant": "أَنَا طَالِبْ.",
        "fr": "Je suis étudiant.",
        "note": "Le tanwīn des mots indéfinis disparaît généralement en dialecte."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel pronom correspond à « elle » ?",
        "options": [
          "هِيَ",
          "هُوَ",
          "نَحْنُ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Pronoms séparés ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَنَا ?",
        "options": [
          "Je",
          "Tu (féminin)",
          "Étudiante"
        ],
        "answer": 0,
        "why": "أَنَا signifie « Je ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie نَحْنُ ?",
        "options": [
          "Elle",
          "aimer (accompli)",
          "Nous"
        ],
        "answer": 2,
        "why": "نَحْنُ signifie « Nous ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَنْتَ ?",
        "options": [
          "étudier (accompli)",
          "Tu (masculin)",
          "Étudiante"
        ],
        "answer": 1,
        "why": "أَنْتَ signifie « Tu (masculin) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَنْتِ ?",
        "options": [
          "Tu (féminin)",
          "aimer (accompli)",
          "Oui"
        ],
        "answer": 0,
        "why": "أَنْتِ signifie « Tu (féminin) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie هُوَ ?",
        "options": [
          "étudier (accompli)",
          "Je",
          "Il"
        ],
        "answer": 2,
        "why": "هُوَ signifie « Il ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie هِيَ ?",
        "options": [
          "Tu (masculin)",
          "Elle",
          "Oui"
        ],
        "answer": 1,
        "why": "هِيَ signifie « Elle ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَحَبَّ ?",
        "options": [
          "حُبٌّ",
          "دِرَاسَةٌ",
          "مُدَرِّسٌ"
        ],
        "answer": 0,
        "why": "أَحَبَّ — يُحِبُّ — حُبٌّ : aimer."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de دَرَسَ ?",
        "options": [
          "حُبٌّ",
          "أَحَبَّ",
          "دِرَاسَةٌ"
        ],
        "answer": 2,
        "why": "دَرَسَ — يَدْرُسُ — دِرَاسَةٌ : étudier."
      },
      {
        "type": "input",
        "prompt": "Écris « Étudiant » en arabe (voyelles facultatives).",
        "answer": "طَالِبٌ",
        "accepted": [
          "طالب"
        ],
        "why": "طَالِبٌ signifie « Étudiant »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Qui est-il ? » ?",
        "options": [
          "مَنْ هُوَ؟",
          "وَمَنْ هِيَ؟",
          "هِيَ طَالِبَةٌ جَدِيدَةٌ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَنْ هُوَ؟",
        "fr": "Qui est-il ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "هُوَ مُدَرِّسٌ.",
        "fr": "Il est professeur."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "وَمَنْ هِيَ؟",
        "fr": "Et qui est-elle ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "هِيَ طَالِبَةٌ جَدِيدَةٌ.",
        "fr": "Elle est une nouvelle étudiante."
      }
    ],
    "writing": {
      "prompt": "Présente trois personnes réelles ou fictives avec هُوَ, هِيَ et نَحْنُ.",
      "modelAr": "أَنَا طَالِبٌ فِي مَدْرَسَةِ اللُّغَاتِ. هَذِهِ لَيْلَى، هِيَ طَالِبَةٌ. وَهَذَا سَامِي، هُوَ مُدَرِّسٌ. نَحْنُ نُحِبُّ الْعَرَبِيَّةَ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Pronoms personnels et genre ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue أَحَبَّ et دَرَسَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Présente trois personnes réelles ou fictives avec هُوَ, هِيَ et نَحْنُ."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-06-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 6,
    "month": 2,
    "emoji": "👉",
    "title": "Démonstratifs proches",
    "minutes": 110,
    "goal": "Montrer une personne ou un objet et accorder le démonstratif.",
    "grammar": [
      {
        "title": "Hādhā et hādhihi",
        "body": "هَذَا accompagne un référent masculin singulier et هَذِهِ un féminin singulier. هَذَا الْكِتَابُ signifie « ce livre » ; هَذَا كِتَابٌ signifie « ceci est un livre ». Note la différence de détermination."
      },
      {
        "title": "Montrer puis décrire",
        "body": "Dans هَذِهِ الْمَدِينَةُ جَمِيلَةٌ, la ville est désignée puis décrite. On peut aussi demander أَهَذَا كِتَابُكَ؟ « Est-ce ton livre ? ». Le démonstratif ne suffit pas à lui seul à indiquer la possession."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : هَلْ هَذَا قَلَمُكَ؟ Lis ensuite la réponse : نَعَمْ، هَذَا قَلَمِي. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "هَذَا كِتَابِي، وَهَذِهِ حَقِيبَتِي. الْكِتَابُ صَغِيرٌ، وَالْحَقِيبَةُ كَبِيرَةٌ. هَذَا صَدِيقِي أَحْمَدُ، وَهَذِهِ صَدِيقَتِي مَرْيَمُ.",
      "fr": "Voici mon livre et mon sac. Le livre est petit et le sac est grand. Voici mon ami Ahmed et mon amie Maryam."
    },
    "examples": [
      {
        "ar": "هَلْ هَذَا قَلَمُكَ؟",
        "fr": "Est-ce ton stylo ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "هَذَا",
              "هَذَا"
            ],
            [
              "قَلَمٌ",
              "قَلَمٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، هَذَا قَلَمِي.",
        "fr": "Oui, c’est mon stylo.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "هَذَا",
              "هَذَا"
            ],
            [
              "قَلَمٌ",
              "قَلَمٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَهَلْ هَذِهِ حَقِيبَتُكَ؟",
        "fr": "Et est-ce ton sac ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "هَذِهِ",
              "هَذِهِ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَا، هَذِهِ حَقِيبَةُ مَرْيَمَ.",
        "fr": "Non, c’est le sac de Maryam.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "هَذِهِ",
              "هَذِهِ"
            ],
            [
              "حَقِيبَةٌ",
              "حَقِيبَةٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "رَأَى",
        "present": "يَرَى",
        "masdar": "رُؤْيَةٌ",
        "fr": "voir",
        "lookup": "رأى"
      },
      {
        "past": "عَرَفَ",
        "present": "يَعْرِفُ",
        "masdar": "مَعْرِفَةٌ",
        "fr": "connaître",
        "lookup": "عرف"
      }
    ],
    "words": [
      [
        "هَذَا",
        "Ce / ceci (masculin)"
      ],
      [
        "هَذِهِ",
        "Cette / ceci (féminin)"
      ],
      [
        "حَقِيبَةٌ",
        "Sac"
      ],
      [
        "كِتَابٌ",
        "Livre"
      ],
      [
        "قَلَمٌ",
        "Stylo"
      ],
      [
        "صَدِيقٌ",
        "Ami"
      ],
      [
        "صَدِيقَةٌ",
        "Amie"
      ],
      [
        "مَدِينَةٌ",
        "Ville"
      ],
      [
        "مِلْكِيَّةٌ",
        "Possession"
      ],
      [
        "رَأَى",
        "voir (accompli)"
      ],
      [
        "رُؤْيَةٌ",
        "maṣdar : voir"
      ],
      [
        "عَرَفَ",
        "connaître (accompli)"
      ],
      [
        "مَعْرِفَةٌ",
        "maṣdar : connaître"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ]
    ],
    "dialect": [
      {
        "msa": "هَذِهِ حَقِيبَتِي.",
        "levant": "هَيْدِي شَنْطْتِي.",
        "fr": "C’est mon sac.",
        "note": "شَنْطَة est courant pour « sac » en langue parlée."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel démonstratif convient avec حَقِيبَةٌ ?",
        "options": [
          "هَذِهِ",
          "هَذَا",
          "هُوَ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Hādhā et hādhihi ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie هَذَا ?",
        "options": [
          "Ce / ceci (masculin)",
          "Livre",
          "Ville"
        ],
        "answer": 0,
        "why": "هَذَا signifie « Ce / ceci (masculin) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie هَذِهِ ?",
        "options": [
          "Ami",
          "voir (accompli)",
          "Cette / ceci (féminin)"
        ],
        "answer": 2,
        "why": "هَذِهِ signifie « Cette / ceci (féminin) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie حَقِيبَةٌ ?",
        "options": [
          "connaître (accompli)",
          "Sac",
          "Ville"
        ],
        "answer": 1,
        "why": "حَقِيبَةٌ signifie « Sac ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie كِتَابٌ ?",
        "options": [
          "Livre",
          "voir (accompli)",
          "Oui"
        ],
        "answer": 0,
        "why": "كِتَابٌ signifie « Livre ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie قَلَمٌ ?",
        "options": [
          "connaître (accompli)",
          "Ce / ceci (masculin)",
          "Stylo"
        ],
        "answer": 2,
        "why": "قَلَمٌ signifie « Stylo ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie صَدِيقٌ ?",
        "options": [
          "Sac",
          "Ami",
          "Oui"
        ],
        "answer": 1,
        "why": "صَدِيقٌ signifie « Ami ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de رَأَى ?",
        "options": [
          "رُؤْيَةٌ",
          "مَعْرِفَةٌ",
          "مِلْكِيَّةٌ"
        ],
        "answer": 0,
        "why": "رَأَى — يَرَى — رُؤْيَةٌ : voir."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de عَرَفَ ?",
        "options": [
          "رُؤْيَةٌ",
          "رَأَى",
          "مَعْرِفَةٌ"
        ],
        "answer": 2,
        "why": "عَرَفَ — يَعْرِفُ — مَعْرِفَةٌ : connaître."
      },
      {
        "type": "input",
        "prompt": "Écris « Amie » en arabe (voyelles facultatives).",
        "answer": "صَدِيقَةٌ",
        "accepted": [
          "صديقة"
        ],
        "why": "صَدِيقَةٌ signifie « Amie »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Est-ce ton stylo ? » ?",
        "options": [
          "هَلْ هَذَا قَلَمُكَ؟",
          "وَهَلْ هَذِهِ حَقِيبَتُكَ؟",
          "لَا، هَذِهِ حَقِيبَةُ مَرْيَمَ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ هَذَا قَلَمُكَ؟",
        "fr": "Est-ce ton stylo ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، هَذَا قَلَمِي.",
        "fr": "Oui, c’est mon stylo."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "وَهَلْ هَذِهِ حَقِيبَتُكَ؟",
        "fr": "Et est-ce ton sac ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "لَا، هَذِهِ حَقِيبَةُ مَرْيَمَ.",
        "fr": "Non, c’est le sac de Maryam."
      }
    ],
    "writing": {
      "prompt": "Montre et décris six objets : trois masculins et trois féminins.",
      "modelAr": "هَذَا كِتَابِي، وَهَذِهِ حَقِيبَتِي. الْكِتَابُ صَغِيرٌ، وَالْحَقِيبَةُ كَبِيرَةٌ. هَذَا صَدِيقِي أَحْمَدُ، وَهَذِهِ صَدِيقَتِي مَرْيَمُ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Démonstratifs proches ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue رَأَى et عَرَفَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Montre et décris six objets : trois masculins et trois féminins."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-07-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 7,
    "month": 2,
    "emoji": "❓",
    "title": "Poser des questions simples",
    "minutes": 110,
    "goal": "Employer qui, quoi, où et les interrogations fermées.",
    "grammar": [
      {
        "title": "Les interrogatifs",
        "body": "مَنْ ؟ = qui ? ; مَا ؟ = quoi ? ; أَيْنَ ؟ = où ? ; مَتَى ؟ = quand ? ; كَيْفَ ؟ = comment ? ; لِمَاذَا ؟ = pourquoi ? Choisis l’interrogatif selon l’information attendue."
      },
      {
        "title": "HAL et la hamza interrogative",
        "body": "هَلْ تَدْرُسُ الْعَرَبِيَّةَ؟ et أَتَدْرُسُ الْعَرَبِيَّةَ؟ demandent tous deux « Étudies-tu l’arabe ? ». هَلْ est un mot indépendant ; أَ se préfixe. Une réponse « oui » se formule نَعَمْ."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : أَيْنَ تَسْكُنُ؟ Lis ensuite la réponse : أَسْكُنُ فِي نَانْتَ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "فِي الصَّفِّ يَسْأَلُ الْمُدَرِّسُ: مَنْ أَنْتَ؟ مِنْ أَيْنَ أَنْتَ؟ أَيْنَ تَسْكُنُ؟ يُجِيبُ سَامِي عَنْ كُلِّ سُؤَالٍ بِجُمْلَةٍ قَصِيرَةٍ.",
      "fr": "En classe, le professeur demande : qui es-tu ? D’où viens-tu ? Où habites-tu ? Sami répond à chaque question par une courte phrase."
    },
    "examples": [
      {
        "ar": "أَيْنَ تَسْكُنُ؟",
        "fr": "Où habites-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَيْنَ",
              "أَيْنَ"
            ],
            [
              "سَكَنَ",
              "سَكَنَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أَسْكُنُ فِي نَانْتَ.",
        "fr": "J’habite à Nantes.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "سَكَنَ",
              "سَكَنَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ تَدْرُسُ الْعَرَبِيَّةَ؟",
        "fr": "Étudies-tu l’arabe ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "هَلْ",
              "هَلْ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، أَدْرُسُهَا كُلَّ يَوْمٍ.",
        "fr": "Oui, je l’étudie chaque jour.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "نَعَمْ",
              "نَعَمْ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "سَأَلَ",
        "present": "يَسْأَلُ",
        "masdar": "سُؤَالٌ",
        "fr": "demander",
        "lookup": "سأل"
      },
      {
        "past": "سَكَنَ",
        "present": "يَسْكُنُ",
        "masdar": "سُكْنَى",
        "fr": "habiter",
        "lookup": "سكن"
      }
    ],
    "words": [
      [
        "مَنْ",
        "Qui"
      ],
      [
        "مَا",
        "Quoi"
      ],
      [
        "أَيْنَ",
        "Où"
      ],
      [
        "مَتَى",
        "Quand"
      ],
      [
        "كَيْفَ",
        "Comment"
      ],
      [
        "لِمَاذَا",
        "Pourquoi"
      ],
      [
        "هَلْ",
        "Est-ce que"
      ],
      [
        "سُؤَالٌ",
        "Question"
      ],
      [
        "جَوَابٌ",
        "Réponse"
      ],
      [
        "سَأَلَ",
        "demander (accompli)"
      ],
      [
        "سَكَنَ",
        "habiter (accompli)"
      ],
      [
        "سُكْنَى",
        "maṣdar : habiter"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ],
      [
        "مِنْ فَضْلِكَ",
        "S’il te plaît (à un homme)"
      ]
    ],
    "dialect": [
      {
        "msa": "أَيْنَ أَنْتَ؟",
        "levant": "وَيْنَكْ؟",
        "fr": "Où es-tu ?",
        "note": "وَيْن est l’équivalent levantin courant de أَيْنَ."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel interrogatif demande un lieu ?",
        "options": [
          "أَيْنَ",
          "مَنْ",
          "مَتَى"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Les interrogatifs ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَنْ ?",
        "options": [
          "Qui",
          "Quand",
          "Question"
        ],
        "answer": 0,
        "why": "مَنْ signifie « Qui ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَا ?",
        "options": [
          "Pourquoi",
          "demander (accompli)",
          "Quoi"
        ],
        "answer": 2,
        "why": "مَا signifie « Quoi ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَيْنَ ?",
        "options": [
          "maṣdar : habiter",
          "Où",
          "Question"
        ],
        "answer": 1,
        "why": "أَيْنَ signifie « Où ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَتَى ?",
        "options": [
          "Quand",
          "demander (accompli)",
          "Non"
        ],
        "answer": 0,
        "why": "مَتَى signifie « Quand ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie كَيْفَ ?",
        "options": [
          "maṣdar : habiter",
          "Qui",
          "Comment"
        ],
        "answer": 2,
        "why": "كَيْفَ signifie « Comment ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie لِمَاذَا ?",
        "options": [
          "Où",
          "Pourquoi",
          "Non"
        ],
        "answer": 1,
        "why": "لِمَاذَا signifie « Pourquoi ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de سَأَلَ ?",
        "options": [
          "سُؤَالٌ",
          "سُكْنَى",
          "جَوَابٌ"
        ],
        "answer": 0,
        "why": "سَأَلَ — يَسْأَلُ — سُؤَالٌ : demander."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de سَكَنَ ?",
        "options": [
          "سُؤَالٌ",
          "سَأَلَ",
          "سُكْنَى"
        ],
        "answer": 2,
        "why": "سَكَنَ — يَسْكُنُ — سُكْنَى : habiter."
      },
      {
        "type": "input",
        "prompt": "Écris « Est-ce que » en arabe (voyelles facultatives).",
        "answer": "هَلْ",
        "accepted": [
          "هل"
        ],
        "why": "هَلْ signifie « Est-ce que »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Où habites-tu ? » ?",
        "options": [
          "أَيْنَ تَسْكُنُ؟",
          "هَلْ تَدْرُسُ الْعَرَبِيَّةَ؟",
          "نَعَمْ، أَدْرُسُهَا كُلَّ يَوْمٍ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "أَيْنَ تَسْكُنُ؟",
        "fr": "Où habites-tu ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أَسْكُنُ فِي نَانْتَ.",
        "fr": "J’habite à Nantes."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ تَدْرُسُ الْعَرَبِيَّةَ؟",
        "fr": "Étudies-tu l’arabe ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، أَدْرُسُهَا كُلَّ يَوْمٍ.",
        "fr": "Oui, je l’étudie chaque jour."
      }
    ],
    "writing": {
      "prompt": "Écris dix questions avec au moins cinq mots interrogatifs différents.",
      "modelAr": "فِي الصَّفِّ يَسْأَلُ الْمُدَرِّسُ: مَنْ أَنْتَ؟ مِنْ أَيْنَ أَنْتَ؟ أَيْنَ تَسْكُنُ؟ يُجِيبُ سَامِي عَنْ كُلِّ سُؤَالٍ بِجُمْلَةٍ قَصِيرَةٍ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Poser des questions simples ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue سَأَلَ et سَكَنَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Écris dix questions avec au moins cinq mots interrogatifs différents."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-08-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 8,
    "month": 2,
    "emoji": "☀️",
    "title": "Article défini et lettres solaires",
    "minutes": 110,
    "goal": "Lire et former des groupes nominaux définis.",
    "grammar": [
      {
        "title": "Al- et l’indéfini",
        "body": "كِتَابٌ signifie « un livre » ; الْكِتَابُ signifie « le livre ». L’article est الْـ. Il remplace le tanwīn d’indétermination ; la finale casuelle, elle, dépend du rôle syntaxique du nom."
      },
      {
        "title": "Lettres solaires",
        "body": "Avec certaines consonnes, le l de l’article n’est pas prononcé et la première consonne se double : الشَّمْسُ (ash-shamsu). Compare الْقَمَرُ (al-qamaru), lettre lunaire. La shadda marque l’assimilation."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : هَلْ تَرَى الشَّمْسَ؟ Lis ensuite la réponse : نَعَمْ، الشَّمْسُ مُشْرِقَةٌ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أَنْظُرُ إِلَى السَّمَاءِ. الشَّمْسُ مُشْرِقَةٌ، وَالْقَمَرُ غَائِبٌ. فِي الْبَيْتِ كِتَابٌ عَلَى الطَّاوِلَةِ، وَالْكِتَابُ جَدِيدٌ.",
      "fr": "Je regarde le ciel. Le soleil brille et la lune n’est pas visible. Dans la maison, il y a un livre sur la table, et ce livre est neuf."
    },
    "examples": [
      {
        "ar": "هَلْ تَرَى الشَّمْسَ؟",
        "fr": "Vois-tu le soleil ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "الشَّمْسُ",
              "الشَّمْسُ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، الشَّمْسُ مُشْرِقَةٌ.",
        "fr": "Oui, le soleil brille.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "الشَّمْسُ",
              "الشَّمْسُ"
            ],
            [
              "مُشْرِقَةٌ",
              "مُشْرِقَةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أَيْنَ الْكِتَابُ؟",
        "fr": "Où est le livre ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "الْكِتَابُ",
              "الْكِتَابُ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "الْكِتَابُ عَلَى الطَّاوِلَةِ.",
        "fr": "Le livre est sur la table.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "الطَّاوِلَةُ",
              "الطَّاوِلَةُ"
            ],
            [
              "الْكِتَابُ",
              "الْكِتَابُ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "رَأَى",
        "present": "يَرَى",
        "masdar": "رُؤْيَةٌ",
        "fr": "voir",
        "lookup": "رأى"
      },
      {
        "past": "قَرَأَ",
        "present": "يَقْرَأُ",
        "masdar": "قِرَاءَةٌ",
        "fr": "lire",
        "lookup": "قرأ"
      }
    ],
    "words": [
      [
        "الشَّمْسُ",
        "Le soleil"
      ],
      [
        "الْقَمَرُ",
        "La lune"
      ],
      [
        "السَّمَاءُ",
        "Le ciel"
      ],
      [
        "الطَّاوِلَةُ",
        "La table"
      ],
      [
        "الْبَيْتُ",
        "La maison"
      ],
      [
        "الْكِتَابُ",
        "Le livre"
      ],
      [
        "حَرْفٌ شَمْسِيٌّ",
        "Lettre solaire"
      ],
      [
        "حَرْفٌ قَمَرِيٌّ",
        "Lettre lunaire"
      ],
      [
        "مُشْرِقَةٌ",
        "Lumineuse"
      ],
      [
        "رَأَى",
        "voir (accompli)"
      ],
      [
        "رُؤْيَةٌ",
        "maṣdar : voir"
      ],
      [
        "قَرَأَ",
        "lire (accompli)"
      ],
      [
        "قِرَاءَةٌ",
        "maṣdar : lire"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ]
    ],
    "dialect": [
      {
        "msa": "الشَّمْسُ قَوِيَّةٌ.",
        "levant": "الشَّمْسْ قَوِيِّة.",
        "fr": "Le soleil est fort.",
        "note": "La langue parlée garde l’assimilation de l’article devant ش."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel mot commence par un article solaire ?",
        "options": [
          "الشَّمْسُ",
          "الْقَمَرُ",
          "الْبَيْتُ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Al- et l’indéfini ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie الشَّمْسُ ?",
        "options": [
          "Le soleil",
          "La table",
          "Lettre lunaire"
        ],
        "answer": 0,
        "why": "الشَّمْسُ signifie « Le soleil ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie الْقَمَرُ ?",
        "options": [
          "Le livre",
          "voir (accompli)",
          "La lune"
        ],
        "answer": 2,
        "why": "الْقَمَرُ signifie « La lune ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie السَّمَاءُ ?",
        "options": [
          "lire (accompli)",
          "Le ciel",
          "Lettre lunaire"
        ],
        "answer": 1,
        "why": "السَّمَاءُ signifie « Le ciel ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie الطَّاوِلَةُ ?",
        "options": [
          "La table",
          "voir (accompli)",
          "Oui"
        ],
        "answer": 0,
        "why": "الطَّاوِلَةُ signifie « La table ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie الْبَيْتُ ?",
        "options": [
          "lire (accompli)",
          "Le soleil",
          "La maison"
        ],
        "answer": 2,
        "why": "الْبَيْتُ signifie « La maison ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie الْكِتَابُ ?",
        "options": [
          "Le ciel",
          "Le livre",
          "Oui"
        ],
        "answer": 1,
        "why": "الْكِتَابُ signifie « Le livre ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de رَأَى ?",
        "options": [
          "رُؤْيَةٌ",
          "قِرَاءَةٌ",
          "مُشْرِقَةٌ"
        ],
        "answer": 0,
        "why": "رَأَى — يَرَى — رُؤْيَةٌ : voir."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَرَأَ ?",
        "options": [
          "رُؤْيَةٌ",
          "رَأَى",
          "قِرَاءَةٌ"
        ],
        "answer": 2,
        "why": "قَرَأَ — يَقْرَأُ — قِرَاءَةٌ : lire."
      },
      {
        "type": "input",
        "prompt": "Écris « Lettre solaire » en arabe (voyelles facultatives).",
        "answer": "حَرْفٌ شَمْسِيٌّ",
        "accepted": [
          "حرف شمسي"
        ],
        "why": "حَرْفٌ شَمْسِيٌّ signifie « Lettre solaire »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Vois-tu le soleil ? » ?",
        "options": [
          "هَلْ تَرَى الشَّمْسَ؟",
          "أَيْنَ الْكِتَابُ؟",
          "الْكِتَابُ عَلَى الطَّاوِلَةِ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ تَرَى الشَّمْسَ؟",
        "fr": "Vois-tu le soleil ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، الشَّمْسُ مُشْرِقَةٌ.",
        "fr": "Oui, le soleil brille."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "أَيْنَ الْكِتَابُ؟",
        "fr": "Où est le livre ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "الْكِتَابُ عَلَى الطَّاوِلَةِ.",
        "fr": "Le livre est sur la table."
      }
    ],
    "writing": {
      "prompt": "Trouve cinq noms avec lettre solaire et cinq avec lettre lunaire, et lis-les à voix haute.",
      "modelAr": "أَنْظُرُ إِلَى السَّمَاءِ. الشَّمْسُ مُشْرِقَةٌ، وَالْقَمَرُ غَائِبٌ. فِي الْبَيْتِ كِتَابٌ عَلَى الطَّاوِلَةِ، وَالْكِتَابُ جَدِيدٌ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Article défini et lettres solaires ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue رَأَى et قَرَأَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Trouve cinq noms avec lettre solaire et cinq avec lettre lunaire, et lis-les à voix haute."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-09-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 9,
    "month": 2,
    "emoji": "🎨",
    "title": "Masculin, féminin et adjectifs",
    "minutes": 110,
    "goal": "Accorder un adjectif avec le nom qu’il décrit.",
    "grammar": [
      {
        "title": "Accord du genre",
        "body": "هَذَا كِتَابٌ جَدِيدٌ mais هَذِهِ حَقِيبَةٌ جَدِيدَةٌ : l’adjectif prend la marque ة au féminin singulier lorsque c’est la forme régulière. En règle générale, il suit le nom."
      },
      {
        "title": "Défini ou indéfini",
        "body": "الْكِتَابُ الْجَدِيدُ (« le nouveau livre ») : nom et épithète sont définis. الْكِتَابُ جَدِيدٌ (« le livre est nouveau ») : le second mot est attribut, pas épithète. La différence est fondamentale pour bien lire."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : هَلْ هَذَا الْكُرْسِيُّ جَدِيدٌ؟ Lis ensuite la réponse : لَا، هُوَ قَدِيمٌ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "فِي الْغُرْفَةِ طَاوِلَةٌ صَغِيرَةٌ وَكُرْسِيٌّ كَبِيرٌ. الطَّاوِلَةُ جَدِيدَةٌ، وَلَكِنَّ الْكُرْسِيَّ قَدِيمٌ. هَذِهِ غُرْفَةٌ مُرِيحَةٌ.",
      "fr": "Dans la pièce se trouvent une petite table et une grande chaise. La table est neuve, mais la chaise est ancienne. C’est une pièce confortable."
    },
    "examples": [
      {
        "ar": "هَلْ هَذَا الْكُرْسِيُّ جَدِيدٌ؟",
        "fr": "Cette chaise est-elle neuve ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "كُرْسِيٌّ",
              "كُرْسِيٌّ"
            ],
            [
              "جَدِيدٌ",
              "جَدِيدٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَا، هُوَ قَدِيمٌ.",
        "fr": "Non, elle est ancienne.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "قَدِيمٌ",
              "قَدِيمٌ"
            ],
            [
              "لَا",
              "لَا"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَهَلْ هَذِهِ الطَّاوِلَةُ كَبِيرَةٌ؟",
        "fr": "Et cette table est-elle grande ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "طَاوِلَةٌ",
              "طَاوِلَةٌ"
            ],
            [
              "كَبِيرَةٌ",
              "كَبِيرَةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَا، هِيَ صَغِيرَةٌ.",
        "fr": "Non, elle est petite.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "صَغِيرٌ",
              "صَغِيرٌ"
            ],
            [
              "لَا",
              "لَا"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "اِشْتَرَى",
        "present": "يَشْتَرِي",
        "masdar": "اِشْتِرَاءٌ",
        "fr": "acheter",
        "lookup": "اشترى"
      },
      {
        "past": "رَأَى",
        "present": "يَرَى",
        "masdar": "رُؤْيَةٌ",
        "fr": "voir",
        "lookup": "رأى"
      }
    ],
    "words": [
      [
        "كُرْسِيٌّ",
        "Chaise"
      ],
      [
        "طَاوِلَةٌ",
        "Table"
      ],
      [
        "جَدِيدٌ",
        "Neuf"
      ],
      [
        "جَدِيدَةٌ",
        "Neuve"
      ],
      [
        "قَدِيمٌ",
        "Ancien"
      ],
      [
        "قَدِيمَةٌ",
        "Ancienne"
      ],
      [
        "مُرِيحٌ",
        "Confortable"
      ],
      [
        "صَغِيرٌ",
        "Petit"
      ],
      [
        "كَبِيرَةٌ",
        "Grande"
      ],
      [
        "اِشْتَرَى",
        "acheter (accompli)"
      ],
      [
        "اِشْتِرَاءٌ",
        "maṣdar : acheter"
      ],
      [
        "رَأَى",
        "voir (accompli)"
      ],
      [
        "رُؤْيَةٌ",
        "maṣdar : voir"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ]
    ],
    "dialect": [
      {
        "msa": "الْغُرْفَةُ صَغِيرَةٌ.",
        "levant": "الْأُوضَة صْغِيرَة.",
        "fr": "La pièce est petite.",
        "note": "أُوضَة est courant pour pièce/chambre dans plusieurs variétés levantines."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel groupe signifie « le nouveau livre » ?",
        "options": [
          "الْكِتَابُ الْجَدِيدُ",
          "الْكِتَابُ جَدِيدٌ",
          "كِتَابٌ جَدِيدٌ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Accord du genre ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie كُرْسِيٌّ ?",
        "options": [
          "Chaise",
          "Neuve",
          "Petit"
        ],
        "answer": 0,
        "why": "كُرْسِيٌّ signifie « Chaise ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie طَاوِلَةٌ ?",
        "options": [
          "Ancienne",
          "acheter (accompli)",
          "Table"
        ],
        "answer": 2,
        "why": "طَاوِلَةٌ signifie « Table ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie جَدِيدٌ ?",
        "options": [
          "voir (accompli)",
          "Neuf",
          "Petit"
        ],
        "answer": 1,
        "why": "جَدِيدٌ signifie « Neuf ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie جَدِيدَةٌ ?",
        "options": [
          "Neuve",
          "acheter (accompli)",
          "Oui"
        ],
        "answer": 0,
        "why": "جَدِيدَةٌ signifie « Neuve ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie قَدِيمٌ ?",
        "options": [
          "voir (accompli)",
          "Chaise",
          "Ancien"
        ],
        "answer": 2,
        "why": "قَدِيمٌ signifie « Ancien ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie قَدِيمَةٌ ?",
        "options": [
          "Neuf",
          "Ancienne",
          "Oui"
        ],
        "answer": 1,
        "why": "قَدِيمَةٌ signifie « Ancienne ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِشْتَرَى ?",
        "options": [
          "اِشْتِرَاءٌ",
          "رُؤْيَةٌ",
          "كَبِيرَةٌ"
        ],
        "answer": 0,
        "why": "اِشْتَرَى — يَشْتَرِي — اِشْتِرَاءٌ : acheter."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de رَأَى ?",
        "options": [
          "اِشْتِرَاءٌ",
          "اِشْتَرَى",
          "رُؤْيَةٌ"
        ],
        "answer": 2,
        "why": "رَأَى — يَرَى — رُؤْيَةٌ : voir."
      },
      {
        "type": "input",
        "prompt": "Écris « Confortable » en arabe (voyelles facultatives).",
        "answer": "مُرِيحٌ",
        "accepted": [
          "مريح"
        ],
        "why": "مُرِيحٌ signifie « Confortable »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Cette chaise est-elle neuve ? » ?",
        "options": [
          "هَلْ هَذَا الْكُرْسِيُّ جَدِيدٌ؟",
          "وَهَلْ هَذِهِ الطَّاوِلَةُ كَبِيرَةٌ؟",
          "لَا، هِيَ صَغِيرَةٌ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ هَذَا الْكُرْسِيُّ جَدِيدٌ؟",
        "fr": "Cette chaise est-elle neuve ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "لَا، هُوَ قَدِيمٌ.",
        "fr": "Non, elle est ancienne."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "وَهَلْ هَذِهِ الطَّاوِلَةُ كَبِيرَةٌ؟",
        "fr": "Et cette table est-elle grande ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "لَا، هِيَ صَغِيرَةٌ.",
        "fr": "Non, elle est petite."
      }
    ],
    "writing": {
      "prompt": "Décris ta maison avec cinq adjectifs, en respectant le genre et la détermination.",
      "modelAr": "فِي الْغُرْفَةِ طَاوِلَةٌ صَغِيرَةٌ وَكُرْسِيٌّ كَبِيرٌ. الطَّاوِلَةُ جَدِيدَةٌ، وَلَكِنَّ الْكُرْسِيَّ قَدِيمٌ. هَذِهِ غُرْفَةٌ مُرِيحَةٌ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Masculin, féminin et adjectifs ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue اِشْتَرَى et رَأَى au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Décris ta maison avec cinq adjectifs, en respectant le genre et la détermination."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-10-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 10,
    "month": 2,
    "emoji": "📚",
    "title": "Singulier et pluriel du quotidien",
    "minutes": 110,
    "goal": "Reconnaître les pluriels les plus utiles sans sur-généraliser.",
    "grammar": [
      {
        "title": "Pluriels réguliers",
        "body": "Certains masculins animés prennent ـُونَ au nominatif : مُدَرِّسُونَ. Des féminins prennent ـَاتٌ : طَالِبَاتٌ. Ces terminaisons ne concernent pas tous les noms."
      },
      {
        "title": "Pluriels brisés",
        "body": "كِتَابٌ → كُتُبٌ et بَيْتٌ → بُيُوتٌ : le pluriel peut modifier les voyelles et la structure du mot. Apprends toujours un nom avec son pluriel. Les pluriels non humains se construisent souvent avec l’accord féminin singulier."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : كَمْ كِتَابًا عِنْدَكَ؟ Lis ensuite la réponse : عِنْدِي ثَلَاثَةُ كُتُبٍ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "فِي الْمَكْتَبَةِ كُتُبٌ كَثِيرَةٌ. يَقْرَأُ الطُّلَّابُ قِصَصًا قَصِيرَةً. تُسَاعِدُ الْمُدَرِّسَاتُ الطُّلَّابَ فِي الدَّرْسِ.",
      "fr": "Dans la bibliothèque, il y a beaucoup de livres. Les étudiants lisent de courtes histoires. Les enseignantes aident les étudiants pendant le cours."
    },
    "examples": [
      {
        "ar": "كَمْ كِتَابًا عِنْدَكَ؟",
        "fr": "Combien de livres as-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "كِتَابٌ",
              "كِتَابٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "عِنْدِي ثَلَاثَةُ كُتُبٍ.",
        "fr": "J’ai trois livres.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "كُتُبٌ",
              "كُتُبٌ"
            ],
            [
              "لَا",
              "لَا"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلِ الطُّلَّابُ هُنَا؟",
        "fr": "Les étudiants sont-ils ici ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "طُلَّابٌ",
              "طُلَّابٌ"
            ],
            [
              "لَا",
              "لَا"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، هُمْ فِي الْمَكْتَبَةِ.",
        "fr": "Oui, ils sont à la bibliothèque.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "كُتُبٌ",
              "كُتُبٌ"
            ],
            [
              "مَكْتَبَةٌ",
              "مَكْتَبَةٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "قَرَأَ",
        "present": "يَقْرَأُ",
        "masdar": "قِرَاءَةٌ",
        "fr": "lire",
        "lookup": "قرأ"
      },
      {
        "past": "سَاعَدَ",
        "present": "يُسَاعِدُ",
        "masdar": "مُسَاعَدَةٌ",
        "fr": "aider",
        "lookup": "ساعد"
      }
    ],
    "words": [
      [
        "كِتَابٌ",
        "Livre"
      ],
      [
        "كُتُبٌ",
        "Livres"
      ],
      [
        "بَيْتٌ",
        "Maison"
      ],
      [
        "بُيُوتٌ",
        "Maisons"
      ],
      [
        "مُدَرِّسُونَ",
        "Enseignants"
      ],
      [
        "مُدَرِّسَاتٌ",
        "Enseignantes"
      ],
      [
        "طُلَّابٌ",
        "Étudiants"
      ],
      [
        "مَكْتَبَةٌ",
        "Bibliothèque"
      ],
      [
        "قِصَّةٌ",
        "Histoire"
      ],
      [
        "قَرَأَ",
        "lire (accompli)"
      ],
      [
        "قِرَاءَةٌ",
        "maṣdar : lire"
      ],
      [
        "سَاعَدَ",
        "aider (accompli)"
      ],
      [
        "مُسَاعَدَةٌ",
        "maṣdar : aider"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ]
    ],
    "dialect": [
      {
        "msa": "عِنْدِي كُتُبٌ كَثِيرَةٌ.",
        "levant": "عِنْدِي كْتُبْ كْتِيرِة.",
        "fr": "J’ai beaucoup de livres.",
        "note": "كْتِير correspond souvent à كَثِير en dialecte levantin."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel est le pluriel de كِتَابٌ ?",
        "options": [
          "كُتُبٌ",
          "كَاتِبٌ",
          "كَاتِبَةٌ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Pluriels réguliers ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie كِتَابٌ ?",
        "options": [
          "Livre",
          "Maisons",
          "Bibliothèque"
        ],
        "answer": 0,
        "why": "كِتَابٌ signifie « Livre ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie كُتُبٌ ?",
        "options": [
          "Enseignantes",
          "lire (accompli)",
          "Livres"
        ],
        "answer": 2,
        "why": "كُتُبٌ signifie « Livres ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie بَيْتٌ ?",
        "options": [
          "aider (accompli)",
          "Maison",
          "Bibliothèque"
        ],
        "answer": 1,
        "why": "بَيْتٌ signifie « Maison ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie بُيُوتٌ ?",
        "options": [
          "Maisons",
          "lire (accompli)",
          "Oui"
        ],
        "answer": 0,
        "why": "بُيُوتٌ signifie « Maisons ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُدَرِّسُونَ ?",
        "options": [
          "aider (accompli)",
          "Livre",
          "Enseignants"
        ],
        "answer": 2,
        "why": "مُدَرِّسُونَ signifie « Enseignants ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُدَرِّسَاتٌ ?",
        "options": [
          "Maison",
          "Enseignantes",
          "Oui"
        ],
        "answer": 1,
        "why": "مُدَرِّسَاتٌ signifie « Enseignantes ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَرَأَ ?",
        "options": [
          "قِرَاءَةٌ",
          "مُسَاعَدَةٌ",
          "قِصَّةٌ"
        ],
        "answer": 0,
        "why": "قَرَأَ — يَقْرَأُ — قِرَاءَةٌ : lire."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de سَاعَدَ ?",
        "options": [
          "قِرَاءَةٌ",
          "قَرَأَ",
          "مُسَاعَدَةٌ"
        ],
        "answer": 2,
        "why": "سَاعَدَ — يُسَاعِدُ — مُسَاعَدَةٌ : aider."
      },
      {
        "type": "input",
        "prompt": "Écris « Étudiants » en arabe (voyelles facultatives).",
        "answer": "طُلَّابٌ",
        "accepted": [
          "طلاب"
        ],
        "why": "طُلَّابٌ signifie « Étudiants »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Combien de livres as-tu ? » ?",
        "options": [
          "كَمْ كِتَابًا عِنْدَكَ؟",
          "هَلِ الطُّلَّابُ هُنَا؟",
          "نَعَمْ، هُمْ فِي الْمَكْتَبَةِ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "كَمْ كِتَابًا عِنْدَكَ؟",
        "fr": "Combien de livres as-tu ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "عِنْدِي ثَلَاثَةُ كُتُبٍ.",
        "fr": "J’ai trois livres."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلِ الطُّلَّابُ هُنَا؟",
        "fr": "Les étudiants sont-ils ici ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، هُمْ فِي الْمَكْتَبَةِ.",
        "fr": "Oui, ils sont à la bibliothèque."
      }
    ],
    "writing": {
      "prompt": "Écris dix noms au singulier avec leur pluriel, puis deux phrases avec un pluriel non humain.",
      "modelAr": "فِي الْمَكْتَبَةِ كُتُبٌ كَثِيرَةٌ. يَقْرَأُ الطُّلَّابُ قِصَصًا قَصِيرَةً. تُسَاعِدُ الْمُدَرِّسَاتُ الطُّلَّابَ فِي الدَّرْسِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Singulier et pluriel du quotidien ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue قَرَأَ et سَاعَدَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Écris dix noms au singulier avec leur pluriel, puis deux phrases avec un pluriel non humain."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-11-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 11,
    "month": 3,
    "emoji": "👪",
    "title": "La famille et les proches",
    "minutes": 110,
    "goal": "Présenter les membres de sa famille et exprimer les liens.",
    "grammar": [
      {
        "title": "Suffixes de possession",
        "body": "أَبِي = mon père ; أُمِّي = ma mère ; أَخِي = mon frère. Le suffixe ـِي marque fréquemment la première personne. Compare أَخُوكَ « ton frère » (masculin) et أَخُوكِ « ton frère » (féminin)."
      },
      {
        "title": "Famille et adjectifs",
        "body": "Dans هَذِهِ أُخْتِي الصَّغِيرَةُ, l’adjectif qualifie le nom de parenté, pas le possesseur. فِي أُسْرَتِي signifie « dans ma famille ». Ne confonds pas possession et phrase nominale."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : هَلْ لَكَ إِخْوَةٌ؟ Lis ensuite la réponse : نَعَمْ، لِي أَخٌ وَأُخْتٌ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "عِنْدِي أُسْرَةٌ صَغِيرَةٌ. أَبِي طَبِيبٌ، وَأُمِّي مُدَرِّسَةٌ. لِي أَخٌ وَأُخْتٌ. نَزُورُ جَدَّتَنَا يَوْمَ الْجُمُعَةِ.",
      "fr": "J’ai une petite famille. Mon père est médecin et ma mère est enseignante. J’ai un frère et une sœur. Nous rendons visite à notre grand-mère le vendredi."
    },
    "examples": [
      {
        "ar": "هَلْ لَكَ إِخْوَةٌ؟",
        "fr": "As-tu des frères et sœurs ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَخٌ",
              "أَخٌ"
            ],
            [
              "إِخْوَةٌ",
              "إِخْوَةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، لِي أَخٌ وَأُخْتٌ.",
        "fr": "Oui, j’ai un frère et une sœur.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَخٌ",
              "أَخٌ"
            ],
            [
              "أُخْتٌ",
              "أُخْتٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "مَاذَا تَعْمَلُ أُمُّكَ؟",
        "fr": "Que fait ta mère comme métier ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أُمٌّ",
              "أُمٌّ"
            ],
            [
              "عَمِلَ",
              "عَمِلَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أُمِّي مُدَرِّسَةٌ.",
        "fr": "Ma mère est enseignante.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أُمٌّ",
              "أُمٌّ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "عَمِلَ",
        "present": "يَعْمَلُ",
        "masdar": "عَمَلٌ",
        "fr": "travailler",
        "lookup": "عمل"
      },
      {
        "past": "زَارَ",
        "present": "يَزُورُ",
        "masdar": "زِيَارَةٌ",
        "fr": "visiter",
        "lookup": "زار"
      }
    ],
    "words": [
      [
        "أُسْرَةٌ",
        "Famille"
      ],
      [
        "أَبٌ",
        "Père"
      ],
      [
        "أُمٌّ",
        "Mère"
      ],
      [
        "أَخٌ",
        "Frère"
      ],
      [
        "أُخْتٌ",
        "Sœur"
      ],
      [
        "جَدٌّ",
        "Grand-père"
      ],
      [
        "جَدَّةٌ",
        "Grand-mère"
      ],
      [
        "إِخْوَةٌ",
        "Frères et sœurs"
      ],
      [
        "وَالِدَانِ",
        "Parents"
      ],
      [
        "عَمِلَ",
        "travailler (accompli)"
      ],
      [
        "زَارَ",
        "visiter (accompli)"
      ],
      [
        "زِيَارَةٌ",
        "maṣdar : visiter"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ],
      [
        "مِنْ فَضْلِكَ",
        "S’il te plaît (à un homme)"
      ]
    ],
    "dialect": [
      {
        "msa": "أَيْنَ أُمُّكَ؟",
        "levant": "وَيْنْ إِمَّكْ؟",
        "fr": "Où est ta mère ?",
        "note": "إِمّ / إِمّك formes familières fréquentes pour « mère / ta mère »."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle forme signifie « ma mère » ?",
        "options": [
          "أُمِّي",
          "أُمُّكَ",
          "أُمُّهُ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Suffixes de possession ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أُسْرَةٌ ?",
        "options": [
          "Famille",
          "Frère",
          "Frères et sœurs"
        ],
        "answer": 0,
        "why": "أُسْرَةٌ signifie « Famille ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَبٌ ?",
        "options": [
          "Grand-père",
          "travailler (accompli)",
          "Père"
        ],
        "answer": 2,
        "why": "أَبٌ signifie « Père ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أُمٌّ ?",
        "options": [
          "maṣdar : visiter",
          "Mère",
          "Frères et sœurs"
        ],
        "answer": 1,
        "why": "أُمٌّ signifie « Mère ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَخٌ ?",
        "options": [
          "Frère",
          "travailler (accompli)",
          "Non"
        ],
        "answer": 0,
        "why": "أَخٌ signifie « Frère ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أُخْتٌ ?",
        "options": [
          "maṣdar : visiter",
          "Famille",
          "Sœur"
        ],
        "answer": 2,
        "why": "أُخْتٌ signifie « Sœur ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie جَدٌّ ?",
        "options": [
          "Mère",
          "Grand-père",
          "Non"
        ],
        "answer": 1,
        "why": "جَدٌّ signifie « Grand-père ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de عَمِلَ ?",
        "options": [
          "عَمَلٌ",
          "زِيَارَةٌ",
          "وَالِدَانِ"
        ],
        "answer": 0,
        "why": "عَمِلَ — يَعْمَلُ — عَمَلٌ : travailler."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de زَارَ ?",
        "options": [
          "عَمَلٌ",
          "عَمِلَ",
          "زِيَارَةٌ"
        ],
        "answer": 2,
        "why": "زَارَ — يَزُورُ — زِيَارَةٌ : visiter."
      },
      {
        "type": "input",
        "prompt": "Écris « Grand-mère » en arabe (voyelles facultatives).",
        "answer": "جَدَّةٌ",
        "accepted": [
          "جدة"
        ],
        "why": "جَدَّةٌ signifie « Grand-mère »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « As-tu des frères et sœurs ? » ?",
        "options": [
          "هَلْ لَكَ إِخْوَةٌ؟",
          "مَاذَا تَعْمَلُ أُمُّكَ؟",
          "أُمِّي مُدَرِّسَةٌ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ لَكَ إِخْوَةٌ؟",
        "fr": "As-tu des frères et sœurs ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، لِي أَخٌ وَأُخْتٌ.",
        "fr": "Oui, j’ai un frère et une sœur."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا تَعْمَلُ أُمُّكَ؟",
        "fr": "Que fait ta mère comme métier ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أُمِّي مُدَرِّسَةٌ.",
        "fr": "Ma mère est enseignante."
      }
    ],
    "writing": {
      "prompt": "Présente ta famille réelle ou inventée en huit phrases et emploie au moins quatre suffixes de possession.",
      "modelAr": "عِنْدِي أُسْرَةٌ صَغِيرَةٌ. أَبِي طَبِيبٌ، وَأُمِّي مُدَرِّسَةٌ. لِي أَخٌ وَأُخْتٌ. نَزُورُ جَدَّتَنَا يَوْمَ الْجُمُعَةِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « La famille et les proches ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue عَمِلَ et زَارَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Présente ta famille réelle ou inventée en huit phrases et emploie au moins quatre suffixes de possession."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-12-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 12,
    "month": 3,
    "emoji": "🔢",
    "title": "Nombres de zéro à dix",
    "minutes": 110,
    "goal": "Compter des objets et demander une quantité.",
    "grammar": [
      {
        "title": "Les chiffres usuels",
        "body": "صِفْرٌ, وَاحِدٌ, اِثْنَانِ, ثَلَاثَةٌ, أَرْبَعَةٌ, خَمْسَةٌ, سِتَّةٌ, سَبْعَةٌ, ثَمَانِيَةٌ, تِسْعَةٌ, عَشَرَةٌ. Apprends les mots avant d’étudier les règles d’accord complexes."
      },
      {
        "title": "Compter avec un nom",
        "body": "La construction change selon le nombre et le genre : كِتَابٌ وَاحِدٌ ; كِتَابَانِ ; ثَلَاثَةُ كُتُبٍ. De trois à dix, le nom compté est normalement au pluriel génitif. Cette règle mérite une révision séparée au niveau A2."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : كَمْ قَلَمًا عِنْدَكَ؟ Lis ensuite la réponse : عِنْدِي قَلَمَانِ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "فِي حَقِيبَتِي ثَلَاثَةُ كُتُبٍ وَقَلَمَانِ. عَلَى الطَّاوِلَةِ أَرْبَعُ صُوَرٍ. فِي الصَّفِّ عَشَرَةُ طُلَّابٍ. أَعُدُّ الْأَشْيَاءَ بِالْعَرَبِيَّةِ.",
      "fr": "Dans mon sac, il y a trois livres et deux stylos. Sur la table, quatre images. Dans la classe, dix étudiants. Je compte les objets en arabe."
    },
    "examples": [
      {
        "ar": "كَمْ قَلَمًا عِنْدَكَ؟",
        "fr": "Combien de stylos as-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "كَمْ",
              "كَمْ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "عِنْدِي قَلَمَانِ.",
        "fr": "J’ai deux stylos.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "وَكَمْ كِتَابًا عِنْدَكَ؟",
        "fr": "Et combien de livres as-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "كَمْ",
              "كَمْ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "عِنْدِي ثَلَاثَةُ كُتُبٍ.",
        "fr": "J’ai trois livres.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "ثَلَاثَةٌ",
              "ثَلَاثَةٌ"
            ],
            [
              "كَتَبَ",
              "كَتَبَ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "أَخَذَ",
        "present": "يَأْخُذُ",
        "masdar": "أَخْذٌ",
        "fr": "prendre",
        "lookup": "أخذ"
      },
      {
        "past": "كَتَبَ",
        "present": "يَكْتُبُ",
        "masdar": "كِتَابَةٌ",
        "fr": "écrire",
        "lookup": "كتب"
      }
    ],
    "words": [
      [
        "صِفْرٌ",
        "Zéro"
      ],
      [
        "وَاحِدٌ",
        "Un"
      ],
      [
        "اِثْنَانِ",
        "Deux"
      ],
      [
        "ثَلَاثَةٌ",
        "Trois"
      ],
      [
        "أَرْبَعَةٌ",
        "Quatre"
      ],
      [
        "خَمْسَةٌ",
        "Cinq"
      ],
      [
        "سَبْعَةٌ",
        "Sept"
      ],
      [
        "عَشَرَةٌ",
        "Dix"
      ],
      [
        "كَمْ",
        "Combien"
      ],
      [
        "أَخَذَ",
        "prendre (accompli)"
      ],
      [
        "كَتَبَ",
        "écrire (accompli)"
      ],
      [
        "كِتَابَةٌ",
        "maṣdar : écrire"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ],
      [
        "مِنْ فَضْلِكَ",
        "S’il te plaît (à un homme)"
      ]
    ],
    "dialect": [
      {
        "msa": "كَمْ وَاحِدْ؟",
        "levant": "أَدِّيشْ؟",
        "fr": "Combien ?",
        "note": "أَدِّيشْ est fréquent pour les prix et les quantités, surtout au Liban et en Syrie."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel nombre correspond à « trois » ?",
        "options": [
          "ثَلَاثَةٌ",
          "اِثْنَانِ",
          "أَرْبَعَةٌ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Les chiffres usuels ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie صِفْرٌ ?",
        "options": [
          "Zéro",
          "Trois",
          "Dix"
        ],
        "answer": 0,
        "why": "صِفْرٌ signifie « Zéro ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie وَاحِدٌ ?",
        "options": [
          "Cinq",
          "prendre (accompli)",
          "Un"
        ],
        "answer": 2,
        "why": "وَاحِدٌ signifie « Un ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie اِثْنَانِ ?",
        "options": [
          "maṣdar : écrire",
          "Deux",
          "Dix"
        ],
        "answer": 1,
        "why": "اِثْنَانِ signifie « Deux ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie ثَلَاثَةٌ ?",
        "options": [
          "Trois",
          "prendre (accompli)",
          "Non"
        ],
        "answer": 0,
        "why": "ثَلَاثَةٌ signifie « Trois ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَرْبَعَةٌ ?",
        "options": [
          "maṣdar : écrire",
          "Zéro",
          "Quatre"
        ],
        "answer": 2,
        "why": "أَرْبَعَةٌ signifie « Quatre ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie خَمْسَةٌ ?",
        "options": [
          "Deux",
          "Cinq",
          "Non"
        ],
        "answer": 1,
        "why": "خَمْسَةٌ signifie « Cinq ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَخَذَ ?",
        "options": [
          "أَخْذٌ",
          "كِتَابَةٌ",
          "كَمْ"
        ],
        "answer": 0,
        "why": "أَخَذَ — يَأْخُذُ — أَخْذٌ : prendre."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de كَتَبَ ?",
        "options": [
          "أَخْذٌ",
          "أَخَذَ",
          "كِتَابَةٌ"
        ],
        "answer": 2,
        "why": "كَتَبَ — يَكْتُبُ — كِتَابَةٌ : écrire."
      },
      {
        "type": "input",
        "prompt": "Écris « Sept » en arabe (voyelles facultatives).",
        "answer": "سَبْعَةٌ",
        "accepted": [
          "سبعة"
        ],
        "why": "سَبْعَةٌ signifie « Sept »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Combien de stylos as-tu ? » ?",
        "options": [
          "كَمْ قَلَمًا عِنْدَكَ؟",
          "وَكَمْ كِتَابًا عِنْدَكَ؟",
          "عِنْدِي ثَلَاثَةُ كُتُبٍ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "كَمْ قَلَمًا عِنْدَكَ؟",
        "fr": "Combien de stylos as-tu ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "عِنْدِي قَلَمَانِ.",
        "fr": "J’ai deux stylos."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "وَكَمْ كِتَابًا عِنْدَكَ؟",
        "fr": "Et combien de livres as-tu ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "عِنْدِي ثَلَاثَةُ كُتُبٍ.",
        "fr": "J’ai trois livres."
      }
    ],
    "writing": {
      "prompt": "Écris en toutes lettres dix quantités observées autour de toi ; lis ensuite les nombres à haute voix.",
      "modelAr": "فِي حَقِيبَتِي ثَلَاثَةُ كُتُبٍ وَقَلَمَانِ. عَلَى الطَّاوِلَةِ أَرْبَعُ صُوَرٍ. فِي الصَّفِّ عَشَرَةُ طُلَّابٍ. أَعُدُّ الْأَشْيَاءَ بِالْعَرَبِيَّةِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Nombres de zéro à dix ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue أَخَذَ et كَتَبَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Écris en toutes lettres dix quantités observées autour de toi ; lis ensuite les nombres à haute voix."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-13-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 13,
    "month": 3,
    "emoji": "🕒",
    "title": "L’heure et les rendez-vous",
    "minutes": 110,
    "goal": "Dire l’heure et situer un événement.",
    "grammar": [
      {
        "title": "Dire l’heure",
        "body": "السَّاعَةُ الْوَاحِدَةُ « il est une heure » ; السَّاعَةُ الثَّانِيَةُ « il est deux heures ». On emploie les ordinaux féminins avec سَاعَةٌ. Pour « à », ajoute فِي : فِي السَّاعَةِ السَّادِسَةِ."
      },
      {
        "title": "Minute et demi-heure",
        "body": "السَّاعَةُ الثَّالِثَةُ وَالنِّصْفُ signifie « trois heures et demie » ; وَالرُّبْعُ « et quart ». Le format digital est possible : السَّاعَةُ الثَّامِنَةُ وَعَشْرُ دَقَائِقَ."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : كَمِ السَّاعَةُ الْآنَ؟ Lis ensuite la réponse : السَّاعَةُ الثَّانِيَةُ وَالنِّصْفُ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أَذْهَبُ إِلَى الْعَمَلِ فِي السَّاعَةِ الثَّامِنَةِ. أَتَنَاوَلُ الْغَدَاءَ فِي الْوَاحِدَةِ وَالنِّصْفِ. أَلْتَقِي صَدِيقِي فِي السَّادِسَةِ مَسَاءً.",
      "fr": "Je vais au travail à huit heures. Je déjeune à une heure et demie. Je retrouve mon ami à six heures du soir."
    },
    "examples": [
      {
        "ar": "كَمِ السَّاعَةُ الْآنَ؟",
        "fr": "Quelle heure est-il maintenant ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "سَاعَةٌ",
              "سَاعَةٌ"
            ],
            [
              "الْآنَ",
              "الْآنَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "السَّاعَةُ الثَّانِيَةُ وَالنِّصْفُ.",
        "fr": "Il est deux heures et demie.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "سَاعَةٌ",
              "سَاعَةٌ"
            ],
            [
              "نِصْفٌ",
              "نِصْفٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "مَتَى الْمَوْعِدُ؟",
        "fr": "Quand est le rendez-vous ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مَوْعِدٌ",
              "مَوْعِدٌ"
            ],
            [
              "مَتَى",
              "مَتَى"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "فِي السَّاعَةِ الرَّابِعَةِ مَسَاءً.",
        "fr": "À quatre heures de l’après-midi.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "سَاعَةٌ",
              "سَاعَةٌ"
            ],
            [
              "مَسَاءً",
              "مَسَاءً"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "ذَهَبَ",
        "present": "يَذْهَبُ",
        "masdar": "ذَهَابٌ",
        "fr": "aller",
        "lookup": "ذهب"
      },
      {
        "past": "قَابَلَ",
        "present": "يُقَابِلُ",
        "masdar": "مُقَابَلَةٌ",
        "fr": "rencontrer",
        "lookup": "قابل"
      }
    ],
    "words": [
      [
        "سَاعَةٌ",
        "Heure"
      ],
      [
        "دَقِيقَةٌ",
        "Minute"
      ],
      [
        "نِصْفٌ",
        "Moitié"
      ],
      [
        "رُبْعٌ",
        "Quart"
      ],
      [
        "مَوْعِدٌ",
        "Rendez-vous"
      ],
      [
        "صَبَاحًا",
        "Le matin"
      ],
      [
        "مَسَاءً",
        "Le soir"
      ],
      [
        "الْآنَ",
        "Maintenant"
      ],
      [
        "مَتَى",
        "Quand"
      ],
      [
        "ذَهَبَ",
        "aller (accompli)"
      ],
      [
        "ذَهَابٌ",
        "maṣdar : aller"
      ],
      [
        "قَابَلَ",
        "rencontrer (accompli)"
      ],
      [
        "مُقَابَلَةٌ",
        "maṣdar : rencontrer"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ]
    ],
    "dialect": [
      {
        "msa": "قَدَّيْشِ السَّاعَة؟",
        "levant": "قَدِّيشِ السَّاعَة؟",
        "fr": "Quelle heure est-il ?",
        "note": "قَدِّيش / قَدَّيْش est un interrogatif courant au Levant, avec variation locale."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Comment dit-on « à six heures » ?",
        "options": [
          "فِي السَّاعَةِ السَّادِسَةِ",
          "السَّاعَةُ وَاحِدَةٌ",
          "السَّاعَةُ جَمِيلَةٌ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Dire l’heure ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie سَاعَةٌ ?",
        "options": [
          "Heure",
          "Quart",
          "Maintenant"
        ],
        "answer": 0,
        "why": "سَاعَةٌ signifie « Heure ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie دَقِيقَةٌ ?",
        "options": [
          "Le matin",
          "aller (accompli)",
          "Minute"
        ],
        "answer": 2,
        "why": "دَقِيقَةٌ signifie « Minute ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie نِصْفٌ ?",
        "options": [
          "rencontrer (accompli)",
          "Moitié",
          "Maintenant"
        ],
        "answer": 1,
        "why": "نِصْفٌ signifie « Moitié ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie رُبْعٌ ?",
        "options": [
          "Quart",
          "aller (accompli)",
          "Oui"
        ],
        "answer": 0,
        "why": "رُبْعٌ signifie « Quart ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَوْعِدٌ ?",
        "options": [
          "rencontrer (accompli)",
          "Heure",
          "Rendez-vous"
        ],
        "answer": 2,
        "why": "مَوْعِدٌ signifie « Rendez-vous ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie صَبَاحًا ?",
        "options": [
          "Moitié",
          "Le matin",
          "Oui"
        ],
        "answer": 1,
        "why": "صَبَاحًا signifie « Le matin ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de ذَهَبَ ?",
        "options": [
          "ذَهَابٌ",
          "مُقَابَلَةٌ",
          "مَتَى"
        ],
        "answer": 0,
        "why": "ذَهَبَ — يَذْهَبُ — ذَهَابٌ : aller."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَابَلَ ?",
        "options": [
          "ذَهَابٌ",
          "ذَهَبَ",
          "مُقَابَلَةٌ"
        ],
        "answer": 2,
        "why": "قَابَلَ — يُقَابِلُ — مُقَابَلَةٌ : rencontrer."
      },
      {
        "type": "input",
        "prompt": "Écris « Le soir » en arabe (voyelles facultatives).",
        "answer": "مَسَاءً",
        "accepted": [
          "مساء"
        ],
        "why": "مَسَاءً signifie « Le soir »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Quelle heure est-il maintenant ? » ?",
        "options": [
          "كَمِ السَّاعَةُ الْآنَ؟",
          "مَتَى الْمَوْعِدُ؟",
          "فِي السَّاعَةِ الرَّابِعَةِ مَسَاءً."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "كَمِ السَّاعَةُ الْآنَ؟",
        "fr": "Quelle heure est-il maintenant ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "السَّاعَةُ الثَّانِيَةُ وَالنِّصْفُ.",
        "fr": "Il est deux heures et demie."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَتَى الْمَوْعِدُ؟",
        "fr": "Quand est le rendez-vous ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "فِي السَّاعَةِ الرَّابِعَةِ مَسَاءً.",
        "fr": "À quatre heures de l’après-midi."
      }
    ],
    "writing": {
      "prompt": "Écris ton emploi du temps de demain avec six heures différentes.",
      "modelAr": "أَذْهَبُ إِلَى الْعَمَلِ فِي السَّاعَةِ الثَّامِنَةِ. أَتَنَاوَلُ الْغَدَاءَ فِي الْوَاحِدَةِ وَالنِّصْفِ. أَلْتَقِي صَدِيقِي فِي السَّادِسَةِ مَسَاءً.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « L’heure et les rendez-vous ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue ذَهَبَ et قَابَلَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Écris ton emploi du temps de demain avec six heures différentes."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-14-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 14,
    "month": 3,
    "emoji": "📅",
    "title": "Jours de la semaine et habitudes",
    "minutes": 110,
    "goal": "Nommer les jours et expliquer sa routine hebdomadaire.",
    "grammar": [
      {
        "title": "Les sept jours",
        "body": "الْأَحَدُ, الِاثْنَيْنِ, الثُّلَاثَاءُ, الْأَرْبِعَاءُ, الْخَمِيسُ, الْجُمُعَةُ, السَّبْتُ. Dans يَوْمَ الْجُمُعَةِ, le jour est au complément du nom. Les noms de jours doivent être mémorisés séparément."
      },
      {
        "title": "Tous les / chaque",
        "body": "كُلَّ يَوْمٍ = chaque jour ; كُلَّ أُسْبُوعٍ = chaque semaine. Le nom qui suit كُلّ est au génitif ; le contexte fixe la fonction casuelle de كُلّ. أَحْيَانًا / دَائِمًا nuancent la fréquence."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَتَى تَعْمَلُ؟ Lis ensuite la réponse : أَعْمَلُ مِنَ الِاثْنَيْنِ إِلَى الْجُمُعَةِ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أَعْمَلُ مِنَ الِاثْنَيْنِ إِلَى الْجُمُعَةِ. يَوْمَ السَّبْتِ أَلْعَبُ الرِّيَاضَةَ. يَوْمَ الْأَحَدِ أَقْرَأُ وَأَزُورُ أُسْرَتِي. أَدْرُسُ الْعَرَبِيَّةَ كُلَّ يَوْمٍ.",
      "fr": "Je travaille du lundi au vendredi. Le samedi, je fais du sport. Le dimanche, je lis et rends visite à ma famille. J’étudie l’arabe chaque jour."
    },
    "examples": [
      {
        "ar": "مَتَى تَعْمَلُ؟",
        "fr": "Quand travailles-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "عَمِلَ",
              "عَمِلَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أَعْمَلُ مِنَ الِاثْنَيْنِ إِلَى الْجُمُعَةِ.",
        "fr": "Je travaille du lundi au vendredi.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "الِاثْنَيْنِ",
              "الِاثْنَيْنِ"
            ],
            [
              "الْجُمُعَةُ",
              "الْجُمُعَةُ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "مَاذَا تَفْعَلُ يَوْمَ السَّبْتِ؟",
        "fr": "Que fais-tu le samedi ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "السَّبْتُ",
              "السَّبْتُ"
            ],
            [
              "يَوْمٌ",
              "يَوْمٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أَلْعَبُ الرِّيَاضَةَ وَأَسْتَرِيحُ.",
        "fr": "Je fais du sport et je me repose.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "لَعِبَ",
              "لَعِبَ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "عَمِلَ",
        "present": "يَعْمَلُ",
        "masdar": "عَمَلٌ",
        "fr": "travailler",
        "lookup": "عمل"
      },
      {
        "past": "لَعِبَ",
        "present": "يَلْعَبُ",
        "masdar": "لَعِبٌ",
        "fr": "jouer",
        "lookup": "لعب"
      }
    ],
    "words": [
      [
        "الْأَحَدُ",
        "Dimanche"
      ],
      [
        "الِاثْنَيْنِ",
        "Lundi"
      ],
      [
        "الثُّلَاثَاءُ",
        "Mardi"
      ],
      [
        "الْأَرْبِعَاءُ",
        "Mercredi"
      ],
      [
        "الْخَمِيسُ",
        "Jeudi"
      ],
      [
        "الْجُمُعَةُ",
        "Vendredi"
      ],
      [
        "السَّبْتُ",
        "Samedi"
      ],
      [
        "أُسْبُوعٌ",
        "Semaine"
      ],
      [
        "يَوْمٌ",
        "Jour"
      ],
      [
        "عَمِلَ",
        "travailler (accompli)"
      ],
      [
        "لَعِبَ",
        "jouer (accompli)"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ],
      [
        "مِنْ فَضْلِكَ",
        "S’il te plaît (à un homme)"
      ],
      [
        "شُكْرًا",
        "Merci"
      ]
    ],
    "dialect": [
      {
        "msa": "يَوْمَ الْجُمُعَةِ",
        "levant": "نْهَارِ الْجُمْعَة",
        "fr": "Le vendredi",
        "note": "نْهَار est un équivalent courant de « jour » dans l’usage parlé."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel jour correspond à السَّبْتُ ?",
        "options": [
          "Samedi",
          "Jeudi",
          "Lundi"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Les sept jours ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie الْأَحَدُ ?",
        "options": [
          "Dimanche",
          "Mercredi",
          "Semaine"
        ],
        "answer": 0,
        "why": "الْأَحَدُ signifie « Dimanche ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie الِاثْنَيْنِ ?",
        "options": [
          "Vendredi",
          "travailler (accompli)",
          "Lundi"
        ],
        "answer": 2,
        "why": "الِاثْنَيْنِ signifie « Lundi ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie الثُّلَاثَاءُ ?",
        "options": [
          "Oui",
          "Mardi",
          "Semaine"
        ],
        "answer": 1,
        "why": "الثُّلَاثَاءُ signifie « Mardi ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie الْأَرْبِعَاءُ ?",
        "options": [
          "Mercredi",
          "travailler (accompli)",
          "S’il te plaît (à un homme)"
        ],
        "answer": 0,
        "why": "الْأَرْبِعَاءُ signifie « Mercredi ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie الْخَمِيسُ ?",
        "options": [
          "Oui",
          "Dimanche",
          "Jeudi"
        ],
        "answer": 2,
        "why": "الْخَمِيسُ signifie « Jeudi ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie الْجُمُعَةُ ?",
        "options": [
          "Mardi",
          "Vendredi",
          "S’il te plaît (à un homme)"
        ],
        "answer": 1,
        "why": "الْجُمُعَةُ signifie « Vendredi ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de عَمِلَ ?",
        "options": [
          "عَمَلٌ",
          "لَعِبٌ",
          "يَوْمٌ"
        ],
        "answer": 0,
        "why": "عَمِلَ — يَعْمَلُ — عَمَلٌ : travailler."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de لَعِبَ ?",
        "options": [
          "عَمَلٌ",
          "عَمِلَ",
          "لَعِبٌ"
        ],
        "answer": 2,
        "why": "لَعِبَ — يَلْعَبُ — لَعِبٌ : jouer."
      },
      {
        "type": "input",
        "prompt": "Écris « Samedi » en arabe (voyelles facultatives).",
        "answer": "السَّبْتُ",
        "accepted": [
          "السبت"
        ],
        "why": "السَّبْتُ signifie « Samedi »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Quand travailles-tu ? » ?",
        "options": [
          "مَتَى تَعْمَلُ؟",
          "مَاذَا تَفْعَلُ يَوْمَ السَّبْتِ؟",
          "أَلْعَبُ الرِّيَاضَةَ وَأَسْتَرِيحُ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَتَى تَعْمَلُ؟",
        "fr": "Quand travailles-tu ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أَعْمَلُ مِنَ الِاثْنَيْنِ إِلَى الْجُمُعَةِ.",
        "fr": "Je travaille du lundi au vendredi."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا تَفْعَلُ يَوْمَ السَّبْتِ؟",
        "fr": "Que fais-tu le samedi ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أَلْعَبُ الرِّيَاضَةَ وَأَسْتَرِيحُ.",
        "fr": "Je fais du sport et je me repose."
      }
    ],
    "writing": {
      "prompt": "Présente une semaine-type avec une action par jour et trois adverbes de fréquence.",
      "modelAr": "أَعْمَلُ مِنَ الِاثْنَيْنِ إِلَى الْجُمُعَةِ. يَوْمَ السَّبْتِ أَلْعَبُ الرِّيَاضَةَ. يَوْمَ الْأَحَدِ أَقْرَأُ وَأَزُورُ أُسْرَتِي. أَدْرُسُ الْعَرَبِيَّةَ كُلَّ يَوْمٍ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Jours de la semaine et habitudes ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue عَمِلَ et لَعِبَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Présente une semaine-type avec une action par jour et trois adverbes de fréquence."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-15-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 15,
    "month": 3,
    "emoji": "🌍",
    "title": "Pays, villes et nationalités",
    "minutes": 110,
    "goal": "Dire d’où l’on vient et où l’on habite.",
    "grammar": [
      {
        "title": "D’où viens-tu ?",
        "body": "مِنْ أَيْنَ أَنْتَ؟ signifie « D’où viens-tu ? ». Réponds أَنَا مِنْ فَرَنْسَا. مِنْ marque l’origine ; فِي marque souvent le lieu où l’on se trouve : أَسْكُنُ فِي فَرَنْسَا."
      },
      {
        "title": "Adjectifs de nationalité",
        "body": "فَرَنْسِيٌّ (homme français) / فَرَنْسِيَّةٌ (femme française). La nisba ـِيّ construit de nombreux adjectifs de relation : لُبْنَانِيٌّ، سُورِيٌّ. L’adjectif s’accorde avec la personne."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مِنْ أَيْنَ أَنْتَ؟ Lis ensuite la réponse : أَنَا مِنْ فَرَنْسَا. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "اِسْمِي نَادِرٌ. أَنَا لُبْنَانِيٌّ، وَلَكِنِّي أَسْكُنُ فِي فَرَنْسَا. صَدِيقَتِي سُورِيَّةٌ، وَهِيَ تَدْرُسُ فِي بَارِيسَ. نَتَكَلَّمُ ثَلَاثَ لُغَاتٍ.",
      "fr": "Je m’appelle Nader. Je suis libanais, mais j’habite en France. Mon amie est syrienne et elle étudie à Paris. Nous parlons trois langues."
    },
    "examples": [
      {
        "ar": "مِنْ أَيْنَ أَنْتَ؟",
        "fr": "D’où viens-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "أَنَا مِنْ فَرَنْسَا.",
        "fr": "Je viens de France.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "فَرَنْسَا",
              "فَرَنْسَا"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أَيْنَ تَسْكُنُ؟",
        "fr": "Où habites-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "سَكَنَ",
              "سَكَنَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أَسْكُنُ فِي نَانْتَ وَأَدْرُسُ الْعَرَبِيَّةَ.",
        "fr": "J’habite à Nantes et j’étudie l’arabe.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "سَكَنَ",
              "سَكَنَ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "سَكَنَ",
        "present": "يَسْكُنُ",
        "masdar": "سُكْنَى",
        "fr": "habiter",
        "lookup": "سكن"
      },
      {
        "past": "تَكَلَّمَ",
        "present": "يَتَكَلَّمُ",
        "masdar": "تَكَلُّمٌ",
        "fr": "parler",
        "lookup": "تكلم"
      }
    ],
    "words": [
      [
        "فَرَنْسَا",
        "France"
      ],
      [
        "لُبْنَانُ",
        "Liban"
      ],
      [
        "سُورِيَا",
        "Syrie"
      ],
      [
        "مَدِينَةٌ",
        "Ville"
      ],
      [
        "بَلَدٌ",
        "Pays"
      ],
      [
        "لُغَةٌ",
        "Langue"
      ],
      [
        "فَرَنْسِيٌّ",
        "Français (homme)"
      ],
      [
        "سُورِيَّةٌ",
        "Syrienne"
      ],
      [
        "لُبْنَانِيٌّ",
        "Libanais"
      ],
      [
        "سَكَنَ",
        "habiter (accompli)"
      ],
      [
        "سُكْنَى",
        "maṣdar : habiter"
      ],
      [
        "تَكَلَّمَ",
        "parler (accompli)"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ],
      [
        "مِنْ فَضْلِكَ",
        "S’il te plaît (à un homme)"
      ]
    ],
    "dialect": [
      {
        "msa": "أَنَا مِنْ لُبْنَانَ.",
        "levant": "أَنَا مِنْ لِبْنَانْ.",
        "fr": "Je viens du Liban.",
        "note": "La graphie et les finales reflètent ici la prononciation dialectale approximative."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel mot exprime l’origine géographique ?",
        "options": [
          "مِنْ",
          "فِي",
          "مَعَ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : D’où viens-tu ? ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie فَرَنْسَا ?",
        "options": [
          "France",
          "Ville",
          "Syrienne"
        ],
        "answer": 0,
        "why": "فَرَنْسَا signifie « France ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie لُبْنَانُ ?",
        "options": [
          "Langue",
          "habiter (accompli)",
          "Liban"
        ],
        "answer": 2,
        "why": "لُبْنَانُ signifie « Liban ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie سُورِيَا ?",
        "options": [
          "parler (accompli)",
          "Syrie",
          "Syrienne"
        ],
        "answer": 1,
        "why": "سُورِيَا signifie « Syrie ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَدِينَةٌ ?",
        "options": [
          "Ville",
          "habiter (accompli)",
          "Non"
        ],
        "answer": 0,
        "why": "مَدِينَةٌ signifie « Ville ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie بَلَدٌ ?",
        "options": [
          "parler (accompli)",
          "France",
          "Pays"
        ],
        "answer": 2,
        "why": "بَلَدٌ signifie « Pays ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie لُغَةٌ ?",
        "options": [
          "Syrie",
          "Langue",
          "Non"
        ],
        "answer": 1,
        "why": "لُغَةٌ signifie « Langue ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de سَكَنَ ?",
        "options": [
          "سُكْنَى",
          "تَكَلُّمٌ",
          "لُبْنَانِيٌّ"
        ],
        "answer": 0,
        "why": "سَكَنَ — يَسْكُنُ — سُكْنَى : habiter."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَكَلَّمَ ?",
        "options": [
          "سُكْنَى",
          "سَكَنَ",
          "تَكَلُّمٌ"
        ],
        "answer": 2,
        "why": "تَكَلَّمَ — يَتَكَلَّمُ — تَكَلُّمٌ : parler."
      },
      {
        "type": "input",
        "prompt": "Écris « Français (homme) » en arabe (voyelles facultatives).",
        "answer": "فَرَنْسِيٌّ",
        "accepted": [
          "فرنسي"
        ],
        "why": "فَرَنْسِيٌّ signifie « Français (homme) »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « D’où viens-tu ? » ?",
        "options": [
          "مِنْ أَيْنَ أَنْتَ؟",
          "أَيْنَ تَسْكُنُ؟",
          "أَسْكُنُ فِي نَانْتَ وَأَدْرُسُ الْعَرَبِيَّةَ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مِنْ أَيْنَ أَنْتَ؟",
        "fr": "D’où viens-tu ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أَنَا مِنْ فَرَنْسَا.",
        "fr": "Je viens de France."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "أَيْنَ تَسْكُنُ؟",
        "fr": "Où habites-tu ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أَسْكُنُ فِي نَانْتَ وَأَدْرُسُ الْعَرَبِيَّةَ.",
        "fr": "J’habite à Nantes et j’étudie l’arabe."
      }
    ],
    "writing": {
      "prompt": "Présente cinq personnes de pays différents et précise leur ville et leur langue.",
      "modelAr": "اِسْمِي نَادِرٌ. أَنَا لُبْنَانِيٌّ، وَلَكِنِّي أَسْكُنُ فِي فَرَنْسَا. صَدِيقَتِي سُورِيَّةٌ، وَهِيَ تَدْرُسُ فِي بَارِيسَ. نَتَكَلَّمُ ثَلَاثَ لُغَاتٍ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Pays, villes et nationalités ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue سَكَنَ et تَكَلَّمَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Présente cinq personnes de pays différents et précise leur ville et leur langue."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-16-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 16,
    "month": 4,
    "emoji": "🏃",
    "title": "Premiers verbes à l’inaccompli",
    "minutes": 110,
    "goal": "Conjuguer des verbes courants au présent avec les préfixes personnels.",
    "grammar": [
      {
        "title": "Les quatre préfixes",
        "body": "أَكْتُبُ = j’écris ; تَكْتُبُ = tu écris / elle écrit ; يَكْتُبُ = il écrit ; نَكْتُبُ = nous écrivons. Il faut également apprendre les suffixes au féminin et au pluriel : تَكْتُبِينَ « tu écris » (f.)."
      },
      {
        "title": "Le présent d’habitude",
        "body": "Dans أَقْرَأُ كُلَّ يَوْمٍ, l’inaccompli indique une habitude. Le verbe conjugué peut suffire sans pronom sujet séparé ; أَنَا أَقْرَأُ insiste sur « moi ». Les voyelles internes varient selon la racine."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَاذَا تَفْعَلُ؟ Lis ensuite la réponse : أَكْتُبُ دَرْسًا قَصِيرًا. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أَنَا أَكْتُبُ بِالْعَرَبِيَّةِ، وَأَنْتَ تَقْرَأُ النَّصَّ. أُخْتِي تَدْرُسُ فِي الْبَيْتِ. نَحْنُ نَتَعَلَّمُ كُلَّ يَوْمٍ لِأَنَّنَا نُحِبُّ اللُّغَةَ.",
      "fr": "J’écris en arabe et tu lis le texte. Ma sœur étudie à la maison. Nous apprenons chaque jour parce que nous aimons la langue."
    },
    "examples": [
      {
        "ar": "مَاذَا تَفْعَلُ؟",
        "fr": "Que fais-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "أَكْتُبُ دَرْسًا قَصِيرًا.",
        "fr": "J’écris une courte leçon.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَكْتُبُ",
              "أَكْتُبُ"
            ],
            [
              "دَرْسٌ",
              "دَرْسٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ تَقْرَأُ كُلَّ يَوْمٍ؟",
        "fr": "Lis-tu chaque jour ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "تَقْرَأُ",
              "تَقْرَأُ"
            ],
            [
              "كُلَّ يَوْمٍ",
              "كُلَّ يَوْمٍ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، أَقْرَأُ وَأَتَعَلَّمُ.",
        "fr": "Oui, je lis et j’apprends.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَقْرَأُ",
              "أَقْرَأُ"
            ],
            [
              "قَرَأَ",
              "قَرَأَ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "كَتَبَ",
        "present": "يَكْتُبُ",
        "masdar": "كِتَابَةٌ",
        "fr": "écrire",
        "lookup": "كتب"
      },
      {
        "past": "قَرَأَ",
        "present": "يَقْرَأُ",
        "masdar": "قِرَاءَةٌ",
        "fr": "lire",
        "lookup": "قرأ"
      }
    ],
    "words": [
      [
        "أَكْتُبُ",
        "J’écris"
      ],
      [
        "تَكْتُبُ",
        "Tu écris (m.)"
      ],
      [
        "يَكْتُبُ",
        "Il écrit"
      ],
      [
        "نَكْتُبُ",
        "Nous écrivons"
      ],
      [
        "أَقْرَأُ",
        "Je lis"
      ],
      [
        "تَقْرَأُ",
        "Tu lis (m.)"
      ],
      [
        "نَصٌّ",
        "Texte"
      ],
      [
        "دَرْسٌ",
        "Leçon"
      ],
      [
        "كُلَّ يَوْمٍ",
        "Chaque jour"
      ],
      [
        "كَتَبَ",
        "écrire (accompli)"
      ],
      [
        "كِتَابَةٌ",
        "maṣdar : écrire"
      ],
      [
        "قَرَأَ",
        "lire (accompli)"
      ],
      [
        "قِرَاءَةٌ",
        "maṣdar : lire"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ]
    ],
    "dialect": [
      {
        "msa": "أَنَا أَكْتُبُ.",
        "levant": "أَنَا بِكْتُبْ.",
        "fr": "J’écris.",
        "note": "En levantin, le préfixe b- caractérise souvent le présent habituel : بكتب."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel préfixe indique généralement « je » au présent ?",
        "options": [
          "أَ-",
          "يَ-",
          "نَ-"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Les quatre préfixes ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَكْتُبُ ?",
        "options": [
          "J’écris",
          "Nous écrivons",
          "Leçon"
        ],
        "answer": 0,
        "why": "أَكْتُبُ signifie « J’écris ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie تَكْتُبُ ?",
        "options": [
          "Tu lis (m.)",
          "écrire (accompli)",
          "Tu écris (m.)"
        ],
        "answer": 2,
        "why": "تَكْتُبُ signifie « Tu écris (m.) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie يَكْتُبُ ?",
        "options": [
          "lire (accompli)",
          "Il écrit",
          "Leçon"
        ],
        "answer": 1,
        "why": "يَكْتُبُ signifie « Il écrit ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie نَكْتُبُ ?",
        "options": [
          "Nous écrivons",
          "écrire (accompli)",
          "Oui"
        ],
        "answer": 0,
        "why": "نَكْتُبُ signifie « Nous écrivons ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَقْرَأُ ?",
        "options": [
          "lire (accompli)",
          "J’écris",
          "Je lis"
        ],
        "answer": 2,
        "why": "أَقْرَأُ signifie « Je lis ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie تَقْرَأُ ?",
        "options": [
          "Il écrit",
          "Tu lis (m.)",
          "Oui"
        ],
        "answer": 1,
        "why": "تَقْرَأُ signifie « Tu lis (m.) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de كَتَبَ ?",
        "options": [
          "كِتَابَةٌ",
          "قِرَاءَةٌ",
          "كُلَّ يَوْمٍ"
        ],
        "answer": 0,
        "why": "كَتَبَ — يَكْتُبُ — كِتَابَةٌ : écrire."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَرَأَ ?",
        "options": [
          "كِتَابَةٌ",
          "كَتَبَ",
          "قِرَاءَةٌ"
        ],
        "answer": 2,
        "why": "قَرَأَ — يَقْرَأُ — قِرَاءَةٌ : lire."
      },
      {
        "type": "input",
        "prompt": "Écris « Texte » en arabe (voyelles facultatives).",
        "answer": "نَصٌّ",
        "accepted": [
          "نص"
        ],
        "why": "نَصٌّ signifie « Texte »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Que fais-tu ? » ?",
        "options": [
          "مَاذَا تَفْعَلُ؟",
          "هَلْ تَقْرَأُ كُلَّ يَوْمٍ؟",
          "نَعَمْ، أَقْرَأُ وَأَتَعَلَّمُ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا تَفْعَلُ؟",
        "fr": "Que fais-tu ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أَكْتُبُ دَرْسًا قَصِيرًا.",
        "fr": "J’écris une courte leçon."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ تَقْرَأُ كُلَّ يَوْمٍ؟",
        "fr": "Lis-tu chaque jour ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، أَقْرَأُ وَأَتَعَلَّمُ.",
        "fr": "Oui, je lis et j’apprends."
      }
    ],
    "writing": {
      "prompt": "Conjugue كَتَبَ et قَرَأَ au présent pour je, tu (m.), tu (f.), il, elle et nous.",
      "modelAr": "أَنَا أَكْتُبُ بِالْعَرَبِيَّةِ، وَأَنْتَ تَقْرَأُ النَّصَّ. أُخْتِي تَدْرُسُ فِي الْبَيْتِ. نَحْنُ نَتَعَلَّمُ كُلَّ يَوْمٍ لِأَنَّنَا نُحِبُّ اللُّغَةَ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Premiers verbes à l’inaccompli ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue كَتَبَ et قَرَأَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Conjugue كَتَبَ et قَرَأَ au présent pour je, tu (m.), tu (f.), il, elle et nous."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-17-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 17,
    "month": 4,
    "emoji": "🚫",
    "title": "Nier une phrase au présent",
    "minutes": 110,
    "goal": "Construire des phrases négatives compréhensibles.",
    "grammar": [
      {
        "title": "La négation verbale avec لَا",
        "body": "لَا أَفْهَمُ « je ne comprends pas » ; لَا أَكْتُبُ « je n’écris pas ». Pour une simple négation présente, لَا précède l’inaccompli indicatif. Ne remplace pas systématiquement لَا par لَيْسَ devant un verbe."
      },
      {
        "title": "Laysa avec un nom ou adjectif",
        "body": "لَسْتُ مُتْعَبًا = je ne suis pas fatigué (m.) ; لَيْسَ الْبَيْتُ بَعِيدًا = la maison n’est pas loin. لَيْسَ se conjugue selon la personne ; la distinction avec لَا est importante."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : هَلْ تَفْهَمُ السُّؤَالَ؟ Lis ensuite la réponse : لَا، لَا أَفْهَمُهُ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "لَا أَعْمَلُ يَوْمَ الْأَحَدِ، وَلَا أَذْهَبُ إِلَى الْمَكْتَبِ. أَنَا لَسْتُ مَرِيضًا، وَلَكِنِّي مُتْعَبٌ قَلِيلًا. أُرِيدُ أَنْ أَرْتَاحَ.",
      "fr": "Je ne travaille pas le dimanche et ne vais pas au bureau. Je ne suis pas malade, mais un peu fatigué. Je veux me reposer."
    },
    "examples": [
      {
        "ar": "هَلْ تَفْهَمُ السُّؤَالَ؟",
        "fr": "Comprends-tu la question ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "سُؤَالٌ",
              "سُؤَالٌ"
            ],
            [
              "فَهِمَ",
              "فَهِمَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَا، لَا أَفْهَمُهُ.",
        "fr": "Non, je ne le comprends pas.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "لَا",
              "لَا"
            ],
            [
              "فَهِمَ",
              "فَهِمَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ أَنْتَ مَرِيضٌ؟",
        "fr": "Es-tu malade ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مَرِيضٌ",
              "مَرِيضٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَا، لَسْتُ مَرِيضًا.",
        "fr": "Non, je ne suis pas malade.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "لَا",
              "لَا"
            ],
            [
              "لَسْتُ",
              "لَسْتُ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "فَهِمَ",
        "present": "يَفْهَمُ",
        "masdar": "فَهْمٌ",
        "fr": "comprendre",
        "lookup": "فهم"
      },
      {
        "past": "عَمِلَ",
        "present": "يَعْمَلُ",
        "masdar": "عَمَلٌ",
        "fr": "travailler",
        "lookup": "عمل"
      }
    ],
    "words": [
      [
        "لَا",
        "Ne... pas"
      ],
      [
        "لَيْسَ",
        "N’être pas"
      ],
      [
        "لَسْتُ",
        "Je ne suis pas"
      ],
      [
        "مَرِيضٌ",
        "Malade"
      ],
      [
        "مُتْعَبٌ",
        "Fatigué"
      ],
      [
        "مَكْتَبٌ",
        "Bureau"
      ],
      [
        "قَلِيلًا",
        "Un peu"
      ],
      [
        "سُؤَالٌ",
        "Question"
      ],
      [
        "بَعِيدٌ",
        "Loin"
      ],
      [
        "فَهِمَ",
        "comprendre (accompli)"
      ],
      [
        "عَمِلَ",
        "travailler (accompli)"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "مِنْ فَضْلِكَ",
        "S’il te plaît (à un homme)"
      ],
      [
        "شُكْرًا",
        "Merci"
      ],
      [
        "مَعَ",
        "Avec"
      ]
    ],
    "dialect": [
      {
        "msa": "لَا أَعْرِفُ.",
        "levant": "مَا بِعْرِفْ.",
        "fr": "Je ne sais pas.",
        "note": "En levantin, ما قبل le présent remplace souvent la négation classique لَا."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Comment dit-on « je ne comprends pas » ?",
        "options": [
          "لَا أَفْهَمُ",
          "أَفْهَمُ",
          "لَسْتُ فَهْمًا"
        ],
        "answer": 0,
        "why": "Règle du chapitre : La négation verbale avec لَا ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie لَا ?",
        "options": [
          "Ne... pas",
          "Malade",
          "Question"
        ],
        "answer": 0,
        "why": "لَا signifie « Ne... pas ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie لَيْسَ ?",
        "options": [
          "Bureau",
          "comprendre (accompli)",
          "N’être pas"
        ],
        "answer": 2,
        "why": "لَيْسَ signifie « N’être pas ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie لَسْتُ ?",
        "options": [
          "Oui",
          "Je ne suis pas",
          "Question"
        ],
        "answer": 1,
        "why": "لَسْتُ signifie « Je ne suis pas ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَرِيضٌ ?",
        "options": [
          "Malade",
          "comprendre (accompli)",
          "Merci"
        ],
        "answer": 0,
        "why": "مَرِيضٌ signifie « Malade ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُتْعَبٌ ?",
        "options": [
          "Oui",
          "Ne... pas",
          "Fatigué"
        ],
        "answer": 2,
        "why": "مُتْعَبٌ signifie « Fatigué ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَكْتَبٌ ?",
        "options": [
          "Je ne suis pas",
          "Bureau",
          "Merci"
        ],
        "answer": 1,
        "why": "مَكْتَبٌ signifie « Bureau ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de فَهِمَ ?",
        "options": [
          "فَهْمٌ",
          "عَمَلٌ",
          "بَعِيدٌ"
        ],
        "answer": 0,
        "why": "فَهِمَ — يَفْهَمُ — فَهْمٌ : comprendre."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de عَمِلَ ?",
        "options": [
          "فَهْمٌ",
          "فَهِمَ",
          "عَمَلٌ"
        ],
        "answer": 2,
        "why": "عَمِلَ — يَعْمَلُ — عَمَلٌ : travailler."
      },
      {
        "type": "input",
        "prompt": "Écris « Un peu » en arabe (voyelles facultatives).",
        "answer": "قَلِيلًا",
        "accepted": [
          "قليلا"
        ],
        "why": "قَلِيلًا signifie « Un peu »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Comprends-tu la question ? » ?",
        "options": [
          "هَلْ تَفْهَمُ السُّؤَالَ؟",
          "هَلْ أَنْتَ مَرِيضٌ؟",
          "لَا، لَسْتُ مَرِيضًا."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ تَفْهَمُ السُّؤَالَ؟",
        "fr": "Comprends-tu la question ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "لَا، لَا أَفْهَمُهُ.",
        "fr": "Non, je ne le comprends pas."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ أَنْتَ مَرِيضٌ؟",
        "fr": "Es-tu malade ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "لَا، لَسْتُ مَرِيضًا.",
        "fr": "Non, je ne suis pas malade."
      }
    ],
    "writing": {
      "prompt": "Écris cinq phrases négatives avec لَا et trois avec une forme de لَيْسَ.",
      "modelAr": "لَا أَعْمَلُ يَوْمَ الْأَحَدِ، وَلَا أَذْهَبُ إِلَى الْمَكْتَبِ. أَنَا لَسْتُ مَرِيضًا، وَلَكِنِّي مُتْعَبٌ قَلِيلًا. أُرِيدُ أَنْ أَرْتَاحَ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Nier une phrase au présent ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue فَهِمَ et عَمِلَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Écris cinq phrases négatives avec لَا et trois avec une forme de لَيْسَ."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-18-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 18,
    "month": 4,
    "emoji": "📍",
    "title": "Localiser : dans, sur, sous, devant",
    "minutes": 110,
    "goal": "Indiquer l’emplacement d’une chose.",
    "grammar": [
      {
        "title": "Les prépositions de base",
        "body": "فِي = dans ; عَلَى = sur ; تَحْتَ = sous ; أَمَامَ = devant ; خَلْفَ = derrière ; بِجَانِبِ = à côté de. Plusieurs sont des noms de lieu régissant un complément au génitif."
      },
      {
        "title": "Après une préposition",
        "body": "فِي الْبَيْتِ, عَلَى الطَّاوِلَةِ : observe la kasra du nom défini après la préposition. À l’oral en pause, la finale peut disparaître, mais elle reste utile pour lire l’arabe littéraire."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : أَيْنَ الْقَلَمُ؟ Lis ensuite la réponse : الْقَلَمُ عَلَى الطَّاوِلَةِ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "الْقَلَمُ عَلَى الطَّاوِلَةِ. الْحَقِيبَةُ تَحْتَ الْكُرْسِيِّ. الْمَكْتَبَةُ أَمَامَ الْبَيْتِ، وَالْمَدْرَسَةُ خَلْفَ الْحَدِيقَةِ.",
      "fr": "Le stylo est sur la table. Le sac est sous la chaise. La bibliothèque est devant la maison et l’école derrière le jardin."
    },
    "examples": [
      {
        "ar": "أَيْنَ الْقَلَمُ؟",
        "fr": "Où est le stylo ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "الْقَلَمُ عَلَى الطَّاوِلَةِ.",
        "fr": "Le stylo est sur la table.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "عَلَى",
              "عَلَى"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَأَيْنَ الْحَقِيبَةُ؟",
        "fr": "Et où est le sac ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "هِيَ تَحْتَ الْكُرْسِيِّ.",
        "fr": "Il est sous la chaise.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "تَحْتَ",
              "تَحْتَ"
            ],
            [
              "الْكُرْسِيُّ",
              "الْكُرْسِيُّ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "رَأَى",
        "present": "يَرَى",
        "masdar": "رُؤْيَةٌ",
        "fr": "voir",
        "lookup": "رأى"
      },
      {
        "past": "بَحَثَ",
        "present": "يَبْحَثُ",
        "masdar": "بَحْثٌ",
        "fr": "chercher",
        "lookup": "بحث"
      }
    ],
    "words": [
      [
        "فِي",
        "Dans"
      ],
      [
        "عَلَى",
        "Sur"
      ],
      [
        "تَحْتَ",
        "Sous"
      ],
      [
        "أَمَامَ",
        "Devant"
      ],
      [
        "خَلْفَ",
        "Derrière"
      ],
      [
        "بِجَانِبِ",
        "À côté de"
      ],
      [
        "الْحَدِيقَةُ",
        "Jardin"
      ],
      [
        "الْمَكْتَبَةُ",
        "Bibliothèque"
      ],
      [
        "الْكُرْسِيُّ",
        "Chaise"
      ],
      [
        "رَأَى",
        "voir (accompli)"
      ],
      [
        "رُؤْيَةٌ",
        "maṣdar : voir"
      ],
      [
        "بَحَثَ",
        "chercher (accompli)"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ],
      [
        "مِنْ فَضْلِكَ",
        "S’il te plaît (à un homme)"
      ]
    ],
    "dialect": [
      {
        "msa": "الْقَلَمُ عَلَى الطَّاوِلَةِ.",
        "levant": "الْقَلَمْ عَ الطَّاوْلِة.",
        "fr": "Le stylo est sur la table.",
        "note": "عَ / عَلى et طَاوْلِة sont des réalisations parlées courantes."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel mot veut dire « sous » ?",
        "options": [
          "تَحْتَ",
          "فَوْقَ",
          "بِجَانِبِ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Les prépositions de base ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie فِي ?",
        "options": [
          "Dans",
          "Devant",
          "Bibliothèque"
        ],
        "answer": 0,
        "why": "فِي signifie « Dans ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie عَلَى ?",
        "options": [
          "À côté de",
          "voir (accompli)",
          "Sur"
        ],
        "answer": 2,
        "why": "عَلَى signifie « Sur ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie تَحْتَ ?",
        "options": [
          "chercher (accompli)",
          "Sous",
          "Bibliothèque"
        ],
        "answer": 1,
        "why": "تَحْتَ signifie « Sous ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَمَامَ ?",
        "options": [
          "Devant",
          "voir (accompli)",
          "Non"
        ],
        "answer": 0,
        "why": "أَمَامَ signifie « Devant ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie خَلْفَ ?",
        "options": [
          "chercher (accompli)",
          "Dans",
          "Derrière"
        ],
        "answer": 2,
        "why": "خَلْفَ signifie « Derrière ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie بِجَانِبِ ?",
        "options": [
          "Sous",
          "À côté de",
          "Non"
        ],
        "answer": 1,
        "why": "بِجَانِبِ signifie « À côté de ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de رَأَى ?",
        "options": [
          "رُؤْيَةٌ",
          "بَحْثٌ",
          "الْكُرْسِيُّ"
        ],
        "answer": 0,
        "why": "رَأَى — يَرَى — رُؤْيَةٌ : voir."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de بَحَثَ ?",
        "options": [
          "رُؤْيَةٌ",
          "رَأَى",
          "بَحْثٌ"
        ],
        "answer": 2,
        "why": "بَحَثَ — يَبْحَثُ — بَحْثٌ : chercher."
      },
      {
        "type": "input",
        "prompt": "Écris « Jardin » en arabe (voyelles facultatives).",
        "answer": "الْحَدِيقَةُ",
        "accepted": [
          "الحديقة"
        ],
        "why": "الْحَدِيقَةُ signifie « Jardin »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Où est le stylo ? » ?",
        "options": [
          "أَيْنَ الْقَلَمُ؟",
          "وَأَيْنَ الْحَقِيبَةُ؟",
          "هِيَ تَحْتَ الْكُرْسِيِّ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "أَيْنَ الْقَلَمُ؟",
        "fr": "Où est le stylo ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "الْقَلَمُ عَلَى الطَّاوِلَةِ.",
        "fr": "Le stylo est sur la table."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "وَأَيْنَ الْحَقِيبَةُ؟",
        "fr": "Et où est le sac ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "هِيَ تَحْتَ الْكُرْسِيِّ.",
        "fr": "Il est sous la chaise."
      }
    ],
    "writing": {
      "prompt": "Dessine une pièce et écris neuf phrases situant les objets les uns par rapport aux autres.",
      "modelAr": "الْقَلَمُ عَلَى الطَّاوِلَةِ. الْحَقِيبَةُ تَحْتَ الْكُرْسِيِّ. الْمَكْتَبَةُ أَمَامَ الْبَيْتِ، وَالْمَدْرَسَةُ خَلْفَ الْحَدِيقَةِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Localiser : dans, sur, sous, devant ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue رَأَى et بَحَثَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Dessine une pièce et écris neuf phrases situant les objets les uns par rapport aux autres."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-19-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 19,
    "month": 4,
    "emoji": "🔗",
    "title": "L’annexion (iḍāfa) pour dire « de »",
    "minutes": 110,
    "goal": "Construire les premières relations entre deux noms.",
    "grammar": [
      {
        "title": "Nom + nom",
        "body": "كِتَابُ الطَّالِبِ = le livre de l’étudiant. Le premier terme n’a pas d’article ni de tanwīn ; le second est au génitif. Dans بَابُ الْبَيْتِ, c’est le second terme qui détermine l’ensemble."
      },
      {
        "title": "Possession et sens",
        "body": "بَيْتُ سَامِي = la maison de Sami ; مَدْرَسَةُ الْمَدِينَةِ = l’école de la ville. Cette construction couvre la possession mais aussi les relations d’appartenance ou de fonction. Avec un pronom suffixe : كِتَابِي."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : لِمَنْ هَذَا الْكِتَابُ؟ Lis ensuite la réponse : هَذَا كِتَابُ الطَّالِبِ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "هَذَا مَكْتَبُ الْمُدَرِّسِ. عَلَى الْمَكْتَبِ كِتَابُ الطَّالِبِ وَقَلَمُهُ. بَابُ الْغُرْفَةِ مَفْتُوحٌ، وَنَافِذَةُ الْبَيْتِ كَبِيرَةٌ.",
      "fr": "Voici le bureau du professeur. Sur le bureau se trouvent le livre de l’étudiant et son stylo. La porte de la pièce est ouverte et la fenêtre de la maison est grande."
    },
    "examples": [
      {
        "ar": "لِمَنْ هَذَا الْكِتَابُ؟",
        "fr": "À qui est ce livre ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "هَذَا كِتَابُ الطَّالِبِ.",
        "fr": "C’est le livre de l’étudiant.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "طَالِبٌ",
              "طَالِبٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَأَيْنَ بَابُ الْغُرْفَةِ؟",
        "fr": "Et où est la porte de la pièce ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "بَابٌ",
              "بَابٌ"
            ],
            [
              "غُرْفَةٌ",
              "غُرْفَةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "بَابُ الْغُرْفَةِ هُنَاكَ.",
        "fr": "La porte de la pièce est là-bas.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "بَابٌ",
              "بَابٌ"
            ],
            [
              "غُرْفَةٌ",
              "غُرْفَةٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "فَتَحَ",
        "present": "يَفْتَحُ",
        "masdar": "فَتْحٌ",
        "fr": "ouvrir",
        "lookup": "فتح"
      },
      {
        "past": "أَغْلَقَ",
        "present": "يُغْلِقُ",
        "masdar": "إِغْلَاقٌ",
        "fr": "fermer",
        "lookup": "أغلق"
      }
    ],
    "words": [
      [
        "إِضَافَةٌ",
        "Annexion"
      ],
      [
        "مَكْتَبٌ",
        "Bureau"
      ],
      [
        "مُدَرِّسٌ",
        "Enseignant"
      ],
      [
        "طَالِبٌ",
        "Étudiant"
      ],
      [
        "نَافِذَةٌ",
        "Fenêtre"
      ],
      [
        "بَابٌ",
        "Porte"
      ],
      [
        "مَفْتُوحٌ",
        "Ouvert"
      ],
      [
        "مِلْكِيَّةٌ",
        "Possession"
      ],
      [
        "غُرْفَةٌ",
        "Pièce"
      ],
      [
        "فَتَحَ",
        "ouvrir (accompli)"
      ],
      [
        "أَغْلَقَ",
        "fermer (accompli)"
      ],
      [
        "إِغْلَاقٌ",
        "maṣdar : fermer"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ],
      [
        "مِنْ فَضْلِكَ",
        "S’il te plaît (à un homme)"
      ]
    ],
    "dialect": [
      {
        "msa": "بَابُ الْغُرْفَةِ",
        "levant": "بَابِ الْأُوضَة",
        "fr": "La porte de la pièce",
        "note": "L’iḍāfa existe aussi dans la langue parlée, mais sans les désinences casuelles."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle construction signifie « le livre de l’étudiant » ?",
        "options": [
          "كِتَابُ الطَّالِبِ",
          "الْكِتَابُ الطَّالِبِ",
          "كِتَابٌ الطَّالِبُ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Nom + nom ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie إِضَافَةٌ ?",
        "options": [
          "Annexion",
          "Étudiant",
          "Possession"
        ],
        "answer": 0,
        "why": "إِضَافَةٌ signifie « Annexion ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَكْتَبٌ ?",
        "options": [
          "Porte",
          "ouvrir (accompli)",
          "Bureau"
        ],
        "answer": 2,
        "why": "مَكْتَبٌ signifie « Bureau ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُدَرِّسٌ ?",
        "options": [
          "maṣdar : fermer",
          "Enseignant",
          "Possession"
        ],
        "answer": 1,
        "why": "مُدَرِّسٌ signifie « Enseignant ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie طَالِبٌ ?",
        "options": [
          "Étudiant",
          "ouvrir (accompli)",
          "Non"
        ],
        "answer": 0,
        "why": "طَالِبٌ signifie « Étudiant ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie نَافِذَةٌ ?",
        "options": [
          "maṣdar : fermer",
          "Annexion",
          "Fenêtre"
        ],
        "answer": 2,
        "why": "نَافِذَةٌ signifie « Fenêtre ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie بَابٌ ?",
        "options": [
          "Enseignant",
          "Porte",
          "Non"
        ],
        "answer": 1,
        "why": "بَابٌ signifie « Porte ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de فَتَحَ ?",
        "options": [
          "فَتْحٌ",
          "إِغْلَاقٌ",
          "غُرْفَةٌ"
        ],
        "answer": 0,
        "why": "فَتَحَ — يَفْتَحُ — فَتْحٌ : ouvrir."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَغْلَقَ ?",
        "options": [
          "فَتْحٌ",
          "فَتَحَ",
          "إِغْلَاقٌ"
        ],
        "answer": 2,
        "why": "أَغْلَقَ — يُغْلِقُ — إِغْلَاقٌ : fermer."
      },
      {
        "type": "input",
        "prompt": "Écris « Ouvert » en arabe (voyelles facultatives).",
        "answer": "مَفْتُوحٌ",
        "accepted": [
          "مفتوح"
        ],
        "why": "مَفْتُوحٌ signifie « Ouvert »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « À qui est ce livre ? » ?",
        "options": [
          "لِمَنْ هَذَا الْكِتَابُ؟",
          "وَأَيْنَ بَابُ الْغُرْفَةِ؟",
          "بَابُ الْغُرْفَةِ هُنَاكَ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "لِمَنْ هَذَا الْكِتَابُ؟",
        "fr": "À qui est ce livre ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "هَذَا كِتَابُ الطَّالِبِ.",
        "fr": "C’est le livre de l’étudiant."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "وَأَيْنَ بَابُ الْغُرْفَةِ؟",
        "fr": "Et où est la porte de la pièce ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "بَابُ الْغُرْفَةِ هُنَاكَ.",
        "fr": "La porte de la pièce est là-bas."
      }
    ],
    "writing": {
      "prompt": "Forme dix iḍāfa pour des objets domestiques ; lis les deux termes sans article sur le premier.",
      "modelAr": "هَذَا مَكْتَبُ الْمُدَرِّسِ. عَلَى الْمَكْتَبِ كِتَابُ الطَّالِبِ وَقَلَمُهُ. بَابُ الْغُرْفَةِ مَفْتُوحٌ، وَنَافِذَةُ الْبَيْتِ كَبِيرَةٌ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « L’annexion (iḍāfa) pour dire « de » ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue فَتَحَ et أَغْلَقَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Forme dix iḍāfa pour des objets domestiques ; lis les deux termes sans article sur le premier."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-20-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 20,
    "month": 4,
    "emoji": "🌈",
    "title": "Les couleurs dans des phrases",
    "minutes": 110,
    "goal": "Décrire des objets et des vêtements en respectant les accords.",
    "grammar": [
      {
        "title": "Couleurs masculines et féminines",
        "body": "أَبْيَضُ / بَيْضَاءُ = blanc / blanche ; أَسْوَدُ / سَوْدَاءُ = noir / noire ; أَحْمَرُ / حَمْرَاءُ = rouge. Ces couleurs ont un féminin irrégulier, à apprendre comme paire."
      },
      {
        "title": "Attribut et épithète",
        "body": "الْقَمِيصُ الْأَبْيَضُ « la chemise blanche » et الْقَمِيصُ أَبْيَضُ « la chemise est blanche ». Au féminin : الْحَقِيبَةُ حَمْرَاءُ. Le modèle de certaines couleurs diffère d’un adjectif ordinaire en ـَة."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَا لَوْنُ هَذَا الْقَمِيصِ؟ Lis ensuite la réponse : الْقَمِيصُ أَبْيَضُ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "عِنْدِي قَمِيصٌ أَبْيَضُ وَمِعْطَفٌ أَسْوَدُ. أُخْتِي عِنْدَهَا حَقِيبَةٌ حَمْرَاءُ. فِي الْغُرْفَةِ نَافِذَةٌ زَرْقَاءُ وَكُرْسِيٌّ أَخْضَرُ.",
      "fr": "J’ai une chemise blanche et un manteau noir. Ma sœur a un sac rouge. Dans la pièce, il y a une fenêtre bleue et une chaise verte."
    },
    "examples": [
      {
        "ar": "مَا لَوْنُ هَذَا الْقَمِيصِ؟",
        "fr": "De quelle couleur est cette chemise ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "لَوْنٌ",
              "لَوْنٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "الْقَمِيصُ أَبْيَضُ.",
        "fr": "La chemise est blanche.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَبْيَضُ",
              "أَبْيَضُ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَمَا لَوْنُ الْحَقِيبَةِ؟",
        "fr": "Et de quelle couleur est le sac ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "لَوْنٌ",
              "لَوْنٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "الْحَقِيبَةُ حَمْرَاءُ.",
        "fr": "Le sac est rouge.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "حَمْرَاءُ",
              "حَمْرَاءُ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "لَبِسَ",
        "present": "يَلْبَسُ",
        "masdar": "لُبْسٌ",
        "fr": "porter un vêtement",
        "lookup": "لبس"
      },
      {
        "past": "اِشْتَرَى",
        "present": "يَشْتَرِي",
        "masdar": "اِشْتِرَاءٌ",
        "fr": "acheter",
        "lookup": "اشترى"
      }
    ],
    "words": [
      [
        "أَبْيَضُ",
        "Blanc (m.)"
      ],
      [
        "بَيْضَاءُ",
        "Blanche"
      ],
      [
        "أَسْوَدُ",
        "Noir (m.)"
      ],
      [
        "سَوْدَاءُ",
        "Noire"
      ],
      [
        "أَحْمَرُ",
        "Rouge (m.)"
      ],
      [
        "حَمْرَاءُ",
        "Rouge (f.)"
      ],
      [
        "أَخْضَرُ",
        "Vert (m.)"
      ],
      [
        "زَرْقَاءُ",
        "Bleue"
      ],
      [
        "لَوْنٌ",
        "Couleur"
      ],
      [
        "لَبِسَ",
        "porter un vêtement (accompli)"
      ],
      [
        "اِشْتَرَى",
        "acheter (accompli)"
      ],
      [
        "اِشْتِرَاءٌ",
        "maṣdar : acheter"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ],
      [
        "مِنْ فَضْلِكَ",
        "S’il te plaît (à un homme)"
      ]
    ],
    "dialect": [
      {
        "msa": "الْقَمِيصُ أَبْيَضُ.",
        "levant": "الْقَمِيصْ أَبْيَضْ.",
        "fr": "La chemise est blanche.",
        "note": "Les couleurs sont proches en arabe littéraire et levantin, avec disparition des finales."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel féminin correspond à أَبْيَضُ ?",
        "options": [
          "بَيْضَاءُ",
          "أَبْيَضَةٌ",
          "بَيَضَةٌ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Couleurs masculines et féminines ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَبْيَضُ ?",
        "options": [
          "Blanc (m.)",
          "Noire",
          "Bleue"
        ],
        "answer": 0,
        "why": "أَبْيَضُ signifie « Blanc (m.) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie بَيْضَاءُ ?",
        "options": [
          "Rouge (f.)",
          "porter un vêtement (accompli)",
          "Blanche"
        ],
        "answer": 2,
        "why": "بَيْضَاءُ signifie « Blanche ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَسْوَدُ ?",
        "options": [
          "maṣdar : acheter",
          "Noir (m.)",
          "Bleue"
        ],
        "answer": 1,
        "why": "أَسْوَدُ signifie « Noir (m.) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie سَوْدَاءُ ?",
        "options": [
          "Noire",
          "porter un vêtement (accompli)",
          "Non"
        ],
        "answer": 0,
        "why": "سَوْدَاءُ signifie « Noire ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَحْمَرُ ?",
        "options": [
          "maṣdar : acheter",
          "Blanc (m.)",
          "Rouge (m.)"
        ],
        "answer": 2,
        "why": "أَحْمَرُ signifie « Rouge (m.) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie حَمْرَاءُ ?",
        "options": [
          "Noir (m.)",
          "Rouge (f.)",
          "Non"
        ],
        "answer": 1,
        "why": "حَمْرَاءُ signifie « Rouge (f.) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de لَبِسَ ?",
        "options": [
          "لُبْسٌ",
          "اِشْتِرَاءٌ",
          "لَوْنٌ"
        ],
        "answer": 0,
        "why": "لَبِسَ — يَلْبَسُ — لُبْسٌ : porter un vêtement."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِشْتَرَى ?",
        "options": [
          "لُبْسٌ",
          "لَبِسَ",
          "اِشْتِرَاءٌ"
        ],
        "answer": 2,
        "why": "اِشْتَرَى — يَشْتَرِي — اِشْتِرَاءٌ : acheter."
      },
      {
        "type": "input",
        "prompt": "Écris « Vert (m.) » en arabe (voyelles facultatives).",
        "answer": "أَخْضَرُ",
        "accepted": [
          "اخضر"
        ],
        "why": "أَخْضَرُ signifie « Vert (m.) »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « De quelle couleur est cette chemise ? » ?",
        "options": [
          "مَا لَوْنُ هَذَا الْقَمِيصِ؟",
          "وَمَا لَوْنُ الْحَقِيبَةِ؟",
          "الْحَقِيبَةُ حَمْرَاءُ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَا لَوْنُ هَذَا الْقَمِيصِ؟",
        "fr": "De quelle couleur est cette chemise ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "الْقَمِيصُ أَبْيَضُ.",
        "fr": "La chemise est blanche."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "وَمَا لَوْنُ الْحَقِيبَةِ؟",
        "fr": "Et de quelle couleur est le sac ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "الْحَقِيبَةُ حَمْرَاءُ.",
        "fr": "Le sac est rouge."
      }
    ],
    "writing": {
      "prompt": "Décris la couleur de dix objets en accordant chaque adjectif avec son nom.",
      "modelAr": "عِنْدِي قَمِيصٌ أَبْيَضُ وَمِعْطَفٌ أَسْوَدُ. أُخْتِي عِنْدَهَا حَقِيبَةٌ حَمْرَاءُ. فِي الْغُرْفَةِ نَافِذَةٌ زَرْقَاءُ وَكُرْسِيٌّ أَخْضَرُ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Les couleurs dans des phrases ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue لَبِسَ et اِشْتَرَى au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Décris la couleur de dix objets en accordant chaque adjectif avec son nom."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-21-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 21,
    "month": 5,
    "emoji": "❤️",
    "title": "Dire ce que l’on aime",
    "minutes": 110,
    "goal": "Exprimer goûts, loisirs et préférences simples.",
    "grammar": [
      {
        "title": "Le verbe أَحَبَّ",
        "body": "أُحِبُّ الْقِرَاءَةَ signifie « j’aime la lecture ». Pour une activité après أُحِبُّ, le maṣdar est très naturel : أُحِبُّ السِّبَاحَةَ. Ne calque pas mécaniquement « j’aime + infinitif français »."
      },
      {
        "title": "J’aime / je n’aime pas",
        "body": "أُحِبُّ الرَّسْمَ وَلَا أُحِبُّ الضَّوْضَاءَ. Le verbe est généralement suivi d’un objet à l’accusatif. On peut renforcer avec كَثِيرًا : أُحِبُّ الْمُوسِيقَى كَثِيرًا."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَاذَا تُحِبُّ أَنْ تَفْعَلَ؟ Lis ensuite la réponse : أُحِبُّ الْقِرَاءَةَ وَالرَّسْمَ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أُحِبُّ الْقِرَاءَةَ وَالرَّسْمَ. صَدِيقِي يُحِبُّ كُرَةَ الْقَدَمِ، وَأُخْتِي تُحِبُّ السِّبَاحَةَ. نَتَكَلَّمُ عَنْ هِوَايَاتِنَا فِي الْمَقْهَى.",
      "fr": "J’aime la lecture et le dessin. Mon ami aime le football et ma sœur aime la natation. Nous parlons de nos loisirs au café."
    },
    "examples": [
      {
        "ar": "مَاذَا تُحِبُّ أَنْ تَفْعَلَ؟",
        "fr": "Qu’aimes-tu faire ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "حُبٌّ",
              "حُبٌّ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أُحِبُّ الْقِرَاءَةَ وَالرَّسْمَ.",
        "fr": "J’aime lire et dessiner.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "قِرَاءَةٌ",
              "قِرَاءَةٌ"
            ],
            [
              "رَسْمٌ",
              "رَسْمٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ تُحِبُّ كُرَةَ الْقَدَمِ؟",
        "fr": "Aimes-tu le football ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "كُرَةُ الْقَدَمِ",
              "كُرَةُ الْقَدَمِ"
            ],
            [
              "حُبٌّ",
              "حُبٌّ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَا، أُفَضِّلُ السِّبَاحَةَ.",
        "fr": "Non, je préfère la natation.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "سِبَاحَةٌ",
              "سِبَاحَةٌ"
            ],
            [
              "أُفَضِّلُ",
              "أُفَضِّلُ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "أَحَبَّ",
        "present": "يُحِبُّ",
        "masdar": "حُبٌّ",
        "fr": "aimer",
        "lookup": "أحب"
      },
      {
        "past": "فَضَّلَ",
        "present": "يُفَضِّلُ",
        "masdar": "تَفْضِيلٌ",
        "fr": "préférer",
        "lookup": "فضل"
      }
    ],
    "words": [
      [
        "هَوَايَةٌ",
        "Loisir"
      ],
      [
        "قِرَاءَةٌ",
        "Lecture"
      ],
      [
        "رَسْمٌ",
        "Dessin"
      ],
      [
        "سِبَاحَةٌ",
        "Natation"
      ],
      [
        "كُرَةُ الْقَدَمِ",
        "Football"
      ],
      [
        "مُوسِيقَى",
        "Musique"
      ],
      [
        "مَقْهًى",
        "Café"
      ],
      [
        "أُحِبُّ",
        "J’aime"
      ],
      [
        "أُفَضِّلُ",
        "Je préfère"
      ],
      [
        "حُبٌّ",
        "maṣdar : aimer"
      ],
      [
        "فَضَّلَ",
        "préférer (accompli)"
      ],
      [
        "تَفْضِيلٌ",
        "maṣdar : préférer"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ],
      [
        "مِنْ فَضْلِكَ",
        "S’il te plaît (à un homme)"
      ]
    ],
    "dialect": [
      {
        "msa": "أُحِبُّ الْقِرَاءَةَ.",
        "levant": "بْحِبِّ الْقِرَايِة.",
        "fr": "J’aime la lecture.",
        "note": "بْحِبّ est courant pour « j’aime » en levantin."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel mot est un maṣdar signifiant « lecture » ?",
        "options": [
          "قِرَاءَةٌ",
          "قَارِئٌ",
          "مَقْرُوءٌ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Le verbe أَحَبَّ ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie هَوَايَةٌ ?",
        "options": [
          "Loisir",
          "Natation",
          "J’aime"
        ],
        "answer": 0,
        "why": "هَوَايَةٌ signifie « Loisir ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie قِرَاءَةٌ ?",
        "options": [
          "Musique",
          "maṣdar : aimer",
          "Lecture"
        ],
        "answer": 2,
        "why": "قِرَاءَةٌ signifie « Lecture ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie رَسْمٌ ?",
        "options": [
          "maṣdar : préférer",
          "Dessin",
          "J’aime"
        ],
        "answer": 1,
        "why": "رَسْمٌ signifie « Dessin ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie سِبَاحَةٌ ?",
        "options": [
          "Natation",
          "maṣdar : aimer",
          "Non"
        ],
        "answer": 0,
        "why": "سِبَاحَةٌ signifie « Natation ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie كُرَةُ الْقَدَمِ ?",
        "options": [
          "maṣdar : préférer",
          "Loisir",
          "Football"
        ],
        "answer": 2,
        "why": "كُرَةُ الْقَدَمِ signifie « Football ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُوسِيقَى ?",
        "options": [
          "Dessin",
          "Musique",
          "Non"
        ],
        "answer": 1,
        "why": "مُوسِيقَى signifie « Musique ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَحَبَّ ?",
        "options": [
          "حُبٌّ",
          "تَفْضِيلٌ",
          "أُفَضِّلُ"
        ],
        "answer": 0,
        "why": "أَحَبَّ — يُحِبُّ — حُبٌّ : aimer."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de فَضَّلَ ?",
        "options": [
          "حُبٌّ",
          "أُفَضِّلُ",
          "تَفْضِيلٌ"
        ],
        "answer": 2,
        "why": "فَضَّلَ — يُفَضِّلُ — تَفْضِيلٌ : préférer."
      },
      {
        "type": "input",
        "prompt": "Écris « Café » en arabe (voyelles facultatives).",
        "answer": "مَقْهًى",
        "accepted": [
          "مقهي"
        ],
        "why": "مَقْهًى signifie « Café »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Qu’aimes-tu faire ? » ?",
        "options": [
          "مَاذَا تُحِبُّ أَنْ تَفْعَلَ؟",
          "هَلْ تُحِبُّ كُرَةَ الْقَدَمِ؟",
          "لَا، أُفَضِّلُ السِّبَاحَةَ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا تُحِبُّ أَنْ تَفْعَلَ؟",
        "fr": "Qu’aimes-tu faire ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أُحِبُّ الْقِرَاءَةَ وَالرَّسْمَ.",
        "fr": "J’aime lire et dessiner."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ تُحِبُّ كُرَةَ الْقَدَمِ؟",
        "fr": "Aimes-tu le football ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "لَا، أُفَضِّلُ السِّبَاحَةَ.",
        "fr": "Non, je préfère la natation."
      }
    ],
    "writing": {
      "prompt": "Écris huit phrases : quatre loisirs que tu aimes, deux que tu n’aimes pas et deux préférences.",
      "modelAr": "أُحِبُّ الْقِرَاءَةَ وَالرَّسْمَ. صَدِيقِي يُحِبُّ كُرَةَ الْقَدَمِ، وَأُخْتِي تُحِبُّ السِّبَاحَةَ. نَتَكَلَّمُ عَنْ هِوَايَاتِنَا فِي الْمَقْهَى.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Dire ce que l’on aime ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue أَحَبَّ et فَضَّلَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Écris huit phrases : quatre loisirs que tu aimes, deux que tu n’aimes pas et deux préférences."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-22-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 22,
    "month": 5,
    "emoji": "🍽️",
    "title": "Petit-déjeuner, repas et boissons",
    "minutes": 110,
    "goal": "Commander une boisson et expliquer ce que l’on mange.",
    "grammar": [
      {
        "title": "Manger et boire au présent",
        "body": "أَكَلَ → يَأْكُلُ ; شَرِبَ → يَشْرَبُ. À la première personne : آكُلُ et أَشْرَبُ. Observe la hamza dans آكُلُ ; ne confonds pas le verbe et son maṣdar أَكْلٌ."
      },
      {
        "title": "Un peu de / avec",
        "body": "أُرِيدُ كُوبًا مِنَ الْمَاءِ : le groupe مِنَ الْمَاءِ précise le contenu ; شَايٌ بِالْحَلِيبِ « du thé au lait ». Les prépositions introduisent un nom au génitif."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَاذَا تُرِيدُ أَنْ تَشْرَبَ؟ Lis ensuite la réponse : أُرِيدُ مَاءً مِنْ فَضْلِكَ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أَتَنَاوَلُ الْفُطُورَ فِي الصَّبَاحِ. آكُلُ خُبْزًا وَجُبْنًا، وَأَشْرَبُ الشَّايَ. فِي الْمَسَاءِ نَطْبُخُ الْأَرُزَّ وَالْخُضْرَوَاتِ.",
      "fr": "Je prends mon petit-déjeuner le matin. Je mange du pain et du fromage et je bois du thé. Le soir, nous cuisinons du riz et des légumes."
    },
    "examples": [
      {
        "ar": "مَاذَا تُرِيدُ أَنْ تَشْرَبَ؟",
        "fr": "Que veux-tu boire ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "شَرِبَ",
              "شَرِبَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أُرِيدُ مَاءً مِنْ فَضْلِكَ.",
        "fr": "Je voudrais de l’eau, s’il te plaît.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مَاءٌ",
              "مَاءٌ"
            ],
            [
              "مِنْ فَضْلِكَ",
              "مِنْ فَضْلِكَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ تُرِيدُ شَايًا أَيْضًا؟",
        "fr": "Veux-tu aussi du thé ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "شَايٌ",
              "شَايٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، شَايًا بِالْحَلِيبِ.",
        "fr": "Oui, du thé au lait.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "شَايٌ",
              "شَايٌ"
            ],
            [
              "حَلِيبٌ",
              "حَلِيبٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "أَكَلَ",
        "present": "يَأْكُلُ",
        "masdar": "أَكْلٌ",
        "fr": "manger",
        "lookup": "أكل"
      },
      {
        "past": "شَرِبَ",
        "present": "يَشْرَبُ",
        "masdar": "شُرْبٌ",
        "fr": "boire",
        "lookup": "شرب"
      }
    ],
    "words": [
      [
        "خُبْزٌ",
        "Pain"
      ],
      [
        "جُبْنٌ",
        "Fromage"
      ],
      [
        "مَاءٌ",
        "Eau"
      ],
      [
        "شَايٌ",
        "Thé"
      ],
      [
        "حَلِيبٌ",
        "Lait"
      ],
      [
        "أَرُزٌّ",
        "Riz"
      ],
      [
        "خُضْرَوَاتٌ",
        "Légumes"
      ],
      [
        "فُطُورٌ",
        "Petit-déjeuner"
      ],
      [
        "كُوبٌ",
        "Verre/tasse"
      ],
      [
        "أَكَلَ",
        "manger (accompli)"
      ],
      [
        "شَرِبَ",
        "boire (accompli)"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ],
      [
        "مِنْ فَضْلِكَ",
        "S’il te plaît (à un homme)"
      ],
      [
        "شُكْرًا",
        "Merci"
      ]
    ],
    "dialect": [
      {
        "msa": "أُرِيدُ مَاءً.",
        "levant": "بَدِّي مَيّ.",
        "fr": "Je veux de l’eau.",
        "note": "بَدِّي = je veux, مَيّ = eau : expressions parlées très fréquentes."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel verbe signifie « boire » ?",
        "options": [
          "يَشْرَبُ",
          "يَكْتُبُ",
          "يَقْرَأُ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Manger et boire au présent ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie خُبْزٌ ?",
        "options": [
          "Pain",
          "Thé",
          "Petit-déjeuner"
        ],
        "answer": 0,
        "why": "خُبْزٌ signifie « Pain ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie جُبْنٌ ?",
        "options": [
          "Riz",
          "manger (accompli)",
          "Fromage"
        ],
        "answer": 2,
        "why": "جُبْنٌ signifie « Fromage ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَاءٌ ?",
        "options": [
          "Oui",
          "Eau",
          "Petit-déjeuner"
        ],
        "answer": 1,
        "why": "مَاءٌ signifie « Eau ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie شَايٌ ?",
        "options": [
          "Thé",
          "manger (accompli)",
          "S’il te plaît (à un homme)"
        ],
        "answer": 0,
        "why": "شَايٌ signifie « Thé ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie حَلِيبٌ ?",
        "options": [
          "Oui",
          "Pain",
          "Lait"
        ],
        "answer": 2,
        "why": "حَلِيبٌ signifie « Lait ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَرُزٌّ ?",
        "options": [
          "Eau",
          "Riz",
          "S’il te plaît (à un homme)"
        ],
        "answer": 1,
        "why": "أَرُزٌّ signifie « Riz ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَكَلَ ?",
        "options": [
          "أَكْلٌ",
          "شُرْبٌ",
          "كُوبٌ"
        ],
        "answer": 0,
        "why": "أَكَلَ — يَأْكُلُ — أَكْلٌ : manger."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de شَرِبَ ?",
        "options": [
          "أَكْلٌ",
          "أَكَلَ",
          "شُرْبٌ"
        ],
        "answer": 2,
        "why": "شَرِبَ — يَشْرَبُ — شُرْبٌ : boire."
      },
      {
        "type": "input",
        "prompt": "Écris « Légumes » en arabe (voyelles facultatives).",
        "answer": "خُضْرَوَاتٌ",
        "accepted": [
          "خضروات"
        ],
        "why": "خُضْرَوَاتٌ signifie « Légumes »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Que veux-tu boire ? » ?",
        "options": [
          "مَاذَا تُرِيدُ أَنْ تَشْرَبَ؟",
          "هَلْ تُرِيدُ شَايًا أَيْضًا؟",
          "نَعَمْ، شَايًا بِالْحَلِيبِ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا تُرِيدُ أَنْ تَشْرَبَ؟",
        "fr": "Que veux-tu boire ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أُرِيدُ مَاءً مِنْ فَضْلِكَ.",
        "fr": "Je voudrais de l’eau, s’il te plaît."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ تُرِيدُ شَايًا أَيْضًا؟",
        "fr": "Veux-tu aussi du thé ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، شَايًا بِالْحَلِيبِ.",
        "fr": "Oui, du thé au lait."
      }
    ],
    "writing": {
      "prompt": "Rédige un menu simple pour une journée et joue un dialogue de commande au café.",
      "modelAr": "أَتَنَاوَلُ الْفُطُورَ فِي الصَّبَاحِ. آكُلُ خُبْزًا وَجُبْنًا، وَأَشْرَبُ الشَّايَ. فِي الْمَسَاءِ نَطْبُخُ الْأَرُزَّ وَالْخُضْرَوَاتِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Petit-déjeuner, repas et boissons ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue أَكَلَ et شَرِبَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Rédige un menu simple pour une journée et joue un dialogue de commande au café."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-23-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 23,
    "month": 5,
    "emoji": "🌅",
    "title": "Ma journée en dix actions",
    "minutes": 110,
    "goal": "Raconter une routine quotidienne au présent.",
    "grammar": [
      {
        "title": "Séquence avec ثُمَّ",
        "body": "أَسْتَيْقِظُ، ثُمَّ أَغْسِلُ وَجْهِي. ثُمَّ marque l’étape suivante ; بَعْدَ ذَلِكَ « après cela ». Utilise les connecteurs pour éviter une liste de verbes indépendants."
      },
      {
        "title": "Avant et après",
        "body": "قَبْلَ النَّوْمِ « avant de dormir » ; بَعْدَ الْعَمَلِ « après le travail ». Ces marqueurs peuvent précéder un nom ou un maṣdar ; le nom après eux est au génitif."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَتَى تَسْتَيْقِظُ؟ Lis ensuite la réponse : أَسْتَيْقِظُ فِي السَّابِعَةِ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أَسْتَيْقِظُ فِي السَّابِعَةِ. أَشْرَبُ الْمَاءَ، ثُمَّ أَتَنَاوَلُ الْفُطُورَ. أَذْهَبُ إِلَى الْعَمَلِ. بَعْدَ الْعَمَلِ أَرْجِعُ إِلَى الْبَيْتِ، وَأَقْرَأُ قَبْلَ النَّوْمِ.",
      "fr": "Je me réveille à sept heures. Je bois de l’eau, puis je prends le petit-déjeuner. Je vais au travail. Après le travail, je rentre à la maison et je lis avant de dormir."
    },
    "examples": [
      {
        "ar": "مَتَى تَسْتَيْقِظُ؟",
        "fr": "Quand te réveilles-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "أَسْتَيْقِظُ فِي السَّابِعَةِ.",
        "fr": "Je me réveille à sept heures.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَسْتَيْقِظُ",
              "أَسْتَيْقِظُ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "مَاذَا تَفْعَلُ بَعْدَ الْعَمَلِ؟",
        "fr": "Que fais-tu après le travail ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "الْعَمَلُ",
              "الْعَمَلُ"
            ],
            [
              "بَعْدَ",
              "بَعْدَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أَرْجِعُ إِلَى الْبَيْتِ وَأَقْرَأُ.",
        "fr": "Je rentre à la maison et je lis.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَرْجِعُ",
              "أَرْجِعُ"
            ],
            [
              "رَجَعَ",
              "رَجَعَ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "اِسْتَيْقَظَ",
        "present": "يَسْتَيْقِظُ",
        "masdar": "اِسْتِيقَاظٌ",
        "fr": "se réveiller",
        "lookup": "استيقظ"
      },
      {
        "past": "رَجَعَ",
        "present": "يَرْجِعُ",
        "masdar": "رُجُوعٌ",
        "fr": "revenir",
        "lookup": "رجع"
      }
    ],
    "words": [
      [
        "أَسْتَيْقِظُ",
        "Je me réveille"
      ],
      [
        "أَذْهَبُ",
        "Je vais"
      ],
      [
        "أَرْجِعُ",
        "Je reviens"
      ],
      [
        "أَتَنَاوَلُ",
        "Je prends (un repas)"
      ],
      [
        "فُطُورٌ",
        "Petit-déjeuner"
      ],
      [
        "الْعَمَلُ",
        "Le travail"
      ],
      [
        "قَبْلَ",
        "Avant"
      ],
      [
        "بَعْدَ",
        "Après"
      ],
      [
        "ثُمَّ",
        "Ensuite"
      ],
      [
        "اِسْتِيقَاظٌ",
        "maṣdar : se réveiller"
      ],
      [
        "رَجَعَ",
        "revenir (accompli)"
      ],
      [
        "رُجُوعٌ",
        "maṣdar : revenir"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ],
      [
        "مِنْ فَضْلِكَ",
        "S’il te plaît (à un homme)"
      ]
    ],
    "dialect": [
      {
        "msa": "بَعْدَ الْعَمَلِ أَرْجِعُ.",
        "levant": "بَعْدِ الشُّغْلْ بِرْجَعْ.",
        "fr": "Après le travail, je rentre.",
        "note": "الشُّغْل désigne couramment le travail au Levant."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel connecteur marque la succession « ensuite » ?",
        "options": [
          "ثُمَّ",
          "مِنْ",
          "أَيْنَ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Séquence avec ثُمَّ ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَسْتَيْقِظُ ?",
        "options": [
          "Je me réveille",
          "Je prends (un repas)",
          "Après"
        ],
        "answer": 0,
        "why": "أَسْتَيْقِظُ signifie « Je me réveille ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَذْهَبُ ?",
        "options": [
          "Le travail",
          "maṣdar : se réveiller",
          "Je vais"
        ],
        "answer": 2,
        "why": "أَذْهَبُ signifie « Je vais ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَرْجِعُ ?",
        "options": [
          "maṣdar : revenir",
          "Je reviens",
          "Après"
        ],
        "answer": 1,
        "why": "أَرْجِعُ signifie « Je reviens ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَتَنَاوَلُ ?",
        "options": [
          "Je prends (un repas)",
          "maṣdar : se réveiller",
          "Non"
        ],
        "answer": 0,
        "why": "أَتَنَاوَلُ signifie « Je prends (un repas) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie فُطُورٌ ?",
        "options": [
          "maṣdar : revenir",
          "Je me réveille",
          "Petit-déjeuner"
        ],
        "answer": 2,
        "why": "فُطُورٌ signifie « Petit-déjeuner ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie الْعَمَلُ ?",
        "options": [
          "Je reviens",
          "Le travail",
          "Non"
        ],
        "answer": 1,
        "why": "الْعَمَلُ signifie « Le travail ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِسْتَيْقَظَ ?",
        "options": [
          "اِسْتِيقَاظٌ",
          "رُجُوعٌ",
          "ثُمَّ"
        ],
        "answer": 0,
        "why": "اِسْتَيْقَظَ — يَسْتَيْقِظُ — اِسْتِيقَاظٌ : se réveiller."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de رَجَعَ ?",
        "options": [
          "اِسْتِيقَاظٌ",
          "ثُمَّ",
          "رُجُوعٌ"
        ],
        "answer": 2,
        "why": "رَجَعَ — يَرْجِعُ — رُجُوعٌ : revenir."
      },
      {
        "type": "input",
        "prompt": "Écris « Avant » en arabe (voyelles facultatives).",
        "answer": "قَبْلَ",
        "accepted": [
          "قبل"
        ],
        "why": "قَبْلَ signifie « Avant »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Quand te réveilles-tu ? » ?",
        "options": [
          "مَتَى تَسْتَيْقِظُ؟",
          "مَاذَا تَفْعَلُ بَعْدَ الْعَمَلِ؟",
          "أَرْجِعُ إِلَى الْبَيْتِ وَأَقْرَأُ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَتَى تَسْتَيْقِظُ؟",
        "fr": "Quand te réveilles-tu ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أَسْتَيْقِظُ فِي السَّابِعَةِ.",
        "fr": "Je me réveille à sept heures."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا تَفْعَلُ بَعْدَ الْعَمَلِ؟",
        "fr": "Que fais-tu après le travail ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أَرْجِعُ إِلَى الْبَيْتِ وَأَقْرَأُ.",
        "fr": "Je rentre à la maison et je lis."
      }
    ],
    "writing": {
      "prompt": "Raconte une journée avec dix verbes conjugués, quatre connecteurs et trois horaires.",
      "modelAr": "أَسْتَيْقِظُ فِي السَّابِعَةِ. أَشْرَبُ الْمَاءَ، ثُمَّ أَتَنَاوَلُ الْفُطُورَ. أَذْهَبُ إِلَى الْعَمَلِ. بَعْدَ الْعَمَلِ أَرْجِعُ إِلَى الْبَيْتِ، وَأَقْرَأُ قَبْلَ النَّوْمِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Ma journée en dix actions ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue اِسْتَيْقَظَ et رَجَعَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Raconte une journée avec dix verbes conjugués, quatre connecteurs et trois horaires."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-24-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 24,
    "month": 5,
    "emoji": "🚉",
    "title": "Voyager en bus et en train",
    "minutes": 110,
    "goal": "Acheter un billet et dire sa destination.",
    "grammar": [
      {
        "title": "Aller à et venir de",
        "body": "أَذْهَبُ إِلَى الْمَحَطَّةِ = je vais à la gare ; أَرْجِعُ مِنَ الْمَدِينَةِ = je reviens de la ville. La préposition change le sens du déplacement."
      },
      {
        "title": "Destination et moyen",
        "body": "أُسَافِرُ بِالْقِطَارِ = je voyage en train ; أَذْهَبُ بِالْحَافِلَةِ = je vais en bus. La particule بِـ peut indiquer ici le moyen utilisé."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : أُرِيدُ تَذْكِرَةً إِلَى بَارِيسَ. Lis ensuite la réponse : ذَهَابًا فَقَطْ أَمْ ذَهَابًا وَإِيَابًا؟ Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "فِي الصَّبَاحِ أَذْهَبُ إِلَى الْمَحَطَّةِ. أَشْتَرِي تَذْكِرَةً إِلَى بَارِيسَ. يَنْطَلِقُ الْقِطَارُ فِي السَّاعَةِ التَّاسِعَةِ، وَأَصِلُ مَسَاءً.",
      "fr": "Le matin, je vais à la gare. J’achète un billet pour Paris. Le train part à neuf heures et j’arrive le soir."
    },
    "examples": [
      {
        "ar": "أُرِيدُ تَذْكِرَةً إِلَى بَارِيسَ.",
        "fr": "Je voudrais un billet pour Paris.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "تَذْكِرَةٌ",
              "تَذْكِرَةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "ذَهَابًا فَقَطْ أَمْ ذَهَابًا وَإِيَابًا؟",
        "fr": "Aller simple ou aller-retour ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "ذَهَابٌ",
              "ذَهَابٌ"
            ],
            [
              "إِيَابٌ",
              "إِيَابٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "ذَهَابًا وَإِيَابًا، مِنْ فَضْلِكَ.",
        "fr": "Aller-retour, s’il vous plaît.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "ذَهَابٌ",
              "ذَهَابٌ"
            ],
            [
              "إِيَابٌ",
              "إِيَابٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "الْقِطَارُ فِي السَّاعَةِ التَّاسِعَةِ.",
        "fr": "Le train est à neuf heures.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "قِطَارٌ",
              "قِطَارٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "سَافَرَ",
        "present": "يُسَافِرُ",
        "masdar": "سَفَرٌ",
        "fr": "voyager",
        "lookup": "سافر"
      },
      {
        "past": "اِشْتَرَى",
        "present": "يَشْتَرِي",
        "masdar": "اِشْتِرَاءٌ",
        "fr": "acheter",
        "lookup": "اشترى"
      }
    ],
    "words": [
      [
        "قِطَارٌ",
        "Train"
      ],
      [
        "حَافِلَةٌ",
        "Bus"
      ],
      [
        "تَذْكِرَةٌ",
        "Billet"
      ],
      [
        "مَحَطَّةٌ",
        "Gare"
      ],
      [
        "ذَهَابٌ",
        "Aller"
      ],
      [
        "إِيَابٌ",
        "Retour"
      ],
      [
        "مَوْعِدٌ",
        "Horaire"
      ],
      [
        "مُسَافِرٌ",
        "Voyageur"
      ],
      [
        "وُصُولٌ",
        "Arrivée"
      ],
      [
        "سَافَرَ",
        "voyager (accompli)"
      ],
      [
        "سَفَرٌ",
        "maṣdar : voyager"
      ],
      [
        "اِشْتَرَى",
        "acheter (accompli)"
      ],
      [
        "اِشْتِرَاءٌ",
        "maṣdar : acheter"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ]
    ],
    "dialect": [
      {
        "msa": "بَدِّي تَذْكِرَة.",
        "levant": "بَدِّي تَذْكَرَة.",
        "fr": "Je voudrais un billet.",
        "note": "بَدِّي (« je veux ») remplace couramment أُرِيدُ à l’oral levantin."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle préposition indique la destination dans أَذْهَبُ إِلَى ؟",
        "options": [
          "إِلَى",
          "مِنْ",
          "فِي"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Aller à et venir de ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie قِطَارٌ ?",
        "options": [
          "Train",
          "Gare",
          "Voyageur"
        ],
        "answer": 0,
        "why": "قِطَارٌ signifie « Train ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie حَافِلَةٌ ?",
        "options": [
          "Retour",
          "voyager (accompli)",
          "Bus"
        ],
        "answer": 2,
        "why": "حَافِلَةٌ signifie « Bus ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie تَذْكِرَةٌ ?",
        "options": [
          "acheter (accompli)",
          "Billet",
          "Voyageur"
        ],
        "answer": 1,
        "why": "تَذْكِرَةٌ signifie « Billet ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَحَطَّةٌ ?",
        "options": [
          "Gare",
          "voyager (accompli)",
          "Oui"
        ],
        "answer": 0,
        "why": "مَحَطَّةٌ signifie « Gare ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie ذَهَابٌ ?",
        "options": [
          "acheter (accompli)",
          "Train",
          "Aller"
        ],
        "answer": 2,
        "why": "ذَهَابٌ signifie « Aller ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie إِيَابٌ ?",
        "options": [
          "Billet",
          "Retour",
          "Oui"
        ],
        "answer": 1,
        "why": "إِيَابٌ signifie « Retour ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de سَافَرَ ?",
        "options": [
          "سَفَرٌ",
          "اِشْتِرَاءٌ",
          "وُصُولٌ"
        ],
        "answer": 0,
        "why": "سَافَرَ — يُسَافِرُ — سَفَرٌ : voyager."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِشْتَرَى ?",
        "options": [
          "سَفَرٌ",
          "سَافَرَ",
          "اِشْتِرَاءٌ"
        ],
        "answer": 2,
        "why": "اِشْتَرَى — يَشْتَرِي — اِشْتِرَاءٌ : acheter."
      },
      {
        "type": "input",
        "prompt": "Écris « Horaire » en arabe (voyelles facultatives).",
        "answer": "مَوْعِدٌ",
        "accepted": [
          "موعد"
        ],
        "why": "مَوْعِدٌ signifie « Horaire »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Je voudrais un billet pour Paris. » ?",
        "options": [
          "أُرِيدُ تَذْكِرَةً إِلَى بَارِيسَ.",
          "ذَهَابًا وَإِيَابًا، مِنْ فَضْلِكَ.",
          "الْقِطَارُ فِي السَّاعَةِ التَّاسِعَةِ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "أُرِيدُ تَذْكِرَةً إِلَى بَارِيسَ.",
        "fr": "Je voudrais un billet pour Paris."
      },
      {
        "speaker": "سَامِي",
        "ar": "ذَهَابًا فَقَطْ أَمْ ذَهَابًا وَإِيَابًا؟",
        "fr": "Aller simple ou aller-retour ?"
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "ذَهَابًا وَإِيَابًا، مِنْ فَضْلِكَ.",
        "fr": "Aller-retour, s’il vous plaît."
      },
      {
        "speaker": "سَامِي",
        "ar": "الْقِطَارُ فِي السَّاعَةِ التَّاسِعَةِ.",
        "fr": "Le train est à neuf heures."
      }
    ],
    "writing": {
      "prompt": "Prépare un trajet aller-retour : gare, billet, horaire, ville et moyen de transport.",
      "modelAr": "فِي الصَّبَاحِ أَذْهَبُ إِلَى الْمَحَطَّةِ. أَشْتَرِي تَذْكِرَةً إِلَى بَارِيسَ. يَنْطَلِقُ الْقِطَارُ فِي السَّاعَةِ التَّاسِعَةِ، وَأَصِلُ مَسَاءً.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Voyager en bus et en train ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue سَافَرَ et اِشْتَرَى au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Prépare un trajet aller-retour : gare, billet, horaire, ville et moyen de transport."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a1-25-2026",
    "level": "A1",
    "track": "fondations-a1",
    "number": 25,
    "month": 5,
    "emoji": "🏅",
    "title": "Bilan A1 : conversation guidée",
    "minutes": 110,
    "goal": "Réinvestir les bases A1 dans une situation complète.",
    "grammar": [
      {
        "title": "Structurer un mini-discours",
        "body": "Pour parler sans notes, organise tes phrases : salutation, identité, ville, famille, habitudes, goûts et projet. Les connecteurs وَ, ثُمَّ, لَكِنْ rendent un récit simple plus fluide."
      },
      {
        "title": "Vérifier les accords",
        "body": "Relis les pronoms, le féminin des adjectifs, les démonstratifs, l’article, les prépositions et les présentations. Ne confonds pas الْكِتَابُ جَدِيدٌ (« le livre est neuf ») et الْكِتَابُ الْجَدِيدُ (« le nouveau livre »)."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَرْحَبًا، مَا اسْمُكِ؟ Lis ensuite la réponse : اِسْمِي مَرْيَمُ، وَأَنَا مِنْ سُورِيَا. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "اِسْمِي مَرْيَمُ. أَنَا مِنْ سُورِيَا وَأَسْكُنُ فِي فَرَنْسَا. أَدْرُسُ الْعَرَبِيَّةَ كُلَّ يَوْمٍ. أُحِبُّ الْقِرَاءَةَ وَالطَّبْخَ. يَوْمَ السَّبْتِ أَزُورُ أُسْرَتِي، وَيَوْمَ الْأَحَدِ أَرْتَاحُ.",
      "fr": "Je m’appelle Maryam. Je viens de Syrie et j’habite en France. J’étudie l’arabe chaque jour. J’aime lire et cuisiner. Le samedi, je rends visite à ma famille et le dimanche je me repose."
    },
    "examples": [
      {
        "ar": "مَرْحَبًا، مَا اسْمُكِ؟",
        "fr": "Bonjour, comment t’appelles-tu ? (à une femme)",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "اِسْمِي مَرْيَمُ، وَأَنَا مِنْ سُورِيَا.",
        "fr": "Je m’appelle Maryam, je viens de Syrie.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "مَاذَا تُحِبِّينَ أَنْ تَفْعَلِي؟",
        "fr": "Qu’aimes-tu faire ? (à une femme)",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "أُحِبُّ الْقِرَاءَةَ وَالطَّبْخَ.",
        "fr": "J’aime la lecture et la cuisine.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "تَكَلَّمَ",
        "present": "يَتَكَلَّمُ",
        "masdar": "تَكَلُّمٌ",
        "fr": "parler",
        "lookup": "تكلم"
      },
      {
        "past": "دَرَسَ",
        "present": "يَدْرُسُ",
        "masdar": "دِرَاسَةٌ",
        "fr": "étudier",
        "lookup": "درس"
      }
    ],
    "words": [
      [
        "مُرَاجَعَةٌ",
        "Révision"
      ],
      [
        "مُحَادَثَةٌ",
        "Conversation"
      ],
      [
        "تَعْرِيفٌ",
        "Présentation"
      ],
      [
        "هَوَايَةٌ",
        "Loisir"
      ],
      [
        "أُسْرَةٌ",
        "Famille"
      ],
      [
        "مَوْعِدٌ",
        "Rendez-vous"
      ],
      [
        "سُؤَالٌ",
        "Question"
      ],
      [
        "جَوَابٌ",
        "Réponse"
      ],
      [
        "مُسْتَوًى",
        "Niveau"
      ],
      [
        "تَكَلَّمَ",
        "parler (accompli)"
      ],
      [
        "دَرَسَ",
        "étudier (accompli)"
      ],
      [
        "دِرَاسَةٌ",
        "maṣdar : étudier"
      ],
      [
        "نَعَمْ",
        "Oui"
      ],
      [
        "لَا",
        "Non"
      ],
      [
        "مِنْ فَضْلِكَ",
        "S’il te plaît (à un homme)"
      ]
    ],
    "dialect": [
      {
        "msa": "شُو بِتْحِبّ تِعْمَلْ؟",
        "levant": "شُو بِتْحِبّ تِعْمِلْ؟",
        "fr": "Qu’aimes-tu faire ?",
        "note": "شُو = quoi ; les voyelles du verbe varient selon la variété levantine."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle phrase est une présentation correcte ?",
        "options": [
          "اِسْمِي مَرْيَمُ.",
          "مَا اِسْمُ مَرْيَمُ؟",
          "مِنْ أَيْنَ الْكِتَابُ؟"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Structurer un mini-discours ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُرَاجَعَةٌ ?",
        "options": [
          "Révision",
          "Loisir",
          "Réponse"
        ],
        "answer": 0,
        "why": "مُرَاجَعَةٌ signifie « Révision ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُحَادَثَةٌ ?",
        "options": [
          "Rendez-vous",
          "parler (accompli)",
          "Conversation"
        ],
        "answer": 2,
        "why": "مُحَادَثَةٌ signifie « Conversation ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie تَعْرِيفٌ ?",
        "options": [
          "maṣdar : étudier",
          "Présentation",
          "Réponse"
        ],
        "answer": 1,
        "why": "تَعْرِيفٌ signifie « Présentation ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie هَوَايَةٌ ?",
        "options": [
          "Loisir",
          "parler (accompli)",
          "Non"
        ],
        "answer": 0,
        "why": "هَوَايَةٌ signifie « Loisir ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أُسْرَةٌ ?",
        "options": [
          "maṣdar : étudier",
          "Révision",
          "Famille"
        ],
        "answer": 2,
        "why": "أُسْرَةٌ signifie « Famille ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَوْعِدٌ ?",
        "options": [
          "Présentation",
          "Rendez-vous",
          "Non"
        ],
        "answer": 1,
        "why": "مَوْعِدٌ signifie « Rendez-vous ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَكَلَّمَ ?",
        "options": [
          "تَكَلُّمٌ",
          "دِرَاسَةٌ",
          "مُسْتَوًى"
        ],
        "answer": 0,
        "why": "تَكَلَّمَ — يَتَكَلَّمُ — تَكَلُّمٌ : parler."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de دَرَسَ ?",
        "options": [
          "تَكَلُّمٌ",
          "تَكَلَّمَ",
          "دِرَاسَةٌ"
        ],
        "answer": 2,
        "why": "دَرَسَ — يَدْرُسُ — دِرَاسَةٌ : étudier."
      },
      {
        "type": "input",
        "prompt": "Écris « Question » en arabe (voyelles facultatives).",
        "answer": "سُؤَالٌ",
        "accepted": [
          "سؤال"
        ],
        "why": "سُؤَالٌ signifie « Question »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Bonjour, comment t’appelles-tu ? (à une femme) » ?",
        "options": [
          "مَرْحَبًا، مَا اسْمُكِ؟",
          "مَاذَا تُحِبِّينَ أَنْ تَفْعَلِي؟",
          "أُحِبُّ الْقِرَاءَةَ وَالطَّبْخَ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَرْحَبًا، مَا اسْمُكِ؟",
        "fr": "Bonjour, comment t’appelles-tu ? (à une femme)"
      },
      {
        "speaker": "سَامِي",
        "ar": "اِسْمِي مَرْيَمُ، وَأَنَا مِنْ سُورِيَا.",
        "fr": "Je m’appelle Maryam, je viens de Syrie."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا تُحِبِّينَ أَنْ تَفْعَلِي؟",
        "fr": "Qu’aimes-tu faire ? (à une femme)"
      },
      {
        "speaker": "سَامِي",
        "ar": "أُحِبُّ الْقِرَاءَةَ وَالطَّبْخَ.",
        "fr": "J’aime la lecture et la cuisine."
      }
    ],
    "writing": {
      "prompt": "Prépare un exposé de deux minutes, un dialogue d’accueil, une description d’objet et un dialogue de voyage ; compare tes résultats au programme A1.",
      "modelAr": "اِسْمِي مَرْيَمُ. أَنَا مِنْ سُورِيَا وَأَسْكُنُ فِي فَرَنْسَا. أَدْرُسُ الْعَرَبِيَّةَ كُلَّ يَوْمٍ. أُحِبُّ الْقِرَاءَةَ وَالطَّبْخَ. يَوْمَ السَّبْتِ أَزُورُ أُسْرَتِي، وَيَوْمَ الْأَحَدِ أَرْتَاحُ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Bilan A1 : conversation guidée ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue تَكَلَّمَ et دَرَسَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Prépare un exposé de deux minutes, un dialogue d’accueil, une description d’objet et un dialogue de voyage ; compare tes résultats au programme A1."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-01-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 1,
    "month": 6,
    "emoji": "🕰️",
    "title": "Passé régulier : raconter hier",
    "minutes": 135,
    "goal": "Raconter un événement terminé avec l’accompli et ses suffixes.",
    "grammar": [
      {
        "title": "L’accompli et la personne",
        "body": "كَتَبَ « il a écrit » ; كَتَبَتْ « elle a écrit » ; كَتَبْتُ « j’ai écrit » ; كَتَبْنَا « nous avons écrit ». Le passé repose sur un thème et des suffixes personnels. Attention : la troisième personne féminine est en ـَتْ ; la première personne en ـْتُ."
      },
      {
        "title": "Raconter une succession",
        "body": "أَمْسِ ذَهَبْتُ إِلَى الْمَكْتَبَةِ، ثُمَّ قَرَأْتُ كِتَابًا. Le passé convient pour les actions achevées. ثُمَّ insiste sur leur ordre, tandis que وَ coordonne sans obligatoirement préciser une succession."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَاذَا فَعَلْتَ أَمْسِ؟ Lis ensuite la réponse : ذَهَبْتُ إِلَى الْمَكْتَبَةِ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أَمْسِ اِسْتَيْقَظْتُ مُبَكِّرًا. ذَهَبْتُ إِلَى الْمَدِينَةِ، وَاشْتَرَيْتُ كِتَابًا. بَعْدَ الظُّهْرِ قَرَأْتُ دَرْسًا وَكَتَبْتُ خَمْسَ جُمَلٍ. فِي الْمَسَاءِ رَجَعْتُ إِلَى الْبَيْتِ.",
      "fr": "Hier, je me suis réveillé tôt. Je suis allé en ville et j’ai acheté un livre. L’après-midi, j’ai lu une leçon et écrit cinq phrases. Le soir, je suis rentré à la maison."
    },
    "examples": [
      {
        "ar": "مَاذَا فَعَلْتَ أَمْسِ؟",
        "fr": "Qu’as-tu fait hier ? (m.)",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَمْسِ",
              "أَمْسِ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "ذَهَبْتُ إِلَى الْمَكْتَبَةِ.",
        "fr": "Je suis allé à la bibliothèque.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "ذَهَبْتُ",
              "ذَهَبْتُ"
            ],
            [
              "كَتَبَ",
              "كَتَبَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ قَرَأْتَ كِتَابًا؟",
        "fr": "As-tu lu un livre ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "قَرَأْتُ",
              "قَرَأْتُ"
            ],
            [
              "قَرَأَ",
              "قَرَأَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، قَرَأْتُهُ وَكَتَبْتُ مُلَاحَظَاتٍ.",
        "fr": "Oui, je l’ai lu et j’ai écrit des notes.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "كَتَبْتُ",
              "كَتَبْتُ"
            ],
            [
              "قَرَأْتُ",
              "قَرَأْتُ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "كَتَبَ",
        "present": "يَكْتُبُ",
        "masdar": "كِتَابَةٌ",
        "fr": "écrire",
        "lookup": "كتب"
      },
      {
        "past": "قَرَأَ",
        "present": "يَقْرَأُ",
        "masdar": "قِرَاءَةٌ",
        "fr": "lire",
        "lookup": "قرأ"
      }
    ],
    "words": [
      [
        "أَمْسِ",
        "Hier"
      ],
      [
        "الْمَاضِي",
        "Le passé"
      ],
      [
        "كَتَبْتُ",
        "J’ai écrit"
      ],
      [
        "قَرَأْتُ",
        "J’ai lu"
      ],
      [
        "ذَهَبْتُ",
        "Je suis allé"
      ],
      [
        "اِشْتَرَيْتُ",
        "J’ai acheté"
      ],
      [
        "جُمْلَةٌ",
        "Phrase"
      ],
      [
        "مُلَاحَظَةٌ",
        "Note"
      ],
      [
        "بَعْدَ الظُّهْرِ",
        "L’après-midi"
      ],
      [
        "كَتَبَ",
        "écrire (accompli)"
      ],
      [
        "كِتَابَةٌ",
        "maṣdar : écrire"
      ],
      [
        "قَرَأَ",
        "lire (accompli)"
      ],
      [
        "قِرَاءَةٌ",
        "maṣdar : lire"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ]
    ],
    "dialect": [
      {
        "msa": "أَمْسِ ذَهَبْتُ إِلَى الْعَمَلِ.",
        "levant": "مْبَارِحْ رِحْتْ عَ الشُّغْلْ.",
        "fr": "Hier, je suis allé au travail.",
        "note": "مْبَارِحْ = hier et رِحْتْ = je suis allé, dans plusieurs variantes levantines."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle terminaison exprime « j’ai écrit » ?",
        "options": [
          "كَتَبْتُ",
          "كَتَبَ",
          "كَتَبَتْ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : L’accompli et la personne ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَمْسِ ?",
        "options": [
          "Hier",
          "J’ai lu",
          "Note"
        ],
        "answer": 0,
        "why": "أَمْسِ signifie « Hier ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie الْمَاضِي ?",
        "options": [
          "J’ai acheté",
          "écrire (accompli)",
          "Le passé"
        ],
        "answer": 2,
        "why": "الْمَاضِي signifie « Le passé ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie كَتَبْتُ ?",
        "options": [
          "lire (accompli)",
          "J’ai écrit",
          "Note"
        ],
        "answer": 1,
        "why": "كَتَبْتُ signifie « J’ai écrit ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie قَرَأْتُ ?",
        "options": [
          "J’ai lu",
          "écrire (accompli)",
          "Parce que"
        ],
        "answer": 0,
        "why": "قَرَأْتُ signifie « J’ai lu ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie ذَهَبْتُ ?",
        "options": [
          "lire (accompli)",
          "Hier",
          "Je suis allé"
        ],
        "answer": 2,
        "why": "ذَهَبْتُ signifie « Je suis allé ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie اِشْتَرَيْتُ ?",
        "options": [
          "J’ai écrit",
          "J’ai acheté",
          "Parce que"
        ],
        "answer": 1,
        "why": "اِشْتَرَيْتُ signifie « J’ai acheté ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de كَتَبَ ?",
        "options": [
          "كِتَابَةٌ",
          "قِرَاءَةٌ",
          "بَعْدَ الظُّهْرِ"
        ],
        "answer": 0,
        "why": "كَتَبَ — يَكْتُبُ — كِتَابَةٌ : écrire."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَرَأَ ?",
        "options": [
          "كِتَابَةٌ",
          "كَتَبَ",
          "قِرَاءَةٌ"
        ],
        "answer": 2,
        "why": "قَرَأَ — يَقْرَأُ — قِرَاءَةٌ : lire."
      },
      {
        "type": "input",
        "prompt": "Écris « Phrase » en arabe (voyelles facultatives).",
        "answer": "جُمْلَةٌ",
        "accepted": [
          "جملة"
        ],
        "why": "جُمْلَةٌ signifie « Phrase »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Qu’as-tu fait hier ? (m.) » ?",
        "options": [
          "مَاذَا فَعَلْتَ أَمْسِ؟",
          "هَلْ قَرَأْتَ كِتَابًا؟",
          "نَعَمْ، قَرَأْتُهُ وَكَتَبْتُ مُلَاحَظَاتٍ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا فَعَلْتَ أَمْسِ؟",
        "fr": "Qu’as-tu fait hier ? (m.)"
      },
      {
        "speaker": "سَامِي",
        "ar": "ذَهَبْتُ إِلَى الْمَكْتَبَةِ.",
        "fr": "Je suis allé à la bibliothèque."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ قَرَأْتَ كِتَابًا؟",
        "fr": "As-tu lu un livre ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، قَرَأْتُهُ وَكَتَبْتُ مُلَاحَظَاتٍ.",
        "fr": "Oui, je l’ai lu et j’ai écrit des notes."
      }
    ],
    "writing": {
      "prompt": "Écris douze phrases sur hier en conjuguant au moins six verbes différents au passé.",
      "modelAr": "أَمْسِ اِسْتَيْقَظْتُ مُبَكِّرًا. ذَهَبْتُ إِلَى الْمَدِينَةِ، وَاشْتَرَيْتُ كِتَابًا. بَعْدَ الظُّهْرِ قَرَأْتُ دَرْسًا وَكَتَبْتُ خَمْسَ جُمَلٍ. فِي الْمَسَاءِ رَجَعْتُ إِلَى الْبَيْتِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Passé régulier : raconter hier ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue كَتَبَ et قَرَأَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Écris douze phrases sur hier en conjuguant au moins six verbes différents au passé."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-02-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 2,
    "month": 6,
    "emoji": "🚫",
    "title": "Nier le passé : مَا et لَمْ",
    "minutes": 135,
    "goal": "Comparer deux négations du passé sans mélanger leurs modes.",
    "grammar": [
      {
        "title": "مَا + accompli",
        "body": "مَا سَافَرْتُ أَمْسِ = je n’ai pas voyagé hier. مَا peut nier directement le verbe au passé. Cette tournure est particulièrement transparente pour la narration."
      },
      {
        "title": "لَمْ + jussif",
        "body": "لَمْ أَذْهَبْ = je ne suis pas allé. Bien qu’il décrive le passé, لَمْ régit l’inaccompli au jussif, avec sukūn final pour un verbe régulier. Compare أَذْهَبُ (indicatif) et لَمْ أَذْهَبْ (jussif)."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : هَلْ خَرَجْتَ أَمْسِ؟ Lis ensuite la réponse : لَا، لَمْ أَخْرُجْ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "كَانَ الطَّقْسُ سَيِّئًا أَمْسِ. لَمْ أَخْرُجْ مِنَ الْبَيْتِ، وَلَمْ أَزُرْ أَصْدِقَائِي. مَا شَاهَدْتُ التِّلْفَازَ، بَلْ قَرَأْتُ كِتَابًا وَكَتَبْتُ رِسَالَةً.",
      "fr": "Il faisait mauvais hier. Je ne suis pas sorti de chez moi et je n’ai pas rendu visite à mes amis. Je n’ai pas regardé la télévision ; j’ai plutôt lu un livre et écrit une lettre."
    },
    "examples": [
      {
        "ar": "هَلْ خَرَجْتَ أَمْسِ؟",
        "fr": "Es-tu sorti hier ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَمْسِ",
              "أَمْسِ"
            ],
            [
              "خَرَجَ",
              "خَرَجَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَا، لَمْ أَخْرُجْ.",
        "fr": "Non, je ne suis pas sorti.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "لَمْ",
              "لَمْ"
            ],
            [
              "خَرَجَ",
              "خَرَجَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ شَاهَدْتَ الْفِيلْمَ؟",
        "fr": "As-tu regardé le film ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "لَمْ",
              "لَمْ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَا، مَا شَاهَدْتُهُ.",
        "fr": "Non, je ne l’ai pas regardé.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مَا",
              "مَا"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "خَرَجَ",
        "present": "يَخْرُجُ",
        "masdar": "خُرُوجٌ",
        "fr": "sortir",
        "lookup": "خرج"
      },
      {
        "past": "زَارَ",
        "present": "يَزُورُ",
        "masdar": "زِيَارَةٌ",
        "fr": "visiter",
        "lookup": "زار"
      }
    ],
    "words": [
      [
        "لَمْ",
        "Négation du passé + jussif"
      ],
      [
        "مَا",
        "Négation"
      ],
      [
        "أَمْسِ",
        "Hier"
      ],
      [
        "سَيِّئٌ",
        "Mauvais"
      ],
      [
        "طَقْسٌ",
        "Temps (météo)"
      ],
      [
        "رِسَالَةٌ",
        "Lettre/message"
      ],
      [
        "تِلْفَازٌ",
        "Télévision"
      ],
      [
        "بَلْ",
        "Mais plutôt"
      ],
      [
        "جُزْءٌ",
        "Partie"
      ],
      [
        "خَرَجَ",
        "sortir (accompli)"
      ],
      [
        "خُرُوجٌ",
        "maṣdar : sortir"
      ],
      [
        "زَارَ",
        "visiter (accompli)"
      ],
      [
        "زِيَارَةٌ",
        "maṣdar : visiter"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ]
    ],
    "dialect": [
      {
        "msa": "مَا خَرَجْتُ أَمْسِ.",
        "levant": "مَا طْلِعْتْ مْبَارِحْ.",
        "fr": "Je ne suis pas sorti hier.",
        "note": "La négation مَا est fréquente en levantin ; le verbe parlé est différent."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle forme est correcte avec لَمْ ?",
        "options": [
          "لَمْ أَكْتُبْ",
          "لَمْ أَكْتُبُ",
          "لَمْ كَتَبْتُ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : مَا + accompli ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie لَمْ ?",
        "options": [
          "Négation du passé + jussif",
          "Mauvais",
          "Mais plutôt"
        ],
        "answer": 0,
        "why": "لَمْ signifie « Négation du passé + jussif ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَا ?",
        "options": [
          "Lettre/message",
          "sortir (accompli)",
          "Négation"
        ],
        "answer": 2,
        "why": "مَا signifie « Négation ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَمْسِ ?",
        "options": [
          "visiter (accompli)",
          "Hier",
          "Mais plutôt"
        ],
        "answer": 1,
        "why": "أَمْسِ signifie « Hier ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie سَيِّئٌ ?",
        "options": [
          "Mauvais",
          "sortir (accompli)",
          "Parce que"
        ],
        "answer": 0,
        "why": "سَيِّئٌ signifie « Mauvais ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie طَقْسٌ ?",
        "options": [
          "visiter (accompli)",
          "Négation du passé + jussif",
          "Temps (météo)"
        ],
        "answer": 2,
        "why": "طَقْسٌ signifie « Temps (météo) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie رِسَالَةٌ ?",
        "options": [
          "Hier",
          "Lettre/message",
          "Parce que"
        ],
        "answer": 1,
        "why": "رِسَالَةٌ signifie « Lettre/message ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de خَرَجَ ?",
        "options": [
          "خُرُوجٌ",
          "زِيَارَةٌ",
          "جُزْءٌ"
        ],
        "answer": 0,
        "why": "خَرَجَ — يَخْرُجُ — خُرُوجٌ : sortir."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de زَارَ ?",
        "options": [
          "خُرُوجٌ",
          "خَرَجَ",
          "زِيَارَةٌ"
        ],
        "answer": 2,
        "why": "زَارَ — يَزُورُ — زِيَارَةٌ : visiter."
      },
      {
        "type": "input",
        "prompt": "Écris « Télévision » en arabe (voyelles facultatives).",
        "answer": "تِلْفَازٌ",
        "accepted": [
          "تلفاز"
        ],
        "why": "تِلْفَازٌ signifie « Télévision »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Es-tu sorti hier ? » ?",
        "options": [
          "هَلْ خَرَجْتَ أَمْسِ؟",
          "هَلْ شَاهَدْتَ الْفِيلْمَ؟",
          "لَا، مَا شَاهَدْتُهُ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ خَرَجْتَ أَمْسِ؟",
        "fr": "Es-tu sorti hier ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "لَا، لَمْ أَخْرُجْ.",
        "fr": "Non, je ne suis pas sorti."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ شَاهَدْتَ الْفِيلْمَ؟",
        "fr": "As-tu regardé le film ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "لَا، مَا شَاهَدْتُهُ.",
        "fr": "Non, je ne l’ai pas regardé."
      }
    ],
    "writing": {
      "prompt": "Transforme huit phrases positives du passé en deux négations différentes, avec مَا puis لَمْ.",
      "modelAr": "كَانَ الطَّقْسُ سَيِّئًا أَمْسِ. لَمْ أَخْرُجْ مِنَ الْبَيْتِ، وَلَمْ أَزُرْ أَصْدِقَائِي. مَا شَاهَدْتُ التِّلْفَازَ، بَلْ قَرَأْتُ كِتَابًا وَكَتَبْتُ رِسَالَةً.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Nier le passé : مَا et لَمْ ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue خَرَجَ et زَارَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Transforme huit phrases positives du passé en deux négations différentes, avec مَا puis لَمْ."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-03-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 3,
    "month": 6,
    "emoji": "📆",
    "title": "Futur avec سَـ et سَوْفَ",
    "minutes": 135,
    "goal": "Faire des projets et des prévisions simples.",
    "grammar": [
      {
        "title": "Le futur proche et neutre",
        "body": "سَأَذْهَبُ = j’irai ; سَوْفَ أَذْهَبُ = j’irai. Dans la langue moderne, les deux peuvent désigner un futur ; la différence temporelle précise dépend du contexte et du registre. Le préfixe سَـ se colle à l’inaccompli."
      },
      {
        "title": "Futur + marqueur temporel",
        "body": "غَدًا سَأَدْرُسُ = demain j’étudierai ; فِي الأُسْبُوعِ الْقَادِمِ سَأُسَافِرُ = la semaine prochaine, je voyagerai. Le marqueur temporel évite les ambiguïtés : le futur seul ne dit pas à quel moment."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَاذَا سَتَفْعَلُ غَدًا؟ Lis ensuite la réponse : سَأَذْهَبُ إِلَى الْمَكْتَبَةِ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "غَدًا سَأَذْهَبُ إِلَى الْمَكْتَبَةِ. سَأَخْتَارُ كِتَابًا جَدِيدًا، ثُمَّ سَأَدْرُسُ لِسَاعَتَيْنِ. فِي نِهَايَةِ الْأُسْبُوعِ سَوْفَ أَزُورُ صَدِيقِي.",
      "fr": "Demain, j’irai à la bibliothèque. Je choisirai un nouveau livre, puis j’étudierai deux heures. À la fin de la semaine, je rendrai visite à mon ami."
    },
    "examples": [
      {
        "ar": "مَاذَا سَتَفْعَلُ غَدًا؟",
        "fr": "Que feras-tu demain ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "غَدًا",
              "غَدًا"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "سَأَذْهَبُ إِلَى الْمَكْتَبَةِ.",
        "fr": "J’irai à la bibliothèque.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "سَأَذْهَبُ",
              "سَأَذْهَبُ"
            ],
            [
              "ذَهَبَ",
              "ذَهَبَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَمَتَى سَتَزُورُ صَدِيقَكَ؟",
        "fr": "Et quand rendras-tu visite à ton ami ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "سَوْفَ أَزُورُهُ يَوْمَ السَّبْتِ.",
        "fr": "Je lui rendrai visite samedi.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "سَوْفَ",
              "سَوْفَ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "ذَهَبَ",
        "present": "يَذْهَبُ",
        "masdar": "ذَهَابٌ",
        "fr": "aller",
        "lookup": "ذهب"
      },
      {
        "past": "اِخْتَارَ",
        "present": "يَخْتَارُ",
        "masdar": "اِخْتِيَارٌ",
        "fr": "choisir",
        "lookup": "اختار"
      }
    ],
    "words": [
      [
        "غَدًا",
        "Demain"
      ],
      [
        "سَوْفَ",
        "Marqueur de futur"
      ],
      [
        "سَأَذْهَبُ",
        "J’irai"
      ],
      [
        "الْأُسْبُوعُ الْقَادِمُ",
        "Semaine prochaine"
      ],
      [
        "خُطَّةٌ",
        "Projet/plan"
      ],
      [
        "نِهَايَةٌ",
        "Fin"
      ],
      [
        "لَاحِقًا",
        "Plus tard"
      ],
      [
        "سَفَرٌ",
        "Voyage"
      ],
      [
        "تَقْرِيبًا",
        "Environ"
      ],
      [
        "ذَهَبَ",
        "aller (accompli)"
      ],
      [
        "ذَهَابٌ",
        "maṣdar : aller"
      ],
      [
        "اِخْتَارَ",
        "choisir (accompli)"
      ],
      [
        "اِخْتِيَارٌ",
        "maṣdar : choisir"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ]
    ],
    "dialect": [
      {
        "msa": "غَدًا سَأُسَافِرُ.",
        "levant": "بُكْرَا رَحْ سَافِرْ.",
        "fr": "Demain, je voyagerai.",
        "note": "رَحْ marque fréquemment le futur en levantin ; la conjugaison est dialectale."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel préfixe marque le futur ?",
        "options": [
          "سَـ",
          "لَمْ",
          "لَا"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Le futur proche et neutre ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie غَدًا ?",
        "options": [
          "Demain",
          "Semaine prochaine",
          "Voyage"
        ],
        "answer": 0,
        "why": "غَدًا signifie « Demain ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie سَوْفَ ?",
        "options": [
          "Fin",
          "aller (accompli)",
          "Marqueur de futur"
        ],
        "answer": 2,
        "why": "سَوْفَ signifie « Marqueur de futur ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie سَأَذْهَبُ ?",
        "options": [
          "choisir (accompli)",
          "J’irai",
          "Voyage"
        ],
        "answer": 1,
        "why": "سَأَذْهَبُ signifie « J’irai ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie الْأُسْبُوعُ الْقَادِمُ ?",
        "options": [
          "Semaine prochaine",
          "aller (accompli)",
          "Parce que"
        ],
        "answer": 0,
        "why": "الْأُسْبُوعُ الْقَادِمُ signifie « Semaine prochaine ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie خُطَّةٌ ?",
        "options": [
          "choisir (accompli)",
          "Demain",
          "Projet/plan"
        ],
        "answer": 2,
        "why": "خُطَّةٌ signifie « Projet/plan ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie نِهَايَةٌ ?",
        "options": [
          "J’irai",
          "Fin",
          "Parce que"
        ],
        "answer": 1,
        "why": "نِهَايَةٌ signifie « Fin ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de ذَهَبَ ?",
        "options": [
          "ذَهَابٌ",
          "اِخْتِيَارٌ",
          "تَقْرِيبًا"
        ],
        "answer": 0,
        "why": "ذَهَبَ — يَذْهَبُ — ذَهَابٌ : aller."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِخْتَارَ ?",
        "options": [
          "ذَهَابٌ",
          "ذَهَبَ",
          "اِخْتِيَارٌ"
        ],
        "answer": 2,
        "why": "اِخْتَارَ — يَخْتَارُ — اِخْتِيَارٌ : choisir."
      },
      {
        "type": "input",
        "prompt": "Écris « Plus tard » en arabe (voyelles facultatives).",
        "answer": "لَاحِقًا",
        "accepted": [
          "لاحقا"
        ],
        "why": "لَاحِقًا signifie « Plus tard »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Que feras-tu demain ? » ?",
        "options": [
          "مَاذَا سَتَفْعَلُ غَدًا؟",
          "وَمَتَى سَتَزُورُ صَدِيقَكَ؟",
          "سَوْفَ أَزُورُهُ يَوْمَ السَّبْتِ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا سَتَفْعَلُ غَدًا؟",
        "fr": "Que feras-tu demain ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "سَأَذْهَبُ إِلَى الْمَكْتَبَةِ.",
        "fr": "J’irai à la bibliothèque."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "وَمَتَى سَتَزُورُ صَدِيقَكَ؟",
        "fr": "Et quand rendras-tu visite à ton ami ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "سَوْفَ أَزُورُهُ يَوْمَ السَّبْتِ.",
        "fr": "Je lui rendrai visite samedi."
      }
    ],
    "writing": {
      "prompt": "Rédige ton programme de la semaine prochaine avec dix verbes au futur et des dates.",
      "modelAr": "غَدًا سَأَذْهَبُ إِلَى الْمَكْتَبَةِ. سَأَخْتَارُ كِتَابًا جَدِيدًا، ثُمَّ سَأَدْرُسُ لِسَاعَتَيْنِ. فِي نِهَايَةِ الْأُسْبُوعِ سَوْفَ أَزُورُ صَدِيقِي.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Futur avec سَـ et سَوْفَ ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue ذَهَبَ et اِخْتَارَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Rédige ton programme de la semaine prochaine avec dix verbes au futur et des dates."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-04-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 4,
    "month": 6,
    "emoji": "🎯",
    "title": "Deux verbes : أُرِيدُ أَنْ et أُحِبُّ",
    "minutes": 135,
    "goal": "Exprimer un souhait avec une proposition verbale.",
    "grammar": [
      {
        "title": "أَنْ + subjonctif",
        "body": "أُرِيدُ أَنْ أَتَعَلَّمَ = je veux apprendre. أَنْ place l’inaccompli suivant au subjonctif : أَتَعَلَّمُ → أَتَعَلَّمَ. Les verbes faibles et les cinq formes ont des désinences particulières."
      },
      {
        "title": "Le maṣdar comme alternative",
        "body": "أُحِبُّ قِرَاءَةَ الْكُتُبِ = j’aime lire des livres. Le maṣdar peut traduire « faire quelque chose ». À l’inverse, أُحِبُّ أَنْ أَقْرَأَ est possible, mais la nuance et l’usage dépendent du contexte."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَاذَا تُرِيدُ أَنْ تَتَعَلَّمَ؟ Lis ensuite la réponse : أُرِيدُ أَنْ أَتَعَلَّمَ الْعَرَبِيَّةَ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أُرِيدُ أَنْ أَتَعَلَّمَ الْعَرَبِيَّةَ جَيِّدًا. أُحِبُّ قِرَاءَةَ النُّصُوصِ وَسَمَاعَ الْحِوَارَاتِ. أَتَمَنَّى أَنْ أَتَكَلَّمَ بِطَلَاقَةٍ بَعْدَ سَنَةٍ مِنَ الدِّرَاسَةِ.",
      "fr": "Je veux bien apprendre l’arabe. J’aime lire des textes et écouter des dialogues. J’espère parler couramment après un an d’étude."
    },
    "examples": [
      {
        "ar": "مَاذَا تُرِيدُ أَنْ تَتَعَلَّمَ؟",
        "fr": "Que veux-tu apprendre ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَنْ",
              "أَنْ"
            ],
            [
              "تَعَلَّمَ",
              "تَعَلَّمَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أُرِيدُ أَنْ أَتَعَلَّمَ الْعَرَبِيَّةَ.",
        "fr": "Je veux apprendre l’arabe.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَنْ",
              "أَنْ"
            ],
            [
              "أُرِيدُ",
              "أُرِيدُ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَمَاذَا تُحِبُّ؟",
        "fr": "Et qu’aimes-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "أُحِبُّ قِرَاءَةَ الْكُتُبِ وَسَمَاعَ الْأَخْبَارِ.",
        "fr": "J’aime lire des livres et écouter les informations.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "قِرَاءَةٌ",
              "قِرَاءَةٌ"
            ],
            [
              "سَمَاعٌ",
              "سَمَاعٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "أَرَادَ",
        "present": "يُرِيدُ",
        "masdar": "إِرَادَةٌ",
        "fr": "vouloir",
        "lookup": "أراد"
      },
      {
        "past": "تَعَلَّمَ",
        "present": "يَتَعَلَّمُ",
        "masdar": "تَعَلُّمٌ",
        "fr": "apprendre",
        "lookup": "تعلم"
      }
    ],
    "words": [
      [
        "أَنْ",
        "Particule + subjonctif"
      ],
      [
        "أُرِيدُ",
        "Je veux"
      ],
      [
        "أَتَمَنَّى",
        "J’espère"
      ],
      [
        "قِرَاءَةٌ",
        "Lecture"
      ],
      [
        "سَمَاعٌ",
        "Écoute"
      ],
      [
        "طَلَاقَةٌ",
        "Aisance orale"
      ],
      [
        "حِوَارٌ",
        "Dialogue"
      ],
      [
        "سَنَةٌ",
        "Année"
      ],
      [
        "نَصٌّ",
        "Texte"
      ],
      [
        "أَرَادَ",
        "vouloir (accompli)"
      ],
      [
        "إِرَادَةٌ",
        "maṣdar : vouloir"
      ],
      [
        "تَعَلَّمَ",
        "apprendre (accompli)"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ],
      [
        "بَعْدَ",
        "Après"
      ]
    ],
    "dialect": [
      {
        "msa": "أُرِيدُ أَنْ أَتَعَلَّمَ.",
        "levant": "بَدِّي إِتْعَلَّمْ.",
        "fr": "Je veux apprendre.",
        "note": "بَدِّي suivi d’un verbe est plus spontané en dialecte levantin."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle forme suit أَنْ dans أُرِيدُ أَنْ أَكْتُبَ ?",
        "options": [
          "Subjonctif",
          "Indicatif inchangé",
          "Passé accompli"
        ],
        "answer": 0,
        "why": "Règle du chapitre : أَنْ + subjonctif ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَنْ ?",
        "options": [
          "Particule + subjonctif",
          "Lecture",
          "Année"
        ],
        "answer": 0,
        "why": "أَنْ signifie « Particule + subjonctif ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أُرِيدُ ?",
        "options": [
          "Aisance orale",
          "vouloir (accompli)",
          "Je veux"
        ],
        "answer": 2,
        "why": "أُرِيدُ signifie « Je veux ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَتَمَنَّى ?",
        "options": [
          "apprendre (accompli)",
          "J’espère",
          "Année"
        ],
        "answer": 1,
        "why": "أَتَمَنَّى signifie « J’espère ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie قِرَاءَةٌ ?",
        "options": [
          "Lecture",
          "vouloir (accompli)",
          "Mais"
        ],
        "answer": 0,
        "why": "قِرَاءَةٌ signifie « Lecture ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie سَمَاعٌ ?",
        "options": [
          "apprendre (accompli)",
          "Particule + subjonctif",
          "Écoute"
        ],
        "answer": 2,
        "why": "سَمَاعٌ signifie « Écoute ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie طَلَاقَةٌ ?",
        "options": [
          "J’espère",
          "Aisance orale",
          "Mais"
        ],
        "answer": 1,
        "why": "طَلَاقَةٌ signifie « Aisance orale ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَرَادَ ?",
        "options": [
          "إِرَادَةٌ",
          "تَعَلُّمٌ",
          "نَصٌّ"
        ],
        "answer": 0,
        "why": "أَرَادَ — يُرِيدُ — إِرَادَةٌ : vouloir."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَعَلَّمَ ?",
        "options": [
          "إِرَادَةٌ",
          "أَرَادَ",
          "تَعَلُّمٌ"
        ],
        "answer": 2,
        "why": "تَعَلَّمَ — يَتَعَلَّمُ — تَعَلُّمٌ : apprendre."
      },
      {
        "type": "input",
        "prompt": "Écris « Dialogue » en arabe (voyelles facultatives).",
        "answer": "حِوَارٌ",
        "accepted": [
          "حوار"
        ],
        "why": "حِوَارٌ signifie « Dialogue »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Que veux-tu apprendre ? » ?",
        "options": [
          "مَاذَا تُرِيدُ أَنْ تَتَعَلَّمَ؟",
          "وَمَاذَا تُحِبُّ؟",
          "أُحِبُّ قِرَاءَةَ الْكُتُبِ وَسَمَاعَ الْأَخْبَارِ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا تُرِيدُ أَنْ تَتَعَلَّمَ؟",
        "fr": "Que veux-tu apprendre ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أُرِيدُ أَنْ أَتَعَلَّمَ الْعَرَبِيَّةَ.",
        "fr": "Je veux apprendre l’arabe."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "وَمَاذَا تُحِبُّ؟",
        "fr": "Et qu’aimes-tu ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أُحِبُّ قِرَاءَةَ الْكُتُبِ وَسَمَاعَ الْأَخْبَارِ.",
        "fr": "J’aime lire des livres et écouter les informations."
      }
    ],
    "writing": {
      "prompt": "Rédige douze souhaits ou loisirs : six avec أَنْ + subjonctif et six avec un maṣdar.",
      "modelAr": "أُرِيدُ أَنْ أَتَعَلَّمَ الْعَرَبِيَّةَ جَيِّدًا. أُحِبُّ قِرَاءَةَ النُّصُوصِ وَسَمَاعَ الْحِوَارَاتِ. أَتَمَنَّى أَنْ أَتَكَلَّمَ بِطَلَاقَةٍ بَعْدَ سَنَةٍ مِنَ الدِّرَاسَةِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Deux verbes : أُرِيدُ أَنْ et أُحِبُّ ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue أَرَادَ et تَعَلَّمَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Rédige douze souhaits ou loisirs : six avec أَنْ + subjonctif et six avec un maṣdar."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-05-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 5,
    "month": 6,
    "emoji": "🧭",
    "title": "Exprimer un but : لِـ et لِكَيْ",
    "minutes": 135,
    "goal": "Expliquer pourquoi on agit et distinguer le but de la cause.",
    "grammar": [
      {
        "title": "Lām du but",
        "body": "أَدْرُسُ لِأَفْهَمَ = j’étudie pour comprendre. La particule لِـ peut introduire une finalité avec un verbe au subjonctif, selon la construction (أَنْ sous-entendu dans l’analyse traditionnelle)."
      },
      {
        "title": "لِكَيْ et le maṣdar",
        "body": "أَدْرُسُ لِكَيْ أَنْجَحَ = j’étudie afin de réussir. Pour un objectif exprimé par un nom : لِلدِّرَاسَةِ « pour les études ». Ne confonds pas لِأَنَّ (« parce que ») et لِكَيْ (« afin que »)."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : لِمَاذَا تَدْرُسُ الْعَرَبِيَّةَ؟ Lis ensuite la réponse : أَدْرُسُهَا لِأَتَكَلَّمَ مَعَ أَصْدِقَائِي. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أَذْهَبُ إِلَى الْمَكْتَبَةِ لِأَقْرَأَ كِتَابًا. أُرَاجِعُ الْقَوَاعِدَ لِكَيْ أَكْتُبَ بِدِقَّةٍ. أَسْأَلُ الْمُدَرِّسَ عَنْ أَخْطَائِي لِأَتَعَلَّمَ مِنْهَا.",
      "fr": "Je vais à la bibliothèque pour lire un livre. Je révise la grammaire pour écrire avec précision. Je demande au professeur quelles sont mes erreurs pour en tirer des leçons."
    },
    "examples": [
      {
        "ar": "لِمَاذَا تَدْرُسُ الْعَرَبِيَّةَ؟",
        "fr": "Pourquoi étudies-tu l’arabe ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "دَرَسَ",
              "دَرَسَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أَدْرُسُهَا لِأَتَكَلَّمَ مَعَ أَصْدِقَائِي.",
        "fr": "Je l’étudie pour parler avec mes amis.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "دَرَسَ",
              "دَرَسَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَلِمَاذَا تَقْرَأُ كَثِيرًا؟",
        "fr": "Et pourquoi lis-tu beaucoup ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "أَقْرَأُ لِكَيْ أَفْهَمَ النُّصُوصَ.",
        "fr": "Je lis pour comprendre les textes.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "لِكَيْ",
              "لِكَيْ"
            ],
            [
              "فَهِمَ",
              "فَهِمَ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "دَرَسَ",
        "present": "يَدْرُسُ",
        "masdar": "دِرَاسَةٌ",
        "fr": "étudier",
        "lookup": "درس"
      },
      {
        "past": "فَهِمَ",
        "present": "يَفْهَمُ",
        "masdar": "فَهْمٌ",
        "fr": "comprendre",
        "lookup": "فهم"
      }
    ],
    "words": [
      [
        "غَايَةٌ",
        "But"
      ],
      [
        "سَبَبٌ",
        "Cause"
      ],
      [
        "لِكَيْ",
        "Afin que"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "دِقَّةٌ",
        "Précision"
      ],
      [
        "خَطَأٌ",
        "Erreur"
      ],
      [
        "قَاعِدَةٌ",
        "Règle"
      ],
      [
        "مُرَاجَعَةٌ",
        "Révision"
      ],
      [
        "نَجَاحٌ",
        "Réussite"
      ],
      [
        "دَرَسَ",
        "étudier (accompli)"
      ],
      [
        "دِرَاسَةٌ",
        "maṣdar : étudier"
      ],
      [
        "فَهِمَ",
        "comprendre (accompli)"
      ],
      [
        "لَكِنْ",
        "Mais"
      ],
      [
        "بَعْدَ",
        "Après"
      ],
      [
        "قَبْلَ",
        "Avant"
      ]
    ],
    "dialect": [
      {
        "msa": "أَدْرُسُ لِأَفْهَمَ.",
        "levant": "بِدْرُسْ مْشَانْ إِفْهَمْ.",
        "fr": "J’étudie pour comprendre.",
        "note": "مْشَانْ est un marqueur de finalité très courant en syrien et au Levant."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle expression signifie « afin que » ?",
        "options": [
          "لِكَيْ",
          "لِأَنَّ",
          "بَعْدَ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Lām du but ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie غَايَةٌ ?",
        "options": [
          "But",
          "Parce que",
          "Révision"
        ],
        "answer": 0,
        "why": "غَايَةٌ signifie « But ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie سَبَبٌ ?",
        "options": [
          "Erreur",
          "étudier (accompli)",
          "Cause"
        ],
        "answer": 2,
        "why": "سَبَبٌ signifie « Cause ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie لِكَيْ ?",
        "options": [
          "comprendre (accompli)",
          "Afin que",
          "Révision"
        ],
        "answer": 1,
        "why": "لِكَيْ signifie « Afin que ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie لِأَنَّ ?",
        "options": [
          "Parce que",
          "étudier (accompli)",
          "Après"
        ],
        "answer": 0,
        "why": "لِأَنَّ signifie « Parce que ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie دِقَّةٌ ?",
        "options": [
          "comprendre (accompli)",
          "But",
          "Précision"
        ],
        "answer": 2,
        "why": "دِقَّةٌ signifie « Précision ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie خَطَأٌ ?",
        "options": [
          "Afin que",
          "Erreur",
          "Après"
        ],
        "answer": 1,
        "why": "خَطَأٌ signifie « Erreur ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de دَرَسَ ?",
        "options": [
          "دِرَاسَةٌ",
          "فَهْمٌ",
          "نَجَاحٌ"
        ],
        "answer": 0,
        "why": "دَرَسَ — يَدْرُسُ — دِرَاسَةٌ : étudier."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de فَهِمَ ?",
        "options": [
          "دِرَاسَةٌ",
          "دَرَسَ",
          "فَهْمٌ"
        ],
        "answer": 2,
        "why": "فَهِمَ — يَفْهَمُ — فَهْمٌ : comprendre."
      },
      {
        "type": "input",
        "prompt": "Écris « Règle » en arabe (voyelles facultatives).",
        "answer": "قَاعِدَةٌ",
        "accepted": [
          "قاعدة"
        ],
        "why": "قَاعِدَةٌ signifie « Règle »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Pourquoi étudies-tu l’arabe ? » ?",
        "options": [
          "لِمَاذَا تَدْرُسُ الْعَرَبِيَّةَ؟",
          "وَلِمَاذَا تَقْرَأُ كَثِيرًا؟",
          "أَقْرَأُ لِكَيْ أَفْهَمَ النُّصُوصَ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "لِمَاذَا تَدْرُسُ الْعَرَبِيَّةَ؟",
        "fr": "Pourquoi étudies-tu l’arabe ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أَدْرُسُهَا لِأَتَكَلَّمَ مَعَ أَصْدِقَائِي.",
        "fr": "Je l’étudie pour parler avec mes amis."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "وَلِمَاذَا تَقْرَأُ كَثِيرًا؟",
        "fr": "Et pourquoi lis-tu beaucoup ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أَقْرَأُ لِكَيْ أَفْهَمَ النُّصُوصَ.",
        "fr": "Je lis pour comprendre les textes."
      }
    ],
    "writing": {
      "prompt": "Explique cinq objectifs personnels, en alternant لِـ, لِكَيْ et un groupe nominal de but.",
      "modelAr": "أَذْهَبُ إِلَى الْمَكْتَبَةِ لِأَقْرَأَ كِتَابًا. أُرَاجِعُ الْقَوَاعِدَ لِكَيْ أَكْتُبَ بِدِقَّةٍ. أَسْأَلُ الْمُدَرِّسَ عَنْ أَخْطَائِي لِأَتَعَلَّمَ مِنْهَا.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Exprimer un but : لِـ et لِكَيْ ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue دَرَسَ et فَهِمَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Explique cinq objectifs personnels, en alternant لِـ, لِكَيْ et un groupe nominal de but."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-06-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 6,
    "month": 7,
    "emoji": "🔁",
    "title": "كَانَ au passé : être, avoir l’habitude",
    "minutes": 135,
    "goal": "Situer des descriptions et habitudes dans le passé.",
    "grammar": [
      {
        "title": "كَانَ + attribut",
        "body": "كَانَ الْبَيْتُ صَغِيرًا « la maison était petite » : le nom de كَانَ est au nominatif, l’attribut à l’accusatif. Compare الْبَيْتُ صَغِيرٌ au présent."
      },
      {
        "title": "كَانَ + inaccompli",
        "body": "كُنْتُ أَقْرَأُ كُلَّ يَوْمٍ « je lisais chaque jour » : كَانَ au passé avec l’inaccompli décrit une habitude ou un procès en cours dans le passé. Pour un événement ponctuel, l’accompli peut être plus direct."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : أَيْنَ كُنْتَ تَسْكُنُ؟ Lis ensuite la réponse : كُنْتُ أَسْكُنُ قُرْبَ الْمَدْرَسَةِ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "عِنْدَمَا كُنْتُ صَغِيرًا، كَانَ بَيْتُنَا قَرِيبًا مِنَ الْمَدْرَسَةِ. كُنْتُ أَذْهَبُ إِلَيْهَا مَشْيًا كُلَّ صَبَاحٍ، وَكُنْتُ أَلْعَبُ مَعَ أَصْدِقَائِي بَعْدَ الدَّرْسِ.",
      "fr": "Quand j’étais petit, notre maison était proche de l’école. J’y allais à pied chaque matin et je jouais avec mes amis après le cours."
    },
    "examples": [
      {
        "ar": "أَيْنَ كُنْتَ تَسْكُنُ؟",
        "fr": "Où habitais-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "كُنْتُ",
              "كُنْتُ"
            ],
            [
              "سَكَنَ",
              "سَكَنَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "كُنْتُ أَسْكُنُ قُرْبَ الْمَدْرَسَةِ.",
        "fr": "J’habitais près de l’école.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "كُنْتُ",
              "كُنْتُ"
            ],
            [
              "قُرْبَ",
              "قُرْبَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ كَانَ الْبَيْتُ كَبِيرًا؟",
        "fr": "La maison était-elle grande ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "كَانَ",
              "كَانَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَا، كَانَ صَغِيرًا وَلَكِنَّهُ مُرِيحٌ.",
        "fr": "Non, elle était petite, mais confortable.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "كَانَ",
              "كَانَ"
            ],
            [
              "صَغِيرًا",
              "صَغِيرًا"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "سَكَنَ",
        "present": "يَسْكُنُ",
        "masdar": "سُكْنَى",
        "fr": "habiter",
        "lookup": "سكن"
      },
      {
        "past": "لَعِبَ",
        "present": "يَلْعَبُ",
        "masdar": "لَعِبٌ",
        "fr": "jouer",
        "lookup": "لعب"
      }
    ],
    "words": [
      [
        "كَانَ",
        "Il était"
      ],
      [
        "كُنْتُ",
        "J’étais"
      ],
      [
        "عِنْدَمَا",
        "Lorsque"
      ],
      [
        "طُفُولَةٌ",
        "Enfance"
      ],
      [
        "قُرْبَ",
        "Près de"
      ],
      [
        "مَشْيًا",
        "À pied"
      ],
      [
        "عَادَةٌ",
        "Habitude"
      ],
      [
        "صَغِيرًا",
        "Petit (accusatif)"
      ],
      [
        "مُرِيحٌ",
        "Confortable"
      ],
      [
        "سَكَنَ",
        "habiter (accompli)"
      ],
      [
        "سُكْنَى",
        "maṣdar : habiter"
      ],
      [
        "لَعِبَ",
        "jouer (accompli)"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ],
      [
        "بَعْدَ",
        "Après"
      ]
    ],
    "dialect": [
      {
        "msa": "كُنْتُ أَدْرُسُ.",
        "levant": "كِنْتْ عَمْ بِدْرُسْ.",
        "fr": "J’étudiais.",
        "note": "عَمْ peut marquer le progressif levantin ; la correspondance avec كان + inaccompli n’est pas systématique."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle forme est correcte pour « la maison était grande » ?",
        "options": [
          "كَانَ الْبَيْتُ كَبِيرًا",
          "كَانَ الْبَيْتَ كَبِيرٌ",
          "كَانَ الْبَيْتُ كَبِيرٌ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : كَانَ + attribut ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie كَانَ ?",
        "options": [
          "Il était",
          "Enfance",
          "Petit (accusatif)"
        ],
        "answer": 0,
        "why": "كَانَ signifie « Il était ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie كُنْتُ ?",
        "options": [
          "À pied",
          "habiter (accompli)",
          "J’étais"
        ],
        "answer": 2,
        "why": "كُنْتُ signifie « J’étais ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie عِنْدَمَا ?",
        "options": [
          "jouer (accompli)",
          "Lorsque",
          "Petit (accusatif)"
        ],
        "answer": 1,
        "why": "عِنْدَمَا signifie « Lorsque ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie طُفُولَةٌ ?",
        "options": [
          "Enfance",
          "habiter (accompli)",
          "Mais"
        ],
        "answer": 0,
        "why": "طُفُولَةٌ signifie « Enfance ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie قُرْبَ ?",
        "options": [
          "jouer (accompli)",
          "Il était",
          "Près de"
        ],
        "answer": 2,
        "why": "قُرْبَ signifie « Près de ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَشْيًا ?",
        "options": [
          "Lorsque",
          "À pied",
          "Mais"
        ],
        "answer": 1,
        "why": "مَشْيًا signifie « À pied ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de سَكَنَ ?",
        "options": [
          "سُكْنَى",
          "لَعِبٌ",
          "مُرِيحٌ"
        ],
        "answer": 0,
        "why": "سَكَنَ — يَسْكُنُ — سُكْنَى : habiter."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de لَعِبَ ?",
        "options": [
          "سُكْنَى",
          "سَكَنَ",
          "لَعِبٌ"
        ],
        "answer": 2,
        "why": "لَعِبَ — يَلْعَبُ — لَعِبٌ : jouer."
      },
      {
        "type": "input",
        "prompt": "Écris « Habitude » en arabe (voyelles facultatives).",
        "answer": "عَادَةٌ",
        "accepted": [
          "عادة"
        ],
        "why": "عَادَةٌ signifie « Habitude »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Où habitais-tu ? » ?",
        "options": [
          "أَيْنَ كُنْتَ تَسْكُنُ؟",
          "هَلْ كَانَ الْبَيْتُ كَبِيرًا؟",
          "لَا، كَانَ صَغِيرًا وَلَكِنَّهُ مُرِيحٌ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "أَيْنَ كُنْتَ تَسْكُنُ؟",
        "fr": "Où habitais-tu ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "كُنْتُ أَسْكُنُ قُرْبَ الْمَدْرَسَةِ.",
        "fr": "J’habitais près de l’école."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ كَانَ الْبَيْتُ كَبِيرًا؟",
        "fr": "La maison était-elle grande ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "لَا، كَانَ صَغِيرًا وَلَكِنَّهُ مُرِيحٌ.",
        "fr": "Non, elle était petite, mais confortable."
      }
    ],
    "writing": {
      "prompt": "Décris ton enfance en dix phrases, avec quatre attributs de كَانَ et quatre habitudes.",
      "modelAr": "عِنْدَمَا كُنْتُ صَغِيرًا، كَانَ بَيْتُنَا قَرِيبًا مِنَ الْمَدْرَسَةِ. كُنْتُ أَذْهَبُ إِلَيْهَا مَشْيًا كُلَّ صَبَاحٍ، وَكُنْتُ أَلْعَبُ مَعَ أَصْدِقَائِي بَعْدَ الدَّرْسِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « كَانَ au passé : être, avoir l’habitude ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue سَكَنَ et لَعِبَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Décris ton enfance en dix phrases, avec quatre attributs de كَانَ et quatre habitudes."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-07-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 7,
    "month": 7,
    "emoji": "⚖️",
    "title": "Comparatifs : plus et moins",
    "minutes": 135,
    "goal": "Comparer deux objets ou deux situations.",
    "grammar": [
      {
        "title": "أَفْعَلُ + مِنْ",
        "body": "هَذَا الْكِتَابُ أَطْوَلُ مِنْ ذَلِكَ = ce livre est plus long que celui-là. Pour beaucoup d’adjectifs de base, le comparatif est de forme أَفْعَلُ. مِنْ introduit le terme comparé."
      },
      {
        "title": "Plus/moins avec un nom",
        "body": "أَكْثَرُ مِنْ = davantage que ; أَقَلُّ مِنْ = moins que. Avec certaines qualités exprimées par un nom abstrait, on emploie أَكْثَرُ + maṣdar ou un autre tour, plutôt que d’inventer un comparatif irrégulier."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : أَيُّهُمَا أَسْرَعُ، الْقِطَارُ أَمِ الْحَافِلَةُ؟ Lis ensuite la réponse : الْقِطَارُ أَسْرَعُ مِنَ الْحَافِلَةِ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "هَذَا الْهَاتِفُ أَغْلَى مِنْ هَذَا الْهَاتِفِ الْقَدِيمِ، لَكِنَّهُ أَسْرَعُ. الْقِطَارُ أَسْرَعُ مِنَ الْحَافِلَةِ، وَالْحَافِلَةُ أَرْخَصُ مِنْهُ.",
      "fr": "Ce téléphone est plus cher que l’ancien, mais plus rapide. Le train est plus rapide que le bus et le bus est moins cher que lui."
    },
    "examples": [
      {
        "ar": "أَيُّهُمَا أَسْرَعُ، الْقِطَارُ أَمِ الْحَافِلَةُ؟",
        "fr": "Lequel est plus rapide, le train ou le bus ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَسْرَعُ",
              "أَسْرَعُ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "الْقِطَارُ أَسْرَعُ مِنَ الْحَافِلَةِ.",
        "fr": "Le train est plus rapide que le bus.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَسْرَعُ",
              "أَسْرَعُ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَأَيُّهُمَا أَرْخَصُ؟",
        "fr": "Et lequel est moins cher ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَرْخَصُ",
              "أَرْخَصُ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "الْحَافِلَةُ أَرْخَصُ.",
        "fr": "Le bus est moins cher.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَرْخَصُ",
              "أَرْخَصُ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "فَضَّلَ",
        "present": "يُفَضِّلُ",
        "masdar": "تَفْضِيلٌ",
        "fr": "préférer",
        "lookup": "فضل"
      },
      {
        "past": "اِخْتَارَ",
        "present": "يَخْتَارُ",
        "masdar": "اِخْتِيَارٌ",
        "fr": "choisir",
        "lookup": "اختار"
      }
    ],
    "words": [
      [
        "أَسْرَعُ",
        "Plus rapide"
      ],
      [
        "أَبْطَأُ",
        "Plus lent"
      ],
      [
        "أَغْلَى",
        "Plus cher"
      ],
      [
        "أَرْخَصُ",
        "Moins cher"
      ],
      [
        "أَكْثَرُ",
        "Davantage"
      ],
      [
        "أَقَلُّ",
        "Moins"
      ],
      [
        "مُقَارَنَةٌ",
        "Comparaison"
      ],
      [
        "ثَمَنٌ",
        "Prix"
      ],
      [
        "هَاتِفٌ",
        "Téléphone"
      ],
      [
        "فَضَّلَ",
        "préférer (accompli)"
      ],
      [
        "تَفْضِيلٌ",
        "maṣdar : préférer"
      ],
      [
        "اِخْتَارَ",
        "choisir (accompli)"
      ],
      [
        "اِخْتِيَارٌ",
        "maṣdar : choisir"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ]
    ],
    "dialect": [
      {
        "msa": "الْقِطَارُ أَسْرَعُ.",
        "levant": "الْقِطَارْ أَسْرَعْ.",
        "fr": "Le train est plus rapide.",
        "note": "La structure comparative reste très proche en levantin."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel mot introduit « que » dans un comparatif ?",
        "options": [
          "مِنْ",
          "إِلَى",
          "فِي"
        ],
        "answer": 0,
        "why": "Règle du chapitre : أَفْعَلُ + مِنْ ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَسْرَعُ ?",
        "options": [
          "Plus rapide",
          "Moins cher",
          "Prix"
        ],
        "answer": 0,
        "why": "أَسْرَعُ signifie « Plus rapide ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَبْطَأُ ?",
        "options": [
          "Moins",
          "préférer (accompli)",
          "Plus lent"
        ],
        "answer": 2,
        "why": "أَبْطَأُ signifie « Plus lent ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَغْلَى ?",
        "options": [
          "choisir (accompli)",
          "Plus cher",
          "Prix"
        ],
        "answer": 1,
        "why": "أَغْلَى signifie « Plus cher ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَرْخَصُ ?",
        "options": [
          "Moins cher",
          "préférer (accompli)",
          "Parce que"
        ],
        "answer": 0,
        "why": "أَرْخَصُ signifie « Moins cher ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَكْثَرُ ?",
        "options": [
          "choisir (accompli)",
          "Plus rapide",
          "Davantage"
        ],
        "answer": 2,
        "why": "أَكْثَرُ signifie « Davantage ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَقَلُّ ?",
        "options": [
          "Plus cher",
          "Moins",
          "Parce que"
        ],
        "answer": 1,
        "why": "أَقَلُّ signifie « Moins ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de فَضَّلَ ?",
        "options": [
          "تَفْضِيلٌ",
          "اِخْتِيَارٌ",
          "هَاتِفٌ"
        ],
        "answer": 0,
        "why": "فَضَّلَ — يُفَضِّلُ — تَفْضِيلٌ : préférer."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِخْتَارَ ?",
        "options": [
          "تَفْضِيلٌ",
          "فَضَّلَ",
          "اِخْتِيَارٌ"
        ],
        "answer": 2,
        "why": "اِخْتَارَ — يَخْتَارُ — اِخْتِيَارٌ : choisir."
      },
      {
        "type": "input",
        "prompt": "Écris « Comparaison » en arabe (voyelles facultatives).",
        "answer": "مُقَارَنَةٌ",
        "accepted": [
          "مقارنة"
        ],
        "why": "مُقَارَنَةٌ signifie « Comparaison »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Lequel est plus rapide, le train ou le bus ? » ?",
        "options": [
          "أَيُّهُمَا أَسْرَعُ، الْقِطَارُ أَمِ الْحَافِلَةُ؟",
          "وَأَيُّهُمَا أَرْخَصُ؟",
          "الْحَافِلَةُ أَرْخَصُ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "أَيُّهُمَا أَسْرَعُ، الْقِطَارُ أَمِ الْحَافِلَةُ؟",
        "fr": "Lequel est plus rapide, le train ou le bus ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "الْقِطَارُ أَسْرَعُ مِنَ الْحَافِلَةِ.",
        "fr": "Le train est plus rapide que le bus."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "وَأَيُّهُمَا أَرْخَصُ؟",
        "fr": "Et lequel est moins cher ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "الْحَافِلَةُ أَرْخَصُ.",
        "fr": "Le bus est moins cher."
      }
    ],
    "writing": {
      "prompt": "Compare trois logements, trois moyens de transport et deux activités avec des comparatifs.",
      "modelAr": "هَذَا الْهَاتِفُ أَغْلَى مِنْ هَذَا الْهَاتِفِ الْقَدِيمِ، لَكِنَّهُ أَسْرَعُ. الْقِطَارُ أَسْرَعُ مِنَ الْحَافِلَةِ، وَالْحَافِلَةُ أَرْخَصُ مِنْهُ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Comparatifs : plus et moins ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue فَضَّلَ et اِخْتَارَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Compare trois logements, trois moyens de transport et deux activités avec des comparatifs."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-08-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 8,
    "month": 7,
    "emoji": "🧩",
    "title": "Pluriels brisés et accords",
    "minutes": 135,
    "goal": "Relier un nom à son pluriel et accorder les adjectifs.",
    "grammar": [
      {
        "title": "Apprendre les pluriels par famille",
        "body": "مَكْتَبٌ → مَكَاتِبُ, رَجُلٌ → رِجَالٌ, بَابٌ → أَبْوَابٌ. Les pluriels brisés ne se déduisent pas toujours d’une règle productive. Apprends-les avec les noms en contexte."
      },
      {
        "title": "L’accord des pluriels non humains",
        "body": "الْكُتُبُ مُفِيدَةٌ : un pluriel de choses est souvent repris par un adjectif féminin singulier. Compare الرِّجَالُ مُجْتَهِدُونَ pour un pluriel de personnes masculines. Des nuances existent selon le registre."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : هَلْ هَذِهِ الْكُتُبُ جَدِيدَةٌ؟ Lis ensuite la réponse : لَا، هِيَ قَدِيمَةٌ وَلَكِنَّهَا مُفِيدَةٌ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "فِي مَكْتَبَتِنَا مَكَاتِبُ صَغِيرَةٌ وَكُتُبٌ كَثِيرَةٌ. هَذِهِ الْكُتُبُ مُفِيدَةٌ، وَتِلْكَ الْأَبْوَابُ قَدِيمَةٌ. الطُّلَّابُ مُجْتَهِدُونَ فِي الدِّرَاسَةِ.",
      "fr": "Dans notre bibliothèque, il y a de petits bureaux et beaucoup de livres. Ces livres sont utiles, ces portes sont anciennes. Les étudiants travaillent sérieusement."
    },
    "examples": [
      {
        "ar": "هَلْ هَذِهِ الْكُتُبُ جَدِيدَةٌ؟",
        "fr": "Ces livres sont-ils neufs ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "كُتُبٌ",
              "كُتُبٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَا، هِيَ قَدِيمَةٌ وَلَكِنَّهَا مُفِيدَةٌ.",
        "fr": "Non, ils sont anciens, mais utiles.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مُفِيدَةٌ",
              "مُفِيدَةٌ"
            ],
            [
              "لَكِنْ",
              "لَكِنْ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلِ الطُّلَّابُ مُجْتَهِدُونَ؟",
        "fr": "Les étudiants sont-ils assidus ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مُجْتَهِدُونَ",
              "مُجْتَهِدُونَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، هُمْ مُجْتَهِدُونَ.",
        "fr": "Oui, ils sont assidus.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مُجْتَهِدُونَ",
              "مُجْتَهِدُونَ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "قَرَأَ",
        "present": "يَقْرَأُ",
        "masdar": "قِرَاءَةٌ",
        "fr": "lire",
        "lookup": "قرأ"
      },
      {
        "past": "دَرَسَ",
        "present": "يَدْرُسُ",
        "masdar": "دِرَاسَةٌ",
        "fr": "étudier",
        "lookup": "درس"
      }
    ],
    "words": [
      [
        "مَكْتَبٌ",
        "Bureau"
      ],
      [
        "مَكَاتِبُ",
        "Bureaux"
      ],
      [
        "رَجُلٌ",
        "Homme"
      ],
      [
        "رِجَالٌ",
        "Hommes"
      ],
      [
        "بَابٌ",
        "Porte"
      ],
      [
        "أَبْوَابٌ",
        "Portes"
      ],
      [
        "كُتُبٌ",
        "Livres"
      ],
      [
        "مُفِيدَةٌ",
        "Utile (f.)"
      ],
      [
        "مُجْتَهِدُونَ",
        "Assidus (pluriel)"
      ],
      [
        "قَرَأَ",
        "lire (accompli)"
      ],
      [
        "قِرَاءَةٌ",
        "maṣdar : lire"
      ],
      [
        "دَرَسَ",
        "étudier (accompli)"
      ],
      [
        "دِرَاسَةٌ",
        "maṣdar : étudier"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ]
    ],
    "dialect": [
      {
        "msa": "الْكُتُبُ مُفِيدَةٌ.",
        "levant": "الْكْتُبْ مُفِيدِة.",
        "fr": "Les livres sont utiles.",
        "note": "L’accord féminin singulier des pluriels non humains reste fréquent, avec finales simplifiées."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel accord est habituel pour الْكُتُبُ ?",
        "options": [
          "مُفِيدَةٌ",
          "مُفِيدُونَ",
          "مُفِيدَاتٌ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Apprendre les pluriels par famille ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَكْتَبٌ ?",
        "options": [
          "Bureau",
          "Hommes",
          "Utile (f.)"
        ],
        "answer": 0,
        "why": "مَكْتَبٌ signifie « Bureau ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَكَاتِبُ ?",
        "options": [
          "Portes",
          "lire (accompli)",
          "Bureaux"
        ],
        "answer": 2,
        "why": "مَكَاتِبُ signifie « Bureaux ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie رَجُلٌ ?",
        "options": [
          "étudier (accompli)",
          "Homme",
          "Utile (f.)"
        ],
        "answer": 1,
        "why": "رَجُلٌ signifie « Homme ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie رِجَالٌ ?",
        "options": [
          "Hommes",
          "lire (accompli)",
          "Parce que"
        ],
        "answer": 0,
        "why": "رِجَالٌ signifie « Hommes ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie بَابٌ ?",
        "options": [
          "étudier (accompli)",
          "Bureau",
          "Porte"
        ],
        "answer": 2,
        "why": "بَابٌ signifie « Porte ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَبْوَابٌ ?",
        "options": [
          "Homme",
          "Portes",
          "Parce que"
        ],
        "answer": 1,
        "why": "أَبْوَابٌ signifie « Portes ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَرَأَ ?",
        "options": [
          "قِرَاءَةٌ",
          "دِرَاسَةٌ",
          "مُجْتَهِدُونَ"
        ],
        "answer": 0,
        "why": "قَرَأَ — يَقْرَأُ — قِرَاءَةٌ : lire."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de دَرَسَ ?",
        "options": [
          "قِرَاءَةٌ",
          "قَرَأَ",
          "دِرَاسَةٌ"
        ],
        "answer": 2,
        "why": "دَرَسَ — يَدْرُسُ — دِرَاسَةٌ : étudier."
      },
      {
        "type": "input",
        "prompt": "Écris « Livres » en arabe (voyelles facultatives).",
        "answer": "كُتُبٌ",
        "accepted": [
          "كتب"
        ],
        "why": "كُتُبٌ signifie « Livres »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Ces livres sont-ils neufs ? » ?",
        "options": [
          "هَلْ هَذِهِ الْكُتُبُ جَدِيدَةٌ؟",
          "هَلِ الطُّلَّابُ مُجْتَهِدُونَ؟",
          "نَعَمْ، هُمْ مُجْتَهِدُونَ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ هَذِهِ الْكُتُبُ جَدِيدَةٌ؟",
        "fr": "Ces livres sont-ils neufs ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "لَا، هِيَ قَدِيمَةٌ وَلَكِنَّهَا مُفِيدَةٌ.",
        "fr": "Non, ils sont anciens, mais utiles."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلِ الطُّلَّابُ مُجْتَهِدُونَ؟",
        "fr": "Les étudiants sont-ils assidus ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، هُمْ مُجْتَهِدُونَ.",
        "fr": "Oui, ils sont assidus."
      }
    ],
    "writing": {
      "prompt": "Constitue un lexique de vingt noms avec pluriels brisés et rédige dix accords nom-adjectif.",
      "modelAr": "فِي مَكْتَبَتِنَا مَكَاتِبُ صَغِيرَةٌ وَكُتُبٌ كَثِيرَةٌ. هَذِهِ الْكُتُبُ مُفِيدَةٌ، وَتِلْكَ الْأَبْوَابُ قَدِيمَةٌ. الطُّلَّابُ مُجْتَهِدُونَ فِي الدِّرَاسَةِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Pluriels brisés et accords ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue قَرَأَ et دَرَسَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Constitue un lexique de vingt noms avec pluriels brisés et rédige dix accords nom-adjectif."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-09-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 9,
    "month": 7,
    "emoji": "👬",
    "title": "Le duel : deux personnes, deux objets",
    "minutes": 135,
    "goal": "Reconnaître et utiliser les deux désinences du duel.",
    "grammar": [
      {
        "title": "ـَانِ et ـَيْنِ",
        "body": "كِتَابَانِ = deux livres (nominatif) ; كِتَابَيْنِ (accusatif/génitif). Pour le féminin, طَالِبَتَانِ / طَالِبَتَيْنِ. Les finales changent selon la fonction et la présence d’une annexion."
      },
      {
        "title": "Duel et pronom",
        "body": "هُمَا = eux/elles deux. هُمَا يَدْرُسَانِ = ils/elles deux étudient. La forme verbale du duel et les pronoms réclament un entraînement spécifique pour ne pas être confondus avec les pluriels."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : كَمْ طَالِبًا فِي الْغُرْفَةِ؟ Lis ensuite la réponse : فِيهَا طَالِبَانِ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "فِي الْغُرْفَةِ طَالِبَانِ يَدْرُسَانِ الْعَرَبِيَّةَ. عَلَى الطَّاوِلَةِ كِتَابَانِ، وَأَمَامَ الطَّاوِلَةِ كُرْسِيَّانِ. يَقْرَأُ الطَّالِبَانِ نَصًّا مَعًا.",
      "fr": "Dans la pièce, deux étudiants apprennent l’arabe. Sur la table il y a deux livres et devant la table deux chaises. Les deux étudiants lisent un texte ensemble."
    },
    "examples": [
      {
        "ar": "كَمْ طَالِبًا فِي الْغُرْفَةِ؟",
        "fr": "Combien d’étudiants y a-t-il dans la pièce ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "فِيهَا طَالِبَانِ.",
        "fr": "Il y en a deux.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "طَالِبَانِ",
              "طَالِبَانِ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ يَدْرُسَانِ مَعًا؟",
        "fr": "Étudient-ils tous les deux ensemble ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مَعًا",
              "مَعًا"
            ],
            [
              "دَرَسَ",
              "دَرَسَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، هُمَا يَدْرُسَانِ مَعًا.",
        "fr": "Oui, ils étudient ensemble.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "هُمَا",
              "هُمَا"
            ],
            [
              "مَعًا",
              "مَعًا"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "دَرَسَ",
        "present": "يَدْرُسُ",
        "masdar": "دِرَاسَةٌ",
        "fr": "étudier",
        "lookup": "درس"
      },
      {
        "past": "قَرَأَ",
        "present": "يَقْرَأُ",
        "masdar": "قِرَاءَةٌ",
        "fr": "lire",
        "lookup": "قرأ"
      }
    ],
    "words": [
      [
        "طَالِبَانِ",
        "Deux étudiants (nom.)"
      ],
      [
        "طَالِبَيْنِ",
        "Deux étudiants (acc./gén.)"
      ],
      [
        "كِتَابَانِ",
        "Deux livres (nom.)"
      ],
      [
        "كِتَابَيْنِ",
        "Deux livres (acc./gén.)"
      ],
      [
        "هُمَا",
        "Eux/elles deux"
      ],
      [
        "مَعًا",
        "Ensemble"
      ],
      [
        "كُرْسِيَّانِ",
        "Deux chaises"
      ],
      [
        "زَوْجٌ",
        "Paire"
      ],
      [
        "مُثَنًّى",
        "Duel"
      ],
      [
        "دَرَسَ",
        "étudier (accompli)"
      ],
      [
        "دِرَاسَةٌ",
        "maṣdar : étudier"
      ],
      [
        "قَرَأَ",
        "lire (accompli)"
      ],
      [
        "قِرَاءَةٌ",
        "maṣdar : lire"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ]
    ],
    "dialect": [
      {
        "msa": "عِنْدِي كِتَابَانِ.",
        "levant": "عِنْدِي كْتَابَيْنْ.",
        "fr": "J’ai deux livres.",
        "note": "Le dialecte emploie couramment une finale en -ēn pour le duel nominal."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle forme est nominative du duel de كِتَابٌ ?",
        "options": [
          "كِتَابَانِ",
          "كِتَابَيْنِ",
          "كُتُبٌ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : ـَانِ et ـَيْنِ ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie طَالِبَانِ ?",
        "options": [
          "Deux étudiants (nom.)",
          "Deux livres (acc./gén.)",
          "Paire"
        ],
        "answer": 0,
        "why": "طَالِبَانِ signifie « Deux étudiants (nom.) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie طَالِبَيْنِ ?",
        "options": [
          "Ensemble",
          "étudier (accompli)",
          "Deux étudiants (acc./gén.)"
        ],
        "answer": 2,
        "why": "طَالِبَيْنِ signifie « Deux étudiants (acc./gén.) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie كِتَابَانِ ?",
        "options": [
          "lire (accompli)",
          "Deux livres (nom.)",
          "Paire"
        ],
        "answer": 1,
        "why": "كِتَابَانِ signifie « Deux livres (nom.) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie كِتَابَيْنِ ?",
        "options": [
          "Deux livres (acc./gén.)",
          "étudier (accompli)",
          "Parce que"
        ],
        "answer": 0,
        "why": "كِتَابَيْنِ signifie « Deux livres (acc./gén.) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie هُمَا ?",
        "options": [
          "lire (accompli)",
          "Deux étudiants (nom.)",
          "Eux/elles deux"
        ],
        "answer": 2,
        "why": "هُمَا signifie « Eux/elles deux ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَعًا ?",
        "options": [
          "Deux livres (nom.)",
          "Ensemble",
          "Parce que"
        ],
        "answer": 1,
        "why": "مَعًا signifie « Ensemble ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de دَرَسَ ?",
        "options": [
          "دِرَاسَةٌ",
          "قِرَاءَةٌ",
          "مُثَنًّى"
        ],
        "answer": 0,
        "why": "دَرَسَ — يَدْرُسُ — دِرَاسَةٌ : étudier."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَرَأَ ?",
        "options": [
          "دِرَاسَةٌ",
          "دَرَسَ",
          "قِرَاءَةٌ"
        ],
        "answer": 2,
        "why": "قَرَأَ — يَقْرَأُ — قِرَاءَةٌ : lire."
      },
      {
        "type": "input",
        "prompt": "Écris « Deux chaises » en arabe (voyelles facultatives).",
        "answer": "كُرْسِيَّانِ",
        "accepted": [
          "كرسيان"
        ],
        "why": "كُرْسِيَّانِ signifie « Deux chaises »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Combien d’étudiants y a-t-il dans la pièce ? » ?",
        "options": [
          "كَمْ طَالِبًا فِي الْغُرْفَةِ؟",
          "هَلْ يَدْرُسَانِ مَعًا؟",
          "نَعَمْ، هُمَا يَدْرُسَانِ مَعًا."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "كَمْ طَالِبًا فِي الْغُرْفَةِ؟",
        "fr": "Combien d’étudiants y a-t-il dans la pièce ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "فِيهَا طَالِبَانِ.",
        "fr": "Il y en a deux."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ يَدْرُسَانِ مَعًا؟",
        "fr": "Étudient-ils tous les deux ensemble ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، هُمَا يَدْرُسَانِ مَعًا.",
        "fr": "Oui, ils étudient ensemble."
      }
    ],
    "writing": {
      "prompt": "Transforme huit noms du singulier au duel et insère chaque forme dans une phrase.",
      "modelAr": "فِي الْغُرْفَةِ طَالِبَانِ يَدْرُسَانِ الْعَرَبِيَّةَ. عَلَى الطَّاوِلَةِ كِتَابَانِ، وَأَمَامَ الطَّاوِلَةِ كُرْسِيَّانِ. يَقْرَأُ الطَّالِبَانِ نَصًّا مَعًا.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Le duel : deux personnes, deux objets ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue دَرَسَ et قَرَأَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Transforme huit noms du singulier au duel et insère chaque forme dans une phrase."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-10-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 10,
    "month": 7,
    "emoji": "🎒",
    "title": "Pronoms suffixes objets directs",
    "minutes": 135,
    "goal": "Remplacer un complément d’objet par un suffixe.",
    "grammar": [
      {
        "title": "Suffixes sur le verbe",
        "body": "أَرَاهُ = je le vois ; أَرَاهَا = je la vois ; أَرَاكَ = je te vois (m.). Le pronom se fixe au verbe et reprend un objet déjà identifié. Ne confonds pas suffixe objet et suffixe de possession."
      },
      {
        "title": "Lire la phrase complète",
        "body": "قَرَأْتُ الْكِتَابَ → قَرَأْتُهُ : « j’ai lu le livre » → « je l’ai lu ». Le ـهُ reprend le livre. À la deuxième personne, le féminin est généralement ـكِ ; l’accord dépend de la personne visée."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : هَلْ قَرَأْتَ الْكِتَابَ؟ Lis ensuite la réponse : نَعَمْ، قَرَأْتُهُ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "اِشْتَرَيْتُ كِتَابًا جَدِيدًا. قَرَأْتُهُ فِي الْمِتْرُو، ثُمَّ أَعْطَيْتُهُ لِصَدِيقِي. شَكَرَنِي صَدِيقِي لِأَنَّ الْكِتَابَ مُفِيدٌ.",
      "fr": "J’ai acheté un nouveau livre. Je l’ai lu dans le métro, puis je l’ai donné à mon ami. Mon ami m’a remercié, car le livre est utile."
    },
    "examples": [
      {
        "ar": "هَلْ قَرَأْتَ الْكِتَابَ؟",
        "fr": "As-tu lu le livre ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "ـهُ",
              "ـهُ"
            ],
            [
              "ـكَ",
              "ـكَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، قَرَأْتُهُ.",
        "fr": "Oui, je l’ai lu.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "ـهُ",
              "ـهُ"
            ],
            [
              "قَرَأَ",
              "قَرَأَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَهَلْ أَعْطَيْتَهُ لِصَدِيقِكَ؟",
        "fr": "Et l’as-tu donné à ton ami ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "ـهُ",
              "ـهُ"
            ],
            [
              "ـكَ",
              "ـكَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، أَعْطَيْتُهُ لَهُ.",
        "fr": "Oui, je le lui ai donné.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "ـهُ",
              "ـهُ"
            ],
            [
              "أَعْطَى",
              "أَعْطَى"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "قَرَأَ",
        "present": "يَقْرَأُ",
        "masdar": "قِرَاءَةٌ",
        "fr": "lire",
        "lookup": "قرأ"
      },
      {
        "past": "أَعْطَى",
        "present": "يُعْطِي",
        "masdar": "إِعْطَاءٌ",
        "fr": "donner",
        "lookup": "أعطى"
      }
    ],
    "words": [
      [
        "ـهُ",
        "Le (objet)"
      ],
      [
        "ـهَا",
        "La (objet)"
      ],
      [
        "ـكَ",
        "Te (m.)"
      ],
      [
        "ـكِ",
        "Te (f.)"
      ],
      [
        "ـنِي",
        "Me"
      ],
      [
        "كِتَابٌ",
        "Livre"
      ],
      [
        "صَدِيقٌ",
        "Ami"
      ],
      [
        "هَدِيَّةٌ",
        "Cadeau"
      ],
      [
        "مَفْعُولٌ بِهِ",
        "Complément d’objet direct"
      ],
      [
        "قَرَأَ",
        "lire (accompli)"
      ],
      [
        "قِرَاءَةٌ",
        "maṣdar : lire"
      ],
      [
        "أَعْطَى",
        "donner (accompli)"
      ],
      [
        "إِعْطَاءٌ",
        "maṣdar : donner"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ]
    ],
    "dialect": [
      {
        "msa": "قَرَأْتُهُ.",
        "levant": "قَرَيْتُهْ.",
        "fr": "Je l’ai lu.",
        "note": "La forme du verbe change au Levant, mais le suffixe objet reste une structure essentielle."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle phrase signifie « je l’ai lu » ?",
        "options": [
          "قَرَأْتُهُ",
          "قَرَأَنِي",
          "قَرَأَتْهُ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Suffixes sur le verbe ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie ـهُ ?",
        "options": [
          "Le (objet)",
          "Te (f.)",
          "Cadeau"
        ],
        "answer": 0,
        "why": "ـهُ signifie « Le (objet) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie ـهَا ?",
        "options": [
          "Livre",
          "lire (accompli)",
          "La (objet)"
        ],
        "answer": 2,
        "why": "ـهَا signifie « La (objet) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie ـكَ ?",
        "options": [
          "donner (accompli)",
          "Te (m.)",
          "Cadeau"
        ],
        "answer": 1,
        "why": "ـكَ signifie « Te (m.) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie ـكِ ?",
        "options": [
          "Te (f.)",
          "lire (accompli)",
          "Parce que"
        ],
        "answer": 0,
        "why": "ـكِ signifie « Te (f.) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie ـنِي ?",
        "options": [
          "donner (accompli)",
          "Le (objet)",
          "Me"
        ],
        "answer": 2,
        "why": "ـنِي signifie « Me ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie كِتَابٌ ?",
        "options": [
          "Te (m.)",
          "Livre",
          "Parce que"
        ],
        "answer": 1,
        "why": "كِتَابٌ signifie « Livre ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَرَأَ ?",
        "options": [
          "قِرَاءَةٌ",
          "إِعْطَاءٌ",
          "مَفْعُولٌ بِهِ"
        ],
        "answer": 0,
        "why": "قَرَأَ — يَقْرَأُ — قِرَاءَةٌ : lire."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَعْطَى ?",
        "options": [
          "قِرَاءَةٌ",
          "قَرَأَ",
          "إِعْطَاءٌ"
        ],
        "answer": 2,
        "why": "أَعْطَى — يُعْطِي — إِعْطَاءٌ : donner."
      },
      {
        "type": "input",
        "prompt": "Écris « Ami » en arabe (voyelles facultatives).",
        "answer": "صَدِيقٌ",
        "accepted": [
          "صديق"
        ],
        "why": "صَدِيقٌ signifie « Ami »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « As-tu lu le livre ? » ?",
        "options": [
          "هَلْ قَرَأْتَ الْكِتَابَ؟",
          "وَهَلْ أَعْطَيْتَهُ لِصَدِيقِكَ؟",
          "نَعَمْ، أَعْطَيْتُهُ لَهُ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ قَرَأْتَ الْكِتَابَ؟",
        "fr": "As-tu lu le livre ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، قَرَأْتُهُ.",
        "fr": "Oui, je l’ai lu."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "وَهَلْ أَعْطَيْتَهُ لِصَدِيقِكَ؟",
        "fr": "Et l’as-tu donné à ton ami ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، أَعْطَيْتُهُ لَهُ.",
        "fr": "Oui, je le lui ai donné."
      }
    ],
    "writing": {
      "prompt": "Transforme dix phrases avec objet explicite en phrases avec pronom suffixe.",
      "modelAr": "اِشْتَرَيْتُ كِتَابًا جَدِيدًا. قَرَأْتُهُ فِي الْمِتْرُو، ثُمَّ أَعْطَيْتُهُ لِصَدِيقِي. شَكَرَنِي صَدِيقِي لِأَنَّ الْكِتَابَ مُفِيدٌ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Pronoms suffixes objets directs ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue قَرَأَ et أَعْطَى au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Transforme dix phrases avec objet explicite en phrases avec pronom suffixe."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-11-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 11,
    "month": 8,
    "emoji": "🔍",
    "title": "Relatives : الَّذِي et الَّتِي",
    "minutes": 135,
    "goal": "Relier une information à un nom déterminé.",
    "grammar": [
      {
        "title": "Le relatif après un antécédent défini",
        "body": "الْكِتَابُ الَّذِي قَرَأْتُهُ = le livre que j’ai lu. الَّذِي se rapporte au masculin singulier, الَّتِي au féminin singulier. Le pronom objet ـهُ peut reprendre l’antécédent dans la relative."
      },
      {
        "title": "Relatives définies et indéfinies",
        "body": "Pour un antécédent indéfini, l’arabe omet souvent le pronom relatif : قَرَأْتُ كِتَابًا أَحْبَبْتُهُ « j’ai lu un livre que j’ai aimé ». La présence ou l’absence de الَّذِي reflète donc une distinction syntaxique, pas une erreur."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : أَيْنَ الْكِتَابُ الَّذِي اِشْتَرَيْتَهُ؟ Lis ensuite la réponse : هُوَ عَلَى الطَّاوِلَةِ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "هَذِهِ الْمَدِينَةُ الَّتِي أَسْكُنُ فِيهَا. فِيهَا مَكْتَبَةٌ كَبِيرَةٌ أَزُورُهَا كُلَّ أُسْبُوعٍ. الْكِتَابُ الَّذِي اِشْتَرَيْتُهُ مِنْهَا مُفِيدٌ جِدًّا.",
      "fr": "C’est la ville où j’habite. Il y a une grande bibliothèque que je visite chaque semaine. Le livre que j’y ai acheté est très utile."
    },
    "examples": [
      {
        "ar": "أَيْنَ الْكِتَابُ الَّذِي اِشْتَرَيْتَهُ؟",
        "fr": "Où est le livre que tu as acheté ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "الَّذِي",
              "الَّذِي"
            ],
            [
              "اِشْتَرَى",
              "اِشْتَرَى"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هُوَ عَلَى الطَّاوِلَةِ.",
        "fr": "Il est sur la table.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "طَاوِلَةٌ",
              "طَاوِلَةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَمَا الْمَدِينَةُ الَّتِي تُحِبُّهَا؟",
        "fr": "Et quelle ville aimes-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "الَّتِي",
              "الَّتِي"
            ],
            [
              "مَدِينَةٌ",
              "مَدِينَةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أُحِبُّ الْمَدِينَةَ الَّتِي أَسْكُنُ فِيهَا.",
        "fr": "J’aime la ville où j’habite.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "الَّتِي",
              "الَّتِي"
            ],
            [
              "مَدِينَةٌ",
              "مَدِينَةٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "اِشْتَرَى",
        "present": "يَشْتَرِي",
        "masdar": "اِشْتِرَاءٌ",
        "fr": "acheter",
        "lookup": "اشترى"
      },
      {
        "past": "أَحَبَّ",
        "present": "يُحِبُّ",
        "masdar": "حُبٌّ",
        "fr": "aimer",
        "lookup": "أحب"
      }
    ],
    "words": [
      [
        "الَّذِي",
        "Qui/que (masculin)"
      ],
      [
        "الَّتِي",
        "Qui/que (féminin)"
      ],
      [
        "صِلَةٌ",
        "Lien/relative"
      ],
      [
        "اِسْمٌ مَوْصُولٌ",
        "Pronom relatif"
      ],
      [
        "مَدِينَةٌ",
        "Ville"
      ],
      [
        "مَكْتَبَةٌ",
        "Bibliothèque"
      ],
      [
        "مُفِيدٌ",
        "Utile"
      ],
      [
        "جَدِيدٌ",
        "Nouveau"
      ],
      [
        "طَاوِلَةٌ",
        "Table"
      ],
      [
        "اِشْتَرَى",
        "acheter (accompli)"
      ],
      [
        "اِشْتِرَاءٌ",
        "maṣdar : acheter"
      ],
      [
        "أَحَبَّ",
        "aimer (accompli)"
      ],
      [
        "حُبٌّ",
        "maṣdar : aimer"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ]
    ],
    "dialect": [
      {
        "msa": "الْكِتَابُ الَّذِي قَرَأْتُهُ",
        "levant": "الْكْتَابْ يَلِّي قَرَيْتُهْ",
        "fr": "Le livre que j’ai lu",
        "note": "يَلِّي est un relatif courant en levantin, sans distinction de genre."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel pronom relatif convient à الْمَدِينَةُ ?",
        "options": [
          "الَّتِي",
          "الَّذِي",
          "الَّذِينَ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Le relatif après un antécédent défini ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie الَّذِي ?",
        "options": [
          "Qui/que (masculin)",
          "Pronom relatif",
          "Nouveau"
        ],
        "answer": 0,
        "why": "الَّذِي signifie « Qui/que (masculin) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie الَّتِي ?",
        "options": [
          "Bibliothèque",
          "acheter (accompli)",
          "Qui/que (féminin)"
        ],
        "answer": 2,
        "why": "الَّتِي signifie « Qui/que (féminin) ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie صِلَةٌ ?",
        "options": [
          "aimer (accompli)",
          "Lien/relative",
          "Nouveau"
        ],
        "answer": 1,
        "why": "صِلَةٌ signifie « Lien/relative ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie اِسْمٌ مَوْصُولٌ ?",
        "options": [
          "Pronom relatif",
          "acheter (accompli)",
          "Parce que"
        ],
        "answer": 0,
        "why": "اِسْمٌ مَوْصُولٌ signifie « Pronom relatif ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَدِينَةٌ ?",
        "options": [
          "aimer (accompli)",
          "Qui/que (masculin)",
          "Ville"
        ],
        "answer": 2,
        "why": "مَدِينَةٌ signifie « Ville ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَكْتَبَةٌ ?",
        "options": [
          "Lien/relative",
          "Bibliothèque",
          "Parce que"
        ],
        "answer": 1,
        "why": "مَكْتَبَةٌ signifie « Bibliothèque ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِشْتَرَى ?",
        "options": [
          "اِشْتِرَاءٌ",
          "حُبٌّ",
          "طَاوِلَةٌ"
        ],
        "answer": 0,
        "why": "اِشْتَرَى — يَشْتَرِي — اِشْتِرَاءٌ : acheter."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَحَبَّ ?",
        "options": [
          "اِشْتِرَاءٌ",
          "اِشْتَرَى",
          "حُبٌّ"
        ],
        "answer": 2,
        "why": "أَحَبَّ — يُحِبُّ — حُبٌّ : aimer."
      },
      {
        "type": "input",
        "prompt": "Écris « Utile » en arabe (voyelles facultatives).",
        "answer": "مُفِيدٌ",
        "accepted": [
          "مفيد"
        ],
        "why": "مُفِيدٌ signifie « Utile »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Où est le livre que tu as acheté ? » ?",
        "options": [
          "أَيْنَ الْكِتَابُ الَّذِي اِشْتَرَيْتَهُ؟",
          "وَمَا الْمَدِينَةُ الَّتِي تُحِبُّهَا؟",
          "أُحِبُّ الْمَدِينَةَ الَّتِي أَسْكُنُ فِيهَا."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "أَيْنَ الْكِتَابُ الَّذِي اِشْتَرَيْتَهُ؟",
        "fr": "Où est le livre que tu as acheté ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "هُوَ عَلَى الطَّاوِلَةِ.",
        "fr": "Il est sur la table."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "وَمَا الْمَدِينَةُ الَّتِي تُحِبُّهَا؟",
        "fr": "Et quelle ville aimes-tu ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أُحِبُّ الْمَدِينَةَ الَّتِي أَسْكُنُ فِيهَا.",
        "fr": "J’aime la ville où j’habite."
      }
    ],
    "writing": {
      "prompt": "Combine dix paires de phrases en relatives et souligne les suffixes de reprise.",
      "modelAr": "هَذِهِ الْمَدِينَةُ الَّتِي أَسْكُنُ فِيهَا. فِيهَا مَكْتَبَةٌ كَبِيرَةٌ أَزُورُهَا كُلَّ أُسْبُوعٍ. الْكِتَابُ الَّذِي اِشْتَرَيْتُهُ مِنْهَا مُفِيدٌ جِدًّا.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Relatives : الَّذِي et الَّتِي ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue اِشْتَرَى et أَحَبَّ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Combine dix paires de phrases en relatives et souligne les suffixes de reprise."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-12-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 12,
    "month": 8,
    "emoji": "🧠",
    "title": "Cause et conséquence : لِأَنَّ، لِذَلِكَ",
    "minutes": 135,
    "goal": "Justifier une action et en présenter le résultat.",
    "grammar": [
      {
        "title": "Expliquer la cause",
        "body": "لِأَنَّنِي مَرِيضٌ « parce que je suis malade » ; لِأَنَّ الطَّرِيقَ طَوِيلٌ « parce que la route est longue ». أَنَّ régit son nom à l’accusatif ; il faut donc distinguer لِأَنَّ de لِكَيْ."
      },
      {
        "title": "Présenter la conséquence",
        "body": "لِذَلِكَ signifie « c’est pourquoi / par conséquent ». Compare لِأَنَّنِي مُتْعَبٌ، سَأَنَامُ « parce que je suis fatigué, je dormirai » avec أَنَا مُتْعَبٌ، لِذَلِكَ سَأَنَامُ « je suis fatigué, donc je dormirai »."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : لِمَاذَا لَمْ تَذْهَبْ إِلَى الْعَمَلِ؟ Lis ensuite la réponse : لِأَنَّنِي كُنْتُ مَرِيضًا. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "لَمْ أَذْهَبْ إِلَى الْعَمَلِ لِأَنَّنِي كُنْتُ مَرِيضًا. لِذَلِكَ اِتَّصَلْتُ بِمَدِيرِي وَأَرْسَلْتُ رِسَالَةً. بَعْدَ يَوْمَيْنِ شَعَرْتُ بِتَحَسُّنٍ.",
      "fr": "Je ne suis pas allé au travail parce que j’étais malade. J’ai donc téléphoné à mon responsable et envoyé un message. Après deux jours, je me suis senti mieux."
    },
    "examples": [
      {
        "ar": "لِمَاذَا لَمْ تَذْهَبْ إِلَى الْعَمَلِ؟",
        "fr": "Pourquoi n’es-tu pas allé travailler ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "لِأَنَّنِي كُنْتُ مَرِيضًا.",
        "fr": "Parce que j’étais malade.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "لِأَنَّ",
              "لِأَنَّ"
            ],
            [
              "مَرِيضٌ",
              "مَرِيضٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَمَاذَا فَعَلْتَ؟",
        "fr": "Et qu’as-tu fait ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "اِتَّصَلْتُ بِمَدِيرِي، لِذَلِكَ لَمْ يَقْلَقْ.",
        "fr": "J’ai contacté mon responsable ; il ne s’est donc pas inquiété.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "لِذَلِكَ",
              "لِذَلِكَ"
            ],
            [
              "مُدِيرٌ",
              "مُدِيرٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "أَرْسَلَ",
        "present": "يُرْسِلُ",
        "masdar": "إِرْسَالٌ",
        "fr": "envoyer",
        "lookup": "أرسل"
      },
      {
        "past": "شَعَرَ",
        "present": "يَشْعُرُ",
        "masdar": "شُعُورٌ",
        "fr": "ressentir",
        "lookup": "شعر"
      }
    ],
    "words": [
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لِذَلِكَ",
        "C’est pourquoi"
      ],
      [
        "سَبَبٌ",
        "Cause"
      ],
      [
        "نَتِيجَةٌ",
        "Résultat"
      ],
      [
        "مَرِيضٌ",
        "Malade"
      ],
      [
        "مُدِيرٌ",
        "Responsable"
      ],
      [
        "رِسَالَةٌ",
        "Message"
      ],
      [
        "تَحَسُّنٌ",
        "Amélioration"
      ],
      [
        "قَلَقٌ",
        "Inquiétude"
      ],
      [
        "أَرْسَلَ",
        "envoyer (accompli)"
      ],
      [
        "إِرْسَالٌ",
        "maṣdar : envoyer"
      ],
      [
        "شَعَرَ",
        "ressentir (accompli)"
      ],
      [
        "شُعُورٌ",
        "maṣdar : ressentir"
      ],
      [
        "لَكِنْ",
        "Mais"
      ],
      [
        "بَعْدَ",
        "Après"
      ]
    ],
    "dialect": [
      {
        "msa": "لِأَنَّنِي مُتْعَبٌ.",
        "levant": "لَأَنُّو تَعْبَانْ.",
        "fr": "Parce que je suis fatigué.",
        "note": "لَأَنُّو et مْشَانْ peuvent exprimer la cause selon le contexte."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel connecteur exprime « c’est pourquoi » ?",
        "options": [
          "لِذَلِكَ",
          "لِكَيْ",
          "قَبْلَ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Expliquer la cause ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie لِأَنَّ ?",
        "options": [
          "Parce que",
          "Résultat",
          "Amélioration"
        ],
        "answer": 0,
        "why": "لِأَنَّ signifie « Parce que ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie لِذَلِكَ ?",
        "options": [
          "Responsable",
          "envoyer (accompli)",
          "C’est pourquoi"
        ],
        "answer": 2,
        "why": "لِذَلِكَ signifie « C’est pourquoi ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie سَبَبٌ ?",
        "options": [
          "ressentir (accompli)",
          "Cause",
          "Amélioration"
        ],
        "answer": 1,
        "why": "سَبَبٌ signifie « Cause ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie نَتِيجَةٌ ?",
        "options": [
          "Résultat",
          "envoyer (accompli)",
          "Mais"
        ],
        "answer": 0,
        "why": "نَتِيجَةٌ signifie « Résultat ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَرِيضٌ ?",
        "options": [
          "ressentir (accompli)",
          "Parce que",
          "Malade"
        ],
        "answer": 2,
        "why": "مَرِيضٌ signifie « Malade ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُدِيرٌ ?",
        "options": [
          "Cause",
          "Responsable",
          "Mais"
        ],
        "answer": 1,
        "why": "مُدِيرٌ signifie « Responsable ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَرْسَلَ ?",
        "options": [
          "إِرْسَالٌ",
          "شُعُورٌ",
          "قَلَقٌ"
        ],
        "answer": 0,
        "why": "أَرْسَلَ — يُرْسِلُ — إِرْسَالٌ : envoyer."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de شَعَرَ ?",
        "options": [
          "إِرْسَالٌ",
          "أَرْسَلَ",
          "شُعُورٌ"
        ],
        "answer": 2,
        "why": "شَعَرَ — يَشْعُرُ — شُعُورٌ : ressentir."
      },
      {
        "type": "input",
        "prompt": "Écris « Message » en arabe (voyelles facultatives).",
        "answer": "رِسَالَةٌ",
        "accepted": [
          "رسالة"
        ],
        "why": "رِسَالَةٌ signifie « Message »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Pourquoi n’es-tu pas allé travailler ? » ?",
        "options": [
          "لِمَاذَا لَمْ تَذْهَبْ إِلَى الْعَمَلِ؟",
          "وَمَاذَا فَعَلْتَ؟",
          "اِتَّصَلْتُ بِمَدِيرِي، لِذَلِكَ لَمْ يَقْلَقْ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "لِمَاذَا لَمْ تَذْهَبْ إِلَى الْعَمَلِ؟",
        "fr": "Pourquoi n’es-tu pas allé travailler ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "لِأَنَّنِي كُنْتُ مَرِيضًا.",
        "fr": "Parce que j’étais malade."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "وَمَاذَا فَعَلْتَ؟",
        "fr": "Et qu’as-tu fait ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "اِتَّصَلْتُ بِمَدِيرِي، لِذَلِكَ لَمْ يَقْلَقْ.",
        "fr": "J’ai contacté mon responsable ; il ne s’est donc pas inquiété."
      }
    ],
    "writing": {
      "prompt": "Écris dix paires cause-conséquence en variant les sujets et les temps verbaux.",
      "modelAr": "لَمْ أَذْهَبْ إِلَى الْعَمَلِ لِأَنَّنِي كُنْتُ مَرِيضًا. لِذَلِكَ اِتَّصَلْتُ بِمَدِيرِي وَأَرْسَلْتُ رِسَالَةً. بَعْدَ يَوْمَيْنِ شَعَرْتُ بِتَحَسُّنٍ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Cause et conséquence : لِأَنَّ، لِذَلِكَ ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue أَرْسَلَ et شَعَرَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Écris dix paires cause-conséquence en variant les sujets et les temps verbaux."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-13-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 13,
    "month": 8,
    "emoji": "🌦️",
    "title": "Météo, saisons et projets",
    "minutes": 135,
    "goal": "Relier les conditions météorologiques aux décisions.",
    "grammar": [
      {
        "title": "Les saisons",
        "body": "الصَّيْفُ = été ; الشِّتَاءُ = hiver ; الرَّبِيعُ = printemps ; الْخَرِيفُ = automne. Les saisons sont des noms et peuvent être sujet d’une phrase : الشِّتَاءُ بَارِدٌ."
      },
      {
        "title": "Prévoir et décider",
        "body": "إِذَا كَانَ الْجَوُّ جَمِيلًا، سَأَخْرُجُ « s’il fait beau, je sortirai ». إِذَا introduit ici une condition future probable ; la description peut comporter كَانَ ou un autre verbe. Ne confonds pas cette structure avec une hypothèse irréelle."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَا تَوَقُّعَاتُ الْجَوِّ لِغَدٍ؟ Lis ensuite la réponse : رُبَّمَا تُمْطِرُ السَّمَاءُ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "فِي الرَّبِيعِ يَكُونُ الْجَوُّ مُعْتَدِلًا. إِذَا لَمْ تُمْطِرِ السَّمَاءُ غَدًا، سَنَذْهَبُ إِلَى الْبَحْرِ. أَمَّا فِي الشِّتَاءِ فَنُفَضِّلُ الْبَقَاءَ فِي الْبَيْتِ.",
      "fr": "Au printemps, le temps est tempéré. S’il ne pleut pas demain, nous irons à la mer. En hiver, en revanche, nous préférons rester à la maison."
    },
    "examples": [
      {
        "ar": "مَا تَوَقُّعَاتُ الْجَوِّ لِغَدٍ؟",
        "fr": "Quelles sont les prévisions pour demain ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "تَوَقُّعَاتٌ",
              "تَوَقُّعَاتٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "رُبَّمَا تُمْطِرُ السَّمَاءُ.",
        "fr": "Il pleuvra peut-être.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "رُبَّمَا",
              "رُبَّمَا"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَإِذَا كَانَ الْجَوُّ جَمِيلًا؟",
        "fr": "Et s’il fait beau ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "إِذَا",
              "إِذَا"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "سَنَذْهَبُ إِلَى الْبَحْرِ.",
        "fr": "Nous irons à la mer.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "بَحْرٌ",
              "بَحْرٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "خَرَجَ",
        "present": "يَخْرُجُ",
        "masdar": "خُرُوجٌ",
        "fr": "sortir",
        "lookup": "خرج"
      },
      {
        "past": "فَضَّلَ",
        "present": "يُفَضِّلُ",
        "masdar": "تَفْضِيلٌ",
        "fr": "préférer",
        "lookup": "فضل"
      }
    ],
    "words": [
      [
        "رَبِيعٌ",
        "Printemps"
      ],
      [
        "صَيْفٌ",
        "Été"
      ],
      [
        "خَرِيفٌ",
        "Automne"
      ],
      [
        "شِتَاءٌ",
        "Hiver"
      ],
      [
        "مُعْتَدِلٌ",
        "Tempéré"
      ],
      [
        "تَوَقُّعَاتٌ",
        "Prévisions"
      ],
      [
        "بَحْرٌ",
        "Mer"
      ],
      [
        "رُبَّمَا",
        "Peut-être"
      ],
      [
        "إِذَا",
        "Si/quand"
      ],
      [
        "خَرَجَ",
        "sortir (accompli)"
      ],
      [
        "خُرُوجٌ",
        "maṣdar : sortir"
      ],
      [
        "فَضَّلَ",
        "préférer (accompli)"
      ],
      [
        "تَفْضِيلٌ",
        "maṣdar : préférer"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ]
    ],
    "dialect": [
      {
        "msa": "إِذَا مَا مَطَرَتْ، سَأَبْقَى.",
        "levant": "إِذَا شَتَّتْ، رَحْ ضَلّ بِالْبَيْتْ.",
        "fr": "S’il pleut, je resterai chez moi.",
        "note": "شَتَّتْ / شَتِّي signifie « il pleut » dans certaines variétés levantines."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel nom arabe correspond à « hiver » ?",
        "options": [
          "شِتَاءٌ",
          "صَيْفٌ",
          "رَبِيعٌ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Les saisons ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie رَبِيعٌ ?",
        "options": [
          "Printemps",
          "Hiver",
          "Peut-être"
        ],
        "answer": 0,
        "why": "رَبِيعٌ signifie « Printemps ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie صَيْفٌ ?",
        "options": [
          "Prévisions",
          "sortir (accompli)",
          "Été"
        ],
        "answer": 2,
        "why": "صَيْفٌ signifie « Été ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie خَرِيفٌ ?",
        "options": [
          "préférer (accompli)",
          "Automne",
          "Peut-être"
        ],
        "answer": 1,
        "why": "خَرِيفٌ signifie « Automne ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie شِتَاءٌ ?",
        "options": [
          "Hiver",
          "sortir (accompli)",
          "Parce que"
        ],
        "answer": 0,
        "why": "شِتَاءٌ signifie « Hiver ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُعْتَدِلٌ ?",
        "options": [
          "préférer (accompli)",
          "Printemps",
          "Tempéré"
        ],
        "answer": 2,
        "why": "مُعْتَدِلٌ signifie « Tempéré ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie تَوَقُّعَاتٌ ?",
        "options": [
          "Automne",
          "Prévisions",
          "Parce que"
        ],
        "answer": 1,
        "why": "تَوَقُّعَاتٌ signifie « Prévisions ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de خَرَجَ ?",
        "options": [
          "خُرُوجٌ",
          "تَفْضِيلٌ",
          "إِذَا"
        ],
        "answer": 0,
        "why": "خَرَجَ — يَخْرُجُ — خُرُوجٌ : sortir."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de فَضَّلَ ?",
        "options": [
          "خُرُوجٌ",
          "خَرَجَ",
          "تَفْضِيلٌ"
        ],
        "answer": 2,
        "why": "فَضَّلَ — يُفَضِّلُ — تَفْضِيلٌ : préférer."
      },
      {
        "type": "input",
        "prompt": "Écris « Mer » en arabe (voyelles facultatives).",
        "answer": "بَحْرٌ",
        "accepted": [
          "بحر"
        ],
        "why": "بَحْرٌ signifie « Mer »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Quelles sont les prévisions pour demain ? » ?",
        "options": [
          "مَا تَوَقُّعَاتُ الْجَوِّ لِغَدٍ؟",
          "وَإِذَا كَانَ الْجَوُّ جَمِيلًا؟",
          "سَنَذْهَبُ إِلَى الْبَحْرِ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَا تَوَقُّعَاتُ الْجَوِّ لِغَدٍ؟",
        "fr": "Quelles sont les prévisions pour demain ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "رُبَّمَا تُمْطِرُ السَّمَاءُ.",
        "fr": "Il pleuvra peut-être."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "وَإِذَا كَانَ الْجَوُّ جَمِيلًا؟",
        "fr": "Et s’il fait beau ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "سَنَذْهَبُ إِلَى الْبَحْرِ.",
        "fr": "Nous irons à la mer."
      }
    ],
    "writing": {
      "prompt": "Rédige les prévisions de trois villes et adapte tes projets selon le temps annoncé.",
      "modelAr": "فِي الرَّبِيعِ يَكُونُ الْجَوُّ مُعْتَدِلًا. إِذَا لَمْ تُمْطِرِ السَّمَاءُ غَدًا، سَنَذْهَبُ إِلَى الْبَحْرِ. أَمَّا فِي الشِّتَاءِ فَنُفَضِّلُ الْبَقَاءَ فِي الْبَيْتِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Météo, saisons et projets ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue خَرَجَ et فَضَّلَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Rédige les prévisions de trois villes et adapte tes projets selon le temps annoncé."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-14-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 14,
    "month": 8,
    "emoji": "🩺",
    "title": "Santé et rendez-vous médical",
    "minutes": 135,
    "goal": "Décrire des symptômes simples au médecin.",
    "grammar": [
      {
        "title": "J’ai mal à…",
        "body": "عِنْدِي أَلَمٌ فِي الرَّأْسِ « j’ai mal à la tête » ; أَشْعُرُ بِالتَّعَبِ « je ressens de la fatigue ». Le choix de la préposition dépend du mot : أَلَمٌ فِي, شُعُورٌ بِـ."
      },
      {
        "title": "Conseils et obligation",
        "body": "يَجِبُ أَنْ تَسْتَرِيحَ « tu dois te reposer » ; مِنَ الْأَفْضَلِ أَنْ تَشْرَبَ الْمَاءَ « mieux vaut boire de l’eau ». Le verbe qui suit أَنْ est au subjonctif. Ce sont des expressions linguistiques, non un avis médical."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَا الَّذِي يُؤْلِمُكَ؟ Lis ensuite la réponse : عِنْدِي أَلَمٌ فِي الرَّأْسِ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "شَعَرْتُ بِأَلَمٍ فِي رَأْسِي فَذَهَبْتُ إِلَى الطَّبِيبِ. سَأَلَنِي عَنِ الْأَعْرَاضِ وَفَحَصَنِي. قَالَ إِنَّهُ يَجِبُ أَنْ أَرْتَاحَ وَأَنْ أَشْرَبَ مَاءً كَافِيًا.",
      "fr": "J’ai ressenti une douleur à la tête, donc je suis allé chez le médecin. Il m’a interrogé sur les symptômes et m’a examiné. Il a dit que je devais me reposer et boire suffisamment d’eau."
    },
    "examples": [
      {
        "ar": "مَا الَّذِي يُؤْلِمُكَ؟",
        "fr": "Qu’est-ce qui te fait mal ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "عِنْدِي أَلَمٌ فِي الرَّأْسِ.",
        "fr": "J’ai mal à la tête.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَلَمٌ",
              "أَلَمٌ"
            ],
            [
              "رَأْسٌ",
              "رَأْسٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ عِنْدَكَ حُمَّى؟",
        "fr": "As-tu de la fièvre ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "حُمَّى",
              "حُمَّى"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَا، وَلَكِنَّنِي أَشْعُرُ بِالتَّعَبِ.",
        "fr": "Non, mais je ressens de la fatigue.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "تَعَبٌ",
              "تَعَبٌ"
            ],
            [
              "شَعَرَ",
              "شَعَرَ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "شَعَرَ",
        "present": "يَشْعُرُ",
        "masdar": "شُعُورٌ",
        "fr": "ressentir",
        "lookup": "شعر"
      },
      {
        "past": "تَعِبَ",
        "present": "يَتْعَبُ",
        "masdar": "تَعَبٌ",
        "fr": "se fatiguer",
        "lookup": "تعب"
      }
    ],
    "words": [
      [
        "طَبِيبٌ",
        "Médecin"
      ],
      [
        "أَلَمٌ",
        "Douleur"
      ],
      [
        "رَأْسٌ",
        "Tête"
      ],
      [
        "حُمَّى",
        "Fièvre"
      ],
      [
        "تَعَبٌ",
        "Fatigue"
      ],
      [
        "أَعْرَاضٌ",
        "Symptômes"
      ],
      [
        "فَحْصٌ",
        "Examen"
      ],
      [
        "دَوَاءٌ",
        "Médicament"
      ],
      [
        "رَاحَةٌ",
        "Repos"
      ],
      [
        "شَعَرَ",
        "ressentir (accompli)"
      ],
      [
        "شُعُورٌ",
        "maṣdar : ressentir"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ],
      [
        "بَعْدَ",
        "Après"
      ],
      [
        "قَبْلَ",
        "Avant"
      ]
    ],
    "dialect": [
      {
        "msa": "عِنْدِي أَلَمٌ فِي رَأْسِي.",
        "levant": "رَاسِي عَمْ يُوجَعْنِي.",
        "fr": "J’ai mal à la tête.",
        "note": "Les plaintes de douleur utilisent des constructions différentes en langue parlée."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle expression signifie « je ressens de la fatigue » ?",
        "options": [
          "أَشْعُرُ بِالتَّعَبِ",
          "أُرِيدُ تَعَبًا",
          "عِنْدِي فِي الطَّبِيبِ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : J’ai mal à… ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie طَبِيبٌ ?",
        "options": [
          "Médecin",
          "Fièvre",
          "Médicament"
        ],
        "answer": 0,
        "why": "طَبِيبٌ signifie « Médecin ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَلَمٌ ?",
        "options": [
          "Symptômes",
          "ressentir (accompli)",
          "Douleur"
        ],
        "answer": 2,
        "why": "أَلَمٌ signifie « Douleur ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie رَأْسٌ ?",
        "options": [
          "Parce que",
          "Tête",
          "Médicament"
        ],
        "answer": 1,
        "why": "رَأْسٌ signifie « Tête ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie حُمَّى ?",
        "options": [
          "Fièvre",
          "ressentir (accompli)",
          "Après"
        ],
        "answer": 0,
        "why": "حُمَّى signifie « Fièvre ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie تَعَبٌ ?",
        "options": [
          "Parce que",
          "Médecin",
          "Fatigue"
        ],
        "answer": 2,
        "why": "تَعَبٌ signifie « Fatigue ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَعْرَاضٌ ?",
        "options": [
          "Tête",
          "Symptômes",
          "Après"
        ],
        "answer": 1,
        "why": "أَعْرَاضٌ signifie « Symptômes ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de شَعَرَ ?",
        "options": [
          "شُعُورٌ",
          "تَعَبٌ",
          "رَاحَةٌ"
        ],
        "answer": 0,
        "why": "شَعَرَ — يَشْعُرُ — شُعُورٌ : ressentir."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَعِبَ ?",
        "options": [
          "شُعُورٌ",
          "شَعَرَ",
          "تَعَبٌ"
        ],
        "answer": 2,
        "why": "تَعِبَ — يَتْعَبُ — تَعَبٌ : se fatiguer."
      },
      {
        "type": "input",
        "prompt": "Écris « Examen » en arabe (voyelles facultatives).",
        "answer": "فَحْصٌ",
        "accepted": [
          "فحص"
        ],
        "why": "فَحْصٌ signifie « Examen »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Qu’est-ce qui te fait mal ? » ?",
        "options": [
          "مَا الَّذِي يُؤْلِمُكَ؟",
          "هَلْ عِنْدَكَ حُمَّى؟",
          "لَا، وَلَكِنَّنِي أَشْعُرُ بِالتَّعَبِ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَا الَّذِي يُؤْلِمُكَ؟",
        "fr": "Qu’est-ce qui te fait mal ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "عِنْدِي أَلَمٌ فِي الرَّأْسِ.",
        "fr": "J’ai mal à la tête."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ عِنْدَكَ حُمَّى؟",
        "fr": "As-tu de la fièvre ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "لَا، وَلَكِنَّنِي أَشْعُرُ بِالتَّعَبِ.",
        "fr": "Non, mais je ressens de la fatigue."
      }
    ],
    "writing": {
      "prompt": "Écris et joue un dialogue de consultation avec quatre symptômes, deux questions et trois conseils.",
      "modelAr": "شَعَرْتُ بِأَلَمٍ فِي رَأْسِي فَذَهَبْتُ إِلَى الطَّبِيبِ. سَأَلَنِي عَنِ الْأَعْرَاضِ وَفَحَصَنِي. قَالَ إِنَّهُ يَجِبُ أَنْ أَرْتَاحَ وَأَنْ أَشْرَبَ مَاءً كَافِيًا.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Santé et rendez-vous médical ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue شَعَرَ et تَعِبَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Écris et joue un dialogue de consultation avec quatre symptômes, deux questions et trois conseils."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-15-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 15,
    "month": 8,
    "emoji": "🛎️",
    "title": "Hôtel : réclamations et départ",
    "minutes": 135,
    "goal": "Signaler un problème et demander une solution.",
    "grammar": [
      {
        "title": "Décrire un problème",
        "body": "الْغُرْفَةُ لَيْسَتْ نَظِيفَةً « la chambre n’est pas propre » ; لَا يَعْمَلُ الْمُكَيِّفُ « la climatisation ne fonctionne pas ». Distingue la négation de la phrase nominale et celle du verbe."
      },
      {
        "title": "Demander poliment",
        "body": "هَلْ يُمْكِنُ أَنْ تُسَاعِدَنِي؟ « pouvez-vous m’aider ? ». La structure يُمْكِنُ أَنْ est suivie du subjonctif. أَرْجُو « je prie/je souhaite » est une autre possibilité de requête formelle."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : عَفْوًا، الْمُكَيِّفُ لَا يَعْمَلُ. Lis ensuite la réponse : أَنَا آسِفٌ، هَلْ أُسَاعِدُكَ؟ Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "وَصَلْتُ إِلَى الْفُنْدُقِ، وَلَكِنَّ الْغُرْفَةَ لَمْ تَكُنْ هَادِئَةً. اِتَّصَلْتُ بِالِاسْتِقْبَالِ وَطَلَبْتُ غُرْفَةً أُخْرَى. سَاعَدَنِي الْمُوَظَّفُ وَغَيَّرَ الْغُرْفَةَ.",
      "fr": "Je suis arrivé à l’hôtel, mais la chambre n’était pas calme. J’ai appelé la réception et demandé une autre chambre. L’employé m’a aidé et a changé la chambre."
    },
    "examples": [
      {
        "ar": "عَفْوًا، الْمُكَيِّفُ لَا يَعْمَلُ.",
        "fr": "Excusez-moi, la climatisation ne fonctionne pas.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مُكَيِّفٌ",
              "مُكَيِّفٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أَنَا آسِفٌ، هَلْ أُسَاعِدُكَ؟",
        "fr": "Je suis désolé, puis-je vous aider ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "سَاعَدَ",
              "سَاعَدَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ يُمْكِنُ أَنْ تُغَيِّرَ الْغُرْفَةَ؟",
        "fr": "Pourriez-vous changer la chambre ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، سَنُحَضِّرُ غُرْفَةً أُخْرَى.",
        "fr": "Oui, nous préparerons une autre chambre.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "سَاعَدَ",
        "present": "يُسَاعِدُ",
        "masdar": "مُسَاعَدَةٌ",
        "fr": "aider",
        "lookup": "ساعد"
      },
      {
        "past": "حَجَزَ",
        "present": "يَحْجِزُ",
        "masdar": "حَجْزٌ",
        "fr": "réserver",
        "lookup": "حجز"
      }
    ],
    "words": [
      [
        "مُكَيِّفٌ",
        "Climatisation"
      ],
      [
        "اِسْتِقْبَالٌ",
        "Réception"
      ],
      [
        "شَكْوَى",
        "Réclamation"
      ],
      [
        "مُوَظَّفٌ",
        "Employé"
      ],
      [
        "هَادِئٌ",
        "Calme"
      ],
      [
        "نَظِيفٌ",
        "Propre"
      ],
      [
        "حَلٌّ",
        "Solution"
      ],
      [
        "مُسَاعَدَةٌ",
        "Aide"
      ],
      [
        "مُغَادَرَةٌ",
        "Départ"
      ],
      [
        "سَاعَدَ",
        "aider (accompli)"
      ],
      [
        "حَجَزَ",
        "réserver (accompli)"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ],
      [
        "بَعْدَ",
        "Après"
      ],
      [
        "قَبْلَ",
        "Avant"
      ]
    ],
    "dialect": [
      {
        "msa": "الْمُكَيِّفُ لَا يَعْمَلُ.",
        "levant": "الْمْكَيِّفْ مَا بِشْتِغِلْ.",
        "fr": "La climatisation ne fonctionne pas.",
        "note": "مَا بِشْتِغِلْ est une négation orale fréquente du fonctionnement."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel tour est poli pour demander de l’aide ?",
        "options": [
          "هَلْ يُمْكِنُ أَنْ تُسَاعِدَنِي؟",
          "أَيْنَ أَنَا؟",
          "هَذَا قَلَمٌ."
        ],
        "answer": 0,
        "why": "Règle du chapitre : Décrire un problème ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُكَيِّفٌ ?",
        "options": [
          "Climatisation",
          "Employé",
          "Aide"
        ],
        "answer": 0,
        "why": "مُكَيِّفٌ signifie « Climatisation ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie اِسْتِقْبَالٌ ?",
        "options": [
          "Propre",
          "aider (accompli)",
          "Réception"
        ],
        "answer": 2,
        "why": "اِسْتِقْبَالٌ signifie « Réception ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie شَكْوَى ?",
        "options": [
          "Parce que",
          "Réclamation",
          "Aide"
        ],
        "answer": 1,
        "why": "شَكْوَى signifie « Réclamation ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُوَظَّفٌ ?",
        "options": [
          "Employé",
          "aider (accompli)",
          "Après"
        ],
        "answer": 0,
        "why": "مُوَظَّفٌ signifie « Employé ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie هَادِئٌ ?",
        "options": [
          "Parce que",
          "Climatisation",
          "Calme"
        ],
        "answer": 2,
        "why": "هَادِئٌ signifie « Calme ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie نَظِيفٌ ?",
        "options": [
          "Réclamation",
          "Propre",
          "Après"
        ],
        "answer": 1,
        "why": "نَظِيفٌ signifie « Propre ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de سَاعَدَ ?",
        "options": [
          "مُسَاعَدَةٌ",
          "حَجْزٌ",
          "مُغَادَرَةٌ"
        ],
        "answer": 0,
        "why": "سَاعَدَ — يُسَاعِدُ — مُسَاعَدَةٌ : aider."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de حَجَزَ ?",
        "options": [
          "مُسَاعَدَةٌ",
          "سَاعَدَ",
          "حَجْزٌ"
        ],
        "answer": 2,
        "why": "حَجَزَ — يَحْجِزُ — حَجْزٌ : réserver."
      },
      {
        "type": "input",
        "prompt": "Écris « Solution » en arabe (voyelles facultatives).",
        "answer": "حَلٌّ",
        "accepted": [
          "حل"
        ],
        "why": "حَلٌّ signifie « Solution »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Excusez-moi, la climatisation ne fonctionne pas. » ?",
        "options": [
          "عَفْوًا، الْمُكَيِّفُ لَا يَعْمَلُ.",
          "هَلْ يُمْكِنُ أَنْ تُغَيِّرَ الْغُرْفَةَ؟",
          "نَعَمْ، سَنُحَضِّرُ غُرْفَةً أُخْرَى."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "عَفْوًا، الْمُكَيِّفُ لَا يَعْمَلُ.",
        "fr": "Excusez-moi, la climatisation ne fonctionne pas."
      },
      {
        "speaker": "سَامِي",
        "ar": "أَنَا آسِفٌ، هَلْ أُسَاعِدُكَ؟",
        "fr": "Je suis désolé, puis-je vous aider ?"
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ يُمْكِنُ أَنْ تُغَيِّرَ الْغُرْفَةَ؟",
        "fr": "Pourriez-vous changer la chambre ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، سَنُحَضِّرُ غُرْفَةً أُخْرَى.",
        "fr": "Oui, nous préparerons une autre chambre."
      }
    ],
    "writing": {
      "prompt": "Rédige un message de réclamation sur une chambre bruyante ou sale, puis demande un autre service.",
      "modelAr": "وَصَلْتُ إِلَى الْفُنْدُقِ، وَلَكِنَّ الْغُرْفَةَ لَمْ تَكُنْ هَادِئَةً. اِتَّصَلْتُ بِالِاسْتِقْبَالِ وَطَلَبْتُ غُرْفَةً أُخْرَى. سَاعَدَنِي الْمُوَظَّفُ وَغَيَّرَ الْغُرْفَةَ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Hôtel : réclamations et départ ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue سَاعَدَ et حَجَزَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Rédige un message de réclamation sur une chambre bruyante ou sale, puis demande un autre service."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-16-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 16,
    "month": 9,
    "emoji": "🎓",
    "title": "Études, examens et méthodes",
    "minutes": 135,
    "goal": "Décrire une manière d’apprendre et les difficultés rencontrées.",
    "grammar": [
      {
        "title": "Parce que et afin de",
        "body": "أُرَاجِعُ لِأَنَّ الِامْتِحَانَ قَرِيبٌ « je révise parce que l’examen approche » ; أُرَاجِعُ لِأَنْجَحَ « je révise pour réussir ». Distingue cause actuelle et finalité recherchée."
      },
      {
        "title": "Devoir et pouvoir",
        "body": "يَجِبُ أَنْ أَتَدَرَّبَ « je dois m’entraîner » ; أَسْتَطِيعُ أَنْ أَفْهَمَ « je peux comprendre ». Retenir les verbes avec أَنْ évite le calque de l’infinitif français."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : كَيْفَ تَسْتَعِدُّ لِلِامْتِحَانِ؟ Lis ensuite la réponse : أُرَاجِعُ الْمُفْرَدَاتِ وَأَكْتُبُ كُلَّ يَوْمٍ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أَسْتَعِدُّ لِلِامْتِحَانِ بِخُطَّةٍ أُسْبُوعِيَّةٍ. أُرَاجِعُ الْمُفْرَدَاتِ، وَأَحُلُّ التَّمَارِينَ، وَأَكْتُبُ نُصُوصًا قَصِيرَةً. إِذَا أَخْطَأْتُ، أُصَحِّحُ خَطَئِي وَأُعِيدُ التَّمْرِينَ.",
      "fr": "Je prépare l’examen avec un plan hebdomadaire. Je révise le vocabulaire, résous des exercices et écris de courts textes. Quand je me trompe, je corrige mon erreur et refais l’exercice."
    },
    "examples": [
      {
        "ar": "كَيْفَ تَسْتَعِدُّ لِلِامْتِحَانِ؟",
        "fr": "Comment prépares-tu l’examen ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "اِمْتِحَانٌ",
              "اِمْتِحَانٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أُرَاجِعُ الْمُفْرَدَاتِ وَأَكْتُبُ كُلَّ يَوْمٍ.",
        "fr": "Je révise le vocabulaire et j’écris chaque jour.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مُفْرَدَاتٌ",
              "مُفْرَدَاتٌ"
            ],
            [
              "كَتَبَ",
              "كَتَبَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "مَاذَا تَفْعَلُ إِذَا أَخْطَأْتَ؟",
        "fr": "Que fais-tu quand tu te trompes ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "خَطَأٌ",
              "خَطَأٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أُصَحِّحُ خَطَئِي وَأَتَدَرَّبُ مَرَّةً أُخْرَى.",
        "fr": "Je corrige mon erreur et m’entraîne encore.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "دَرَسَ",
        "present": "يَدْرُسُ",
        "masdar": "دِرَاسَةٌ",
        "fr": "étudier",
        "lookup": "درس"
      },
      {
        "past": "كَتَبَ",
        "present": "يَكْتُبُ",
        "masdar": "كِتَابَةٌ",
        "fr": "écrire",
        "lookup": "كتب"
      }
    ],
    "words": [
      [
        "اِمْتِحَانٌ",
        "Examen"
      ],
      [
        "مُفْرَدَاتٌ",
        "Vocabulaire"
      ],
      [
        "تَمْرِينٌ",
        "Exercice"
      ],
      [
        "خَطَأٌ",
        "Erreur"
      ],
      [
        "تَصْحِيحٌ",
        "Correction"
      ],
      [
        "مُرَاجَعَةٌ",
        "Révision"
      ],
      [
        "خُطَّةٌ",
        "Plan"
      ],
      [
        "نَجَاحٌ",
        "Réussite"
      ],
      [
        "مُسْتَوًى",
        "Niveau"
      ],
      [
        "دَرَسَ",
        "étudier (accompli)"
      ],
      [
        "دِرَاسَةٌ",
        "maṣdar : étudier"
      ],
      [
        "كَتَبَ",
        "écrire (accompli)"
      ],
      [
        "كِتَابَةٌ",
        "maṣdar : écrire"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ]
    ],
    "dialect": [
      {
        "msa": "عِنْدِي اِمْتِحَانٌ غَدًا.",
        "levant": "عِنْدِي إِمْتِحَانْ بُكْرَا.",
        "fr": "J’ai un examen demain.",
        "note": "بُكْرَا est très courant pour « demain » dans le dialecte levantin."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle structure exprime le but ?",
        "options": [
          "أُرَاجِعُ لِأَنْجَحَ",
          "أُرَاجِعُ لِأَنَّنِي نَاجِحٌ",
          "اِمْتِحَانٌ كَبِيرٌ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Parce que et afin de ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie اِمْتِحَانٌ ?",
        "options": [
          "Examen",
          "Erreur",
          "Réussite"
        ],
        "answer": 0,
        "why": "اِمْتِحَانٌ signifie « Examen ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُفْرَدَاتٌ ?",
        "options": [
          "Révision",
          "étudier (accompli)",
          "Vocabulaire"
        ],
        "answer": 2,
        "why": "مُفْرَدَاتٌ signifie « Vocabulaire ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie تَمْرِينٌ ?",
        "options": [
          "écrire (accompli)",
          "Exercice",
          "Réussite"
        ],
        "answer": 1,
        "why": "تَمْرِينٌ signifie « Exercice ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie خَطَأٌ ?",
        "options": [
          "Erreur",
          "étudier (accompli)",
          "Parce que"
        ],
        "answer": 0,
        "why": "خَطَأٌ signifie « Erreur ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie تَصْحِيحٌ ?",
        "options": [
          "écrire (accompli)",
          "Examen",
          "Correction"
        ],
        "answer": 2,
        "why": "تَصْحِيحٌ signifie « Correction ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُرَاجَعَةٌ ?",
        "options": [
          "Exercice",
          "Révision",
          "Parce que"
        ],
        "answer": 1,
        "why": "مُرَاجَعَةٌ signifie « Révision ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de دَرَسَ ?",
        "options": [
          "دِرَاسَةٌ",
          "كِتَابَةٌ",
          "مُسْتَوًى"
        ],
        "answer": 0,
        "why": "دَرَسَ — يَدْرُسُ — دِرَاسَةٌ : étudier."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de كَتَبَ ?",
        "options": [
          "دِرَاسَةٌ",
          "دَرَسَ",
          "كِتَابَةٌ"
        ],
        "answer": 2,
        "why": "كَتَبَ — يَكْتُبُ — كِتَابَةٌ : écrire."
      },
      {
        "type": "input",
        "prompt": "Écris « Plan » en arabe (voyelles facultatives).",
        "answer": "خُطَّةٌ",
        "accepted": [
          "خطة"
        ],
        "why": "خُطَّةٌ signifie « Plan »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Comment prépares-tu l’examen ? » ?",
        "options": [
          "كَيْفَ تَسْتَعِدُّ لِلِامْتِحَانِ؟",
          "مَاذَا تَفْعَلُ إِذَا أَخْطَأْتَ؟",
          "أُصَحِّحُ خَطَئِي وَأَتَدَرَّبُ مَرَّةً أُخْرَى."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "كَيْفَ تَسْتَعِدُّ لِلِامْتِحَانِ؟",
        "fr": "Comment prépares-tu l’examen ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أُرَاجِعُ الْمُفْرَدَاتِ وَأَكْتُبُ كُلَّ يَوْمٍ.",
        "fr": "Je révise le vocabulaire et j’écris chaque jour."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا تَفْعَلُ إِذَا أَخْطَأْتَ؟",
        "fr": "Que fais-tu quand tu te trompes ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أُصَحِّحُ خَطَئِي وَأَتَدَرَّبُ مَرَّةً أُخْرَى.",
        "fr": "Je corrige mon erreur et m’entraîne encore."
      }
    ],
    "writing": {
      "prompt": "Présente ta méthode de travail hebdomadaire en dix phrases, avec objectifs et techniques de correction.",
      "modelAr": "أَسْتَعِدُّ لِلِامْتِحَانِ بِخُطَّةٍ أُسْبُوعِيَّةٍ. أُرَاجِعُ الْمُفْرَدَاتِ، وَأَحُلُّ التَّمَارِينَ، وَأَكْتُبُ نُصُوصًا قَصِيرَةً. إِذَا أَخْطَأْتُ، أُصَحِّحُ خَطَئِي وَأُعِيدُ التَّمْرِينَ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Études, examens et méthodes ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue دَرَسَ et كَتَبَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Présente ta méthode de travail hebdomadaire en dix phrases, avec objectifs et techniques de correction."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-17-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 17,
    "month": 9,
    "emoji": "💼",
    "title": "Travail, collègues et tâches",
    "minutes": 135,
    "goal": "Décrire son emploi, un projet et des responsabilités.",
    "grammar": [
      {
        "title": "Le travail en phrases articulées",
        "body": "أَعْمَلُ فِي شَرِكَةٍ « je travaille dans une entreprise » ; أَنَا مَسْؤُولٌ عَنْ فَحْصِ الْبَرْنَامَجِ « je suis responsable de tester le logiciel ». La préposition عَنْ accompagne مَسْؤُولٌ."
      },
      {
        "title": "Planifier en équipe",
        "body": "نَجْتَمِعُ لِنُنَاقِشَ الْمَشْرُوعَ « nous nous réunissons pour discuter du projet ». Le but peut être exprimé par لِـ + subjonctif. Utilise ثُمَّ, بَعْدَ ذَلِكَ pour expliquer un processus."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَاذَا تَعْمَلُ؟ Lis ensuite la réponse : أَعْمَلُ فِي اخْتِبَارِ الْبَرَامِجِ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أَعْمَلُ فِي فَرِيقٍ يَخْتَبِرُ بَرَامِجَ الْحَاسُوبِ. فِي الصَّبَاحِ نَجْتَمِعُ لِنَتَحَدَّثَ عَنِ الْمَهَامِّ. بَعْدَ ذَلِكَ أُرَاجِعُ الْمُتَطَلَّبَاتِ، وَأَكْتُبُ حَالَاتِ الِاخْتِبَارِ.",
      "fr": "Je travaille dans une équipe qui teste des logiciels. Le matin, nous nous réunissons pour parler des tâches. Ensuite, je révise les exigences et j’écris des cas de test."
    },
    "examples": [
      {
        "ar": "مَاذَا تَعْمَلُ؟",
        "fr": "Quel est ton métier ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "عَمِلَ",
              "عَمِلَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أَعْمَلُ فِي اخْتِبَارِ الْبَرَامِجِ.",
        "fr": "Je travaille dans le test logiciel.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "اِخْتِبَارٌ",
              "اِخْتِبَارٌ"
            ],
            [
              "عَمِلَ",
              "عَمِلَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "مَاذَا تَفْعَلُ صَبَاحًا؟",
        "fr": "Que fais-tu le matin ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "أَجْتَمِعُ مَعَ فَرِيقِي وَأُرَاجِعُ الْمَهَامَّ.",
        "fr": "Je me réunis avec mon équipe et je révise les tâches.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "فَرِيقٌ",
              "فَرِيقٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "عَمِلَ",
        "present": "يَعْمَلُ",
        "masdar": "عَمَلٌ",
        "fr": "travailler",
        "lookup": "عمل"
      },
      {
        "past": "كَتَبَ",
        "present": "يَكْتُبُ",
        "masdar": "كِتَابَةٌ",
        "fr": "écrire",
        "lookup": "كتب"
      }
    ],
    "words": [
      [
        "شَرِكَةٌ",
        "Entreprise"
      ],
      [
        "فَرِيقٌ",
        "Équipe"
      ],
      [
        "مَشْرُوعٌ",
        "Projet"
      ],
      [
        "مُتَطَلَّبَاتٌ",
        "Exigences"
      ],
      [
        "اِخْتِبَارٌ",
        "Test"
      ],
      [
        "بَرْنَامَجٌ",
        "Logiciel"
      ],
      [
        "مَهَمَّةٌ",
        "Tâche"
      ],
      [
        "مَسْؤُولٌ",
        "Responsable"
      ],
      [
        "اِجْتِمَاعٌ",
        "Réunion"
      ],
      [
        "عَمِلَ",
        "travailler (accompli)"
      ],
      [
        "كَتَبَ",
        "écrire (accompli)"
      ],
      [
        "كِتَابَةٌ",
        "maṣdar : écrire"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ],
      [
        "بَعْدَ",
        "Après"
      ]
    ],
    "dialect": [
      {
        "msa": "أَعْمَلُ فِي شَرِكَةٍ.",
        "levant": "بِشْتِغِلْ بِشَرِكِة.",
        "fr": "Je travaille dans une entreprise.",
        "note": "بِشْتِغِلْ est une forme courante de « je travaille » au Levant."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel mot arabe correspond à « équipe » ?",
        "options": [
          "فَرِيقٌ",
          "مَحَطَّةٌ",
          "طَبِيبٌ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Le travail en phrases articulées ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie شَرِكَةٌ ?",
        "options": [
          "Entreprise",
          "Exigences",
          "Responsable"
        ],
        "answer": 0,
        "why": "شَرِكَةٌ signifie « Entreprise ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie فَرِيقٌ ?",
        "options": [
          "Logiciel",
          "travailler (accompli)",
          "Équipe"
        ],
        "answer": 2,
        "why": "فَرِيقٌ signifie « Équipe ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَشْرُوعٌ ?",
        "options": [
          "maṣdar : écrire",
          "Projet",
          "Responsable"
        ],
        "answer": 1,
        "why": "مَشْرُوعٌ signifie « Projet ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُتَطَلَّبَاتٌ ?",
        "options": [
          "Exigences",
          "travailler (accompli)",
          "Mais"
        ],
        "answer": 0,
        "why": "مُتَطَلَّبَاتٌ signifie « Exigences ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie اِخْتِبَارٌ ?",
        "options": [
          "maṣdar : écrire",
          "Entreprise",
          "Test"
        ],
        "answer": 2,
        "why": "اِخْتِبَارٌ signifie « Test ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie بَرْنَامَجٌ ?",
        "options": [
          "Projet",
          "Logiciel",
          "Mais"
        ],
        "answer": 1,
        "why": "بَرْنَامَجٌ signifie « Logiciel ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de عَمِلَ ?",
        "options": [
          "عَمَلٌ",
          "كِتَابَةٌ",
          "اِجْتِمَاعٌ"
        ],
        "answer": 0,
        "why": "عَمِلَ — يَعْمَلُ — عَمَلٌ : travailler."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de كَتَبَ ?",
        "options": [
          "عَمَلٌ",
          "عَمِلَ",
          "كِتَابَةٌ"
        ],
        "answer": 2,
        "why": "كَتَبَ — يَكْتُبُ — كِتَابَةٌ : écrire."
      },
      {
        "type": "input",
        "prompt": "Écris « Tâche » en arabe (voyelles facultatives).",
        "answer": "مَهَمَّةٌ",
        "accepted": [
          "مهمة"
        ],
        "why": "مَهَمَّةٌ signifie « Tâche »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Quel est ton métier ? » ?",
        "options": [
          "مَاذَا تَعْمَلُ؟",
          "مَاذَا تَفْعَلُ صَبَاحًا؟",
          "أَجْتَمِعُ مَعَ فَرِيقِي وَأُرَاجِعُ الْمَهَامَّ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا تَعْمَلُ؟",
        "fr": "Quel est ton métier ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أَعْمَلُ فِي اخْتِبَارِ الْبَرَامِجِ.",
        "fr": "Je travaille dans le test logiciel."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا تَفْعَلُ صَبَاحًا؟",
        "fr": "Que fais-tu le matin ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أَجْتَمِعُ مَعَ فَرِيقِي وَأُرَاجِعُ الْمَهَامَّ.",
        "fr": "Je me réunis avec mon équipe et je révise les tâches."
      }
    ],
    "writing": {
      "prompt": "Rédige une courte présentation professionnelle : missions, tâches, réunions et objectifs.",
      "modelAr": "أَعْمَلُ فِي فَرِيقٍ يَخْتَبِرُ بَرَامِجَ الْحَاسُوبِ. فِي الصَّبَاحِ نَجْتَمِعُ لِنَتَحَدَّثَ عَنِ الْمَهَامِّ. بَعْدَ ذَلِكَ أُرَاجِعُ الْمُتَطَلَّبَاتِ، وَأَكْتُبُ حَالَاتِ الِاخْتِبَارِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Travail, collègues et tâches ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue عَمِلَ et كَتَبَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Rédige une courte présentation professionnelle : missions, tâches, réunions et objectifs."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-18-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 18,
    "month": 9,
    "emoji": "📱",
    "title": "Téléphone, messages et rendez-vous",
    "minutes": 135,
    "goal": "Téléphoner poliment et reporter un rendez-vous.",
    "grammar": [
      {
        "title": "Phrases au téléphone",
        "body": "هَلْ يُمْكِنُنِي أَنْ أَتَحَدَّثَ مَعَ ...؟ « Puis-je parler à ... ? » ; أُرِيدُ أَنْ أُغَيِّرَ الْمَوْعِدَ « je voudrais changer le rendez-vous ». Ces verbes de demande régissent أَنْ."
      },
      {
        "title": "Reporter et confirmer",
        "body": "سَنُؤَجِّلُ الْمَوْعِدَ إِلَى الْغَدِ « nous reporterons le rendez-vous à demain » ; هَلْ تُؤَكِّدُ الْمَوْعِدَ؟ « Confirmez-vous le rendez-vous ? ». Note la différence entre confirmer et déplacer."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَرْحَبًا، هَلْ يُمْكِنُنِي أَنْ أُكَلِّمَ سَامِيًا؟ Lis ensuite la réponse : نَعَمْ، أَنَا سَامِي. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "كَانَ عِنْدِي مَوْعِدٌ فِي الْمَسَاءِ، وَلَكِنَّنِي سَأَتَأَخَّرُ. اِتَّصَلْتُ بِصَدِيقِي وَطَلَبْتُ مِنْهُ أَنْ نُغَيِّرَ الْمَوْعِدَ. وَافَقَ وَأَرْسَلَ لِي رِسَالَةَ تَأْكِيدٍ.",
      "fr": "J’avais un rendez-vous le soir, mais j’allais être en retard. J’ai appelé mon ami et lui ai demandé de déplacer le rendez-vous. Il a accepté et m’a envoyé un message de confirmation."
    },
    "examples": [
      {
        "ar": "مَرْحَبًا، هَلْ يُمْكِنُنِي أَنْ أُكَلِّمَ سَامِيًا؟",
        "fr": "Bonjour, puis-je parler à Sami ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، أَنَا سَامِي.",
        "fr": "Oui, c’est Sami.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ نَسْتَطِيعُ أَنْ نُؤَجِّلَ الْمَوْعِدَ؟",
        "fr": "Pouvons-nous reporter le rendez-vous ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مَوْعِدٌ",
              "مَوْعِدٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "بِالتَّأْكِيدِ، سَأُرْسِلُ لَكَ رِسَالَةً.",
        "fr": "Bien sûr, je t’enverrai un message.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "رِسَالَةٌ",
              "رِسَالَةٌ"
            ],
            [
              "تَأْكِيدٌ",
              "تَأْكِيدٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "أَرْسَلَ",
        "present": "يُرْسِلُ",
        "masdar": "إِرْسَالٌ",
        "fr": "envoyer",
        "lookup": "أرسل"
      },
      {
        "past": "قَابَلَ",
        "present": "يُقَابِلُ",
        "masdar": "مُقَابَلَةٌ",
        "fr": "rencontrer",
        "lookup": "قابل"
      }
    ],
    "words": [
      [
        "اِتِّصَالٌ",
        "Appel"
      ],
      [
        "هَاتِفٌ",
        "Téléphone"
      ],
      [
        "رِسَالَةٌ",
        "Message"
      ],
      [
        "مَوْعِدٌ",
        "Rendez-vous"
      ],
      [
        "تَأْكِيدٌ",
        "Confirmation"
      ],
      [
        "تَأْخِيرٌ",
        "Retard"
      ],
      [
        "تَأْجِيلٌ",
        "Report"
      ],
      [
        "مُكَالَمَةٌ",
        "Communication téléphonique"
      ],
      [
        "صَوْتٌ",
        "Voix"
      ],
      [
        "أَرْسَلَ",
        "envoyer (accompli)"
      ],
      [
        "إِرْسَالٌ",
        "maṣdar : envoyer"
      ],
      [
        "قَابَلَ",
        "rencontrer (accompli)"
      ],
      [
        "مُقَابَلَةٌ",
        "maṣdar : rencontrer"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ]
    ],
    "dialect": [
      {
        "msa": "مُمْكِنْ نْأَجِّلْ الْمَوْعِدَ؟",
        "levant": "فِينَا نْأَجِّلْ الْمَوْعِدْ؟",
        "fr": "Peut-on reporter le rendez-vous ?",
        "note": "فِينَا exprime souvent la possibilité pour « nous » en levantin."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel mot signifie « report (d’un rendez-vous) » ?",
        "options": [
          "تَأْجِيلٌ",
          "تَأْكِيدٌ",
          "تَفْضِيلٌ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Phrases au téléphone ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie اِتِّصَالٌ ?",
        "options": [
          "Appel",
          "Rendez-vous",
          "Communication téléphonique"
        ],
        "answer": 0,
        "why": "اِتِّصَالٌ signifie « Appel ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie هَاتِفٌ ?",
        "options": [
          "Retard",
          "envoyer (accompli)",
          "Téléphone"
        ],
        "answer": 2,
        "why": "هَاتِفٌ signifie « Téléphone ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie رِسَالَةٌ ?",
        "options": [
          "rencontrer (accompli)",
          "Message",
          "Communication téléphonique"
        ],
        "answer": 1,
        "why": "رِسَالَةٌ signifie « Message ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَوْعِدٌ ?",
        "options": [
          "Rendez-vous",
          "envoyer (accompli)",
          "Parce que"
        ],
        "answer": 0,
        "why": "مَوْعِدٌ signifie « Rendez-vous ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie تَأْكِيدٌ ?",
        "options": [
          "rencontrer (accompli)",
          "Appel",
          "Confirmation"
        ],
        "answer": 2,
        "why": "تَأْكِيدٌ signifie « Confirmation ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie تَأْخِيرٌ ?",
        "options": [
          "Message",
          "Retard",
          "Parce que"
        ],
        "answer": 1,
        "why": "تَأْخِيرٌ signifie « Retard ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَرْسَلَ ?",
        "options": [
          "إِرْسَالٌ",
          "مُقَابَلَةٌ",
          "صَوْتٌ"
        ],
        "answer": 0,
        "why": "أَرْسَلَ — يُرْسِلُ — إِرْسَالٌ : envoyer."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَابَلَ ?",
        "options": [
          "إِرْسَالٌ",
          "أَرْسَلَ",
          "مُقَابَلَةٌ"
        ],
        "answer": 2,
        "why": "قَابَلَ — يُقَابِلُ — مُقَابَلَةٌ : rencontrer."
      },
      {
        "type": "input",
        "prompt": "Écris « Report » en arabe (voyelles facultatives).",
        "answer": "تَأْجِيلٌ",
        "accepted": [
          "تاجيل"
        ],
        "why": "تَأْجِيلٌ signifie « Report »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Bonjour, puis-je parler à Sami ? » ?",
        "options": [
          "مَرْحَبًا، هَلْ يُمْكِنُنِي أَنْ أُكَلِّمَ سَامِيًا؟",
          "هَلْ نَسْتَطِيعُ أَنْ نُؤَجِّلَ الْمَوْعِدَ؟",
          "بِالتَّأْكِيدِ، سَأُرْسِلُ لَكَ رِسَالَةً."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَرْحَبًا، هَلْ يُمْكِنُنِي أَنْ أُكَلِّمَ سَامِيًا؟",
        "fr": "Bonjour, puis-je parler à Sami ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، أَنَا سَامِي.",
        "fr": "Oui, c’est Sami."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ نَسْتَطِيعُ أَنْ نُؤَجِّلَ الْمَوْعِدَ؟",
        "fr": "Pouvons-nous reporter le rendez-vous ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "بِالتَّأْكِيدِ، سَأُرْسِلُ لَكَ رِسَالَةً.",
        "fr": "Bien sûr, je t’enverrai un message."
      }
    ],
    "writing": {
      "prompt": "Joue deux appels : reporter un rendez-vous et laisser un message à une personne absente.",
      "modelAr": "كَانَ عِنْدِي مَوْعِدٌ فِي الْمَسَاءِ، وَلَكِنَّنِي سَأَتَأَخَّرُ. اِتَّصَلْتُ بِصَدِيقِي وَطَلَبْتُ مِنْهُ أَنْ نُغَيِّرَ الْمَوْعِدَ. وَافَقَ وَأَرْسَلَ لِي رِسَالَةَ تَأْكِيدٍ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Téléphone, messages et rendez-vous ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue أَرْسَلَ et قَابَلَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Joue deux appels : reporter un rendez-vous et laisser un message à une personne absente."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-19-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 19,
    "month": 9,
    "emoji": "💭",
    "title": "Émotions et états personnels",
    "minutes": 135,
    "goal": "Nommer ses émotions et en expliquer les causes.",
    "grammar": [
      {
        "title": "Je me sens…",
        "body": "أَشْعُرُ بِالسَّعَادَةِ « je ressens du bonheur » ; أَشْعُرُ بِالْقَلَقِ « je ressens de l’inquiétude ». Le substantif est au génitif après بِـ. La formulation adjectivale أَنَا سَعِيدٌ est également courante."
      },
      {
        "title": "Parler des causes",
        "body": "أَنَا حَزِينٌ لِأَنَّ صَدِيقِي سَافَرَ « je suis triste parce que mon ami est parti ». Essaie de distinguer l’état émotionnel (nom/adjectif) et l’événement (verbe au passé) qui l’explique."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : كَيْفَ تَشْعُرُ الْيَوْمَ؟ Lis ensuite la réponse : أَشْعُرُ بِالسَّعَادَةِ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "فَرِحْتُ لِأَنَّنِي نَجَحْتُ فِي الِامْتِحَانِ. قَبْلَ النَّتِيجَةِ كُنْتُ قَلِقًا قَلِيلًا. بَعْدَ أَنْ عَرَفْتُ النَّتِيجَةَ، شَعَرْتُ بِالرَّاحَةِ وَالسَّعَادَةِ.",
      "fr": "J’étais heureux parce que j’avais réussi mon examen. Avant le résultat, j’étais un peu inquiet. Après avoir connu le résultat, j’ai ressenti du soulagement et du bonheur."
    },
    "examples": [
      {
        "ar": "كَيْفَ تَشْعُرُ الْيَوْمَ؟",
        "fr": "Comment te sens-tu aujourd’hui ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "شَعَرَ",
              "شَعَرَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أَشْعُرُ بِالسَّعَادَةِ.",
        "fr": "Je ressens du bonheur.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "سَعَادَةٌ",
              "سَعَادَةٌ"
            ],
            [
              "شَعَرَ",
              "شَعَرَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لِمَاذَا كُنْتَ قَلِقًا أَمْسِ؟",
        "fr": "Pourquoi étais-tu inquiet hier ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "قَلَقٌ",
              "قَلَقٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لِأَنَّنِي كُنْتُ أَنْتَظِرُ نَتِيجَةً مُهِمَّةً.",
        "fr": "Parce que j’attendais un résultat important.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "نَتِيجَةٌ",
              "نَتِيجَةٌ"
            ],
            [
              "اِنْتَظَرَ",
              "اِنْتَظَرَ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "شَعَرَ",
        "present": "يَشْعُرُ",
        "masdar": "شُعُورٌ",
        "fr": "ressentir",
        "lookup": "شعر"
      },
      {
        "past": "اِنْتَظَرَ",
        "present": "يَنْتَظِرُ",
        "masdar": "اِنْتِظَارٌ",
        "fr": "attendre",
        "lookup": "انتظر"
      }
    ],
    "words": [
      [
        "سَعَادَةٌ",
        "Bonheur"
      ],
      [
        "حُزْنٌ",
        "Tristesse"
      ],
      [
        "قَلَقٌ",
        "Anxiété"
      ],
      [
        "فَرَحٌ",
        "Joie"
      ],
      [
        "رَاحَةٌ",
        "Soulagement"
      ],
      [
        "غَضَبٌ",
        "Colère"
      ],
      [
        "خَوْفٌ",
        "Peur"
      ],
      [
        "نَتِيجَةٌ",
        "Résultat"
      ],
      [
        "شُعُورٌ",
        "Sentiment"
      ],
      [
        "شَعَرَ",
        "ressentir (accompli)"
      ],
      [
        "اِنْتَظَرَ",
        "attendre (accompli)"
      ],
      [
        "اِنْتِظَارٌ",
        "maṣdar : attendre"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ],
      [
        "بَعْدَ",
        "Après"
      ]
    ],
    "dialect": [
      {
        "msa": "أَنَا حَزِينٌ.",
        "levant": "أَنَا زَعْلَانْ.",
        "fr": "Je suis triste.",
        "note": "زَعْلَانْ est fréquent pour « triste / contrarié » en levantin."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle préposition suit أَشْعُرُ dans ce sens ?",
        "options": [
          "بِـ",
          "إِلَى",
          "مِنْ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Je me sens… ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie سَعَادَةٌ ?",
        "options": [
          "Bonheur",
          "Joie",
          "Résultat"
        ],
        "answer": 0,
        "why": "سَعَادَةٌ signifie « Bonheur ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie حُزْنٌ ?",
        "options": [
          "Colère",
          "ressentir (accompli)",
          "Tristesse"
        ],
        "answer": 2,
        "why": "حُزْنٌ signifie « Tristesse ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie قَلَقٌ ?",
        "options": [
          "maṣdar : attendre",
          "Anxiété",
          "Résultat"
        ],
        "answer": 1,
        "why": "قَلَقٌ signifie « Anxiété ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie فَرَحٌ ?",
        "options": [
          "Joie",
          "ressentir (accompli)",
          "Mais"
        ],
        "answer": 0,
        "why": "فَرَحٌ signifie « Joie ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie رَاحَةٌ ?",
        "options": [
          "maṣdar : attendre",
          "Bonheur",
          "Soulagement"
        ],
        "answer": 2,
        "why": "رَاحَةٌ signifie « Soulagement ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie غَضَبٌ ?",
        "options": [
          "Anxiété",
          "Colère",
          "Mais"
        ],
        "answer": 1,
        "why": "غَضَبٌ signifie « Colère ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de شَعَرَ ?",
        "options": [
          "شُعُورٌ",
          "اِنْتِظَارٌ",
          "نَتِيجَةٌ"
        ],
        "answer": 0,
        "why": "شَعَرَ — يَشْعُرُ — شُعُورٌ : ressentir."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِنْتَظَرَ ?",
        "options": [
          "شُعُورٌ",
          "شَعَرَ",
          "اِنْتِظَارٌ"
        ],
        "answer": 2,
        "why": "اِنْتَظَرَ — يَنْتَظِرُ — اِنْتِظَارٌ : attendre."
      },
      {
        "type": "input",
        "prompt": "Écris « Peur » en arabe (voyelles facultatives).",
        "answer": "خَوْفٌ",
        "accepted": [
          "خوف"
        ],
        "why": "خَوْفٌ signifie « Peur »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Comment te sens-tu aujourd’hui ? » ?",
        "options": [
          "كَيْفَ تَشْعُرُ الْيَوْمَ؟",
          "لِمَاذَا كُنْتَ قَلِقًا أَمْسِ؟",
          "لِأَنَّنِي كُنْتُ أَنْتَظِرُ نَتِيجَةً مُهِمَّةً."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "كَيْفَ تَشْعُرُ الْيَوْمَ؟",
        "fr": "Comment te sens-tu aujourd’hui ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أَشْعُرُ بِالسَّعَادَةِ.",
        "fr": "Je ressens du bonheur."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "لِمَاذَا كُنْتَ قَلِقًا أَمْسِ؟",
        "fr": "Pourquoi étais-tu inquiet hier ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "لِأَنَّنِي كُنْتُ أَنْتَظِرُ نَتِيجَةً مُهِمَّةً.",
        "fr": "Parce que j’attendais un résultat important."
      }
    ],
    "writing": {
      "prompt": "Écris un journal de cinq journées : émotion dominante, événement déclencheur et réaction.",
      "modelAr": "فَرِحْتُ لِأَنَّنِي نَجَحْتُ فِي الِامْتِحَانِ. قَبْلَ النَّتِيجَةِ كُنْتُ قَلِقًا قَلِيلًا. بَعْدَ أَنْ عَرَفْتُ النَّتِيجَةَ، شَعَرْتُ بِالرَّاحَةِ وَالسَّعَادَةِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Émotions et états personnels ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue شَعَرَ et اِنْتَظَرَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Écris un journal de cinq journées : émotion dominante, événement déclencheur et réaction."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-20-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 20,
    "month": 9,
    "emoji": "📜",
    "title": "Raconter une anecdote en ordre",
    "minutes": 135,
    "goal": "Relier des événements passés en un récit cohérent.",
    "grammar": [
      {
        "title": "D’abord, ensuite, enfin",
        "body": "أَوَّلًا، ثُمَّ، بَعْدَ ذَلِكَ، أَخِيرًا structurent le récit. Ils ne changent pas à eux seuls le temps du verbe ; c’est l’aspect verbal et le contexte qui situent chaque action."
      },
      {
        "title": "Quand et pendant",
        "body": "عِنْدَمَا وَصَلْتُ « lorsque je suis arrivé » ; بَيْنَمَا كُنْتُ أَنْتَظِرُ « pendant que j’attendais ». Combine l’accompli pour l’événement et كَانَ + inaccompli pour l’arrière-plan."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَاذَا حَدَثَ صَبَاحًا؟ Lis ensuite la réponse : رَأَيْتُ صَدِيقًا قَدِيمًا. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أَوَّلًا خَرَجْتُ مِنَ الْبَيْتِ مُبَكِّرًا. بَيْنَمَا كُنْتُ أَنْتَظِرُ الْحَافِلَةَ، رَأَيْتُ صَدِيقًا قَدِيمًا. تَحَدَّثْنَا قَلِيلًا، ثُمَّ رَكِبْنَا الْحَافِلَةَ مَعًا. أَخِيرًا وَصَلْنَا إِلَى الْعَمَلِ.",
      "fr": "D’abord, je suis sorti tôt de chez moi. Alors que j’attendais le bus, j’ai vu un ancien ami. Nous avons parlé un peu, puis pris le bus ensemble. Enfin, nous sommes arrivés au travail."
    },
    "examples": [
      {
        "ar": "مَاذَا حَدَثَ صَبَاحًا؟",
        "fr": "Que s’est-il passé ce matin ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "حَدَثَ",
              "حَدَثَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "رَأَيْتُ صَدِيقًا قَدِيمًا.",
        "fr": "J’ai vu un ancien ami.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "رَأَى",
              "رَأَى"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "مَاذَا فَعَلْتُمَا بَعْدَ ذَلِكَ؟",
        "fr": "Qu’avez-vous fait ensuite, vous deux ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "بَعْدَ ذَلِكَ",
              "بَعْدَ ذَلِكَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "تَحَدَّثْنَا ثُمَّ ذَهَبْنَا إِلَى الْعَمَلِ.",
        "fr": "Nous avons parlé puis sommes allés au travail.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "حَدَثَ",
              "حَدَثَ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "رَأَى",
        "present": "يَرَى",
        "masdar": "رُؤْيَةٌ",
        "fr": "voir",
        "lookup": "رأى"
      },
      {
        "past": "اِنْتَظَرَ",
        "present": "يَنْتَظِرُ",
        "masdar": "اِنْتِظَارٌ",
        "fr": "attendre",
        "lookup": "انتظر"
      }
    ],
    "words": [
      [
        "أَوَّلًا",
        "D’abord"
      ],
      [
        "بَعْدَ ذَلِكَ",
        "Après cela"
      ],
      [
        "أَخِيرًا",
        "Enfin"
      ],
      [
        "بَيْنَمَا",
        "Pendant que"
      ],
      [
        "عِنْدَمَا",
        "Lorsque"
      ],
      [
        "حَدَثَ",
        "Il s’est passé"
      ],
      [
        "قِصَّةٌ",
        "Histoire"
      ],
      [
        "مُفَاجَأَةٌ",
        "Surprise"
      ],
      [
        "ذِكْرَى",
        "Souvenir"
      ],
      [
        "رَأَى",
        "voir (accompli)"
      ],
      [
        "رُؤْيَةٌ",
        "maṣdar : voir"
      ],
      [
        "اِنْتَظَرَ",
        "attendre (accompli)"
      ],
      [
        "اِنْتِظَارٌ",
        "maṣdar : attendre"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ]
    ],
    "dialect": [
      {
        "msa": "بَيْنَمَا كُنْتُ أَنْتَظِرُ",
        "levant": "وَأَنَا عَمْ بِنْطُرْ",
        "fr": "Pendant que j’attendais",
        "note": "وَأَنَا عَمْ ... présente une action progressive dans plusieurs variétés levantines."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel mot veut dire « pendant que » ?",
        "options": [
          "بَيْنَمَا",
          "أَخِيرًا",
          "بَعْدَ ذَلِكَ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : D’abord, ensuite, enfin ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَوَّلًا ?",
        "options": [
          "D’abord",
          "Pendant que",
          "Surprise"
        ],
        "answer": 0,
        "why": "أَوَّلًا signifie « D’abord ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie بَعْدَ ذَلِكَ ?",
        "options": [
          "Il s’est passé",
          "voir (accompli)",
          "Après cela"
        ],
        "answer": 2,
        "why": "بَعْدَ ذَلِكَ signifie « Après cela ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَخِيرًا ?",
        "options": [
          "attendre (accompli)",
          "Enfin",
          "Surprise"
        ],
        "answer": 1,
        "why": "أَخِيرًا signifie « Enfin ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie بَيْنَمَا ?",
        "options": [
          "Pendant que",
          "voir (accompli)",
          "Parce que"
        ],
        "answer": 0,
        "why": "بَيْنَمَا signifie « Pendant que ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie عِنْدَمَا ?",
        "options": [
          "attendre (accompli)",
          "D’abord",
          "Lorsque"
        ],
        "answer": 2,
        "why": "عِنْدَمَا signifie « Lorsque ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie حَدَثَ ?",
        "options": [
          "Enfin",
          "Il s’est passé",
          "Parce que"
        ],
        "answer": 1,
        "why": "حَدَثَ signifie « Il s’est passé ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de رَأَى ?",
        "options": [
          "رُؤْيَةٌ",
          "اِنْتِظَارٌ",
          "ذِكْرَى"
        ],
        "answer": 0,
        "why": "رَأَى — يَرَى — رُؤْيَةٌ : voir."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِنْتَظَرَ ?",
        "options": [
          "رُؤْيَةٌ",
          "رَأَى",
          "اِنْتِظَارٌ"
        ],
        "answer": 2,
        "why": "اِنْتَظَرَ — يَنْتَظِرُ — اِنْتِظَارٌ : attendre."
      },
      {
        "type": "input",
        "prompt": "Écris « Histoire » en arabe (voyelles facultatives).",
        "answer": "قِصَّةٌ",
        "accepted": [
          "قصة"
        ],
        "why": "قِصَّةٌ signifie « Histoire »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Que s’est-il passé ce matin ? » ?",
        "options": [
          "مَاذَا حَدَثَ صَبَاحًا؟",
          "مَاذَا فَعَلْتُمَا بَعْدَ ذَلِكَ؟",
          "تَحَدَّثْنَا ثُمَّ ذَهَبْنَا إِلَى الْعَمَلِ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا حَدَثَ صَبَاحًا؟",
        "fr": "Que s’est-il passé ce matin ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "رَأَيْتُ صَدِيقًا قَدِيمًا.",
        "fr": "J’ai vu un ancien ami."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا فَعَلْتُمَا بَعْدَ ذَلِكَ؟",
        "fr": "Qu’avez-vous fait ensuite, vous deux ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "تَحَدَّثْنَا ثُمَّ ذَهَبْنَا إِلَى الْعَمَلِ.",
        "fr": "Nous avons parlé puis sommes allés au travail."
      }
    ],
    "writing": {
      "prompt": "Écris une anecdote de 120 mots au passé, avec un arrière-plan et au moins cinq connecteurs.",
      "modelAr": "أَوَّلًا خَرَجْتُ مِنَ الْبَيْتِ مُبَكِّرًا. بَيْنَمَا كُنْتُ أَنْتَظِرُ الْحَافِلَةَ، رَأَيْتُ صَدِيقًا قَدِيمًا. تَحَدَّثْنَا قَلِيلًا، ثُمَّ رَكِبْنَا الْحَافِلَةَ مَعًا. أَخِيرًا وَصَلْنَا إِلَى الْعَمَلِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Raconter une anecdote en ordre ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue رَأَى et اِنْتَظَرَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Écris une anecdote de 120 mots au passé, avec un arrière-plan et au moins cinq connecteurs."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-21-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 21,
    "month": 10,
    "emoji": "🧭",
    "title": "Conseiller, devoir, interdire",
    "minutes": 135,
    "goal": "Exprimer une obligation, un conseil et une interdiction.",
    "grammar": [
      {
        "title": "Devoir et recommander",
        "body": "يَجِبُ أَنْ تَذْهَبَ « tu dois aller » ; مِنَ الْأَفْضَلِ أَنْ تَذْهَبَ « il vaut mieux que tu ailles ». La nuance entre obligation et conseil est sémantique, mais la construction au subjonctif est commune."
      },
      {
        "title": "Interdiction avec لَا",
        "body": "لَا تَتَأَخَّرْ « ne sois pas en retard ! » utilise لَا de prohibition + jussif, contrairement à لَا تَتَأَخَّرُ « tu n’es pas en retard » à l’indicatif. Le sukūn final peut signaler le jussif sur les verbes réguliers."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : أَنَا أَنْسَى الْمُفْرَدَاتِ سَرِيعًا. Lis ensuite la réponse : عَلَيْكَ أَنْ تُرَاجِعَهُ كُلَّ يَوْمٍ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "إِذَا أَرَدْتَ أَنْ تَتَقَدَّمَ فِي الْعَرَبِيَّةِ، فَعَلَيْكَ أَنْ تَتَدَرَّبَ كُلَّ يَوْمٍ. لَا تُهْمِلْ الْمُرَاجَعَةَ، وَلَا تَخَفْ مِنَ الْأَخْطَاءِ. مِنَ الْأَفْضَلِ أَنْ تَكْتُبَ قَلِيلًا وَبِانْتِظَامٍ.",
      "fr": "Si tu veux progresser en arabe, tu dois t’entraîner chaque jour. Ne néglige pas les révisions et n’aie pas peur des erreurs. Il vaut mieux écrire un peu et régulièrement."
    },
    "examples": [
      {
        "ar": "أَنَا أَنْسَى الْمُفْرَدَاتِ سَرِيعًا.",
        "fr": "J’oublie rapidement le vocabulaire.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "عَلَيْكَ أَنْ تُرَاجِعَهُ كُلَّ يَوْمٍ.",
        "fr": "Tu dois le réviser chaque jour.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "عَلَيْكَ أَنْ",
              "عَلَيْكَ أَنْ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَمَاذَا عَنِ الْأَخْطَاءِ؟",
        "fr": "Et les erreurs ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "خَطَأٌ",
              "خَطَأٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَا تَخَفْ مِنْهَا، بَلْ تَعَلَّمْ مِنْهَا.",
        "fr": "N’en aie pas peur, apprends-en plutôt.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "لَا تَخَفْ",
              "لَا تَخَفْ"
            ],
            [
              "تَعَلَّمَ",
              "تَعَلَّمَ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "تَعَلَّمَ",
        "present": "يَتَعَلَّمُ",
        "masdar": "تَعَلُّمٌ",
        "fr": "apprendre",
        "lookup": "تعلم"
      },
      {
        "past": "كَتَبَ",
        "present": "يَكْتُبُ",
        "masdar": "كِتَابَةٌ",
        "fr": "écrire",
        "lookup": "كتب"
      }
    ],
    "words": [
      [
        "وَاجِبٌ",
        "Obligation"
      ],
      [
        "نَصِيحَةٌ",
        "Conseil"
      ],
      [
        "مَنْعٌ",
        "Interdiction"
      ],
      [
        "عَلَيْكَ أَنْ",
        "Tu dois"
      ],
      [
        "مِنَ الْأَفْضَلِ",
        "Il vaut mieux"
      ],
      [
        "لَا تَخَفْ",
        "N’aie pas peur"
      ],
      [
        "اِنْتِظَامٌ",
        "Régularité"
      ],
      [
        "خَطَأٌ",
        "Erreur"
      ],
      [
        "تَقَدُّمٌ",
        "Progrès"
      ],
      [
        "تَعَلَّمَ",
        "apprendre (accompli)"
      ],
      [
        "كَتَبَ",
        "écrire (accompli)"
      ],
      [
        "كِتَابَةٌ",
        "maṣdar : écrire"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ],
      [
        "بَعْدَ",
        "Après"
      ]
    ],
    "dialect": [
      {
        "msa": "لَا تَتَأَخَّرْ.",
        "levant": "لَا تِتْأَخَّرْ.",
        "fr": "Ne sois pas en retard.",
        "note": "L’impératif négatif parlé peut ressembler phonétiquement au jussif classique."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle forme est une interdiction correcte ?",
        "options": [
          "لَا تَكْتُبْ",
          "لَا تَكْتُبُ",
          "لَا كَتَبْتُ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Devoir et recommander ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie وَاجِبٌ ?",
        "options": [
          "Obligation",
          "Tu dois",
          "Erreur"
        ],
        "answer": 0,
        "why": "وَاجِبٌ signifie « Obligation ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie نَصِيحَةٌ ?",
        "options": [
          "N’aie pas peur",
          "apprendre (accompli)",
          "Conseil"
        ],
        "answer": 2,
        "why": "نَصِيحَةٌ signifie « Conseil ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَنْعٌ ?",
        "options": [
          "maṣdar : écrire",
          "Interdiction",
          "Erreur"
        ],
        "answer": 1,
        "why": "مَنْعٌ signifie « Interdiction ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie عَلَيْكَ أَنْ ?",
        "options": [
          "Tu dois",
          "apprendre (accompli)",
          "Mais"
        ],
        "answer": 0,
        "why": "عَلَيْكَ أَنْ signifie « Tu dois ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مِنَ الْأَفْضَلِ ?",
        "options": [
          "maṣdar : écrire",
          "Obligation",
          "Il vaut mieux"
        ],
        "answer": 2,
        "why": "مِنَ الْأَفْضَلِ signifie « Il vaut mieux ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie لَا تَخَفْ ?",
        "options": [
          "Interdiction",
          "N’aie pas peur",
          "Mais"
        ],
        "answer": 1,
        "why": "لَا تَخَفْ signifie « N’aie pas peur ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَعَلَّمَ ?",
        "options": [
          "تَعَلُّمٌ",
          "كِتَابَةٌ",
          "تَقَدُّمٌ"
        ],
        "answer": 0,
        "why": "تَعَلَّمَ — يَتَعَلَّمُ — تَعَلُّمٌ : apprendre."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de كَتَبَ ?",
        "options": [
          "تَعَلُّمٌ",
          "تَعَلَّمَ",
          "كِتَابَةٌ"
        ],
        "answer": 2,
        "why": "كَتَبَ — يَكْتُبُ — كِتَابَةٌ : écrire."
      },
      {
        "type": "input",
        "prompt": "Écris « Régularité » en arabe (voyelles facultatives).",
        "answer": "اِنْتِظَامٌ",
        "accepted": [
          "انتظام"
        ],
        "why": "اِنْتِظَامٌ signifie « Régularité »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « J’oublie rapidement le vocabulaire. » ?",
        "options": [
          "أَنَا أَنْسَى الْمُفْرَدَاتِ سَرِيعًا.",
          "وَمَاذَا عَنِ الْأَخْطَاءِ؟",
          "لَا تَخَفْ مِنْهَا، بَلْ تَعَلَّمْ مِنْهَا."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "أَنَا أَنْسَى الْمُفْرَدَاتِ سَرِيعًا.",
        "fr": "J’oublie rapidement le vocabulaire."
      },
      {
        "speaker": "سَامِي",
        "ar": "عَلَيْكَ أَنْ تُرَاجِعَهُ كُلَّ يَوْمٍ.",
        "fr": "Tu dois le réviser chaque jour."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "وَمَاذَا عَنِ الْأَخْطَاءِ؟",
        "fr": "Et les erreurs ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "لَا تَخَفْ مِنْهَا، بَلْ تَعَلَّمْ مِنْهَا.",
        "fr": "N’en aie pas peur, apprends-en plutôt."
      }
    ],
    "writing": {
      "prompt": "Rédige une affiche de dix conseils de travail, avec obligations, recommandations et interdictions.",
      "modelAr": "إِذَا أَرَدْتَ أَنْ تَتَقَدَّمَ فِي الْعَرَبِيَّةِ، فَعَلَيْكَ أَنْ تَتَدَرَّبَ كُلَّ يَوْمٍ. لَا تُهْمِلْ الْمُرَاجَعَةَ، وَلَا تَخَفْ مِنَ الْأَخْطَاءِ. مِنَ الْأَفْضَلِ أَنْ تَكْتُبَ قَلِيلًا وَبِانْتِظَامٍ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Conseiller, devoir, interdire ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue تَعَلَّمَ et كَتَبَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Rédige une affiche de dix conseils de travail, avec obligations, recommandations et interdictions."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-22-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 22,
    "month": 10,
    "emoji": "💬",
    "title": "Exprimer une opinion et la nuancer",
    "minutes": 135,
    "goal": "Dire son avis, être d’accord et justifier sans agressivité.",
    "grammar": [
      {
        "title": "Je pense que",
        "body": "أَظُنُّ أَنَّ هَذَا الْكِتَابَ مُفِيدٌ « je pense que ce livre est utile ». أَنَّ introduit ici une complétive nominale et met son nom au cas accusatif. أَعْتَقِدُ أَنَّ est une formulation proche."
      },
      {
        "title": "Accord et désaccord",
        "body": "أُوَافِقُكَ الرَّأْيَ « je suis d’accord avec toi » ; لَا أُوَافِقُكَ تَمَامًا « je ne suis pas tout à fait d’accord ». لَكِنَّ et مَعَ ذَلِكَ permettent d’introduire une réserve."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : هَلْ تَظُنُّ أَنَّ الْعَرَبِيَّةَ صَعْبَةٌ؟ Lis ensuite la réponse : نَعَمْ، وَلَكِنَّهَا مُمْتِعَةٌ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أَظُنُّ أَنَّ تَعَلُّمَ اللُّغَاتِ مُهِمٌّ. فَهُوَ يُسَاعِدُنَا عَلَى فَهْمِ الثَّقَافَاتِ وَالتَّوَاصُلِ مَعَ النَّاسِ. مَعَ ذَلِكَ أَعْتَقِدُ أَنَّ الْمُمَارَسَةَ أَهَمُّ مِنْ حِفْظِ الْقَوَاعِدِ وَحْدَهَا.",
      "fr": "Je pense qu’apprendre des langues est important. Cela nous aide à comprendre les cultures et à communiquer avec les gens. Néanmoins, je pense que la pratique est plus importante que mémoriser uniquement les règles."
    },
    "examples": [
      {
        "ar": "هَلْ تَظُنُّ أَنَّ الْعَرَبِيَّةَ صَعْبَةٌ؟",
        "fr": "Penses-tu que l’arabe soit difficile ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "صَعْبٌ",
              "صَعْبٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، وَلَكِنَّهَا مُمْتِعَةٌ.",
        "fr": "Oui, mais elle est agréable.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مُمْتِعٌ",
              "مُمْتِعٌ"
            ],
            [
              "لَكِنْ",
              "لَكِنْ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ تُوَافِقُنِي الرَّأْيَ؟",
        "fr": "Es-tu d’accord avec moi ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "رَأْيٌ",
              "رَأْيٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أُوَافِقُكَ جُزْئِيًّا، وَالْمُمَارَسَةُ مُهِمَّةٌ أَيْضًا.",
        "fr": "Je suis partiellement d’accord, et la pratique est importante aussi.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مُمَارَسَةٌ",
              "مُمَارَسَةٌ"
            ],
            [
              "مُهِمٌّ",
              "مُهِمٌّ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "فَكَّرَ",
        "present": "يُفَكِّرُ",
        "masdar": "تَفْكِيرٌ",
        "fr": "réfléchir",
        "lookup": "فكر"
      },
      {
        "past": "اِعْتَقَدَ",
        "present": "يَعْتَقِدُ",
        "masdar": "اِعْتِقَادٌ",
        "fr": "croire/estimer",
        "lookup": "اعتقد"
      }
    ],
    "words": [
      [
        "رَأْيٌ",
        "Avis"
      ],
      [
        "اِعْتِقَادٌ",
        "Conviction"
      ],
      [
        "مُمَارَسَةٌ",
        "Pratique"
      ],
      [
        "ثَقَافَةٌ",
        "Culture"
      ],
      [
        "تَوَاصُلٌ",
        "Communication"
      ],
      [
        "مُهِمٌّ",
        "Important"
      ],
      [
        "صَعْبٌ",
        "Difficile"
      ],
      [
        "مُمْتِعٌ",
        "Agréable"
      ],
      [
        "مَعَ ذَلِكَ",
        "Cependant"
      ],
      [
        "فَكَّرَ",
        "réfléchir (accompli)"
      ],
      [
        "تَفْكِيرٌ",
        "maṣdar : réfléchir"
      ],
      [
        "اِعْتَقَدَ",
        "croire/estimer (accompli)"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ],
      [
        "بَعْدَ",
        "Après"
      ]
    ],
    "dialect": [
      {
        "msa": "أَظُنُّ أَنَّهُ مُفِيدٌ.",
        "levant": "بِظُنّ إِنُّو مُفِيدْ.",
        "fr": "Je pense que c’est utile.",
        "note": "إِنُّو est un introducteur de complétive courant dans la langue parlée."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel terme introduit une réserve « cependant » ?",
        "options": [
          "مَعَ ذَلِكَ",
          "لِكَيْ",
          "قَبْلَ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Je pense que ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie رَأْيٌ ?",
        "options": [
          "Avis",
          "Culture",
          "Agréable"
        ],
        "answer": 0,
        "why": "رَأْيٌ signifie « Avis ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie اِعْتِقَادٌ ?",
        "options": [
          "Important",
          "réfléchir (accompli)",
          "Conviction"
        ],
        "answer": 2,
        "why": "اِعْتِقَادٌ signifie « Conviction ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُمَارَسَةٌ ?",
        "options": [
          "croire/estimer (accompli)",
          "Pratique",
          "Agréable"
        ],
        "answer": 1,
        "why": "مُمَارَسَةٌ signifie « Pratique ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie ثَقَافَةٌ ?",
        "options": [
          "Culture",
          "réfléchir (accompli)",
          "Mais"
        ],
        "answer": 0,
        "why": "ثَقَافَةٌ signifie « Culture ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie تَوَاصُلٌ ?",
        "options": [
          "croire/estimer (accompli)",
          "Avis",
          "Communication"
        ],
        "answer": 2,
        "why": "تَوَاصُلٌ signifie « Communication ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُهِمٌّ ?",
        "options": [
          "Pratique",
          "Important",
          "Mais"
        ],
        "answer": 1,
        "why": "مُهِمٌّ signifie « Important ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de فَكَّرَ ?",
        "options": [
          "تَفْكِيرٌ",
          "اِعْتِقَادٌ",
          "مَعَ ذَلِكَ"
        ],
        "answer": 0,
        "why": "فَكَّرَ — يُفَكِّرُ — تَفْكِيرٌ : réfléchir."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِعْتَقَدَ ?",
        "options": [
          "تَفْكِيرٌ",
          "فَكَّرَ",
          "اِعْتِقَادٌ"
        ],
        "answer": 2,
        "why": "اِعْتَقَدَ — يَعْتَقِدُ — اِعْتِقَادٌ : croire/estimer."
      },
      {
        "type": "input",
        "prompt": "Écris « Difficile » en arabe (voyelles facultatives).",
        "answer": "صَعْبٌ",
        "accepted": [
          "صعب"
        ],
        "why": "صَعْبٌ signifie « Difficile »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Penses-tu que l’arabe soit difficile ? » ?",
        "options": [
          "هَلْ تَظُنُّ أَنَّ الْعَرَبِيَّةَ صَعْبَةٌ؟",
          "هَلْ تُوَافِقُنِي الرَّأْيَ؟",
          "أُوَافِقُكَ جُزْئِيًّا، وَالْمُمَارَسَةُ مُهِمَّةٌ أَيْضًا."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ تَظُنُّ أَنَّ الْعَرَبِيَّةَ صَعْبَةٌ؟",
        "fr": "Penses-tu que l’arabe soit difficile ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، وَلَكِنَّهَا مُمْتِعَةٌ.",
        "fr": "Oui, mais elle est agréable."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ تُوَافِقُنِي الرَّأْيَ؟",
        "fr": "Es-tu d’accord avec moi ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أُوَافِقُكَ جُزْئِيًّا، وَالْمُمَارَسَةُ مُهِمَّةٌ أَيْضًا.",
        "fr": "Je suis partiellement d’accord, et la pratique est importante aussi."
      }
    ],
    "writing": {
      "prompt": "Écris une opinion de 120 mots avec deux arguments, une réserve et une conclusion courte.",
      "modelAr": "أَظُنُّ أَنَّ تَعَلُّمَ اللُّغَاتِ مُهِمٌّ. فَهُوَ يُسَاعِدُنَا عَلَى فَهْمِ الثَّقَافَاتِ وَالتَّوَاصُلِ مَعَ النَّاسِ. مَعَ ذَلِكَ أَعْتَقِدُ أَنَّ الْمُمَارَسَةَ أَهَمُّ مِنْ حِفْظِ الْقَوَاعِدِ وَحْدَهَا.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Exprimer une opinion et la nuancer ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue فَكَّرَ et اِعْتَقَدَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Écris une opinion de 120 mots avec deux arguments, une réserve et une conclusion courte."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-23-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 23,
    "month": 10,
    "emoji": "✉️",
    "title": "Rédiger un courriel simple",
    "minutes": 135,
    "goal": "Écrire un message formel clair avec salutation et demande.",
    "grammar": [
      {
        "title": "Organiser un courriel",
        "body": "Commence par السَّيِّدُ الْمُحْتَرَمُ ou السَّيِّدَةُ الْمُحْتَرَمَةُ en fonction du destinataire. Puis présente la demande avec أَكْتُبُ إِلَيْكُمْ لِـ « je vous écris afin de ». Termine par وَمَعَ خَالِصِ الشُّكْرِ ou مَعَ التَّحِيَّةِ."
      },
      {
        "title": "La demande de renseignements",
        "body": "أَرْجُو إِرْسَالَ الْمَعْلُومَاتِ « je vous prie d’envoyer les informations ». Le maṣdar إِرْسَالَ est le complément du verbe. Hésiter entre maṣdar et أَنْ + verbe est un axe d’apprentissage utile."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَاذَا تَكْتُبُ؟ Lis ensuite la réponse : أَكْتُبُ رِسَالَةً إِلَى الْمَعْهَدِ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "إِلَى إِدَارَةِ الْمَعْهَدِ: أَكْتُبُ إِلَيْكُمْ لِلِاسْتِفْسَارِ عَنْ دَوْرَةِ الْعَرَبِيَّةِ. أُرِيدُ أَنْ أَعْرِفَ الْمَوْعِدَ وَالرُّسُومَ. أَرْجُو إِرْسَالَ الْمَعْلُومَاتِ. مَعَ خَالِصِ الشُّكْرِ.",
      "fr": "À l’administration de l’institut : je vous écris pour me renseigner sur le cours d’arabe. Je souhaite connaître les horaires et les frais. Merci de m’envoyer les renseignements. Avec mes remerciements sincères."
    },
    "examples": [
      {
        "ar": "مَاذَا تَكْتُبُ؟",
        "fr": "Qu’écris-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "كَتَبَ",
              "كَتَبَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أَكْتُبُ رِسَالَةً إِلَى الْمَعْهَدِ.",
        "fr": "J’écris un message à l’institut.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مَعْهَدٌ",
              "مَعْهَدٌ"
            ],
            [
              "كَتَبَ",
              "كَتَبَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "مَاذَا تَسْأَلُ فِيهَا؟",
        "fr": "Qu’y demandes-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "أَسْأَلُ عَنِ الْمَوْعِدِ وَالرُّسُومِ.",
        "fr": "Je demande les horaires et les frais.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "رُسُومٌ",
              "رُسُومٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "كَتَبَ",
        "present": "يَكْتُبُ",
        "masdar": "كِتَابَةٌ",
        "fr": "écrire",
        "lookup": "كتب"
      },
      {
        "past": "أَرْسَلَ",
        "present": "يُرْسِلُ",
        "masdar": "إِرْسَالٌ",
        "fr": "envoyer",
        "lookup": "أرسل"
      }
    ],
    "words": [
      [
        "بَرِيدٌ إِلِكْتُرُونِيٌّ",
        "Courriel"
      ],
      [
        "عُنْوَانٌ",
        "Adresse / objet"
      ],
      [
        "اِسْتِفْسَارٌ",
        "Demande d’information"
      ],
      [
        "مَعْهَدٌ",
        "Institut"
      ],
      [
        "رُسُومٌ",
        "Frais"
      ],
      [
        "إِدَارَةٌ",
        "Administration"
      ],
      [
        "مَعْلُومَاتٌ",
        "Informations"
      ],
      [
        "تَحِيَّةٌ",
        "Salutation"
      ],
      [
        "خَالِصٌ",
        "Sincère"
      ],
      [
        "كَتَبَ",
        "écrire (accompli)"
      ],
      [
        "كِتَابَةٌ",
        "maṣdar : écrire"
      ],
      [
        "أَرْسَلَ",
        "envoyer (accompli)"
      ],
      [
        "إِرْسَالٌ",
        "maṣdar : envoyer"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ]
    ],
    "dialect": [
      {
        "msa": "أَرْسَلْتُ لَكَ رِسَالَةً.",
        "levant": "بَعَتِّلَكْ رِسَالِة.",
        "fr": "Je t’ai envoyé un message.",
        "note": "بَعَتّ est un verbe très courant pour « envoyer » dans la langue parlée levantine."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle formule est adaptée à une fin de courriel poli ?",
        "options": [
          "مَعَ خَالِصِ الشُّكْرِ",
          "أَيْنَ كِتَابِي؟",
          "السَّاعَةُ الثَّانِيَةُ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Organiser un courriel ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie بَرِيدٌ إِلِكْتُرُونِيٌّ ?",
        "options": [
          "Courriel",
          "Institut",
          "Salutation"
        ],
        "answer": 0,
        "why": "بَرِيدٌ إِلِكْتُرُونِيٌّ signifie « Courriel ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie عُنْوَانٌ ?",
        "options": [
          "Administration",
          "écrire (accompli)",
          "Adresse / objet"
        ],
        "answer": 2,
        "why": "عُنْوَانٌ signifie « Adresse / objet ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie اِسْتِفْسَارٌ ?",
        "options": [
          "envoyer (accompli)",
          "Demande d’information",
          "Salutation"
        ],
        "answer": 1,
        "why": "اِسْتِفْسَارٌ signifie « Demande d’information ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَعْهَدٌ ?",
        "options": [
          "Institut",
          "écrire (accompli)",
          "Parce que"
        ],
        "answer": 0,
        "why": "مَعْهَدٌ signifie « Institut ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie رُسُومٌ ?",
        "options": [
          "envoyer (accompli)",
          "Courriel",
          "Frais"
        ],
        "answer": 2,
        "why": "رُسُومٌ signifie « Frais ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie إِدَارَةٌ ?",
        "options": [
          "Demande d’information",
          "Administration",
          "Parce que"
        ],
        "answer": 1,
        "why": "إِدَارَةٌ signifie « Administration ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de كَتَبَ ?",
        "options": [
          "كِتَابَةٌ",
          "إِرْسَالٌ",
          "خَالِصٌ"
        ],
        "answer": 0,
        "why": "كَتَبَ — يَكْتُبُ — كِتَابَةٌ : écrire."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَرْسَلَ ?",
        "options": [
          "كِتَابَةٌ",
          "كَتَبَ",
          "إِرْسَالٌ"
        ],
        "answer": 2,
        "why": "أَرْسَلَ — يُرْسِلُ — إِرْسَالٌ : envoyer."
      },
      {
        "type": "input",
        "prompt": "Écris « Informations » en arabe (voyelles facultatives).",
        "answer": "مَعْلُومَاتٌ",
        "accepted": [
          "معلومات"
        ],
        "why": "مَعْلُومَاتٌ signifie « Informations »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Qu’écris-tu ? » ?",
        "options": [
          "مَاذَا تَكْتُبُ؟",
          "مَاذَا تَسْأَلُ فِيهَا؟",
          "أَسْأَلُ عَنِ الْمَوْعِدِ وَالرُّسُومِ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا تَكْتُبُ؟",
        "fr": "Qu’écris-tu ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أَكْتُبُ رِسَالَةً إِلَى الْمَعْهَدِ.",
        "fr": "J’écris un message à l’institut."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا تَسْأَلُ فِيهَا؟",
        "fr": "Qu’y demandes-tu ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أَسْأَلُ عَنِ الْمَوْعِدِ وَالرُّسُومِ.",
        "fr": "Je demande les horaires et les frais."
      }
    ],
    "writing": {
      "prompt": "Rédige un courriel de 100 mots pour demander une inscription à un cours de langue.",
      "modelAr": "إِلَى إِدَارَةِ الْمَعْهَدِ: أَكْتُبُ إِلَيْكُمْ لِلِاسْتِفْسَارِ عَنْ دَوْرَةِ الْعَرَبِيَّةِ. أُرِيدُ أَنْ أَعْرِفَ الْمَوْعِدَ وَالرُّسُومَ. أَرْجُو إِرْسَالَ الْمَعْلُومَاتِ. مَعَ خَالِصِ الشُّكْرِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Rédiger un courriel simple ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue كَتَبَ et أَرْسَلَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Rédige un courriel de 100 mots pour demander une inscription à un cours de langue."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-24-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 24,
    "month": 10,
    "emoji": "🧳",
    "title": "Projet de voyage au Liban ou en Syrie",
    "minutes": 135,
    "goal": "Préparer une visite en utilisant futur, comparaisons et suggestions.",
    "grammar": [
      {
        "title": "Planifier une visite",
        "body": "سَأَزُورُ بَيْرُوتَ فِي الرَّبِيعِ « je visiterai Beyrouth au printemps ». أُرِيدُ أَنْ أَتَعَرَّفَ عَلَى الثَّقَافَةِ « je veux découvrir la culture ». Le verbe de souhait dirige le mode de la subordonnée."
      },
      {
        "title": "Parler prudemment de destinations",
        "body": "Les conditions réelles de voyage, d’entrée et de sécurité changent : un exercice linguistique ne vaut pas conseil de voyage actuel. Pour formuler une proposition : مِنَ الْمُمْكِنِ أَنْ نَزُورَ ... « il est possible que nous visitions ... »."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَاذَا تُرِيدُ أَنْ تَزُورَ؟ Lis ensuite la réponse : أُرِيدُ أَنْ أَزُورَ الْمَتَاحِفَ وَالْأَسْوَاقَ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "أُخَطِّطُ لِرِحْلَةٍ ثَقَافِيَّةٍ إِلَى بَيْرُوتَ. أُرِيدُ أَنْ أَزُورَ الْمَتَاحِفَ وَأَنْ أَتَذَوَّقَ الطَّعَامَ اللُّبْنَانِيَّ. سَأَتَعَلَّمُ عِبَارَاتٍ مِنَ اللَّهْجَةِ الشَّامِيَّةِ قَبْلَ السَّفَرِ.",
      "fr": "Je prépare un voyage culturel à Beyrouth. Je veux visiter les musées et goûter la cuisine libanaise. J’apprendrai quelques expressions levantines avant de partir."
    },
    "examples": [
      {
        "ar": "مَاذَا تُرِيدُ أَنْ تَزُورَ؟",
        "fr": "Que veux-tu visiter ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "أُرِيدُ أَنْ أَزُورَ الْمَتَاحِفَ وَالْأَسْوَاقَ.",
        "fr": "Je veux visiter les musées et les marchés.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ سَتَتَعَلَّمُ بَعْضَ اللَّهْجَةِ؟",
        "fr": "Apprendras-tu un peu de dialecte ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "لَهْجَةٌ",
              "لَهْجَةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، لِأَفْهَمَ النَّاسَ بِشَكْلٍ أَفْضَلَ.",
        "fr": "Oui, pour mieux comprendre les gens.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "سَافَرَ",
        "present": "يُسَافِرُ",
        "masdar": "سَفَرٌ",
        "fr": "voyager",
        "lookup": "سافر"
      },
      {
        "past": "زَارَ",
        "present": "يَزُورُ",
        "masdar": "زِيَارَةٌ",
        "fr": "visiter",
        "lookup": "زار"
      }
    ],
    "words": [
      [
        "رِحْلَةٌ",
        "Voyage/excursion"
      ],
      [
        "ثَقَافَةٌ",
        "Culture"
      ],
      [
        "مَتْحَفٌ",
        "Musée"
      ],
      [
        "سُوقٌ",
        "Marché"
      ],
      [
        "طَعَامٌ",
        "Nourriture"
      ],
      [
        "لَهْجَةٌ",
        "Dialecte"
      ],
      [
        "عِبَارَةٌ",
        "Expression"
      ],
      [
        "تَخْطِيطٌ",
        "Planification"
      ],
      [
        "سَفَرٌ",
        "Voyage"
      ],
      [
        "سَافَرَ",
        "voyager (accompli)"
      ],
      [
        "زَارَ",
        "visiter (accompli)"
      ],
      [
        "زِيَارَةٌ",
        "maṣdar : visiter"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ],
      [
        "بَعْدَ",
        "Après"
      ]
    ],
    "dialect": [
      {
        "msa": "أُرِيدُ أَنْ أَزُورَ بَيْرُوتَ.",
        "levant": "بَدِّي زُورْ بَيْرُوتْ.",
        "fr": "Je veux visiter Beyrouth.",
        "note": "بَدِّي + verbe est un équivalent spontané de أُرِيدُ أَنْ + subjonctif."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel mot signifie « dialecte » ?",
        "options": [
          "لَهْجَةٌ",
          "مَحَطَّةٌ",
          "فِعْلٌ"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Planifier une visite ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie رِحْلَةٌ ?",
        "options": [
          "Voyage/excursion",
          "Marché",
          "Planification"
        ],
        "answer": 0,
        "why": "رِحْلَةٌ signifie « Voyage/excursion ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie ثَقَافَةٌ ?",
        "options": [
          "Dialecte",
          "voyager (accompli)",
          "Culture"
        ],
        "answer": 2,
        "why": "ثَقَافَةٌ signifie « Culture ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَتْحَفٌ ?",
        "options": [
          "maṣdar : visiter",
          "Musée",
          "Planification"
        ],
        "answer": 1,
        "why": "مَتْحَفٌ signifie « Musée ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie سُوقٌ ?",
        "options": [
          "Marché",
          "voyager (accompli)",
          "Mais"
        ],
        "answer": 0,
        "why": "سُوقٌ signifie « Marché ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie طَعَامٌ ?",
        "options": [
          "maṣdar : visiter",
          "Voyage/excursion",
          "Nourriture"
        ],
        "answer": 2,
        "why": "طَعَامٌ signifie « Nourriture ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie لَهْجَةٌ ?",
        "options": [
          "Musée",
          "Dialecte",
          "Mais"
        ],
        "answer": 1,
        "why": "لَهْجَةٌ signifie « Dialecte ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de سَافَرَ ?",
        "options": [
          "سَفَرٌ",
          "زِيَارَةٌ",
          "تَخْطِيطٌ"
        ],
        "answer": 0,
        "why": "سَافَرَ — يُسَافِرُ — سَفَرٌ : voyager."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de زَارَ ?",
        "options": [
          "سَفَرٌ",
          "سَافَرَ",
          "زِيَارَةٌ"
        ],
        "answer": 2,
        "why": "زَارَ — يَزُورُ — زِيَارَةٌ : visiter."
      },
      {
        "type": "input",
        "prompt": "Écris « Expression » en arabe (voyelles facultatives).",
        "answer": "عِبَارَةٌ",
        "accepted": [
          "عبارة"
        ],
        "why": "عِبَارَةٌ signifie « Expression »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Que veux-tu visiter ? » ?",
        "options": [
          "مَاذَا تُرِيدُ أَنْ تَزُورَ؟",
          "هَلْ سَتَتَعَلَّمُ بَعْضَ اللَّهْجَةِ؟",
          "نَعَمْ، لِأَفْهَمَ النَّاسَ بِشَكْلٍ أَفْضَلَ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا تُرِيدُ أَنْ تَزُورَ؟",
        "fr": "Que veux-tu visiter ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أُرِيدُ أَنْ أَزُورَ الْمَتَاحِفَ وَالْأَسْوَاقَ.",
        "fr": "Je veux visiter les musées et les marchés."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "هَلْ سَتَتَعَلَّمُ بَعْضَ اللَّهْجَةِ؟",
        "fr": "Apprendras-tu un peu de dialecte ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، لِأَفْهَمَ النَّاسَ بِشَكْلٍ أَفْضَلَ.",
        "fr": "Oui, pour mieux comprendre les gens."
      }
    ],
    "writing": {
      "prompt": "Prépare un itinéraire fictif de quatre jours : visites, plats, moyens de transport et expressions parlées.",
      "modelAr": "أُخَطِّطُ لِرِحْلَةٍ ثَقَافِيَّةٍ إِلَى بَيْرُوتَ. أُرِيدُ أَنْ أَزُورَ الْمَتَاحِفَ وَأَنْ أَتَذَوَّقَ الطَّعَامَ اللُّبْنَانِيَّ. سَأَتَعَلَّمُ عِبَارَاتٍ مِنَ اللَّهْجَةِ الشَّامِيَّةِ قَبْلَ السَّفَرِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Projet de voyage au Liban ou en Syrie ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue سَافَرَ et زَارَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Prépare un itinéraire fictif de quatre jours : visites, plats, moyens de transport et expressions parlées."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2r-25-2026",
    "level": "A2",
    "track": "renforcement-a2",
    "number": 25,
    "month": 10,
    "emoji": "🎓",
    "title": "Bilan A2 : récit et argumentation simple",
    "minutes": 135,
    "goal": "Réinvestir les acquis A2 avant le parcours B1.",
    "grammar": [
      {
        "title": "Mélanger les temps de manière cohérente",
        "body": "Hier = accompli ou كَانَ + inaccompli ; aujourd’hui = inaccompli d’habitude ; demain = سَـ / سَوْفَ. Vérifie que ton récit situe clairement les événements, et que les négations ne changent pas involontairement le mode des verbes."
      },
      {
        "title": "Argumenter en restant simple",
        "body": "Structure ton paragraphe en quatre étapes : présentation du sujet, fait ou exemple, raison introduite par لِأَنَّ, conséquence par لِذَلِكَ. Ajoute une relative الَّذِي / الَّتِي et un comparatif أَفْعَلُ مِنْ pour dépasser la simple liste de faits."
      },
      {
        "title": "Application dans le dialogue et le texte",
        "body": "Repère la structure étudiée dans cette phrase : مَاذَا تَعَلَّمْتَ فِي الْمُسْتَوَى A2؟ Lis ensuite la réponse : تَعَلَّمْتُ الْمَاضِيَ وَالْمُقَارَنَةَ وَالْمَوْصُولَ. Compare leur sens en français, identifie le sujet et explique le choix de la forme. Réécris ensuite la réponse en remplaçant le sujet ou le complément : c’est ce travail de manipulation qui consolide la règle."
      }
    ],
    "reading": {
      "title": "قِرَاءَةٌ مَوْضُوعِيَّةٌ",
      "ar": "فِي السَّنَةِ الْمَاضِيَةِ بَدَأْتُ دِرَاسَةَ الْعَرَبِيَّةِ بِانْتِظَامٍ. كُنْتُ أَقْرَأُ نُصُوصًا قَصِيرَةً وَأَكْتُبُ كُلَّ أُسْبُوعٍ. الْآنَ أَفْهَمُ أَكْثَرَ، وَلِذَلِكَ سَأَبْدَأُ قِرَاءَةَ نُصُوصٍ أَطْوَلَ وَسَأَتَدَرَّبُ عَلَى الْحِوَارِ.",
      "fr": "L’an dernier, j’ai commencé à étudier l’arabe régulièrement. Je lisais de courts textes et j’écrivais chaque semaine. Maintenant je comprends davantage, c’est pourquoi je vais commencer à lire des textes plus longs et m’entraîner au dialogue."
    },
    "examples": [
      {
        "ar": "مَاذَا تَعَلَّمْتَ فِي الْمُسْتَوَى A2؟",
        "fr": "Qu’as-tu appris au niveau A2 ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مُسْتَوًى",
              "مُسْتَوًى"
            ],
            [
              "تَعَلَّمَ",
              "تَعَلَّمَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "تَعَلَّمْتُ الْمَاضِيَ وَالْمُقَارَنَةَ وَالْمَوْصُولَ.",
        "fr": "J’ai appris le passé, la comparaison et les relatifs.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مَاضٍ",
              "مَاضٍ"
            ],
            [
              "مُقَارَنَةٌ",
              "مُقَارَنَةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "مَا هَدَفُكَ الْقَادِمُ؟",
        "fr": "Quel est ton prochain objectif ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "سَأَقْرَأُ نُصُوصًا أَطْوَلَ وَسَأَتَكَلَّمُ بِثِقَةٍ.",
        "fr": "Je lirai des textes plus longs et parlerai avec assurance.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "ثِقَةٌ",
              "ثِقَةٌ"
            ],
            [
              "تَكَلَّمَ",
              "تَكَلَّمَ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "تَعَلَّمَ",
        "present": "يَتَعَلَّمُ",
        "masdar": "تَعَلُّمٌ",
        "fr": "apprendre",
        "lookup": "تعلم"
      },
      {
        "past": "تَكَلَّمَ",
        "present": "يَتَكَلَّمُ",
        "masdar": "تَكَلُّمٌ",
        "fr": "parler",
        "lookup": "تكلم"
      }
    ],
    "words": [
      [
        "مُسْتَوًى",
        "Niveau"
      ],
      [
        "مُرَاجَعَةٌ",
        "Révision"
      ],
      [
        "مَاضٍ",
        "Passé"
      ],
      [
        "مُسْتَقْبَلٌ",
        "Avenir"
      ],
      [
        "مُقَارَنَةٌ",
        "Comparaison"
      ],
      [
        "رَأْيٌ",
        "Opinion"
      ],
      [
        "قِرَاءَةٌ",
        "Lecture"
      ],
      [
        "ثِقَةٌ",
        "Confiance"
      ],
      [
        "تَقَدُّمٌ",
        "Progrès"
      ],
      [
        "تَعَلَّمَ",
        "apprendre (accompli)"
      ],
      [
        "تَكَلَّمَ",
        "parler (accompli)"
      ],
      [
        "لِأَنَّ",
        "Parce que"
      ],
      [
        "لَكِنْ",
        "Mais"
      ],
      [
        "بَعْدَ",
        "Après"
      ],
      [
        "قَبْلَ",
        "Avant"
      ]
    ],
    "dialect": [
      {
        "msa": "سَأَتَكَلَّمُ بِثِقَةٍ.",
        "levant": "رَحْ إِحْكِي بِثِقَة.",
        "fr": "Je parlerai avec confiance.",
        "note": "رَحْ + verbe et إِحْكِي (« je parle ») sont courants en levantin."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel connecteur marque la conséquence ?",
        "options": [
          "لِذَلِكَ",
          "لِكَيْ",
          "بَيْنَمَا"
        ],
        "answer": 0,
        "why": "Règle du chapitre : Mélanger les temps de manière cohérente ; relis les exemples avant de poursuivre."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُسْتَوًى ?",
        "options": [
          "Niveau",
          "Avenir",
          "Confiance"
        ],
        "answer": 0,
        "why": "مُسْتَوًى signifie « Niveau ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُرَاجَعَةٌ ?",
        "options": [
          "Opinion",
          "apprendre (accompli)",
          "Révision"
        ],
        "answer": 2,
        "why": "مُرَاجَعَةٌ signifie « Révision ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَاضٍ ?",
        "options": [
          "Parce que",
          "Passé",
          "Confiance"
        ],
        "answer": 1,
        "why": "مَاضٍ signifie « Passé ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُسْتَقْبَلٌ ?",
        "options": [
          "Avenir",
          "apprendre (accompli)",
          "Après"
        ],
        "answer": 0,
        "why": "مُسْتَقْبَلٌ signifie « Avenir ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مُقَارَنَةٌ ?",
        "options": [
          "Parce que",
          "Niveau",
          "Comparaison"
        ],
        "answer": 2,
        "why": "مُقَارَنَةٌ signifie « Comparaison ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Que signifie رَأْيٌ ?",
        "options": [
          "Passé",
          "Opinion",
          "Après"
        ],
        "answer": 1,
        "why": "رَأْيٌ signifie « Opinion ». Réemploie ce mot dans une phrase."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَعَلَّمَ ?",
        "options": [
          "تَعَلُّمٌ",
          "تَكَلُّمٌ",
          "تَقَدُّمٌ"
        ],
        "answer": 0,
        "why": "تَعَلَّمَ — يَتَعَلَّمُ — تَعَلُّمٌ : apprendre."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَكَلَّمَ ?",
        "options": [
          "تَعَلُّمٌ",
          "تَعَلَّمَ",
          "تَكَلُّمٌ"
        ],
        "answer": 2,
        "why": "تَكَلَّمَ — يَتَكَلَّمُ — تَكَلُّمٌ : parler."
      },
      {
        "type": "input",
        "prompt": "Écris « Lecture » en arabe (voyelles facultatives).",
        "answer": "قِرَاءَةٌ",
        "accepted": [
          "قراءة"
        ],
        "why": "قِرَاءَةٌ signifie « Lecture »."
      },
      {
        "type": "choice",
        "prompt": "Dans le dialogue, quelle est la traduction de « Qu’as-tu appris au niveau A2 ? » ?",
        "options": [
          "مَاذَا تَعَلَّمْتَ فِي الْمُسْتَوَى A2؟",
          "مَا هَدَفُكَ الْقَادِمُ؟",
          "سَأَقْرَأُ نُصُوصًا أَطْوَلَ وَسَأَتَكَلَّمُ بِثِقَةٍ."
        ],
        "answer": 0,
        "why": "Reprends le dialogue, écoute la question et sa réponse pour reconnaître la phrase en contexte."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَاذَا تَعَلَّمْتَ فِي الْمُسْتَوَى A2؟",
        "fr": "Qu’as-tu appris au niveau A2 ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "تَعَلَّمْتُ الْمَاضِيَ وَالْمُقَارَنَةَ وَالْمَوْصُولَ.",
        "fr": "J’ai appris le passé, la comparaison et les relatifs."
      },
      {
        "speaker": "مَرْيَمُ",
        "ar": "مَا هَدَفُكَ الْقَادِمُ؟",
        "fr": "Quel est ton prochain objectif ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "سَأَقْرَأُ نُصُوصًا أَطْوَلَ وَسَأَتَكَلَّمُ بِثِقَةٍ.",
        "fr": "Je lirai des textes plus longs et parlerai avec assurance."
      }
    ],
    "writing": {
      "prompt": "Projet final : rédaction de 180 mots, dialogue de voyage de 12 tours et comparaison de deux villes, avec une auto-évaluation par compétences.",
      "modelAr": "فِي السَّنَةِ الْمَاضِيَةِ بَدَأْتُ دِرَاسَةَ الْعَرَبِيَّةِ بِانْتِظَامٍ. كُنْتُ أَقْرَأُ نُصُوصًا قَصِيرَةً وَأَكْتُبُ كُلَّ أُسْبُوعٍ. الْآنَ أَفْهَمُ أَكْثَرَ، وَلِذَلِكَ سَأَبْدَأُ قِرَاءَةَ نُصُوصٍ أَطْوَلَ وَسَأَتَدَرَّبُ عَلَى الْحِوَارِ.",
      "criteria": [
        "Ai-je utilisé les constructions de ce module plutôt que de traduire mot à mot le français ?",
        "Ai-je accordé les noms, adjectifs et pronoms correctement ?",
        "Ai-je vérifié les verbes conjugués, leur maṣdar et les prépositions ?",
        "Puis-je lire ma production, l’expliquer et la reformuler sans traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · écouter et comprendre",
        "task": "Lis le texte trois fois. Repère la situation « Bilan A2 : récit et argumentation simple ». Surligne dix mots importants, puis masque le français."
      },
      {
        "name": "Séance 2 · grammaire et maṣdar",
        "task": "Étudie les trois encadrés grammaticaux. Conjugue تَعَلَّمَ et تَكَلَّمَ au passé et au présent, et mémorise leurs maṣdar."
      },
      {
        "name": "Séance 3 · dialoguer et écrire",
        "task": "Rejoue les quatre tours du dialogue, transforme les pronoms et réalise la tâche de rédaction : Projet final : rédaction de 180 mots, dialogue de voyage de 12 tours et comparaison de deux villes, avec une auto-évaluation par compétences."
      },
      {
        "name": "Séance 4 · évaluer et consolider",
        "task": "Réponds aux onze questions sans consulter le cours. Révise les cartes à J+1, J+3 et J+7, et répète le passage en variante levantine."
      }
    ],
    "extension": "Pour approfondir : produire oralement dix phrases nouvelles, comparer la fuṣḥā à la variante levantine et lire le texte sans regarder la traduction."
  },
  {
    "id": "a2-01-v2",
    "level": "A2",
    "number": 1,
    "month": 1,
    "emoji": "🌅",
    "title": "Routines et fréquence",
    "minutes": 90,
    "goal": "Décrire précisément sa journée, situer des actions et parler de ses habitudes.",
    "grammar": [
      {
        "title": "L’inaccompli indicatif",
        "body": "Pour décrire une habitude, emploie généralement l’inaccompli : أَسْتَيْقِظُ مُبَكِّرًا = je me réveille tôt. Le préfixe indique la personne : أَ- (je), نَ- (nous), تَ- (tu/elle), يَ- (il). Observe aussi les désinences : ـُ au mode indicatif, mais les verbes faibles ont des particularités."
      },
      {
        "title": "La fréquence",
        "body": "كَثِيرًا = souvent/beaucoup selon le contexte ; أَحْيَانًا = parfois ; نَادِرًا = rarement ; دَائِمًا = toujours ; كُلَّ صَبَاحٍ = chaque matin. L’adverbe peut se placer après le verbe ou en tête de proposition."
      },
      {
        "title": "Il est... heure",
        "body": "السَّاعَةُ السَّابِعَةُ = il est sept heures. On dit فِي السَّاعَةِ السَّابِعَةِ pour « à sept heures ». Attention à ne pas confondre le nom سَاعَةٌ (heure) et le nom ordinal féminin السَّابِعَةُ."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "فِي أَيَّامِ الْعَمَلِ أَسْتَيْقِظُ فِي السَّاعَةِ السَّابِعَةِ. أَشْرَبُ الْمَاءَ، ثُمَّ أَتَنَاوَلُ الْفُطُورَ. أَذْهَبُ إِلَى الْعَمَلِ بِالْحَافِلَةِ، وَأَرْجِعُ إِلَى الْبَيْتِ مَسَاءً. أَحْيَانًا أَقْرَأُ كِتَابًا قَبْلَ النَّوْمِ.",
      "fr": "Les jours de travail, je me réveille à sept heures. Je bois de l’eau, puis je prends mon petit-déjeuner. Je vais au travail en bus et je rentre chez moi le soir. Parfois, je lis un livre avant de dormir."
    },
    "examples": [
      {
        "ar": "مَتَى تَسْتَيْقِظُ فِي الصَّبَاحِ؟",
        "fr": "À quelle heure te réveilles-tu le matin ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "صَبَاحٌ",
              "صَبَاحٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أَسْتَيْقِظُ فِي السَّابِعَةِ تَقْرِيبًا.",
        "fr": "Je me réveille vers sept heures.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "اِسْتَيْقَظَ",
              "اِسْتَيْقَظَ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَهَلْ تَقْرَأُ قَبْلَ النَّوْمِ؟",
        "fr": "Lis-tu avant de dormir ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "نَوْمٌ",
              "نَوْمٌ"
            ],
            [
              "قَبْلَ",
              "قَبْلَ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "اِسْتَيْقَظَ",
        "present": "يَسْتَيْقِظُ",
        "masdar": "اِسْتِيقَاظٌ",
        "fr": "se réveiller",
        "lookup": "استيقظ"
      },
      {
        "past": "تَنَاوَلَ",
        "present": "يَتَنَاوَلُ",
        "masdar": "تَنَاوُلٌ",
        "fr": "prendre (un repas)",
        "lookup": "تناول"
      },
      {
        "past": "رَجَعَ",
        "present": "يَرْجِعُ",
        "masdar": "رُجُوعٌ",
        "fr": "revenir",
        "lookup": "رجع"
      }
    ],
    "words": [
      [
        "اِسْتَيْقَظَ",
        "Se réveiller"
      ],
      [
        "صَبَاحٌ",
        "Matin"
      ],
      [
        "مَسَاءٌ",
        "Soir"
      ],
      [
        "فُطُورٌ",
        "Petit-déjeuner"
      ],
      [
        "عَمَلٌ",
        "Travail"
      ],
      [
        "نَوْمٌ",
        "Sommeil"
      ],
      [
        "حَافِلَةٌ",
        "Bus"
      ],
      [
        "دَائِمًا",
        "Toujours"
      ],
      [
        "أَحْيَانًا",
        "Parfois"
      ],
      [
        "نَادِرًا",
        "Rarement"
      ],
      [
        "مُبَكِّرٌ",
        "Tôt / précoce"
      ],
      [
        "مُتَأَخِّرٌ",
        "En retard / tard"
      ],
      [
        "كُلَّ يَوْمٍ",
        "Chaque jour"
      ],
      [
        "قَبْلَ",
        "Avant"
      ],
      [
        "بَعْدَ",
        "Après"
      ],
      [
        "ثُمَّ",
        "Ensuite"
      ]
    ],
    "dialect": [
      {
        "msa": "أَذْهَبُ إِلَى الْعَمَلِ صَبَاحًا.",
        "levant": "بْرُوحْ عَ الشُّغْلْ الصُّبْحْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "Au Levant, بِرُوحْ / بْرُوحْ est fréquent pour « je vais » ; عَلَى peut se réduire à عَ."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel mode est normalement utilisé pour une habitude actuelle ?",
        "options": [
          "L’inaccompli indicatif",
          "Indicatif",
          "Subjonctif"
        ],
        "answer": 0,
        "why": "Une habitude est généralement présentée à l’inaccompli."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَحْيَانًا ?",
        "options": [
          "Petit-déjeuner",
          "Parfois",
          "Travail"
        ],
        "answer": 1,
        "why": "Ne pas confondre avec دَائِمًا (toujours)."
      },
      {
        "type": "choice",
        "prompt": "Quel mot signifie « avant » ?",
        "options": [
          "حَافِلَةٌ",
          "دَائِمًا",
          "قَبْلَ"
        ],
        "answer": 2,
        "why": "قَبْلَ est suivi d’un complément au génitif."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مَسَاءٌ » ?",
        "options": [
          "Soir",
          "Se réveiller",
          "Matin"
        ],
        "answer": 0,
        "why": "مَسَاءٌ = Soir. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « دَائِمًا » ?",
        "options": [
          "Petit-déjeuner",
          "Toujours",
          "Travail"
        ],
        "answer": 1,
        "why": "دَائِمًا = Toujours. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « كُلَّ يَوْمٍ » ?",
        "options": [
          "Bus",
          "Toujours",
          "Chaque jour"
        ],
        "answer": 2,
        "why": "كُلَّ يَوْمٍ = Chaque jour. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِسْتَيْقَظَ ?",
        "options": [
          "اِسْتِيقَاظٌ",
          "تَنَاوُلٌ",
          "رُجُوعٌ"
        ],
        "answer": 0,
        "why": "اِسْتَيْقَظَ – يَسْتَيْقِظُ – اِسْتِيقَاظٌ (se réveiller)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَنَاوَلَ ?",
        "options": [
          "صَبَاحٌ",
          "تَنَاوُلٌ",
          "مَسَاءٌ"
        ],
        "answer": 1,
        "why": "تَنَاوَلَ – يَتَنَاوَلُ – تَنَاوُلٌ (prendre (un repas))."
      },
      {
        "type": "input",
        "prompt": "Écris « Matin » en arabe (forme du lexique).",
        "answer": "صَبَاحٌ",
        "accepted": [
          "صباح"
        ],
        "why": "صَبَاحٌ signifie « Matin ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "لَيْلَى",
        "ar": "مَتَى تَسْتَيْقِظُ فِي الصَّبَاحِ؟",
        "fr": "À quelle heure te réveilles-tu le matin ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "أَسْتَيْقِظُ فِي السَّابِعَةِ تَقْرِيبًا.",
        "fr": "Je me réveille vers sept heures."
      },
      {
        "speaker": "لَيْلَى",
        "ar": "وَهَلْ تَقْرَأُ قَبْلَ النَّوْمِ؟",
        "fr": "Lis-tu avant de dormir ?"
      },
      {
        "speaker": "سَامِي",
        "ar": "نَعَمْ، أَقْرَأُ أَحْيَانًا.",
        "fr": "Oui, je lis parfois."
      }
    ],
    "writing": {
      "prompt": "Rédige 8 à 10 phrases sur une journée habituelle. Insère trois marqueurs de fréquence et deux horaires.",
      "modelAr": "أَسْتَيْقِظُ مُبَكِّرًا. أَتَنَاوَلُ الْفُطُورَ فِي الْبَيْتِ. أَذْهَبُ إِلَى الْعَمَلِ صَبَاحًا. أُرَاجِعُ دُرُوسِي مَسَاءً. أَقْرَأُ أَحْيَانًا قَبْلَ النَّوْمِ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "a2-02-v2",
    "level": "A2",
    "number": 2,
    "month": 1,
    "emoji": "🚆",
    "title": "Raconter au passé",
    "minutes": 90,
    "goal": "Raconter un événement passé avec un ordre chronologique clair.",
    "grammar": [
      {
        "title": "L’accompli",
        "body": "La forme كَتَبَ signifie « il a écrit ». Les suffixes conjuguent le passé : كَتَبْتُ (j’ai écrit), كَتَبْتَ (tu masc.), كَتَبَتْ (elle a écrit), كَتَبْنَا (nous avons écrit). L’accompli arabe ne correspond pas mécaniquement à un temps français unique."
      },
      {
        "title": "Marqueurs temporels",
        "body": "أَمْسِ = hier, أَوَّلَ أَمْسِ = avant-hier, الْأُسْبُوعَ الْمَاضِيَ = la semaine dernière, بَعْدَ ذَلِكَ = ensuite. Place-les au début ou à la fin selon ce que tu souhaites mettre en relief."
      },
      {
        "title": "كَانَ et la situation passée",
        "body": "كَانَ الْجَوُّ جَمِيلًا = il faisait beau (littéralement « le temps était beau »). Après كَانَ, le prédicat est normalement à l’accusatif : جَمِيلًا. Compare الْجَوُّ جَمِيلٌ (il fait beau) et كَانَ الْجَوُّ جَمِيلًا."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "أَمْسِ زُرْتُ صَدِيقًا فِي مَدِينَةٍ قَرِيبَةٍ. سَافَرْتُ بِالْقِطَارِ فِي الصَّبَاحِ، وَوَصَلْتُ قَبْلَ الظُّهْرِ. كَانَ الْجَوُّ جَمِيلًا، فَتَمَشَّيْنَا فِي الْحَدِيقَةِ. بَعْدَ ذَلِكَ تَنَاوَلْنَا الْغَدَاءَ وَعُدْتُ مَسَاءً.",
      "fr": "Hier, j’ai rendu visite à un ami dans une ville proche. J’ai voyagé en train le matin et je suis arrivé avant midi. Il faisait beau, alors nous nous sommes promenés dans le parc. Ensuite, nous avons déjeuné et je suis revenu le soir."
    },
    "examples": [
      {
        "ar": "مَاذَا فَعَلْتَ أَمْسِ؟",
        "fr": "Qu’as-tu fait hier ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَمْسِ",
              "أَمْسِ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "زُرْتُ صَدِيقِي ثُمَّ تَمَشَّيْنَا.",
        "fr": "J’ai visité mon ami, puis nous nous sommes promenés.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "صَدِيقٌ",
              "صَدِيقٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "كَيْفَ كَانَ الْجَوُّ؟",
        "fr": "Quel temps faisait-il ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "زَارَ",
        "present": "يَزُورُ",
        "masdar": "زِيَارَةٌ",
        "fr": "rendre visite",
        "lookup": "زار"
      },
      {
        "past": "سَافَرَ",
        "present": "يُسَافِرُ",
        "masdar": "مُسَافَرَةٌ / سَفَرٌ",
        "fr": "voyager",
        "lookup": "سافر"
      },
      {
        "past": "وَصَلَ",
        "present": "يَصِلُ",
        "masdar": "وُصُولٌ",
        "fr": "arriver",
        "lookup": "وصل"
      }
    ],
    "words": [
      [
        "أَمْسِ",
        "Hier"
      ],
      [
        "مَاضٍ",
        "Passé / précédent"
      ],
      [
        "قِطَارٌ",
        "Train"
      ],
      [
        "ظُهْرٌ",
        "Midi"
      ],
      [
        "حَدِيقَةٌ",
        "Jardin / parc"
      ],
      [
        "صَدِيقٌ",
        "Ami"
      ],
      [
        "زِيَارَةٌ",
        "Visite"
      ],
      [
        "غَدَاءٌ",
        "Déjeuner"
      ],
      [
        "رِحْلَةٌ",
        "Voyage"
      ],
      [
        "قَرِيبٌ",
        "Proche"
      ],
      [
        "جَمِيلٌ",
        "Beau"
      ],
      [
        "وَصَلَ",
        "Arriver"
      ],
      [
        "عَادَ",
        "Revenir"
      ],
      [
        "بَعْدَ ذَلِكَ",
        "Après cela"
      ],
      [
        "أَوَّلَ أَمْسِ",
        "Avant-hier"
      ],
      [
        "الْأُسْبُوعُ الْمَاضِي",
        "La semaine dernière"
      ]
    ],
    "dialect": [
      {
        "msa": "زُرْتُ صَدِيقِي أَمْسِ.",
        "levant": "زُرْتْ رَفِيقِي إِمْبَارِحْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "إِمْبَارِحْ = hier en levantin ; رَفِيق correspond souvent à ami."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle forme signifie « j’ai écrit » ?",
        "options": [
          "ظُهْرٌ",
          "كَتَبْتُ",
          "حَدِيقَةٌ"
        ],
        "answer": 1,
        "why": "Le suffixe ـْتُ identifie la première personne au passé."
      },
      {
        "type": "choice",
        "prompt": "Avec كَانَ, le prédicat nominal est normalement...",
        "options": [
          "Visite",
          "Déjeuner",
          "À l’accusatif"
        ],
        "answer": 2,
        "why": "كَانَ الْجَوُّ جَمِيلًا."
      },
      {
        "type": "choice",
        "prompt": "Que signifie بَعْدَ ذَلِكَ ?",
        "options": [
          "Après cela",
          "Proche",
          "Beau"
        ],
        "answer": 0,
        "why": "Marqueur de succession temporelle."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « قِطَارٌ » ?",
        "options": [
          "Hier",
          "Passé / précédent",
          "Train"
        ],
        "answer": 2,
        "why": "قِطَارٌ = Train. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « غَدَاءٌ » ?",
        "options": [
          "Déjeuner",
          "Midi",
          "Jardin / parc"
        ],
        "answer": 0,
        "why": "غَدَاءٌ = Déjeuner. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « عَادَ » ?",
        "options": [
          "Visite",
          "Revenir",
          "Déjeuner"
        ],
        "answer": 1,
        "why": "عَادَ = Revenir. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de زَارَ ?",
        "options": [
          "زِيَارَةٌ",
          "رِحْلَةٌ",
          "قَرِيبٌ"
        ],
        "answer": 0,
        "why": "زَارَ – يَزُورُ – زِيَارَةٌ (rendre visite)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de سَافَرَ ?",
        "options": [
          "جَمِيلٌ",
          "مُسَافَرَةٌ / سَفَرٌ",
          "وَصَلَ"
        ],
        "answer": 1,
        "why": "سَافَرَ – يُسَافِرُ – مُسَافَرَةٌ / سَفَرٌ (voyager)."
      },
      {
        "type": "input",
        "prompt": "Écris « Passé / précédent » en arabe (forme du lexique).",
        "answer": "مَاضٍ",
        "accepted": [
          "ماض"
        ],
        "why": "مَاضٍ signifie « Passé / précédent ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "نُور",
        "ar": "مَاذَا فَعَلْتَ أَمْسِ؟",
        "fr": "Qu’as-tu fait hier ?"
      },
      {
        "speaker": "خَالِد",
        "ar": "زُرْتُ صَدِيقِي ثُمَّ تَمَشَّيْنَا.",
        "fr": "J’ai visité mon ami, puis nous nous sommes promenés."
      },
      {
        "speaker": "نُور",
        "ar": "كَيْفَ كَانَ الْجَوُّ؟",
        "fr": "Quel temps faisait-il ?"
      },
      {
        "speaker": "خَالِد",
        "ar": "كَانَ الْجَوُّ مُشْمِسًا.",
        "fr": "Il faisait beau / ensoleillé."
      }
    ],
    "writing": {
      "prompt": "Raconte un déplacement passé en 100 mots environ : départ, trajet, rencontre, retour. Emploie au moins six verbes à l’accompli.",
      "modelAr": "الْأُسْبُوعَ الْمَاضِيَ سَافَرْتُ إِلَى مَدِينَةٍ قَرِيبَةٍ. وَصَلْتُ فِي الصَّبَاحِ وَزُرْتُ صَدِيقًا. ثُمَّ تَنَاوَلْنَا الْغَدَاءَ، وَعُدْتُ إِلَى الْبَيْتِ مَسَاءً.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "a2-03-v2",
    "level": "A2",
    "number": 3,
    "month": 1,
    "emoji": "🌱",
    "title": "Projets et futur",
    "minutes": 90,
    "goal": "Exprimer une intention et distinguer futur et souhait.",
    "grammar": [
      {
        "title": "Futur proche ou envisagé",
        "body": "Le préfixe سَـ se fixe à l’inaccompli : سَأَسَافِرُ = je voyagerai. سَوْفَ أَسَافِرُ a aussi une valeur future. Les deux sont fréquents à l’écrit ; ne cherche pas une règle rigide de délai."
      },
      {
        "title": "Je veux + infinitif français",
        "body": "L’arabe n’emploie pas d’infinitif verbal identique au français : أُرِيدُ أَنْ أَتَعَلَّمَ = je veux apprendre. Après أَنْ, l’inaccompli régulier prend la terminaison du subjonctif (منصوب) : أَتَعَلَّمَ et non أَتَعَلَّمُ."
      },
      {
        "title": "Expression du projet",
        "body": "خُطَّةٌ = plan ; أُخَطِّطُ لِـ = je prévois de ; أَنْوِي أَنْ = j’ai l’intention de. Distinction utile : l’intention peut être exprimée sans garantir la réalisation."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "فِي الشَّهْرِ الْقَادِمِ سَأَبْدَأُ دَوْرَةً جَدِيدَةً فِي اللُّغَةِ الْعَرَبِيَّةِ. أُرِيدُ أَنْ أَفْهَمَ الْأَخْبَارَ وَأَنْ أَتَحَدَّثَ بِثِقَةٍ. لِذَلِكَ أُخَطِّطُ لِلدِّرَاسَةِ كُلَّ يَوْمٍ، وَلَكِنَّنِي سَأَحْتَاجُ إِلَى الصَّبْرِ.",
      "fr": "Le mois prochain, je commencerai un nouveau cours d’arabe. Je veux comprendre les nouvelles et parler avec assurance. C’est pourquoi je prévois d’étudier chaque jour, mais j’aurai besoin de patience."
    },
    "examples": [
      {
        "ar": "مَاذَا سَتَفْعَلُ غَدًا؟",
        "fr": "Que feras-tu demain ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "سَأَدْرُسُ الْعَرَبِيَّةَ وَسَأُشَاهِدُ فِيلْمًا.",
        "fr": "J’étudierai l’arabe et je regarderai un film.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ تُرِيدُ أَنْ تَتَحَدَّثَ بِالْعَرَبِيَّةِ؟",
        "fr": "Veux-tu parler en arabe ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "بَدَأَ",
        "present": "يَبْدَأُ",
        "masdar": "بَدْءٌ",
        "fr": "commencer",
        "lookup": "بدأ"
      },
      {
        "past": "خَطَّطَ",
        "present": "يُخَطِّطُ",
        "masdar": "تَخْطِيطٌ",
        "fr": "planifier",
        "lookup": "خطط"
      },
      {
        "past": "اِحْتَاجَ",
        "present": "يَحْتَاجُ",
        "masdar": "اِحْتِيَاجٌ",
        "fr": "avoir besoin",
        "lookup": "احتاج"
      }
    ],
    "words": [
      [
        "خُطَّةٌ",
        "Plan"
      ],
      [
        "مَشْرُوعٌ",
        "Projet"
      ],
      [
        "مُسْتَقْبَلٌ",
        "Avenir"
      ],
      [
        "شَهْرٌ",
        "Mois"
      ],
      [
        "قَادِمٌ",
        "Prochain"
      ],
      [
        "دَوْرَةٌ",
        "Formation / cours"
      ],
      [
        "ثِقَةٌ",
        "Confiance"
      ],
      [
        "صَبْرٌ",
        "Patience"
      ],
      [
        "هَدَفٌ",
        "Objectif"
      ],
      [
        "خَبَرٌ",
        "Information / nouvelle"
      ],
      [
        "سَوْفَ",
        "Particule de futur"
      ],
      [
        "سَـ",
        "Préfixe de futur"
      ],
      [
        "أَنْ",
        "Que (subjonctif)"
      ],
      [
        "تَطَوُّرٌ",
        "Progrès / développement"
      ],
      [
        "اِسْتِمْرَارٌ",
        "Continuité"
      ],
      [
        "فُرْصَةٌ",
        "Occasion / chance"
      ]
    ],
    "dialect": [
      {
        "msa": "سَأَدْرُسُ غَدًا.",
        "levant": "رَحْ اِدْرُسْ بُكْرَا.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "رَحْ est un marqueur courant du futur, et بُكْرَا signifie demain."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Après أَنْ, quelle forme est correcte ?",
        "options": [
          "ثِقَةٌ",
          "صَبْرٌ",
          "أَنْ أَتَعَلَّمَ"
        ],
        "answer": 2,
        "why": "Le verbe est au subjonctif."
      },
      {
        "type": "choice",
        "prompt": "Quelle particule marque le futur ?",
        "options": [
          "سَوْفَ",
          "خَبَرٌ",
          "سَـ"
        ],
        "answer": 0,
        "why": "سَوْفَ se place devant l’inaccompli."
      },
      {
        "type": "choice",
        "prompt": "Que signifie خُطَّةٌ ?",
        "options": [
          "Que (subjonctif)",
          "Un plan",
          "Progrès / développement"
        ],
        "answer": 1,
        "why": "On l’utilise pour un projet organisé."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مُسْتَقْبَلٌ » ?",
        "options": [
          "Plan",
          "Avenir",
          "Projet"
        ],
        "answer": 1,
        "why": "مُسْتَقْبَلٌ = Avenir. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « صَبْرٌ » ?",
        "options": [
          "Mois",
          "Prochain",
          "Patience"
        ],
        "answer": 2,
        "why": "صَبْرٌ = Patience. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « أَنْ » ?",
        "options": [
          "Que (subjonctif)",
          "Confiance",
          "Patience"
        ],
        "answer": 0,
        "why": "أَنْ = Que (subjonctif). Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de بَدَأَ ?",
        "options": [
          "بَدْءٌ",
          "تَخْطِيطٌ",
          "اِحْتِيَاجٌ"
        ],
        "answer": 0,
        "why": "بَدَأَ – يَبْدَأُ – بَدْءٌ (commencer)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de خَطَّطَ ?",
        "options": [
          "مَشْرُوعٌ",
          "تَخْطِيطٌ",
          "مُسْتَقْبَلٌ"
        ],
        "answer": 1,
        "why": "خَطَّطَ – يُخَطِّطُ – تَخْطِيطٌ (planifier)."
      },
      {
        "type": "input",
        "prompt": "Écris « Projet » en arabe (forme du lexique).",
        "answer": "مَشْرُوعٌ",
        "accepted": [
          "مشروع"
        ],
        "why": "مَشْرُوعٌ signifie « Projet ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْيَم",
        "ar": "مَاذَا سَتَفْعَلُ غَدًا؟",
        "fr": "Que feras-tu demain ?"
      },
      {
        "speaker": "عُمَر",
        "ar": "سَأَدْرُسُ الْعَرَبِيَّةَ وَسَأُشَاهِدُ فِيلْمًا.",
        "fr": "J’étudierai l’arabe et je regarderai un film."
      },
      {
        "speaker": "مَرْيَم",
        "ar": "هَلْ تُرِيدُ أَنْ تَتَحَدَّثَ بِالْعَرَبِيَّةِ؟",
        "fr": "Veux-tu parler en arabe ?"
      },
      {
        "speaker": "عُمَر",
        "ar": "نَعَمْ، أُرِيدُ أَنْ أُحَسِّنَ مُسْتَوَايَ.",
        "fr": "Oui, je veux améliorer mon niveau."
      }
    ],
    "writing": {
      "prompt": "Écris un programme d’étude pour les quatre prochaines semaines, avec cinq promesses au futur et trois souhaits construits avec أَنْ.",
      "modelAr": "سَأَدْرُسُ نِصْفَ سَاعَةٍ كُلَّ يَوْمٍ. أُرِيدُ أَنْ أَتَكَلَّمَ بِوُضُوحٍ. سَأَحْفَظُ كَلِمَاتٍ جَدِيدَةً وَسَأُرَاجِعُ الْأَفْعَالَ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "a2-04-v2",
    "level": "A2",
    "number": 4,
    "month": 2,
    "emoji": "💡",
    "title": "Pouvoir, devoir, avoir besoin",
    "minutes": 90,
    "goal": "Formuler capacité, obligation et besoin avec précision.",
    "grammar": [
      {
        "title": "La capacité",
        "body": "أَسْتَطِيعُ أَنْ أَقْرَأَ = je peux lire (j’en suis capable). Le verbe qui suit أَنْ est au subjonctif : أَقْرَأَ. On rencontre aussi يُمْكِنُنِي أَنْ... (« il m’est possible de »)."
      },
      {
        "title": "L’obligation",
        "body": "يَجِبُ أَنْ أَذْهَبَ = il faut que je parte. Pour une obligation personnelle, عَلَيَّ أَنْ أَذْهَبَ = je dois partir. Il ne faut pas transformer يَجِبُ en verbe conjugué librement à chaque personne."
      },
      {
        "title": "Le besoin",
        "body": "أَحْتَاجُ إِلَى كِتَابٍ = j’ai besoin d’un livre. Avec un verbe : أَحْتَاجُ إِلَى أَنْ أَرْتَاحَ = j’ai besoin de me reposer. Le nom après إِلَى prend le génitif."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "يَعْمَلُ رَامِي فِي مَكْتَبٍ صَغِيرٍ. يَجِبُ عَلَيْهِ أَنْ يَحْضُرَ فِي الْوَقْتِ الْمُحَدَّدِ، وَلَكِنَّهُ يَسْتَطِيعُ أَنْ يَعْمَلَ مِنَ الْبَيْتِ أَحْيَانًا. عِنْدَمَا يَتْعَبُ، يَحْتَاجُ إِلَى اسْتِرَاحَةٍ قَصِيرَةٍ.",
      "fr": "Rami travaille dans un petit bureau. Il doit arriver à l’heure prévue, mais il peut parfois travailler de chez lui. Lorsqu’il se fatigue, il a besoin d’une courte pause."
    },
    "examples": [
      {
        "ar": "هَلْ تَسْتَطِيعُ أَنْ تُنْهِيَ الْوَاجِبَ الْيَوْمَ؟",
        "fr": "Peux-tu terminer le devoir aujourd’hui ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "وَاجِبٌ",
              "وَاجِبٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، وَلَكِنَّنِي أَحْتَاجُ إِلَى وَقْتٍ أَكْثَرَ.",
        "fr": "Oui, mais j’ai besoin de davantage de temps.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "وَقْتٌ",
              "وَقْتٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "يَجِبُ أَنْ تُسَلِّمَهُ غَدًا.",
        "fr": "Tu dois le rendre demain.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "يَجِبُ",
              "يَجِبُ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "اِسْتَطَاعَ",
        "present": "يَسْتَطِيعُ",
        "masdar": "اِسْتِطَاعَةٌ",
        "fr": "pouvoir (capacité)",
        "lookup": "استطاع"
      },
      {
        "past": "اِحْتَاجَ",
        "present": "يَحْتَاجُ",
        "masdar": "اِحْتِيَاجٌ",
        "fr": "avoir besoin",
        "lookup": "احتاج"
      },
      {
        "past": "حَضَرَ",
        "present": "يَحْضُرُ",
        "masdar": "حُضُورٌ",
        "fr": "être présent / venir",
        "lookup": "حضر"
      }
    ],
    "words": [
      [
        "قُدْرَةٌ",
        "Capacité"
      ],
      [
        "وَاجِبٌ",
        "Devoir / obligation"
      ],
      [
        "ضَرُورَةٌ",
        "Nécessité"
      ],
      [
        "اِسْتِرَاحَةٌ",
        "Pause / repos"
      ],
      [
        "مَكْتَبٌ",
        "Bureau"
      ],
      [
        "وَقْتٌ",
        "Temps"
      ],
      [
        "مُحَدَّدٌ",
        "Déterminé"
      ],
      [
        "تَعَبٌ",
        "Fatigue"
      ],
      [
        "مُمْكِنٌ",
        "Possible"
      ],
      [
        "مَسْمُوحٌ",
        "Autorisé"
      ],
      [
        "مَمْنُوعٌ",
        "Interdit"
      ],
      [
        "يَجِبُ",
        "Il faut"
      ],
      [
        "عَلَيَّ",
        "Je dois / sur moi"
      ],
      [
        "إِلَى",
        "Vers / à"
      ],
      [
        "مُهِمٌّ",
        "Important"
      ],
      [
        "ضَرُورِيٌّ",
        "Nécessaire"
      ]
    ],
    "dialect": [
      {
        "msa": "أَسْتَطِيعُ أَنْ أَتَكَلَّمَ الْعَرَبِيَّةَ.",
        "levant": "فِينِي اِحْكِي عَرَبِيّ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "فِينِي correspond souvent à « je peux » ; le dialecte emploie de multiples variantes locales."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Après أَحْتَاجُ, quelle préposition est fréquente ?",
        "options": [
          "إِلَى",
          "مَسْمُوحٌ",
          "مَمْنُوعٌ"
        ],
        "answer": 0,
        "why": "أَحْتَاجُ إِلَى..."
      },
      {
        "type": "choice",
        "prompt": "Complète : عَلَيَّ ___ أَدْرُسَ.",
        "options": [
          "عَلَيَّ",
          "أَنْ",
          "إِلَى"
        ],
        "answer": 1,
        "why": "La structure exprime « je dois étudier »."
      },
      {
        "type": "choice",
        "prompt": "Que signifie اِسْتِطَاعَةٌ ?",
        "options": [
          "pouvoir (capacité)",
          "avoir besoin",
          "Capacité"
        ],
        "answer": 2,
        "why": "Maṣdar de اِسْتَطَاعَ."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « ضَرُورَةٌ » ?",
        "options": [
          "Nécessité",
          "Capacité",
          "Devoir / obligation"
        ],
        "answer": 0,
        "why": "ضَرُورَةٌ = Nécessité. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « تَعَبٌ » ?",
        "options": [
          "Pause / repos",
          "Fatigue",
          "Bureau"
        ],
        "answer": 1,
        "why": "تَعَبٌ = Fatigue. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « عَلَيَّ » ?",
        "options": [
          "Déterminé",
          "Fatigue",
          "Je dois / sur moi"
        ],
        "answer": 2,
        "why": "عَلَيَّ = Je dois / sur moi. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِسْتَطَاعَ ?",
        "options": [
          "اِسْتِطَاعَةٌ",
          "تَعَبٌ",
          "مُمْكِنٌ"
        ],
        "answer": 0,
        "why": "اِسْتَطَاعَ – يَسْتَطِيعُ – اِسْتِطَاعَةٌ (pouvoir (capacité))."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِحْتَاجَ ?",
        "options": [
          "مَمْنُوعٌ",
          "اِحْتِيَاجٌ",
          "يَجِبُ"
        ],
        "answer": 1,
        "why": "اِحْتَاجَ – يَحْتَاجُ – اِحْتِيَاجٌ (avoir besoin)."
      },
      {
        "type": "input",
        "prompt": "Écris « Devoir / obligation » en arabe (forme du lexique).",
        "answer": "وَاجِبٌ",
        "accepted": [
          "واجب"
        ],
        "why": "وَاجِبٌ signifie « Devoir / obligation ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مُعَلِّمَة",
        "ar": "هَلْ تَسْتَطِيعُ أَنْ تُنْهِيَ الْوَاجِبَ الْيَوْمَ؟",
        "fr": "Peux-tu terminer le devoir aujourd’hui ?"
      },
      {
        "speaker": "طَالِب",
        "ar": "نَعَمْ، وَلَكِنَّنِي أَحْتَاجُ إِلَى وَقْتٍ أَكْثَرَ.",
        "fr": "Oui, mais j’ai besoin de davantage de temps."
      },
      {
        "speaker": "مُعَلِّمَة",
        "ar": "يَجِبُ أَنْ تُسَلِّمَهُ غَدًا.",
        "fr": "Tu dois le rendre demain."
      },
      {
        "speaker": "طَالِب",
        "ar": "حَسَنًا، سَأُحَاوِلُ.",
        "fr": "D’accord, j’essaierai."
      }
    ],
    "writing": {
      "prompt": "Formule cinq obligations, cinq capacités et trois besoins dans ton quotidien, puis transforme deux phrases à la négation.",
      "modelAr": "أَسْتَطِيعُ أَنْ أَقْرَأَ نَصًّا قَصِيرًا. عَلَيَّ أَنْ أَعْمَلَ الْيَوْمَ. أَحْتَاجُ إِلَى وَقْتٍ لِلدِّرَاسَةِ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "a2-05-v2",
    "level": "A2",
    "number": 5,
    "month": 2,
    "emoji": "❓",
    "title": "Questions et négation",
    "minutes": 90,
    "goal": "Poser des questions ouvertes et distinguer plusieurs négations.",
    "grammar": [
      {
        "title": "Questions fermées et ouvertes",
        "body": "هَلْ أَنْتَ مُسْتَعِدٌّ؟ = Es-tu prêt ? مَتَى تَصِلُ؟ = Quand arrives-tu ? لِمَاذَا تَدْرُسُ؟ = Pourquoi étudies-tu ? كَيْفَ = comment ; أَيْنَ = où ; كَمْ = combien."
      },
      {
        "title": "Négation du présent et du passé",
        "body": "لَا أَفْهَمُ = je ne comprends pas. لَمْ أَفْهَمْ = je n’ai pas compris : لَمْ entraîne le jussif (مجزوم). مَا فَهِمْتُ est une autre façon de nier une action passée."
      },
      {
        "title": "Négation du futur",
        "body": "لَنْ أَتَأَخَّرَ = je ne serai pas en retard. لَنْ entraîne le subjonctif ; ne mélange pas لَنْ + indicatif. La négation de la phrase nominale peut employer لَيْسَ : لَسْتُ مُتْعَبًا = je ne suis pas fatigué."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "سَأَلَتْ هِنْدٌ زَمِيلَهَا: «لِمَاذَا لَمْ تَحْضُرْ أَمْسِ؟» فَأَجَابَ: «كُنْتُ مَرِيضًا، وَلَمْ أَسْتَطِعْ أَنْ أَخْرُجَ». سَأَلَتْ: «هَلْ أَنْتَ بِخَيْرٍ الْيَوْمَ؟» قَالَ: «نَعَمْ، وَلَنْ أَتَغَيَّبَ غَدًا».",
      "fr": "Hind a demandé à son collègue pourquoi il n’était pas venu hier. Il a répondu qu’il était malade et n’avait pas pu sortir. Elle a demandé s’il allait bien aujourd’hui. Il a dit que oui et qu’il ne s’absenterait pas demain."
    },
    "examples": [
      {
        "ar": "لِمَاذَا لَمْ تَأْتِ؟",
        "fr": "Pourquoi n’es-tu pas venu ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "لِمَاذَا",
              "لِمَاذَا"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَمْ أَجِدْ الْحَافِلَةَ.",
        "fr": "Je n’ai pas trouvé le bus.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ سَتَأْتِي غَدًا؟",
        "fr": "Viendras-tu demain ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "غَدًا",
              "غَدًا"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "سَأَلَ",
        "present": "يَسْأَلُ",
        "masdar": "سُؤَالٌ",
        "fr": "demander",
        "lookup": "سأل"
      },
      {
        "past": "فَهِمَ",
        "present": "يَفْهَمُ",
        "masdar": "فَهْمٌ",
        "fr": "comprendre",
        "lookup": "فهم"
      },
      {
        "past": "تَغَيَّبَ",
        "present": "يَتَغَيَّبُ",
        "masdar": "تَغَيُّبٌ",
        "fr": "s’absenter",
        "lookup": "تغيب"
      }
    ],
    "words": [
      [
        "سُؤَالٌ",
        "Question"
      ],
      [
        "جَوَابٌ",
        "Réponse"
      ],
      [
        "لِمَاذَا",
        "Pourquoi"
      ],
      [
        "مَتَى",
        "Quand"
      ],
      [
        "كَيْفَ",
        "Comment"
      ],
      [
        "أَيْنَ",
        "Où"
      ],
      [
        "كَمْ",
        "Combien"
      ],
      [
        "لَا",
        "Ne... pas (présent notamment)"
      ],
      [
        "لَمْ",
        "Ne... pas (passé avec jussif)"
      ],
      [
        "لَنْ",
        "Ne... pas (futur)"
      ],
      [
        "لَيْسَ",
        "Ne pas être"
      ],
      [
        "مَرِيضٌ",
        "Malade"
      ],
      [
        "غَائِبٌ",
        "Absent"
      ],
      [
        "حَاضِرٌ",
        "Présent"
      ],
      [
        "غَدًا",
        "Demain"
      ],
      [
        "تَأَخُّرٌ",
        "Retard"
      ]
    ],
    "dialect": [
      {
        "msa": "لَمْ أَفْهَمِ السُّؤَالَ.",
        "levant": "مَا فْهِمْتِ السُّؤَالْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "Le dialecte utilise souvent مَا et une forme passée là où la fuṣḥā a لَمْ + jussif."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle particule nie le futur ?",
        "options": [
          "حَاضِرٌ",
          "لَنْ",
          "غَدًا"
        ],
        "answer": 1,
        "why": "لَنْ prend le subjonctif."
      },
      {
        "type": "choice",
        "prompt": "Complète : لَمْ أَكْتُـ...",
        "options": [
          "تَأَخُّرٌ",
          "سُؤَالٌ",
          "بْ"
        ],
        "answer": 2,
        "why": "Le jussif du verbe sain masculin singulier se termine normalement par sukūn : أَكْتُبْ."
      },
      {
        "type": "choice",
        "prompt": "Que signifie مَتَى ?",
        "options": [
          "Quand",
          "Une hypothèse",
          "Une obligation"
        ],
        "answer": 0,
        "why": "Interrogatif temporel."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « لِمَاذَا » ?",
        "options": [
          "Question",
          "Réponse",
          "Pourquoi"
        ],
        "answer": 2,
        "why": "لِمَاذَا = Pourquoi. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « لَا » ?",
        "options": [
          "Ne... pas (présent notamment)",
          "Quand",
          "Comment"
        ],
        "answer": 0,
        "why": "لَا = Ne... pas (présent notamment). Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « غَائِبٌ » ?",
        "options": [
          "Combien",
          "Absent",
          "Ne... pas (présent notamment)"
        ],
        "answer": 1,
        "why": "غَائِبٌ = Absent. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de سَأَلَ ?",
        "options": [
          "سُؤَالٌ",
          "جَوَابٌ",
          "لِمَاذَا"
        ],
        "answer": 0,
        "why": "سَأَلَ – يَسْأَلُ – سُؤَالٌ (demander)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de فَهِمَ ?",
        "options": [
          "جَوَابٌ",
          "فَهْمٌ",
          "لِمَاذَا"
        ],
        "answer": 1,
        "why": "فَهِمَ – يَفْهَمُ – فَهْمٌ (comprendre)."
      },
      {
        "type": "input",
        "prompt": "Écris « Réponse » en arabe (forme du lexique).",
        "answer": "جَوَابٌ",
        "accepted": [
          "جواب"
        ],
        "why": "جَوَابٌ signifie « Réponse ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "سَارَة",
        "ar": "لِمَاذَا لَمْ تَأْتِ؟",
        "fr": "Pourquoi n’es-tu pas venu ?"
      },
      {
        "speaker": "بَاسِل",
        "ar": "لَمْ أَجِدْ الْحَافِلَةَ.",
        "fr": "Je n’ai pas trouvé le bus."
      },
      {
        "speaker": "سَارَة",
        "ar": "هَلْ سَتَأْتِي غَدًا؟",
        "fr": "Viendras-tu demain ?"
      },
      {
        "speaker": "بَاسِل",
        "ar": "نَعَمْ، لَنْ أَتَأَخَّرَ.",
        "fr": "Oui, je ne serai pas en retard."
      }
    ],
    "writing": {
      "prompt": "Construis six questions différentes et réponds par une phrase affirmative puis une phrase négative adaptée au temps.",
      "modelAr": "أَيْنَ تَعْمَلُ؟ أَعْمَلُ فِي الْمَدِينَةِ. لَا أَعْمَلُ فِي الْقَرْيَةِ. هَلْ سَتَسَافِرُ غَدًا؟ لَنْ أُسَافِرَ غَدًا.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "a2-06-v2",
    "level": "A2",
    "number": 6,
    "month": 2,
    "emoji": "⚖️",
    "title": "Comparer et décrire",
    "minutes": 90,
    "goal": "Comparer personnes, objets et lieux en utilisant le comparatif.",
    "grammar": [
      {
        "title": "Comparatif أفعل",
        "body": "كَبيرٌ → أَكْبَرُ (plus grand), صَغِيرٌ → أَصْغَرُ (plus petit), جَمِيلٌ → أَجْمَلُ (plus beau). Après le comparatif, مِنْ introduit le terme comparé : هَذَا أَكْبَرُ مِنْ ذَلِكَ."
      },
      {
        "title": "Comparatifs analytiques",
        "body": "Pour certains adjectifs, préfère أَكْثَرُ + nom verbal ou un adjectif approprié : هَذَا أَكْثَرُ أَهَمِّيَّةً = ceci est plus important. Le mot qui suit أَكْثَرُ peut avoir la fonction de tamyīz à l’accusatif."
      },
      {
        "title": "Superlatif et précision",
        "body": "أَفْضَلُ = meilleur ; هَذَا هُوَ الْحَلُّ الْأَفْضَلُ = c’est la meilleure solution. Pour exprimer l’égalité : بِقَدْرِ ... ou مِثْلُ ... selon le contexte. Évite de calquer chaque « plus » français."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "تَقَعُ مَدِينَتِي قُرْبَ الْبَحْرِ. هِيَ أَصْغَرُ مِنَ الْعَاصِمَةِ، وَلَكِنَّهَا أَهْدَأُ مِنْهَا. الْمُوَاصَلَاتُ فِي الْعَاصِمَةِ أَسْرَعُ، أَمَّا مَدِينَتِي فَهِيَ أَقْرَبُ إِلَى الطَّبِيعَةِ. أُفَضِّلُ الْعَيْشَ فِي مَكَانٍ هَادِئٍ.",
      "fr": "Ma ville se trouve près de la mer. Elle est plus petite que la capitale, mais plus calme. Les transports dans la capitale sont plus rapides ; quant à ma ville, elle est plus proche de la nature. Je préfère vivre dans un endroit calme."
    },
    "examples": [
      {
        "ar": "أَيُّ الْمَدِينَتَيْنِ أَكْبَرُ؟",
        "fr": "Laquelle des deux villes est plus grande ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَكْبَرُ",
              "أَكْبَرُ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "الْعَاصِمَةُ أَكْبَرُ، وَلَكِنَّهَا أَكْثَرُ اِزْدِحَامًا.",
        "fr": "La capitale est plus grande, mais plus encombrée.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "أَكْبَرُ",
              "أَكْبَرُ"
            ],
            [
              "أَكْثَرُ",
              "أَكْثَرُ"
            ],
            [
              "عَاصِمَةٌ",
              "عَاصِمَةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أَيَّ مَدِينَةٍ تُفَضِّلُ؟",
        "fr": "Quelle ville préfères-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "فَضَّلَ",
        "present": "يُفَضِّلُ",
        "masdar": "تَفْضِيلٌ",
        "fr": "préférer",
        "lookup": "فضل"
      },
      {
        "past": "قَارَنَ",
        "present": "يُقَارِنُ",
        "masdar": "مُقَارَنَةٌ",
        "fr": "comparer",
        "lookup": "قارن"
      },
      {
        "past": "وَقَعَ",
        "present": "يَقَعُ",
        "masdar": "وُقُوعٌ",
        "fr": "se trouver / survenir",
        "lookup": "وقع"
      }
    ],
    "words": [
      [
        "أَكْبَرُ",
        "Plus grand"
      ],
      [
        "أَصْغَرُ",
        "Plus petit"
      ],
      [
        "أَجْمَلُ",
        "Plus beau"
      ],
      [
        "أَسْرَعُ",
        "Plus rapide"
      ],
      [
        "أَبْطَأُ",
        "Plus lent"
      ],
      [
        "أَهْدَأُ",
        "Plus calme"
      ],
      [
        "أَفْضَلُ",
        "Meilleur"
      ],
      [
        "أَقَلُّ",
        "Moins"
      ],
      [
        "أَكْثَرُ",
        "Plus / davantage"
      ],
      [
        "عَاصِمَةٌ",
        "Capitale"
      ],
      [
        "طَبِيعَةٌ",
        "Nature"
      ],
      [
        "مُوَاصَلَاتٌ",
        "Transports"
      ],
      [
        "مُقَارَنَةٌ",
        "Comparaison"
      ],
      [
        "وَسِيلَةٌ",
        "Moyen"
      ],
      [
        "مُهِمٌّ",
        "Important"
      ],
      [
        "هَادِئٌ",
        "Calme"
      ]
    ],
    "dialect": [
      {
        "msa": "هَذِهِ الْمَدِينَةُ أَكْبَرُ مِنْ تِلْكَ.",
        "levant": "هَالْمَدِينَةْ أَكْبَرْ مِنْ التَّانْيِةْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "La comparaison en أَفْعَل subsiste souvent, mais la syntaxe phonétique et les déterminants changent."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle particule suit souvent un comparatif ?",
        "options": [
          "هَادِئٌ",
          "تَفْضِيلٌ",
          "مِنْ"
        ],
        "answer": 2,
        "why": "أَكْبَرُ مِنْ = plus grand que."
      },
      {
        "type": "choice",
        "prompt": "Quel est le comparatif de صَغِيرٌ ?",
        "options": [
          "أَصْغَرُ",
          "أَكْبَرُ",
          "أَجْمَلُ"
        ],
        "answer": 0,
        "why": "Le comparatif régulier prend généralement la forme أَفْعَل."
      },
      {
        "type": "choice",
        "prompt": "Que signifie أَفْضَلُ ?",
        "options": [
          "Un récit",
          "Meilleur",
          "Une conséquence"
        ],
        "answer": 1,
        "why": "Attention au contexte superlatif."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « أَجْمَلُ » ?",
        "options": [
          "Plus grand",
          "Plus beau",
          "Plus petit"
        ],
        "answer": 1,
        "why": "أَجْمَلُ = Plus beau. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « أَقَلُّ » ?",
        "options": [
          "Plus rapide",
          "Plus lent",
          "Moins"
        ],
        "answer": 2,
        "why": "أَقَلُّ = Moins. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مُقَارَنَةٌ » ?",
        "options": [
          "Comparaison",
          "Meilleur",
          "Moins"
        ],
        "answer": 0,
        "why": "مُقَارَنَةٌ = Comparaison. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de فَضَّلَ ?",
        "options": [
          "تَفْضِيلٌ",
          "أَقَلُّ",
          "أَكْثَرُ"
        ],
        "answer": 0,
        "why": "فَضَّلَ – يُفَضِّلُ – تَفْضِيلٌ (préférer)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَارَنَ ?",
        "options": [
          "وَسِيلَةٌ",
          "مُقَارَنَةٌ",
          "مُهِمٌّ"
        ],
        "answer": 1,
        "why": "قَارَنَ – يُقَارِنُ – مُقَارَنَةٌ (comparer)."
      },
      {
        "type": "input",
        "prompt": "Écris « Plus petit » en arabe (forme du lexique).",
        "answer": "أَصْغَرُ",
        "accepted": [
          "اصغر"
        ],
        "why": "أَصْغَرُ signifie « Plus petit ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "دَانَا",
        "ar": "أَيُّ الْمَدِينَتَيْنِ أَكْبَرُ؟",
        "fr": "Laquelle des deux villes est plus grande ?"
      },
      {
        "speaker": "مَازِن",
        "ar": "الْعَاصِمَةُ أَكْبَرُ، وَلَكِنَّهَا أَكْثَرُ اِزْدِحَامًا.",
        "fr": "La capitale est plus grande, mais plus encombrée."
      },
      {
        "speaker": "دَانَا",
        "ar": "أَيَّ مَدِينَةٍ تُفَضِّلُ؟",
        "fr": "Quelle ville préfères-tu ?"
      },
      {
        "speaker": "مَازِن",
        "ar": "أُفَضِّلُ الْمَدِينَةَ الْهَادِئَةَ.",
        "fr": "Je préfère la ville calme."
      }
    ],
    "writing": {
      "prompt": "Compare deux villes en 120 mots. Utilise au moins six comparatifs et une opposition.",
      "modelAr": "هَذِهِ الْمَدِينَةُ أَصْغَرُ مِنْ تِلْكَ، وَلَكِنَّهَا أَهْدَأُ. الطَّرِيقُ هُنَاكَ أَطْوَلُ، وَالْمَوَاصَلَاتُ هُنَا أَسْرَعُ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "a2-07-v2",
    "level": "A2",
    "number": 7,
    "month": 3,
    "emoji": "🧭",
    "title": "Directions et déplacements",
    "minutes": 90,
    "goal": "Demander son chemin, comprendre des consignes et décrire un trajet.",
    "grammar": [
      {
        "title": "Déplacement vers un lieu",
        "body": "إِلَى = vers / à, مِنْ = de / depuis, فِي = dans / à, عَلَى = sur. On dit أَذْهَبُ إِلَى الْجَامِعَةِ = je vais à l’université. La préposition gouverne le génitif."
      },
      {
        "title": "Consignes et impératif",
        "body": "اِذْهَبْ = va !, اِمْشِ = marche !, اِسْتَدِرْ = tourne ! L’impératif se forme sur la base du jussif de l’inaccompli et peut présenter des changements vocaliques."
      },
      {
        "title": "Repères spatiaux",
        "body": "أَمَامَ = devant, خَلْفَ = derrière, عَلَى الْيَمِينِ = à droite, عَلَى الْيَسَارِ = à gauche, بِجَانِبِ = à côté de. Ces expressions servent aussi en contexte de lecture de cartes."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "وَقَفَ سَائِحٌ أَمَامَ الْمَحَطَّةِ وَسَأَلَ شَابًّا عَنِ الْمَتْحَفِ. قَالَ الشَّابُّ: «اِمْشِ مُسْتَقِيمًا حَتَّى إِشَارَةِ الْمُرُورِ، ثُمَّ اِسْتَدِرْ يَمِينًا. سَتَرَى الْمَتْحَفَ عَلَى يَسَارِكَ». شَكَرَهُ السَّائِحُ وَتَابَعَ طَرِيقَهُ.",
      "fr": "Un touriste s’est arrêté devant la gare et a demandé à un jeune homme où se trouvait le musée. Celui-ci lui a expliqué d’aller tout droit jusqu’au feu, puis de tourner à droite ; le musée serait à gauche. Le touriste l’a remercié et a continué son chemin."
    },
    "examples": [
      {
        "ar": "أَيْنَ الْمَتْحَفُ؟",
        "fr": "Où est le musée ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مُتْحَفٌ",
              "مُتْحَفٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هُوَ بِجَانِبِ الْمَحَطَّةِ.",
        "fr": "Il est à côté de la gare.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مَحَطَّةٌ",
              "مَحَطَّةٌ"
            ],
            [
              "بِجَانِبِ",
              "بِجَانِبِ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ هُوَ بَعِيدٌ؟",
        "fr": "Est-il loin ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "مَشَى",
        "present": "يَمْشِي",
        "masdar": "مَشْيٌ",
        "fr": "marcher",
        "lookup": "مشى"
      },
      {
        "past": "اِسْتَدَارَ",
        "present": "يَسْتَدِيرُ",
        "masdar": "اِسْتِدَارَةٌ",
        "fr": "tourner",
        "lookup": "استدار"
      },
      {
        "past": "تَابَعَ",
        "present": "يُتَابِعُ",
        "masdar": "مُتَابَعَةٌ",
        "fr": "poursuivre",
        "lookup": "تابع"
      }
    ],
    "words": [
      [
        "مَحَطَّةٌ",
        "Gare / station"
      ],
      [
        "مُتْحَفٌ",
        "Musée"
      ],
      [
        "سَائِحٌ",
        "Touriste"
      ],
      [
        "طَرِيقٌ",
        "Route / chemin"
      ],
      [
        "إِشَارَةٌ",
        "Signal / feu"
      ],
      [
        "يَمِينٌ",
        "Droite"
      ],
      [
        "يَسَارٌ",
        "Gauche"
      ],
      [
        "أَمَامَ",
        "Devant"
      ],
      [
        "خَلْفَ",
        "Derrière"
      ],
      [
        "بِجَانِبِ",
        "À côté de"
      ],
      [
        "مُسْتَقِيمًا",
        "Tout droit"
      ],
      [
        "اِسْتَدِرْ",
        "Tourne !"
      ],
      [
        "اِمْشِ",
        "Marche !"
      ],
      [
        "جِسْرٌ",
        "Pont"
      ],
      [
        "شَارِعٌ",
        "Rue"
      ],
      [
        "تَقَاطُعٌ",
        "Carrefour"
      ]
    ],
    "dialect": [
      {
        "msa": "اِمْشِ مُسْتَقِيمًا ثُمَّ اِسْتَدِرْ يَمِينًا.",
        "levant": "رُوحْ دُغْرِي وَبَعْدِينْ لِفّ يَمِينْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "دُغْرِي = tout droit ; لِفّ = tourne ; بَعْدِينْ = ensuite."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Que signifie خَلْفَ ?",
        "options": [
          "Derrière",
          "Une hypothèse",
          "Une obligation"
        ],
        "answer": 0,
        "why": "Opposé de أَمَامَ."
      },
      {
        "type": "choice",
        "prompt": "Quelle préposition signifie « vers » ?",
        "options": [
          "سَائِحٌ",
          "إِلَى",
          "طَرِيقٌ"
        ],
        "answer": 1,
        "why": "Employée pour un déplacement vers un lieu."
      },
      {
        "type": "choice",
        "prompt": "اِمْشِ est une forme...",
        "options": [
          "Une cause",
          "Une comparaison",
          "Impérative"
        ],
        "answer": 2,
        "why": "Du verbe مَشَى – يَمْشِي."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « سَائِحٌ » ?",
        "options": [
          "Touriste",
          "Gare / station",
          "Musée"
        ],
        "answer": 0,
        "why": "سَائِحٌ = Touriste. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « أَمَامَ » ?",
        "options": [
          "Route / chemin",
          "Devant",
          "Signal / feu"
        ],
        "answer": 1,
        "why": "أَمَامَ = Devant. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « اِمْشِ » ?",
        "options": [
          "Gauche",
          "Devant",
          "Marche !"
        ],
        "answer": 2,
        "why": "اِمْشِ = Marche !. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de مَشَى ?",
        "options": [
          "مَشْيٌ",
          "اِسْتِدَارَةٌ",
          "مُتَابَعَةٌ"
        ],
        "answer": 0,
        "why": "مَشَى – يَمْشِي – مَشْيٌ (marcher)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِسْتَدَارَ ?",
        "options": [
          "مُتْحَفٌ",
          "اِسْتِدَارَةٌ",
          "سَائِحٌ"
        ],
        "answer": 1,
        "why": "اِسْتَدَارَ – يَسْتَدِيرُ – اِسْتِدَارَةٌ (tourner)."
      },
      {
        "type": "input",
        "prompt": "Écris « Musée » en arabe (forme du lexique).",
        "answer": "مُتْحَفٌ",
        "accepted": [
          "متحف"
        ],
        "why": "مُتْحَفٌ signifie « Musée ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "زَائِر",
        "ar": "أَيْنَ الْمَتْحَفُ؟",
        "fr": "Où est le musée ?"
      },
      {
        "speaker": "مَارّ",
        "ar": "هُوَ بِجَانِبِ الْمَحَطَّةِ.",
        "fr": "Il est à côté de la gare."
      },
      {
        "speaker": "زَائِر",
        "ar": "هَلْ هُوَ بَعِيدٌ؟",
        "fr": "Est-il loin ?"
      },
      {
        "speaker": "مَارّ",
        "ar": "لَا، هُوَ قَرِيبٌ جِدًّا.",
        "fr": "Non, il est tout près."
      }
    ],
    "writing": {
      "prompt": "Décris un itinéraire de dix étapes entre une gare et un musée, puis joue les deux personnages du dialogue.",
      "modelAr": "اِخْرُجْ مِنَ الْمَحَطَّةِ وَامْشِ مُسْتَقِيمًا. اِسْتَدِرْ يَسَارًا عِنْدَ الْجِسْرِ. سَتَرَى الْمُتْحَفَ أَمَامَكَ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "a2-08-v2",
    "level": "A2",
    "number": 8,
    "month": 3,
    "emoji": "🛍️",
    "title": "Acheter, compter, mesurer",
    "minutes": 90,
    "goal": "Effectuer des achats et exprimer des quantités.",
    "grammar": [
      {
        "title": "Demander le prix",
        "body": "بِكَمْ هَذَا؟ = combien cela coûte-t-il ? كَمْ سِعْرُ هَذَا؟ est également possible. ثَمَنٌ et سِعْرٌ désignent le prix avec des usages légèrement différents."
      },
      {
        "title": "Les nombres et le nom compté",
        "body": "Avec 3 à 10, les noms comptés sont généralement au pluriel génitif, et le nombre prend le genre opposé à celui du singulier : ثَلَاثَةُ كُتُبٍ (trois livres) ; ثَلَاثُ سَيَّارَاتٍ (trois voitures). Les nombres 1 et 2 suivent une autre logique."
      },
      {
        "title": "Mesures usuelles",
        "body": "كِيلُوغْرَامٌ مِنَ التُّفَّاحِ = un kilogramme de pommes ; نِصْفُ كِيلُوغْرَامٍ = un demi-kilo ; قَلِيلٌ مِنَ السُّكَّرِ = un peu de sucre. Le régime des mesures dépend de la construction."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "دَخَلَتْ نَادِيَةُ السُّوقَ لِتَشْتَرِيَ الْخُضْرَوَاتِ. سَأَلَتِ الْبَائِعَ: «بِكَمْ كِيلُوغْرَامُ الطَّمَاطِمِ؟» فَأَجَابَ: «بِخَمْسَةِ دَرَاهِمَ». اِشْتَرَتْ كِيلُوغْرَامَيْنِ وَثَلَاثَ تُفَّاحَاتٍ، ثُمَّ دَفَعَتِ الثَّمَنَ وَخَرَجَتْ.",
      "fr": "Nadia est entrée au marché pour acheter des légumes. Elle a demandé le prix d’un kilo de tomates. Le marchand a répondu : cinq dirhams. Elle a acheté deux kilos et trois pommes, puis a payé et est sortie."
    },
    "examples": [
      {
        "ar": "بِكَمْ هَذَا الْكِتَابُ؟",
        "fr": "Combien coûte ce livre ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "بِعَشَرَةِ دَرَاهِمَ.",
        "fr": "Dix dirhams.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ عِنْدَكَ نُسْخَةٌ أَرْخَصُ؟",
        "fr": "As-tu un exemplaire moins cher ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "اِشْتَرَى",
        "present": "يَشْتَرِي",
        "masdar": "اِشْتِرَاءٌ",
        "fr": "acheter",
        "lookup": "اشترى"
      },
      {
        "past": "بَاعَ",
        "present": "يَبِيعُ",
        "masdar": "بَيْعٌ",
        "fr": "vendre",
        "lookup": "باع"
      },
      {
        "past": "دَفَعَ",
        "present": "يَدْفَعُ",
        "masdar": "دَفْعٌ",
        "fr": "payer",
        "lookup": "دفع"
      }
    ],
    "words": [
      [
        "سُوقٌ",
        "Marché"
      ],
      [
        "بَائِعٌ",
        "Vendeur"
      ],
      [
        "مُشْتَرٍ",
        "Acheteur"
      ],
      [
        "سِعْرٌ",
        "Prix"
      ],
      [
        "ثَمَنٌ",
        "Prix / coût"
      ],
      [
        "نُقُودٌ",
        "Argent liquide"
      ],
      [
        "فَاتُورَةٌ",
        "Facture"
      ],
      [
        "خُضْرَوَاتٌ",
        "Légumes"
      ],
      [
        "فَوَاكِهُ",
        "Fruits"
      ],
      [
        "تُفَّاحَةٌ",
        "Pomme"
      ],
      [
        "طَمَاطِمُ",
        "Tomates"
      ],
      [
        "كِيلُوغْرَامٌ",
        "Kilogramme"
      ],
      [
        "نِصْفٌ",
        "Moitié"
      ],
      [
        "رَخِيصٌ",
        "Bon marché"
      ],
      [
        "غَالٍ",
        "Cher"
      ],
      [
        "بَاقٍ",
        "Restant"
      ]
    ],
    "dialect": [
      {
        "msa": "بِكَمْ هَادَا؟",
        "levant": "قَدَّيْشْ هَادَا؟",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "قَدَّيْشْ = combien / à combien en levantin ; le vocabulaire monétaire varie selon le pays."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Avec un nombre de 3 à 10, le nom compté est généralement...",
        "options": [
          "Une interdiction",
          "Au pluriel génitif",
          "Un récit"
        ],
        "answer": 1,
        "why": "Exemple ثَلَاثَةُ كُتُبٍ."
      },
      {
        "type": "choice",
        "prompt": "Que signifie سِعْرٌ ?",
        "options": [
          "Une comparaison",
          "Une possibilité",
          "Prix"
        ],
        "answer": 2,
        "why": "Employé lors des achats."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de دَفَعَ ?",
        "options": [
          "دَفْعٌ",
          "تُفَّاحَةٌ",
          "طَمَاطِمُ"
        ],
        "answer": 0,
        "why": "دَفَعَ – يَدْفَعُ – دَفْعٌ."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مُشْتَرٍ » ?",
        "options": [
          "Marché",
          "Vendeur",
          "Acheteur"
        ],
        "answer": 2,
        "why": "مُشْتَرٍ = Acheteur. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « خُضْرَوَاتٌ » ?",
        "options": [
          "Légumes",
          "Prix",
          "Prix / coût"
        ],
        "answer": 0,
        "why": "خُضْرَوَاتٌ = Légumes. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « نِصْفٌ » ?",
        "options": [
          "Facture",
          "Moitié",
          "Légumes"
        ],
        "answer": 1,
        "why": "نِصْفٌ = Moitié. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِشْتَرَى ?",
        "options": [
          "اِشْتِرَاءٌ",
          "خُضْرَوَاتٌ",
          "فَوَاكِهُ"
        ],
        "answer": 0,
        "why": "اِشْتَرَى – يَشْتَرِي – اِشْتِرَاءٌ (acheter)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de بَاعَ ?",
        "options": [
          "طَمَاطِمُ",
          "بَيْعٌ",
          "كِيلُوغْرَامٌ"
        ],
        "answer": 1,
        "why": "بَاعَ – يَبِيعُ – بَيْعٌ (vendre)."
      },
      {
        "type": "input",
        "prompt": "Écris « Vendeur » en arabe (forme du lexique).",
        "answer": "بَائِعٌ",
        "accepted": [
          "بائع"
        ],
        "why": "بَائِعٌ signifie « Vendeur ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مُشْتَرٍ",
        "ar": "بِكَمْ هَذَا الْكِتَابُ؟",
        "fr": "Combien coûte ce livre ?"
      },
      {
        "speaker": "بَائِع",
        "ar": "بِعَشَرَةِ دَرَاهِمَ.",
        "fr": "Dix dirhams."
      },
      {
        "speaker": "مُشْتَرٍ",
        "ar": "هَلْ عِنْدَكَ نُسْخَةٌ أَرْخَصُ؟",
        "fr": "As-tu un exemplaire moins cher ?"
      },
      {
        "speaker": "بَائِع",
        "ar": "نَعَمْ، هَذِهِ بِسَبْعَةِ دَرَاهِمَ.",
        "fr": "Oui, celui-ci coûte sept dirhams."
      }
    ],
    "writing": {
      "prompt": "Mets en scène une transaction de marché d’au moins huit répliques, avec deux quantités et une négociation polie.",
      "modelAr": "بِكَمْ هَذَا الْقَمِيصُ؟ هَلْ عِنْدَكَ لَوْنٌ آخَرُ؟ أُرِيدُ قَمِيصَيْنِ. هَلْ يُمْكِنُ تَخْفِيضُ السِّعْرِ؟",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "a2-09-v2",
    "level": "A2",
    "number": 9,
    "month": 3,
    "emoji": "🏠",
    "title": "Famille, maison et annexion",
    "minutes": 90,
    "goal": "Décrire son entourage et construire le complément du nom.",
    "grammar": [
      {
        "title": "Annexion (الإضافة)",
        "body": "بَابُ الْبَيْتِ = la porte de la maison. Le premier nom, بَابُ, ne prend ni article ni tanwīn dans une annexion ordinaire ; le deuxième, الْبَيْتِ, est au génitif. Le cas du premier dépend de sa fonction."
      },
      {
        "title": "Pronoms suffixés",
        "body": "كِتَابِي = mon livre, كِتَابُكَ = ton livre (masc.), كِتَابُهَا = son livre (à elle). Avec une préposition : مَعَهُ (avec lui), عِنْدِي (j’ai / chez moi). Les suffixes peuvent s’attacher à des verbes également."
      },
      {
        "title": "Adjectif ou prédicat",
        "body": "بَيْتِي كَبِيرٌ = ma maison est grande ; الْبَيْتُ الْكَبِيرُ = la grande maison. L’adjectif épithète suit le nom et s’accorde en genre, nombre, cas et définition selon les règles."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "تَسْكُنُ أُسْرَةُ لَيْلَى فِي شَقَّةٍ وَاسِعَةٍ. غُرْفَةُ الْجُلُوسِ مُضِيئَةٌ، وَمَطْبَخُ الشَّقَّةِ صَغِيرٌ. تَعِيشُ مَعَ أَبِيهَا وَأُمِّهَا وَأَخِيهَا، وَتُحِبُّ أَنْ تَجْتَمِعَ الْأُسْرَةُ فِي الْمَسَاءِ.",
      "fr": "La famille de Leïla habite dans un appartement spacieux. Le salon est lumineux et la cuisine est petite. Elle vit avec son père, sa mère et son frère, et elle aime que la famille se réunisse le soir."
    },
    "examples": [
      {
        "ar": "أَيْنَ تَسْكُنِينَ؟",
        "fr": "Où habites-tu ? (féminin)",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "أَسْكُنُ مَعَ أُسْرَتِي فِي شَقَّةٍ.",
        "fr": "J’habite avec ma famille dans un appartement.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "شَقَّةٌ",
              "شَقَّةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ غُرْفَتُكِ كَبِيرَةٌ؟",
        "fr": "Ta chambre est-elle grande ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "سَكَنَ",
        "present": "يَسْكُنُ",
        "masdar": "سُكْنَى / سَكَنٌ",
        "fr": "habiter",
        "lookup": "سكن"
      },
      {
        "past": "عَاشَ",
        "present": "يَعِيشُ",
        "masdar": "عَيْشٌ",
        "fr": "vivre",
        "lookup": "عاش"
      },
      {
        "past": "اِجْتَمَعَ",
        "present": "يَجْتَمِعُ",
        "masdar": "اِجْتِمَاعٌ",
        "fr": "se réunir",
        "lookup": "اجتمع"
      }
    ],
    "words": [
      [
        "أُسْرَةٌ",
        "Famille"
      ],
      [
        "أَبٌ",
        "Père"
      ],
      [
        "أُمٌّ",
        "Mère"
      ],
      [
        "أَخٌ",
        "Frère"
      ],
      [
        "أُخْتٌ",
        "Sœur"
      ],
      [
        "شَقَّةٌ",
        "Appartement"
      ],
      [
        "غُرْفَةٌ",
        "Pièce / chambre"
      ],
      [
        "غُرْفَةُ الْجُلُوسِ",
        "Salon"
      ],
      [
        "مَطْبَخٌ",
        "Cuisine"
      ],
      [
        "بَابٌ",
        "Porte"
      ],
      [
        "نَافِذَةٌ",
        "Fenêtre"
      ],
      [
        "جَارٌ",
        "Voisin"
      ],
      [
        "وَاسِعٌ",
        "Spacieux"
      ],
      [
        "ضَيِّقٌ",
        "Étroit"
      ],
      [
        "مُضِيءٌ",
        "Lumineux"
      ],
      [
        "سُكَّانٌ",
        "Habitants"
      ]
    ],
    "dialect": [
      {
        "msa": "هَذَا بَيْتُ أَخِي.",
        "levant": "هَادَا بَيْتْ خَيِّي.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "خَيِّي = mon frère (familier levantin)."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Dans بَابُ الْبَيْتِ, الْبَيْتِ est...",
        "options": [
          "Une cause",
          "Une comparaison",
          "Au génitif"
        ],
        "answer": 2,
        "why": "Le deuxième terme de l’annexion est au génitif."
      },
      {
        "type": "choice",
        "prompt": "Que signifie كِتَابِي ?",
        "options": [
          "Mon livre",
          "Famille",
          "Père"
        ],
        "answer": 0,
        "why": "Le suffixe ـِي indique « mon / ma »."
      },
      {
        "type": "choice",
        "prompt": "Que signifie شَقَّةٌ ?",
        "options": [
          "Sœur",
          "Appartement",
          "Pièce / chambre"
        ],
        "answer": 1,
        "why": "À distinguer de بَيْتٌ (maison)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « أُمٌّ » ?",
        "options": [
          "Famille",
          "Mère",
          "Père"
        ],
        "answer": 1,
        "why": "أُمٌّ = Mère. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « غُرْفَةُ الْجُلُوسِ » ?",
        "options": [
          "Frère",
          "Sœur",
          "Salon"
        ],
        "answer": 2,
        "why": "غُرْفَةُ الْجُلُوسِ = Salon. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « وَاسِعٌ » ?",
        "options": [
          "Spacieux",
          "Pièce / chambre",
          "Salon"
        ],
        "answer": 0,
        "why": "وَاسِعٌ = Spacieux. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de سَكَنَ ?",
        "options": [
          "سُكْنَى / سَكَنٌ",
          "عَيْشٌ",
          "اِجْتِمَاعٌ"
        ],
        "answer": 0,
        "why": "سَكَنَ – يَسْكُنُ – سُكْنَى / سَكَنٌ (habiter)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de عَاشَ ?",
        "options": [
          "أَبٌ",
          "عَيْشٌ",
          "أُمٌّ"
        ],
        "answer": 1,
        "why": "عَاشَ – يَعِيشُ – عَيْشٌ (vivre)."
      },
      {
        "type": "input",
        "prompt": "Écris « Père » en arabe (forme du lexique).",
        "answer": "أَبٌ",
        "accepted": [
          "اب"
        ],
        "why": "أَبٌ signifie « Père ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "هُدَى",
        "ar": "أَيْنَ تَسْكُنِينَ؟",
        "fr": "Où habites-tu ? (féminin)"
      },
      {
        "speaker": "لَيْلَى",
        "ar": "أَسْكُنُ مَعَ أُسْرَتِي فِي شَقَّةٍ.",
        "fr": "J’habite avec ma famille dans un appartement."
      },
      {
        "speaker": "هُدَى",
        "ar": "هَلْ غُرْفَتُكِ كَبِيرَةٌ؟",
        "fr": "Ta chambre est-elle grande ?"
      },
      {
        "speaker": "لَيْلَى",
        "ar": "نَعَمْ، وَفِيهَا نَافِذَتَانِ.",
        "fr": "Oui, et elle a deux fenêtres."
      }
    ],
    "writing": {
      "prompt": "Présente ta famille ou une famille fictive et décris un appartement ; produis dix annexions et cinq suffixes possessifs.",
      "modelAr": "هَذَا بَيْتُ أُسْرَتِي. فِيهِ ثَلَاثُ غُرَفٍ وَمَطْبَخٌ صَغِيرٌ. غُرْفَةُ أَخِي أَكْبَرُ مِنْ غُرْفَتِي.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "a2-10-v2",
    "level": "A2",
    "number": 10,
    "month": 4,
    "emoji": "🩺",
    "title": "Santé et conseils",
    "minutes": 90,
    "goal": "Décrire des symptômes simples et formuler des conseils.",
    "grammar": [
      {
        "title": "Exprimer la douleur",
        "body": "عِنْدِي صُدَاعٌ = j’ai mal à la tête ; أَشْعُرُ بِأَلَمٍ فِي رُكْبَتِي = je ressens une douleur au genou. Avec أَشْعُرُ, بِـ introduit la sensation."
      },
      {
        "title": "Conseiller avec يَنْبَغِي",
        "body": "يَنْبَغِي أَنْ تَرْتَاحَ = tu devrais te reposer ; مِنَ الْأَفْضَلِ أَنْ تَشْرَبَ الْمَاءَ = il vaut mieux boire de l’eau. La construction avec أَنْ demande le subjonctif."
      },
      {
        "title": "Impératif et interdiction",
        "body": "اِشْرَبْ = bois ! ; لَا تَنْسَ = n’oublie pas ! Le لَا prohibitif entraîne le jussif : لَا تَكْتُبْ. Attention : les conseils médicaux réels exigent un professionnel."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "شَعَرَ مَاهِرٌ بِالتَّعَبِ وَالصُّدَاعِ، فَذَهَبَ إِلَى الطَّبِيبِ. سَأَلَهُ الطَّبِيبُ عَنِ الْأَعْرَاضِ، ثُمَّ قَالَ لَهُ: «يَنْبَغِي أَنْ تَرْتَاحَ وَأَنْ تَشْرَبَ كَمِّيَّةً كَافِيَةً مِنَ الْمَاءِ». عَادَ مَاهِرٌ إِلَى بَيْتِهِ لِيَسْتَرِيحَ.",
      "fr": "Maher se sentait fatigué et avait mal à la tête. Il est allé chez le médecin, qui l’a interrogé sur ses symptômes, puis lui a conseillé de se reposer et de boire assez d’eau. Maher est rentré pour se reposer."
    },
    "examples": [
      {
        "ar": "مَاذَا يُؤْلِمُكَ؟",
        "fr": "Qu’est-ce qui te fait mal ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "أَشْعُرُ بِأَلَمٍ فِي رُكْبَتِي.",
        "fr": "J’ai mal au genou.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "مُنْذُ مَتَى؟",
        "fr": "Depuis quand ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "شَعَرَ",
        "present": "يَشْعُرُ",
        "masdar": "شُعُورٌ",
        "fr": "ressentir",
        "lookup": "شعر"
      },
      {
        "past": "اِسْتَرَاحَ",
        "present": "يَسْتَرِيحُ",
        "masdar": "اِسْتِرَاحَةٌ",
        "fr": "se reposer",
        "lookup": "استراح"
      },
      {
        "past": "نَصَحَ",
        "present": "يَنْصَحُ",
        "masdar": "نُصْحٌ / نَصِيحَةٌ",
        "fr": "conseiller",
        "lookup": "نصح"
      }
    ],
    "words": [
      [
        "صِحَّةٌ",
        "Santé"
      ],
      [
        "مَرَضٌ",
        "Maladie"
      ],
      [
        "أَلَمٌ",
        "Douleur"
      ],
      [
        "صُدَاعٌ",
        "Mal de tête"
      ],
      [
        "رُكْبَةٌ",
        "Genou"
      ],
      [
        "ظَهْرٌ",
        "Dos"
      ],
      [
        "طَبِيبٌ",
        "Médecin"
      ],
      [
        "مَرِيضٌ",
        "Patient / malade"
      ],
      [
        "عَرَضٌ",
        "Symptôme"
      ],
      [
        "أَعْرَاضٌ",
        "Symptômes"
      ],
      [
        "دَوَاءٌ",
        "Médicament"
      ],
      [
        "رَاحَةٌ",
        "Repos"
      ],
      [
        "كَافٍ",
        "Suffisant"
      ],
      [
        "تَعَبٌ",
        "Fatigue"
      ],
      [
        "دَرَجَةُ الْحَرَارَةِ",
        "Température"
      ],
      [
        "مَوْعِدٌ",
        "Rendez-vous"
      ]
    ],
    "dialect": [
      {
        "msa": "عِنْدِي وَجَعْ بِرُكْبْتِي.",
        "levant": "رُكْبْتِي عَمْ تُوجَعْنِي.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "وَجَعْ = douleur ; عَمْ + inaccompli marque souvent une action en cours."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle préposition accompagne أَشْعُرُ pour exprimer une sensation ?",
        "options": [
          "بِـ",
          "عَرَضٌ",
          "أَعْرَاضٌ"
        ],
        "answer": 0,
        "why": "أَشْعُرُ بِأَلَمٍ."
      },
      {
        "type": "choice",
        "prompt": "Que signifie صُدَاعٌ ?",
        "options": [
          "Dos",
          "Mal de tête",
          "Médecin"
        ],
        "answer": 1,
        "why": "Vocabulaire de la santé."
      },
      {
        "type": "choice",
        "prompt": "يَنْبَغِي أَنْ تَرْتَاحَ : le deuxième verbe est au...",
        "options": [
          "Médecin",
          "Patient / malade",
          "Subjonctif"
        ],
        "answer": 2,
        "why": "Introduit par أَنْ."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « أَلَمٌ » ?",
        "options": [
          "Douleur",
          "Santé",
          "Maladie"
        ],
        "answer": 0,
        "why": "أَلَمٌ = Douleur. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مَرِيضٌ » ?",
        "options": [
          "Mal de tête",
          "Patient / malade",
          "Genou"
        ],
        "answer": 1,
        "why": "مَرِيضٌ = Patient / malade. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « كَافٍ » ?",
        "options": [
          "Médecin",
          "Patient / malade",
          "Suffisant"
        ],
        "answer": 2,
        "why": "كَافٍ = Suffisant. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de شَعَرَ ?",
        "options": [
          "شُعُورٌ",
          "مَرِيضٌ",
          "عَرَضٌ"
        ],
        "answer": 0,
        "why": "شَعَرَ – يَشْعُرُ – شُعُورٌ (ressentir)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِسْتَرَاحَ ?",
        "options": [
          "دَوَاءٌ",
          "اِسْتِرَاحَةٌ",
          "رَاحَةٌ"
        ],
        "answer": 1,
        "why": "اِسْتَرَاحَ – يَسْتَرِيحُ – اِسْتِرَاحَةٌ (se reposer)."
      },
      {
        "type": "input",
        "prompt": "Écris « Maladie » en arabe (forme du lexique).",
        "answer": "مَرَضٌ",
        "accepted": [
          "مرض"
        ],
        "why": "مَرَضٌ signifie « Maladie ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "طَبِيب",
        "ar": "مَاذَا يُؤْلِمُكَ؟",
        "fr": "Qu’est-ce qui te fait mal ?"
      },
      {
        "speaker": "مَرِيض",
        "ar": "أَشْعُرُ بِأَلَمٍ فِي رُكْبَتِي.",
        "fr": "J’ai mal au genou."
      },
      {
        "speaker": "طَبِيب",
        "ar": "مُنْذُ مَتَى؟",
        "fr": "Depuis quand ?"
      },
      {
        "speaker": "مَرِيض",
        "ar": "مُنْذُ يَوْمَيْنِ.",
        "fr": "Depuis deux jours."
      }
    ],
    "writing": {
      "prompt": "Écris un dialogue patient–médecin de dix tours avec trois symptômes et deux conseils linguistiquement corrects.",
      "modelAr": "أَشْعُرُ بِالتَّعَبِ. هَلْ عِنْدَكَ صُدَاعٌ؟ نَعَمْ. يَنْبَغِي أَنْ تَرْتَاحَ وَأَنْ تَشْرَبَ الْمَاءَ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "a2-11-v2",
    "level": "A2",
    "number": 11,
    "month": 4,
    "emoji": "🎨",
    "title": "Loisirs et invitations",
    "minutes": 90,
    "goal": "Faire des propositions, exprimer les goûts et répondre poliment.",
    "grammar": [
      {
        "title": "Un verbe suivi du maṣdar",
        "body": "أُحِبُّ السِّبَاحَةَ = j’aime nager. Le maṣdar fonctionne comme un nom (ici COD à l’accusatif) : قِرَاءَةَ الْكُتُبِ = lire des livres, littéralement « la lecture des livres »."
      },
      {
        "title": "Inviter et proposer",
        "body": "هَلْ تُرِيدُ أَنْ تَأْتِيَ مَعَنَا؟ = veux-tu venir avec nous ? مَا رَأْيُكَ فِي...؟ = que penses-tu de... ? لِنَذْهَبْ = allons-y (لَامُ الْأَمْرِ + jussif)."
      },
      {
        "title": "Accepter ou refuser",
        "body": "بِكُلِّ سُرُورٍ = avec plaisir ; أَعْتَذِرُ، لَا أَسْتَطِيعُ = désolé, je ne peux pas. Ajoute une justification naturelle et, si possible, une autre proposition."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "تُحِبُّ سَلْمَى الرَّسْمَ وَقِرَاءَةَ الرِّوَايَاتِ. دَعَاهَا صَدِيقُهَا إِلَى مَعْرِضٍ فَنِّيٍّ يَوْمَ السَّبْتِ. قَالَتْ: «بِكُلِّ سُرُورٍ، وَلَكِنْ هَلْ يُمْكِنُنَا أَنْ نَذْهَبَ بَعْدَ الظُّهْرِ؟» فَوَافَقَ صَدِيقُهَا وَاتَّفَقَا عَلَى الْمَوْعِدِ.",
      "fr": "Salma aime dessiner et lire des romans. Son ami l’a invitée à une exposition d’art samedi. Elle a accepté avec plaisir en proposant l’après-midi. Son ami a accepté et ils ont convenu de l’heure."
    },
    "examples": [
      {
        "ar": "هَلْ تُرِيدُ أَنْ تَذْهَبَ إِلَى الْمَعْرِضِ؟",
        "fr": "Veux-tu aller à l’exposition ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مَعْرِضٌ",
              "مَعْرِضٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، بِكُلِّ سُرُورٍ.",
        "fr": "Oui, avec plaisir.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "بِكُلِّ سُرُورٍ",
              "بِكُلِّ سُرُورٍ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ يُنَاسِبُكِ يَوْمُ السَّبْتِ؟",
        "fr": "Samedi te convient-il ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "دَعَا",
        "present": "يَدْعُو",
        "masdar": "دَعْوَةٌ",
        "fr": "inviter",
        "lookup": "دعا"
      },
      {
        "past": "وَافَقَ",
        "present": "يُوَافِقُ",
        "masdar": "مُوَافَقَةٌ",
        "fr": "accepter / approuver",
        "lookup": "وافق"
      },
      {
        "past": "اِتَّفَقَ",
        "present": "يَتَّفِقُ",
        "masdar": "اِتِّفَاقٌ",
        "fr": "se mettre d’accord",
        "lookup": "اتفق"
      }
    ],
    "words": [
      [
        "هِوَايَةٌ",
        "Loisir"
      ],
      [
        "رَسْمٌ",
        "Peinture / dessin"
      ],
      [
        "سِبَاحَةٌ",
        "Natation"
      ],
      [
        "قِرَاءَةٌ",
        "Lecture"
      ],
      [
        "رِوَايَةٌ",
        "Roman"
      ],
      [
        "مَعْرِضٌ",
        "Exposition"
      ],
      [
        "فَنٌّ",
        "Art"
      ],
      [
        "دَعْوَةٌ",
        "Invitation"
      ],
      [
        "اِقْتِرَاحٌ",
        "Proposition"
      ],
      [
        "مُوَافَقَةٌ",
        "Accord"
      ],
      [
        "اِعْتِذَارٌ",
        "Excuse"
      ],
      [
        "مَوْعِدٌ",
        "Rendez-vous"
      ],
      [
        "بِكُلِّ سُرُورٍ",
        "Avec plaisir"
      ],
      [
        "مَا رَأْيُكَ؟",
        "Qu’en penses-tu ?"
      ],
      [
        "مَعَنَا",
        "Avec nous"
      ],
      [
        "مَجَّانًا",
        "Gratuitement"
      ]
    ],
    "dialect": [
      {
        "msa": "بِكُلِّ سُرُورٍ.",
        "levant": "أَكِيدْ، بِكُلّ سُرُورْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "أَكِيدْ (= bien sûr) est très courant en conversation levantine."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Dans أُحِبُّ الْقِرَاءَةَ, الْقِرَاءَةَ est...",
        "options": [
          "Lecture",
          "Un maṣdar employé comme nom",
          "Roman"
        ],
        "answer": 1,
        "why": "Il est complément d’objet du verbe."
      },
      {
        "type": "choice",
        "prompt": "Que signifie اِعْتِذَارٌ ?",
        "options": [
          "Art",
          "Invitation",
          "Excuse / fait de s’excuser"
        ],
        "answer": 2,
        "why": "Nom verbal du verbe اِعْتَذَرَ."
      },
      {
        "type": "choice",
        "prompt": "Quelle expression est une acceptation polie ?",
        "options": [
          "بِكُلِّ سُرُورٍ",
          "هِوَايَةٌ",
          "رَسْمٌ"
        ],
        "answer": 0,
        "why": "Signifie avec plaisir."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « سِبَاحَةٌ » ?",
        "options": [
          "Loisir",
          "Peinture / dessin",
          "Natation"
        ],
        "answer": 2,
        "why": "سِبَاحَةٌ = Natation. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « دَعْوَةٌ » ?",
        "options": [
          "Invitation",
          "Lecture",
          "Roman"
        ],
        "answer": 0,
        "why": "دَعْوَةٌ = Invitation. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « بِكُلِّ سُرُورٍ » ?",
        "options": [
          "Art",
          "Avec plaisir",
          "Invitation"
        ],
        "answer": 1,
        "why": "بِكُلِّ سُرُورٍ = Avec plaisir. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de دَعَا ?",
        "options": [
          "دَعْوَةٌ",
          "قِرَاءَةٌ",
          "رِوَايَةٌ"
        ],
        "answer": 0,
        "why": "دَعَا – يَدْعُو – دَعْوَةٌ (inviter)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de وَافَقَ ?",
        "options": [
          "فَنٌّ",
          "مُوَافَقَةٌ",
          "دَعْوَةٌ"
        ],
        "answer": 1,
        "why": "وَافَقَ – يُوَافِقُ – مُوَافَقَةٌ (accepter / approuver)."
      },
      {
        "type": "input",
        "prompt": "Écris « Peinture / dessin » en arabe (forme du lexique).",
        "answer": "رَسْمٌ",
        "accepted": [
          "رسم"
        ],
        "why": "رَسْمٌ signifie « Peinture / dessin ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "فَادِي",
        "ar": "هَلْ تُرِيدُ أَنْ تَذْهَبَ إِلَى الْمَعْرِضِ؟",
        "fr": "Veux-tu aller à l’exposition ?"
      },
      {
        "speaker": "لَيْنَا",
        "ar": "نَعَمْ، بِكُلِّ سُرُورٍ.",
        "fr": "Oui, avec plaisir."
      },
      {
        "speaker": "فَادِي",
        "ar": "هَلْ يُنَاسِبُكِ يَوْمُ السَّبْتِ؟",
        "fr": "Samedi te convient-il ?"
      },
      {
        "speaker": "لَيْنَا",
        "ar": "نَعَمْ، لِنَلْتَقِ بَعْدَ الظُّهْرِ.",
        "fr": "Oui, retrouvons-nous l’après-midi."
      }
    ],
    "writing": {
      "prompt": "Rédige un message d’invitation, puis une réponse d’acceptation et une réponse de refus avec contre-proposition.",
      "modelAr": "مَرْحَبًا، هَلْ تُرِيدُ أَنْ تَذْهَبَ مَعِي إِلَى الْمَعْرِضِ يَوْمَ السَّبْتِ؟ يُمْكِنُنَا أَنْ نَلْتَقِيَ فِي الثَّالِثَةِ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "a2-12-v2",
    "level": "A2",
    "number": 12,
    "month": 4,
    "emoji": "🏁",
    "title": "Bilan A2 : récit et dialogue",
    "minutes": 90,
    "goal": "Assembler les acquis A2 dans un récit, un dialogue et une production personnelle.",
    "grammar": [
      {
        "title": "Un récit cohérent",
        "body": "Un texte A2 doit permettre d’identifier la personne, le lieu, l’action, le moment et le résultat. Combine accompli pour l’événement principal, inaccompli pour l’habitude et marqueurs tels que ثُمَّ، بَعْدَ ذَلِكَ، أَخِيرًا."
      },
      {
        "title": "Complexifier sans surcharge",
        "body": "Ajoute لِأَنَّ (parce que), وَلَكِنْ (mais) et أَنَّ (que) seulement quand ils ont un rôle clair. Des phrases courtes correctes sont préférables à des subordonnées mal construites."
      },
      {
        "title": "Autoévaluation A2",
        "body": "Peux-tu raconter une sortie, demander des informations, décrire un problème simple, expliquer une préférence et écrire un message personnel ? Les quiz ne suffisent pas à mesurer l’oral : entraîne-toi à reformuler à voix haute."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "فِي نِهَايَةِ الْأُسْبُوعِ الْمَاضِيَةِ قَرَّرْتُ أَنْ أَزُورَ صَدِيقًا فِي مَدِينَةٍ أُخْرَى. كَانَ الْقِطَارُ مُتَأَخِّرًا، لِذَلِكَ وَصَلْتُ بَعْدَ الْمَوْعِدِ. اِعْتَذَرْتُ لِصَدِيقِي، فَقَالَ: «لَا مُشْكِلَةَ». زُرْنَا مَعْرِضًا فَنِّيًّا وَتَنَاوَلْنَا الْغَدَاءَ. أُحِبُّ هَذِهِ الْمَدِينَةَ لِأَنَّهَا أَهْدَأُ مِنْ مَدِينَتِي. فِي الشَّهْرِ الْقَادِمِ سَأَعُودُ إِلَيْهَا.",
      "fr": "Le week-end dernier, j’ai décidé de rendre visite à un ami dans une autre ville. Le train avait du retard, donc je suis arrivé après l’heure convenue. Je me suis excusé et mon ami m’a dit que ce n’était pas grave. Nous avons visité une exposition et déjeuné. J’aime cette ville parce qu’elle est plus calme que la mienne. J’y retournerai le mois prochain."
    },
    "examples": [
      {
        "ar": "كَيْفَ كَانَتِ الرِّحْلَةُ؟",
        "fr": "Comment s’est passé le voyage ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "كَانَتْ جَمِيلَةً، وَلَكِنَّ الْقِطَارَ تَأَخَّرَ.",
        "fr": "C’était bien, mais le train a eu du retard.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ سَتَعُودُ مَرَّةً أُخْرَى؟",
        "fr": "Reviendras-tu une autre fois ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "قَرَّرَ",
        "present": "يُقَرِّرُ",
        "masdar": "تَقْرِيرٌ",
        "fr": "décider",
        "lookup": "قرر"
      },
      {
        "past": "اِعْتَذَرَ",
        "present": "يَعْتَذِرُ",
        "masdar": "اِعْتِذَارٌ",
        "fr": "s’excuser",
        "lookup": "اعتذر"
      },
      {
        "past": "عَادَ",
        "present": "يَعُودُ",
        "masdar": "عَوْدَةٌ",
        "fr": "retourner",
        "lookup": "عاد"
      }
    ],
    "words": [
      [
        "قَرَارٌ",
        "Décision"
      ],
      [
        "نِهَايَةٌ",
        "Fin"
      ],
      [
        "مُتَأَخِّرٌ",
        "En retard"
      ],
      [
        "مُشْكِلَةٌ",
        "Problème"
      ],
      [
        "مَعْرِضٌ",
        "Exposition"
      ],
      [
        "مَدِينَةٌ",
        "Ville"
      ],
      [
        "مَوْعِدٌ",
        "Rendez-vous"
      ],
      [
        "مُقَارَنَةٌ",
        "Comparaison"
      ],
      [
        "وَصْفٌ",
        "Description"
      ],
      [
        "حِوَارٌ",
        "Dialogue"
      ],
      [
        "اِخْتِبَارٌ",
        "Test / examen"
      ],
      [
        "مُرَاجَعَةٌ",
        "Révision"
      ],
      [
        "نَتِيجَةٌ",
        "Résultat"
      ],
      [
        "أَخِيرًا",
        "Enfin"
      ],
      [
        "لِذَلِكَ",
        "Donc"
      ],
      [
        "بَعْدَ ذَلِكَ",
        "Après cela"
      ]
    ],
    "dialect": [
      {
        "msa": "لَا مُشْكِلَةَ.",
        "levant": "مَا فِي مُشْكِلِةْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "مَا فِي = il n’y a pas, expression très productive au Levant."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel temps verbal sert normalement à raconter un événement achevé ?",
        "options": [
          "Rendez-vous",
          "Comparaison",
          "L’accompli"
        ],
        "answer": 2,
        "why": "Le contexte temporel détermine le rendu français."
      },
      {
        "type": "choice",
        "prompt": "Que signifie لِذَلِكَ ?",
        "options": [
          "C’est pourquoi / donc",
          "Dialogue",
          "Test / examen"
        ],
        "answer": 0,
        "why": "Marque la conséquence."
      },
      {
        "type": "choice",
        "prompt": "Quelle phrase exprime un projet futur ?",
        "options": [
          "نِهَايَةٌ",
          "سَأَعُودُ الشَّهْرَ الْقَادِمَ.",
          "مُتَأَخِّرٌ"
        ],
        "answer": 1,
        "why": "Le préfixe سَـ marque le futur."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مُتَأَخِّرٌ » ?",
        "options": [
          "Décision",
          "En retard",
          "Fin"
        ],
        "answer": 1,
        "why": "مُتَأَخِّرٌ = En retard. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مُقَارَنَةٌ » ?",
        "options": [
          "Problème",
          "Exposition",
          "Comparaison"
        ],
        "answer": 2,
        "why": "مُقَارَنَةٌ = Comparaison. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « نَتِيجَةٌ » ?",
        "options": [
          "Résultat",
          "Rendez-vous",
          "Comparaison"
        ],
        "answer": 0,
        "why": "نَتِيجَةٌ = Résultat. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَرَّرَ ?",
        "options": [
          "تَقْرِيرٌ",
          "مُقَارَنَةٌ",
          "وَصْفٌ"
        ],
        "answer": 0,
        "why": "قَرَّرَ – يُقَرِّرُ – تَقْرِيرٌ (décider)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِعْتَذَرَ ?",
        "options": [
          "اِخْتِبَارٌ",
          "اِعْتِذَارٌ",
          "مُرَاجَعَةٌ"
        ],
        "answer": 1,
        "why": "اِعْتَذَرَ – يَعْتَذِرُ – اِعْتِذَارٌ (s’excuser)."
      },
      {
        "type": "input",
        "prompt": "Écris « Fin » en arabe (forme du lexique).",
        "answer": "نِهَايَةٌ",
        "accepted": [
          "نهاية"
        ],
        "why": "نِهَايَةٌ signifie « Fin ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "صَدِيق",
        "ar": "كَيْفَ كَانَتِ الرِّحْلَةُ؟",
        "fr": "Comment s’est passé le voyage ?"
      },
      {
        "speaker": "مُسَافِر",
        "ar": "كَانَتْ جَمِيلَةً، وَلَكِنَّ الْقِطَارَ تَأَخَّرَ.",
        "fr": "C’était bien, mais le train a eu du retard."
      },
      {
        "speaker": "صَدِيق",
        "ar": "هَلْ سَتَعُودُ مَرَّةً أُخْرَى؟",
        "fr": "Reviendras-tu une autre fois ?"
      },
      {
        "speaker": "مُسَافِر",
        "ar": "نَعَمْ، سَأَعُودُ الشَّهْرَ الْقَادِمَ.",
        "fr": "Oui, le mois prochain."
      }
    ],
    "writing": {
      "prompt": "Épreuve intégrée : récit de 150 mots, dialogue de 12 répliques et résumé oral de 2 minutes sans lire. Refaire chaque partie après correction personnelle.",
      "modelAr": "فِي الشَّهْرِ الْمَاضِي سَافَرْتُ بِالْقِطَارِ. زُرْتُ صَدِيقًا وَتَحَدَّثْنَا طَوِيلًا. كَانَ الْيَوْمُ جَمِيلًا، وَسَأَعُودُ قَرِيبًا.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b1-01-v2",
    "level": "B1",
    "number": 1,
    "month": 5,
    "emoji": "🎯",
    "title": "Subjonctif et buts",
    "minutes": 110,
    "goal": "Utiliser أَنْ, لَنْ, كَيْ et لِـ avec les bonnes désinences.",
    "grammar": [
      {
        "title": "Le mode منصوب",
        "body": "Après أَنْ, لَنْ, كَيْ, لِكَيْ et certains لِـ de finalité, le verbe à l’inaccompli est au subjonctif. Compare أَكْتُبُ (indicatif) et أَنْ أَكْتُبَ (subjonctif). Les cinq verbes (الأَفْعَالُ الْخَمْسَةُ) perdent leur nūn : يَكْتُبُونَ → أَنْ يَكْتُبُوا."
      },
      {
        "title": "Exprimer un but",
        "body": "أَدْرُسُ كَيْ أَنْجَحَ = j’étudie afin de réussir ; جِئْتُ لِأَتَعَلَّمَ = je suis venu pour apprendre. La nuance porte sur l’intention, non sur un événement déjà accompli."
      },
      {
        "title": "Faire attention aux verbes faibles",
        "body": "أُرِيدُ أَنْ أَسْعَى = je veux m’efforcer ; أَسْعَى garde une finale graphique différente du verbe sain. Pour ces formes, apprends ensemble accompli, inaccompli et maṣdar."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "تَدْرُسُ هَنَاءُ الْعَرَبِيَّةَ لِكَيْ تَقْرَأَ الصُّحُفَ وَتَفْهَمَ الْخِطَابَاتِ. تُرِيدُ أَنْ تُحَسِّنَ مَهَارَةَ الْكِتَابَةِ، وَلَنْ تَتَوَقَّفَ عَنِ التَّدْرِيبِ. تَقُولُ: «يَجِبُ أَنْ أَتَعَلَّمَ قَلِيلًا كُلَّ يَوْمٍ لِأَتَقَدَّمَ بِثَبَاتٍ».",
      "fr": "Hanaa étudie l’arabe afin de lire la presse et comprendre les discours. Elle veut améliorer son expression écrite et ne cessera pas de s’entraîner. Elle dit qu’elle doit apprendre un peu chaque jour pour progresser régulièrement."
    },
    "examples": [
      {
        "ar": "لِمَاذَا تَدْرُسُ الْعَرَبِيَّةَ؟",
        "fr": "Pourquoi étudies-tu l’arabe ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "أَدْرُسُ لِكَيْ أَفْهَمَ الْكُتُبَ.",
        "fr": "J’étudie pour comprendre des livres.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "لِكَيْ",
              "لِكَيْ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ تَنْوِي أَنْ تُوَاصِلَ؟",
        "fr": "As-tu l’intention de continuer ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "نَجَحَ",
        "present": "يَنْجَحُ",
        "masdar": "نَجَاحٌ",
        "fr": "réussir",
        "lookup": "نجح"
      },
      {
        "past": "حَسَّنَ",
        "present": "يُحَسِّنُ",
        "masdar": "تَحْسِينٌ",
        "fr": "améliorer",
        "lookup": "حسن"
      },
      {
        "past": "تَوَقَّفَ",
        "present": "يَتَوَقَّفُ",
        "masdar": "تَوَقُّفٌ",
        "fr": "cesser",
        "lookup": "توقف"
      }
    ],
    "words": [
      [
        "هَدَفٌ",
        "But"
      ],
      [
        "غَايَةٌ",
        "Finalité"
      ],
      [
        "مَهَارَةٌ",
        "Compétence"
      ],
      [
        "خِطَابٌ",
        "Discours"
      ],
      [
        "صَحِيفَةٌ",
        "Journal"
      ],
      [
        "تَدْرِيبٌ",
        "Entraînement"
      ],
      [
        "تَقَدُّمٌ",
        "Progrès"
      ],
      [
        "ثَبَاتٌ",
        "Constance"
      ],
      [
        "نَجَاحٌ",
        "Réussite"
      ],
      [
        "كَيْ",
        "Afin que / pour"
      ],
      [
        "لِكَيْ",
        "Pour que"
      ],
      [
        "لَنْ",
        "Ne... pas (futur)"
      ],
      [
        "أَنْ",
        "Marqueur de subjonctif"
      ],
      [
        "مَسْؤُولِيَّةٌ",
        "Responsabilité"
      ],
      [
        "مُثَابَرَةٌ",
        "Persévérance"
      ],
      [
        "وَاضِحٌ",
        "Clair"
      ]
    ],
    "dialect": [
      {
        "msa": "أُرِيدُ أَنْ أَتَعَلَّمَ.",
        "levant": "بَدِّي اِتْعَلَّمْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "بَدِّي = je veux en libano-syrien ; le dialecte n’a pas les mêmes désinences modales finales."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Après كَيْ, le verbe est normalement au...",
        "options": [
          "Subjonctif",
          "Afin que / pour",
          "Pour que"
        ],
        "answer": 0,
        "why": "كَيْ أَنْجَحَ."
      },
      {
        "type": "choice",
        "prompt": "Quel est l’indicatif de أَنْ يَكْتُبُوا ?",
        "options": [
          "غَايَةٌ",
          "يَكْتُبُونَ",
          "مَهَارَةٌ"
        ],
        "answer": 1,
        "why": "Les cinq verbes reprennent le nūn à l’indicatif."
      },
      {
        "type": "choice",
        "prompt": "Quel connecteur introduit un but ?",
        "options": [
          "تَقَدُّمٌ",
          "ثَبَاتٌ",
          "لِكَيْ"
        ],
        "answer": 2,
        "why": "Il signifie afin de / pour que."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مَهَارَةٌ » ?",
        "options": [
          "Compétence",
          "But",
          "Finalité"
        ],
        "answer": 0,
        "why": "مَهَارَةٌ = Compétence. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « ثَبَاتٌ » ?",
        "options": [
          "Discours",
          "Constance",
          "Journal"
        ],
        "answer": 1,
        "why": "ثَبَاتٌ = Constance. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « أَنْ » ?",
        "options": [
          "Progrès",
          "Constance",
          "Marqueur de subjonctif"
        ],
        "answer": 2,
        "why": "أَنْ = Marqueur de subjonctif. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de نَجَحَ ?",
        "options": [
          "نَجَاحٌ",
          "صَحِيفَةٌ",
          "تَدْرِيبٌ"
        ],
        "answer": 0,
        "why": "نَجَحَ – يَنْجَحُ – نَجَاحٌ (réussir)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de حَسَّنَ ?",
        "options": [
          "غَايَةٌ",
          "تَحْسِينٌ",
          "مَهَارَةٌ"
        ],
        "answer": 1,
        "why": "حَسَّنَ – يُحَسِّنُ – تَحْسِينٌ (améliorer)."
      },
      {
        "type": "input",
        "prompt": "Écris « Finalité » en arabe (forme du lexique).",
        "answer": "غَايَةٌ",
        "accepted": [
          "غاية"
        ],
        "why": "غَايَةٌ signifie « Finalité ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مُعَلِّم",
        "ar": "لِمَاذَا تَدْرُسُ الْعَرَبِيَّةَ؟",
        "fr": "Pourquoi étudies-tu l’arabe ?"
      },
      {
        "speaker": "طَالِب",
        "ar": "أَدْرُسُ لِكَيْ أَفْهَمَ الْكُتُبَ.",
        "fr": "J’étudie pour comprendre des livres."
      },
      {
        "speaker": "مُعَلِّم",
        "ar": "هَلْ تَنْوِي أَنْ تُوَاصِلَ؟",
        "fr": "As-tu l’intention de continuer ?"
      },
      {
        "speaker": "طَالِب",
        "ar": "نَعَمْ، لَنْ أَتَوَقَّفَ.",
        "fr": "Oui, je n’arrêterai pas."
      }
    ],
    "writing": {
      "prompt": "Écris huit phrases de but avec trois introducteurs différents. Compare les terminaisons de l’indicatif et du subjonctif.",
      "modelAr": "أَدْرُسُ كَيْ أَفْهَمَ. أُرِيدُ أَنْ أَتَحَدَّثَ بِطَلَاقَةٍ. لَنْ أَتَوَقَّفَ عَنِ الْمُرَاجَعَةِ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b1-02-v2",
    "level": "B1",
    "number": 2,
    "month": 5,
    "emoji": "🧩",
    "title": "Jussif, interdiction et condition",
    "minutes": 110,
    "goal": "Maîtriser لَمْ, لَا الناهية et les premiers systèmes conditionnels.",
    "grammar": [
      {
        "title": "Le mode مجزوم",
        "body": "Avec le verbe sain, le jussif se marque souvent par le sukūn : يَكْتُبُ → لَمْ يَكْتُبْ. Il se rencontre après لَمْ (négation du passé) et لَا الناهِيَة (interdiction) : لَا تَتَأَخَّرْ."
      },
      {
        "title": "Les cinq verbes et le jussif",
        "body": "يَذْهَبُونَ → لَمْ يَذْهَبُوا. Les cinq verbes perdent leur nūn au jussif et au subjonctif, mais ce sont deux modes distincts."
      },
      {
        "title": "Condition possible",
        "body": "إِنْ تَدْرُسْ تَنْجَحْ = si tu étudies, tu réussiras. Dans ce schéma canonique, condition et conséquence peuvent être au jussif. إذا est fréquent pour des événements envisagés comme réels, et n’a pas exactement le même régime."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "أَرَادَ أَحْمَدُ أَنْ يُنْهِيَ تَقْرِيرًا، وَلَكِنَّهُ لَمْ يَجِدْ وَقْتًا كَافِيًا. قَالَ لَهُ زَمِيلُهُ: «لَا تَيْأَسْ. إِنْ تُنَظِّمْ وَقْتَكَ تَنْجَحْ». فَكَتَبَ أَحْمَدُ خُطَّةً وَلَمْ يُؤَجِّلْ عَمَلَهُ.",
      "fr": "Ahmad voulait terminer un rapport, mais n’a pas trouvé assez de temps. Son collègue lui a conseillé de ne pas désespérer : s’il organise son temps, il réussira. Ahmad a alors rédigé un plan et n’a pas reporté son travail."
    },
    "examples": [
      {
        "ar": "لِمَاذَا لَمْ تُنْهِ التَّقْرِيرَ؟",
        "fr": "Pourquoi n’as-tu pas fini le rapport ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "تَقْرِيرٌ",
              "تَقْرِيرٌ"
            ],
            [
              "إِذَا",
              "إِذَا"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَمْ أَجِدْ وَقْتًا كَافِيًا.",
        "fr": "Je n’ai pas trouvé assez de temps.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "وَقْتٌ",
              "وَقْتٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَا تُؤَجِّلْهُ مَرَّةً أُخْرَى.",
        "fr": "Ne le reporte pas une nouvelle fois.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "أَجَّلَ",
        "present": "يُؤَجِّلُ",
        "masdar": "تَأْجِيلٌ",
        "fr": "reporter",
        "lookup": "أجل"
      },
      {
        "past": "نَظَّمَ",
        "present": "يُنَظِّمُ",
        "masdar": "تَنْظِيمٌ",
        "fr": "organiser",
        "lookup": "نظم"
      },
      {
        "past": "يَئِسَ",
        "present": "يَيْأَسُ",
        "masdar": "يَأْسٌ",
        "fr": "désespérer",
        "lookup": "يئس"
      }
    ],
    "words": [
      [
        "جَزْمٌ",
        "Jussif / apocope"
      ],
      [
        "شَرْطٌ",
        "Condition"
      ],
      [
        "نَهْيٌ",
        "Interdiction"
      ],
      [
        "تَقْرِيرٌ",
        "Rapport"
      ],
      [
        "وَقْتٌ",
        "Temps"
      ],
      [
        "خُطَّةٌ",
        "Plan"
      ],
      [
        "تَنْظِيمٌ",
        "Organisation"
      ],
      [
        "يَأْسٌ",
        "Découragement"
      ],
      [
        "تَأْجِيلٌ",
        "Report"
      ],
      [
        "جَدْوَلٌ",
        "Calendrier"
      ],
      [
        "إِنْ",
        "Si (condition)"
      ],
      [
        "إِذَا",
        "Si / lorsque"
      ],
      [
        "لَمْ",
        "Négation du passé"
      ],
      [
        "لَا النَّاهِيَةُ",
        "Particule d’interdiction"
      ],
      [
        "اِمْتِحَانٌ",
        "Examen"
      ],
      [
        "مَهَمَّةٌ",
        "Mission / tâche"
      ]
    ],
    "dialect": [
      {
        "msa": "لَا تَتَأَخَّرْ!",
        "levant": "مَا تْتَأَخَّرْ!",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "Le dialecte emploie souvent مَا pour l’interdiction, sans désinence jussive audible."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle terminaison prend يَكْتُبُ après لَمْ ?",
        "options": [
          "شَرْطٌ",
          "يَكْتُبْ",
          "نَهْيٌ"
        ],
        "answer": 1,
        "why": "Le verbe sain est au jussif."
      },
      {
        "type": "choice",
        "prompt": "Que signifie لَا تَتَأَخَّرْ ?",
        "options": [
          "Mission / tâche",
          "reporter",
          "Ne sois pas en retard !"
        ],
        "answer": 2,
        "why": "لَا prohibitif + jussif."
      },
      {
        "type": "choice",
        "prompt": "Dans إِنْ تَدْرُسْ تَنْجَحْ, le lien logique est...",
        "options": [
          "Condition – conséquence",
          "désespérer",
          "Une hypothèse"
        ],
        "answer": 0,
        "why": "La condition peut gouverner les deux verbes."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « نَهْيٌ » ?",
        "options": [
          "Jussif / apocope",
          "Condition",
          "Interdiction"
        ],
        "answer": 2,
        "why": "نَهْيٌ = Interdiction. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « يَأْسٌ » ?",
        "options": [
          "Découragement",
          "Rapport",
          "Temps"
        ],
        "answer": 0,
        "why": "يَأْسٌ = Découragement. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « لَمْ » ?",
        "options": [
          "Organisation",
          "Négation du passé",
          "Découragement"
        ],
        "answer": 1,
        "why": "لَمْ = Négation du passé. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَجَّلَ ?",
        "options": [
          "تَأْجِيلٌ",
          "اِمْتِحَانٌ",
          "مَهَمَّةٌ"
        ],
        "answer": 0,
        "why": "أَجَّلَ – يُؤَجِّلُ – تَأْجِيلٌ (reporter)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de نَظَّمَ ?",
        "options": [
          "يَأْسٌ",
          "تَنْظِيمٌ",
          "جَزْمٌ"
        ],
        "answer": 1,
        "why": "نَظَّمَ – يُنَظِّمُ – تَنْظِيمٌ (organiser)."
      },
      {
        "type": "input",
        "prompt": "Écris « Condition » en arabe (forme du lexique).",
        "answer": "شَرْطٌ",
        "accepted": [
          "شرط"
        ],
        "why": "شَرْطٌ signifie « Condition ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مُدِير",
        "ar": "لِمَاذَا لَمْ تُنْهِ التَّقْرِيرَ؟",
        "fr": "Pourquoi n’as-tu pas fini le rapport ?"
      },
      {
        "speaker": "مُوَظَّف",
        "ar": "لَمْ أَجِدْ وَقْتًا كَافِيًا.",
        "fr": "Je n’ai pas trouvé assez de temps."
      },
      {
        "speaker": "مُدِير",
        "ar": "لَا تُؤَجِّلْهُ مَرَّةً أُخْرَى.",
        "fr": "Ne le reporte pas une nouvelle fois."
      },
      {
        "speaker": "مُوَظَّف",
        "ar": "سَأُنْهِي الْعَمَلَ الْيَوْمَ.",
        "fr": "Je finirai le travail aujourd’hui."
      }
    ],
    "writing": {
      "prompt": "Transforme dix affirmations au présent en négations passées avec لَمْ, puis en interdictions adaptées.",
      "modelAr": "أَكْتُبُ التَّقْرِيرَ. لَمْ أَكْتُبِ التَّقْرِيرَ. لَا تَكْتُبِ التَّقْرِيرَ الْآنَ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b1-03-v2",
    "level": "B1",
    "number": 3,
    "month": 5,
    "emoji": "📜",
    "title": "Habitude passée et récit complexe",
    "minutes": 110,
    "goal": "Nuancer les aspects du passé avec كَانَ, قَدْ et les verbes de commencement.",
    "grammar": [
      {
        "title": "كَانَ + inaccompli",
        "body": "كَانَ يَقْرَأُ كُلَّ مَسَاءٍ = il lisait chaque soir. Souvent, cette construction présente un état ou une habitude dans le passé. كَانَ + prédicat nominal suit d’autres règles de cas."
      },
      {
        "title": "قَدْ + accompli",
        "body": "قَدْ وَصَلَ = il est déjà arrivé / il est effectivement arrivé selon le contexte. Il n’y a pas un seul équivalent français : analyse le récit et la valeur énonciative."
      },
      {
        "title": "Commencer, continuer, finir",
        "body": "بَدَأَ يَقْرَأُ = il a commencé à lire ; اِسْتَمَرَّ فِي الْقِرَاءَةِ = il a continué à lire ; اِنْتَهَى مِنَ الْقِرَاءَةِ = il a terminé sa lecture. Les régimes syntaxiques ne sont pas identiques."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "عِنْدَمَا كَانَ فَارِسٌ طَالِبًا، كَانَ يَعْمَلُ فِي مَكْتَبَةٍ بَعْدَ الدِّرَاسَةِ. بَدَأَ يَقْرَأُ كُتُبًا عَنِ التَّارِيخِ، ثُمَّ اِسْتَمَرَّ فِي الْبَحْثِ لِسَنَوَاتٍ. وَقَدْ أَصْبَحَ الْيَوْمَ مُدَرِّسًا يُسَاعِدُ الطُّلَّابَ عَلَى فَهْمِ الْمَاضِي.",
      "fr": "Quand Farès était étudiant, il travaillait dans une bibliothèque après les cours. Il a commencé à lire des livres d’histoire, puis a poursuivi ses recherches pendant des années. Aujourd’hui, il est devenu enseignant et aide les étudiants à comprendre le passé."
    },
    "examples": [
      {
        "ar": "مَاذَا كُنْتَ تَفْعَلُ بَعْدَ الْمَدْرَسَةِ؟",
        "fr": "Que faisais-tu après l’école ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مُدَرِّسٌ",
              "مُدَرِّسٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "كُنْتُ أَقْرَأُ فِي الْمَكْتَبَةِ.",
        "fr": "Je lisais à la bibliothèque.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مَكْتَبَةٌ",
              "مَكْتَبَةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَهَلْ تَابَعْتَ الدِّرَاسَةَ؟",
        "fr": "Et as-tu poursuivi tes études ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "اِسْتَمَرَّ",
        "present": "يَسْتَمِرُّ",
        "masdar": "اِسْتِمْرَارٌ",
        "fr": "continuer",
        "lookup": "استمر"
      },
      {
        "past": "اِنْتَهَى",
        "present": "يَنْتَهِي",
        "masdar": "اِنْتِهَاءٌ",
        "fr": "terminer / se terminer",
        "lookup": "انتهى"
      },
      {
        "past": "أَصْبَحَ",
        "present": "يُصْبِحُ",
        "masdar": "إِصْبَاحٌ",
        "fr": "devenir / passer au matin",
        "lookup": "أصبح"
      }
    ],
    "words": [
      [
        "عَادَةٌ",
        "Habitude"
      ],
      [
        "مَاضٍ",
        "Passé"
      ],
      [
        "ذِكْرَى",
        "Souvenir"
      ],
      [
        "مَكْتَبَةٌ",
        "Bibliothèque"
      ],
      [
        "بَحْثٌ",
        "Recherche"
      ],
      [
        "سَنَةٌ",
        "Année"
      ],
      [
        "طَالِبٌ",
        "Étudiant"
      ],
      [
        "مُدَرِّسٌ",
        "Enseignant"
      ],
      [
        "مَجَالٌ",
        "Domaine"
      ],
      [
        "تَجْرِبَةٌ",
        "Expérience"
      ],
      [
        "مُدَّةٌ",
        "Durée"
      ],
      [
        "فَتْرَةٌ",
        "Période"
      ],
      [
        "قَدْ",
        "Particule contextuelle"
      ],
      [
        "عِنْدَمَا",
        "Lorsque"
      ],
      [
        "أَصْبَحَ",
        "Il est devenu"
      ],
      [
        "اِسْتِمْرَارٌ",
        "Continuité"
      ]
    ],
    "dialect": [
      {
        "msa": "كُنْتُ أَقْرَأُ كُلَّ يَوْمٍ.",
        "levant": "كِنْتْ اِقْرَا كِلّ يَوْمْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "La combinaison de كَانَ + verbe existe en levantin, avec des réalisations phonétiques locales."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "كَانَ يَدْرُسُ exprime souvent...",
        "options": [
          "Continuité",
          "continuer",
          "Une habitude ou un déroulement dans le passé"
        ],
        "answer": 2,
        "why": "Le contexte est essentiel."
      },
      {
        "type": "choice",
        "prompt": "Que signifie اِسْتَمَرَّ ?",
        "options": [
          "Continuer",
          "Une obligation",
          "Une interdiction"
        ],
        "answer": 0,
        "why": "Souvent avec فِي + maṣdar."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِنْتَهَى ?",
        "options": [
          "قَدْ",
          "اِنْتِهَاءٌ",
          "عِنْدَمَا"
        ],
        "answer": 1,
        "why": "Verbe de forme VIII."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « ذِكْرَى » ?",
        "options": [
          "Habitude",
          "Souvenir",
          "Passé"
        ],
        "answer": 1,
        "why": "ذِكْرَى = Souvenir. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مُدَرِّسٌ » ?",
        "options": [
          "Bibliothèque",
          "Recherche",
          "Enseignant"
        ],
        "answer": 2,
        "why": "مُدَرِّسٌ = Enseignant. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « قَدْ » ?",
        "options": [
          "Particule contextuelle",
          "Étudiant",
          "Enseignant"
        ],
        "answer": 0,
        "why": "قَدْ = Particule contextuelle. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِسْتَمَرَّ ?",
        "options": [
          "اِسْتِمْرَارٌ",
          "سَنَةٌ",
          "طَالِبٌ"
        ],
        "answer": 0,
        "why": "اِسْتَمَرَّ – يَسْتَمِرُّ – اِسْتِمْرَارٌ (continuer)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِنْتَهَى ?",
        "options": [
          "مَاضٍ",
          "اِنْتِهَاءٌ",
          "ذِكْرَى"
        ],
        "answer": 1,
        "why": "اِنْتَهَى – يَنْتَهِي – اِنْتِهَاءٌ (terminer / se terminer)."
      },
      {
        "type": "input",
        "prompt": "Écris « Passé » en arabe (forme du lexique).",
        "answer": "مَاضٍ",
        "accepted": [
          "ماض"
        ],
        "why": "مَاضٍ signifie « Passé ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَرْوَان",
        "ar": "مَاذَا كُنْتَ تَفْعَلُ بَعْدَ الْمَدْرَسَةِ؟",
        "fr": "Que faisais-tu après l’école ?"
      },
      {
        "speaker": "فَارِس",
        "ar": "كُنْتُ أَقْرَأُ فِي الْمَكْتَبَةِ.",
        "fr": "Je lisais à la bibliothèque."
      },
      {
        "speaker": "مَرْوَان",
        "ar": "وَهَلْ تَابَعْتَ الدِّرَاسَةَ؟",
        "fr": "Et as-tu poursuivi tes études ?"
      },
      {
        "speaker": "فَارِس",
        "ar": "نَعَمْ، اِسْتَمْرَرْتُ فِيهَا سَنَوَاتٍ.",
        "fr": "Oui, je les ai poursuivies pendant des années."
      }
    ],
    "writing": {
      "prompt": "Raconte deux périodes de ta vie : habitudes d’avant et situation actuelle. Utilise كَانَ + inaccompli au moins cinq fois.",
      "modelAr": "عِنْدَمَا كُنْتُ صَغِيرًا، كُنْتُ أَقْرَأُ كُلَّ يَوْمٍ. ثُمَّ بَدَأْتُ أَتَعَلَّمُ اللُّغَاتِ، وَأَصْبَحْتُ أُحِبُّ الدِّرَاسَةَ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b1-04-v2",
    "level": "B1",
    "number": 4,
    "month": 6,
    "emoji": "🔎",
    "title": "Relatives et précision",
    "minutes": 110,
    "goal": "Développer le nom avec الَّذِي et الَّتِي, et utiliser les reprises pronominales.",
    "grammar": [
      {
        "title": "Relatif défini",
        "body": "الرَّجُلُ الَّذِي يَعْمَلُ هُنَا = l’homme qui travaille ici ; الْمَرْأَةُ الَّتِي تَدْرُسُ = la femme qui étudie. Le relatif s’accorde avec son antécédent en genre et en nombre."
      },
      {
        "title": "Relatif indéfini",
        "body": "Dans un groupe nominal indéfini, la relative peut se construire sans pronom relatif : رَأَيْتُ رَجُلًا يَقْرَأُ = j’ai vu un homme qui lisait. Ce n’est pas une omission facultative de الَّذِي dans tous les contextes."
      },
      {
        "title": "Reprise dans la relative",
        "body": "هَذَا هُوَ الْكِتَابُ الَّذِي قَرَأْتُهُ = voici le livre que j’ai lu. Le suffixe ـهُ renvoie au livre ; cette reprise est fréquente et doit être observée selon la fonction syntaxique."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "تَعْرِفُ لَيْلَى مُدَرِّسَةً تُحِبُّ اللُّغَاتِ. الْمُدَرِّسَةُ الَّتِي تَعْمَلُ فِي مَدْرَسَتِهَا تُشَجِّعُ الطُّلَّابَ عَلَى الْقِرَاءَةِ. أَعَارَتْهَا كِتَابًا جَدِيدًا، وَقَالَتْ: «هَذَا هُوَ الْكِتَابُ الَّذِي حَدَّثْتُكِ عَنْهُ».",
      "fr": "Leïla connaît une professeure qui aime les langues. La professeure qui travaille dans son école encourage les élèves à lire. Elle lui a prêté un nouveau livre en précisant que c’était celui dont elle lui avait parlé."
    },
    "examples": [
      {
        "ar": "مَنْ هُوَ الرَّجُلُ الَّذِي يَنْتَظِرُ هُنَاكَ؟",
        "fr": "Qui est l’homme qui attend là-bas ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "هُوَ الْمُدَرِّسُ الَّذِي عَرَفْنَاهُ أَمْسِ.",
        "fr": "C’est le professeur que nous avons rencontré hier.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "وَمَنْ هِيَ الْمَرْأَةُ الَّتِي مَعَهُ؟",
        "fr": "Et la femme avec lui ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "شَجَّعَ",
        "present": "يُشَجِّعُ",
        "masdar": "تَشْجِيعٌ",
        "fr": "encourager",
        "lookup": "شجع"
      },
      {
        "past": "أَعَارَ",
        "present": "يُعِيرُ",
        "masdar": "إِعَارَةٌ",
        "fr": "prêter",
        "lookup": "أعار"
      },
      {
        "past": "حَدَّثَ",
        "present": "يُحَدِّثُ",
        "masdar": "تَحْدِيثٌ",
        "fr": "parler à / mettre à jour",
        "lookup": "حدث"
      }
    ],
    "words": [
      [
        "الَّذِي",
        "Qui / que (masculin singulier défini)"
      ],
      [
        "الَّتِي",
        "Qui / que (féminin singulier défini)"
      ],
      [
        "الَّذِينَ",
        "Ceux qui (masculin pluriel)"
      ],
      [
        "مُدَرِّسَةٌ",
        "Enseignante"
      ],
      [
        "طَالِبٌ",
        "Étudiant"
      ],
      [
        "مَدْرَسَةٌ",
        "École"
      ],
      [
        "كِتَابٌ",
        "Livre"
      ],
      [
        "لُغَةٌ",
        "Langue"
      ],
      [
        "قِرَاءَةٌ",
        "Lecture"
      ],
      [
        "جُمْلَةٌ",
        "Phrase"
      ],
      [
        "صِلَةٌ",
        "Relation"
      ],
      [
        "ضَمِيرٌ",
        "Pronom"
      ],
      [
        "مَرْجِعٌ",
        "Référent"
      ],
      [
        "مُعَارَةٌ",
        "Prêt (objet prêté)"
      ],
      [
        "تَوْضِيحٌ",
        "Précision"
      ],
      [
        "مِثَالٌ",
        "Exemple"
      ]
    ],
    "dialect": [
      {
        "msa": "هَادَا الرَّجُلْ اللِّي بِيِشْتِغِلْ هُونْ.",
        "levant": "هَادَا الرَّجّالْ يَلِّي بِيِشْتِغِلْ هُونْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "يَلِّي / اللِّي est un relatif levantin très polyvalent, sans les mêmes accords qu’en fuṣḥā."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel relatif accompagne normalement الْمَرْأَةُ ?",
        "options": [
          "الَّتِي",
          "صِلَةٌ",
          "ضَمِيرٌ"
        ],
        "answer": 0,
        "why": "Féminin singulier défini."
      },
      {
        "type": "choice",
        "prompt": "Pour une relative sur un nom indéfini, le relatif est souvent...",
        "options": [
          "Une interdiction",
          "Absent",
          "Un récit"
        ],
        "answer": 1,
        "why": "رَأَيْتُ رَجُلًا يَقْرَأُ."
      },
      {
        "type": "choice",
        "prompt": "Dans قَرَأْتُهُ, ـهُ renvoie à...",
        "options": [
          "Une cause",
          "Une comparaison",
          "Un complément d’objet masculin singulier"
        ],
        "answer": 2,
        "why": "Pronom suffixe de reprise."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « الَّذِينَ » ?",
        "options": [
          "Ceux qui (masculin pluriel)",
          "Qui / que (masculin singulier défini)",
          "Qui / que (féminin singulier défini)"
        ],
        "answer": 0,
        "why": "الَّذِينَ = Ceux qui (masculin pluriel). Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « لُغَةٌ » ?",
        "options": [
          "Enseignante",
          "Langue",
          "Étudiant"
        ],
        "answer": 1,
        "why": "لُغَةٌ = Langue. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مَرْجِعٌ » ?",
        "options": [
          "Livre",
          "Langue",
          "Référent"
        ],
        "answer": 2,
        "why": "مَرْجِعٌ = Référent. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de شَجَّعَ ?",
        "options": [
          "تَشْجِيعٌ",
          "لُغَةٌ",
          "قِرَاءَةٌ"
        ],
        "answer": 0,
        "why": "شَجَّعَ – يُشَجِّعُ – تَشْجِيعٌ (encourager)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَعَارَ ?",
        "options": [
          "صِلَةٌ",
          "إِعَارَةٌ",
          "ضَمِيرٌ"
        ],
        "answer": 1,
        "why": "أَعَارَ – يُعِيرُ – إِعَارَةٌ (prêter)."
      },
      {
        "type": "input",
        "prompt": "Écris « Qui / que (féminin singulier défini) » en arabe (forme du lexique).",
        "answer": "الَّتِي",
        "accepted": [
          "التي"
        ],
        "why": "الَّتِي signifie « Qui / que (féminin singulier défini) ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "نَادِر",
        "ar": "مَنْ هُوَ الرَّجُلُ الَّذِي يَنْتَظِرُ هُنَاكَ؟",
        "fr": "Qui est l’homme qui attend là-bas ?"
      },
      {
        "speaker": "رَنَا",
        "ar": "هُوَ الْمُدَرِّسُ الَّذِي عَرَفْنَاهُ أَمْسِ.",
        "fr": "C’est le professeur que nous avons rencontré hier."
      },
      {
        "speaker": "نَادِر",
        "ar": "وَمَنْ هِيَ الْمَرْأَةُ الَّتِي مَعَهُ؟",
        "fr": "Et la femme avec lui ?"
      },
      {
        "speaker": "رَنَا",
        "ar": "هِيَ زَمِيلَتُهُ.",
        "fr": "C’est sa collègue."
      }
    ],
    "writing": {
      "prompt": "Décris cinq personnes et cinq objets à l’aide de relatives définies, puis crée trois relatives indéfinies.",
      "modelAr": "هَذَا هُوَ الصَّدِيقُ الَّذِي يَسْكُنُ قَرِيبًا مِنِّي. وَهَذِهِ هِيَ الْمَدْرَسَةُ الَّتِي تَعَلَّمْتُ فِيهَا.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b1-05-v2",
    "level": "B1",
    "number": 5,
    "month": 6,
    "emoji": "🌦️",
    "title": "La condition : إذا, إن, لو",
    "minutes": 110,
    "goal": "Comprendre le lien entre hypothèse probable et hypothèse irréelle.",
    "grammar": [
      {
        "title": "إذا et l’événement envisagé",
        "body": "إِذَا وَصَلْتَ مُبَكِّرًا فَسَنَبْدَأُ = si / quand tu arrives tôt, nous commencerons. Avec إذا, le verbe à l’accompli peut désigner un événement futur envisagé."
      },
      {
        "title": "إِنْ conditionnant",
        "body": "إِنْ تَجْتَهِدْ تَنْجَحْ = si tu fais des efforts, tu réussis / réussiras. Dans le style canonique, le jussif marque le verbe conditionnel et sa réponse lorsqu’elle est verbale simple."
      },
      {
        "title": "لو et l’irréel",
        "body": "لَوْ كَانَ عِنْدِي وَقْتٌ لَسَافَرْتُ = si j’avais du temps, je voyagerais. لَوْ peut exprimer une condition contrefactuelle ; la nuance est très dépendante du temps et du contexte."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "كَانَتْ مَيٌّ تُخَطِّطُ لِرِحْلَةٍ. قَالَتْ لِأَخِيهَا: «إِذَا كَانَ الْجَوُّ جَمِيلًا غَدًا فَسَنَذْهَبُ إِلَى الْجَبَلِ». أَجَابَ: «لَوْ كَانَ عِنْدِي سَيَّارَةٌ لَذَهَبْتُ مَعَكِ، وَلَكِنَّنِي سَأَعْمَلُ». فَاقْتَرَحَتْ أَنْ يُؤَجِّلَا الرِّحْلَةَ.",
      "fr": "May prévoyait une excursion. Elle a dit à son frère que, s’il faisait beau le lendemain, ils iraient à la montagne. Il a répondu que, s’il avait une voiture, il l’accompagnerait, mais qu’il travaillerait. Elle a donc proposé de reporter l’excursion."
    },
    "examples": [
      {
        "ar": "هَلْ سَتَسَافِرُ غَدًا؟",
        "fr": "Voyageras-tu demain ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "إِذَا كَانَ الْجَوُّ جَمِيلًا سَأُسَافِرُ.",
        "fr": "S’il fait beau, je voyagerai.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "إِذَا",
              "إِذَا"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَإِذَا أَمْطَرَتْ؟",
        "fr": "Et s’il pleut ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "إِذَا",
              "إِذَا"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "اِجْتَهَدَ",
        "present": "يَجْتَهِدُ",
        "masdar": "اِجْتِهَادٌ",
        "fr": "faire des efforts",
        "lookup": "اجتهد"
      },
      {
        "past": "اِقْتَرَحَ",
        "present": "يَقْتَرِحُ",
        "masdar": "اِقْتِرَاحٌ",
        "fr": "proposer",
        "lookup": "اقترح"
      },
      {
        "past": "أَجَّلَ",
        "present": "يُؤَجِّلُ",
        "masdar": "تَأْجِيلٌ",
        "fr": "reporter",
        "lookup": "أجل"
      }
    ],
    "words": [
      [
        "إِذَا",
        "Si / lorsque"
      ],
      [
        "إِنْ",
        "Si (condition)"
      ],
      [
        "لَوْ",
        "Si (irréel fréquent)"
      ],
      [
        "فَرْضِيَّةٌ",
        "Hypothèse"
      ],
      [
        "شَرْطٌ",
        "Condition"
      ],
      [
        "نَتِيجَةٌ",
        "Conséquence"
      ],
      [
        "اِحْتِمَالٌ",
        "Possibilité"
      ],
      [
        "سَيَّارَةٌ",
        "Voiture"
      ],
      [
        "رِحْلَةٌ",
        "Excursion"
      ],
      [
        "جَبَلٌ",
        "Montagne"
      ],
      [
        "طَقْسٌ",
        "Météo"
      ],
      [
        "اِقْتِرَاحٌ",
        "Proposition"
      ],
      [
        "تَأْجِيلٌ",
        "Report"
      ],
      [
        "لَوْلَا",
        "Sans / n’était-ce"
      ],
      [
        "خِطَّةٌ",
        "Plan"
      ],
      [
        "مُمْكِنٌ",
        "Possible"
      ]
    ],
    "dialect": [
      {
        "msa": "إِذَا كَانَ الْجَوُّ جَمِيلًا سَأَخْرُجُ.",
        "levant": "إِذَا الْجَوّ حِلْوْ بَطْلَعْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "إِذَا existe aussi en levantin, mais les formes verbales et le registre changent."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle particule sert souvent pour une condition irréelle ?",
        "options": [
          "لَوْلَا",
          "لَوْ",
          "خِطَّةٌ"
        ],
        "answer": 1,
        "why": "Souvent associée à une situation contrefactuelle."
      },
      {
        "type": "choice",
        "prompt": "Dans إِنْ تَدْرُسْ تَنْجَحْ, تَدْرُسْ est au...",
        "options": [
          "Une cause",
          "Une comparaison",
          "Jussif"
        ],
        "answer": 2,
        "why": "Schéma canonique de la condition avec إِنْ."
      },
      {
        "type": "choice",
        "prompt": "Que signifie اِحْتِمَالٌ ?",
        "options": [
          "Possibilité / probabilité",
          "Si / lorsque",
          "Si (condition)"
        ],
        "answer": 0,
        "why": "Lexique du raisonnement."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « لَوْ » ?",
        "options": [
          "Si / lorsque",
          "Si (condition)",
          "Si (irréel fréquent)"
        ],
        "answer": 2,
        "why": "لَوْ = Si (irréel fréquent). Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « سَيَّارَةٌ » ?",
        "options": [
          "Voiture",
          "Hypothèse",
          "Condition"
        ],
        "answer": 0,
        "why": "سَيَّارَةٌ = Voiture. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « تَأْجِيلٌ » ?",
        "options": [
          "Possibilité",
          "Report",
          "Voiture"
        ],
        "answer": 1,
        "why": "تَأْجِيلٌ = Report. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِجْتَهَدَ ?",
        "options": [
          "اِجْتِهَادٌ",
          "اِقْتِرَاحٌ",
          "تَأْجِيلٌ"
        ],
        "answer": 0,
        "why": "اِجْتَهَدَ – يَجْتَهِدُ – اِجْتِهَادٌ (faire des efforts)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِقْتَرَحَ ?",
        "options": [
          "جَبَلٌ",
          "اِقْتِرَاحٌ",
          "طَقْسٌ"
        ],
        "answer": 1,
        "why": "اِقْتَرَحَ – يَقْتَرِحُ – اِقْتِرَاحٌ (proposer)."
      },
      {
        "type": "input",
        "prompt": "Écris « Si (condition) » en arabe (forme du lexique).",
        "answer": "إِنْ",
        "accepted": [
          "ان"
        ],
        "why": "إِنْ signifie « Si (condition) ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مَيْ",
        "ar": "هَلْ سَتَسَافِرُ غَدًا؟",
        "fr": "Voyageras-tu demain ?"
      },
      {
        "speaker": "هَانِي",
        "ar": "إِذَا كَانَ الْجَوُّ جَمِيلًا سَأُسَافِرُ.",
        "fr": "S’il fait beau, je voyagerai."
      },
      {
        "speaker": "مَيْ",
        "ar": "وَإِذَا أَمْطَرَتْ؟",
        "fr": "Et s’il pleut ?"
      },
      {
        "speaker": "هَانِي",
        "ar": "سَأَبْقَى فِي الْبَيْتِ.",
        "fr": "Je resterai chez moi."
      }
    ],
    "writing": {
      "prompt": "Écris neuf phrases conditionnelles : trois avec إذا, trois avec إن et trois avec لو. Explique pourquoi tu as choisi chaque particule.",
      "modelAr": "إِذَا وَصَلْتَ مُبَكِّرًا فَسَنَبْدَأُ. إِنْ تَدْرُسْ تَنْجَحْ. لَوْ كَانَ عِنْدِي وَقْتٌ لَسَافَرْتُ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b1-06-v2",
    "level": "B1",
    "number": 6,
    "month": 7,
    "emoji": "💬",
    "title": "Articuler une opinion",
    "minutes": 110,
    "goal": "Exprimer avis, raison, conséquence et opposition dans un texte argumentatif.",
    "grammar": [
      {
        "title": "Donner son avis",
        "body": "فِي رَأْيِي = à mon avis ; أَعْتَقِدُ أَنَّ = je crois que ; أَرَى أَنَّ = j’estime que. أَنَّ introduit une proposition complétive nominale et gouverne le nom au cas accusatif : أَعْتَقِدُ أَنَّ الْعَمَلَ مُهِمٌّ."
      },
      {
        "title": "Cause, conséquence, opposition",
        "body": "لِأَنَّ = parce que ; لِذَلِكَ = par conséquent ; وَلَكِنْ = mais ; بِالْإِضَافَةِ إِلَى ذَلِكَ = en outre. Ne juxtapose pas les connecteurs : identifie d’abord le rapport logique."
      },
      {
        "title": "Équilibrer les arguments",
        "body": "مِنْ جِهَةٍ... وَمِنْ جِهَةٍ أُخْرَى... = d’un côté... de l’autre... Conclus avec لِهَذَا السَّبَبِ ou فِي النِّهَايَةِ, plutôt qu’une simple répétition de ton opinion."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "أَعْتَقِدُ أَنَّ تَعَلُّمَ اللُّغَاتِ يُوَسِّعُ الْأُفُقَ. فَهُوَ يَسْمَحُ لَنَا بِفَهْمِ ثَقَافَاتٍ مُخْتَلِفَةٍ، كَمَا أَنَّهُ يُسَاعِدُ فِي الْعَمَلِ. وَلَكِنَّ الدِّرَاسَةَ تَحْتَاجُ إِلَى وَقْتٍ وَصَبْرٍ. لِذَلِكَ أَرَى أَنَّ الْمُثَابَرَةَ أَهَمُّ مِنَ السُّرْعَةِ.",
      "fr": "Je crois que l’apprentissage des langues élargit les horizons : il permet de comprendre différentes cultures et aide au travail. Cependant, il demande du temps et de la patience. C’est pourquoi je considère la persévérance plus importante que la rapidité."
    },
    "examples": [
      {
        "ar": "مَا رَأْيُكَ فِي تَعَلُّمِ اللُّغَاتِ؟",
        "fr": "Que penses-tu de l’apprentissage des langues ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "رَأْيٌ",
              "رَأْيٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "فِي رَأْيِي، هُوَ مُفِيدٌ جِدًّا.",
        "fr": "À mon avis, c’est très utile.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "رَأْيٌ",
              "رَأْيٌ"
            ],
            [
              "فِي رَأْيِي",
              "فِي رَأْيِي"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَلَكِنَّهُ يَحْتَاجُ إِلَى وَقْتٍ، أَلَيْسَ كَذَلِكَ؟",
        "fr": "Mais cela demande du temps, n’est-ce pas ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "وَلَكِنْ",
              "وَلَكِنْ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "اِعْتَقَدَ",
        "present": "يَعْتَقِدُ",
        "masdar": "اِعْتِقَادٌ",
        "fr": "croire / estimer",
        "lookup": "اعتقد"
      },
      {
        "past": "وَسَّعَ",
        "present": "يُوَسِّعُ",
        "masdar": "تَوْسِيعٌ",
        "fr": "élargir",
        "lookup": "وسع"
      },
      {
        "past": "سَمَحَ",
        "present": "يَسْمَحُ",
        "masdar": "سَمَاحٌ / سَمَاحَةٌ",
        "fr": "permettre",
        "lookup": "سمح"
      }
    ],
    "words": [
      [
        "رَأْيٌ",
        "Opinion"
      ],
      [
        "فِكْرَةٌ",
        "Idée"
      ],
      [
        "حُجَّةٌ",
        "Argument"
      ],
      [
        "سَبَبٌ",
        "Cause"
      ],
      [
        "نَتِيجَةٌ",
        "Conséquence"
      ],
      [
        "مَوْقِفٌ",
        "Position"
      ],
      [
        "ثَقَافَةٌ",
        "Culture"
      ],
      [
        "أُفُقٌ",
        "Horizon"
      ],
      [
        "صَبْرٌ",
        "Patience"
      ],
      [
        "مُثَابَرَةٌ",
        "Persévérance"
      ],
      [
        "فِي رَأْيِي",
        "À mon avis"
      ],
      [
        "لِذَلِكَ",
        "Par conséquent"
      ],
      [
        "وَلَكِنْ",
        "Mais"
      ],
      [
        "بِالْإِضَافَةِ",
        "En outre"
      ],
      [
        "فِي النِّهَايَةِ",
        "En conclusion"
      ],
      [
        "عَلَى سَبِيلِ الْمِثَالِ",
        "Par exemple"
      ]
    ],
    "dialect": [
      {
        "msa": "فِي رَأْيِي، هَذَا مُهِمٌّ.",
        "levant": "بِرَأْيِي، هَالشَّغْلِة مُهِمَّةْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "بِرَأْيِي = à mon avis ; شَغْلِة = chose / affaire en levantin."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle expression introduit un avis personnel ?",
        "options": [
          "اِعْتِقَادٌ",
          "تَوْسِيعٌ",
          "فِي رَأْيِي"
        ],
        "answer": 2,
        "why": "Signifie à mon avis."
      },
      {
        "type": "choice",
        "prompt": "Quel connecteur marque une conséquence ?",
        "options": [
          "لِذَلِكَ",
          "رَأْيٌ",
          "فِكْرَةٌ"
        ],
        "answer": 0,
        "why": "C’est pourquoi."
      },
      {
        "type": "choice",
        "prompt": "Après أَعْتَقِدُ أَنَّ, le nom de أَنَّ est au...",
        "options": [
          "Cause",
          "Accusatif",
          "Conséquence"
        ],
        "answer": 1,
        "why": "Exemple أَنَّ الْعَمَلَ مُهِمٌّ."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « حُجَّةٌ » ?",
        "options": [
          "Opinion",
          "Argument",
          "Idée"
        ],
        "answer": 1,
        "why": "حُجَّةٌ = Argument. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « أُفُقٌ » ?",
        "options": [
          "Cause",
          "Conséquence",
          "Horizon"
        ],
        "answer": 2,
        "why": "أُفُقٌ = Horizon. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « وَلَكِنْ » ?",
        "options": [
          "Mais",
          "Culture",
          "Horizon"
        ],
        "answer": 0,
        "why": "وَلَكِنْ = Mais. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِعْتَقَدَ ?",
        "options": [
          "اِعْتِقَادٌ",
          "أُفُقٌ",
          "صَبْرٌ"
        ],
        "answer": 0,
        "why": "اِعْتَقَدَ – يَعْتَقِدُ – اِعْتِقَادٌ (croire / estimer)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de وَسَّعَ ?",
        "options": [
          "فِي رَأْيِي",
          "تَوْسِيعٌ",
          "لِذَلِكَ"
        ],
        "answer": 1,
        "why": "وَسَّعَ – يُوَسِّعُ – تَوْسِيعٌ (élargir)."
      },
      {
        "type": "input",
        "prompt": "Écris « Idée » en arabe (forme du lexique).",
        "answer": "فِكْرَةٌ",
        "accepted": [
          "فكرة"
        ],
        "why": "فِكْرَةٌ signifie « Idée ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مُحَاوِر",
        "ar": "مَا رَأْيُكَ فِي تَعَلُّمِ اللُّغَاتِ؟",
        "fr": "Que penses-tu de l’apprentissage des langues ?"
      },
      {
        "speaker": "مُتَحَدِّث",
        "ar": "فِي رَأْيِي، هُوَ مُفِيدٌ جِدًّا.",
        "fr": "À mon avis, c’est très utile."
      },
      {
        "speaker": "مُحَاوِر",
        "ar": "وَلَكِنَّهُ يَحْتَاجُ إِلَى وَقْتٍ، أَلَيْسَ كَذَلِكَ؟",
        "fr": "Mais cela demande du temps, n’est-ce pas ?"
      },
      {
        "speaker": "مُتَحَدِّث",
        "ar": "صَحِيحٌ، لِذَلِكَ نَحْتَاجُ إِلَى خُطَّةٍ.",
        "fr": "C’est vrai, donc il faut un plan."
      }
    ],
    "writing": {
      "prompt": "Rédige un texte de 180 mots « Faut-il apprendre plusieurs langues ? », avec avis, deux arguments, objection et conclusion.",
      "modelAr": "فِي رَأْيِي، تَعَلُّمُ اللُّغَاتِ مُهِمٌّ لِأَنَّهُ يُوَسِّعُ الْمَعْرِفَةَ. وَمَعَ ذَلِكَ، يَحْتَاجُ إِلَى الصَّبْرِ. لِذَلِكَ يَجِبُ أَنْ نُنَظِّمَ وَقْتَنَا.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b1-07-v2",
    "level": "B1",
    "number": 7,
    "month": 7,
    "emoji": "📰",
    "title": "Le passif : comprendre les nouvelles",
    "minutes": 110,
    "goal": "Reconnaître une information qui met l’action au premier plan.",
    "grammar": [
      {
        "title": "Passif de l’accompli",
        "body": "كَتَبَ (il a écrit) devient كُتِبَ (il a été écrit) pour ce verbe trilittère sain. Dans كُتِبَ التَّقْرِيرُ, le rapport est au nominatif parce qu’il devient نائب الفاعل, « substitut du sujet »."
      },
      {
        "title": "Passif de l’inaccompli",
        "body": "يَكْتُبُ devient يُكْتَبُ. Exemple يُنْشَرُ الْخَبَرُ = la nouvelle est publiée. Les verbes faibles et dérivés ont des schémas propres ; ne généralise pas à partir d’un seul verbe."
      },
      {
        "title": "Pourquoi l’utiliser ?",
        "body": "Le passif sert à mettre en avant l’événement ou son résultat, lorsque l’agent est inconnu, peu important ou volontairement omis. Compare نَشَرَتِ الصَّحِيفَةُ الْخَبَرَ et نُشِرَ الْخَبَرُ."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "أُعْلِنَ أَمْسِ عَنْ مَشْرُوعٍ جَدِيدٍ لِلنَّقْلِ فِي الْمَدِينَةِ. وَقَدْ نُشِرَتِ التَّفَاصِيلُ فِي الصَّحِيفَةِ الْمَحَلِّيَّةِ. سَيُبْنَى جِسْرٌ جَدِيدٌ، وَسَتُحَسَّنُ الْمَوَاصَلَاتُ فِي الْأَحْيَاءِ الْبَعِيدَةِ. لَكِنَّ بَعْضَ السُّكَّانِ يَطْلُبُونَ مَزِيدًا مِنَ الْمَعْلُومَاتِ.",
      "fr": "Un nouveau projet de transport a été annoncé hier dans la ville et les détails ont été publiés dans le journal local. Un nouveau pont sera construit et les transports seront améliorés dans les quartiers éloignés. Mais certains habitants demandent plus d’informations."
    },
    "examples": [
      {
        "ar": "مَتَى أُعْلِنَ الْخَبَرُ؟",
        "fr": "Quand la nouvelle a-t-elle été annoncée ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "أُعْلِنَ أَمْسِ.",
        "fr": "Elle a été annoncée hier.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "وَأَيْنَ نُشِرَ التَّقْرِيرُ؟",
        "fr": "Où le rapport a-t-il été publié ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "نَشْرٌ",
              "نَشْرٌ"
            ],
            [
              "تَقْرِيرٌ",
              "تَقْرِيرٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "نَشَرَ",
        "present": "يَنْشُرُ",
        "masdar": "نَشْرٌ",
        "fr": "publier",
        "lookup": "نشر"
      },
      {
        "past": "أَعْلَنَ",
        "present": "يُعْلِنُ",
        "masdar": "إِعْلَانٌ",
        "fr": "annoncer",
        "lookup": "أعلن"
      },
      {
        "past": "بَنَى",
        "present": "يَبْنِي",
        "masdar": "بِنَاءٌ",
        "fr": "construire",
        "lookup": "بنى"
      }
    ],
    "words": [
      [
        "مَجْهُولٌ",
        "Inconnu"
      ],
      [
        "مَعْلُومٌ",
        "Connu"
      ],
      [
        "مَشْرُوعٌ",
        "Projet"
      ],
      [
        "نَقْلٌ",
        "Transport"
      ],
      [
        "تَفَاصِيلُ",
        "Détails"
      ],
      [
        "جِسْرٌ",
        "Pont"
      ],
      [
        "سُكَّانٌ",
        "Habitants"
      ],
      [
        "حَيٌّ",
        "Quartier"
      ],
      [
        "نَشْرٌ",
        "Publication"
      ],
      [
        "إِعْلَانٌ",
        "Annonce"
      ],
      [
        "تَحْسِينٌ",
        "Amélioration"
      ],
      [
        "مَحَلِّيٌّ",
        "Local"
      ],
      [
        "بَعِيدٌ",
        "Éloigné"
      ],
      [
        "مَعْلُومَاتٌ",
        "Informations"
      ],
      [
        "مَصْدَرٌ",
        "Source"
      ],
      [
        "تَقْرِيرٌ",
        "Rapport"
      ]
    ],
    "dialect": [
      {
        "msa": "نُشِرَ الْخَبَرُ أَمْسِ.",
        "levant": "نِشِرُوا الْخَبَرْ إِمْبَارِحْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "En conversation, une tournure à sujet indéfini (« ils ont publié ») remplace souvent le passif littéraire."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel est le passif de كَتَبَ ?",
        "options": [
          "كُتِبَ",
          "نَشْرٌ",
          "إِعْلَانٌ"
        ],
        "answer": 0,
        "why": "Schéma vocalique فُعِلَ du trilittère sain."
      },
      {
        "type": "choice",
        "prompt": "Quel est le passif de يَكْتُبُ ?",
        "options": [
          "مَجْهُولٌ",
          "يُكْتَبُ",
          "مَعْلُومٌ"
        ],
        "answer": 1,
        "why": "Schéma يُفْعَلُ."
      },
      {
        "type": "choice",
        "prompt": "Dans كُتِبَ التَّقْرِيرُ, التَّقْرِيرُ est au...",
        "options": [
          "Habitants",
          "Quartier",
          "Nominatif"
        ],
        "answer": 2,
        "why": "Il est substitut du sujet."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مَشْرُوعٌ » ?",
        "options": [
          "Projet",
          "Inconnu",
          "Connu"
        ],
        "answer": 0,
        "why": "مَشْرُوعٌ = Projet. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « حَيٌّ » ?",
        "options": [
          "Transport",
          "Quartier",
          "Détails"
        ],
        "answer": 1,
        "why": "حَيٌّ = Quartier. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « بَعِيدٌ » ?",
        "options": [
          "Habitants",
          "Quartier",
          "Éloigné"
        ],
        "answer": 2,
        "why": "بَعِيدٌ = Éloigné. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de نَشَرَ ?",
        "options": [
          "نَشْرٌ",
          "حَيٌّ",
          "إِعْلَانٌ"
        ],
        "answer": 0,
        "why": "نَشَرَ – يَنْشُرُ – نَشْرٌ (publier)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَعْلَنَ ?",
        "options": [
          "مَحَلِّيٌّ",
          "إِعْلَانٌ",
          "بَعِيدٌ"
        ],
        "answer": 1,
        "why": "أَعْلَنَ – يُعْلِنُ – إِعْلَانٌ (annoncer)."
      },
      {
        "type": "input",
        "prompt": "Écris « Connu » en arabe (forme du lexique).",
        "answer": "مَعْلُومٌ",
        "accepted": [
          "معلوم"
        ],
        "why": "مَعْلُومٌ signifie « Connu ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "صَحَفِيّ",
        "ar": "مَتَى أُعْلِنَ الْخَبَرُ؟",
        "fr": "Quand la nouvelle a-t-elle été annoncée ?"
      },
      {
        "speaker": "مَسْؤُول",
        "ar": "أُعْلِنَ أَمْسِ.",
        "fr": "Elle a été annoncée hier."
      },
      {
        "speaker": "صَحَفِيّ",
        "ar": "وَأَيْنَ نُشِرَ التَّقْرِيرُ؟",
        "fr": "Où le rapport a-t-il été publié ?"
      },
      {
        "speaker": "مَسْؤُول",
        "ar": "نُشِرَ فِي الْمَوْقِعِ الرَّسْمِيِّ.",
        "fr": "Sur le site officiel."
      }
    ],
    "writing": {
      "prompt": "Prends six phrases actives, transforme-les au passif, puis explique ce que devient l’ancien complément d’objet.",
      "modelAr": "كَتَبَ الْمُدِيرُ التَّقْرِيرَ. كُتِبَ التَّقْرِيرُ. نَشَرَتِ الصَّحِيفَةُ الْخَبَرَ. نُشِرَ الْخَبَرُ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b1-08-v2",
    "level": "B1",
    "number": 8,
    "month": 7,
    "emoji": "🧱",
    "title": "Participes actifs et passifs",
    "minutes": 110,
    "goal": "Reconnaître les participes et enrichir la description.",
    "grammar": [
      {
        "title": "Participe actif du trilittère",
        "body": "كَتَبَ → كَاتِبٌ (écrivain, celui qui écrit) ; عَمِلَ → عَامِلٌ (travailleur). Le schéma فَاعِلٌ est fréquent mais ne couvre pas tous les mots sémantiquement équivalents."
      },
      {
        "title": "Participe passif du trilittère",
        "body": "كَتَبَ → مَكْتُوبٌ (écrit) ; فَتَحَ → مَفْتُوحٌ (ouvert). Schéma مَفْعُولٌ lorsque le verbe se prête au passif."
      },
      {
        "title": "Dérivés et emploi nominal",
        "body": "دَرَّسَ → مُدَرِّسٌ (enseignant) et مُدَرَّسٌ (enseigné). Les participes des formes dérivées ont un préfixe مُـ, avec des voyelles qui distinguent actif/passif. Ils peuvent fonctionner comme noms ou adjectifs."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "وَجَدَتْ هِنْدٌ بَابَ الْمَكْتَبَةِ مَفْتُوحًا وَعَلَيْهِ إِعْلَانًا مَكْتُوبًا بِالْعَرَبِيَّةِ. دَخَلَتْ فَرَأَتْ مُدَرِّسًا يَشْرَحُ دَرْسًا وَطُلَّابًا يَكْتُبُونَ مُلَخَّصَاتٍ. كَانَ الْمَكَانُ هَادِئًا وَمُنَظَّمًا، فَجَلَسَتْ لِتَقْرَأَ.",
      "fr": "Hind a trouvé la porte de la bibliothèque ouverte, avec une annonce écrite en arabe. En entrant, elle a vu un enseignant expliquer une leçon et des élèves rédiger des résumés. Le lieu était calme et organisé ; elle s’est assise pour lire."
    },
    "examples": [
      {
        "ar": "هَلِ الْبَابُ مَفْتُوحٌ؟",
        "fr": "La porte est-elle ouverte ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مَفْتُوحٌ",
              "مَفْتُوحٌ"
            ],
            [
              "بَابٌ",
              "بَابٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، وَالْفَصْلُ مُنَظَّمٌ.",
        "fr": "Oui, et la salle est bien organisée.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مُنَظَّمٌ",
              "مُنَظَّمٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "مَنْ هَذَا الرَّجُلُ؟",
        "fr": "Qui est cet homme ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "فَتَحَ",
        "present": "يَفْتَحُ",
        "masdar": "فَتْحٌ",
        "fr": "ouvrir",
        "lookup": "فتح"
      },
      {
        "past": "دَرَّسَ",
        "present": "يُدَرِّسُ",
        "masdar": "تَدْرِيسٌ",
        "fr": "enseigner",
        "lookup": "درس"
      },
      {
        "past": "نَظَّمَ",
        "present": "يُنَظِّمُ",
        "masdar": "تَنْظِيمٌ",
        "fr": "organiser",
        "lookup": "نظم"
      }
    ],
    "words": [
      [
        "كَاتِبٌ",
        "Écrivain / rédacteur"
      ],
      [
        "مَكْتُوبٌ",
        "Écrit"
      ],
      [
        "عَامِلٌ",
        "Travailleur"
      ],
      [
        "مَفْتُوحٌ",
        "Ouvert"
      ],
      [
        "مُغْلَقٌ",
        "Fermé"
      ],
      [
        "مُدَرِّسٌ",
        "Enseignant"
      ],
      [
        "مُنَظَّمٌ",
        "Organisé"
      ],
      [
        "مُخْتَارٌ",
        "Choisi"
      ],
      [
        "مُهْتَمٌّ",
        "Intéressé"
      ],
      [
        "طَالِبٌ",
        "Étudiant"
      ],
      [
        "شَارِحٌ",
        "Explicatif"
      ],
      [
        "وَاضِحٌ",
        "Clair"
      ],
      [
        "مُلَخَّصٌ",
        "Résumé"
      ],
      [
        "إِعْلَانٌ",
        "Annonce"
      ],
      [
        "بَابٌ",
        "Porte"
      ],
      [
        "صِفَةٌ",
        "Adjectif / qualité"
      ]
    ],
    "dialect": [
      {
        "msa": "الْبَابُ مَفْتُوحٌ.",
        "levant": "الْبَابْ مَفْتُوحْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "De nombreux participes restent reconnaissables dans le parler levantin."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel est le participe actif de كَتَبَ ?",
        "options": [
          "مُغْلَقٌ",
          "كَاتِبٌ",
          "مُدَرِّسٌ"
        ],
        "answer": 1,
        "why": "Schéma فَاعِلٌ."
      },
      {
        "type": "choice",
        "prompt": "Quel est le participe passif de فَتَحَ ?",
        "options": [
          "مُخْتَارٌ",
          "مُهْتَمٌّ",
          "مَفْتُوحٌ"
        ],
        "answer": 2,
        "why": "Schéma مَفْعُولٌ."
      },
      {
        "type": "choice",
        "prompt": "Quelle forme désigne généralement un enseignant ?",
        "options": [
          "مُدَرِّسٌ",
          "شَارِحٌ",
          "وَاضِحٌ"
        ],
        "answer": 0,
        "why": "Participe actif de دَرَّسَ."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « عَامِلٌ » ?",
        "options": [
          "Écrivain / rédacteur",
          "Écrit",
          "Travailleur"
        ],
        "answer": 2,
        "why": "عَامِلٌ = Travailleur. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مُخْتَارٌ » ?",
        "options": [
          "Choisi",
          "Ouvert",
          "Fermé"
        ],
        "answer": 0,
        "why": "مُخْتَارٌ = Choisi. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مُلَخَّصٌ » ?",
        "options": [
          "Organisé",
          "Résumé",
          "Choisi"
        ],
        "answer": 1,
        "why": "مُلَخَّصٌ = Résumé. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de فَتَحَ ?",
        "options": [
          "فَتْحٌ",
          "مُخْتَارٌ",
          "مُهْتَمٌّ"
        ],
        "answer": 0,
        "why": "فَتَحَ – يَفْتَحُ – فَتْحٌ (ouvrir)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de دَرَّسَ ?",
        "options": [
          "شَارِحٌ",
          "تَدْرِيسٌ",
          "وَاضِحٌ"
        ],
        "answer": 1,
        "why": "دَرَّسَ – يُدَرِّسُ – تَدْرِيسٌ (enseigner)."
      },
      {
        "type": "input",
        "prompt": "Écris « Écrit » en arabe (forme du lexique).",
        "answer": "مَكْتُوبٌ",
        "accepted": [
          "مكتوب"
        ],
        "why": "مَكْتُوبٌ signifie « Écrit ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "سَلْمَى",
        "ar": "هَلِ الْبَابُ مَفْتُوحٌ؟",
        "fr": "La porte est-elle ouverte ?"
      },
      {
        "speaker": "عَادِل",
        "ar": "نَعَمْ، وَالْفَصْلُ مُنَظَّمٌ.",
        "fr": "Oui, et la salle est bien organisée."
      },
      {
        "speaker": "سَلْمَى",
        "ar": "مَنْ هَذَا الرَّجُلُ؟",
        "fr": "Qui est cet homme ?"
      },
      {
        "speaker": "عَادِل",
        "ar": "هُوَ مُدَرِّسُ اللُّغَةِ الْعَرَبِيَّةِ.",
        "fr": "C’est le professeur d’arabe."
      }
    ],
    "writing": {
      "prompt": "Dresse un tableau actif/passif pour dix verbes et écris un portrait de 100 mots utilisant six participes.",
      "modelAr": "الْبَابُ مَفْتُوحٌ، وَالتَّقْرِيرُ مَكْتُوبٌ. الْمُدَرِّسُ مُنَظَّمٌ، وَالطُّلَّابُ مُهْتَمُّونَ بِالدَّرْسِ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b1-09-v2",
    "level": "B1",
    "number": 9,
    "month": 8,
    "emoji": "🔢",
    "title": "Pluriels, dual et quantités",
    "minutes": 110,
    "goal": "Mieux manier les accords des personnes, choses et quantités.",
    "grammar": [
      {
        "title": "Pluriels externes",
        "body": "مُعَلِّمٌ → مُعَلِّمُونَ / مُعَلِّمِينَ (pluriel masculin sain selon le cas) ; مُعَلِّمَةٌ → مُعَلِّمَاتٌ (féminin sain). Les terminaisons varient avec la fonction grammaticale."
      },
      {
        "title": "Pluriels internes",
        "body": "كِتَابٌ → كُتُبٌ ; رَجُلٌ → رِجَالٌ ; بَيْتٌ → بُيُوتٌ. Le pluriel brisé se mémorise avec son singulier. Pour un pluriel non humain, l’accord adjectival est normalement féminin singulier : كُتُبٌ جَدِيدَةٌ."
      },
      {
        "title": "Duel",
        "body": "كِتَابَانِ (deux livres au nominatif), كِتَابَيْنِ (accusatif/génitif). Pour le duel féminin, مَدْرَسَتَانِ / مَدْرَسَتَيْنِ. Le duel est très productif en arabe littéraire."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "فِي قَاعَةِ الدِّرَاسَةِ طَالِبَانِ وَثَلَاثُ طَالِبَاتٍ. أَحْضَرَ الطَّالِبَانِ كِتَابَيْنِ جَدِيدَيْنِ، وَأَحْضَرَتِ الطَّالِبَاتُ كُتُبًا قَدِيمَةً. قَالَ الْمُدَرِّسُ: «سَنَقْرَأُ نَصَّيْنِ وَنُقَارِنُ بَيْنَ الْأَفْكَارِ».",
      "fr": "Dans une salle d’étude se trouvent deux étudiants et trois étudiantes. Les étudiants ont apporté deux nouveaux livres et les étudiantes des livres anciens. Le professeur annonce qu’ils liront deux textes et compareront leurs idées."
    },
    "examples": [
      {
        "ar": "كَمْ طَالِبًا فِي الْقَاعَةِ؟",
        "fr": "Combien d’étudiants dans la salle ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "قَاعَةٌ",
              "قَاعَةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "طَالِبَانِ وَثَلَاثُ طَالِبَاتٍ.",
        "fr": "Deux étudiants et trois étudiantes.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "أَيْنَ الْكِتَابَانِ؟",
        "fr": "Où sont les deux livres ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "كِتَابَانِ",
              "كِتَابَانِ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "أَحْضَرَ",
        "present": "يُحْضِرُ",
        "masdar": "إِحْضَارٌ",
        "fr": "apporter",
        "lookup": "أحضر"
      },
      {
        "past": "قَارَنَ",
        "present": "يُقَارِنُ",
        "masdar": "مُقَارَنَةٌ",
        "fr": "comparer",
        "lookup": "قارن"
      },
      {
        "past": "قَرَأَ",
        "present": "يَقْرَأُ",
        "masdar": "قِرَاءَةٌ",
        "fr": "lire",
        "lookup": "قرأ"
      }
    ],
    "words": [
      [
        "طَالِبٌ",
        "Étudiant"
      ],
      [
        "طَالِبَةٌ",
        "Étudiante"
      ],
      [
        "طَالِبَانِ",
        "Deux étudiants (nom.)"
      ],
      [
        "كِتَابَانِ",
        "Deux livres (nom.)"
      ],
      [
        "كِتَابَيْنِ",
        "Deux livres (acc./gén.)"
      ],
      [
        "كُتُبٌ",
        "Livres"
      ],
      [
        "بُيُوتٌ",
        "Maisons"
      ],
      [
        "رِجَالٌ",
        "Hommes"
      ],
      [
        "نِسَاءٌ",
        "Femmes"
      ],
      [
        "قَاعَةٌ",
        "Salle"
      ],
      [
        "قَدِيمٌ",
        "Ancien"
      ],
      [
        "جَدِيدٌ",
        "Neuf / nouveau"
      ],
      [
        "أَفْكَارٌ",
        "Idées"
      ],
      [
        "نُصُوصٌ",
        "Textes"
      ],
      [
        "عَدَدٌ",
        "Nombre"
      ],
      [
        "جَمْعٌ",
        "Pluriel"
      ]
    ],
    "dialect": [
      {
        "msa": "هَذَانِ كِتَابَانِ.",
        "levant": "هُدُولْ كِتَابَيْنْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "Le duel subsiste lexicalement, mais le dialecte utilise souvent le pluriel ou des démonstratifs différents."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel est le pluriel brisé de كِتَابٌ ?",
        "options": [
          "رِجَالٌ",
          "نِسَاءٌ",
          "كُتُبٌ"
        ],
        "answer": 2,
        "why": "À mémoriser avec le singulier."
      },
      {
        "type": "choice",
        "prompt": "Quel adjectif convient à كُتُبٌ ?",
        "options": [
          "جَدِيدَةٌ",
          "بُيُوتٌ",
          "رِجَالٌ"
        ],
        "answer": 0,
        "why": "Pluriel non humain = accord fréquent au féminin singulier."
      },
      {
        "type": "choice",
        "prompt": "Quel est le duel de كِتَابٌ à l’accusatif ?",
        "options": [
          "نُصُوصٌ",
          "كِتَابَيْنِ",
          "عَدَدٌ"
        ],
        "answer": 1,
        "why": "Finale ـَيْنِ."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « طَالِبَانِ » ?",
        "options": [
          "Étudiant",
          "Deux étudiants (nom.)",
          "Étudiante"
        ],
        "answer": 1,
        "why": "طَالِبَانِ = Deux étudiants (nom.). Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « رِجَالٌ » ?",
        "options": [
          "Deux livres (nom.)",
          "Deux livres (acc./gén.)",
          "Hommes"
        ],
        "answer": 2,
        "why": "رِجَالٌ = Hommes. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « أَفْكَارٌ » ?",
        "options": [
          "Idées",
          "Maisons",
          "Hommes"
        ],
        "answer": 0,
        "why": "أَفْكَارٌ = Idées. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَحْضَرَ ?",
        "options": [
          "إِحْضَارٌ",
          "مُقَارَنَةٌ",
          "قِرَاءَةٌ"
        ],
        "answer": 0,
        "why": "أَحْضَرَ – يُحْضِرُ – إِحْضَارٌ (apporter)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَارَنَ ?",
        "options": [
          "طَالِبَةٌ",
          "مُقَارَنَةٌ",
          "طَالِبَانِ"
        ],
        "answer": 1,
        "why": "قَارَنَ – يُقَارِنُ – مُقَارَنَةٌ (comparer)."
      },
      {
        "type": "input",
        "prompt": "Écris « Étudiante » en arabe (forme du lexique).",
        "answer": "طَالِبَةٌ",
        "accepted": [
          "طالبة"
        ],
        "why": "طَالِبَةٌ signifie « Étudiante ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مُدَرِّس",
        "ar": "كَمْ طَالِبًا فِي الْقَاعَةِ؟",
        "fr": "Combien d’étudiants dans la salle ?"
      },
      {
        "speaker": "طَالِب",
        "ar": "طَالِبَانِ وَثَلَاثُ طَالِبَاتٍ.",
        "fr": "Deux étudiants et trois étudiantes."
      },
      {
        "speaker": "مُدَرِّس",
        "ar": "أَيْنَ الْكِتَابَانِ؟",
        "fr": "Où sont les deux livres ?"
      },
      {
        "speaker": "طَالِب",
        "ar": "هُمَا عَلَى الطَّاوِلَةِ.",
        "fr": "Ils sont sur la table."
      }
    ],
    "writing": {
      "prompt": "Fais 12 transformations : singulier → duel → pluriel et justifie l’accord des objets non humains.",
      "modelAr": "كِتَابٌ جَدِيدٌ. كِتَابَانِ جَدِيدَانِ. كُتُبٌ جَدِيدَةٌ. مَدْرَسَةٌ جَدِيدَةٌ. مَدْرَسَتَانِ جَدِيدَتَانِ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b1-10-v2",
    "level": "B1",
    "number": 10,
    "month": 8,
    "emoji": "🌍",
    "title": "Médias, environnement et faits",
    "minutes": 110,
    "goal": "Comprendre une actualité simple et distinguer faits et opinions.",
    "grammar": [
      {
        "title": "Lire pour l’essentiel",
        "body": "Commence par repérer مَنْ (qui), مَاذَا (quoi), مَتَى (quand), أَيْنَ (où), لِمَاذَا (pourquoi) et كَيْفَ (comment). Ne traduis pas tous les mots avant d’avoir compris l’information centrale."
      },
      {
        "title": "Lexique de l’environnement",
        "body": "تَلَوُّثٌ = pollution, تَغَيُّرُ الْمُنَاخِ = changement climatique, طَاقَةٌ مُتَجَدِّدَةٌ = énergie renouvelable. On distingue un constat mesurable d’une recommandation ou prédiction."
      },
      {
        "title": "Fait contre avis",
        "body": "تُشِيرُ الْبَيَانَاتُ إِلَى أَنَّ... = les données indiquent que... ; يَرَى بَعْضُ الْخُبَرَاءِ أَنَّ... = certains experts estiment que... Une attribution claire évite de présenter une opinion comme un fait."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "نَشَرَتْ صَحِيفَةٌ مَحَلِّيَّةٌ تَقْرِيرًا عَنْ تَلَوُّثِ الْهَوَاءِ فِي الْمَدِينَةِ. وَفْقًا لِلتَّقْرِيرِ، زَادَتْ حَرَكَةُ السَّيَّارَاتِ خِلَالَ السَّنَوَاتِ الْأَخِيرَةِ. تَقْتَرِحُ الْبَلَدِيَّةُ تَحْسِينَ النَّقْلِ الْعَامِّ وَزِيَادَةَ الْمَسَاحَاتِ الْخَضْرَاءِ. وَيَرَى بَعْضُ السُّكَّانِ أَنَّ الْخُطَّةَ خُطْوَةٌ جَيِّدَةٌ.",
      "fr": "Un journal local a publié un rapport sur la pollution de l’air dans la ville. Selon le rapport, la circulation automobile a augmenté ces dernières années. La municipalité propose d’améliorer les transports publics et d’augmenter les espaces verts. Certains habitants estiment que ce plan est une bonne étape."
    },
    "examples": [
      {
        "ar": "مَاذَا تَقْتَرِحُ الْبَلَدِيَّةُ؟",
        "fr": "Que propose la municipalité ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "بَلَدِيَّةٌ",
              "بَلَدِيَّةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "تَقْتَرِحُ تَحْسِينَ النَّقْلِ الْعَامِّ.",
        "fr": "Elle propose d’améliorer les transports.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "وَمَا رَأْيُكَ؟",
        "fr": "Qu’en penses-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "زَادَ",
        "present": "يَزِيدُ",
        "masdar": "زِيَادَةٌ",
        "fr": "augmenter",
        "lookup": "زاد"
      },
      {
        "past": "نَشَرَ",
        "present": "يَنْشُرُ",
        "masdar": "نَشْرٌ",
        "fr": "publier",
        "lookup": "نشر"
      },
      {
        "past": "اِقْتَرَحَ",
        "present": "يَقْتَرِحُ",
        "masdar": "اِقْتِرَاحٌ",
        "fr": "proposer",
        "lookup": "اقترح"
      }
    ],
    "words": [
      [
        "تَلَوُّثٌ",
        "Pollution"
      ],
      [
        "هَوَاءٌ",
        "Air"
      ],
      [
        "بِيئَةٌ",
        "Environnement"
      ],
      [
        "مُنَاخٌ",
        "Climat"
      ],
      [
        "طَاقَةٌ",
        "Énergie"
      ],
      [
        "مُتَجَدِّدٌ",
        "Renouvelable"
      ],
      [
        "بَيَانَاتٌ",
        "Données"
      ],
      [
        "بَلَدِيَّةٌ",
        "Municipalité"
      ],
      [
        "نَقْلٌ عَامٌّ",
        "Transport public"
      ],
      [
        "مَسَاحَةٌ",
        "Espace / surface"
      ],
      [
        "خَضْرَاءُ",
        "Verte"
      ],
      [
        "حَرَكَةٌ",
        "Circulation / mouvement"
      ],
      [
        "تَقْرِيرٌ",
        "Rapport"
      ],
      [
        "صَحِيفَةٌ",
        "Journal"
      ],
      [
        "خَبِيرٌ",
        "Expert"
      ],
      [
        "وَفْقًا لِـ",
        "Selon"
      ]
    ],
    "dialect": [
      {
        "msa": "التَّلَوُّثُ مُشْكِلَةٌ كَبِيرَةٌ.",
        "levant": "التَّلَوُّثْ مُشْكْلِةْ كْبِيرِةْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "Le vocabulaire technique est largement partagé, avec variations phonétiques régionales."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Que signifie تَلَوُّثٌ ?",
        "options": [
          "Pollution",
          "Rapport",
          "Journal"
        ],
        "answer": 0,
        "why": "Fréquent dans la presse."
      },
      {
        "type": "choice",
        "prompt": "« Selon le rapport » se dit...",
        "options": [
          "مَسَاحَةٌ",
          "وَفْقًا لِلتَّقْرِيرِ",
          "خَضْرَاءُ"
        ],
        "answer": 1,
        "why": "Marque une source d’information."
      },
      {
        "type": "choice",
        "prompt": "Quelle phrase attribue clairement un avis ?",
        "options": [
          "تَقْرِيرٌ",
          "صَحِيفَةٌ",
          "يَرَى بَعْضُ الْخُبَرَاءِ أَنَّ..."
        ],
        "answer": 2,
        "why": "« Certains experts estiment que... »."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « بِيئَةٌ » ?",
        "options": [
          "Environnement",
          "Pollution",
          "Air"
        ],
        "answer": 0,
        "why": "بِيئَةٌ = Environnement. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « بَلَدِيَّةٌ » ?",
        "options": [
          "Climat",
          "Municipalité",
          "Énergie"
        ],
        "answer": 1,
        "why": "بَلَدِيَّةٌ = Municipalité. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « تَقْرِيرٌ » ?",
        "options": [
          "Données",
          "Municipalité",
          "Rapport"
        ],
        "answer": 2,
        "why": "تَقْرِيرٌ = Rapport. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de زَادَ ?",
        "options": [
          "زِيَادَةٌ",
          "بَلَدِيَّةٌ",
          "نَقْلٌ عَامٌّ"
        ],
        "answer": 0,
        "why": "زَادَ – يَزِيدُ – زِيَادَةٌ (augmenter)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de نَشَرَ ?",
        "options": [
          "خَضْرَاءُ",
          "نَشْرٌ",
          "حَرَكَةٌ"
        ],
        "answer": 1,
        "why": "نَشَرَ – يَنْشُرُ – نَشْرٌ (publier)."
      },
      {
        "type": "input",
        "prompt": "Écris « Air » en arabe (forme du lexique).",
        "answer": "هَوَاءٌ",
        "accepted": [
          "هواء"
        ],
        "why": "هَوَاءٌ signifie « Air ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "صَحَفِيّ",
        "ar": "مَاذَا تَقْتَرِحُ الْبَلَدِيَّةُ؟",
        "fr": "Que propose la municipalité ?"
      },
      {
        "speaker": "مُوَاطِن",
        "ar": "تَقْتَرِحُ تَحْسِينَ النَّقْلِ الْعَامِّ.",
        "fr": "Elle propose d’améliorer les transports."
      },
      {
        "speaker": "صَحَفِيّ",
        "ar": "وَمَا رَأْيُكَ؟",
        "fr": "Qu’en penses-tu ?"
      },
      {
        "speaker": "مُوَاطِن",
        "ar": "أَعْتَقِدُ أَنَّهَا خُطْوَةٌ مُفِيدَةٌ.",
        "fr": "C’est une étape utile, je pense."
      }
    ],
    "writing": {
      "prompt": "Rédige une brève d’actualité (150 mots) en séparant explicitement trois faits vérifiables et deux opinions attribuées.",
      "modelAr": "نَشَرَتِ الصَّحِيفَةُ تَقْرِيرًا عَنِ الْبِيئَةِ. وَفْقًا لِلتَّقْرِيرِ، زَادَ التَّلَوُّثُ. وَيَرَى بَعْضُ الْخُبَرَاءِ أَنَّ النَّقْلَ الْعَامَّ مُهِمٌّ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b1-11-v2",
    "level": "B1",
    "number": 11,
    "month": 9,
    "emoji": "💼",
    "title": "Travail, études et entretien",
    "minutes": 110,
    "goal": "Expliquer des compétences, expériences et projets professionnels.",
    "grammar": [
      {
        "title": "Décrire une expérience",
        "body": "عَمِلْتُ فِي شَرِكَةٍ لِمُدَّةِ ثَلَاثِ سَنَوَاتٍ = j’ai travaillé dans une entreprise pendant trois ans. Depuis une date révolue : مُنْذُ عَامِ... ; pour une durée qui se poursuit, analyse le temps verbal et le contexte."
      },
      {
        "title": "Compétence et responsabilité",
        "body": "أَتَمَتَّعُ بِخِبْرَةٍ فِي... = j’ai de l’expérience en... ; أَتَوَلَّى مَسْؤُولِيَّةَ... = je suis chargé de... ; أَسْعَى إِلَى تَطْوِيرِ مَهَارَاتِي = je cherche à développer mes compétences."
      },
      {
        "title": "Entretien clair",
        "body": "Réponds par une idée précise, un exemple et un résultat. L’objectif B1 n’est pas de réciter une formule ; tu dois pouvoir reformuler un poste, un problème et la solution choisie."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "تَعْمَلُ دَلَالُ فِي مَجَالِ التِّقْنِيَّةِ. بَدَأَتْ مَسِيرَتَهَا فِي شَرِكَةٍ صَغِيرَةٍ، ثُمَّ اِنْتَقَلَتْ إِلَى فَرِيقٍ أَكْبَرَ. تَتَوَلَّى الْيَوْمَ مَسْؤُولِيَّةَ اِخْتِبَارِ التَّطْبِيقَاتِ وَتُشَارِكُ فِي تَحْسِينِ جَوْدَتِهَا. وَهِيَ تَسْعَى إِلَى تَطْوِيرِ خِبْرَتِهَا فِي الْأَدَوَاتِ الْجَدِيدَةِ.",
      "fr": "Dalal travaille dans la technologie. Elle a commencé sa carrière dans une petite entreprise, puis a rejoint une équipe plus grande. Aujourd’hui, elle est chargée de tester des applications et participe à l’amélioration de leur qualité. Elle cherche à développer son expérience avec de nouveaux outils."
    },
    "examples": [
      {
        "ar": "مَا خِبْرَتُكَ الْمِهْنِيَّةُ؟",
        "fr": "Quelle est ton expérience professionnelle ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "عَمِلْتُ فِي اِخْتِبَارِ التَّطْبِيقَاتِ عِدَّةَ سَنَوَاتٍ.",
        "fr": "J’ai travaillé plusieurs années dans le test d’applications.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "تَطْبِيقٌ",
              "تَطْبِيقٌ"
            ],
            [
              "اِخْتِبَارٌ",
              "اِخْتِبَارٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "مَا الَّذِي تُرِيدُ تَطْوِيرَهُ؟",
        "fr": "Que souhaites-tu développer ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "تَطْوِيرٌ",
              "تَطْوِيرٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "تَوَلَّى",
        "present": "يَتَوَلَّى",
        "masdar": "تَوَلٍّ",
        "fr": "assumer / prendre en charge",
        "lookup": "تولى"
      },
      {
        "past": "شَارَكَ",
        "present": "يُشَارِكُ",
        "masdar": "مُشَارَكَةٌ",
        "fr": "participer",
        "lookup": "شارك"
      },
      {
        "past": "اِنْتَقَلَ",
        "present": "يَنْتَقِلُ",
        "masdar": "اِنْتِقَالٌ",
        "fr": "changer de lieu / rejoindre",
        "lookup": "انتقل"
      }
    ],
    "words": [
      [
        "شَرِكَةٌ",
        "Entreprise"
      ],
      [
        "وَظِيفَةٌ",
        "Emploi"
      ],
      [
        "مِهْنَةٌ",
        "Profession"
      ],
      [
        "خِبْرَةٌ",
        "Expérience"
      ],
      [
        "مَهَارَةٌ",
        "Compétence"
      ],
      [
        "مَسْؤُولِيَّةٌ",
        "Responsabilité"
      ],
      [
        "مُقَابَلَةٌ",
        "Entretien"
      ],
      [
        "فَرِيقٌ",
        "Équipe"
      ],
      [
        "تَطْبِيقٌ",
        "Application"
      ],
      [
        "اِخْتِبَارٌ",
        "Test"
      ],
      [
        "جَوْدَةٌ",
        "Qualité"
      ],
      [
        "تِقْنِيَّةٌ",
        "Technologie"
      ],
      [
        "تَطْوِيرٌ",
        "Développement"
      ],
      [
        "مُسْتَوًى",
        "Niveau"
      ],
      [
        "أَدَاةٌ",
        "Outil"
      ],
      [
        "مَسِيرَةٌ",
        "Parcours / carrière"
      ]
    ],
    "dialect": [
      {
        "msa": "أَعْمَلُ فِي شَرِكَةِ تِقْنِيَّةٍ.",
        "levant": "بِشْتِغِلْ بِشَرِكِة تِقْنِيَّةْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "بِشْتِغِلْ = je travaille (levantin) ; maintien courant des emprunts techniques."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Que signifie مَسْؤُولِيَّةٌ ?",
        "options": [
          "Parcours / carrière",
          "Responsabilité",
          "assumer / prendre en charge"
        ],
        "answer": 1,
        "why": "Lexique professionnel."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de شَارَكَ ?",
        "options": [
          "مَسِيرَةٌ",
          "تَوَلٍّ",
          "مُشَارَكَةٌ"
        ],
        "answer": 2,
        "why": "Forme III."
      },
      {
        "type": "choice",
        "prompt": "Quelle préposition suit souvent أَسْعَى pour un objectif ?",
        "options": [
          "إِلَى",
          "مَسِيرَةٌ",
          "تَوَلٍّ"
        ],
        "answer": 0,
        "why": "أَسْعَى إِلَى تَطْوِيرِ..."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مِهْنَةٌ » ?",
        "options": [
          "Entreprise",
          "Emploi",
          "Profession"
        ],
        "answer": 2,
        "why": "مِهْنَةٌ = Profession. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « فَرِيقٌ » ?",
        "options": [
          "Équipe",
          "Expérience",
          "Compétence"
        ],
        "answer": 0,
        "why": "فَرِيقٌ = Équipe. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « تَطْوِيرٌ » ?",
        "options": [
          "Entretien",
          "Développement",
          "Équipe"
        ],
        "answer": 1,
        "why": "تَطْوِيرٌ = Développement. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَوَلَّى ?",
        "options": [
          "تَوَلٍّ",
          "مُشَارَكَةٌ",
          "اِنْتِقَالٌ"
        ],
        "answer": 0,
        "why": "تَوَلَّى – يَتَوَلَّى – تَوَلٍّ (assumer / prendre en charge)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de شَارَكَ ?",
        "options": [
          "وَظِيفَةٌ",
          "مُشَارَكَةٌ",
          "مِهْنَةٌ"
        ],
        "answer": 1,
        "why": "شَارَكَ – يُشَارِكُ – مُشَارَكَةٌ (participer)."
      },
      {
        "type": "input",
        "prompt": "Écris « Emploi » en arabe (forme du lexique).",
        "answer": "وَظِيفَةٌ",
        "accepted": [
          "وظيفة"
        ],
        "why": "وَظِيفَةٌ signifie « Emploi ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مُحَاوِر",
        "ar": "مَا خِبْرَتُكَ الْمِهْنِيَّةُ؟",
        "fr": "Quelle est ton expérience professionnelle ?"
      },
      {
        "speaker": "مُرَشَّح",
        "ar": "عَمِلْتُ فِي اِخْتِبَارِ التَّطْبِيقَاتِ عِدَّةَ سَنَوَاتٍ.",
        "fr": "J’ai travaillé plusieurs années dans le test d’applications."
      },
      {
        "speaker": "مُحَاوِر",
        "ar": "مَا الَّذِي تُرِيدُ تَطْوِيرَهُ؟",
        "fr": "Que souhaites-tu développer ?"
      },
      {
        "speaker": "مُرَشَّح",
        "ar": "أُرِيدُ أَنْ أُحَسِّنَ مَهَارَاتِي التِّقْنِيَّةَ.",
        "fr": "Mes compétences techniques."
      }
    ],
    "writing": {
      "prompt": "Prépare un entretien simulé : présentation de 2 minutes, trois situations professionnelles détaillées et une question au recruteur.",
      "modelAr": "لَدَيَّ خِبْرَةٌ فِي اِخْتِبَارِ التَّطْبِيقَاتِ. أَعْمَلُ مَعَ فَرِيقٍ، وَأُسَاهِمُ فِي تَحْسِينِ الْجَوْدَةِ. أُرِيدُ أَنْ أُطَوِّرَ مَهَارَاتِي.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b1-12-v2",
    "level": "B1",
    "number": 12,
    "month": 9,
    "emoji": "🏁",
    "title": "Bilan B1 : analyser, raconter, défendre",
    "minutes": 110,
    "goal": "Combiner lecture suivie, narration et argumentation simple.",
    "grammar": [
      {
        "title": "Lire un texte suivi",
        "body": "Repère le thème, la thèse, les faits, les opinions et les connecteurs. Identifie ensuite les relatives, les conditionnelles et le mode des verbes après أَنْ, لَمْ ou لَنْ."
      },
      {
        "title": "Exprimer une opinion structurée",
        "body": "Organise ton texte : idée générale → deux raisons → exemple → limite → conclusion. Une production écrite de 200 à 250 mots est un bon entraînement B1, sans constituer un test officiel."
      },
      {
        "title": "S’exprimer sans texte",
        "body": "Résume le document oralement pendant 3 minutes, réponds à des questions de suivi et justifie un choix. Pour évaluer réellement la prononciation et l’interaction, il faut un interlocuteur et une écoute fiable."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "تَحَدَّثَتْ مَجْمُوعَةٌ مِنَ الطُّلَّابِ عَنْ أَهَمِّيَّةِ التَّعَلُّمِ الذَّاتِيِّ. رَأَى بَعْضُهُمْ أَنَّ الدُّرُوسَ الْإِلِكْتُرُونِيَّةَ تُتِيحُ فُرَصًا جَدِيدَةً لِلنَّاسِ الَّذِينَ يَعْمَلُونَ. وَقَالَ آخَرُونَ إِنَّ التَّعَلُّمَ يَحْتَاجُ إِلَى حِوَارٍ مُبَاشِرٍ مَعَ الْمُدَرِّسِ. وَاتَّفَقَ الْجَمِيعُ عَلَى أَنَّ التَّنْظِيمَ وَالْمُمَارَسَةَ أَسَاسِيَّانِ لِلنَّجَاحِ.",
      "fr": "Un groupe d’étudiants a discuté de l’importance de l’apprentissage autonome. Certains ont estimé que les cours en ligne offrent de nouvelles possibilités aux personnes qui travaillent. D’autres ont souligné l’importance du dialogue direct avec un enseignant. Tous ont convenu que l’organisation et la pratique sont essentielles à la réussite."
    },
    "examples": [
      {
        "ar": "مَا رَأْيُكَ فِي التَّعَلُّمِ عَبْرَ الْإِنْتَرْنِتِ؟",
        "fr": "Quel est ton avis sur l’apprentissage en ligne ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "تَعَلُّمٌ",
              "تَعَلُّمٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "يُوَفِّرُ الْوَقْتَ، وَلَكِنَّهُ يَحْتَاجُ إِلَى اِنْضِبَاطٍ.",
        "fr": "Il fait gagner du temps mais demande de la discipline.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ تُفَضِّلُهُ عَلَى الدُّرُوسِ الْحُضُورِيَّةِ؟",
        "fr": "Le préfères-tu aux cours en présentiel ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "أَتَاحَ",
        "present": "يُتِيحُ",
        "masdar": "إِتَاحَةٌ",
        "fr": "permettre / mettre à disposition",
        "lookup": "أتاح"
      },
      {
        "past": "اِتَّفَقَ",
        "present": "يَتَّفِقُ",
        "masdar": "اِتِّفَاقٌ",
        "fr": "être d’accord",
        "lookup": "اتفق"
      },
      {
        "past": "لَخَّصَ",
        "present": "يُلَخِّصُ",
        "masdar": "تَلْخِيصٌ",
        "fr": "résumer",
        "lookup": "لخص"
      }
    ],
    "words": [
      [
        "تَعَلُّمٌ",
        "Apprentissage"
      ],
      [
        "ذَاتِيٌّ",
        "Autonome"
      ],
      [
        "إِلِكْتُرُونِيٌّ",
        "Numérique / électronique"
      ],
      [
        "مُبَاشِرٌ",
        "Direct"
      ],
      [
        "حِوَارٌ",
        "Dialogue"
      ],
      [
        "اِتِّفَاقٌ",
        "Accord"
      ],
      [
        "اِخْتِلَافٌ",
        "Différence / désaccord"
      ],
      [
        "فُرْصَةٌ",
        "Possibilité"
      ],
      [
        "أَسَاسِيٌّ",
        "Essentiel"
      ],
      [
        "تَنْظِيمٌ",
        "Organisation"
      ],
      [
        "مُمَارَسَةٌ",
        "Pratique"
      ],
      [
        "خُلَاصَةٌ",
        "Conclusion / résumé"
      ],
      [
        "فَقْرَةٌ",
        "Paragraphe"
      ],
      [
        "تَحْلِيلٌ",
        "Analyse"
      ],
      [
        "مَوْقِفٌ",
        "Position"
      ],
      [
        "تَلْخِيصٌ",
        "Résumé"
      ]
    ],
    "dialect": [
      {
        "msa": "هَذَا بِحَاجَةٍ إِلَى تَنْظِيمٍ.",
        "levant": "هَالشَّيْ بْدُّهْ تَنْظِيمْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "بْدُّهْ = il lui faut / cela nécessite selon le contexte en levantin."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle étape suit normalement la thèse dans un essai court ?",
        "options": [
          "Résumé",
          "permettre / mettre à disposition",
          "Des arguments étayés"
        ],
        "answer": 2,
        "why": "On ne se contente pas de répéter l’avis."
      },
      {
        "type": "choice",
        "prompt": "Que signifie التَّعَلُّمُ الذَّاتِيُّ ?",
        "options": [
          "L’apprentissage autonome",
          "résumer",
          "Une hypothèse"
        ],
        "answer": 0,
        "why": "Expression de registre pédagogique."
      },
      {
        "type": "choice",
        "prompt": "Quel mot signifie « résumé » ?",
        "options": [
          "فُرْصَةٌ",
          "تَلْخِيصٌ",
          "أَسَاسِيٌّ"
        ],
        "answer": 1,
        "why": "Maṣdar de لَخَّصَ."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « إِلِكْتُرُونِيٌّ » ?",
        "options": [
          "Apprentissage",
          "Numérique / électronique",
          "Autonome"
        ],
        "answer": 1,
        "why": "إِلِكْتُرُونِيٌّ = Numérique / électronique. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « فُرْصَةٌ » ?",
        "options": [
          "Direct",
          "Dialogue",
          "Possibilité"
        ],
        "answer": 2,
        "why": "فُرْصَةٌ = Possibilité. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « فَقْرَةٌ » ?",
        "options": [
          "Paragraphe",
          "Différence / désaccord",
          "Possibilité"
        ],
        "answer": 0,
        "why": "فَقْرَةٌ = Paragraphe. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَتَاحَ ?",
        "options": [
          "إِتَاحَةٌ",
          "فُرْصَةٌ",
          "أَسَاسِيٌّ"
        ],
        "answer": 0,
        "why": "أَتَاحَ – يُتِيحُ – إِتَاحَةٌ (permettre / mettre à disposition)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِتَّفَقَ ?",
        "options": [
          "حِوَارٌ",
          "اِتِّفَاقٌ",
          "اِخْتِلَافٌ"
        ],
        "answer": 1,
        "why": "اِتَّفَقَ – يَتَّفِقُ – اِتِّفَاقٌ (être d’accord)."
      },
      {
        "type": "input",
        "prompt": "Écris « Autonome » en arabe (forme du lexique).",
        "answer": "ذَاتِيٌّ",
        "accepted": [
          "ذاتي"
        ],
        "why": "ذَاتِيٌّ signifie « Autonome ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مُدَرِّس",
        "ar": "مَا رَأْيُكَ فِي التَّعَلُّمِ عَبْرَ الْإِنْتَرْنِتِ؟",
        "fr": "Quel est ton avis sur l’apprentissage en ligne ?"
      },
      {
        "speaker": "طَالِب",
        "ar": "يُوَفِّرُ الْوَقْتَ، وَلَكِنَّهُ يَحْتَاجُ إِلَى اِنْضِبَاطٍ.",
        "fr": "Il fait gagner du temps mais demande de la discipline."
      },
      {
        "speaker": "مُدَرِّس",
        "ar": "هَلْ تُفَضِّلُهُ عَلَى الدُّرُوسِ الْحُضُورِيَّةِ؟",
        "fr": "Le préfères-tu aux cours en présentiel ?"
      },
      {
        "speaker": "طَالِب",
        "ar": "لَا، أُفَضِّلُ الْجَمْعَ بَيْنَ الطَّرِيقَتَيْنِ.",
        "fr": "Non, je préfère combiner les deux méthodes."
      }
    ],
    "writing": {
      "prompt": "Épreuve de synthèse : résumé de 120 mots, essai de 220 mots, exposé oral de 3 minutes et 12 questions de conversation.",
      "modelAr": "فِي رَأْيِي، التَّعَلُّمُ الذَّاتِيُّ مُفِيدٌ لِأَنَّهُ مَرِنٌ. وَلَكِنَّهُ يَتَطَلَّبُ التَّنْظِيمَ. لِذَلِكَ أُفَضِّلُ الْجَمْعَ بَيْنَ الْعَمَلِ الْفَرْدِيِّ وَالْحِوَارِ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b2-01-v2",
    "level": "B2",
    "number": 1,
    "month": 10,
    "emoji": "🧠",
    "title": "Construire un raisonnement",
    "minutes": 130,
    "goal": "Présenter une thèse, des preuves et un contre-argument de manière structurée.",
    "grammar": [
      {
        "title": "Thèse et justification",
        "body": "أُدَافِعُ عَنِ الرَّأْيِ الْقَائِلِ بِأَنَّ... = je défends l’avis selon lequel... ; يَسْتَنِدُ هَذَا الرَّأْيُ إِلَى... = cet avis s’appuie sur... Ne transforme pas une opinion en fait sans source."
      },
      {
        "title": "Exemple et généralisation",
        "body": "عَلَى سَبِيلِ الْمِثَالِ = par exemple ; بِصِفَةٍ عَامَّةٍ = en général ; يُمْكِنُ الِاسْتِنْتَاجُ أَنَّ = on peut en déduire que. Distingue un exemple particulier d’une conclusion globale."
      },
      {
        "title": "Contradiction argumentée",
        "body": "قَدْ يَعْتَرِضُ بَعْضُهُمْ بِأَنَّ... = certains pourraient objecter que... ; وَمَعَ ذَلِكَ = néanmoins. Une réfutation répond à l’objection sans déformer la thèse adverse."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "يَرَى بَعْضُ الْبَاحِثِينَ أَنَّ التَّعَلُّمَ الرَّقْمِيَّ يَفْتَحُ فُرَصًا وَاسِعَةً. يَسْتَنِدُ هَذَا الرَّأْيُ إِلَى سُهُولَةِ الْوُصُولِ إِلَى الْمَوَادِّ التَّعْلِيمِيَّةِ. وَمَعَ ذَلِكَ، يَعْتَرِضُ آخَرُونَ لِأَنَّ التَّفَاعُلَ الْإِنْسَانِيَّ لَا يُمْكِنُ تَعْوِيضُهُ بِالْكَامِلِ. وَيُمْكِنُ الِاسْتِنْتَاجُ أَنَّ الْحَلَّ الْأَفْضَلَ يَجْمَعُ بَيْنَ الطَّرِيقَتَيْنِ.",
      "fr": "Certains chercheurs estiment que l’enseignement numérique ouvre de larges possibilités grâce à la facilité d’accès aux ressources. D’autres objectent que l’interaction humaine ne peut être entièrement remplacée. On peut conclure que la meilleure solution combine les deux approches."
    },
    "examples": [
      {
        "ar": "مَا الْحُجَّةُ الْأَسَاسِيَّةُ؟",
        "fr": "Quel est l’argument principal ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "حُجَّةٌ",
              "حُجَّةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "إِنَّ التَّعَلُّمَ الرَّقْمِيَّ يُوَفِّرُ الْوَقْتَ.",
        "fr": "L’apprentissage numérique fait gagner du temps.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "رَقْمِيٌّ",
              "رَقْمِيٌّ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "وَمَا الِاعْتِرَاضُ الْمُمْكِنُ؟",
        "fr": "Quelle objection peut-on formuler ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "اِعْتِرَاضٌ",
              "اِعْتِرَاضٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "اِسْتَنَدَ",
        "present": "يَسْتَنِدُ",
        "masdar": "اِسْتِنَادٌ",
        "fr": "s’appuyer sur",
        "lookup": "استند"
      },
      {
        "past": "اِعْتَرَضَ",
        "present": "يَعْتَرِضُ",
        "masdar": "اِعْتِرَاضٌ",
        "fr": "objecter",
        "lookup": "اعترض"
      },
      {
        "past": "اِسْتَنْتَجَ",
        "present": "يَسْتَنْتِجُ",
        "masdar": "اِسْتِنْتَاجٌ",
        "fr": "déduire",
        "lookup": "استنتج"
      }
    ],
    "words": [
      [
        "أُطْرُوحَةٌ",
        "Thèse"
      ],
      [
        "حُجَّةٌ",
        "Argument"
      ],
      [
        "دَلِيلٌ",
        "Preuve / indice"
      ],
      [
        "اِعْتِرَاضٌ",
        "Objection"
      ],
      [
        "رَدٌّ",
        "Réponse / réfutation"
      ],
      [
        "اِسْتِنْتَاجٌ",
        "Déduction"
      ],
      [
        "فَرْضِيَّةٌ",
        "Hypothèse"
      ],
      [
        "تَفَاعُلٌ",
        "Interaction"
      ],
      [
        "إِنْسَانِيٌّ",
        "Humain"
      ],
      [
        "رَقْمِيٌّ",
        "Numérique"
      ],
      [
        "مَصْدَرٌ",
        "Source"
      ],
      [
        "مَوَادٌّ",
        "Ressources / matériaux"
      ],
      [
        "بِصِفَةٍ عَامَّةٍ",
        "En général"
      ],
      [
        "عَلَى سَبِيلِ الْمِثَالِ",
        "Par exemple"
      ],
      [
        "وَمَعَ ذَلِكَ",
        "Néanmoins"
      ],
      [
        "بِالْكَامِلِ",
        "Entièrement"
      ]
    ],
    "dialect": [
      {
        "msa": "أَعْتَقِدُ أَنَّ الْحَلَّ مُهِمٌّ.",
        "levant": "بْفَكِّرْ إِنُّو الْحَلّ مُهِمّْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "بْفَكِّرْ = je pense ; إِنُّو correspond souvent au « que » complétif."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle expression annonce un exemple ?",
        "options": [
          "عَلَى سَبِيلِ الْمِثَالِ",
          "أُطْرُوحَةٌ",
          "حُجَّةٌ"
        ],
        "answer": 0,
        "why": "Outil d’illustration."
      },
      {
        "type": "choice",
        "prompt": "Quel mot désigne une objection ?",
        "options": [
          "إِنْسَانِيٌّ",
          "اِعْتِرَاضٌ",
          "رَقْمِيٌّ"
        ],
        "answer": 1,
        "why": "À distinguer de دَلِيلٌ (preuve)."
      },
      {
        "type": "choice",
        "prompt": "Que signifie اِسْتِنْتَاجٌ ?",
        "options": [
          "Une cause",
          "Une comparaison",
          "Déduction / conclusion"
        ],
        "answer": 2,
        "why": "Nom verbal de اِسْتَنْتَجَ."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « دَلِيلٌ » ?",
        "options": [
          "Preuve / indice",
          "Thèse",
          "Argument"
        ],
        "answer": 0,
        "why": "دَلِيلٌ = Preuve / indice. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « تَفَاعُلٌ » ?",
        "options": [
          "Objection",
          "Interaction",
          "Réponse / réfutation"
        ],
        "answer": 1,
        "why": "تَفَاعُلٌ = Interaction. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « بِصِفَةٍ عَامَّةٍ » ?",
        "options": [
          "Hypothèse",
          "Interaction",
          "En général"
        ],
        "answer": 2,
        "why": "بِصِفَةٍ عَامَّةٍ = En général. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِسْتَنَدَ ?",
        "options": [
          "اِسْتِنَادٌ",
          "اِعْتِرَاضٌ",
          "اِسْتِنْتَاجٌ"
        ],
        "answer": 0,
        "why": "اِسْتَنَدَ – يَسْتَنِدُ – اِسْتِنَادٌ (s’appuyer sur)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de اِعْتَرَضَ ?",
        "options": [
          "وَمَعَ ذَلِكَ",
          "اِعْتِرَاضٌ",
          "بِالْكَامِلِ"
        ],
        "answer": 1,
        "why": "اِعْتَرَضَ – يَعْتَرِضُ – اِعْتِرَاضٌ (objecter)."
      },
      {
        "type": "input",
        "prompt": "Écris « Argument » en arabe (forme du lexique).",
        "answer": "حُجَّةٌ",
        "accepted": [
          "حجة"
        ],
        "why": "حُجَّةٌ signifie « Argument ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "بَاحِثَة",
        "ar": "مَا الْحُجَّةُ الْأَسَاسِيَّةُ؟",
        "fr": "Quel est l’argument principal ?"
      },
      {
        "speaker": "بَاحِث",
        "ar": "إِنَّ التَّعَلُّمَ الرَّقْمِيَّ يُوَفِّرُ الْوَقْتَ.",
        "fr": "L’apprentissage numérique fait gagner du temps."
      },
      {
        "speaker": "بَاحِثَة",
        "ar": "وَمَا الِاعْتِرَاضُ الْمُمْكِنُ؟",
        "fr": "Quelle objection peut-on formuler ?"
      },
      {
        "speaker": "بَاحِث",
        "ar": "إِنَّهُ قَدْ يُضْعِفُ التَّفَاعُلَ الْمُبَاشِرَ.",
        "fr": "Il pourrait réduire l’interaction directe."
      }
    ],
    "writing": {
      "prompt": "Rédige un argumentaire de 250 à 300 mots : thèse, trois arguments distincts, objection sérieuse, réponse et conclusion prudente.",
      "modelAr": "أُدَافِعُ عَنِ الرَّأْيِ الْقَائِلِ بِأَنَّ التَّعَلُّمَ الْمَرِنَ مُفِيدٌ. يَسْتَنِدُ هَذَا الرَّأْيُ إِلَى تَنَوُّعِ الْمَصَادِرِ. وَمَعَ ذَلِكَ، تَبْقَى الْمُتَابَعَةُ الْبَشَرِيَّةُ ضَرُورِيَّةً.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b2-02-v2",
    "level": "B2",
    "number": 2,
    "month": 10,
    "emoji": "⚖️",
    "title": "Concession et contraste",
    "minutes": 130,
    "goal": "Nuancer une position en admettant des limites sans renoncer à son argument.",
    "grammar": [
      {
        "title": "Concession avec رَغْمَ",
        "body": "رَغْمَ الصُّعُوبَاتِ = malgré les difficultés ; عَلَى الرَّغْمِ مِنْ أَنَّ = bien que. L’expression peut introduire un constat accepté avant la thèse principale."
      },
      {
        "title": "Les introducteurs proches",
        "body": "مَعَ أَنَّ = bien que ; بِالرَّغْمِ مِنْ ذَلِكَ = malgré cela ; غَيْرَ أَنَّ = toutefois. La valeur dépend de l’énoncé : évite de les traiter comme toujours interchangeables."
      },
      {
        "title": "Nuance de validité",
        "body": "إِلَى حَدٍّ مَا = dans une certaine mesure ; لَيْسَ بِالضَّرُورَةِ = pas nécessairement ; هَذَا صَحِيحٌ جُزْئِيًّا = cela est partiellement vrai. B2 demande de délimiter la portée d’une affirmation."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "عَلَى الرَّغْمِ مِنْ أَنَّ الْعَمَلَ عَنْ بُعْدٍ يُوَفِّرُ الْوَقْتَ، فَإِنَّهُ قَدْ يَحْدُّ مِنَ التَّوَاصُلِ الْيَوْمِيِّ. وَمَعَ أَنَّ بَعْضَ الْمُوَظَّفِينَ يُفَضِّلُونَ هَذَا النِّظَامَ، فَإِنَّهُ لَا يُنَاسِبُ جَمِيعَ الْمِهَنِ. لِذَلِكَ يَبْدُو أَنَّ تَطْبِيقَهُ يَنْبَغِي أَنْ يَكُونَ مَرِنًا.",
      "fr": "Bien que le télétravail fasse gagner du temps, il peut limiter les contacts quotidiens. Certains salariés le préfèrent, mais il ne convient pas à toutes les professions. Son application devrait donc rester souple."
    },
    "examples": [
      {
        "ar": "هَلِ الْعَمَلُ عَنْ بُعْدٍ أَفْضَلُ؟",
        "fr": "Le télétravail est-il meilleur ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "إِلَى حَدٍّ مَا، لَكِنَّهُ لَا يُنَاسِبُ الْجَمِيعَ.",
        "fr": "Dans une certaine mesure, mais pas pour tout le monde.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "مَا الْمُشْكِلَةُ الْأَسَاسِيَّةُ؟",
        "fr": "Quel est le principal problème ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "حَدَّ",
        "present": "يَحُدُّ",
        "masdar": "حَدٌّ",
        "fr": "limiter",
        "lookup": "حد"
      },
      {
        "past": "نَاسَبَ",
        "present": "يُنَاسِبُ",
        "masdar": "مُنَاسَبَةٌ",
        "fr": "convenir à",
        "lookup": "ناسب"
      },
      {
        "past": "بَدَا",
        "present": "يَبْدُو",
        "masdar": "بُدُوٌّ",
        "fr": "paraître",
        "lookup": "بدا"
      }
    ],
    "words": [
      [
        "رَغْمَ",
        "Malgré"
      ],
      [
        "مُقَابِلَ",
        "En contrepartie / face à"
      ],
      [
        "مَعَ أَنَّ",
        "Bien que"
      ],
      [
        "غَيْرَ أَنَّ",
        "Toutefois"
      ],
      [
        "جُزْئِيًّا",
        "Partiellement"
      ],
      [
        "كُلِّيًّا",
        "Totalement"
      ],
      [
        "بِالضَّرُورَةِ",
        "Nécessairement"
      ],
      [
        "حَدٌّ",
        "Limite / mesure"
      ],
      [
        "مِهْنَةٌ",
        "Métier"
      ],
      [
        "مَرِنٌ",
        "Souple / flexible"
      ],
      [
        "تَوَاصُلٌ",
        "Communication"
      ],
      [
        "تَطْبِيقٌ",
        "Application"
      ],
      [
        "نِظَامٌ",
        "Système"
      ],
      [
        "مَزِيَّةٌ",
        "Avantage"
      ],
      [
        "عَيْبٌ",
        "Inconvénient"
      ],
      [
        "وَاقِعٌ",
        "Réalité"
      ]
    ],
    "dialect": [
      {
        "msa": "مَعَ أَنَّ الْأَمْرَ صَعْبٌ، فَهُوَ مُمْكِنٌ.",
        "levant": "مَعْ إِنُّو الْقِصَّة صَعْبِةْ، بَسّ مُمْكْنِةْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "مَعْ إِنُّو / بَسّ marquent une opposition, avec variations libanaises et syriennes."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle expression signifie « dans une certaine mesure » ?",
        "options": [
          "بُدُوٌّ",
          "إِلَى حَدٍّ مَا",
          "رَغْمَ"
        ],
        "answer": 1,
        "why": "Marque une portée limitée."
      },
      {
        "type": "choice",
        "prompt": "Que signifie غَيْرَ أَنَّ ?",
        "options": [
          "Malgré",
          "En contrepartie / face à",
          "Toutefois"
        ],
        "answer": 2,
        "why": "Connecteur de contraste en registre soutenu."
      },
      {
        "type": "choice",
        "prompt": "« Pas nécessairement » se dit...",
        "options": [
          "لَيْسَ بِالضَّرُورَةِ",
          "كُلِّيًّا",
          "بِالضَّرُورَةِ"
        ],
        "answer": 0,
        "why": "Nuance utile dans un essai."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مَعَ أَنَّ » ?",
        "options": [
          "Malgré",
          "En contrepartie / face à",
          "Bien que"
        ],
        "answer": 2,
        "why": "مَعَ أَنَّ = Bien que. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « حَدٌّ » ?",
        "options": [
          "Limite / mesure",
          "Toutefois",
          "Partiellement"
        ],
        "answer": 0,
        "why": "حَدٌّ = Limite / mesure. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « نِظَامٌ » ?",
        "options": [
          "Nécessairement",
          "Système",
          "Limite / mesure"
        ],
        "answer": 1,
        "why": "نِظَامٌ = Système. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de حَدَّ ?",
        "options": [
          "حَدٌّ",
          "مَعَ أَنَّ",
          "غَيْرَ أَنَّ"
        ],
        "answer": 0,
        "why": "حَدَّ – يَحُدُّ – حَدٌّ (limiter)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de نَاسَبَ ?",
        "options": [
          "تَوَاصُلٌ",
          "مُنَاسَبَةٌ",
          "تَطْبِيقٌ"
        ],
        "answer": 1,
        "why": "نَاسَبَ – يُنَاسِبُ – مُنَاسَبَةٌ (convenir à)."
      },
      {
        "type": "input",
        "prompt": "Écris « En contrepartie / face à » en arabe (forme du lexique).",
        "answer": "مُقَابِلَ",
        "accepted": [
          "مقابل"
        ],
        "why": "مُقَابِلَ signifie « En contrepartie / face à ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مُحَاوِر",
        "ar": "هَلِ الْعَمَلُ عَنْ بُعْدٍ أَفْضَلُ؟",
        "fr": "Le télétravail est-il meilleur ?"
      },
      {
        "speaker": "مُتَحَدِّث",
        "ar": "إِلَى حَدٍّ مَا، لَكِنَّهُ لَا يُنَاسِبُ الْجَمِيعَ.",
        "fr": "Dans une certaine mesure, mais pas pour tout le monde."
      },
      {
        "speaker": "مُحَاوِر",
        "ar": "مَا الْمُشْكِلَةُ الْأَسَاسِيَّةُ؟",
        "fr": "Quel est le principal problème ?"
      },
      {
        "speaker": "مُتَحَدِّث",
        "ar": "قَدْ يَضْعُفُ التَّوَاصُلُ الْمُبَاشِرُ.",
        "fr": "La communication directe peut s’affaiblir."
      }
    ],
    "writing": {
      "prompt": "Réécris un texte catégorique en version nuancée. Emploie trois concessions et trois marqueurs de réserve.",
      "modelAr": "عَلَى الرَّغْمِ مِنْ أَنَّ هَذَا الْحَلَّ مُفِيدٌ، فَإِنَّهُ لَا يُنَاسِبُ جَمِيعَ الْحَالَاتِ. وَهَذَا صَحِيحٌ إِلَى حَدٍّ مَا.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b2-03-v2",
    "level": "B2",
    "number": 3,
    "month": 11,
    "emoji": "📈",
    "title": "Probabilité et degré de certitude",
    "minutes": 130,
    "goal": "Évaluer la fiabilité d’une information plutôt que l’affirmer sans réserve.",
    "grammar": [
      {
        "title": "Probabilité",
        "body": "رُبَّمَا = peut-être ; مِنَ الْمُحْتَمَلِ أَنْ = il est probable / possible que ; قَدْ + inaccompli peut introduire une possibilité : قَدْ يَتَغَيَّرُ الْوَضْعُ."
      },
      {
        "title": "Certitude et attribution",
        "body": "مِنَ الْمُؤَكَّدِ أَنَّ = il est certain que ; تَشِيرُ الْمَعْطَيَاتُ إِلَى أَنَّ = les données indiquent que. Une source peut être solide sans justifier une certitude absolue."
      },
      {
        "title": "Différencier faits et projections",
        "body": "التَّوَقُّعُ n’est pas الْوَاقِعُ : une prévision reste conditionnelle. Emploie بِحَسَبِ الْمَعْلُومَاتِ الْمُتَاحَةِ = selon les informations disponibles."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "تَشِيرُ بَعْضُ التَّقَارِيرِ إِلَى أَنَّ أَسْعَارَ الطَّاقَةِ قَدْ تَتَغَيَّرُ خِلَالَ السَّنَةِ الْقَادِمَةِ. وَمَعَ ذَلِكَ، لَا يُمْكِنُ الْجَزْمُ بِالنَّتَائِجِ، لِأَنَّ الْعَوَامِلَ الِاقْتِصَادِيَّةَ مُتَعَدِّدَةٌ. وَبِحَسَبِ الْمَعْلُومَاتِ الْمُتَاحَةِ، يَبْقَى التَّوَقُّعُ تَقْدِيرًا لَا حَقِيقَةً نِهَائِيَّةً.",
      "fr": "Certains rapports suggèrent que les prix de l’énergie pourraient évoluer l’an prochain. Il n’est toutefois pas possible de conclure avec certitude, car les facteurs économiques sont multiples. Selon les informations disponibles, il s’agit d’une estimation, non d’une vérité définitive."
    },
    "examples": [
      {
        "ar": "هَلْ سَتَرْتَفِعُ الْأَسْعَارُ؟",
        "fr": "Les prix augmenteront-ils ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "رُبَّمَا، وَلَكِنْ لَا نَمْلِكُ مَعْلُومَاتٍ كَافِيَةً.",
        "fr": "Peut-être, mais nous manquons d’informations.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "رُبَّمَا",
              "رُبَّمَا"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ يُمْكِنُ الْجَزْمُ؟",
        "fr": "Peut-on en être certain ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "تَوَقَّعَ",
        "present": "يَتَوَقَّعُ",
        "masdar": "تَوَقُّعٌ",
        "fr": "prévoir",
        "lookup": "توقع"
      },
      {
        "past": "قَدَّرَ",
        "present": "يُقَدِّرُ",
        "masdar": "تَقْدِيرٌ",
        "fr": "estimer",
        "lookup": "قدر"
      },
      {
        "past": "جَزَمَ",
        "present": "يَجْزِمُ",
        "masdar": "جَزْمٌ",
        "fr": "affirmer catégoriquement",
        "lookup": "جزم"
      }
    ],
    "words": [
      [
        "اِحْتِمَالٌ",
        "Probabilité / possibilité"
      ],
      [
        "يَقِينٌ",
        "Certitude"
      ],
      [
        "شَكٌّ",
        "Doute"
      ],
      [
        "تَوَقُّعٌ",
        "Prévision"
      ],
      [
        "تَقْدِيرٌ",
        "Estimation"
      ],
      [
        "وَاقِعٌ",
        "Réalité"
      ],
      [
        "مَعْطَيَاتٌ",
        "Données"
      ],
      [
        "مَصْدَرٌ",
        "Source"
      ],
      [
        "دَقِيقٌ",
        "Précis"
      ],
      [
        "مَتَاحٌ",
        "Disponible"
      ],
      [
        "عَامِلٌ",
        "Facteur"
      ],
      [
        "نِهَائِيٌّ",
        "Final"
      ],
      [
        "رُبَّمَا",
        "Peut-être"
      ],
      [
        "مِنَ الْمُحْتَمَلِ",
        "Il est probable / possible"
      ],
      [
        "بِحَسَبِ",
        "Selon"
      ],
      [
        "حَقِيقَةٌ",
        "Fait / vérité"
      ]
    ],
    "dialect": [
      {
        "msa": "رُبَّمَا يَتَغَيَّرُ الْوَضْعُ.",
        "levant": "يِمْكِنْ يِتْغَيَّرْ الْوَضْعْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "يِمْكِنْ est un marqueur courant de possibilité en levantin."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Que signifie رُبَّمَا ?",
        "options": [
          "Probabilité / possibilité",
          "Certitude",
          "Peut-être"
        ],
        "answer": 2,
        "why": "Marqueur de possibilité."
      },
      {
        "type": "choice",
        "prompt": "Quel mot signifie « prévision » ?",
        "options": [
          "تَوَقُّعٌ",
          "بِحَسَبِ",
          "حَقِيقَةٌ"
        ],
        "answer": 0,
        "why": "À distinguer d’un fait observé."
      },
      {
        "type": "choice",
        "prompt": "Quel connecteur signifie « selon » ?",
        "options": [
          "رُبَّمَا",
          "بِحَسَبِ",
          "مِنَ الْمُحْتَمَلِ"
        ],
        "answer": 1,
        "why": "Pour l’attribution de source."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « شَكٌّ » ?",
        "options": [
          "Probabilité / possibilité",
          "Doute",
          "Certitude"
        ],
        "answer": 1,
        "why": "شَكٌّ = Doute. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مَصْدَرٌ » ?",
        "options": [
          "Prévision",
          "Estimation",
          "Source"
        ],
        "answer": 2,
        "why": "مَصْدَرٌ = Source. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « رُبَّمَا » ?",
        "options": [
          "Peut-être",
          "Données",
          "Source"
        ],
        "answer": 0,
        "why": "رُبَّمَا = Peut-être. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَوَقَّعَ ?",
        "options": [
          "تَوَقُّعٌ",
          "رُبَّمَا",
          "مِنَ الْمُحْتَمَلِ"
        ],
        "answer": 0,
        "why": "تَوَقَّعَ – يَتَوَقَّعُ – تَوَقُّعٌ (prévoir)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَدَّرَ ?",
        "options": [
          "حَقِيقَةٌ",
          "تَقْدِيرٌ",
          "تَوَقُّعٌ"
        ],
        "answer": 1,
        "why": "قَدَّرَ – يُقَدِّرُ – تَقْدِيرٌ (estimer)."
      },
      {
        "type": "input",
        "prompt": "Écris « Certitude » en arabe (forme du lexique).",
        "answer": "يَقِينٌ",
        "accepted": [
          "يقين"
        ],
        "why": "يَقِينٌ signifie « Certitude ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مُحَلِّلَة",
        "ar": "هَلْ سَتَرْتَفِعُ الْأَسْعَارُ؟",
        "fr": "Les prix augmenteront-ils ?"
      },
      {
        "speaker": "مُحَلِّل",
        "ar": "رُبَّمَا، وَلَكِنْ لَا نَمْلِكُ مَعْلُومَاتٍ كَافِيَةً.",
        "fr": "Peut-être, mais nous manquons d’informations."
      },
      {
        "speaker": "مُحَلِّلَة",
        "ar": "هَلْ يُمْكِنُ الْجَزْمُ؟",
        "fr": "Peut-on en être certain ?"
      },
      {
        "speaker": "مُحَلِّل",
        "ar": "لَا، هَذَا مُجَرَّدُ تَوَقُّعٍ.",
        "fr": "Non, ce n’est qu’une prévision."
      }
    ],
    "writing": {
      "prompt": "Commente un graphique fictif en distinguant observations, hypothèses et projections. Exprime trois degrés de certitude.",
      "modelAr": "تَشِيرُ الْبَيَانَاتُ إِلَى زِيَادَةٍ فِي الطَّلَبِ. رُبَّمَا يَسْتَمِرُّ هَذَا الِاتِّجَاهُ، وَلَكِنَّهُ لَيْسَ مُؤَكَّدًا.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b2-04-v2",
    "level": "B2",
    "number": 4,
    "month": 11,
    "emoji": "🔀",
    "title": "Irréel et alternatives",
    "minutes": 130,
    "goal": "Exprimer regrets, impossibilités, conditions contrefactuelles.",
    "grammar": [
      {
        "title": "L’irréel avec لو",
        "body": "لَوْ دَرَسْتُ أَكْثَرَ لَنَجَحْتُ = si j’avais davantage étudié, j’aurais réussi. Dans de tels contextes, les deux verbes sont souvent à l’accompli malgré la traduction conditionnelle française."
      },
      {
        "title": "لَوْلَا et la condition empêchante",
        "body": "لَوْلَا الْمَطَرُ لَخَرَجْنَا = sans la pluie, nous serions sortis. لَوْلَا peut introduire une raison qui a empêché la réalisation de l’action."
      },
      {
        "title": "Regret et souhait irréalisé",
        "body": "يَا لَيْتَنِي دَرَسْتُ أَكْثَرَ = si seulement j’avais davantage étudié. لَيْتَ fait partie des particules qui gouvernent un nom à l’accusatif ; sa valeur de souhait est fréquente dans la littérature."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "تَأَخَّرَ مَازِنٌ عَنِ الْقِطَارِ بِسَبَبِ الِازْدِحَامِ. قَالَ لِصَدِيقِهِ: «لَوْ خَرَجْتُ مِنَ الْبَيْتِ مُبَكِّرًا لَلَحِقْتُ بِالْقِطَارِ». فَأَجَابَهُ: «لَوْلَا الِازْدِحَامُ لَوَصَلْتَ فِي الْوَقْتِ الْمُنَاسِبِ». تَمَنَّى مَازِنٌ أَنْ يُنَظِّمَ وَقْتَهُ بِشَكْلٍ أَفْضَلَ فِي الْمُسْتَقْبَلِ.",
      "fr": "Mazen a raté son train à cause de la circulation. Il dit que, s’il était parti plus tôt, il l’aurait pris. Son ami répond que, sans les embouteillages, il serait arrivé à l’heure. Mazen souhaite mieux organiser son temps à l’avenir."
    },
    "examples": [
      {
        "ar": "لِمَاذَا فَاتَكَ الْقِطَارُ؟",
        "fr": "Pourquoi as-tu raté le train ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "قِطَارٌ",
              "قِطَارٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "لَوْ خَرَجْتُ مُبَكِّرًا لَلَحِقْتُ بِهِ.",
        "fr": "Si j’étais parti tôt, je l’aurais pris.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ سَتُغَيِّرُ خُطَّتَكَ؟",
        "fr": "Vas-tu changer ton plan ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "لَحِقَ",
        "present": "يَلْحَقُ",
        "masdar": "لُحُوقٌ",
        "fr": "rattraper",
        "lookup": "لحق"
      },
      {
        "past": "تَمَنَّى",
        "present": "يَتَمَنَّى",
        "masdar": "تَمَنٍّ",
        "fr": "souhaiter",
        "lookup": "تمنى"
      },
      {
        "past": "نَدِمَ",
        "present": "يَنْدَمُ",
        "masdar": "نَدَمٌ",
        "fr": "regretter",
        "lookup": "ندم"
      }
    ],
    "words": [
      [
        "لَوْ",
        "Si (irréel)"
      ],
      [
        "لَوْلَا",
        "Sans / n’était-ce"
      ],
      [
        "لَيْتَ",
        "Si seulement"
      ],
      [
        "نَدَمٌ",
        "Regret"
      ],
      [
        "تَمَنٍّ",
        "Souhait"
      ],
      [
        "فُرْصَةٌ",
        "Occasion"
      ],
      [
        "اِزْدِحَامٌ",
        "Embouteillage"
      ],
      [
        "قِطَارٌ",
        "Train"
      ],
      [
        "تَأَخُّرٌ",
        "Retard"
      ],
      [
        "اِحْتِمَالٌ",
        "Possibilité"
      ],
      [
        "مَانِعٌ",
        "Obstacle"
      ],
      [
        "فَرْضٌ",
        "Hypothèse"
      ],
      [
        "بَدِيلٌ",
        "Alternative"
      ],
      [
        "مُنَاسِبٌ",
        "Adapté"
      ],
      [
        "مَوْعِدٌ",
        "Rendez-vous"
      ],
      [
        "مَعْنًى",
        "Sens"
      ]
    ],
    "dialect": [
      {
        "msa": "لَوْ كُنْتُ هُنَاكَ لَسَاعَدْتُكَ.",
        "levant": "لَوْ كِنْتْ هُنِيكْ كِنْتْ سَاعَدْتَكْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "Le dialecte exprime l’irréel avec لو et souvent كَانَ / كِنْتْ."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle particule sert à exprimer un regret souhaité ?",
        "options": [
          "لَيْتَ",
          "مَانِعٌ",
          "فَرْضٌ"
        ],
        "answer": 0,
        "why": "يَا لَيْتَنِي = si seulement je..."
      },
      {
        "type": "choice",
        "prompt": "Que signifie لَوْلَا ?",
        "options": [
          "Train",
          "Sans / n’était-ce",
          "Retard"
        ],
        "answer": 1,
        "why": "Présente une condition empêchante."
      },
      {
        "type": "choice",
        "prompt": "La forme لَوْ دَرَسْتُ لَنَجَحْتُ décrit souvent...",
        "options": [
          "Embouteillage",
          "Train",
          "Une condition contrefactuelle"
        ],
        "answer": 2,
        "why": "Les deux verbes peuvent être à l’accompli."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « لَيْتَ » ?",
        "options": [
          "Si seulement",
          "Si (irréel)",
          "Sans / n’était-ce"
        ],
        "answer": 0,
        "why": "لَيْتَ = Si seulement. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « قِطَارٌ » ?",
        "options": [
          "Regret",
          "Train",
          "Souhait"
        ],
        "answer": 1,
        "why": "قِطَارٌ = Train. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « بَدِيلٌ » ?",
        "options": [
          "Embouteillage",
          "Train",
          "Alternative"
        ],
        "answer": 2,
        "why": "بَدِيلٌ = Alternative. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de لَحِقَ ?",
        "options": [
          "لُحُوقٌ",
          "قِطَارٌ",
          "تَأَخُّرٌ"
        ],
        "answer": 0,
        "why": "لَحِقَ – يَلْحَقُ – لُحُوقٌ (rattraper)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَمَنَّى ?",
        "options": [
          "قِطَارٌ",
          "تَمَنٍّ",
          "تَأَخُّرٌ"
        ],
        "answer": 1,
        "why": "تَمَنَّى – يَتَمَنَّى – تَمَنٍّ (souhaiter)."
      },
      {
        "type": "input",
        "prompt": "Écris « Sans / n’était-ce » en arabe (forme du lexique).",
        "answer": "لَوْلَا",
        "accepted": [
          "لولا"
        ],
        "why": "لَوْلَا signifie « Sans / n’était-ce ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "سَامِر",
        "ar": "لِمَاذَا فَاتَكَ الْقِطَارُ؟",
        "fr": "Pourquoi as-tu raté le train ?"
      },
      {
        "speaker": "مَازِن",
        "ar": "لَوْ خَرَجْتُ مُبَكِّرًا لَلَحِقْتُ بِهِ.",
        "fr": "Si j’étais parti tôt, je l’aurais pris."
      },
      {
        "speaker": "سَامِر",
        "ar": "هَلْ سَتُغَيِّرُ خُطَّتَكَ؟",
        "fr": "Vas-tu changer ton plan ?"
      },
      {
        "speaker": "مَازِن",
        "ar": "نَعَمْ، سَأَخْرُجُ أَبْكَرَ غَدًا.",
        "fr": "Oui, je partirai plus tôt demain."
      }
    ],
    "writing": {
      "prompt": "Écris quatre scénarios irréels passés, deux regrets et deux alternatives empêchées. Justifie l’ordre des propositions.",
      "modelAr": "لَوْ كَانَ عِنْدِي وَقْتٌ لَزُرْتُ الْمَدِينَةَ. لَوْلَا الْمَطَرُ لَخَرَجْنَا. يَا لَيْتَنِي خَرَجْتُ مُبَكِّرًا.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b2-05-v2",
    "level": "B2",
    "number": 5,
    "month": 12,
    "emoji": "🗣️",
    "title": "Discours rapporté et sources",
    "minutes": 130,
    "goal": "Rapporter fidèlement les propos de quelqu’un et préciser l’origine d’une information.",
    "grammar": [
      {
        "title": "Discours direct et indirect",
        "body": "قَالَ الْمُدِيرُ: «سَنَبْدَأُ غَدًا» = le directeur a dit « nous commencerons demain ». Indirect : قَالَ الْمُدِيرُ إِنَّهُمْ سَيَبْدَؤُونَ فِي الْيَوْمِ التَّالِي. Les transformations dépendent de la perspective et du contexte."
      },
      {
        "title": "أَنَّ, إِنَّ et l’attribution",
        "body": "ذَكَرَ أَنَّ... = il a indiqué que... ; قَالَ إِنَّ... = il a dit que... Dans les usages, la distinction peut demander une analyse fine : n’applique pas la règle française « que = أن » automatiquement."
      },
      {
        "title": "Préserver les réserves de la source",
        "body": "حَسَبَ قَوْلِهِ = d’après ses propos ; عَلَى حَدِّ تَعْبِيرِهِ = selon ses termes ; نَفَى أَنْ... = il a nié que... Une paraphrase fidèle ne transforme pas « peut-être » en « certainement »."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "أَعْلَنَ مَسْؤُولٌ فِي مُقَابَلَةٍ أَنَّ الْمَشْرُوعَ سَيَبْدَأُ فِي الشَّهْرِ الْقَادِمِ. وَأَضَافَ أَنَّ التَّمْوِيلَ لَمْ يُسْتَكْمَلْ بَعْدُ. وَنَقَلَتِ الصَّحِيفَةُ عَنْهُ أَنَّ الْمَوْعِدَ قَدْ يَتَغَيَّرُ إِذَا ظَهَرَتْ صُعُوبَاتٌ جَدِيدَةٌ.",
      "fr": "Un responsable a annoncé en entretien que le projet commencerait le mois prochain. Il a ajouté que le financement n’était pas encore achevé. Le journal a rapporté que la date pourrait changer en cas de nouvelles difficultés."
    },
    "examples": [
      {
        "ar": "مَاذَا قَالَ الْمَسْؤُولُ؟",
        "fr": "Qu’a dit le responsable ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "مَسْؤُولٌ",
              "مَسْؤُولٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "قَالَ إِنَّ الْمَشْرُوعَ سَيَبْدَأُ قَرِيبًا.",
        "fr": "Il a dit que le projet commencerait bientôt.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ هَذَا مُؤَكَّدٌ؟",
        "fr": "Est-ce confirmé ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "أَعْلَنَ",
        "present": "يُعْلِنُ",
        "masdar": "إِعْلَانٌ",
        "fr": "annoncer",
        "lookup": "أعلن"
      },
      {
        "past": "نَقَلَ",
        "present": "يَنْقُلُ",
        "masdar": "نَقْلٌ",
        "fr": "rapporter / transporter",
        "lookup": "نقل"
      },
      {
        "past": "نَفَى",
        "present": "يَنْفِي",
        "masdar": "نَفْيٌ",
        "fr": "nier",
        "lookup": "نفى"
      }
    ],
    "words": [
      [
        "تَصْرِيحٌ",
        "Déclaration"
      ],
      [
        "نَقْلٌ",
        "Rapport / transmission"
      ],
      [
        "اِقْتِبَاسٌ",
        "Citation"
      ],
      [
        "مَصْدَرٌ",
        "Source"
      ],
      [
        "مُقَابَلَةٌ",
        "Entretien"
      ],
      [
        "مَسْؤُولٌ",
        "Responsable"
      ],
      [
        "تَمْوِيلٌ",
        "Financement"
      ],
      [
        "صُعُوبَةٌ",
        "Difficulté"
      ],
      [
        "مُحَرِّرٌ",
        "Rédacteur"
      ],
      [
        "رِوَايَةٌ",
        "Version / récit"
      ],
      [
        "أَضَافَ",
        "Il a ajouté"
      ],
      [
        "ذَكَرَ",
        "Il a mentionné"
      ],
      [
        "نَفَى",
        "Il a nié"
      ],
      [
        "عَلَى حَدِّ تَعْبِيرِهِ",
        "Selon ses termes"
      ],
      [
        "حَسَبَ",
        "Selon"
      ],
      [
        "بَعْدُ",
        "Encore / jusqu’ici (dans la négation)"
      ]
    ],
    "dialect": [
      {
        "msa": "قَالَ إِنَّ الْمَوْعِدَ سَيَتَغَيَّرُ.",
        "levant": "قَالْ إِنُّو الْمَوْعِدْ رَحْ يِتْغَيَّرْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "إِنُّو et رَحْ sont des équivalents oraux fréquents du complétif et du futur."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel verbe signifie « nier » ?",
        "options": [
          "عَلَى حَدِّ تَعْبِيرِهِ",
          "نَفَى",
          "حَسَبَ"
        ],
        "answer": 1,
        "why": "نَفَى – يَنْفِي – نَفْيٌ."
      },
      {
        "type": "choice",
        "prompt": "Quelle expression signifie « selon ses termes » ?",
        "options": [
          "إِعْلَانٌ",
          "نَقْلٌ",
          "عَلَى حَدِّ تَعْبِيرِهِ"
        ],
        "answer": 2,
        "why": "Attribue une formulation à son auteur."
      },
      {
        "type": "choice",
        "prompt": "Dans un compte rendu fidèle, il faut...",
        "options": [
          "Conserver les réserves de la source",
          "Version / récit",
          "Il a ajouté"
        ],
        "answer": 0,
        "why": "Ne pas transformer l’hypothèse en certitude."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « اِقْتِبَاسٌ » ?",
        "options": [
          "Déclaration",
          "Rapport / transmission",
          "Citation"
        ],
        "answer": 2,
        "why": "اِقْتِبَاسٌ = Citation. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « صُعُوبَةٌ » ?",
        "options": [
          "Difficulté",
          "Source",
          "Entretien"
        ],
        "answer": 0,
        "why": "صُعُوبَةٌ = Difficulté. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « نَفَى » ?",
        "options": [
          "Financement",
          "Il a nié",
          "Difficulté"
        ],
        "answer": 1,
        "why": "نَفَى = Il a nié. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَعْلَنَ ?",
        "options": [
          "إِعْلَانٌ",
          "نَقْلٌ",
          "نَفْيٌ"
        ],
        "answer": 0,
        "why": "أَعْلَنَ – يُعْلِنُ – إِعْلَانٌ (annoncer)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de نَقَلَ ?",
        "options": [
          "إِعْلَانٌ",
          "نَقْلٌ",
          "نَفْيٌ"
        ],
        "answer": 1,
        "why": "نَقَلَ – يَنْقُلُ – نَقْلٌ (rapporter / transporter)."
      },
      {
        "type": "input",
        "prompt": "Écris « Rapport / transmission » en arabe (forme du lexique).",
        "answer": "نَقْلٌ",
        "accepted": [
          "نقل"
        ],
        "why": "نَقْلٌ signifie « Rapport / transmission ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "صَحَفِيَّة",
        "ar": "مَاذَا قَالَ الْمَسْؤُولُ؟",
        "fr": "Qu’a dit le responsable ?"
      },
      {
        "speaker": "زَمِيل",
        "ar": "قَالَ إِنَّ الْمَشْرُوعَ سَيَبْدَأُ قَرِيبًا.",
        "fr": "Il a dit que le projet commencerait bientôt."
      },
      {
        "speaker": "صَحَفِيَّة",
        "ar": "هَلْ هَذَا مُؤَكَّدٌ؟",
        "fr": "Est-ce confirmé ?"
      },
      {
        "speaker": "زَمِيل",
        "ar": "لَا، ذَكَرَ أَنَّ الْمَوْعِدَ قَدْ يَتَغَيَّرُ.",
        "fr": "Non, il a précisé que la date pouvait changer."
      }
    ],
    "writing": {
      "prompt": "Prends un court dialogue et transforme-le en compte rendu de 200 mots. Conserve les noms, réserves et indications temporelles.",
      "modelAr": "قَالَ الْمُدِيرُ إِنَّ الْفَرِيقَ سَيَبْدَأُ الْعَمَلَ غَدًا. وَأَضَافَ أَنَّ الْخُطَّةَ قَدْ تَتَغَيَّرُ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b2-06-v2",
    "level": "B2",
    "number": 6,
    "month": 12,
    "emoji": "🧬",
    "title": "Morphologie : formes II à X",
    "minutes": 130,
    "goal": "Décoder une famille lexicale par les formes dérivées et leurs maṣdar.",
    "grammar": [
      {
        "title": "Formes II à IV",
        "body": "عَلِمَ (savoir) ; عَلَّمَ – يُعَلِّمُ – تَعْلِيمٌ (enseigner, forme II) ; تَعَلَّمَ – يَتَعَلَّمُ – تَعَلُّمٌ (apprendre, forme V). Les schèmes apportent des tendances, mais le sens d’un verbe concret doit être vérifié."
      },
      {
        "title": "Formes V à VIII",
        "body": "تَحَدَّثَ – يَتَحَدَّثُ – تَحَدُّثٌ (parler) ; تَعَاوَنَ – يَتَعَاوَنُ – تَعَاوُنٌ (coopérer) ; اِنْقَطَعَ – يَنْقَطِعُ – اِنْقِطَاعٌ (s’interrompre) ; اِجْتَمَعَ – يَجْتَمِعُ – اِجْتِمَاعٌ (se réunir)."
      },
      {
        "title": "Formes IX et X",
        "body": "La forme IX (اِفْعَلَّ) est notamment liée à des propriétés de couleur ou d’état et relativement rare. La forme X اِسْتَفْعَلَ a souvent une valeur de demande/recherche : اِسْتَخْدَمَ – يَسْتَخْدِمُ – اِسْتِخْدَامٌ = utiliser. Ne traite pas tous les schèmes comme productifs au même degré."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "عِنْدَمَا بَدَأَتِ الْمُؤَسَّسَةُ تَطْوِيرَ نِظَامِهَا، اِسْتَخْدَمَ الْفَرِيقُ أَدَوَاتٍ جَدِيدَةً. تَعَاوَنَ الْمُوَظَّفُونَ لِتَحْسِينِ الْخِدْمَةِ، وَاجْتَمَعُوا أُسْبُوعِيًّا لِمُنَاقَشَةِ الْمَشَاكِلِ. وَبَعْدَ أَشْهُرٍ ظَهَرَ تَحَسُّنٌ وَاضِحٌ فِي الْأَدَاءِ.",
      "fr": "Quand l’organisation a commencé à moderniser son système, l’équipe a utilisé de nouveaux outils. Les employés ont coopéré pour améliorer le service et se sont réunis chaque semaine pour discuter des problèmes. Après plusieurs mois, les performances se sont nettement améliorées."
    },
    "examples": [
      {
        "ar": "مَاذَا تَعَلَّمْتُمْ هَذَا الشَّهْرَ؟",
        "fr": "Qu’avez-vous appris ce mois-ci ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "تَعَلُّمٌ",
              "تَعَلُّمٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "تَعَلَّمْنَا اِسْتِخْدَامَ أَدَوَاتٍ جَدِيدَةٍ.",
        "fr": "Nous avons appris à utiliser de nouveaux outils.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "تَعَلُّمٌ",
              "تَعَلُّمٌ"
            ],
            [
              "اِسْتِخْدَامٌ",
              "اِسْتِخْدَامٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ تَعَاوَنْتُمْ فِي الْعَمَلِ؟",
        "fr": "Avez-vous coopéré ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "تَعَاوُنٌ",
              "تَعَاوُنٌ"
            ]
          ],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "عَلَّمَ",
        "present": "يُعَلِّمُ",
        "masdar": "تَعْلِيمٌ",
        "fr": "enseigner",
        "lookup": "علم"
      },
      {
        "past": "تَعَلَّمَ",
        "present": "يَتَعَلَّمُ",
        "masdar": "تَعَلُّمٌ",
        "fr": "apprendre",
        "lookup": "تعلم"
      },
      {
        "past": "تَعَاوَنَ",
        "present": "يَتَعَاوَنُ",
        "masdar": "تَعَاوُنٌ",
        "fr": "coopérer",
        "lookup": "تعاون"
      },
      {
        "past": "اِسْتَخْدَمَ",
        "present": "يَسْتَخْدِمُ",
        "masdar": "اِسْتِخْدَامٌ",
        "fr": "utiliser",
        "lookup": "استخدم"
      }
    ],
    "words": [
      [
        "جَذْرٌ",
        "Racine"
      ],
      [
        "وَزْنٌ",
        "Schème"
      ],
      [
        "صِيغَةٌ",
        "Forme"
      ],
      [
        "مَصْدَرٌ",
        "Nom verbal"
      ],
      [
        "تَعْلِيمٌ",
        "Enseignement"
      ],
      [
        "تَعَلُّمٌ",
        "Apprentissage"
      ],
      [
        "تَحَدُّثٌ",
        "Fait de parler"
      ],
      [
        "تَعَاوُنٌ",
        "Coopération"
      ],
      [
        "اِنْقِطَاعٌ",
        "Interruption"
      ],
      [
        "اِجْتِمَاعٌ",
        "Réunion"
      ],
      [
        "اِسْتِخْدَامٌ",
        "Utilisation"
      ],
      [
        "تَحْسِينٌ",
        "Amélioration"
      ],
      [
        "تَطْوِيرٌ",
        "Développement"
      ],
      [
        "مُؤَسَّسَةٌ",
        "Organisation"
      ],
      [
        "أَدَاءٌ",
        "Performance"
      ],
      [
        "نِظَامٌ",
        "Système"
      ]
    ],
    "dialect": [
      {
        "msa": "بَدِّي اِسْتَخْدِمْ هَالتَّطْبِيقْ.",
        "levant": "بَدِّي اِسْتَعْمِلْ هَالتَّطْبِيقْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "اِسْتَعْمِلْ est un verbe levantin courant pour utiliser ; les schèmes demeurent reconnaissables."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَعَلَّمَ ?",
        "options": [
          "تَعْلِيمٌ",
          "تَعَاوُنٌ",
          "تَعَلُّمٌ"
        ],
        "answer": 2,
        "why": "Forme V."
      },
      {
        "type": "choice",
        "prompt": "Quelle forme représente اِسْتَخْدَمَ ?",
        "options": [
          "La forme X",
          "Fait de parler",
          "Coopération"
        ],
        "answer": 0,
        "why": "Schème اِسْتَفْعَلَ."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَعَاوَنَ ?",
        "options": [
          "مَصْدَرٌ",
          "تَعَاوُنٌ",
          "تَعْلِيمٌ"
        ],
        "answer": 1,
        "why": "Forme VI."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « صِيغَةٌ » ?",
        "options": [
          "Racine",
          "Forme",
          "Schème"
        ],
        "answer": 1,
        "why": "صِيغَةٌ = Forme. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « تَعَاوُنٌ » ?",
        "options": [
          "Nom verbal",
          "Enseignement",
          "Coopération"
        ],
        "answer": 2,
        "why": "تَعَاوُنٌ = Coopération. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « تَطْوِيرٌ » ?",
        "options": [
          "Développement",
          "Fait de parler",
          "Coopération"
        ],
        "answer": 0,
        "why": "تَطْوِيرٌ = Développement. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de عَلَّمَ ?",
        "options": [
          "تَعْلِيمٌ",
          "تَعَاوُنٌ",
          "اِنْقِطَاعٌ"
        ],
        "answer": 0,
        "why": "عَلَّمَ – يُعَلِّمُ – تَعْلِيمٌ (enseigner)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَعَلَّمَ ?",
        "options": [
          "اِسْتِخْدَامٌ",
          "تَعَلُّمٌ",
          "تَحْسِينٌ"
        ],
        "answer": 1,
        "why": "تَعَلَّمَ – يَتَعَلَّمُ – تَعَلُّمٌ (apprendre)."
      },
      {
        "type": "input",
        "prompt": "Écris « Schème » en arabe (forme du lexique).",
        "answer": "وَزْنٌ",
        "accepted": [
          "وزن"
        ],
        "why": "وَزْنٌ signifie « Schème ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مُدَرِّب",
        "ar": "مَاذَا تَعَلَّمْتُمْ هَذَا الشَّهْرَ؟",
        "fr": "Qu’avez-vous appris ce mois-ci ?"
      },
      {
        "speaker": "مُوَظَّف",
        "ar": "تَعَلَّمْنَا اِسْتِخْدَامَ أَدَوَاتٍ جَدِيدَةٍ.",
        "fr": "Nous avons appris à utiliser de nouveaux outils."
      },
      {
        "speaker": "مُدَرِّب",
        "ar": "هَلْ تَعَاوَنْتُمْ فِي الْعَمَلِ؟",
        "fr": "Avez-vous coopéré ?"
      },
      {
        "speaker": "مُوَظَّف",
        "ar": "نَعَمْ، وَاجْتَمَعْنَا كُلَّ أُسْبُوعٍ.",
        "fr": "Oui, et nous nous sommes réunis chaque semaine."
      }
    ],
    "writing": {
      "prompt": "Constitue 12 familles de racines avec forme, sens, accompli, inaccompli, maṣdar et exemple personnel.",
      "modelAr": "عَلِمَ – يَعْلَمُ – عِلْمٌ. عَلَّمَ – يُعَلِّمُ – تَعْلِيمٌ. تَعَلَّمَ – يَتَعَلَّمُ – تَعَلُّمٌ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b2-07-v2",
    "level": "B2",
    "number": 7,
    "month": 13,
    "emoji": "🏛️",
    "title": "Passif avancé et style institutionnel",
    "minutes": 130,
    "goal": "Lire des documents publics qui privilégient procédures et résultats.",
    "grammar": [
      {
        "title": "Passifs de formes dérivées",
        "body": "أَعْلَنَ → أُعْلِنَ ; نَظَّمَ → نُظِّمَ ; يُنَظِّمُ → يُنَظَّمُ. Les schèmes vocaliques changent suivant la forme verbale, d’où l’importance de reconnaître la racine et la forme."
      },
      {
        "title": "Nominalisation institutionnelle",
        "body": "تَمَّ تَوْقِيعُ الِاتِّفَاقِ = la signature de l’accord a eu lieu. Cette tournure nominalisée est fréquente dans la presse et l’administration, sans se confondre grammaticalement avec le passif vocalique."
      },
      {
        "title": "Relation agent-résultat",
        "body": "أُقِرَّ الْقَانُونُ = la loi a été approuvée. Si l’agent est nécessaire, une autre formulation explicite peut être préférable : أَقَرَّ الْبَرْلَمَانُ الْقَانُونَ. Analyse toujours qui fait quoi."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "أُعْلِنَتْ نَتَائِجُ الْمُشَاوَرَاتِ فِي بَيَانٍ رَسْمِيٍّ. وَتَمَّ تَوْقِيعُ اتِّفَاقٍ لِتَحْسِينِ الْخِدْمَاتِ الْعَامَّةِ. وَذُكِرَ فِي الْبَيَانِ أَنَّ الْمَشْرُوعَ سَيُنَفَّذُ عَلَى مَرَاحِلَ، وَأَنَّ تَقْرِيرًا دَوْرِيًّا سَيُنْشَرُ لِتَوْضِيحِ التَّقَدُّمِ.",
      "fr": "Les résultats des consultations ont été annoncés dans un communiqué officiel. Un accord a été signé pour améliorer les services publics. Le communiqué précise que le projet sera exécuté par étapes et qu’un rapport périodique sera publié pour exposer les progrès."
    },
    "examples": [
      {
        "ar": "هَلْ وُقِّعَ الِاتِّفَاقُ؟",
        "fr": "L’accord a-t-il été signé ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "اِتِّفَاقٌ",
              "اِتِّفَاقٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "نَعَمْ، تَمَّ تَوْقِيعُهُ الْيَوْمَ.",
        "fr": "Oui, il a été signé aujourd’hui.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "تَوْقِيعٌ",
              "تَوْقِيعٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "مَتَى سَيُنَفَّذُ الْمَشْرُوعُ؟",
        "fr": "Quand le projet sera-t-il mis en œuvre ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "نَفَّذَ",
        "present": "يُنَفِّذُ",
        "masdar": "تَنْفِيذٌ",
        "fr": "mettre en œuvre",
        "lookup": "نفذ"
      },
      {
        "past": "وَقَّعَ",
        "present": "يُوَقِّعُ",
        "masdar": "تَوْقِيعٌ",
        "fr": "signer",
        "lookup": "وقع"
      },
      {
        "past": "أَقَرَّ",
        "present": "يُقِرُّ",
        "masdar": "إِقْرَارٌ",
        "fr": "approuver / reconnaître",
        "lookup": "أقر"
      }
    ],
    "words": [
      [
        "بَيَانٌ",
        "Communiqué"
      ],
      [
        "رَسْمِيٌّ",
        "Officiel"
      ],
      [
        "مُشَاوَرَاتٌ",
        "Consultations"
      ],
      [
        "اِتِّفَاقٌ",
        "Accord"
      ],
      [
        "تَوْقِيعٌ",
        "Signature"
      ],
      [
        "تَنْفِيذٌ",
        "Exécution"
      ],
      [
        "خِدْمَاتٌ",
        "Services"
      ],
      [
        "تَقْرِيرٌ",
        "Rapport"
      ],
      [
        "دَوْرِيٌّ",
        "Régulier / périodique"
      ],
      [
        "مَرْحَلَةٌ",
        "Étape"
      ],
      [
        "مُؤَسَّسَةٌ",
        "Institution"
      ],
      [
        "قَانُونٌ",
        "Loi"
      ],
      [
        "مُوَافَقَةٌ",
        "Approbation"
      ],
      [
        "إِجْرَاءٌ",
        "Procédure"
      ],
      [
        "نَتِيجَةٌ",
        "Résultat"
      ],
      [
        "تَوْضِيحٌ",
        "Clarification"
      ]
    ],
    "dialect": [
      {
        "msa": "تَمَّ تَوْقِيعُ الِاتِّفَاقِ.",
        "levant": "وَقَّعُوا الِاتِّفَاقْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "En conversation, l’actif à sujet générique « ils ont signé » est souvent plus naturel."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quel est le passif de أَعْلَنَ ?",
        "options": [
          "أُعْلِنَ",
          "نَتِيجَةٌ",
          "تَوْضِيحٌ"
        ],
        "answer": 0,
        "why": "Forme IV passive."
      },
      {
        "type": "choice",
        "prompt": "Que signifie تَمَّ تَوْقِيعُ الِاتِّفَاقِ ?",
        "options": [
          "Approbation",
          "L’accord a été signé",
          "Procédure"
        ],
        "answer": 1,
        "why": "Tournure nominalisée fréquente."
      },
      {
        "type": "choice",
        "prompt": "Dans سَيُنَفَّذُ الْمَشْرُوعُ, le verbe est...",
        "options": [
          "Clarification",
          "mettre en œuvre",
          "Au passif futur"
        ],
        "answer": 2,
        "why": "Préfixe سَـ + inaccompli passif."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مُشَاوَرَاتٌ » ?",
        "options": [
          "Consultations",
          "Communiqué",
          "Officiel"
        ],
        "answer": 0,
        "why": "مُشَاوَرَاتٌ = Consultations. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « تَقْرِيرٌ » ?",
        "options": [
          "Accord",
          "Rapport",
          "Signature"
        ],
        "answer": 1,
        "why": "تَقْرِيرٌ = Rapport. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « مُوَافَقَةٌ » ?",
        "options": [
          "Services",
          "Rapport",
          "Approbation"
        ],
        "answer": 2,
        "why": "مُوَافَقَةٌ = Approbation. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de نَفَّذَ ?",
        "options": [
          "تَنْفِيذٌ",
          "نَتِيجَةٌ",
          "تَوْضِيحٌ"
        ],
        "answer": 0,
        "why": "نَفَّذَ – يُنَفِّذُ – تَنْفِيذٌ (mettre en œuvre)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de وَقَّعَ ?",
        "options": [
          "إِقْرَارٌ",
          "تَوْقِيعٌ",
          "بَيَانٌ"
        ],
        "answer": 1,
        "why": "وَقَّعَ – يُوَقِّعُ – تَوْقِيعٌ (signer)."
      },
      {
        "type": "input",
        "prompt": "Écris « Officiel » en arabe (forme du lexique).",
        "answer": "رَسْمِيٌّ",
        "accepted": [
          "رسمي"
        ],
        "why": "رَسْمِيٌّ signifie « Officiel ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "صَحَفِيّ",
        "ar": "هَلْ وُقِّعَ الِاتِّفَاقُ؟",
        "fr": "L’accord a-t-il été signé ?"
      },
      {
        "speaker": "مُتَحَدِّث",
        "ar": "نَعَمْ، تَمَّ تَوْقِيعُهُ الْيَوْمَ.",
        "fr": "Oui, il a été signé aujourd’hui."
      },
      {
        "speaker": "صَحَفِيّ",
        "ar": "مَتَى سَيُنَفَّذُ الْمَشْرُوعُ؟",
        "fr": "Quand le projet sera-t-il mis en œuvre ?"
      },
      {
        "speaker": "مُتَحَدِّث",
        "ar": "سَيُنَفَّذُ عَلَى مَرَاحِلَ.",
        "fr": "Il le sera par étapes."
      }
    ],
    "writing": {
      "prompt": "Réécris une annonce institutionnelle en langage simple, puis inversement. Identifie les passifs et nominalisations.",
      "modelAr": "أُعْلِنَتِ النَّتَائِجُ الْيَوْمَ. تَمَّ تَوْقِيعُ الِاتِّفَاقِ. سَيُنَفَّذُ الْمَشْرُوعُ فِي السَّنَةِ الْقَادِمَةِ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b2-08-v2",
    "level": "B2",
    "number": 8,
    "month": 14,
    "emoji": "🧵",
    "title": "Subordination et phrases longues",
    "minutes": 130,
    "goal": "Analyser et produire des phrases complexes sans perdre la structure.",
    "grammar": [
      {
        "title": "إنَّ et ses sœurs",
        "body": "إِنَّ الْحَلَّ مُهِمٌّ = la solution est importante. Le nom de إِنَّ est à l’accusatif ; l’attribut reste au nominatif. أَنَّ, كَأَنَّ, لَكِنَّ, لَيْتَ et لَعَلَّ appartiennent à une famille grammaticale comparable."
      },
      {
        "title": "أَنْ + verbe et أَنَّ + phrase nominale",
        "body": "أُرِيدُ أَنْ أَفْهَمَ = je veux comprendre ; أَعْرِفُ أَنَّ الدَّرْسَ صَعْبٌ = je sais que le cours est difficile. La présence ou non de shadda sur ن n’est pas facultative."
      },
      {
        "title": "Phrases enchâssées",
        "body": "يَرَى الْبَاحِثُ أَنَّ الْخُطَّةَ الَّتِي قُدِّمَتْ أَمْسِ قَدْ تُسَاعِدُ... = le chercheur estime que le plan présenté hier pourrait aider... Identifie proposition principale, complétive et relative avant de traduire."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "يَعْتَقِدُ الْبَاحِثُ أَنَّ الْخُطَّةَ الَّتِي قَدَّمَتْهَا اللَّجْنَةُ أَمْسِ تَحْتَاجُ إِلَى تَعْدِيلٍ. فَمَعَ أَنَّهَا تَقْتَرِحُ حُلُولًا جَدِيدَةً، فَإِنَّ بَعْضَ الْإِجْرَاءَاتِ لَا يَزَالُ غَيْرَ وَاضِحٍ. وَلِذَلِكَ يَطْلُبُ الْبَاحِثُ أَنْ تُنْشَرَ التَّفَاصِيلُ قَبْلَ التَّنْفِيذِ.",
      "fr": "Un chercheur estime que le plan proposé hier par la commission doit être modifié. Bien qu’il propose de nouvelles solutions, certaines procédures demeurent peu claires. Il demande donc la publication de détails avant la mise en œuvre."
    },
    "examples": [
      {
        "ar": "هَلْ تَعْتَقِدُ أَنَّ الْخُطَّةَ وَاضِحَةٌ؟",
        "fr": "Crois-tu que le plan est clair ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "وَاضِحٌ",
              "وَاضِحٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "أَعْتَقِدُ أَنَّهَا تَحْتَاجُ إِلَى تَعْدِيلٍ.",
        "fr": "Je pense qu’elle a besoin d’être modifiée.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "تَعْدِيلٌ",
              "تَعْدِيلٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "مَاذَا تَقْتَرِحُ؟",
        "fr": "Que proposes-tu ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "قَدَّمَ",
        "present": "يُقَدِّمُ",
        "masdar": "تَقْدِيمٌ",
        "fr": "présenter",
        "lookup": "قدم"
      },
      {
        "past": "عَدَّلَ",
        "present": "يُعَدِّلُ",
        "masdar": "تَعْدِيلٌ",
        "fr": "modifier",
        "lookup": "عدل"
      },
      {
        "past": "طَلَبَ",
        "present": "يَطْلُبُ",
        "masdar": "طَلَبٌ",
        "fr": "demander",
        "lookup": "طلب"
      }
    ],
    "words": [
      [
        "إِنَّ",
        "Certes / que (complétive selon contexte)"
      ],
      [
        "أَنَّ",
        "Que (complétive nominale)"
      ],
      [
        "أَنْ",
        "Que (subjonctif)"
      ],
      [
        "كَأَنَّ",
        "Comme si"
      ],
      [
        "لَكِنَّ",
        "Mais / cependant"
      ],
      [
        "لَعَلَّ",
        "Peut-être / puisse"
      ],
      [
        "لَيْتَ",
        "Si seulement"
      ],
      [
        "صِلَةٌ",
        "Relation"
      ],
      [
        "جُمْلَةٌ",
        "Proposition / phrase"
      ],
      [
        "رَئِيسِيٌّ",
        "Principal"
      ],
      [
        "فَرْعِيٌّ",
        "Secondaire"
      ],
      [
        "تَعْدِيلٌ",
        "Modification"
      ],
      [
        "لَجْنَةٌ",
        "Commission"
      ],
      [
        "إِجْرَاءٌ",
        "Procédure"
      ],
      [
        "وَاضِحٌ",
        "Clair"
      ],
      [
        "تَنْفِيذٌ",
        "Mise en œuvre"
      ]
    ],
    "dialect": [
      {
        "msa": "بْعْرِفْ إِنُّو الدَّرْسْ صَعْبْ.",
        "levant": "بَعْرِفْ إِنُّو الدَّرْسْ صَعْبْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "Le complétif parlé إِنُّو est beaucoup plus courant que l’opposition morphologique écrite أَنْ / أَنَّ."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Dans أَنَّ الْخُطَّةَ مُهِمَّةٌ, الْخُطَّةَ est au...",
        "options": [
          "Commission",
          "Accusatif",
          "Procédure"
        ],
        "answer": 1,
        "why": "Nom de أَنَّ."
      },
      {
        "type": "choice",
        "prompt": "Quel mot introduit un verbe au subjonctif ?",
        "options": [
          "صِلَةٌ",
          "جُمْلَةٌ",
          "أَنْ"
        ],
        "answer": 2,
        "why": "Sans shadda, devant le verbe."
      },
      {
        "type": "choice",
        "prompt": "Comment traduit-on كَأَنَّ ?",
        "options": [
          "Comme si",
          "Un récit",
          "Une conséquence"
        ],
        "answer": 0,
        "why": "Particule de comparaison imagée."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « أَنْ » ?",
        "options": [
          "Certes / que (complétive selon contexte)",
          "Que (complétive nominale)",
          "Que (subjonctif)"
        ],
        "answer": 2,
        "why": "أَنْ = Que (subjonctif). Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « صِلَةٌ » ?",
        "options": [
          "Relation",
          "Comme si",
          "Mais / cependant"
        ],
        "answer": 0,
        "why": "صِلَةٌ = Relation. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « لَجْنَةٌ » ?",
        "options": [
          "Si seulement",
          "Commission",
          "Relation"
        ],
        "answer": 1,
        "why": "لَجْنَةٌ = Commission. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَدَّمَ ?",
        "options": [
          "تَقْدِيمٌ",
          "صِلَةٌ",
          "جُمْلَةٌ"
        ],
        "answer": 0,
        "why": "قَدَّمَ – يُقَدِّمُ – تَقْدِيمٌ (présenter)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de عَدَّلَ ?",
        "options": [
          "جُمْلَةٌ",
          "تَعْدِيلٌ",
          "رَئِيسِيٌّ"
        ],
        "answer": 1,
        "why": "عَدَّلَ – يُعَدِّلُ – تَعْدِيلٌ (modifier)."
      },
      {
        "type": "input",
        "prompt": "Écris « Que (complétive nominale) » en arabe (forme du lexique).",
        "answer": "أَنَّ",
        "accepted": [
          "ان"
        ],
        "why": "أَنَّ signifie « Que (complétive nominale) ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مُحَاوِر",
        "ar": "هَلْ تَعْتَقِدُ أَنَّ الْخُطَّةَ وَاضِحَةٌ؟",
        "fr": "Crois-tu que le plan est clair ?"
      },
      {
        "speaker": "بَاحِث",
        "ar": "أَعْتَقِدُ أَنَّهَا تَحْتَاجُ إِلَى تَعْدِيلٍ.",
        "fr": "Je pense qu’elle a besoin d’être modifiée."
      },
      {
        "speaker": "مُحَاوِر",
        "ar": "مَاذَا تَقْتَرِحُ؟",
        "fr": "Que proposes-tu ?"
      },
      {
        "speaker": "بَاحِث",
        "ar": "أَقْتَرِحُ أَنْ تُنْشَرَ التَّفَاصِيلُ.",
        "fr": "Je propose que les détails soient publiés."
      }
    ],
    "writing": {
      "prompt": "Analyse huit phrases longues en entourant chaque subordonnant. Rédige cinq nouvelles phrases avec relative et complétive.",
      "modelAr": "أَعْتَقِدُ أَنَّ الْكِتَابَ الَّذِي قَرَأْتُهُ مُفِيدٌ. أُرِيدُ أَنْ أَفْهَمَ الْفِكْرَةَ الَّتِي شَرَحْتَهَا.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b2-09-v2",
    "level": "B2",
    "number": 9,
    "month": 14,
    "emoji": "🎓",
    "title": "Éducation et transformations sociales",
    "minutes": 130,
    "goal": "Débattre d’enjeux éducatifs avec faits, réserves et solutions.",
    "grammar": [
      {
        "title": "Vocabulaire institutionnel",
        "body": "مُسَاوَاةٌ = égalité ; فُرَصٌ مُتَكَافِئَةٌ = chances égales ; تَسَرُّبٌ مَدْرَسِيٌّ = décrochage scolaire. Prends garde à la différence entre l’expression journalistique et le vocabulaire de conversation."
      },
      {
        "title": "Cause et conséquence multiples",
        "body": "نَتِيجَةً لِـ = en raison de ; مِمَّا يُؤَدِّي إِلَى = ce qui conduit à. Construire une chaîne causale ne suffit pas à démontrer une relation : source et contexte restent nécessaires."
      },
      {
        "title": "Solution conditionnée",
        "body": "يُمْكِنُ أَنْ يُسَاهِمَ... شَرِيطَةَ أَنْ... = ... peut contribuer à condition que... ; يَنْبَغِي تَقْيِيمُ الْأَثَرِ = il convient d’évaluer l’impact."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "تُوَاجِهُ بَعْضُ الْمَدَارِسِ تَحَدِّيَاتٍ تَتَعَلَّقُ بِتَكَافُؤِ الْفُرَصِ. فَقَدْ تَخْتَلِفُ الْمَوَارِدُ الْمُتَاحَةُ مِنْ مِنْطَقَةٍ إِلَى أُخْرَى، مِمَّا يُؤَثِّرُ فِي ظُرُوفِ التَّعَلُّمِ. وَيَرَى مُتَخَصِّصُونَ أَنَّ تَدْعِيمَ الْمُدَرِّسِينَ وَتَحْسِينَ التِّقْنِيَّاتِ قَدْ يُسَاهِمَانِ فِي تَقْلِيلِ الْفَوَارِقِ، شَرِيطَةَ تَقْيِيمِ النَّتَائِجِ بِانْتِظَامٍ.",
      "fr": "Certaines écoles rencontrent des difficultés d’égalité des chances. Les ressources disponibles varient selon les régions, ce qui affecte les conditions d’apprentissage. Selon des spécialistes, le soutien aux enseignants et l’amélioration des équipements peuvent réduire les écarts, à condition d’évaluer régulièrement les résultats."
    },
    "examples": [
      {
        "ar": "مَا التَّحَدِّي الْأَكْبَرُ؟",
        "fr": "Quel est le plus grand défi ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "تَحَدٍّ",
              "تَحَدٍّ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "تَفَاوُتُ الْمَوَارِدِ بَيْنَ الْمَنَاطِقِ.",
        "fr": "L’inégalité des ressources entre régions.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "وَمَا الْحَلُّ الْمُمْكِنُ؟",
        "fr": "Et quelle solution ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "وَاجَهَ",
        "present": "يُوَاجِهُ",
        "masdar": "مُوَاجَهَةٌ",
        "fr": "affronter",
        "lookup": "واجه"
      },
      {
        "past": "سَاهَمَ",
        "present": "يُسَاهِمُ",
        "masdar": "مُسَاهَمَةٌ",
        "fr": "contribuer",
        "lookup": "ساهم"
      },
      {
        "past": "قَيَّمَ",
        "present": "يُقَيِّمُ",
        "masdar": "تَقْيِيمٌ",
        "fr": "évaluer",
        "lookup": "قيم"
      }
    ],
    "words": [
      [
        "تَعْلِيمٌ",
        "Enseignement"
      ],
      [
        "مُسَاوَاةٌ",
        "Égalité"
      ],
      [
        "تَكَافُؤٌ",
        "Équivalence / égalité des chances"
      ],
      [
        "فُرْصَةٌ",
        "Chance / occasion"
      ],
      [
        "مَوْرِدٌ",
        "Ressource"
      ],
      [
        "ظَرْفٌ",
        "Condition / circonstance"
      ],
      [
        "فَارِقٌ",
        "Écart"
      ],
      [
        "تَحَدٍّ",
        "Défi"
      ],
      [
        "تَقْيِيمٌ",
        "Évaluation"
      ],
      [
        "أَثَرٌ",
        "Impact"
      ],
      [
        "تَدْعِيمٌ",
        "Renforcement / soutien"
      ],
      [
        "مِنْطَقَةٌ",
        "Région"
      ],
      [
        "اِخْتِلَافٌ",
        "Variation"
      ],
      [
        "مُتَخَصِّصٌ",
        "Spécialiste"
      ],
      [
        "شَرِيطَةَ أَنْ",
        "À condition que"
      ],
      [
        "بِانْتِظَامٍ",
        "Régulièrement"
      ]
    ],
    "dialect": [
      {
        "msa": "التَّعْلِيمُ مُهِمٌّ لِلْجَمِيعِ.",
        "levant": "التَّعْلِيمْ مُهِمّْ لِلْكِلّ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "الْكِلّ = tous en levantin ; le lexique abstrait demeure largement commun."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Que signifie تَكَافُؤُ الْفُرَصِ ?",
        "options": [
          "Régulièrement",
          "affronter",
          "Égalité des chances"
        ],
        "answer": 2,
        "why": "Expression sociopolitique."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de قَيَّمَ ?",
        "options": [
          "تَقْيِيمٌ",
          "بِانْتِظَامٍ",
          "مُوَاجَهَةٌ"
        ],
        "answer": 0,
        "why": "Forme II."
      },
      {
        "type": "choice",
        "prompt": "Que signifie شَرِيطَةَ أَنْ ?",
        "options": [
          "Une comparaison",
          "À condition que",
          "Une possibilité"
        ],
        "answer": 1,
        "why": "Introduit une condition restrictive."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « تَكَافُؤٌ » ?",
        "options": [
          "Enseignement",
          "Équivalence / égalité des chances",
          "Égalité"
        ],
        "answer": 1,
        "why": "تَكَافُؤٌ = Équivalence / égalité des chances. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « تَحَدٍّ » ?",
        "options": [
          "Chance / occasion",
          "Ressource",
          "Défi"
        ],
        "answer": 2,
        "why": "تَحَدٍّ = Défi. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « اِخْتِلَافٌ » ?",
        "options": [
          "Variation",
          "Écart",
          "Défi"
        ],
        "answer": 0,
        "why": "اِخْتِلَافٌ = Variation. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de وَاجَهَ ?",
        "options": [
          "مُوَاجَهَةٌ",
          "مُسَاهَمَةٌ",
          "تَقْيِيمٌ"
        ],
        "answer": 0,
        "why": "وَاجَهَ – يُوَاجِهُ – مُوَاجَهَةٌ (affronter)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de سَاهَمَ ?",
        "options": [
          "مُسَاوَاةٌ",
          "مُسَاهَمَةٌ",
          "تَكَافُؤٌ"
        ],
        "answer": 1,
        "why": "سَاهَمَ – يُسَاهِمُ – مُسَاهَمَةٌ (contribuer)."
      },
      {
        "type": "input",
        "prompt": "Écris « Égalité » en arabe (forme du lexique).",
        "answer": "مُسَاوَاةٌ",
        "accepted": [
          "مساواة"
        ],
        "why": "مُسَاوَاةٌ signifie « Égalité ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مُدَرِّسَة",
        "ar": "مَا التَّحَدِّي الْأَكْبَرُ؟",
        "fr": "Quel est le plus grand défi ?"
      },
      {
        "speaker": "بَاحِث",
        "ar": "تَفَاوُتُ الْمَوَارِدِ بَيْنَ الْمَنَاطِقِ.",
        "fr": "L’inégalité des ressources entre régions."
      },
      {
        "speaker": "مُدَرِّسَة",
        "ar": "وَمَا الْحَلُّ الْمُمْكِنُ؟",
        "fr": "Et quelle solution ?"
      },
      {
        "speaker": "بَاحِث",
        "ar": "تَدْعِيمُ الْمَدَارِسِ مَعَ تَقْيِيمِ الْأَثَرِ.",
        "fr": "Soutenir les écoles tout en évaluant l’impact."
      }
    ],
    "writing": {
      "prompt": "Rédige une note de 300 mots proposant deux mesures éducatives, leurs coûts possibles, limites et indicateurs de résultats.",
      "modelAr": "تُسَاعِدُ الْمَوَارِدُ الْجَيِّدَةُ عَلَى تَحْسِينِ التَّعْلِيمِ. وَلَكِنْ يَنْبَغِي تَقْيِيمُ النَّتَائِجِ، شَرِيطَةَ أَنْ تَكُونَ الْمَعَايِيرُ وَاضِحَةً.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b2-10-v2",
    "level": "B2",
    "number": 10,
    "month": 15,
    "emoji": "💻",
    "title": "Économie, technologie et emploi",
    "minutes": 130,
    "goal": "Lire une analyse économique accessible et commenter ses implications.",
    "grammar": [
      {
        "title": "Lexique économique de base",
        "body": "سُوقُ الْعَمَلِ = marché de l’emploi ; إِنْتَاجِيَّةٌ = productivité ; اِسْتِثْمَارٌ = investissement ; تَحَوُّلٌ رَقْمِيٌّ = transformation numérique."
      },
      {
        "title": "Relations prudentes",
        "body": "قَدْ يُؤَدِّي إِلَى = pourrait conduire à ; يَتَوَقَّفُ عَلَى = dépend de ; لَيْسَ بِالضَّرُورَةِ = pas nécessairement. Évite de présenter une corrélation comme une cause démontrée."
      },
      {
        "title": "Comparer les scénarios",
        "body": "فِي الْمَدَى الْقَصِيرِ = à court terme ; عَلَى الْمَدَى الْبَعِيدِ = à long terme ; مِنْ جَانِبٍ آخَرَ = d’autre part. Ces expressions structurent les conséquences positives et négatives."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "يُغَيِّرُ التَّحَوُّلُ الرَّقْمِيُّ طَبِيعَةَ بَعْضِ الْوَظَائِفِ. فَقَدْ تُسَاعِدُ الْأَدَوَاتُ الْجَدِيدَةُ عَلَى زِيَادَةِ الْإِنْتَاجِيَّةِ، وَلَكِنَّهَا تَتَطَلَّبُ مَهَارَاتٍ مُخْتَلِفَةً. وَفِي الْمَدَى الْقَصِيرِ قَدْ تَظْهَرُ صُعُوبَاتٌ فِي التَّكَيُّفِ، أَمَّا عَلَى الْمَدَى الْبَعِيدِ فَيَتَوَقَّفُ النَّجَاحُ عَلَى التَّدْرِيبِ وَالسِّيَاسَاتِ الْمُنَاسِبَةِ.",
      "fr": "La transformation numérique modifie certains emplois. Les nouveaux outils peuvent accroître la productivité, mais exigent d’autres compétences. À court terme, l’adaptation peut être difficile ; sur le long terme, la réussite dépend de la formation et des politiques mises en place."
    },
    "examples": [
      {
        "ar": "هَلْ سَتُغَيِّرُ التِّقْنِيَةُ الْوَظَائِفَ؟",
        "fr": "La technologie modifiera-t-elle les emplois ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "قَدْ تُغَيِّرُ بَعْضَهَا، وَلَكِنَّ النَّتَائِجَ غَيْرُ مُؤَكَّدَةٍ.",
        "fr": "Peut-être certains, mais les résultats sont incertains.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "مَاذَا نَحْتَاجُ؟",
        "fr": "De quoi avons-nous besoin ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "أَدَّى",
        "present": "يُؤَدِّي",
        "masdar": "تَأْدِيَةٌ",
        "fr": "conduire à / accomplir",
        "lookup": "أدى"
      },
      {
        "past": "تَطَلَّبَ",
        "present": "يَتَطَلَّبُ",
        "masdar": "تَطَلُّبٌ",
        "fr": "nécessiter",
        "lookup": "تطلب"
      },
      {
        "past": "تَكَيَّفَ",
        "present": "يَتَكَيَّفُ",
        "masdar": "تَكَيُّفٌ",
        "fr": "s’adapter",
        "lookup": "تكيف"
      }
    ],
    "words": [
      [
        "اِقْتِصَادٌ",
        "Économie"
      ],
      [
        "سُوقُ الْعَمَلِ",
        "Marché du travail"
      ],
      [
        "وَظِيفَةٌ",
        "Emploi"
      ],
      [
        "إِنْتَاجِيَّةٌ",
        "Productivité"
      ],
      [
        "اِسْتِثْمَارٌ",
        "Investissement"
      ],
      [
        "تَحَوُّلٌ",
        "Transformation"
      ],
      [
        "رَقْمِيٌّ",
        "Numérique"
      ],
      [
        "تَكَيُّفٌ",
        "Adaptation"
      ],
      [
        "مَهَارَةٌ",
        "Compétence"
      ],
      [
        "سِيَاسَةٌ",
        "Politique"
      ],
      [
        "تَدْرِيبٌ",
        "Formation"
      ],
      [
        "مَدًى",
        "Horizon / portée"
      ],
      [
        "بَعِيدٌ",
        "Lointain"
      ],
      [
        "قَصِيرٌ",
        "Court"
      ],
      [
        "تَحْلِيلٌ",
        "Analyse"
      ],
      [
        "نَجَاحٌ",
        "Réussite"
      ]
    ],
    "dialect": [
      {
        "msa": "بَدَّلَتِ التِّقْنِيَةُ الْعَمَلَ.",
        "levant": "التِّقْنِيَّةْ غَيَّرِتْ الشُّغْلْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "شُغْلْ = travail, très usuel au Levant, là où l’écrit emploie عَمَلٌ."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Que signifie إِنْتَاجِيَّةٌ ?",
        "options": [
          "Productivité",
          "Un récit",
          "Une conséquence"
        ],
        "answer": 0,
        "why": "Vocabulaire économique."
      },
      {
        "type": "choice",
        "prompt": "Quelle expression signifie « à long terme » ?",
        "options": [
          "تَكَيُّفٌ",
          "عَلَى الْمَدَى الْبَعِيدِ",
          "مَهَارَةٌ"
        ],
        "answer": 1,
        "why": "Outil d’analyse temporelle."
      },
      {
        "type": "choice",
        "prompt": "Quel verbe signifie « s’adapter » ?",
        "options": [
          "تَدْرِيبٌ",
          "مَدًى",
          "تَكَيَّفَ"
        ],
        "answer": 2,
        "why": "تَكَيَّفَ – يَتَكَيَّفُ – تَكَيُّفٌ."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « وَظِيفَةٌ » ?",
        "options": [
          "Emploi",
          "Économie",
          "Marché du travail"
        ],
        "answer": 0,
        "why": "وَظِيفَةٌ = Emploi. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « تَكَيُّفٌ » ?",
        "options": [
          "Productivité",
          "Adaptation",
          "Investissement"
        ],
        "answer": 1,
        "why": "تَكَيُّفٌ = Adaptation. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « بَعِيدٌ » ?",
        "options": [
          "Numérique",
          "Adaptation",
          "Lointain"
        ],
        "answer": 2,
        "why": "بَعِيدٌ = Lointain. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَدَّى ?",
        "options": [
          "تَأْدِيَةٌ",
          "تَكَيُّفٌ",
          "مَهَارَةٌ"
        ],
        "answer": 0,
        "why": "أَدَّى – يُؤَدِّي – تَأْدِيَةٌ (conduire à / accomplir)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَطَلَّبَ ?",
        "options": [
          "تَدْرِيبٌ",
          "تَطَلُّبٌ",
          "مَدًى"
        ],
        "answer": 1,
        "why": "تَطَلَّبَ – يَتَطَلَّبُ – تَطَلُّبٌ (nécessiter)."
      },
      {
        "type": "input",
        "prompt": "Écris « Marché du travail » en arabe (forme du lexique).",
        "answer": "سُوقُ الْعَمَلِ",
        "accepted": [
          "سوق العمل"
        ],
        "why": "سُوقُ الْعَمَلِ signifie « Marché du travail ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مُحَلِّل",
        "ar": "هَلْ سَتُغَيِّرُ التِّقْنِيَةُ الْوَظَائِفَ؟",
        "fr": "La technologie modifiera-t-elle les emplois ?"
      },
      {
        "speaker": "خَبِيرَة",
        "ar": "قَدْ تُغَيِّرُ بَعْضَهَا، وَلَكِنَّ النَّتَائِجَ غَيْرُ مُؤَكَّدَةٍ.",
        "fr": "Peut-être certains, mais les résultats sont incertains."
      },
      {
        "speaker": "مُحَلِّل",
        "ar": "مَاذَا نَحْتَاجُ؟",
        "fr": "De quoi avons-nous besoin ?"
      },
      {
        "speaker": "خَبِيرَة",
        "ar": "نَحْتَاجُ إِلَى التَّدْرِيبِ وَالتَّكَيُّفِ.",
        "fr": "De formation et d’adaptation."
      }
    ],
    "writing": {
      "prompt": "Rédige une analyse équilibrée de 300 mots sur l’IA et l’emploi, avec deux scénarios, leurs conditions et limites.",
      "modelAr": "قَدْ تُحَسِّنُ الْأَدَوَاتُ الرَّقْمِيَّةُ الْإِنْتَاجِيَّةَ، وَلَكِنَّهَا تَتَطَلَّبُ تَدْرِيبًا مُنَاسِبًا. وَيَتَوَقَّفُ الْأَثَرُ عَلَى الْمِهَنِ وَالسِّيَاسَاتِ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b2-11-v2",
    "level": "B2",
    "number": 11,
    "month": 15,
    "emoji": "📖",
    "title": "Culture, histoire et littérature",
    "minutes": 130,
    "goal": "Commenter un texte narratif, décrire une perspective et interpréter un implicite.",
    "grammar": [
      {
        "title": "Décrire le narrateur",
        "body": "الرَّاوِي = narrateur ; الشَّخْصِيَّةُ الرَّئِيسِيَّةُ = personnage principal ; وَجْهَةُ النَّظَرِ = point de vue. Cherche qui raconte et quelles informations sont accessibles au lecteur."
      },
      {
        "title": "Temps et arrière-plan",
        "body": "بَيْنَمَا = tandis que ; فِي حِينِ أَنَّ = alors que ; وَقَدْ = et de fait / alors que selon le contexte. Ces marqueurs permettent d’articuler action principale et situation environnante."
      },
      {
        "title": "Interpréter sans surinterpréter",
        "body": "يُوحِي النَّصُّ بِأَنَّ... = le texte suggère que... ; يُمْكِنُ تَأْوِيلُ... = on peut interpréter... Distingue l’élément observé dans le texte et l’hypothèse du lecteur."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "فِي قِصَّةٍ قَصِيرَةٍ يَعُودُ شَابٌّ إِلَى مَدِينَتِهِ بَعْدَ غِيَابٍ طَوِيلٍ. يَجِدُ الشَّوَارِعَ قَدْ تَغَيَّرَتْ، وَلَكِنَّ رَائِحَةَ الْخُبْزِ تُذَكِّرُهُ بِطُفُولَتِهِ. بَيْنَمَا يَسِيرُ فِي الْحَيِّ، يَتَذَكَّرُ أَصْدِقَاءَهُ وَأَحْلَامَهُ الْقَدِيمَةَ. يُوحِي النَّصُّ بِأَنَّ الْمَكَانَ يَحْمِلُ ذِكْرَيَاتٍ لَا تَخْتَفِي بِسُهُولَةٍ.",
      "fr": "Dans une courte histoire, un jeune homme revient dans sa ville après une longue absence. Les rues ont changé, mais l’odeur du pain lui rappelle son enfance. En marchant dans le quartier, il se souvient de ses amis et de ses anciens rêves. Le texte suggère que les lieux conservent des souvenirs durables."
    },
    "examples": [
      {
        "ar": "مَنْ هِيَ الشَّخْصِيَّةُ الرَّئِيسِيَّةُ؟",
        "fr": "Qui est le personnage principal ?",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "شَخْصِيَّةٌ",
              "شَخْصِيَّةٌ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "شَابٌّ يَعُودُ إِلَى مَدِينَتِهِ.",
        "fr": "Un jeune homme qui revient dans sa ville.",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "مَا الَّذِي يُذَكِّرُهُ بِالْمَاضِي؟",
        "fr": "Qu’est-ce qui lui rappelle le passé ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "أَوْحَى",
        "present": "يُوحِي",
        "masdar": "إِيحَاءٌ",
        "fr": "suggérer / inspirer",
        "lookup": "أوحى"
      },
      {
        "past": "تَذَكَّرَ",
        "present": "يَتَذَكَّرُ",
        "masdar": "تَذَكُّرٌ",
        "fr": "se souvenir",
        "lookup": "تذكر"
      },
      {
        "past": "اِخْتَفَى",
        "present": "يَخْتَفِي",
        "masdar": "اِخْتِفَاءٌ",
        "fr": "disparaître",
        "lookup": "اختفى"
      }
    ],
    "words": [
      [
        "رَاوٍ",
        "Narrateur"
      ],
      [
        "شَخْصِيَّةٌ",
        "Personnage"
      ],
      [
        "حَبْكَةٌ",
        "Intrigue"
      ],
      [
        "قِصَّةٌ",
        "Histoire"
      ],
      [
        "رِوَايَةٌ",
        "Roman"
      ],
      [
        "مَنْظُورٌ",
        "Perspective"
      ],
      [
        "وَجْهَةُ النَّظَرِ",
        "Point de vue"
      ],
      [
        "ذِكْرَى",
        "Souvenir"
      ],
      [
        "طُفُولَةٌ",
        "Enfance"
      ],
      [
        "غِيَابٌ",
        "Absence"
      ],
      [
        "رَائِحَةٌ",
        "Odeur"
      ],
      [
        "تَأْوِيلٌ",
        "Interprétation"
      ],
      [
        "إِيحَاءٌ",
        "Suggestion / évocation"
      ],
      [
        "سِيَاقٌ",
        "Contexte"
      ],
      [
        "دَلَالَةٌ",
        "Signification"
      ],
      [
        "بَيْنَمَا",
        "Tandis que"
      ]
    ],
    "dialect": [
      {
        "msa": "بِتْذَكَّرْ أَيَّامْ الطُّفُولَةْ.",
        "levant": "بِتْذَكَّرْ أَيَّامْ الطُّفُولِةْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "Le présent préfixé بِـ est courant au Levant ; le lexique de la mémoire est largement partagé."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Que signifie وَجْهَةُ النَّظَرِ ?",
        "options": [
          "Une comparaison",
          "Point de vue",
          "Une possibilité"
        ],
        "answer": 1,
        "why": "Expression critique."
      },
      {
        "type": "choice",
        "prompt": "Quelle formule présente une interprétation prudente ?",
        "options": [
          "رَائِحَةٌ",
          "تَأْوِيلٌ",
          "يُوحِي النَّصُّ بِأَنَّ..."
        ],
        "answer": 2,
        "why": "« Le texte suggère que... »."
      },
      {
        "type": "choice",
        "prompt": "Que signifie بَيْنَمَا ?",
        "options": [
          "Tandis que",
          "Roman",
          "Perspective"
        ],
        "answer": 0,
        "why": "Connecteur de simultanéité."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « حَبْكَةٌ » ?",
        "options": [
          "Narrateur",
          "Personnage",
          "Intrigue"
        ],
        "answer": 2,
        "why": "حَبْكَةٌ = Intrigue. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « ذِكْرَى » ?",
        "options": [
          "Souvenir",
          "Histoire",
          "Roman"
        ],
        "answer": 0,
        "why": "ذِكْرَى = Souvenir. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « إِيحَاءٌ » ?",
        "options": [
          "Point de vue",
          "Suggestion / évocation",
          "Souvenir"
        ],
        "answer": 1,
        "why": "إِيحَاءٌ = Suggestion / évocation. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de أَوْحَى ?",
        "options": [
          "إِيحَاءٌ",
          "تَذَكُّرٌ",
          "اِخْتِفَاءٌ"
        ],
        "answer": 0,
        "why": "أَوْحَى – يُوحِي – إِيحَاءٌ (suggérer / inspirer)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَذَكَّرَ ?",
        "options": [
          "شَخْصِيَّةٌ",
          "تَذَكُّرٌ",
          "حَبْكَةٌ"
        ],
        "answer": 1,
        "why": "تَذَكَّرَ – يَتَذَكَّرُ – تَذَكُّرٌ (se souvenir)."
      },
      {
        "type": "input",
        "prompt": "Écris « Personnage » en arabe (forme du lexique).",
        "answer": "شَخْصِيَّةٌ",
        "accepted": [
          "شخصية"
        ],
        "why": "شَخْصِيَّةٌ signifie « Personnage ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "قَارِئ",
        "ar": "مَنْ هِيَ الشَّخْصِيَّةُ الرَّئِيسِيَّةُ؟",
        "fr": "Qui est le personnage principal ?"
      },
      {
        "speaker": "نَاقِدَة",
        "ar": "شَابٌّ يَعُودُ إِلَى مَدِينَتِهِ.",
        "fr": "Un jeune homme qui revient dans sa ville."
      },
      {
        "speaker": "قَارِئ",
        "ar": "مَا الَّذِي يُذَكِّرُهُ بِالْمَاضِي؟",
        "fr": "Qu’est-ce qui lui rappelle le passé ?"
      },
      {
        "speaker": "نَاقِدَة",
        "ar": "رَائِحَةُ الْخُبْزِ وَالشَّوَارِعُ الْقَدِيمَةُ.",
        "fr": "L’odeur du pain et les anciennes rues."
      }
    ],
    "writing": {
      "prompt": "Rédige un commentaire de 300 mots : résumé objectif, deux indices textuels, interprétation prudente et conclusion.",
      "modelAr": "تَرْوِي الْقِصَّةُ عَوْدَةَ شَابٍّ إِلَى مَدِينَتِهِ. وَيُوحِي النَّصُّ بِأَنَّ الذِّكْرَيَاتِ تَرْتَبِطُ بِالْمَكَانِ. وَلَكِنَّ هَذَا التَّأْوِيلَ لَيْسَ الْوَحِيدَ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  },
  {
    "id": "b2-12-v2",
    "level": "B2",
    "number": 12,
    "month": 16,
    "emoji": "🏆",
    "title": "Synthèse B2 et examen blanc",
    "minutes": 130,
    "goal": "Produire des textes structurés, résumer des sources et débattre avec nuance.",
    "grammar": [
      {
        "title": "Compréhension fine",
        "body": "Pour un document long, isole la thèse, les arguments, les objections, les exemples et la portée des conclusions. Distingue le discours direct du rapporté, et relève les marques d’incertitude."
      },
      {
        "title": "Production étendue",
        "body": "Écris un essai structuré de 300 à 400 mots avec introduction, deux ou trois axes et conclusion nuancée. Entraîne-toi également à synthétiser deux documents contradictoires sans confondre leurs auteurs."
      },
      {
        "title": "Interaction B2",
        "body": "Prépare une prise de parole de 5 minutes avec questions de suivi, reformulations et objections. Une évaluation crédible B2 réclame aussi compréhension d’enregistrements authentiques, conversation et correction externe ; le score de l’application n’est pas une certification."
      }
    ],
    "reading": {
      "title": "نَصٌّ لِلْقِرَاءَةِ وَالْفَهْمِ",
      "ar": "تَشْهَدُ الْمُجْتَمَعَاتُ تَغَيُّرَاتٍ سَرِيعَةً فِي التِّقْنِيَةِ وَالتَّعْلِيمِ وَسُوقِ الْعَمَلِ. يَرَى بَعْضُ الْبَاحِثِينَ أَنَّ هَذِهِ التَّغَيُّرَاتِ تُوَفِّرُ فُرَصًا جَدِيدَةً، فِي حِينِ يُحَذِّرُ آخَرُونَ مِنْ تَزَايُدِ الْفَوَارِقِ. وَعَلَى الرَّغْمِ مِنْ صُعُوبَةِ التَّنَبُّؤِ بِالْمُسْتَقْبَلِ، يَبْدُو أَنَّ التَّعَلُّمَ الْمُسْتَمِرَّ وَالْحِوَارَ الْعَامَّ يُسَاعِدَانِ عَلَى مُوَاجَهَةِ التَّحَدِّيَاتِ. وَمَعَ ذَلِكَ، لَا يُمْكِنُ لِأَيِّ حَلٍّ وَاحِدٍ أَنْ يُنَاسِبَ جَمِيعَ الْبِيئَاتِ.",
      "fr": "Les sociétés connaissent de rapides changements technologiques, éducatifs et professionnels. Certains chercheurs y voient de nouvelles possibilités, d’autres alertent sur l’accroissement des écarts. Malgré l’incertitude sur l’avenir, l’apprentissage continu et le débat public semblent aider à affronter les défis. Aucune solution unique ne convient toutefois à tous les contextes."
    },
    "examples": [
      {
        "ar": "مَا رَأْيُكَ فِي التَّحَوُّلِ الرَّقْمِيِّ؟",
        "fr": "Quel est ton avis sur la transformation numérique ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      },
      {
        "ar": "أَرَى أَنَّهُ يُوَفِّرُ فُرَصًا، وَلَكِنَّهُ يَطْرَحُ تَحَدِّيَاتٍ.",
        "fr": "Je crois qu’elle offre des occasions mais pose des défis.",
        "analysis": {
          "verbs": [],
          "nouns": [
            [
              "تَحَدٍّ",
              "تَحَدٍّ"
            ]
          ],
          "adjectives": []
        }
      },
      {
        "ar": "هَلْ هُنَاكَ حَلٌّ وَاحِدٌ؟",
        "fr": "Existe-t-il une seule solution ?",
        "analysis": {
          "verbs": [],
          "nouns": [],
          "adjectives": []
        }
      }
    ],
    "verbs": [
      {
        "past": "حَذَّرَ",
        "present": "يُحَذِّرُ",
        "masdar": "تَحْذِيرٌ",
        "fr": "mettre en garde",
        "lookup": "حذر"
      },
      {
        "past": "تَنَبَّأَ",
        "present": "يَتَنَبَّأُ",
        "masdar": "تَنَبُّؤٌ",
        "fr": "prévoir / prédire",
        "lookup": "تنبأ"
      },
      {
        "past": "وَاجَهَ",
        "present": "يُوَاجِهُ",
        "masdar": "مُوَاجَهَةٌ",
        "fr": "faire face à",
        "lookup": "واجه"
      }
    ],
    "words": [
      [
        "مُجْتَمَعٌ",
        "Société"
      ],
      [
        "تَغَيُّرٌ",
        "Changement"
      ],
      [
        "تَحَدٍّ",
        "Défi"
      ],
      [
        "فُرْصَةٌ",
        "Occasion"
      ],
      [
        "فَارِقٌ",
        "Écart"
      ],
      [
        "مُسْتَقْبَلٌ",
        "Avenir"
      ],
      [
        "مُسْتَمِرٌّ",
        "Continu"
      ],
      [
        "حِوَارٌ",
        "Dialogue"
      ],
      [
        "مَوْقِفٌ",
        "Position"
      ],
      [
        "خُلَاصَةٌ",
        "Synthèse"
      ],
      [
        "حُجَّةٌ",
        "Argument"
      ],
      [
        "اِعْتِرَاضٌ",
        "Objection"
      ],
      [
        "تَنَبُّؤٌ",
        "Prévision"
      ],
      [
        "مُوَاجَهَةٌ",
        "Confrontation"
      ],
      [
        "سِيَاقٌ",
        "Contexte"
      ],
      [
        "تَقْيِيمٌ",
        "Évaluation"
      ]
    ],
    "dialect": [
      {
        "msa": "الْمَوْضُوعُ مُعَقَّدٌ.",
        "levant": "الْمَوْضُوعْ مُعَقَّدْ.",
        "fr": "Équivalent oral levantin (approximatif).",
        "note": "La proximité lexicale ne dispense pas d’apprendre les systèmes morphosyntaxiques du dialecte."
      }
    ],
    "quiz": [
      {
        "type": "choice",
        "prompt": "Quelle durée d’exposé est proposée dans le bilan ?",
        "options": [
          "Une cause",
          "Une comparaison",
          "5 minutes"
        ],
        "answer": 2,
        "why": "Entraînement, non certification officielle."
      },
      {
        "type": "choice",
        "prompt": "Que signifie تَنَبُّؤٌ ?",
        "options": [
          "Prévision / prédiction",
          "Société",
          "Changement"
        ],
        "answer": 0,
        "why": "Nom verbal de تَنَبَّأَ."
      },
      {
        "type": "choice",
        "prompt": "Que signifie فِي آنٍ وَاحِدٍ ?",
        "options": [
          "Occasion",
          "En même temps",
          "Écart"
        ],
        "answer": 1,
        "why": "Expression soutenue utile à la synthèse."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « تَحَدٍّ » ?",
        "options": [
          "Société",
          "Défi",
          "Changement"
        ],
        "answer": 1,
        "why": "تَحَدٍّ = Défi. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « حِوَارٌ » ?",
        "options": [
          "Occasion",
          "Écart",
          "Dialogue"
        ],
        "answer": 2,
        "why": "حِوَارٌ = Dialogue. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le sens de « تَنَبُّؤٌ » ?",
        "options": [
          "Prévision",
          "Continu",
          "Dialogue"
        ],
        "answer": 0,
        "why": "تَنَبُّؤٌ = Prévision. Apprends le mot avec sa vocalisation et son contexte."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de حَذَّرَ ?",
        "options": [
          "تَحْذِيرٌ",
          "حِوَارٌ",
          "مَوْقِفٌ"
        ],
        "answer": 0,
        "why": "حَذَّرَ – يُحَذِّرُ – تَحْذِيرٌ (mettre en garde)."
      },
      {
        "type": "choice",
        "prompt": "Quel est le maṣdar de تَنَبَّأَ ?",
        "options": [
          "حُجَّةٌ",
          "تَنَبُّؤٌ",
          "اِعْتِرَاضٌ"
        ],
        "answer": 1,
        "why": "تَنَبَّأَ – يَتَنَبَّأُ – تَنَبُّؤٌ (prévoir / prédire)."
      },
      {
        "type": "input",
        "prompt": "Écris « Changement » en arabe (forme du lexique).",
        "answer": "تَغَيُّرٌ",
        "accepted": [
          "تغير"
        ],
        "why": "تَغَيُّرٌ signifie « Changement ». Les voyelles brèves sont facultatives à la saisie."
      }
    ],
    "dialogue": [
      {
        "speaker": "مُمتحِن",
        "ar": "مَا رَأْيُكَ فِي التَّحَوُّلِ الرَّقْمِيِّ؟",
        "fr": "Quel est ton avis sur la transformation numérique ?"
      },
      {
        "speaker": "مُتَعَلِّم",
        "ar": "أَرَى أَنَّهُ يُوَفِّرُ فُرَصًا، وَلَكِنَّهُ يَطْرَحُ تَحَدِّيَاتٍ.",
        "fr": "Je crois qu’elle offre des occasions mais pose des défis."
      },
      {
        "speaker": "مُمتحِن",
        "ar": "هَلْ هُنَاكَ حَلٌّ وَاحِدٌ؟",
        "fr": "Existe-t-il une seule solution ?"
      },
      {
        "speaker": "مُتَعَلِّم",
        "ar": "لَا، يَتَوَقَّفُ الْأَمْرُ عَلَى السِّيَاقِ وَالْمَوَارِدِ.",
        "fr": "Non, cela dépend du contexte et des ressources."
      }
    ],
    "writing": {
      "prompt": "Épreuve intégrée : synthèse de 180 mots de deux articles, essai de 350 mots, exposé de 5 minutes, débat de 10 minutes et grille d’auto-correction. L’évaluation orale humaine reste nécessaire.",
      "modelAr": "فِي رَأْيِي، التَّحَوُّلُ الرَّقْمِيُّ فُرْصَةٌ وَتَحَدٍّ فِي آنٍ وَاحِدٍ. وَمِنَ الضَّرُورِيِّ أَنْ نُقَيِّمَ آثَارَهُ بِصُورَةٍ دَقِيقَةٍ. وَلَا يُمْكِنُ تَعْمِيمُ حَلٍّ وَاحِدٍ عَلَى جَمِيعِ الْحَالَاتِ.",
      "criteria": [
        "Ai-je répondu au sujet et respecté la longueur ?",
        "Mes verbes, pronoms et accords sont-ils cohérents ?",
        "Ai-je utilisé les structures grammaticales du module ?",
        "Puis-je prononcer mon texte sans lire la traduction ?"
      ]
    },
    "sessions": [
      {
        "name": "Séance 1 · comprendre",
        "task": "Lis le cours, note cinq règles, écoute le texte puis explique son idée centrale sans traduction."
      },
      {
        "name": "Séance 2 · manipuler",
        "task": "Conjugue les verbes, apprends le vocabulaire et joue les dialogues dans les deux rôles."
      },
      {
        "name": "Séance 3 · produire",
        "task": "Rédige ta production, lis-la à voix haute, puis confronte-la au modèle proposé."
      },
      {
        "name": "Séance 4 · consolider",
        "task": "Passe le quiz sans regarder le cours, puis révise les cartes à J+1, J+3 et J+7."
      }
    ],
    "extension": "Lecture lente puis lecture naturelle ; un enregistrement natif reste à prévoir pour contrôler la compréhension et la prononciation."
  }
];
window.ARABIYYA_DATA = { lessons, roadmap };
