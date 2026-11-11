
    "use strict";

    /* ============================================
       კონფიგურაცია
       სახელის შესაცვლელად შეცვალე მხოლოდ SITE_NAME.
       თვიური ფასი — CONFIG.monthlyPrice.
       ============================================ */
    const SITE_NAME = "თამაშობანა";
    const CONFIG = {
      slogan: "მაგიდა ერთია, მეგობრები ბევრი",
      monthlyPrice: 25,
      storageKey: "tamashobana-v1"
    };

    /* ============================================
       კატეგორიები — ახალი კატეგორია აქ ემატება
       ============================================ */
    const CATEGORIES = [
      { id: "strategy", name: "სტრატეგიული", short: "სტრატეგიული", desc: "გეგმა, რესურსი და გრძელი სვლები", icon: "hex" },
      { id: "family", name: "საოჯახო", short: "საოჯახო", desc: "მშვიდი წესები მთელი ოჯახისთვის", icon: "home" },
      { id: "kids", name: "საბავშვო", short: "საბავშვო", desc: "მარტივი, თბილი და მოკლე", icon: "blocks" },
      { id: "party", name: "სამეგობრო", short: "სამეგობრო", desc: "ხმამაღალი წრე და ფარული როლები", icon: "people" },
      { id: "cards", name: "კარტის თამაშები", short: "კარტი", desc: "ხელები, რაუნდები და ბლეფი", icon: "card" },
      { id: "logic", name: "ლოგიკური", short: "ლოგიკური", desc: "თავსატეხი საერთო მაგიდაზე", icon: "nodes" },
      { id: "coop", name: "კოოპერატიული", short: "კოოპერატიული", desc: "ერთად, ერთი მიზნისკენ", icon: "coop" },
      { id: "detective", name: "დეტექტიური და საიდუმლოებით", short: "დეტექტიური", desc: "კვალი, როლები და ეჭვი", icon: "search" },
      { id: "fantasy", name: "ფენტეზი", short: "ფენტეზი", desc: "რუკები, ფიცი და გამოგონილი სამყარო", icon: "moon" },
      { id: "words", name: "სიტყვების თამაშები", short: "სიტყვები", desc: "ასოები, მნიშვნელობა და სისწრაფე", icon: "tile" },
      { id: "quiz", name: "ვიქტორინები", short: "ვიქტორინა", desc: "კითხვები მეგობრების წრეში", icon: "chat" },
      { id: "quick", name: "სწრაფი თამაშები (15 წუთამდე)", short: "სწრაფი", desc: "პარტია, რომელიც მეოთხედ საათში ეტევა", icon: "clock" }
    ];

    /* ============================================
       თამაშები — ახალი თამაში ამ მასივში ემატება
       price: 0 ნიშნავს უფასოს. colors: [მუქი, ღია] გრადიენტი.
       ============================================ */
    const GAMES = [
      { id: "nilis-khidi", name: "ნისლის ხიდი", categories: ["coop", "detective"], description: "გუნდი ერთად კვეთს ნისლიან ხიდს. თითოეული მხოლოდ თავის ნიშნებს ხედავს, უსაფრთხო ბილიკი კი საერთო მეხსიერებით იკვრება.", price: 0, playersMin: 2, playersMax: 4, duration: 50, age: 10, difficulty: "საშუალო", rating: 4.7, reviewCount: 186, colors: ["#1E4A44", "#4E8A74"], motif: "path", isNew: false, isPopular: true, created: "2026-02-11", letters: ["ა", "მ", "რ"],
        reviews: [{ name: "ნინო", rating: 5, text: "ნისლში გზის ძებნა მართლა გუნდურად გვაიძულებს ლაპარაკს. ოთხივე მეგობარი ბოლომდე ჩართული იყო.", date: "2026-08-14" }, { name: "გიორგი", rating: 4, text: "სიმშვიდე და დაძაბულობა კარგადაა აწონილი. მეორე პარტიაზეც იგივე მაგიდა მოვითხოვეთ.", date: "2026-09-02" }] },
      { id: "tsetskhlis-tsre", name: "ცეცხლის წრე", categories: ["party"], description: "წრეში ერთი ფარული ცეცხლი დგას. სწრაფი კითხვებით უნდა გამოიცნოთ, ვინ თამაშობს სხვანაირად, სანამ წრე არ დაიწვება.", price: 5, playersMin: 4, playersMax: 10, duration: 20, age: 12, difficulty: "მარტივი", rating: 4.5, reviewCount: 240, colors: ["#A84332", "#E07A4A"], motif: "bubbles", isNew: false, isPopular: true, created: "2026-03-02",
        reviews: [{ name: "ანა", rating: 5, text: "საღამოსთვის ზუსტი სიგრძეა. ეჭვი და სიცილი ერთად მოვიდა.", date: "2026-07-19" }, { name: "ლუკა", rating: 4, text: "წესები ერთ წუთში გაიგო ყველამ. ფარული როლი ბოლომდე საინტერესო რჩება.", date: "2026-09-11" }] },
      { id: "varskvlavis-ruka", name: "ვარსკვლავის რუკა", categories: ["strategy", "fantasy"], description: "ვარსკვლავურ რუკაზე აშენებთ გზებს და იკავებთ თანავარსკვლავედებს. ერთი სვლა ხშირად რამდენიმე გზას ხურავს.", price: 8, playersMin: 2, playersMax: 5, duration: 70, age: 12, difficulty: "რთული", rating: 4.8, reviewCount: 132, colors: ["#243B66", "#4C6E99"], motif: "nodes", isNew: false, isPopular: false, created: "2026-01-20",
        reviews: [{ name: "მარიამი", rating: 5, text: "რუკა ლამაზია და არჩევანი მძიმე. ვისაც გეგმა უყვარს, აქ დიდხანს დარჩება.", date: "2026-06-03" }, { name: "დათა", rating: 5, text: "ორი საათი გაგვიარა შეუმჩნევლად. ფინალი ბოლო სვლამდე ღია იყო.", date: "2026-08-28" }] },
      { id: "sitqvis-baghi", name: "სიტყვის ბაღი", categories: ["words", "family"], description: "ასოების ფილებით ზრდით საერთო ბაღს. გრძელი სიტყვა მეტ ყვავილს ხსნის, მოკლე კი მეზობელს ადგილს უტოვებს.", price: 0, playersMin: 2, playersMax: 6, duration: 25, age: 8, difficulty: "მარტივი", rating: 4.6, reviewCount: 310, colors: ["#2F6A4E", "#6FA884"], motif: "letters", isNew: false, isPopular: true, created: "2026-02-28", letters: ["ა", "ბ", "გ"],
        reviews: [{ name: "სალომე", rating: 5, text: "ბავშვებმაც ითამაშეს და უფროსებმაც. ბაღი მაგიდაზე ნელა იზრდება და ეს სიამოვნებაა.", date: "2026-05-16" }, { name: "ნიკა", rating: 4, text: "მშვიდი ტემპია, კამათის გარეშე. ოჯახურ საღამოს კარგად ერგება.", date: "2026-09-20" }] },
      { id: "shavi-gasagebi", name: "შავი გასაღები", categories: ["detective", "coop"], description: "ერთი გასაღები, ხუთი ოთახი და საათი, რომელიც არ გელოდებათ. კვალს ერთად კითხულობთ და ბოლოს ერთ კარს აღებთ.", price: 6, playersMin: 1, playersMax: 4, duration: 45, age: 12, difficulty: "საშუალო", rating: 4.7, reviewCount: 98, colors: ["#1C2833", "#45586A"], motif: "rings", isNew: false, isPopular: false, created: "2026-04-04",
        reviews: [{ name: "თამარი", rating: 5, text: "მარტომაც ვცადე და მეგობრებთანაც. ორივეჯერ ბოლო ოთახი გაგვაკვირვა.", date: "2026-07-02" }, { name: "სანდრო", rating: 4, text: "კარგი კოოპერატივია, თუ მაგიდა ერთმანეთს უსმენს.", date: "2026-08-09" }] },
      { id: "feradi-koshki", name: "ფერადი კოშკი", categories: ["kids", "family", "quick"], description: "რიგრიგობით დგამთ ფერად სართულებს. ერთი ფერი არ უნდა შეეხოს საკუთარ თავს, კოშკი კი უნდა გაძლოს.", price: 0, playersMin: 2, playersMax: 4, duration: 15, age: 5, difficulty: "მარტივი", rating: 4.8, reviewCount: 420, colors: ["#8C431F", "#D4844A"], motif: "tower", isNew: false, isPopular: true, created: "2026-01-08",
        reviews: [{ name: "ელენე", rating: 5, text: "ხუთი წლისაც გაუგია წესი. მოკლეა და მეორე კოშკს თავად ითხოვენ.", date: "2026-04-22" }, { name: "ლაშა", rating: 5, text: "უფროსებისთვისაც სასიამოვნოა, როცა ფერები ბოლოს აღარ ჯდება.", date: "2026-06-18" }] },
      { id: "mtvaris-bazari", name: "მთვარის ბაზარი", categories: ["fantasy", "strategy"], description: "მთვარის შუქზე ცვლით ნივთებს და ფარულ შეკვეთებს ასრულებთ. ვინც ბაზარს სწორად წაიკითხავს, ღამის ბოლოს ყველაზე მდიდარი რჩება.", price: 9, playersMin: 2, playersMax: 4, duration: 60, age: 10, difficulty: "საშუალო", rating: 4.4, reviewCount: 76, colors: ["#4A3A6B", "#7D6A9A"], motif: "coins", isNew: true, isPopular: false, created: "2026-10-02",
        reviews: [{ name: "ქეთევან", rating: 4, text: "ვაჭრობა ნელია და ლამაზი. ახალი თამაშია, მაგრამ მაგიდა უკვე მეორედ შევიკრიბეთ.", date: "2026-10-12" }, { name: "ირაკლი", rating: 5, text: "ფარული შეკვეთა ბოლო რაუნდამდე არ გამიმხელია. ეს მომეწონა.", date: "2026-10-18" }] },
      { id: "swrafi-kitkhva", name: "სწრაფი კითხვა", categories: ["quiz", "quick", "family"], description: "ათი წამი თითო კითხვაზე. ვინც პირველი აკაკუნებს, ის პასუხობს. გამოდგება ოჯახისთვისაც და დიდი წრისთვისაც.", price: 0, playersMin: 2, playersMax: 12, duration: 15, age: 8, difficulty: "მარტივი", rating: 4.3, reviewCount: 510, colors: ["#A33B3B", "#E07A6A"], motif: "bubbles", isNew: false, isPopular: true, created: "2026-03-18",
        reviews: [{ name: "ბარბარე", rating: 4, text: "სწრაფია და ხმამაღალი. თორმეტი კაციც კი ჩაეტია ერთ კოდში.", date: "2026-05-30" }, { name: "ნინო", rating: 4, text: "კითხვები არც ისე რთულია, ამიტომ ბავშვიც პასუხობს.", date: "2026-08-01" }] },
      { id: "okros-pila", name: "ოქროს ფილა", categories: ["logic"], description: "ოქროს ფილები ისე უნდა დალაგდეს, რომ ნახატი მხოლოდ ბოლო სვლაზე გამოჩნდეს. მშვიდი და ზუსტი თავსატეხია, ერთისთვის ან ორისთვის.", price: 5, playersMin: 1, playersMax: 2, duration: 30, age: 10, difficulty: "რთული", rating: 4.9, reviewCount: 154, colors: ["#6E4710", "#C48A2A"], motif: "hex", isNew: false, isPopular: false, created: "2026-02-02",
        reviews: [{ name: "გიორგი", rating: 5, text: "ბოლო ფილამდე არ ჩანდა, სწორად ვაგებდი თუ არა. ეს კარგი ლოგიკაა.", date: "2026-04-11" }, { name: "ანა", rating: 5, text: "ორნი ვთამაშობდით ჩუმად. ნახატის გახსნა ნამდვილად ახარებს.", date: "2026-07-27" }] },
      { id: "megobrebis-tsre", name: "მეგობრების წრე", categories: ["party"], description: "ყველას აქვს საიდუმლო როლი და ერთი წინადადება, რომელსაც მაგიდა არ უნდა დაუჯეროს. საღამოს თამაში სიცილით და ეჭვით.", price: 5, playersMin: 5, playersMax: 12, duration: 30, age: 14, difficulty: "მარტივი", rating: 4.6, reviewCount: 288, colors: ["#B14A3A", "#E3946A"], motif: "coins", isNew: false, isPopular: true, created: "2026-05-05",
        reviews: [{ name: "დათა", rating: 5, text: "დიდ წრეში ცოცხლდება. როლები მოკლეა, ამიტომ ახალი სტუმარიც ერგება.", date: "2026-06-21" }, { name: "სალომე", rating: 4, text: "საღამოს ცენტრი გახდა. მეორე რაუნდი უფრო სახალისო იყო.", date: "2026-09-08" }] },
      { id: "tqis-fitsi", name: "ტყის ფიცი", categories: ["coop", "fantasy"], description: "ტყეში დაკარგულ ბილიკს ერთად იცავთ. თუ ერთი მოთამაშე დაეცემა, საერთო ფიცი სუსტდება, ამიტომ სვლას ერთმანეთს უთანხმებთ.", price: 7, playersMin: 2, playersMax: 5, duration: 55, age: 10, difficulty: "საშუალო", rating: 4.5, reviewCount: 121, colors: ["#1E4A38", "#3E7A5C"], motif: "path", isNew: false, isPopular: false, created: "2026-04-19",
        reviews: [{ name: "თამარი", rating: 5, text: "კოოპერატივი სამართლიანია: ერთის შეცდომა ყველას ეტყობა, მაგრამ გუნდი ამით მჭიდრდება.", date: "2026-06-09" }, { name: "ლუკა", rating: 4, text: "ტყის რუკა ლამაზია. ბილიკის დაცვა ნელ-ნელა ძნელდება.", date: "2026-08-16" }] },
      { id: "chrdilis-karti", name: "ჩრდილის კარტი", categories: ["cards", "detective"], description: "ხელში ჩრდილი იმალება, მაგიდა კი ცდილობს მის გამომჟღავნებას. რაუნდები სწრაფია, ბოლო ხელი კი ანგარიშს აბრუნებს.", price: 5, playersMin: 3, playersMax: 6, duration: 35, age: 12, difficulty: "საშუალო", rating: 4.4, reviewCount: 167, colors: ["#2C2438", "#5C4A68"], motif: "cards", isNew: false, isPopular: false, created: "2026-03-27",
        reviews: [{ name: "ნიკა", rating: 4, text: "ბლეფი მოკლე ხელებში კარგად ზის. ბოლო რაუნდმა ანგარიში გადაგვატრიალა.", date: "2026-05-08" }, { name: "მარიამი", rating: 5, text: "კარტის თამაშია, მაგრამ მაგიდა მთლიანად საუბრობს. ეს მომეწონა.", date: "2026-07-14" }] },
      { id: "anbanis-tsetskhli", name: "ანბანის ცეცხლი", categories: ["words", "quick"], description: "ასო იწვის ათ წამში. მოასწარით სიტყვა, სანამ ქრება, და არ გაიმეოროთ ის, რაც მეზობელმა უკვე თქვა.", price: 0, playersMin: 2, playersMax: 8, duration: 12, age: 8, difficulty: "მარტივი", rating: 4.2, reviewCount: 203, colors: ["#8E3E28", "#D4784A"], motif: "letters", isNew: false, isPopular: false, created: "2026-05-22", letters: ["ც", "ე", "ხ"],
        reviews: [{ name: "სანდრო", rating: 4, text: "ათი წუთი საკმარისია ერთი წრის გასახურებლად. სიტყვები სწრაფად გვეწურება.", date: "2026-06-30" }, { name: "ელენე", rating: 4, text: "ბავშვებთანაც ვითამაშეთ. განმეორების აკრძალვა თამაშს ცოცხალს ტოვებს.", date: "2026-09-15" }] },
      { id: "tsikhis-gegma", name: "ციხის გეგმა", categories: ["strategy"], description: "ერთ ციხეს ოთხი მხრიდან აშენებთ. გეგმა საერთო ჩანს, რესურსი კი არა. გრძელი სტრატეგიაა მათთვის, ვისაც სვლების წინასწარ თვლა უყვარს.", price: 12, playersMin: 2, playersMax: 4, duration: 90, age: 14, difficulty: "რთული", rating: 4.8, reviewCount: 89, colors: ["#2E3A46", "#5E7384"], motif: "tower", isNew: true, isPopular: false, created: "2026-10-08",
        reviews: [{ name: "ირაკლი", rating: 5, text: "დიდი თამაშია და ამას არ მალავს. გეგმის ნახვა და რესურსის დამალვა კარგი წყვილია.", date: "2026-10-15" }, { name: "ქეთევან", rating: 4, text: "საათნახევარი გვჭირდა. ვისაც მოკლე პარტია უნდა, ეს არაა, მაგრამ ჩვენთვის ზუსტი აღმოჩნდა.", date: "2026-10-21" }] },
      { id: "patara-detektivi", name: "პატარა დეტექტივი", categories: ["kids", "detective"], description: "გაუჩინარებული ფანქარი, სამი კვალი და მოკლე კითხვები. ბავშვებისთვის რბილი საიდუმლოა, რომელსაც უფროსიც სიამოვნებით მიჰყვება.", price: 0, playersMin: 2, playersMax: 4, duration: 20, age: 6, difficulty: "მარტივი", rating: 4.7, reviewCount: 256, colors: ["#1F6A5C", "#3E9A84"], motif: "rings", isNew: false, isPopular: false, created: "2026-04-12",
        reviews: [{ name: "ბარბარე", rating: 5, text: "შვილმა თავად წაიკითხა კვალი. საშინელი არაფერია, მხოლოდ პატარა გამოცანა.", date: "2026-05-19" }, { name: "ლაშა", rating: 4, text: "ოცი წუთი და სუფთა დასასრული. საბავშვო თამაშებს შორის ერთ-ერთი მშვიდია.", date: "2026-08-05" }] },
      { id: "ghamis-kodi", name: "ღამის კოდი", categories: ["party", "detective"], description: "ღამით ორი მოთამაშე ცვლის საერთო კოდს. დილით მაგიდა კამათობს, ვისი ვერსიაა მართალი. ფარული როლები დიდ წრეს სჭირდება.", price: 6, playersMin: 6, playersMax: 10, duration: 40, age: 14, difficulty: "საშუალო", rating: 4.6, reviewCount: 340, colors: ["#1A3044", "#3E6078"], motif: "bubbles", isNew: false, isPopular: true, created: "2026-06-01",
        reviews: [{ name: "ნიკა", rating: 5, text: "კოდის ორი ვერსია მაგიდას შუაზე ჰყოფს. კამათი თამაშის ნაწილია და ეს გულწრფელადაა გაკეთებული.", date: "2026-07-08" }, { name: "ანა", rating: 4, text: "ექვსზე ნაკლებზე არ ღირს. ათი კაცით კი საღამოს საუკეთესო მაგიდა იყო.", date: "2026-09-26" }] },
      { id: "zgapris-karti", name: "ზღაპრის კარტი", categories: ["cards", "family"], description: "კარტები ერთ ზღაპარს კრავს. რიგრიგობით ამატებთ წინადადებას, ბოლოს კი ის იგებს, ვინც ისტორიას ლამაზად დახურავს.", price: 5, playersMin: 2, playersMax: 5, duration: 30, age: 7, difficulty: "მარტივი", rating: 4.5, reviewCount: 178, colors: ["#6E3A48", "#C47A6A"], motif: "cards", isNew: false, isPopular: false, created: "2026-05-14",
        reviews: [{ name: "სალომე", rating: 5, text: "ისტორიები სასაცილო გამოდის. შვიდი წლისაც ამატებს წინადადებას და მაგიდა უსმენს.", date: "2026-06-12" }, { name: "გიორგი", rating: 4, text: "წესი მსუბუქია, ამიტომ საუბარი თამაშზე დიდი ხდება. ოჯახში ეს გვინდა ხოლმე.", date: "2026-08-23" }] },
      { id: "eqvsi-kutkhe", name: "ექვსი კუთხე", categories: ["logic", "strategy"], description: "ჰექსაგონურ ფილებს აერთებთ ისე, რომ ერთი ფერის ხაზი არსად გაწყდეს. მშვიდი ლოგიკაა, რომელსაც სტრატეგიული სვლაც ერევა.", price: 7, playersMin: 2, playersMax: 4, duration: 40, age: 10, difficulty: "საშუალო", rating: 4.3, reviewCount: 94, colors: ["#1C4E48", "#3E8A78"], motif: "hex", isNew: false, isPopular: false, created: "2026-07-03",
        reviews: [{ name: "მარიამი", rating: 4, text: "ფერის ხაზის შენარჩუნება უფრო ღრმაა, ვიდრე პირველ სვლაზე ჩანს.", date: "2026-07-29" }, { name: "დათა", rating: 4, text: "ლამაზი ფილებია და მაგიდა დიდხანს რჩება წესრიგში. მშვიდ თამაშს ეძებდა ჩვენი წრე.", date: "2026-09-04" }] },
      { id: "napertsklis-viktorina", name: "ნაპერწკლის ვიქტორინა", categories: ["quiz", "family"], description: "ოთხი თემა და ერთი ნაპერწკალი, რომელიც თემას ირჩევს. კითხვები მეცნიერებიდან ზღაპრამდე მიდის, ამიტომ მაგიდასთან ყველა ასაკი თამაშობს.", price: 0, playersMin: 2, playersMax: 8, duration: 25, age: 8, difficulty: "მარტივი", rating: 4.4, reviewCount: 142, colors: ["#8A5414", "#D4923A"], motif: "dots", isNew: true, isPopular: false, created: "2026-10-11",
        reviews: [{ name: "ელენე", rating: 5, text: "თემის შემთხვევითობა მაგიდას თანაბრად უნაწილებს შანსს. ახალი კითხვები ჯერ არ განმეორდა.", date: "2026-10-16" }, { name: "ლუკა", rating: 4, text: "ოჯახური ვიქტორინაა, ტრიუმფის გარეშე. ეს ტონი მომწონს.", date: "2026-10-22" }] },
      { id: "erti-amosuntqva", name: "ერთი ამოსუნთქვა", categories: ["quick", "party"], description: "თითო სვლა ერთ ამოსუნთქვაში უნდა დაეტიოს. ვინც დააგვიანებს, ფილას კარგავს. მოკლე თამაშია, მოულოდნელი ფინალით.", price: 5, playersMin: 3, playersMax: 8, duration: 10, age: 10, difficulty: "მარტივი", rating: 4.1, reviewCount: 67, colors: ["#A34A3A", "#E08A4E"], motif: "dots", isNew: true, isPopular: false, created: "2026-10-19",
        reviews: [{ name: "სანდრო", rating: 4, text: "ათი წუთი და მაგიდა უკვე ხმამაღალია. დაგვიანების წესი სამართლიანად მკაცრია.", date: "2026-10-20" }, { name: "თამარი", rating: 4, text: "პატარა პაუზისთვის ზუსტია. დიდ საღამოში რამდენიმე პარტია დავდეთ.", date: "2026-10-25" }] }
    ];

    const categoryMap = Object.fromEntries(CATEGORIES.map((c) => [c.id, c]));
    const motionOK = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const state = {
      query: "",
      type: "all",
      category: "all",
      players: "all",
      duration: "all",
      age: "all",
      difficulty: "all",
      priceMin: "",
      priceMax: "",
      sort: "popular",
      cart: [],
      favorites: [],
      reviews: {},
      panel: null,
      megaOpen: false,
      megaPinned: false,
      searchOpen: false,
      openGameId: null,
      codeOpen: false,
      codeText: "",
      popoverGameId: null,
      draftRating: 0,
      lastFocus: null,
      searchScrolled: false
    };

    const $ = (sel) => document.querySelector(sel);
    const header = $("#header");
    const headerInner = $("#headerInner");
    const grid = $("#gameGrid");
    const filtersEl = $("#filters");
    const backdrop = $("#backdrop");
    const drawers = { menu: $("#drawerMenu"), cart: $("#drawerCart"), fav: $("#drawerFav") };
    const popover = $("#popover");
    const gameDialog = $("#gameDialog");
    const codeDialog = $("#codeDialog");
    const toastEl = $("#toast");
    let toastTimer = 0;
    let megaTimer = 0;

    /* ============================================
       საცავი
       ============================================ */
    const storage = {
      load() {
        try {
          const raw = localStorage.getItem(CONFIG.storageKey);
          return raw ? JSON.parse(raw) : null;
        } catch (err) {
          return null;
        }
      },
      save() {
        try {
          localStorage.setItem(CONFIG.storageKey, JSON.stringify({
            cart: state.cart,
            favorites: state.favorites,
            reviews: state.reviews
          }));
        } catch (err) { /* ცვლადი state მაინც ინახავს სესიის მონაცემს */ }
      },
      infoClosed() {
        try { return sessionStorage.getItem(CONFIG.storageKey + "-info") === "1"; }
        catch (err) { return false; }
      },
      setInfoClosed() {
        try { sessionStorage.setItem(CONFIG.storageKey + "-info", "1"); }
        catch (err) { /* იგნორი */ }
      }
    };

    /* ============================================
       ტექსტი და რიცხვები
       ============================================ */
    function escapeHTML(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }
    function formatPrice(n) {
      return Number(n).toLocaleString("ka-GE") + " ₾";
    }
    function formatRating(n) {
      return Number(n).toLocaleString("ka-GE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    }
    function formatDate(iso) {
      const d = new Date(iso);
      if (Number.isNaN(d.getTime())) return "";
      return d.toLocaleDateString("ka-GE", { year: "numeric", month: "long", day: "numeric" });
    }
    function gameById(id) { return GAMES.find((g) => g.id === id); }
    function catName(id) { return categoryMap[id] ? categoryMap[id].name : id; }
    function catShort(id) { return categoryMap[id] ? categoryMap[id].short : id; }
    function userReviews(id) { return state.reviews[id] || []; }
    function ratingInfo(game) {
      const extra = userReviews(game.id);
      const extraSum = extra.reduce((sum, r) => sum + Number(r.rating), 0);
      const count = game.reviewCount + extra.length;
      const avg = count ? (game.rating * game.reviewCount + extraSum) / count : 0;
      return { avg, count };
    }
    function minPaidPrice() {
      const paid = GAMES.filter((g) => g.price > 0).map((g) => g.price);
      return paid.length ? Math.min(...paid) : 5;
    }

    function icon(name) {
      const paths = {
        search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l5 5"/>',
        hex: '<path d="M12 3.2 18.5 7v8L12 18.8 5.5 15V7Z"/>',
        home: '<path d="M4 11.2 12 4l8 7.2"/><path d="M7 10.5V20h10v-9.5"/>',
        blocks: '<rect x="3.5" y="13" width="7" height="7" rx="1.6"/><rect x="13.5" y="4" width="7" height="7" rx="1.6"/><rect x="13.5" y="13" width="7" height="7" rx="1.6"/>',
        people: '<circle cx="8" cy="9" r="2.2"/><circle cx="16" cy="9" r="2.2"/><path d="M4.2 18c.6-2.4 2.2-3.6 3.8-3.6S11.2 15.6 11.8 18M12.2 18c.6-2.4 2.2-3.6 3.8-3.6 1.6 0 3.2 1.2 3.8 3.6"/>',
        card: '<rect x="7" y="3.5" width="10" height="15" rx="2"/><path d="M12 7.5l1.8 2.2L12 12l-1.8-2.3Z"/>',
        nodes: '<circle cx="7" cy="8" r="2"/><circle cx="17" cy="8" r="2"/><circle cx="12" cy="16" r="2"/><path d="M9 9.2 11 14.2M15 9.2 13 14.2M9 8h6"/>',
        coop: '<circle cx="9" cy="8" r="2.1"/><circle cx="15" cy="8" r="2.1"/><path d="M5 18c.7-2.6 2.4-4 4-4h6c1.6 0 3.3 1.4 4 4"/>',
        moon: '<path d="M15 4.2a7.2 7.2 0 1 0 0 15.6 6 6 0 1 1 0-15.6Z"/>',
        tile: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 16.2 12 7.8l4 8.4M9.2 13.2h5.6"/>',
        chat: '<path d="M5 6.5h14v8.2H9.2L5 18Z"/><path d="M12 9.2a1.5 1.5 0 0 1 1.6 1.4c0 1.1-1.6 1.3-1.6 2.4"/><circle cx="12" cy="14.6" r="0.7" fill="currentColor" stroke="none"/>',
        clock: '<circle cx="12" cy="13" r="7"/><path d="M12 10v4l2.4 1.5M9.5 4.5h5"/>',
        users: '<circle cx="12" cy="8" r="3"/><path d="M5.5 19c.8-3.2 3.2-4.8 6.5-4.8s5.7 1.6 6.5 4.8"/>',
        age: '<circle cx="12" cy="7" r="2.4"/><path d="M8 20v-4.5L10 13l2 2 2-2.6 2 2.6V20"/>',
        heart: '<path d="M12 20.2S5.2 16 5.2 11a3.8 3.8 0 0 1 6.8-2.3A3.8 3.8 0 0 1 18.8 11c0 5-6.8 9.2-6.8 9.2z"/>',
        close: '<path d="M6 6l12 12M18 6L6 18"/>'
      };
      return `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name] || ""}</svg>`;
    }

    function starPath() {
      return "M10 1.8 12.3 6.5l5.2.8-3.8 3.6.9 5.2L10 13.6 5.4 16.1l.9-5.2L2.5 7.3l5.2-.8Z";
    }
    function starsMarkup(value, prefix) {
      let html = "";
      for (let i = 1; i <= 5; i += 1) {
        let fill = 0;
        if (value >= i) fill = 1;
        else if (value > i - 1) fill = value - (i - 1);
        const d = starPath();
        if (fill >= 0.98) html += `<svg viewBox="0 0 20 20" class="star" aria-hidden="true"><path fill="#C8962E" d="${d}"/></svg>`;
        else if (fill <= 0.05) html += `<svg viewBox="0 0 20 20" class="star" aria-hidden="true"><path fill="#E7DCCB" d="${d}"/></svg>`;
        else {
          const id = `${prefix}-${i}`;
          const pct = Math.round(fill * 100);
          html += `<svg viewBox="0 0 20 20" class="star" aria-hidden="true"><defs><linearGradient id="${id}"><stop offset="${pct}%" stop-color="#C8962E"/><stop offset="${pct}%" stop-color="#E7DCCB"/></linearGradient></defs><path fill="url(#${id})" d="${d}"/></svg>`;
        }
      }
      return `<span class="stars" role="img" aria-label="შეფასება ${formatRating(value)} 5-დან">${html}</span>`;
    }

    function hexPoints(cx, cy, r) {
      const pts = [];
      for (let i = 0; i < 6; i += 1) {
        const a = Math.PI / 180 * (60 * i - 30);
        pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
      }
      return pts.join(" ");
    }

    function motifSVG(game) {
      const c = "#FBF6EC";
      const d = "#F6D77A";
      const ink = "rgba(23,43,54,0.88)";
      switch (game.motif) {
        case "cards":
          return `<g transform="translate(200 118)">
            <g transform="rotate(-16)"><rect x="-92" y="-62" width="78" height="112" rx="14" fill="${c}" opacity="0.92"/></g>
            <g transform="rotate(8)"><rect x="-28" y="-70" width="78" height="112" rx="14" fill="#fff"/><path d="M11 -8l14 16-14 16-14-16z" fill="${d}"/></g>
            <g transform="rotate(22)"><rect x="24" y="-58" width="78" height="112" rx="14" fill="${c}" opacity="0.85"/></g>
          </g>`;
        case "hex":
          return `<g>
            <polygon points="${hexPoints(150, 110, 42)}" fill="${c}"/>
            <polygon points="${hexPoints(230, 78, 36)}" fill="${d}"/>
            <polygon points="${hexPoints(250, 150, 40)}" fill="${ink}"/>
            <polygon points="${hexPoints(168, 168, 28)}" fill="#fff" opacity="0.85"/>
          </g>`;
        case "path":
          return `<g fill="none" stroke="${c}" stroke-width="14" stroke-linecap="round"><path d="M40 160C90 80 140 170 200 110s90 10 120-30 70 20 90 8"/></g>
            <circle cx="70" cy="150" r="16" fill="${d}"/><circle cx="200" cy="112" r="16" fill="#fff"/><circle cx="330" cy="78" r="16" fill="${c}"/>`;
        case "letters": {
          const letters = game.letters || ["ა", "მ", "რ"];
          return `<g font-family="Noto Sans Georgian, Segoe UI, sans-serif" font-weight="800">
            <rect x="36" y="46" width="96" height="124" rx="18" fill="#fff"/><text x="84" y="124" text-anchor="middle" font-size="54" fill="#172B36">${escapeHTML(letters[0])}</text>
            <rect x="152" y="36" width="96" height="124" rx="18" fill="${c}"/><text x="200" y="114" text-anchor="middle" font-size="54" fill="#172B36">${escapeHTML(letters[1])}</text>
            <rect x="268" y="52" width="96" height="124" rx="18" fill="${d}"/><text x="316" y="130" text-anchor="middle" font-size="54" fill="#172B36">${escapeHTML(letters[2])}</text>
          </g>`;
        }
        case "bubbles":
          return `<rect x="28" y="36" width="180" height="78" rx="22" fill="#fff"/>
            <rect x="190" y="108" width="176" height="70" rx="20" fill="${c}"/>
            <rect x="46" y="128" width="150" height="46" rx="16" fill="${ink}"/>
            <text x="62" y="158" fill="#FBF6EC" font-size="18" font-family="Noto Sans Georgian, Segoe UI, sans-serif" font-weight="700">კოდი 482 193</text>`;
        case "rings":
          return `<circle cx="150" cy="110" r="70" fill="none" stroke="${c}" stroke-width="14"/>
            <circle cx="250" cy="100" r="48" fill="${d}"/>
            <circle cx="210" cy="150" r="22" fill="#fff"/>
            <circle cx="300" cy="160" r="10" fill="${c}"/>`;
        case "tower":
          return `<rect x="70" y="120" width="250" height="58" rx="16" fill="${c}"/>
            <rect x="110" y="72" width="180" height="52" rx="16" fill="#fff"/>
            <rect x="145" y="28" width="110" height="48" rx="16" fill="${d}"/>`;
        case "nodes":
          return `<path d="M70 150 L160 70 L250 130 L330 60" fill="none" stroke="${c}" stroke-width="8" stroke-linecap="round"/>
            <circle cx="70" cy="150" r="18" fill="#fff"/><circle cx="160" cy="70" r="22" fill="${d}"/><circle cx="250" cy="130" r="16" fill="${ink}"/><circle cx="330" cy="60" r="14" fill="${c}"/>`;
        case "coins":
          return `<circle cx="120" cy="120" r="58" fill="${c}"/><circle cx="210" cy="90" r="42" fill="${d}"/><circle cx="280" cy="140" r="36" fill="#fff"/><circle cx="180" cy="160" r="18" fill="${ink}"/>`;
        default:
          return `<circle cx="120" cy="80" r="16" fill="#fff"/><circle cx="180" cy="130" r="22" fill="${d}"/><circle cx="260" cy="90" r="12" fill="${c}"/><circle cx="300" cy="150" r="18" fill="#fff"/>`;
      }
    }

    function artMarkup(game, label) {
      return `<div class="art" style="--a:${game.colors[0]};--b:${game.colors[1]}">
        <svg viewBox="0 0 400 220" aria-hidden="true">${motifSVG(game)}</svg>
      </div>`;
    }

    /* ============================================
       ფილტრაცია
       ============================================ */
    function popularity(game) {
      return (game.isPopular ? 1000 : 0) + game.reviewCount + game.rating * 20;
    }
    function filteredGames() {
      const q = state.query.trim().toLowerCase();
      const list = GAMES.filter((game) => {
        if (state.type === "free" && game.price !== 0) return false;
        if (state.type === "paid" && game.price === 0) return false;
        if (state.category !== "all" && !game.categories.includes(state.category)) return false;
        if (state.difficulty !== "all" && game.difficulty !== state.difficulty) return false;
        if (state.players !== "all") {
          const [a, b] = state.players.split("-").map(Number);
          if (game.playersMax < a || game.playersMin > b) return false;
        }
        if (state.duration === "15" && game.duration > 15) return false;
        if (state.duration === "30" && (game.duration < 16 || game.duration > 30)) return false;
        if (state.duration === "60" && (game.duration < 31 || game.duration > 60)) return false;
        if (state.duration === "61" && game.duration <= 60) return false;
        if (state.age !== "all" && game.age > Number(state.age)) return false;
        if (state.priceMin !== "" && game.price < Number(state.priceMin)) return false;
        if (state.priceMax !== "" && game.price > Number(state.priceMax)) return false;
        if (q) {
          const names = game.categories.map((id) => `${catName(id)} ${catShort(id)}`).join(" ");
          if (!`${game.name} ${names}`.toLowerCase().includes(q)) return false;
        }
        return true;
      });
      list.sort((a, b) => {
        if (state.sort === "rating") return ratingInfo(b).avg - ratingInfo(a).avg || b.reviewCount - a.reviewCount;
        if (state.sort === "price-asc") return a.price - b.price || a.name.localeCompare(b.name, "ka");
        if (state.sort === "price-desc") return b.price - a.price || a.name.localeCompare(b.name, "ka");
        if (state.sort === "new") return Number(b.isNew) - Number(a.isNew) || b.created.localeCompare(a.created);
        if (state.sort === "alpha") return a.name.localeCompare(b.name, "ka");
        return popularity(b) - popularity(a);
      });
      return list;
    }
    function activeFilterCount() {
      let n = 0;
      if (state.type !== "all") n += 1;
      if (state.category !== "all") n += 1;
      if (state.players !== "all") n += 1;
      if (state.duration !== "all") n += 1;
      if (state.age !== "all") n += 1;
      if (state.difficulty !== "all") n += 1;
      if (state.priceMin !== "" || state.priceMax !== "") n += 1;
      return n;
    }

    /* ============================================
       რენდერი
       ============================================ */
    function renderCatalog(animate) {
      const games = filteredGames();
      grid.classList.toggle("animate", Boolean(animate) && motionOK);
      if (!games.length) {
        grid.innerHTML = `<div class="empty">
          <svg viewBox="0 0 92 72" aria-hidden="true"><rect x="8" y="16" width="46" height="48" rx="10" fill="#FCE9D2"/><rect x="28" y="8" width="46" height="48" rx="10" fill="#fff" stroke="#172B36" stroke-width="2"/><circle cx="51" cy="30" r="8" fill="none" stroke="#E8A45B" stroke-width="3"/></svg>
          <h3>ვერაფერი მოიძებნა</h3>
          <p>სცადეთ სხვა სიტყვა ან გაასუფთავეთ ფილტრი.</p>
          <button type="button" class="btn btn-primary" data-action="clear-filters">ფილტრის გასუფთავება</button>
        </div>`;
      } else {
        grid.innerHTML = games.map((game) => {
          const info = ratingInfo(game);
          const fav = state.favorites.includes(game.id);
          const inCart = state.cart.some((item) => item.kind === "access" && item.gameId === game.id);
          const badges = [
            game.isNew ? '<span class="pill pill-new">ახალი</span>' : "",
            game.isPopular ? '<span class="pill pill-hot">პოპულარული</span>' : ""
          ].join("");
          const action = game.price === 0
            ? `<button type="button" class="btn btn-green" data-action="play" data-id="${game.id}">თამაში</button>`
            : `<button type="button" class="btn btn-primary" data-action="add" data-id="${game.id}">${inCart ? "კალათაშია" : "კალათაში"}</button>`;
          return `<article class="game-card">
            <div class="game-top">
              <div>
                <h3><button type="button" class="card-title" data-action="open-game" data-id="${game.id}">${escapeHTML(game.name)}</button></h3>
                <p class="cats">${game.categories.map((id) => escapeHTML(catShort(id))).join(" · ")}</p>
              </div>
              <span class="pill ${game.price === 0 ? "pill-free" : "pill-price"}">${game.price === 0 ? "უფასო" : formatPrice(game.price)}</span>
            </div>
            <button type="button" class="art-btn" data-action="open-game" data-id="${game.id}" aria-label="${escapeHTML(game.name)}, დეტალურად">
              ${artMarkup(game)}
              <span class="art-badges">${badges}</span>
            </button>
            <div class="meta-row">
              <span class="meta-pill">${icon("users")}<span>${game.playersMin}–${game.playersMax}</span></span>
              <span class="meta-pill">${icon("clock")}<span>${game.duration} წთ</span></span>
              <span class="meta-pill">${icon("age")}<span>${game.age}+</span></span>
            </div>
            <div class="rating-row">
              ${starsMarkup(info.avg, "c" + game.id)}
              <span class="rating-num">${formatRating(info.avg)}</span>
              <span class="rating-count">(${info.count.toLocaleString("ka-GE")})</span>
            </div>
            <div class="card-actions">
              ${action}
              <button type="button" class="icon-btn fav-btn ${fav ? "is-on" : ""}" data-action="fav" data-id="${game.id}" aria-pressed="${fav}" aria-label="${fav ? "რჩეულებიდან ამოშლა" : "რჩეულებში დამატება"}">${icon("heart")}</button>
            </div>
          </article>`;
        }).join("");
      }
      const q = state.query.trim();
      $("#resultCount").textContent = q
        ? `„${q}“ — ნაპოვნია ${games.length.toLocaleString("ka-GE")} თამაში`
        : `ნაპოვნია ${games.length.toLocaleString("ka-GE")} თამაში`;
      const count = activeFilterCount();
      const fc = $("#filterCount");
      fc.dataset.count = String(count);
      fc.textContent = String(count);
      updateNav();
    }

    function renderCart() {
      const body = $("#cartBody");
      const foot = $("#cartFoot");
      const count = state.cart.length;
      $("#cartBadge").dataset.count = String(count);
      $("#cartBadge").textContent = String(count);
      $("#cartBtn").setAttribute("aria-label", `კალათა, ${count.toLocaleString("ka-GE")} ნივთი`);
      if (!count) {
        body.innerHTML = `<div class="panel-empty">
          <svg viewBox="0 0 88 72" aria-hidden="true"><rect x="18" y="16" width="52" height="40" rx="12" fill="#FCE9D2"/><path d="M30 16v-2a14 14 0 0 1 28 0v2" fill="none" stroke="#172B36" stroke-width="2"/></svg>
          <h3>კალათა ცარიელია</h3>
          <p>ფასიან თამაშს 24 საათით ამატებთ, ან იღებთ თვიურ პაკეტს.</p>
          <button type="button" class="btn btn-primary" data-action="jump" data-jump="paid">ფასიანი თამაშები</button>
        </div>`;
        foot.hidden = true;
        foot.innerHTML = "";
        return;
      }
      const hasPackage = state.cart.some((item) => item.kind === "package");
      body.innerHTML = state.cart.map((item) => {
        const game = item.gameId ? gameById(item.gameId) : null;
        const a = game ? game.colors[0] : "#E8A45B";
        const b = game ? game.colors[1] : "#F6D77A";
        return `<article class="line-item">
          <div class="swatch" style="--a:${a};--b:${b}"></div>
          <div><strong>${escapeHTML(item.title)}</strong><span>${escapeHTML(item.note)}</span></div>
          <div class="line-side"><span>${formatPrice(item.price)}</span>
            <button type="button" class="icon-btn" data-action="remove-cart" data-id="${escapeHTML(item.id)}" aria-label="${escapeHTML(item.title)} წაშლა">${icon("close")}</button>
          </div>
        </article>`;
      }).join("");
      const total = state.cart.reduce((sum, item) => sum + item.price, 0);
      foot.hidden = false;
      foot.innerHTML = `${hasPackage ? '<p class="drawer-note">თვიური პაკეტი ყველა ფასიან თამაშს ერთი თვით ფარავს.</p>' : ""}
        <p class="drawer-note">მეგობრებს კოდით შესაერთებლად გადახდა არ სჭირდებათ.</p>
        <div class="total"><span>ჯამი</span><span>${formatPrice(total)}</span></div>
        <button type="button" class="btn btn-primary btn-block" data-action="checkout">გადახდა</button>`;
      syncPackageButton();
    }

    function renderFavorites() {
      const body = $("#favBody");
      const count = state.favorites.length;
      $("#favBadge").dataset.count = String(count);
      $("#favBadge").textContent = String(count);
      document.querySelector('[data-panel="fav"]').setAttribute("aria-label", `რჩეულები, ${count.toLocaleString("ka-GE")}`);
      if (!count) {
        body.innerHTML = `<div class="panel-empty">
          <svg viewBox="0 0 88 72" aria-hidden="true"><path d="M44 60S20 46 20 32a12 12 0 0 1 22-6 12 12 0 0 1 22 6c0 14-20 28-20 28z" fill="#FCE9D2" stroke="#172B36" stroke-width="2"/></svg>
          <h3>ჯერ არაფერი შეგირჩევიათ</h3>
          <p>გული თამაშს აქ ინახავს, რომ მოგვიანებით იოლად იპოვოთ.</p>
        </div>`;
        return;
      }
      body.innerHTML = state.favorites.map((id) => {
        const game = gameById(id);
        if (!game) return "";
        return `<article class="fav-item">
          <div class="swatch" style="--a:${game.colors[0]};--b:${game.colors[1]}"></div>
          <button type="button" class="card-title" data-action="open-game" data-id="${game.id}">
            <strong>${escapeHTML(game.name)}</strong><span>${game.price === 0 ? "უფასო" : formatPrice(game.price)}</span>
          </button>
          <button type="button" class="icon-btn fav-btn is-on" data-action="fav" data-id="${game.id}" aria-label="რჩეულებიდან ამოშლა">${icon("heart")}</button>
        </article>`;
      }).join("");
    }

    function renderGameDialog(id) {
      const game = gameById(id);
      if (!game) return;
      state.openGameId = id;
      state.draftRating = 0;
      const info = ratingInfo(game);
      const fav = state.favorites.includes(game.id);
      const reviews = userReviews(game.id).concat(game.reviews);
      const actions = game.price === 0
        ? `<button type="button" class="btn btn-green" data-action="play" data-id="${game.id}">თამაში</button>`
        : `<div class="choice-stack">
            <button type="button" class="btn btn-primary" data-action="choice-access" data-id="${game.id}">24 საათიანი კოდი · ${formatPrice(game.price)}</button>
            <button type="button" class="btn btn-secondary" data-action="choice-package">თვიური პაკეტი · ${formatPrice(CONFIG.monthlyPrice)}</button>
          </div>`;
      $("#gameDialogBody").innerHTML = `
        <div class="modal-art art" style="--a:${game.colors[0]};--b:${game.colors[1]}">${motifSVG(game) ? `<svg viewBox="0 0 400 220" aria-hidden="true">${motifSVG(game)}</svg>` : ""}</div>
        <div class="modal-body">
          <div class="modal-title-row">
            <h2 id="gameDialogTitle">${escapeHTML(game.name)}</h2>
            <span class="pill ${game.price === 0 ? "pill-free" : "pill-price"}">${game.price === 0 ? "უფასო" : formatPrice(game.price)}</span>
          </div>
          <div class="tag-row">${game.categories.map((cid) => `<span class="tag">${escapeHTML(catName(cid))}</span>`).join("")}</div>
          <p class="desc">${escapeHTML(game.description)}</p>
          <div class="meta-row">
            <span class="meta-pill">${icon("users")}<span>${game.playersMin}–${game.playersMax} მოთამაშე</span></span>
            <span class="meta-pill">${icon("clock")}<span>${game.duration} წუთი</span></span>
            <span class="meta-pill">${icon("age")}<span>ასაკი ${game.age}+</span></span>
            <span class="meta-pill">${escapeHTML(game.difficulty)}</span>
          </div>
          <div class="rating-row" style="margin-top:12px">
            ${starsMarkup(info.avg, "m" + game.id)}
            <span class="rating-num">${formatRating(info.avg)}</span>
            <span class="rating-count">${info.count.toLocaleString("ka-GE")} შეფასება</span>
          </div>
          <div class="modal-actions">
            ${actions}
            <button type="button" class="icon-btn fav-btn ${fav ? "is-on" : ""}" data-action="fav" data-id="${game.id}" aria-pressed="${fav}" aria-label="${fav ? "რჩეულებიდან ამოშლა" : "რჩეულებში დამატება"}">${icon("heart")}</button>
          </div>
          <section class="reviews">
            <h3>მიმოხილვები</h3>
            ${reviews.map((r, index) => `<article class="review">
              <div class="review-top"><strong>${escapeHTML(r.name)}</strong><span class="rating-count">${formatDate(r.date)}</span></div>
              ${starsMarkup(r.rating, "rv" + index)}
              <p>${escapeHTML(r.text)}</p>
            </article>`).join("")}
            <form class="review-form" id="reviewForm" novalidate>
              <h3>დაწერეთ შეფასება</h3>
              <div class="rate-input" role="radiogroup" aria-label="შეფასება ვარსკვლავებით">
                ${[1, 2, 3, 4, 5].map((n) => `<button type="button" role="radio" data-star="${n}" aria-checked="false" aria-label="${n} ვარსკვლავი"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="${starPath()}"/></svg></button>`).join("")}
              </div>
              <label class="field"><span>სახელი</span><input id="reviewName" name="name" maxlength="40" autocomplete="name" required></label>
              <label class="field"><span>მიმოხილვა</span><textarea id="reviewText" name="text" maxlength="400" required></textarea></label>
              <p class="form-error" id="reviewError" hidden></p>
              <button type="submit" class="btn btn-primary">მიმოხილვის დამატება</button>
            </form>
          </section>
        </div>`;
      gameDialog.hidden = false;
      document.body.classList.add("lock");
      const closeBtn = gameDialog.querySelector(".modal-close");
      closeBtn.focus();
    }

    function syncControlsFromState() {
      document.querySelectorAll("[data-action='type']").forEach((btn) => {
        btn.setAttribute("aria-pressed", String(btn.dataset.type === state.type));
      });
      $("#fCategory").value = state.category;
      $("#fPlayers").value = state.players;
      $("#fDuration").value = state.duration;
      $("#fAge").value = state.age;
      $("#fDifficulty").value = state.difficulty;
      $("#fPriceMin").value = state.priceMin;
      $("#fPriceMax").value = state.priceMax;
      $("#fSort").value = state.sort;
      $("#searchInput").value = state.query;
      $("#searchForm .search-clear").hidden = state.query === "";
    }
    function readControls() {
      state.category = $("#fCategory").value;
      state.players = $("#fPlayers").value;
      state.duration = $("#fDuration").value;
      state.age = $("#fAge").value;
      state.difficulty = $("#fDifficulty").value;
      state.priceMin = $("#fPriceMin").value;
      state.priceMax = $("#fPriceMax").value;
      state.sort = $("#fSort").value;
    }
    function syncPackageButton() {
      const inCart = state.cart.some((item) => item.kind === "package");
      $("#packageBtn").textContent = inCart ? "პაკეტი კალათაშია" : "პაკეტის დამატება კალათაში";
    }
    function updateNav() {
      const catalogTop = $("#catalog").getBoundingClientRect().top;
      let current = "home";
      if (catalogTop < 160) {
        if (state.category !== "all") current = "categories";
        else if (state.type === "free") current = "free";
        else if (state.type === "paid") current = "paid";
        else current = "all";
      }
      document.querySelectorAll("[data-nav]").forEach((link) => {
        const on = link.dataset.nav === current;
        link.classList.toggle("is-active", on);
        if (on) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
      $("#catBtn").classList.toggle("is-active", current === "categories");
    }

    /* ============================================
       კალათა, რჩეულები, მიმოხილვები
       ============================================ */
    function bump(el) {
      if (!el) return;
      el.classList.remove("is-pop");
      void el.offsetWidth;
      el.classList.add("is-pop");
    }
    function toast(message) {
      toastEl.textContent = message;
      toastEl.classList.add("is-on");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toastEl.classList.remove("is-on"), 2800);
    }
    function addAccess(gameId) {
      const game = gameById(gameId);
      if (!game || game.price === 0) return;
      const id = "access:" + gameId;
      if (state.cart.some((item) => item.id === id)) {
        toast("ეს თამაში უკვე კალათაშია");
        closePopover();
        return;
      }
      state.cart.push({ id, kind: "access", gameId, title: game.name, price: game.price, note: "24 საათიანი კოდი" });
      storage.save();
      renderCart();
      bump($("#cartBadge"));
      toast("24 საათიანი კოდი დაემატა კალათაში");
      closePopover();
      renderCatalog(false);
    }
    function addPackage() {
      if (state.cart.some((item) => item.kind === "package")) {
        toast("თვიური პაკეტი უკვე კალათაშია");
        closePopover();
        return;
      }
      state.cart.push({
        id: "package:month",
        kind: "package",
        title: "თვიური პაკეტი",
        price: CONFIG.monthlyPrice,
        note: "ყველა ფასიანი თამაში · 1 თვე"
      });
      storage.save();
      renderCart();
      bump($("#cartBadge"));
      toast("თვიური პაკეტი დაემატა კალათაში");
      closePopover();
    }
    function removeCart(id) {
      state.cart = state.cart.filter((item) => item.id !== id);
      storage.save();
      renderCart();
      renderCatalog(false);
    }
    function toggleFav(id, source) {
      const has = state.favorites.includes(id);
      state.favorites = has ? state.favorites.filter((x) => x !== id) : state.favorites.concat(id);
      storage.save();
      renderFavorites();
      bump($("#favBadge"));
      document.querySelectorAll(`[data-action="fav"][data-id="${id}"]`).forEach((btn) => {
        const on = state.favorites.includes(id);
        btn.classList.toggle("is-on", on);
        btn.setAttribute("aria-pressed", String(on));
        btn.setAttribute("aria-label", on ? "რჩეულებიდან ამოშლა" : "რჩეულებში დამატება");
        if (source && btn === source) {
          btn.classList.remove("is-pop");
          void btn.offsetWidth;
          btn.classList.add("is-pop");
        }
      });
    }
    function submitReview(form) {
      const game = gameById(state.openGameId);
      const name = form.name.value.trim();
      const text = form.text.value.trim();
      const error = $("#reviewError");
      if (!state.draftRating) { error.hidden = false; error.textContent = "აირჩიეთ ვარსკვლავები."; return; }
      if (!name) { error.hidden = false; error.textContent = "დაწერეთ სახელი."; return; }
      if (!text) { error.hidden = false; error.textContent = "დაწერეთ მიმოხილვა."; return; }
      const list = userReviews(game.id).slice();
      list.unshift({ name: name.slice(0, 40), text: text.slice(0, 400), rating: state.draftRating, date: new Date().toISOString() });
      state.reviews[game.id] = list;
      storage.save();
      toast("მადლობა, მიმოხილვა შენახულია");
      renderCatalog(false);
      renderGameDialog(game.id);
    }

    /* ============================================
       პანელები და დიალოგები
       ============================================ */
    function mobileLayout() { return window.matchMedia("(max-width: 860px)").matches; }
    function lockPage(on) { document.body.classList.toggle("lock", on); }
    function closePopover() {
      popover.hidden = true;
      state.popoverGameId = null;
    }
    function openPopover(button, gameId) {
      const game = gameById(gameId);
      if (!game) return;
      closePanel();
      closeMega();
      state.popoverGameId = gameId;
      $("#popoverPrice").textContent = formatPrice(game.price);
      popover.hidden = false;
      const rect = button.getBoundingClientRect();
      const width = popover.offsetWidth;
      const height = popover.offsetHeight;
      let left = Math.min(rect.left, window.innerWidth - width - 12);
      left = Math.max(12, left);
      let top = rect.bottom + 8;
      if (top + height > window.innerHeight - 12) top = Math.max(12, rect.top - height - 8);
      popover.style.left = left + "px";
      popover.style.top = top + "px";
      popover.querySelector("button").focus();
    }
    function closeMega() {
      state.megaOpen = false;
      state.megaPinned = false;
      header.classList.remove("mega-open");
      $("#catBtn").setAttribute("aria-expanded", "false");
    }
    function openMega(pinned) {
      if (window.matchMedia("(max-width: 1180px)").matches) return;
      state.megaOpen = true;
      state.megaPinned = pinned || state.megaPinned;
      header.classList.add("mega-open");
      header.classList.remove("is-hidden");
      $("#catBtn").setAttribute("aria-expanded", "true");
      setSearch(false);
    }
    function setSearch(open) {
      state.searchOpen = open;
      headerInner.classList.toggle("is-search-open", open);
      $("#searchForm").inert = !open;
      $("#searchToggle").setAttribute("aria-expanded", String(open));
      if (open) {
        closeMega();
        $("#searchInput").focus();
      }
    }
    function closePanel() {
      state.panel = null;
      Object.values(drawers).forEach((el) => {
        el.classList.remove("is-open");
        el.setAttribute("aria-hidden", "true");
        el.inert = true;
      });
      filtersEl.classList.remove("is-open");
      if (mobileLayout()) filtersEl.inert = true;
      else filtersEl.inert = false;
      filtersEl.removeAttribute("role");
      backdrop.hidden = !state.openGameId && !state.codeOpen;
      if (!state.openGameId && !state.codeOpen) lockPage(false);
      if (state.lastFocus && document.contains(state.lastFocus)) state.lastFocus.focus();
    }
    function openPanel(name) {
      if (state.panel === name) { closePanel(); return; }
      closePopover();
      closeMega();
      setSearch(false);
      closeGame();
      closeCode();
      state.lastFocus = document.activeElement;
      state.panel = name;
      Object.entries(drawers).forEach(([key, el]) => {
        const on = key === name;
        el.classList.toggle("is-open", on);
        el.setAttribute("aria-hidden", String(!on));
        el.inert = !on;
      });
      const filtersOn = name === "filters" && mobileLayout();
      filtersEl.classList.toggle("is-open", filtersOn);
      filtersEl.inert = mobileLayout() ? !filtersOn : false;
      if (filtersOn) {
        filtersEl.setAttribute("role", "dialog");
        filtersEl.setAttribute("aria-modal", "true");
      }
      backdrop.hidden = false;
      lockPage(true);
      if (name === "cart") renderCart();
      if (name === "fav") renderFavorites();
      const focusRoot = name === "filters" ? filtersEl : drawers[name];
      const closeBtn = focusRoot.querySelector(".icon-btn, button");
      if (closeBtn) closeBtn.focus();
    }
    function closeGame() {
      if (gameDialog.hidden) return;
      gameDialog.hidden = true;
      state.openGameId = null;
      if (!state.panel && !state.codeOpen) { backdrop.hidden = true; lockPage(false); }
      if (state.lastFocus && document.contains(state.lastFocus)) state.lastFocus.focus();
    }
    function closeCode() {
      if (codeDialog.hidden) return;
      codeDialog.hidden = true;
      state.codeOpen = false;
      if (!state.panel && gameDialog.hidden) { lockPage(false); }
    }
    function openCode(game) {
      let raw = "";
      for (let i = 0; i < 6; i += 1) raw += Math.floor(Math.random() * 10);
      state.codeText = raw.slice(0, 3) + " " + raw.slice(3);
      state.codeOpen = true;
      $("#codeLead").textContent = game.name + " — ეს კოდი მეგობრებისთვისაა.";
      $("#codeValue").textContent = state.codeText;
      codeDialog.hidden = false;
      lockPage(true);
      codeDialog.querySelector("[data-action='copy-code']").focus();
    }
    function scrollToCatalog() {
      const top = $("#catalog").getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: motionOK ? "smooth" : "auto" });
    }
    function applyJump(kind) {
      if (kind === "free" || kind === "paid" || kind === "all") {
        state.type = kind === "all" ? "all" : kind;
        state.category = "all";
        if (kind === "all") state.sort = "popular";
      }
      if (kind === "new") { state.sort = "new"; state.type = "all"; state.category = "all"; }
      if (kind === "popular") { state.sort = "popular"; state.type = "all"; state.category = "all"; }
      syncControlsFromState();
      renderCatalog(true);
      closePanel();
      closeMega();
      scrollToCatalog();
    }
    function applyCategory(id) {
      state.category = id;
      state.type = "all";
      syncControlsFromState();
      renderCatalog(true);
      closePanel();
      closeMega();
      scrollToCatalog();
    }
    function clearFilters() {
      state.query = "";
      state.type = "all";
      state.category = "all";
      state.players = "all";
      state.duration = "all";
      state.age = "all";
      state.difficulty = "all";
      state.priceMin = "";
      state.priceMax = "";
      state.sort = "popular";
      state.searchScrolled = false;
      syncControlsFromState();
      renderCatalog(true);
    }
    function paintStars(n) {
      gameDialog.querySelectorAll("[data-star]").forEach((btn) => {
        const on = Number(btn.dataset.star) <= n;
        btn.classList.toggle("is-on", on);
        btn.setAttribute("aria-checked", String(Number(btn.dataset.star) === n));
      });
    }
    function trapFocus(container, event) {
      if (event.key !== "Tab" || !container) return;
      const nodes = [...container.querySelectorAll("a, button, input, select, textarea")].filter((el) => !el.disabled && el.tabIndex !== -1 && el.getClientRects().length);
      if (!nodes.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    function animateCounts() {
      document.querySelectorAll("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        if (!motionOK) { el.textContent = target.toLocaleString("ka-GE"); return; }
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / 900);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased).toLocaleString("ka-GE");
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }

    function handleAction(event, el) {
      const action = el.dataset.action;
      if (el.tagName === "A") event.preventDefault();
      if (action === "close-info") {
        $("#infoBar").hidden = true;
        storage.setInfoClosed();
      } else if (action === "soon") {
        toast(el.dataset.soon || "მალე დაემატება");
      } else if (action === "toggle-search") {
        setSearch(!state.searchOpen);
      } else if (action === "clear-search") {
        state.query = "";
        state.searchScrolled = false;
        syncControlsFromState();
        renderCatalog(true);
        $("#searchInput").focus();
      } else if (action === "toggle-mega") {
        if (state.megaOpen && state.megaPinned) closeMega();
        else openMega(true);
      } else if (action === "home") {
        closePanel();
        closeMega();
        window.scrollTo({ top: 0, behavior: motionOK ? "smooth" : "auto" });
      } else if (action === "jump") {
        applyJump(el.dataset.jump);
      } else if (action === "category") {
        applyCategory(el.dataset.id);
      } else if (action === "type") {
        state.type = el.dataset.type;
        syncControlsFromState();
        renderCatalog(true);
      } else if (action === "open-panel") {
        if (el.dataset.panel === "filters" && !mobileLayout()) return;
        openPanel(el.dataset.panel);
      } else if (action === "close-panel") {
        closePanel();
      } else if (action === "toggle-acc") {
        const panel = $("#mobileCats");
        const open = !panel.classList.contains("is-open");
        panel.classList.toggle("is-open", open);
        el.setAttribute("aria-expanded", String(open));
      } else if (action === "fav") {
        event.stopPropagation();
        toggleFav(el.dataset.id, el);
      } else if (action === "add") {
        openPopover(el, el.dataset.id);
      } else if (action === "choice-access") {
        addAccess(state.popoverGameId || el.dataset.id || state.openGameId);
      } else if (action === "choice-package" || action === "add-package") {
        addPackage();
      } else if (action === "remove-cart") {
        removeCart(el.dataset.id);
      } else if (action === "checkout") {
        toast("ეს დემოა — გადახდა მალე დაემატება");
      } else if (action === "play") {
        const game = gameById(el.dataset.id);
        if (game) openCode(game);
      } else if (action === "open-game") {
        state.lastFocus = document.activeElement;
        closePopover();
        closePanel();
        renderGameDialog(el.dataset.id);
      } else if (action === "close-game") {
        closeGame();
      } else if (action === "close-code") {
        closeCode();
      } else if (action === "copy-code") {
        const done = () => toast("კოდი დაკოპირდა");
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(state.codeText.replace(/\s/g, "")).then(done).catch(() => toast("კოდი: " + state.codeText));
        } else toast("კოდი: " + state.codeText);
      } else if (action === "clear-filters") {
        clearFilters();
      }
    }

    /* ============================================
       ინიციალიზაცია
       ============================================ */
    function fillCategories() {
      const select = $("#fCategory");
      select.innerHTML = `<option value="all">ყველა</option>` + CATEGORIES.map((c) => `<option value="${c.id}">${escapeHTML(c.name)}</option>`).join("");
      $("#megaGrid").innerHTML = CATEGORIES.map((c) => `<button type="button" class="mega-item" data-action="category" data-id="${c.id}">
        <span class="mega-icon">${icon(c.icon)}</span>
        <span><strong>${escapeHTML(c.name)}</strong><small>${escapeHTML(c.desc)}</small></span>
      </button>`).join("");
      $("#mobileCatsInner").innerHTML = CATEGORIES.map((c) => `<button type="button" class="acc-link" data-action="category" data-id="${c.id}">${escapeHTML(c.name)}</button>`).join("");
    }
    function applySaved() {
      const saved = storage.load();
      if (!saved) return;
      const ids = new Set(GAMES.map((g) => g.id));
      state.favorites = Array.isArray(saved.favorites) ? saved.favorites.filter((id) => ids.has(id)) : [];
      state.reviews = saved.reviews && typeof saved.reviews === "object" ? saved.reviews : {};
      state.cart = Array.isArray(saved.cart) ? saved.cart.filter((item) => item.kind === "package" || ids.has(item.gameId)) : [];
    }
    function bind() {
      document.addEventListener("click", (event) => {
        const el = event.target.closest("[data-action]");
        if (el) handleAction(event, el);
        if (state.popoverGameId && !event.target.closest("#popover") && !event.target.closest("[data-action='add']")) closePopover();
        if (state.megaOpen && !event.target.closest("#mega") && !event.target.closest("#catBtn")) closeMega();
      });
      $("#searchForm").addEventListener("submit", (event) => {
        event.preventDefault();
        if (state.query) scrollToCatalog();
      });
      $("#searchInput").addEventListener("input", () => {
        const next = $("#searchInput").value;
        const started = state.query === "" && next.trim() !== "";
        state.query = next;
        $("#searchForm .search-clear").hidden = next === "";
        renderCatalog(false);
        if (started && !state.searchScrolled) {
          state.searchScrolled = true;
          scrollToCatalog();
        }
        if (!next.trim()) state.searchScrolled = false;
      });
      filtersEl.addEventListener("change", () => { readControls(); renderCatalog(true); });
      filtersEl.addEventListener("input", (event) => {
        if (event.target.matches("input")) { readControls(); renderCatalog(true); }
      });
      $("#fSort").addEventListener("change", () => { readControls(); renderCatalog(true); });
      backdrop.addEventListener("click", () => {
        if (state.codeOpen) closeCode();
        else if (state.openGameId) closeGame();
        else closePanel();
      });
      gameDialog.addEventListener("click", (event) => { if (event.target === gameDialog) closeGame(); });
      codeDialog.addEventListener("click", (event) => { if (event.target === codeDialog) closeCode(); });
      gameDialog.addEventListener("submit", (event) => {
        if (event.target.id === "reviewForm") { event.preventDefault(); submitReview(event.target); }
      });
      gameDialog.addEventListener("click", (event) => {
        const star = event.target.closest("[data-star]");
        if (!star) return;
        state.draftRating = Number(star.dataset.star);
        paintStars(state.draftRating);
      });
      gameDialog.addEventListener("mouseover", (event) => {
        const star = event.target.closest("[data-star]");
        if (star) paintStars(Number(star.dataset.star));
      });
      gameDialog.addEventListener("mouseout", (event) => {
        if (event.target.closest("[data-star]") && !event.relatedTarget?.closest(".rate-input")) paintStars(state.draftRating);
      });
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          if (state.codeOpen) closeCode();
          else if (state.openGameId) closeGame();
          else if (state.popoverGameId) closePopover();
          else if (state.panel) closePanel();
          else if (state.megaOpen) closeMega();
          else if (state.searchOpen) setSearch(false);
        }
        const star = event.target.closest ? event.target.closest("[data-star]") : null;
        if (star && (event.key === "ArrowRight" || event.key === "ArrowLeft")) {
          event.preventDefault();
          const delta = event.key === "ArrowRight" ? 1 : -1;
          const n = Math.min(5, Math.max(1, Number(star.dataset.star) + delta));
          state.draftRating = n;
          paintStars(n);
          gameDialog.querySelector(`[data-star="${n}"]`).focus();
        }
        if (state.codeOpen) trapFocus(codeDialog, event);
        else if (state.openGameId) trapFocus(gameDialog, event);
        else if (state.panel === "filters") trapFocus(filtersEl, event);
        else if (state.panel && drawers[state.panel]) trapFocus(drawers[state.panel], event);
      });
      const catBtn = $("#catBtn");
      const mega = $("#mega");
      const hoverOK = () => window.matchMedia("(hover: hover) and (pointer: fine) and (min-width: 1181px)").matches;
      catBtn.addEventListener("mouseenter", () => { if (hoverOK()) openMega(false); });
      catBtn.addEventListener("mouseleave", () => {
        clearTimeout(megaTimer);
        megaTimer = setTimeout(() => { if (!state.megaPinned) closeMega(); }, 140);
      });
      mega.addEventListener("mouseenter", () => clearTimeout(megaTimer));
      mega.addEventListener("mouseleave", () => {
        clearTimeout(megaTimer);
        megaTimer = setTimeout(() => { if (!state.megaPinned) closeMega(); }, 140);
      });
      let lastY = window.scrollY;
      let ticking = false;
      window.addEventListener("scroll", () => {
        if (state.popoverGameId) closePopover();
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          header.classList.toggle("is-scrolled", y > 8);
          const down = y > lastY + 8;
          const up = y < lastY - 8;
          if (!state.megaOpen && !state.searchOpen && !state.panel) {
            if (down && y > 140) header.classList.add("is-hidden");
            if (up || y < 80) header.classList.remove("is-hidden");
          } else header.classList.remove("is-hidden");
          lastY = y;
          ticking = false;
          updateNav();
        });
      }, { passive: true });
      window.addEventListener("resize", () => {
        closePopover();
        if (!mobileLayout() && state.panel === "filters") closePanel();
        if (window.matchMedia("(max-width: 1180px)").matches) closeMega();
        filtersEl.inert = mobileLayout() && state.panel !== "filters";
      });
    }
    function boot() {
      document.title = SITE_NAME + " — " + CONFIG.slogan;
      document.querySelectorAll("[data-site-name]").forEach((el) => { el.textContent = SITE_NAME; });
      document.querySelectorAll("[data-monthly]").forEach((el) => { el.textContent = CONFIG.monthlyPrice.toLocaleString("ka-GE"); });
      document.querySelectorAll("[data-monthly-label]").forEach((el) => { el.textContent = formatPrice(CONFIG.monthlyPrice); });
      $("#infoText").textContent = `ერთჯერადი წვდომა ${formatPrice(minPaidPrice())}-დან · კოდი მოქმედებს 24 საათს · მეგობრები უფასოდ ერთვებიან`;
      $("#year").textContent = String(new Date().getFullYear());
      if (storage.infoClosed()) $("#infoBar").hidden = true;
      const minPlayers = Math.min(...GAMES.map((g) => g.playersMin));
      const maxPlayers = Math.max(...GAMES.map((g) => g.playersMax));
      const stats = document.querySelectorAll(".hero-stats [data-count]");
      stats[0].dataset.count = String(GAMES.length);
      stats[1].dataset.count = String(minPlayers);
      stats[2].dataset.count = String(maxPlayers);
      applySaved();
      fillCategories();
      filtersEl.inert = mobileLayout();
      bind();
      renderCatalog(true);
      renderCart();
      renderFavorites();
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      }, { threshold: 0.16 });
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
      const statsIo = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          animateCounts();
          statsIo.disconnect();
        }
      }, { threshold: 0.4 });
      const statsEl = document.querySelector(".hero-stats");
      if (statsEl) statsIo.observe(statsEl);
    }
    boot();
  