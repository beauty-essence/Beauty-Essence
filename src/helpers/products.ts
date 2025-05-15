import lomilomi_photo from "assets/photos/offer/oriental/BeautyEssence_090-min.webp";
import bali_massage from "assets/photos/offer/oriental/bali-massage.jpg";
import sport_massage from "assets/photos/offer/oriental/sport-massage.jpg";
import reflexology_massage from "assets/photos/offer/oriental/reflexology-massage.jpg";
import topbody_massage from "assets/photos/offer/oriental/topbody-massage.jpg";
import downbody_massage from "assets/photos/offer/oriental/downbody-massage.jpg";
import fourhands_massage from "assets/photos/offer/oriental/BeautyEssence_137-min.webp";
import test from "assets/photos/offer/oriental/test.jpg";
import pregnant_massage_photo from "assets/photos/offer/oriental/pregnant.png";
import aromaticcandle_massage from "assets/photos/offer/warming/aromaticcandle-massage.jpg";
import herbal_massage from "assets/photos/offer/warming/herbal-massage.jpg";
import hotstone_massage from "assets/photos/offer/warming/hotstone-massage.jpg";
import orient_massage from "assets/photos/offer/spa/orient-massage.jpg";
import silk_massage from "assets/photos/offer/spa/silk-massage.jpg";
import titanium_massage from "assets/photos/offer/spa/titanium-massage.jpg";
import oil_massage from "assets/photos/offer/spa/oil-massage.jpg";
import photo_122 from "assets/photos/offer/spa/BeautyEssence_122-min.webp";
import rokitnik_photo from "assets/photos/offer/spa/rokitnik.jpg";
import BeautyEssence_215 from "assets/photos/offer/spa/BeautyEssence_215.webp";
import head_spa_photo_209 from "assets/photos/offer/headspa/BeautyEssence_209-min.webp";
import head_spa_photo_200 from "assets/photos/offer/headspa/BeautyEssence_200-min.webp";
import head_spa_photo_229 from "assets/photos/offer/headspa/BeautyEssence_229-min.webp";
import kobido_first_photo from "assets/photos/offer/kobido/kobido_first.webp";
import kobido_second_photo from "assets/photos/offer/kobido/kobido_second.webp";

