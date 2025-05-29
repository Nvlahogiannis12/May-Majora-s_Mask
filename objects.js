const townsfolk = [
  {
    Photo: "imgs/Link_MM.webp",
    Name: "Link",
    Role: "Hero of Time",
  },
  {
    Photo: "imgs/Skull_Kid_Majora.jpg",
    Name: "Majora",
    Role: "Possessed Host",
  },
  {
    Photo: "imgs/Happy_Mask_Salesman_MM.webp",
    Name: "Happy Mask Salesman",
    Role: "Mask Salesman",
  },
  {
    Photo: "imgs/Bombers_MM.webp",
    Name: "Bombers",
    Role: "Secret Society of Justice",
  },
  {
    Photo: "imgs/MM_Anju.webp",
    Name: "Anju",
    Role: "Stock Pot Inn Innkeeper",
  },
  {
    Photo: "imgs/Kafei_MM.webp",
    Name: "Kafei",
    Role: "Mysterious Youth",
  },
  {
    Photo: "imgs/Man_from_Curiosity_Shop_MM.webp",
    Name: "Curiosity Shop Keeper",
    Role: "Shop Keeper",
  },
  {
    Photo: "imgs/Old_Lady_MM.webp",
    Name: "Old Lady",
    Role: "Bomb Shop Owner",
  },
  {
    Photo: "imgs/Romani_MM.webp",
    Name: "Romani",
    Role: "Young Farm Girl",
  },
  {
    Photo: "imgs/Cremia_MM.webp",
    Name: "Cremia",
    Role: "Manager of Romani Ranch",
  },
  {
    Photo: "imgs/Mayor_Dotour_MM.webp",
    Name: "Mr. Dotour",
    Role: "Mayor of Clock Town",
  },
  {
    Photo: "imgs/Madame_Aroma_MM.webp",
    Name: "Madame Aroma",
    Role: "Mayor Wife",
  },
  {
    Photo: "imgs/Toto_MM.webp",
    Name: "Toto",
    Role: "Manager of Indigo-Gos",
  },
  {
    Photo: "imgs/Gorman_MM.webp",
    Name: "Gorman",
    Role: "Leader of Traveling troupe",
  },
  {
    Photo: "imgs/Postman_MM.webp",
    Name: "Postman",
    Role: "Mailman",
  },
  {
    Photo: "imgs/Rosa_Sisters_MM.webp",
    Name: "Rosa Sisters",
    Role: "Twin Dancers in Gorman Troupe",
  },
  {
    Photo: "imgs/Hand_MM.webp",
    Name: "???",
    Role: "Mysterious hand found in Stockpot Inn",
  },
  {
    Photo: "imgs/Granny_MM.webp",
    Name: "Anju's Grandmother",
    Role: "Storyteller",
  },
  {
    Photo: "imgs/Kamaro_MM.webp",
    Name: "Kamaro",
    Role: "Ghost of a Dancer",
  },
  {
    Photo: "imgs/Grog_MM.webp",
    Name: "Grog",
    Role: "Cucco Breeder",
  },
  {
    Photo: "imgs/Gorman_Brothers_MM.webp",
    Name: "Gorman Brothers",
    Role: "Suspicious Horse Trainers",
  },
  {
    Photo: "imgs/Shiro_MM.webp",
    Name: "Shiro",
    Role: "Soldier",
  },
  {
    Photo: "imgs/Guru-Guru_MM.webp",
    Name: "Guru-Guru",
    Role: "Gorman Troupe Musician",
  },
];

