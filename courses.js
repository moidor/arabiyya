/* Arabiyya v2.0 — curriculum original A2 → B2, conçu pour un francophone.
   36 unités sur 16 mois estimatifs : textes, grammaire, morphologie, dialogues,
   tâches de production, quiz à réponses déterministes et lexique révisable.
   Les variantes levantines sont des approximations pédagogiques sans norme graphique unique.
   Le suivi de progression reste local. Un score de quiz n'atteste pas un niveau CECRL.
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