export const Products = [
  {
    image: test,
    alt: "Masowana osoba",
    title: "Masaż tajski",
    subtitle: "Pełen relaks dla ciała i duszy",
    description: "Intensywny, głęboki masaż ciała. Głównymi elementami masażu tajskiego jest rozciąganie, elementy jogi, akupresura i refleksologia. Jest idealny dla osób lubiących intensywne masaże. Efekt terapeutyczny jest odczuwalny niemal od razu. Masaż tajski zwiększy zakres rozciągania więzadeł i stawów. Zmniejszy bóle mięśniowo-szkieletowe oraz napięciowy ból głowy i migreny. Jest wykonywany w specjalnym bawełnianym stroju, zgodnie z tradycyjną sztuką masażu.",
    detailsPrice: [
      {
        slug: 'thai-massage',
        price: 209,
        time: 60
      },
      {
        slug: 'thai-massage',
        price: 269,
        time: 90
      }
    ],
    slug: 'masaz-tajski',
  },
  {
    image: lomilomi_photo,
    alt: "Masowana osoba",
    title: "Masaż Lomi Lomi",
    subtitle: "Odprężenie z aromatem natury",
    description: "Hawajski masaż, który poprawia formę psycho- fizyczną. Podczas masażu terapeutka uciska ciało za pomocą przedramion, łokci oraz masuje dłońmi. Zabieg, wykonywany zgodnie z tradycyjną metodą, rozluźnia całe grupy mięśni, a dzięki posuwistym ruchom przypominającym spokojne ruchy wód oceanu, usprawnia przepływ limfy i pomaga zniwelować obrzęki. Masaż Lomi Lomi gwarantuje relaks, redukuje napięcie oraz zmęczenie.",
    detailsPrice: [
      {
        slug: 'lomi-massage',
        price: 239,
        time: 60
      },
      {
        slug: 'lomi-massage',
        price: 279,
        time: 90
      }
    ],
    slug: 'masaz-lomi-lomi',
  },
  {
    image: bali_massage,
    alt: "Masowana osoba",
    title: "Masaż balijski",
    subtitle: "Odbudowa wewnętrznego spokoju",
    description: "Masaż całego ciała, w którym specjalizują się nasze balijskie terapeutki. Jest to wyjątkowa forma relaksu, dzięki której pozbędziemy się bólu kręgosłupa, bólu mięśni, a nawet symptomów migreny. To masaż, który głęboko odpręży, łączy w sobie elementy akupresury, ajurwedy i refleksologii. Wpłynie na poprawę jakości snu, a także zlikwiduje napięcie i stres. Regeneruje siły witalne.",
    detailsPrice: [
      {
        slug: 'bali-massage',
        price: 239,
        time: 60
      },
      {
        slug: 'bali-massage',
        price: 279,
        time: 90
      }
    ],
    slug: 'masaz-balijski',
  },
  {
    image: sport_massage,
    alt: "Masowana osoba",
    title: "Masaż sportowo-leczniczy",
    subtitle: "Rozluźnienie napiętych mięśni i umysłu",
    description: "Dedykowany osobom, którym zależy na większej elastyczności tkanek, na lepszym ukrwieniu oraz ruchomości w stawach. Jest idealny dla osób aktywnych fizycznie oraz dla zawodowych sportowców. Przy tym masażu używa się dużo większej siły nacisku. Uwalnia ciało od bólu, rozluźnia mięśnie, głęboko relaksuje i pozwala pozbyć się stresu. Masaż ten dotleni komórki i zniweluje ryzyko powstawiania kontuzji.",
    detailsPrice: [
      {
        slug: 'sport-massage',
        price: 239,
        time: 60
      },
      {
        slug: 'sport-massage',
        price: 279,
        time: 90
      }
    ],
    slug: 'masaz-sportowy',
  },
  {
    image: reflexology_massage,
    alt: "Masowana osoba",
    title: "Refleksologia",
    subtitle: "Rozluźnienie napiętych mięśni i umysłu",
    description: "Doskonały zabieg usuwający uczucie zmęczonych i ciężkich nóg. Jest to technika akupresury, która pobudza ponad 7000 zakończeń nerwowych ukrytych w stopach. Poprzez precyzyjne naciski, wykonane przez nasze terapeutki, dochodzi do uwolnienia zablokowanych ścieżek energetycznych. Tym samym, masując odpowiedni obszar stopy, możemy pozbyć się bólu kręgosłupa, głowy, wątroby czy dolegliwości ze strony układu hormonalnego.",
    detailsPrice: [
      {
        slug: 'reflexology-massage',
        price: 150,
        time: 30
      },
      {
        slug: 'reflexology-massage',
        price: 199,
        time: 60
      }
    ],
    slug: 'refleksologia',
  },
  {
    image: topbody_massage,
    alt: "Masowana osoba",
    title: "Masaż górnych części ciała",
    subtitle: "Rozluźnienie napiętych mięśni i umysłu",
    description: "Idealny masaż dla osób odczuwających ból związany z siedzącym trybem życia. Terapeutka skupia się na masażu pleców, ramion, karku oraz głowy. Pozwala poczuć ulgę, rozluźnienie mięśni. Miejsca najbardziej narażona na stres zostają rozluźnione.",
    detailsPrice: [
      {
        slug: 'topbody-massage',
        price: 199,
        time: 60
      },
    ],
    slug: 'masaz-gornych-czesci-ciala',
  },
  {
    image: downbody_massage,
    alt: "Masowana osoba",
    title: "Masaż dolnych części ciała",
    subtitle: "Rozluźnienie napiętych mięśni i umysłu",
    description: "Masaż stóp, nóg oraz pośladków. To idealny masaż dla osób, które spędzają dużo czasu w pozycji stojącej. Terapeutki masują dynamicznie, co pozwala osiągnąć oczekiwane rezultaty rozluźnienia i rozciągnięcia. Skupienie masażu kierowane jest w najbardziej spięte miejsca wyżej określonych części ciała.",
    detailsPrice: [
      {
        slug: 'downbody-massage',
        price: 199,
        time: 60
      },
    ],
    slug: 'masaz-dolnych-czesci-ciala',
  },
  {
    image: oil_massage,
    alt: "Masowana osoba",
    title: "Masaż olejkami aromatycznymi",
    subtitle: "Rozluźnienie napiętych mięśni i umysłu",
    description: "Masaż niezwykle relaksujący, który uwalnia od stresu. Aromaterapia potęguje odpoczynek i usprawnia działanie układu nerwowego oraz odpornościowego. Terapeutka skupia się na najbardziej spiętych partiach ciała. Do wyboru olejki:",
    descriptionList: [
      'Różany - łagodzi stres, poprawia nastrój, obniża napięcie i ułatwia zasypianie.',
      'Jaśminowy - działa wyciszająco i uspokajająco na ciało i zmysły, redukuje poziom stresu i poprawia nastrój, pomaga zachować równowagę emocjonalną',
      'Rokitnik - ekstrakt z owoców z rokitnika zawiera hormon szczęścia - serotoninę, który poprawia nastrój i tonizuje organizm.',
      'Pomarańcza Bergamota – poprawia nastrój, redukuje poziom stresu. Niweluje zmęczenie oraz wpływa na odczucie pobudzenia. Poprawia koncentrację i pobudza umysł do pracy.',
    ],
    detailsPrice: [
      {
        slug: 'oil-massage',
        price: 229,
        time: 60
      },
      {
        slug: 'oil-massage',
        price: 269,
        time: 90
      }
    ],
    isOilMassage: true,
    slug: 'masaz-olejkami-aromatycznymi',
  },
  {
    image: fourhands_massage,
    alt: "Masowana osoba",
    title: "Balijski masaż na 4 ręce",
    subtitle: "Rozluźnienie napiętych mięśni i umysłu",
    description: 'Nasza wyjątkowa propozycja, która opiera się na masażu balijskim wykonanym przez 2 terapeutki, polega na wykonywaniu płynnych ruchów w tym samym czasie, po obu stronach ciała. To mocno relaksacyjny masaż, z wykorzystaniem elementów akupresury, refleksologii i ajurwedy. Wpływa on na redukcję stresu i napięcia. Całość wykonywana jest przy użyciu jaśminowego olejku do masażu, który dodatkowo działa wyciszająco i uspokajająco na ciało i zmysły, poprawia nastrój i pomaga zachować równowagę emocjonalną.',
    detailsPrice: [
      {
        slug: 'fourhands-massage',
        price: 339,
        time: 60
      },
      {
        slug: 'fourhands-massage',
        price: 389,
        time: 90
      }
    ],
    slug: 'balijski-masaz-na-4-rece',
  },
  {
    image: pregnant_massage_photo,
    alt: "Masowana osoba",
    title: "Masaż dla kobiet w ciąży",
    subtitle: "Rozluźnienie napiętych mięśni i umysłu",
    description: 'Masaż orientalny dla kobiet w ciąży- to masaż, który pomoże w zmniejszeniu napięcia mięśniowego, złagodzi ból pleców, barków, karku, nóg oraz poprawi ogólne samopoczucie. Przyniesie ulgę, zmniejszy obrzęki, dzięki usprawnieniu krążenia krwi i limfy w organizmie. Masaż prenatalny stanowi idealną profilaktykę przeciwrozstępową, przeciwdziała utracie jędrności i sprężystości skóry, zapewnia odpoczynek i dobre samopoczucie przyszłej mamy, rozwija świadomość czucia własnego ciała, niezbędną do aktywnego uczestnictwa w procesie porodu. Masaż może odbyć się tylko wtedy gdy ciąża przebiega prawidłowo, nie może być przeciwwskazań medycznych. Należą do nich m.in. choroby sercowo – naczyniowe, cukrzyca ciężarnych, stany zapalne, niedokrwistość, nieprawidłowy przebieg ciąży. Na masaż zapraszamy Panie pomiędzy 3 a 9 miesiącem ciąży (od 13 do 37 tygodnia).',
    detailsPrice: [
      {
        slug: 'pregnant-massage',
        price: 229,
        time: 60
      },
    ],
    slug: 'masaz-dla-kobiet-w-ciazy',
  },
  {
    image: hotstone_massage,
    alt: "Masowana osoba",
    title: "Masaż gorącymi kamieniami bazaltowymi",
    subtitle: "Pełen relaks dla ciała i duszy",
    description: "Masaż gorącymi kamieniami bazaltowymi - to wyjątkowy masaż z elementami akupresury i ciepłolecznictwa. Wpływa pozytywnie na cały organizm, powodując rozluźnienie napiętych mięśni. Podgrzane kamienie bazaltowe oddają ciepło przy kontakcie z ciałem wspomagając przepływ krwi i limfy. Masaż ten zredukuje stres, rozluźni i wpłynie na relaks całego ciała. Niweluje ból kręgosłupa i stawów. Terapeutka odpowiednio układa kamienie na tzw. mapie ciała.",
    detailsPrice: [
      {
        slug: 'hotstone-massage',
        price: 309,
        time: 90
      },
    ],
    slug: 'masaz-goracymi-kamieniami-bazaltowymi',
  },
  {
    image: aromaticcandle_massage,
    alt: "Masowana osoba",
    title: "Masaż świecą aromatyczną",
    subtitle: "Odprężenie z aromatem natury",
    description: "Masaż świecą aromatyczną – to silnie nawilżający i odprężający masaż. Aromaterapia pochodząca ze świecy wpływa na zmysły, a skład naturalnej świecy sojowej, wraz z olejkami, wpływa na odżywienie skóry. To wszystko za sprawą zawartości masła shea, oleju kokosowego czy oleju arganowego w świecy. Masaż przyniesie ulgę napiętym mięśniom.",
    descriptionList: [
      'świeca kwiatowo-piżmowa to zmysłowy zapach, który posiada właściwości relaksujące, napinające, aromatyczne. Dodaje energii, doskonale sprawdza się jako afrodyzjak,',
      'świeca o zapachu zielonej herbaty to delikatny, świeży zapach, który wykazuje właściwości regenerujące oraz wyciszające.'
    ],
    detailsPrice: [
      {
        slug: 'aromaticcandle-massage',
        price: 229,
        time: 60
      },
      {
        slug: 'aromaticcandle-massage',
        price: 259,
        time: 90
      },
    ],
    slug: 'masaz-swieca-aromatyczna',
  },
  {
    image: herbal_massage,
    alt: "Masowana osoba",
    title: "Masaż gorącymi stemplami ziołowymi",
    subtitle: "Odprężenie z aromatem natury",
    description: "Wykonywany jest za pomocą specjalnie przygotowanych bawełnianych stempli (woreczków), w których znajdują się rozdrobnione zioła i przyprawy z Tajlandii, między innymi: kurkuma, cynamonowiec kamforowy, trawa cytrynowa, liście kaffiru, liście eukaliptusa i tamaryndowiec. Stemple podgrzewa się aby uwolnić zawarte w ziołach olejki eteryczne, a następnie masuje się nimi ciało. W miarę jak stają się coraz chłodniejsze, rośnie intensywność masażu, co powoduje, że uwalniają się i wchłaniają w rozgrzaną skórę zawarte w roślinach substancje czynne. Masaż ziołowy pozytywnie wpływa na stawy i mięśnie. Działa również przeciwbólowo. Poprawia krążenie krwi i limfy dzięki czemu pobudza przemianę materii i usuwa z organizmu toksyny. Zabieg ten jest niezwykle relaksujący i pachnący!",
    detailsPrice: [
      {
        slug: 'herbal-massage',
        price: 289,
        time: 90
      },
    ],
    slug: 'masaz-goracymi-stemplami-ziolowymi',
  },
  {
    image: orient_massage,
    alt: "Masowana osoba",
    title: "Indonezyjski zabieg twarzy i dekoltu",
    subtitle: "Pełen relaks dla ciała i duszy",
    description: "Zabieg pielęgnacyjny stymulujący przepływ krwi i limfy obszaru twarzy i dekoltu. Pobudza tkanki do produkcji kolagenu poprzez terapeutyczne ruchy z elementami akupresury. W pierwszej kolejności terapeutka wykonuje demakijaż twarzy i oczu delikatną emulsją, bogatą w oleje roślinne, pantenol i aloes, która zmiękcza, nawilża i uspokaja skórę. Następnie stosuje tonik, hydrolat rumianku rzymskiego i szałwii, daje to uczucie świeżości, nawilżenia i złagodzenia. Do zabiegu używany jest olejek, który dzięki zawartości olejów roślinnych - odżywia, pantenolu i aloesu - wycisza, witamin - dba o zdrowie skóry oraz dzięki zawartości kombuchy wpłynie na gładkość i przyspieszy regenerację naskórka, spowolni procesy starzenia i poprawi koloryt skóry. Skład olejku do zabiegu twarzy: olej z pestek winogron, olej rzepakowy, pantenol, kombucha, wyciąg z liści aloesu, wit E, C, D i B5, antyutleniacz.",
    detailsPrice: [
      {
        slug: 'indonesian-treatment',
        price: 179,
        time: 45
      },
    ],
    slug: 'indonezyjski-zabieg-twarzy-i-dekoltu',
  },
  {
    image: orient_massage,
    alt: "Masowana osoba",
    title: "Orientalna pielęgnacja twarzy z masażem",
    subtitle: "Pełen relaks dla ciała i duszy",
    description: "Ten wyjątkowy zabieg pozwala krok po kroku uzyskać nieskazitelnie czystą skórę przy użyciu najlepszej jakości naturalnych produktów marki Norden. Całość składa się z demakijażu mleczkiem, wieloetapowego tonizowania skóry twarzy z aromaterapią, peelingu enzymatycznego, oleju do masażu twarzy, dedykowanej maski, silnie nawilżającego kremu. Na każdym etapie terapeutka masuje wybraną część: twarz, głowa, uszy. To idealne połączenie odżywienia oraz masażu stymulującego tkanki. Całość składa się z demakijażu mleczkiem, wieloetapowego tonizowania skóry twarzy z aromaterapią, peelingu enzymatycznego, oleju do masażu twarzy, dedykowanej maski, silnie nawilżającego kremu. Na każdym etapie terapeutka masuje wybraną część: twarz, głowa, uszy. To idealne połączenie odżywienia oraz masażu stymulującego tkanki.",
    detailsPrice: [
      {
        slug: 'oriental-face-care',
        price: 249,
        time: 60
      },
    ],
    slug: 'orientalna-pilegnacja-twarzy-z-masazem',
  },
  {
    image: orient_massage,
    alt: "Masowana osoba",
    title: "Rytuał „Orient”",
    subtitle: "Pełen relaks dla ciała i duszy",
    description: "Produkty do rytuału Orient to wyjątkowo bogata kompozycja orientalnych ziół, naturalnych przypraw i drogocennych mieszanek olejowych z jojoby i migdałów. Odżywia, nawilża i rewitalizuje. Rytuał ten pobudza przemianę materii, poprawia krążenie krwi, usuwa toksyny z organizmu i równoważy przepływ energii. Kojarzy się z ciepłymi, egzotycznymi wakacjami, przepełnionymi relaksem, witalnością i swobodą. Orientalne aromaty to naturalne wyciągi z: wanilii, cynamonu, goździków, drzewa herbacianego - działają jak afrodyzjak, który daje siłę i energię dla obu płci, łagodzi depresję, melancholię i codzienny stres.",
    descriptionList: [
      'Odczucia: ciepło, seksapil i wyzwolenie',
      'Efekt rytuału: zadbana, głęboko nawilżona i zregenerowana skóra',
      'Aromaterapia: orientalne zapachy, afrodyzjak, tajemniczość.'
    ],
    detailsPrice: [
      {
        slug: 'oriental-massage',
        price: 390,
        time: 90
      },
    ],
    slug: 'rytual-orient',
  },
  {
    image: silk_massage,
    alt: "Masowana osoba",
    title: "Rytuał „Jedwab”",
    subtitle: "Odprężenie z aromatem natury",
    description: "W tym luksusowym zabiegu wykorzystany jest najwyższej jakości hydrolizat jedwabiu. Proteiny jedwabiu są doskonałym materiałem budulcowym, a dzięki swej niskiej masie cząsteczkowej są zdolne przenikać do warstw naskórka, scalając je i poprawiając poziom nawilżenia. Głównymi aminokwasami jedwabiu są alanina i glicyna – mające dobre właściwości nawilżające i regeneracyjne. Trzecim znaczącym aminokwasem jedwabiu jest seryna, posiadająca zdolność wiązania wody i tworzenia ochronnego i nieokluzyjnego filmu na powierzchni skóry. Jedwab poprawia metabolizm komórek skóry, przeciwdziała przebarwieniom, nadaje skórze gładkość, a w połączeniu z bogactwem olei roślinnych działa regenerująco i nawilżająco. Produkty zostawiają na skórze delikatną, jedwabną poświatę co czyni ten zabieg wyjątkowo luksusowym.",
    descriptionList: [
      'Odczucia: lekkość, delikatny dotyk',
      'Efekt rytuału: głębokie nawilżenie i odmłodzenie, jedwabisty połysk skóry',
      'Aromaterapia: zapach morza i świeżość lasu.'
    ],
    detailsPrice: [
      {
        slug: 'silk-massage',
        price: 390,
        time: 90
      },
    ],
    slug: 'rytual-jedwab',
  },
  {
    image: titanium_massage,
    alt: "Masowana osoba",
    title: "Rytuał „Tytan”",
    subtitle: "Odbudowa wewnętrznego spokoju",
    description: "Produkty do rytuału z linii Tytan, adresowane są dla mężczyzn. Zapach oraz dobór składników aktywnych dbają o regenerację męskiej skóry. Oleje roślinne z: sezamu indyjskiego, pestek winogron, słodkich migdałów i nasion rzepaku odżywiają oraz długotrwale utrzymują odpowiednie nawilżenie skóry. Zabieg ten wpływa na lepsze krążenie. Aromat rytuału oparty jest na nutach ziemi i drewna, które cudownie relaksują i wpływają na dobre samopoczucie każdego mężczyzny.",
    descriptionList: [
      'Odczucia: moc, witalność',
      'Efekt rytuału: regeneracja, nawilżenie',
      'Aromaterapia: świeży męski zapach z nutami ziemi.'
    ],
    detailsPrice: [
      {
        slug: 'titan-massage',
        price: 390,
        time: 90
      },
    ],
    slug: 'rytual-tytan',
  },
  {
    image: photo_122,
    alt: "Masowana osoba",
    title: "Rytuał „Czerwone Wino”",
    subtitle: "Rozluźnienie napiętych mięśni i umysłu",
    description: "Ujędrniające kosmetyki do rytuału „Czerwone Wino” nasycone wyciągami z winogron cudownie wygładzą skórę. Ekstrakt z pestek winogron, wyciąg z wina i mieszanka olei intensywnie działają na wolne rodniki, regenerują i z prawdziwą mocą witalności odżywiają skórę, rozjaśniają cerę, łagodzą zaczerwienienia skóry, działają przeciwzapalnie, opóźniają starzenie się. Z pozostałości po fermentacji wina uzyskuje się wiele cennych substancji korzystnie wpływających na stan skóry: peptydy, witaminy, polifenole. Zawarte w naszych produktach witaminy tworzą miękką i gładką skórę, przywracają jej elastyczność, dając blask, zmysłowość i tajemniczość. „In vino veritas, in aqua sanitas” – w winie prawda, w wodzie zdrowie, głosi znana łacińska sentencja, która doskonale wpisuje się w ten zdrowotno – relaksujący zabieg SPA.",
    descriptionList: [
      'Odczucia: energia, witalność',
      'Efekt rytuału: ujędrniona, miękka, gładka i odmłodzona skóra',
      'Aromaterapia: zapach winogron, ziemi, wina',
    ],
    detailsPrice: [
      {
        slug: 'red-wine-massage',
        price: 390,
        time: 90
      },
    ],
    slug: 'rytual-czerwone-wino',
  },
  {
    image: rokitnik_photo,
    alt: "Masowana osoba",
    title: "Rytuał „Rokitnik”",
    subtitle: "Rozluźnienie napiętych mięśni i umysłu",
    description: 'Produkty z rokitnikiem to doskonała pielęgnacja, oparta na naturalnych właściwościach owoców rokitnika oraz innych roślinnych składników. Produkty z tej linii dostarczają skórze intensywne odżywienie, regenerację i ochronę. Owoce rokitnika, bogate w antyoksydanty, beta-karoten i witaminy, są znane ze swoich właściwości przeciwstarzeniowych oraz regeneracyjnych. Oleje roślinne, takie jak olej z pestek winogron i olej sezamowy, wspomagają regenerację skóry i wzmacniają jej barierę ochronną. Ekstrakt z buraka cukrowego oraz lecytyna dodatkowo poprawiają nawilżenie i elastyczność skóry. Peeling ciała z solą z Morza Północnego i ekstraktem z rokitnika delikatnie złuszcza naskórek, pozostawiając skórę gładką i odświeżoną. Rokitnik, zwany "złotem Syberii", był od wieków używany w tradycyjnej medycynie i kosmetyce. Kobiety w Europie Wschodniej stosowały miazgę z owoców rokitnika do pielęgnacji skóry, aby chronić ją przed surowymi warunkami klimatycznymi.',
    descriptionList: [
      'Odczucia: witaminowa regeneracja',
      'Efekt rytuału: regeneracja i wzmocnienie bariery ochronnej skóry',
      'Aromaterapia: owocowe, słodkie nuty rokitnika'
    ],
    detailsPrice: [
      {
        slug: 'rokitnik-massage',
        price: 390,
        time: 90
      },
    ],
    slug: 'rytual-rokitnik',
  },
  {
    image: BeautyEssence_215,
    alt: "Masowana osoba",
    title: "Zen Head SPA",
    subtitle: "Rozluźnienie napiętych mięśni i umysłu",
    description: 'Nasze rytuały Head SPA to niezwykłe doświadczenie, które łączy w sobie starożytne tajniki masażu, aromaterapii i pielęgnacji skóry głowy. Każdy krok tego wyjątkowego rytuału jest zaprojektowany tak, aby dostarczyć Ci niezapomnianych chwil relaksu i regeneracji. Pozwól sobie na oderwanie się od codziennego zgiełku i zanurz się w luksusie rytuału Head SPA.',
    descriptionList: [
      'aromaterapia antystresowa',
      'masaż głowy z elementami ajurwedy',
      'masaż odcinka szyjnego i klatki piersiowej',
      'peeling enzymatyczny skóry głowy z masażem skalpu',
      'indywidualnie dobrana organiczna kąpiel włosów oraz dedykowana maska z sauną parową, oparte na naturalnych produktach z biodynamicznych upraw',
      'rytuał ciepłymi ręcznikami z aromaterapią energetyzującą',
      'wzmacniający masaż pleców w pozycji siedzącej',
      'suszenie włosów suszarką Dyson',
      'produkty do pielęgnacji włosów bazują na olejkach eterycznych i hydrolatach m.in rozmarynu, lawendy, wyciągu z oliwek, olejku makadamia, orzecha włoskiego, bergamotki, pomarańczy, kopru włoskiego.'
    ],
    detailsPrice: [
      {
        slug: 'zen-head-spa',
        price: 349,
        time: 75
      },
    ],
    slug: 'zen-head-spa',
  },
  {
    image: head_spa_photo_209,
    alt: "Masowana osoba",
    title: "Harmony Head SPA",
    subtitle: "Rozluźnienie napiętych mięśni i umysłu",
    description: 'Nasze rytuały Head SPA to niezwykłe doświadczenie, które łączy w sobie starożytne tajniki masażu, aromaterapii i pielęgnacji skóry głowy. Każdy krok tego wyjątkowego rytuału jest zaprojektowany tak, aby dostarczyć Ci niezapomnianych chwil relaksu i regeneracji. Pozwól sobie na oderwanie się od codziennego zgiełku i zanurz się w luksusie rytuału Head SPA.',
    descriptionList: [
      'aromaterapia antystresowa',
      'masaż głowy z elementami ajurwedy',
      'masaż odcinka szyjnego i klatki piersiowej',
      'demakijaż spa + autorska pielęgnacja twarzy',
      'płatki nawilżające pod oczy z kolagenem, kwasem hialuronowym i kompleksem wodorostów + maska na usta z matchą, olejem arganowym, witaminą E',
      'peeling enzymatyczny skóry głowy z masażem skalpu',
      'indywidualnie dobrana organiczna kąpiel włosów oraz dedykowana maska z sauną parową, oparte na naturalnych produktach z biodynamicznych upraw',
      'rytuał energetyzujący z ciepłymi ręcznikami z aromaterapią',
      'wzmacniający masaż pleców w pozycji siedzącej',
      'suszenie włosów suszarką Dyson',
      'produkty do pielęgnacji włosów bazują na olejkach eterycznych i hydrolatach m.in rozmarynu, lawendy, wyciągu z oliwek, olejku makadamia, orzecha włoskiego, bergamotki, pomarańczy, kopru włoskiego.'
    ],
    detailsPrice: [
      {
        slug: 'harmony-head-spa',
        price: 439,
        time: 105
      },
    ],
    slug: 'harmony-head-spa',
  },
  {
    image: head_spa_photo_200,
    alt: "Masowana osoba",
    title: "Oriental Face Head SPA",
    subtitle: "Rozluźnienie napiętych mięśni i umysłu",
    description: 'Nasze rytuały Head SPA to niezwykłe doświadczenie, które łączy w sobie starożytne tajniki masażu, aromaterapii i pielęgnacji skóry głowy. Każdy krok tego wyjątkowego rytuału jest zaprojektowany tak, aby dostarczyć Ci niezapomnianych chwil relaksu i regeneracji. Pozwól sobie na oderwanie się od codziennego zgiełku i zanurz się w luksusie rytuału Head SPA.',
    descriptionList: [
      'aromaterapia antystresowa',
      'masaż głowy z elementami ajurwedy',
      'masaż odcinka szyjnego i klatki piersiowej',
      'demakijaż spa + autorska pielęgnacja twarzy z masażem liftingującym, peelingiem oczyszczająco- rozświetlającym z ekstraktem z kawioru roślinnego, oleju z awokado i bogatą w polifenole herbatą matcha',
      'płatki nawilżające pod oczy z kolagenem, kwasem hialuronowym i kompleksem wodorostów + maska na usta z matchą, olejem arganowym, witaminą E',
      'peeling enzymatyczny skóry głowy z masażem skalpu',
      'indywidualnie dobrana organiczna kąpiel włosów oraz dedykowana maska z sauną parową, oparte na naturalnych produktach z biodynamicznych upraw',
      'rytuał energetyzujący z ciepłymi ręcznikami z aromaterapią',
      'wzmacniający masaż pleców w pozycji siedzącej',
      'suszenie włosów suszarką Dyson',
      'produkty do pielęgnacji włosów bazują na olejkach eterycznych i hydrolatach m.in rozmarynu, lawendy, wyciągu z oliwek, olejku makadamia, orzecha włoskiego, bergamotki, pomarańczy, kopru włoskiego.',
    ],
    detailsPrice: [
      {
        slug: 'oriental-face-head-spa',
        price: 549,
        time: 120
      },
    ],
    slug: 'oriental-face-head-spa',
  },
  {
    image: head_spa_photo_229,
    alt: "Masowana osoba",
    title: "Bali Head SPA Essence",
    subtitle: "Rozluźnienie napiętych mięśni i umysłu",
    description: 'Nasze rytuały Head SPA to niezwykłe doświadczenie, które łączy w sobie starożytne tajniki masażu, aromaterapii i pielęgnacji skóry głowy. Każdy krok tego wyjątkowego rytuału jest zaprojektowany tak, aby dostarczyć Ci niezapomnianych chwil relaksu i regeneracji. Pozwól sobie na oderwanie się od codziennego zgiełku i zanurz się w luksusie rytuału Head SPA.',
    descriptionList: [
      'masaż balijski',
      'aromaterapia antystresowa',
      'masaż głowy z elementami ajurwedy',
      'masaż odcinka szyjnego i klatki piersiowej',
      'demakijaż SPA + autorska pielęgnacja twarzy z masażem liftingującym, wykończona maską hydrożelową z algami i 8 rodzajami płatków róż',
      'organiczny peeling enzymatyczny skóry głowy z masażem skalpu',
      'indywidualnie dobrana organiczna kąpiel oraz dedykowana maska z sauną dla włosów, oparte na naturalnych produktach z biodynamicznych upraw',
      'rytuał energetyzujący z ciepłymi ręcznikami z aromaterapią',
      'wzmacniający masaż pleców w pozycji siedzącej',
      'suszenie włosów suszarką Dyson',
      'produkty do pielęgnacji włosów bazują na olejkach eterycznych i hydrolatach m.in rozmarynu, lawendy, wyciągu z oliwek, olejku makadamia, orzecha włoskiego, bergamotki, pomarańczy, kopru włoskiego.',
    ],
    detailsPrice: [
      {
        slug: 'bali-head-spa-essence',
        price: 599,
        time: 150
      },
    ],
    slug: 'bali-head-spa-essence',
  },
  {
    image: kobido_first_photo,
    alt: "Masowana osoba",
    title: "Kobido Up",
    subtitle: "Rozluźnienie napiętych mięśni i umysłu",
    description: 'To rewitalizująco liftingujący rytuał masażu twarzy. Jest to autorska wersja intensywnego masażu kobido. Procedura masażu to: głęboki drenaż limfatyczny, rozbudowana akupresura twarzy, oklejanie taśmami (kinezjotaping estetyczny, w oznaczonym pakiecie z tapingiem). Czym jest i co daje masaż Kobido Up? Masaż tkanek głębokich (skóry, mięśni i przyczepów mięśniowych), intensywna stymulacja i odżywienie skóry, spłycenie zmarszczek i bruzd mimicznych, intensywny drenaż limfatyczny, lifting i poprawa owalu, głęboki relaks, rozluźnienie.',
    detailsPrice: [
      {
        slug: 'kobido-up',
        price: 299,
        time: 75
      },
    ],
    slug: 'kobido-up',
  },
  {
    image: kobido_second_photo,
    alt: "Masowana osoba",
    title: "Kobido Up + Taping",
    subtitle: "Rozluźnienie napiętych mięśni i umysłu",
    description: 'To rewitalizująco liftingujący rytuał masażu twarzy. Jest to autorska wersja intensywnego masażu kobido. Procedura masażu to: głęboki drenaż limfatyczny, rozbudowana akupresura twarzy, oklejanie taśmami (kinezjotaping estetyczny, w oznaczonym pakiecie z tapingiem). Czym jest i co daje masaż Kobido Up? Masaż tkanek głębokich (skóry, mięśni i przyczepów mięśniowych), intensywna stymulacja i odżywienie skóry, spłycenie zmarszczek i bruzd mimicznych, intensywny drenaż limfatyczny, lifting i poprawa owalu, głęboki relaks, rozluźnienie.',
    detailsPrice: [
      {
        slug: 'kobido-up-taping',
        price: 339,
        time: 90
      },
    ],
    slug: 'kobido-up-taping',
  },
]