const masks = [
  {
    Photo: "imgs/Deku_Mask.webp",
    Name: "Deku Mask",
    Obtained: "Obtained By: Breaking Majora's Curse on Link",
    Purpose: "Allows Link to Transform into a Deku Scrub",
  },
  {
    Photo: "imgs/Goron_Mask.webp",
    Name: "Goron Mask",
    Obtained: "Obtained By: Healing the Goron Hero Darmani III's soul",
    Purpose: "Allows Link to Transform into a Goron",
  },
  {
    Photo: "imgs/Zora_Mask.webp",
    Name: "Zora Mask",
    Obtained: "Obtained By: Helping Mikau the Zora rest his soul",
    Purpose: "Allows Link to Transform into a Zora",
  },
  {
    Photo: "imgs/Fierce_Deity_Mask.webp",
    Name: "Fierce Deity Mask",
    Obtained: "Obtained By: Solving all of Clock Town's problems",
    Purpose: "Allows Link to Transform into the Fierce Deity",
  },
  {
    Photo: "imgs/Postman_Hat.webp",
    Name: "Postman's Hat",
    Obtained:
      "Obtained By: Convincing the Post Man to run away and escape the Moon",
    Purpose: "Allows Link to deliver letters and check Mailboxes",
  },
  {
    Photo: "imgs/All_Night_Mask.webp",
    Name: "All-Night Mask",
    Obtained:
      "Obtained By: Purchased from the Curiosity Shop on the Third Night",
    Purpose: "Allows Link to stay awake during Anju's Grandmother's stories",
  },
  {
    Photo: "imgs/Blast_Mask.webp",
    Name: "Blast Mask",
    Obtained: "Obtained By: Saving the Old Lady from a thief",
    Purpose: "Allows Link to cause Explosions",
  },
  {
    Photo: "imgs/Stone_Mask.webp",
    Name: "Stone Mask",
    Obtained: "Obtained By: Helping Shiro",
    Purpose: "Allows Link to be not seen by guards in various locations",
  },
  {
    Photo: "imgs/Great_Fairy_Mask.webp",
    Name: "Great Fairy Mask",
    Obtained: "Obtained By: Returning a Fairy to the Great Fairy",
    Purpose: "Allows Link to attack stray fairies",
  },
  {
    Photo: "imgs/Keaton_Mask.webp",
    Name: "Keaton Mask",
    Obtained: "Obtained By: Finding and speaking to Kafei",
    Purpose: "Allows Link to meet a Keaton",
  },
  {
    Photo: "imgs/Bremen_Mask.webp",
    Name: "Bremen Mask",
    Obtained: "Obtained By: Hearing Guru-Guru's story",
    Purpose: "Allows Link to help fulfill Grog's wish",
  },
  {
    Photo: "imgs/Bunny_Hood.webp",
    Name: "Bunny Hood",
    Obtained: "Obtained By: Fulfilling Grog's wish",
    Purpose: "Allows Link to run faster and jump farther",
  },
  {
    Photo: "imgs/Don_Gero's_Mask.webp",
    Name: "Don Gero's Mask",
    Obtained: "Obtained By: Feeding the stranded Goron on the Mountains",
    Purpose: "Allows Link to assemble the Frog Choir",
  },
  {
    Photo: "imgs/Mask_of_Scents.webp",
    Name: "Mask of Scents",
    Obtained: "Obtained By: Racing the Deku Butler",
    Purpose: "Allows Link to find magic mushrooms for the Witches",
  },
  {
    Photo: "imgs/Romanis_Mask.webp",
    Name: "Romani's Mask",
    Obtained: "Obtained By: Assisting Romani with her milk delivery",
    Purpose: "Allows Link to enter the Milk Bar",
  },
  {
    Photo: "imgs/Troupe_Leader_Mask.webp",
    Name: "Troupe Leader's Mask",
    Obtained: "Obtained By: Play a song in the Milk Bar",
    Purpose: "Allows Link to cheer up Gorman Brothers",
  },
  {
    Photo: "imgs/Kafei_Mask.webp",
    Name: "Kafei's Mask",
    Obtained: "Obtained By: Accept the Quest to look for Kafei",
    Purpose: "Allows Link to ask the Townsfolk about Kafei",
  },
  {
    Photo: "imgs/Couple_Mask.webp",
    Name: "Couple's Mask",
    Obtained: "Obtained By: Reuniting Kafei and Anju",
    Purpose: "Allows Link to stop the fighting in Town Hall",
  },
  {
    Photo: "imgs/Mask_of_Truth.webp",
    Name: "Mask of Truth",
    Obtained: "Obtained By: Break the Swamp Spider House' Curse",
    Purpose: "Allows Link to speak to animals and Gossip Stones",
  },
  {
    Photo: "imgs/Kamaro_Mask.webp",
    Name: "Kamaro's Mask",
    Obtained: "Obtained By: Finding Kamaro's Spirit",
    Purpose: "Allows Link to teach the Rosa Sisters to dance",
  },
  {
    Photo: "imgs/Gibdo_Mask.webp",
    Name: "Gibdo Mask",
    Obtained: "Obtained By: Saving Pamela's Father in Ikana Valley",
    Purpose: "Allows Link to Redeads and Gibdos",
  },
  {
    Photo: "imgs/Garo_Mask.webp",
    Name: "Garo's Mask",
    Obtained: "Obtained By: Beat the Gorman Brothers in a race",
    Purpose: "Allows Link to enter Ikana Canyon",
  },
  {
    Photo: "imgs/Captain_Hat.webp",
    Name: "Captain's Hat",
    Obtained: "Obtained By: Awaken and Defeat Captain Keeta of Ikana",
    Purpose: "Allows Link to speak to undead soldiers",
  },
  {
    Photo: "imgs/Giant_Mask.webp",
    Name: "Giant's Mask",
    Obtained: "Obtained By: Fighting the Stone Temple Boss",
    Purpose: "Allows Link to turn into a giant",
  },
];
