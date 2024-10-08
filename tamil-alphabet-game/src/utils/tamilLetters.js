export const tamilLetters = {
  vowels: [
    { tamil: 'அ', romanized: 'a', mnemonic: 'அ as in apple' },
    { tamil: 'ஆ', romanized: 'aa', mnemonic: 'ஆ as in art' },
    { tamil: 'இ', romanized: 'i', mnemonic: 'இ as in ink' },
    { tamil: 'ஈ', romanized: 'ii', mnemonic: 'ஈ as in eel' },
    { tamil: 'உ', romanized: 'u', mnemonic: 'உ as in umbrella' },
    { tamil: 'ஊ', romanized: 'uu', mnemonic: 'ஊ as in ooze' },
    { tamil: 'எ', romanized: 'e', mnemonic: 'எ as in elephant' },
    { tamil: 'ஏ', romanized: 'ee', mnemonic: 'ஏ as in eight' },
    { tamil: 'ஐ', romanized: 'ai', mnemonic: 'ஐ as in ice' },
    { tamil: 'ஒ', romanized: 'o', mnemonic: 'ஒ as in orange' },
    { tamil: 'ஓ', romanized: 'oo', mnemonic: 'ஓ as in open' },
    { tamil: 'ஔ', romanized: 'au', mnemonic: 'ஔ as in owl' },
  ],
  basicConsonants: {
    label: "Basic Consonants",
    letters: [
      { tamil: 'க்', romanized: 'k', mnemonic: 'க் as in kit' },
      { tamil: 'ங்', romanized: 'ng', mnemonic: 'ங் as in ring' },
      { tamil: 'ச்', romanized: 'ch', mnemonic: 'ச் as in chat' },
      { tamil: 'ஞ்', romanized: 'nj', mnemonic: 'ஞ் as in ninja' },
      { tamil: 'ட்', romanized: 't', mnemonic: 'ட் as in toy' },
      { tamil: 'ண்', romanized: 'n', mnemonic: 'ண் as in nut' },
      { tamil: 'த்', romanized: 'th', mnemonic: 'த் as in thumb' },
      { tamil: 'ந்', romanized: 'n', mnemonic: 'ந் as in nest' },
      { tamil: 'ப்', romanized: 'p', mnemonic: 'ப் as in pen' },
      { tamil: 'ம்', romanized: 'm', mnemonic: 'ம் as in map' },
      { tamil: 'ய்', romanized: 'y', mnemonic: 'ய் as in yacht' },
      { tamil: 'ர்', romanized: 'r', mnemonic: 'ர் as in rat' },
      { tamil: 'ல்', romanized: 'l', mnemonic: 'ல் as in log' },
      { tamil: 'வ்', romanized: 'v', mnemonic: 'வ் as in van' },
      { tamil: 'ழ்', romanized: 'zh', mnemonic: 'ழ் as in maze (retroflex l)' },
      { tamil: 'ள்', romanized: 'l', mnemonic: 'ள் as in lull' },
      { tamil: 'ற்', romanized: 'r', mnemonic: 'ற் as in rot' },
      { tamil: 'ன்', romanized: 'n', mnemonic: 'ன் as in nap' },
    ],
  },
  vowelConsonantCombinations: [
    // Combinations for 'க்' (k)
    { tamil: 'க்', romanized: 'k', mnemonic: 'க் as in kit' },
    { tamil: 'க', romanized: 'ka', mnemonic: 'க as in car' },
    { tamil: 'கா', romanized: 'kaa', mnemonic: 'கா as in calm' },
    { tamil: 'கி', romanized: 'ki', mnemonic: 'கி as in king' },
    { tamil: 'கீ', romanized: 'kii', mnemonic: 'கீ as in keen' },
    { tamil: 'கு', romanized: 'ku', mnemonic: 'கு as in cook' },
    { tamil: 'கூ', romanized: 'kuu', mnemonic: 'கூ as in cool' },
    { tamil: 'கெ', romanized: 'ke', mnemonic: 'கெ as in kettle' },
    { tamil: 'கே', romanized: 'kee', mnemonic: 'கே as in cake' },
    { tamil: 'கை', romanized: 'kai', mnemonic: 'கை as in kite' },
    { tamil: 'கொ', romanized: 'ko', mnemonic: 'கொ as in cot' },
    { tamil: 'கோ', romanized: 'koo', mnemonic: 'கோ as in coat' },
    { tamil: 'கௌ', romanized: 'kau', mnemonic: 'கௌ as in cow' },

    // Combinations for 'ங்' (ng)
    { tamil: 'ங்', romanized: 'ng', mnemonic: 'ங் as in ring' },
    { tamil: 'ங', romanized: 'nga', mnemonic: 'ங as in gang' },
    { tamil: 'ஙா', romanized: 'ngaa', mnemonic: 'ஙா as in gang (long a)' },
    { tamil: 'ஙி', romanized: 'ngi', mnemonic: 'ஙி as in sing' },
    { tamil: 'ஙீ', romanized: 'ngii', mnemonic: 'ஙீ as in sing (long i)' },
    { tamil: 'ஙு', romanized: 'ngu', mnemonic: 'ஙு as in sung' },
    { tamil: 'ஙூ', romanized: 'nguu', mnemonic: 'ஙூ as in sung (long u)' },
    { tamil: 'ஙெ', romanized: 'nge', mnemonic: 'ஙெ as in get' },
    { tamil: 'ஙே', romanized: 'ngee', mnemonic: 'ஙே as in gate' },
    { tamil: 'ஙை', romanized: 'ngai', mnemonic: 'ஙை as in gain' },
    { tamil: 'ஙொ', romanized: 'ngo', mnemonic: 'ஙொ as in gone' },
    { tamil: 'ஙோ', romanized: 'ngoo', mnemonic: 'ஙோ as in goal' },
    { tamil: 'ஙௌ', romanized: 'ngau', mnemonic: 'ஙௌ as in gown' },

    // Combinations for 'ச்' (ch)
    { tamil: 'ச்', romanized: 'ch', mnemonic: 'ச் as in chat' },
    { tamil: 'ச', romanized: 'cha', mnemonic: 'ச as in chalk' },
    { tamil: 'சா', romanized: 'chaa', mnemonic: 'சா as in charm' },
    { tamil: 'சி', romanized: 'chi', mnemonic: 'சி as in chip' },
    { tamil: 'சீ', romanized: 'chii', mnemonic: 'சீ as in cheek' },
    { tamil: 'சு', romanized: 'chu', mnemonic: 'சு as in chute' },
    { tamil: 'சூ', romanized: 'chuu', mnemonic: 'சூ as in choose' },
    { tamil: 'செ', romanized: 'che', mnemonic: 'செ as in cherry' },
    { tamil: 'சே', romanized: 'chee', mnemonic: 'சே as in chase' },
    { tamil: 'சை', romanized: 'chai', mnemonic: 'சை as in chime' },
    { tamil: 'சொ', romanized: 'cho', mnemonic: 'சொ as in chop' },
    { tamil: 'சோ', romanized: 'choo', mnemonic: 'சோ as in choke' },
    { tamil: 'சௌ', romanized: 'chau', mnemonic: 'சௌ as in chow' },

    // Combinations for 'ஞ்' (nj)
    { tamil: 'ஞ்', romanized: 'nj', mnemonic: 'ஞ் as in ninja' },
    { tamil: 'ஞ', romanized: 'nja', mnemonic: 'ஞ as in ninja' },
    { tamil: 'ஞா', romanized: 'njaa', mnemonic: 'ஞா as in ninja (long a)' },
    { tamil: 'ஞி', romanized: 'nji', mnemonic: 'ஞி as in singe' },
    { tamil: 'ஞீ', romanized: 'njii', mnemonic: 'ஞீ as in singe (long i)' },
    { tamil: 'ஞு', romanized: 'nju', mnemonic: 'ஞு as in injure' },
    { tamil: 'ஞூ', romanized: 'njuu', mnemonic: 'ஞூ as in injure (long u)' },
    { tamil: 'ஞெ', romanized: 'nje', mnemonic: 'ஞெ as in jet' },
    { tamil: 'ஞே', romanized: 'njee', mnemonic: 'ஞே as in jade' },
    { tamil: 'ஞை', romanized: 'njai', mnemonic: 'ஞை as in giant' },
    { tamil: 'ஞொ', romanized: 'njo', mnemonic: 'ஞொ as in jog' },
    { tamil: 'ஞோ', romanized: 'njoo', mnemonic: 'ஞோ as in joke' },
    { tamil: 'ஞௌ', romanized: 'njau', mnemonic: 'ஞௌ as in joust' },

    // Combinations for 'ட்' (t)
    { tamil: 'ட்', romanized: 't', mnemonic: 'ட் as in toy' },
    { tamil: 'ட', romanized: 'ta', mnemonic: 'ட as in tap' },
    { tamil: 'டா', romanized: 'taa', mnemonic: 'டா as in tarp' },
    { tamil: 'டி', romanized: 'ti', mnemonic: 'டி as in tip' },
    { tamil: 'டீ', romanized: 'tii', mnemonic: 'டீ as in team' },
    { tamil: 'டு', romanized: 'tu', mnemonic: 'டு as in tub' },
    { tamil: 'டூ', romanized: 'tuu', mnemonic: 'டூ as in tune' },
    { tamil: 'டெ', romanized: 'te', mnemonic: 'டெ as in tent' },
    { tamil: 'டே', romanized: 'tee', mnemonic: 'டே as in tape' },
    { tamil: 'டை', romanized: 'tai', mnemonic: 'டை as in tie' },
    { tamil: 'டொ', romanized: 'to', mnemonic: 'டொ as in top' },
    { tamil: 'டோ', romanized: 'too', mnemonic: 'டோ as in tone' },
    { tamil: 'டௌ', romanized: 'tau', mnemonic: 'டௌ as in towel' },

    // Combinations for 'ண்' (n)
    { tamil: 'ண்', romanized: 'n', mnemonic: 'ண் as in nut' },
    { tamil: 'ண', romanized: 'na', mnemonic: 'ண as in nap' },
    { tamil: 'ணா', romanized: 'naa', mnemonic: 'ணா as in nap (long a)' },
    { tamil: 'ணி', romanized: 'ni', mnemonic: 'ணி as in nip' },
    { tamil: 'ணீ', romanized: 'nii', mnemonic: 'ணீ as in need' },
    { tamil: 'ணு', romanized: 'nu', mnemonic: 'ணு as in nut' },
    { tamil: 'ணூ', romanized: 'nuu', mnemonic: 'ணூ as in noon' },
    { tamil: 'ணெ', romanized: 'ne', mnemonic: 'ணெ as in net' },
    { tamil: 'ணே', romanized: 'nee', mnemonic: 'ணே as in neat' },
    { tamil: 'ணை', romanized: 'nai', mnemonic: 'ணை as in night' },
    { tamil: 'ணொ', romanized: 'no', mnemonic: 'ணொ as in not' },
    { tamil: 'ணோ', romanized: 'noo', mnemonic: 'ணோ as in note' },
    { tamil: 'ணௌ', romanized: 'nau', mnemonic: 'ணௌ as in now' },

    // Combinations for 'த்' (th)
    { tamil: 'த்', romanized: 'th', mnemonic: 'த் as in thumb' },
    { tamil: 'த', romanized: 'tha', mnemonic: 'த as in tap' },
    { tamil: 'தா', romanized: 'thaa', mnemonic: 'தா as in tarp' },
    { tamil: 'தி', romanized: 'thi', mnemonic: 'தி as in thin' },
    { tamil: 'தீ', romanized: 'thii', mnemonic: 'தீ as in theme' },
    { tamil: 'து', romanized: 'thu', mnemonic: 'து as in tub' },
    { tamil: 'தூ', romanized: 'thuu', mnemonic: 'தூ as in tooth' },
    { tamil: 'தெ', romanized: 'the', mnemonic: 'தெ as in tent' },
    { tamil: 'தே', romanized: 'thee', mnemonic: 'தே as in tape' },
    { tamil: 'தை', romanized: 'thai', mnemonic: 'தை as in thigh' },
    { tamil: 'தொ', romanized: 'tho', mnemonic: 'தொ as in top' },
    { tamil: 'தோ', romanized: 'thoo', mnemonic: 'தோ as in tone' },
    { tamil: 'தௌ', romanized: 'thau', mnemonic: 'தௌ as in towel' },

    // Combinations for 'ந்' (n)
    { tamil: 'ந்', romanized: 'n', mnemonic: 'ந் as in nest' },
    { tamil: 'ந', romanized: 'na', mnemonic: 'ந as in nap' },
    { tamil: 'நா', romanized: 'naa', mnemonic: 'நா as in nap (long a)' },
    { tamil: 'நி', romanized: 'ni', mnemonic: 'நி as in nip' },
    { tamil: 'நீ', romanized: 'nii', mnemonic: 'நீ as in need' },
    { tamil: 'நு', romanized: 'nu', mnemonic: 'நு as in nut' },
    { tamil: 'நூ', romanized: 'nuu', mnemonic: 'நூ as in noon' },
    { tamil: 'நெ', romanized: 'ne', mnemonic: 'நெ as in net' },
    { tamil: 'நே', romanized: 'nee', mnemonic: 'நே as in neat' },
    { tamil: 'நை', romanized: 'nai', mnemonic: 'நை as in night' },
    { tamil: 'நொ', romanized: 'no', mnemonic: 'நொ as in not' },
    { tamil: 'நோ', romanized: 'noo', mnemonic: 'நோ as in note' },
    { tamil: 'நௌ', romanized: 'nau', mnemonic: 'நௌ as in now' },

    // Combinations for 'ப்' (p)
    { tamil: 'ப்', romanized: 'p', mnemonic: 'ப் as in pen' },
    { tamil: 'ப', romanized: 'pa', mnemonic: 'ப as in pat' },
    { tamil: 'பா', romanized: 'paa', mnemonic: 'பா as in palm' },
    { tamil: 'பி', romanized: 'pi', mnemonic: 'பி as in pin' },
    { tamil: 'பீ', romanized: 'pii', mnemonic: 'பீ as in peat' },
    { tamil: 'பு', romanized: 'pu', mnemonic: 'பு as in put' },
    { tamil: 'பூ', romanized: 'puu', mnemonic: 'பூ as in pool' },
    { tamil: 'பெ', romanized: 'pe', mnemonic: 'பெ as in pet' },
    { tamil: 'பே', romanized: 'pee', mnemonic: 'பே as in pate' },
    { tamil: 'பை', romanized: 'pai', mnemonic: 'பை as in pie' },
    { tamil: 'பொ', romanized: 'po', mnemonic: 'பொ as in pot' },
    { tamil: 'போ', romanized: 'poo', mnemonic: 'போ as in pole' },
    { tamil: 'பௌ', romanized: 'pau', mnemonic: 'பௌ as in pound' },

    // Combinations for 'ம்' (m)
    { tamil: 'ம்', romanized: 'm', mnemonic: 'ம் as in map' },
    { tamil: 'ம', romanized: 'ma', mnemonic: 'ம as in mat' },
    { tamil: 'மா', romanized: 'maa', mnemonic: 'மா as in mark' },
    { tamil: 'மி', romanized: 'mi', mnemonic: 'மி as in mint' },
    { tamil: 'மீ', romanized: 'mii', mnemonic: 'மீ as in meet' },
    { tamil: 'மு', romanized: 'mu', mnemonic: 'மு as in mud' },
    { tamil: 'மூ', romanized: 'muu', mnemonic: 'மூ as in moon' },
    { tamil: 'மெ', romanized: 'me', mnemonic: 'மெ as in met' },
    { tamil: 'மே', romanized: 'mee', mnemonic: 'மே as in mate' },
    { tamil: 'மை', romanized: 'mai', mnemonic: 'மை as in might' },
    { tamil: 'மொ', romanized: 'mo', mnemonic: 'மொ as in mop' },
    { tamil: 'மோ', romanized: 'moo', mnemonic: 'மோ as in mope' },
    { tamil: 'மௌ', romanized: 'mau', mnemonic: 'மௌ as in mouth' },

    // Combinations for 'ய்' (y)
    { tamil: 'ய்', romanized: 'y', mnemonic: 'ய் as in yacht' },
    { tamil: 'ய', romanized: 'ya', mnemonic: 'ய as in yarn' },
    { tamil: 'யா', romanized: 'yaa', mnemonic: 'யா as in yard' },
    { tamil: 'யி', romanized: 'yi', mnemonic: 'யி as in yin' },
    { tamil: 'யீ', romanized: 'yii', mnemonic: 'யீ as in yield' },
    { tamil: 'யு', romanized: 'yu', mnemonic: 'யு as in yule' },
    { tamil: 'யூ', romanized: 'yuu', mnemonic: 'யூ as in yule (long u)' },
    { tamil: 'யெ', romanized: 'ye', mnemonic: 'யெ as in yet' },
    { tamil: 'யே', romanized: 'yee', mnemonic: 'யே as in yell' },
    { tamil: 'யை', romanized: 'yai', mnemonic: 'யை as in yawn' },
    { tamil: 'யொ', romanized: 'yo', mnemonic: 'யொ as in yoke' },
    { tamil: 'யோ', romanized: 'yoo', mnemonic: 'யோ as in yoke (long o)' },
    { tamil: 'யௌ', romanized: 'yau', mnemonic: 'யௌ as in yowl' },

    // Combinations for 'ர்' (r)
    { tamil: 'ர்', romanized: 'r', mnemonic: 'ர் as in rat' },
    { tamil: 'ர', romanized: 'ra', mnemonic: 'ர as in ran' },
    { tamil: 'ரா', romanized: 'raa', mnemonic: 'ரா as in raft' },
    { tamil: 'ரி', romanized: 'ri', mnemonic: 'ரி as in rip' },
    { tamil: 'ரீ', romanized: 'rii', mnemonic: 'ரீ as in reed' },
    { tamil: 'ரு', romanized: 'ru', mnemonic: 'ரு as in rug' },
    { tamil: 'ரூ', romanized: 'ruu', mnemonic: 'ரூ as in rude' },
    { tamil: 'ரெ', romanized: 're', mnemonic: 'ரெ as in red' },
    { tamil: 'ரே', romanized: 'ree', mnemonic: 'ரே as in raid' },
    { tamil: 'ரை', romanized: 'rai', mnemonic: 'ரை as in ride' },
    { tamil: 'ரொ', romanized: 'ro', mnemonic: 'ரொ as in rod' },
    { tamil: 'ரோ', romanized: 'roo', mnemonic: 'ரோ as in road' },
    { tamil: 'ரௌ', romanized: 'rau', mnemonic: 'ரௌ as in round' },

    // Combinations for 'ல்' (l)
    { tamil: 'ல்', romanized: 'l', mnemonic: 'ல் as in log' },
    { tamil: 'ல', romanized: 'la', mnemonic: 'ல as in lad' },
    { tamil: 'லா', romanized: 'laa', mnemonic: 'லா as in last' },
    { tamil: 'லி', romanized: 'li', mnemonic: 'லி as in lid' },
    { tamil: 'லீ', romanized: 'lii', mnemonic: 'லீ as in leap' },
    { tamil: 'லு', romanized: 'lu', mnemonic: 'லு as in lug' },
    { tamil: 'லூ', romanized: 'luu', mnemonic: 'லூ as in loop' },
    { tamil: 'லெ', romanized: 'le', mnemonic: 'லெ as in let' },
    { tamil: 'லே', romanized: 'lee', mnemonic: 'லே as in late' },
    { tamil: 'லை', romanized: 'lai', mnemonic: 'லை as in light' },
    { tamil: 'லொ', romanized: 'lo', mnemonic: 'லொ as in lot' },
    { tamil: 'லோ', romanized: 'loo', mnemonic: 'லோ as in load' },
    { tamil: 'லௌ', romanized: 'lau', mnemonic: 'லௌ as in loud' },

    // Combinations for 'வ்' (v)
    { tamil: 'வ்', romanized: 'v', mnemonic: 'வ் as in van' },
    { tamil: 'வ', romanized: 'va', mnemonic: 'வ as in vat' },
    { tamil: 'வா', romanized: 'vaa', mnemonic: 'வா as in vast' },
    { tamil: 'வி', romanized: 'vi', mnemonic: 'வி as in vim' },
    { tamil: 'வீ', romanized: 'vii', mnemonic: 'வீ as in veal' },
    { tamil: 'வு', romanized: 'vu', mnemonic: 'வு as in vogue' },
    { tamil: 'வூ', romanized: 'vuu', mnemonic: 'வூ as in voodoo' },
    { tamil: 'வெ', romanized: 've', mnemonic: 'வெ as in vet' },
    { tamil: 'வே', romanized: 'vee', mnemonic: 'வே as in vain' },
    { tamil: 'வை', romanized: 'vai', mnemonic: 'வை as in vine' },
    { tamil: 'வொ', romanized: 'vo', mnemonic: 'வொ as in vote' },
    { tamil: 'வோ', romanized: 'voo', mnemonic: 'வோ as in vote (long o)' },
    { tamil: 'வௌ', romanized: 'vau', mnemonic: 'வௌ as in vow' },

    // Combinations for 'ழ்' (zh)
    { tamil: 'ழ்', romanized: 'zh', mnemonic: 'ழ் as in maze' },
    { tamil: 'ழ', romanized: 'zha', mnemonic: 'ழ as in llama' },
    { tamil: 'ழா', romanized: 'zhaa', mnemonic: 'ழா as in llama (long a)' },
    { tamil: 'ழி', romanized: 'zhi', mnemonic: 'ழி as in rise' },
    { tamil: 'ழீ', romanized: 'zhii', mnemonic: 'ழீ as in rise (long i)' },
    { tamil: 'ழு', romanized: 'zhu', mnemonic: 'ழு as in rouge' },
    { tamil: 'ழூ', romanized: 'zhuu', mnemonic: 'ழூ as in rouge (long u)' },
    { tamil: 'ழெ', romanized: 'zhe', mnemonic: 'ழெ as in measure' },
    { tamil: 'ழே', romanized: 'zhee', mnemonic: 'ழே as in major' },
    { tamil: 'ழை', romanized: 'zhai', mnemonic: 'ழை as in raise' },
    { tamil: 'ழொ', romanized: 'zho', mnemonic: 'ழொ as in zho (french pronunciation)' },
    { tamil: 'ழோ', romanized: 'zhoo', mnemonic: 'ழோ as in zhoo (long o)' },
    { tamil: 'ழௌ', romanized: 'zhau', mnemonic: 'ழௌ as in wow' },

    // Combinations for 'ள்' (l)
    { tamil: 'ள்', romanized: 'l', mnemonic: 'ள் as in lull' },
    { tamil: 'ள', romanized: 'la', mnemonic: 'ள as in lad' },
    { tamil: 'ளா', romanized: 'laa', mnemonic: 'ளா as in last' },
    { tamil: 'ளி', romanized: 'li', mnemonic: 'ளி as in lid' },
    { tamil: 'ளீ', romanized: 'lii', mnemonic: 'ளீ as in leap' },
    { tamil: 'ளு', romanized: 'lu', mnemonic: 'ளு as in lug' },
    { tamil: 'ளூ', romanized: 'luu', mnemonic: 'ளூ as in loop' },
    { tamil: 'ளெ', romanized: 'le', mnemonic: 'ளெ as in let' },
    { tamil: 'ளே', romanized: 'lee', mnemonic: 'ளே as in late' },
    { tamil: 'ளை', romanized: 'lai', mnemonic: 'ளை as in light' },
    { tamil: 'ளொ', romanized: 'lo', mnemonic: 'ளொ as in lot' },
    { tamil: 'ளோ', romanized: 'loo', mnemonic: 'ளோ as in load' },
    { tamil: 'ளௌ', romanized: 'lau', mnemonic: 'ளௌ as in loud' },

    // Combinations for 'ற்' (r)
    { tamil: 'ற்', romanized: 'r', mnemonic: 'ற் as in rot' },
    { tamil: 'ற', romanized: 'ra', mnemonic: 'ற as in rat' },
    { tamil: 'றா', romanized: 'raa', mnemonic: 'றா as in raft' },
    { tamil: 'றி', romanized: 'ri', mnemonic: 'றி as in rip' },
    { tamil: 'றீ', romanized: 'rii', mnemonic: 'றீ as in reed' },
    { tamil: 'று', romanized: 'ru', mnemonic: 'று as in rug' },
    { tamil: 'றூ', romanized: 'ruu', mnemonic: 'றூ as in rude' },
    { tamil: 'றெ', romanized: 're', mnemonic: 'றெ as in red' },
    { tamil: 'றே', romanized: 'ree', mnemonic: 'றே as in raid' },
    { tamil: 'றை', romanized: 'rai', mnemonic: 'றை as in ride' },
    { tamil: 'றொ', romanized: 'ro', mnemonic: 'றொ as in rod' },
    { tamil: 'றோ', romanized: 'roo', mnemonic: 'றோ as in road' },
    { tamil: 'றௌ', romanized: 'rau', mnemonic: 'றௌ as in round' },

    // Combinations for 'ன்' (n)
    { tamil: 'ன்', romanized: 'n', mnemonic: 'ன் as in nap' },
    { tamil: 'ன', romanized: 'na', mnemonic: 'ன as in nap' },
    { tamil: 'னா', romanized: 'naa', mnemonic: 'னா as in nap (long a)' },
    { tamil: 'னி', romanized: 'ni', mnemonic: 'னி as in nip' },
    { tamil: 'னீ', romanized: 'nii', mnemonic: 'னீ as in neat' },
    { tamil: 'னு', romanized: 'nu', mnemonic: 'னு as in nut' },
    { tamil: 'னூ', romanized: 'nuu', mnemonic: 'னூ as in noon' },
    { tamil: 'னெ', romanized: 'ne', mnemonic: 'னெ as in net' },
    { tamil: 'னே', romanized: 'nee', mnemonic: 'னே as in neat' },
    { tamil: 'னை', romanized: 'nai', mnemonic: 'னை as in night' },
    { tamil: 'னொ', romanized: 'no', mnemonic: 'னொ as in not' },
    { tamil: 'னோ', romanized: 'noo', mnemonic: 'னோ as in note' },
    { tamil: 'னௌ', romanized: 'nau', mnemonic: 'னௌ as in now' },
  ],
  grantha: [
    { tamil: 'ஜ', romanized: 'ja', mnemonic: 'ஜ as in jug' },
    { tamil: 'ஜா', romanized: 'jaa', mnemonic: 'ஜா as in jar' },
    { tamil: 'ஜி', romanized: 'ji', mnemonic: 'ஜி as in jinx' },
    { tamil: 'ஜீ', romanized: 'jii', mnemonic: 'ஜீ as in jeep' },
    { tamil: 'ஜு', romanized: 'ju', mnemonic: 'ஜு as in jug' },
    { tamil: 'ஜூ', romanized: 'juu', mnemonic: 'ஜூ as in june' },
    { tamil: 'ஜெ', romanized: 'je', mnemonic: 'ஜெ as in jet' },
    { tamil: 'ஜே', romanized: 'jee', mnemonic: 'ஜே as in jade' },
    { tamil: 'ஜை', romanized: 'jai', mnemonic: 'ஜை as in giant' },
    { tamil: 'ஜொ', romanized: 'jo', mnemonic: 'ஜொ as in joke' },
    { tamil: 'ஜோ', romanized: 'joo', mnemonic: 'ஜோ as in jolt' },
    { tamil: 'ஜௌ', romanized: 'jau', mnemonic: 'ஜௌ as in jowl' },

    { tamil: 'ஷ', romanized: 'sha', mnemonic: 'ஷ as in shark' },
    { tamil: 'ஷா', romanized: 'shaa', mnemonic: 'ஷா as in sharp' },
    { tamil: 'ஷி', romanized: 'shi', mnemonic: 'ஷி as in shin' },
    { tamil: 'ஷீ', romanized: 'shii', mnemonic: 'ஷீ as in sheep' },
    { tamil: 'ஷு', romanized: 'shu', mnemonic: 'ஷு as in shun' },
    { tamil: 'ஷூ', romanized: 'shuu', mnemonic: 'ஷூ as in shoot' },
    { tamil: 'ஷெ', romanized: 'she', mnemonic: 'ஷெ as in shell' },
    { tamil: 'ஷே', romanized: 'shee', mnemonic: 'ஷே as in shale' },
    { tamil: 'ஷை', romanized: 'shai', mnemonic: 'ஷை as in shy' },
    { tamil: 'ஷொ', romanized: 'sho', mnemonic: 'ஷொ as in shop' },
    { tamil: 'ஷோ', romanized: 'shoo', mnemonic: 'ஷோ as in shore' },
    { tamil: 'ஷௌ', romanized: 'shau', mnemonic: 'ஷௌ as in shout' },

    { tamil: 'ஸ்', romanized: 'sa', mnemonic: 'ஸ் as in sap' },
    { tamil: 'ஸா', romanized: 'saa', mnemonic: 'ஸா as in salt' },
    { tamil: 'ஸி', romanized: 'si', mnemonic: 'ஸி as in sit' },
    { tamil: 'ஸீ', romanized: 'sii', mnemonic: 'ஸீ as in seat' },
    { tamil: 'ஸு', romanized: 'su', mnemonic: 'ஸு as in sun' },
    { tamil: 'ஸூ', romanized: 'suu', mnemonic: 'ஸூ as in soup' },
    { tamil: 'ஸெ', romanized: 'se', mnemonic: 'ஸெ as in set' },
    { tamil: 'ஸே', romanized: 'see', mnemonic: 'ஸே as in safe' },
    { tamil: 'ஸை', romanized: 'sai', mnemonic: 'ஸை as in sight' },
    { tamil: 'ஸொ', romanized: 'so', mnemonic: 'ஸொ as in sock' },
    { tamil: 'ஸோ', romanized: 'soo', mnemonic: 'ஸோ as in soap' },
    { tamil: 'ஸௌ', romanized: 'sau', mnemonic: 'ஸௌ as in south' },

    { tamil: 'ஹ', romanized: 'ha', mnemonic: 'ஹ as in hat' },
    { tamil: 'ஹா', romanized: 'haa', mnemonic: 'ஹா as in half' },
    { tamil: 'ஹி', romanized: 'hi', mnemonic: 'ஹி as in hit' },
    { tamil: 'ஹீ', romanized: 'hii', mnemonic: 'ஹீ as in heat' },
    { tamil: 'ஹு', romanized: 'hu', mnemonic: 'ஹு as in hut' },
    { tamil: 'ஹூ', romanized: 'huu', mnemonic: 'ஹூ as in hoop' },
    { tamil: 'ஹெ', romanized: 'he', mnemonic: 'ஹெ as in hem' },
    { tamil: 'ஹே', romanized: 'hee', mnemonic: 'ஹே as in hay' },
    { tamil: 'ஹை', romanized: 'hai', mnemonic: 'ஹை as in high' },
    { tamil: 'ஹொ', romanized: 'ho', mnemonic: 'ஹொ as in hop' },
    { tamil: 'ஹோ', romanized: 'hoo', mnemonic: 'ஹோ as in hope' },
    { tamil: 'ஹௌ', romanized: 'hau', mnemonic: 'ஹௌ as in house' },

    { tamil: 'க்ஷ', romanized: 'ksha', mnemonic: '' },
    { tamil: 'க்ஷா', romanized: 'kshaa', mnemonic: '' },
    { tamil: 'க்ஷி', romanized: 'kshi', mnemonic: '' },
    { tamil: 'க்ஷீ', romanized: 'kshii', mnemonic: '' },
    { tamil: 'க்ஷு', romanized: 'kshu', mnemonic: '' },
    { tamil: 'க்ஷூ', romanized: 'kshuu', mnemonic: '' },
    { tamil: 'க்ஷெ', romanized: 'kshe', mnemonic: '' },
    { tamil: 'க்ஷே', romanized: 'kshee', mnemonic: '' },
    { tamil: 'க்ஷை', romanized: 'kshai', mnemonic: '' },
    { tamil: 'க்ஷொ', romanized: 'ksho', mnemonic: '' },
    { tamil: 'க்ஷோ', romanized: 'kshoo', mnemonic: '' },
    { tamil: 'க்ஷௌ', romanized: 'kshau', mnemonic: '' },    
  ],
  aytam: [
    { tamil: 'ஃ', romanized: 'ah', mnemonic: 'ஃ as in aha!' },
  ],
};
