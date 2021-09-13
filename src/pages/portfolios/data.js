const beaches = [
  {
    id: 1,
    name: "White Beach",
    location: "Boracay Island, Western Visayas region of the Philippines",
    image:
      "https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702_1280.jpg",
    info: "White Beach and other beaches in Boracay are not only considered as some of the best in the Philippines but are also hailed as the best in the world by several international travel publications. The water in Boracay is both calm and clear and stretches out like a vast infinity pool. Its fine sand is devoid of rocks and keeps cool even on the hottest of days. White beach is lined with resorts and restaurants that cater to all sorts of palates. You can also try out White Beach activities like the banana boat ride, parasailing tour, paraw sailing tour, paddleboarding tour, helmet diving tour, jet ski experience, wakeboarding activity, and speedboat riding.",
    travel: "From January to May and November to December, the driest months.",
  },

  {
    id: 2,
    name: "Nacpan Beach",
    location: "El Nido, Palawan",
    image:
      "https://cdn.pixabay.com/photo/2020/01/11/09/28/island-hopping-4756966_1280.jpg",
    info: "Nacpan Beach is considered by many as the real hidden gem of El Nido due to being uncrowded and untouched by mass tourism. You can spend a lazy day here just swimming, sunbathing, or hiking to the hill where you can see the view of the Twin Beaches. This is why Nacpan beach tours are massively popular among local and international travelers. You must try a Nacpan Beach inland excursion in El Nido aside from island-hopping experiences. There are also plenty of other beaches in El Nido worth exploring if you have more time.​",
    travel:
      "The months of January to May and December when the roads going to Nacpan Beach are dry.",
  },

  {
    id: 3,
    name: "Alona Beach",
    location: "Brgy.Tawala, Panglao Island",
    image:
      "https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg",
    info: "Alona Beach, which is named after a famous Filipina actress in the ’70s, is a 1.5-kilometer stretch of white sand that is one of the most well-known tourist spots in Bohol aside from the Chocolate Hills. It's a perfect destination for families with resorts lining up its coast. The water is tranquil and devoid of rocks and corals, which makes it perfect for swimming. Aside from lounging on the beach, you can try fun Alona Beach activities like the banana boat ride, UFO ride, parasailing activity, and join island-hopping tours to nearby islets and islands.",
    travel: "From January to May and November to December.",
  },

  {
    id: 4,
    name: "Kota Beach",
    location: "Bantayan Island​​, Cebu",
    image:
      "https://cdn.pixabay.com/photo/2016/11/14/22/18/beach-1824855_1280.jpg",
    info: "Kota Beach is one of the most stunning beaches in Bantayan Island, Cebu, and features crystal clear waters, powdery white sand, and a sandbar that appears during low tide. Bantayan Island is located on the Northwest Coast of Cebu and boasts fine beaches without the big resorts and commercial establishments. Bantayan Island is a perfect destination for travelers who want a laid-back atmosphere and are looking for new Cebu experiences.",
    travel:
      "From January to the middle of June when waves are calmer for ferry rides from the main island of Cebu.",
  },

  {
    id: 5,
    name: "Malcapuya Beach",
    location: "Coron​​, Palawan",
    image:
      "https://cdn.pixabay.com/photo/2016/10/10/22/36/seychelles-1730082_1280.jpg",
    info: "Coron, Palawan is a popular Philippine destination because of its beautiful islands and beaches. One of the must-visit tourist spots in Coron is Malcapuya Beach that you can go to by joining an excursion at Culion Island. It has a 1.5-kilometer stretch of pristine white sand. ​Besides being a great swimming spot, it’s one of the best places to snorkel and dive. It’s teeming with marine life and colorful corals. Drink straight from a coconut as you stroll around the beach lined with palm trees. Make sure to take photos as well, as it’s one of those picturesque beaches that deserve a spot on your photo album.",
    travel:
      "From October, November, December, January, February, March, April, May, to the middle of June.",
  },

  {
    id: 6,
    name: "Dahican Beach",
    location: "Mati, Davao Oriental",
    image:
      "https://cdn.pixabay.com/photo/2013/04/02/13/06/beach-99388_1280.jpg",
    info: "Dahican Beach in Mati, Davao Oriental is not like your typical white sand beach; it’s also a skimboarding and surfing spot. It has a 7-kilometer stretch of white sand perfect for lounging for non-surfers and non-skimboarders. It is also a sanctuary for sea turtles, so keep on the lookout for them. This underrated beach in Mati is one of the best in Davao Oriental and worth the 4-hour land trip from Davao City.",
    travel: "The months of January to May and December.",
  },

  {
    id: 7,
    name: "Saud Beach",
    location: "Pagudpud, North Luzon",
    image:
      "https://cdn.pixabay.com/photo/2021/08/02/16/22/beach-6517214_1280.jpg",
    info: "Pagudpud, a coastal town in the Ilocos region and a popular holiday destination in North Luzon, is famous for its windmills, lighthouses, and other tourist spots. But it’s also a popular destination for travelers because of Saud Beach. Known for its calm waters and stunning sunset views, this idyllic beach has 2 kilometers of powdery white sand. Take photos as you wade around its waters with the scenic view of Pagudpud as the backdrop!",
    travel: "From January to early May and November to December.",
  },

  {
    id: 8,
    name: "Paliton Beach",
    location: "Siquijor, Central Visayas",
    image:
      "https://cdn.pixabay.com/photo/2016/08/10/12/44/zakynthos-1583127_1280.jpg",
    info: "This beach is famous for its immaculate turquoise waters, white sand, and its picturesque backdrop of coconut trees. Visiting this beach is worth it, even during peak season.​ Join a Siquijor island adventure to visit Paliton Beach aside from the top attractions in the province. The stunning sunset is a must-see in Paliton Beach! The most convenient way to go to Paliton Beach is by riding a scooter or a tricycle.",
    travel: "From January to May and November to December.",
  },

  {
    id: 9,
    name: "Bonbon Beach",
    location: "Romblon",
    image:
      "https://cdn.pixabay.com/photo/2017/11/24/21/49/bali-2975787_1280.jpg",
    info: "Bonbon Beach is an idyllic beach paradise located in the island province of Romblon, found in between Luzon and Visayas. It is well-known for its long stretch of white sandbar extending up to 2 kilometers and connecting to Bang-og. The sandbar is visible during low tide when you can walk to Bang-og Island too!​ If you want to have a great time at this beach and enjoy its crystal clear waters and stretch of white sand to its full extent, make sure to visit either early in the morning or in the late afternoon.",
    travel: "From January to May when it's the safest to travel by boat.",
  },

  {
    id: 10,
    name: "Malamawi Beach",
    location: "Isabela City, Basilan",
    image:
      "https://cdn.pixabay.com/photo/2020/05/05/23/08/africa-5135407_1280.jpg",
    info: "Malamawi Beach is an unspoiled white sand beach in Isabela City of Basilan, Mindanao. This off-the-beaten-path tourist spot is worth checking out because of its turquoise waters, stunning white sand, and uninhibited beauty. Go for a walk, swim, snorkel, have a picnic, watch the sunset, and more. There are beachfront cottages and small stalls selling food and other kinds of souvenirs. You can even rent kayaks if you want to try that water sport activity while in the area.​ You can get to Malamawi Beach via ferry ride from Zamboanga City.",
    travel: "From January to April.",
  },
];

export default beaches;
