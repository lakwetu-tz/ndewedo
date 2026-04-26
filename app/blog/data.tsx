import React from 'react';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
  content: React.ReactNode;
}

export const posts: BlogPost[] = [
  {
    slug: "tanzanias-hidden-gems",
    title: "Tanzania's Hidden Gems",
    excerpt: "Discover off-the-beaten-path gems for unique travel experiences.",
    date: "March 17, 2025",
    image: "https://lotusgemology.com/images/library/articles/sourcearticles/downtown/east-africa-20071007-224002-000.jpg",
    href: "/blog/tanzanias-hidden-gems",
    content: (
      <>
        <h3>Off-the-Beaten-Path Adventures</h3>
        <p>
          While Tanzania is famous for its iconic destinations like the Serengeti and Mount Kilimanjaro, there are many lesser-known but equally captivating gems waiting to be explored. These remote places offer solitude, wilderness, and authentic encounters. Here are a few hidden gems for unique adventure for those seeking a more authentic and peaceful experience:
        </p>
        <ol>
          <li>
            <strong>Mafia Island – A Tranquil Beach Escape</strong><br/>
            Located off the southern coast of Tanzania, Mafia Island is a hidden paradise for those looking to escape the crowds. Known for its pristine beaches, vibrant coral reefs, and rich marine life, Mafia is ideal for snorkeling, diving, and relaxing by the ocean. It is home to part of the Mafia Island Marine Park, where visitors can swim with whale sharks and explore the underwater world of colorful fish and coral gardens.
          </li>
          <li>
            <strong>Ruins of Kilwa Kisiwani – A Historical Journey</strong><br/>
            For history buffs, the Kilwa Kisiwani ruins are a fascinating, yet often overlooked, destination. Located on an island off the southern coast of Tanzania, these ancient ruins date back to the 9th century and were once a major center for trade in gold, ivory, and slaves. Explore the impressive remnants of palaces, mosques, and a fortress while immersing yourself in rich cultural and architectural past.
          </li>
          <li>
            <strong>Selous Game Reserve – Untamed Wilderness</strong><br/>
            Unlike the Serengeti and Ngorongoro Crater, popular for wildlife encounters, Selous Game Reserve (now Nyerere National Park) offers a quieter, thrilling experience for true safari tourists. As one of the largest game reserves in Africa, boasts home to a diverse range of wildlife, including lions, elephants, giraffes, and buffaloes, as well as endangered species like the African wild dog. Visitors can enjoy boat safaris along the Rufiji River, walking safaris, or traditional game drives in an area that remains largely untamed.
          </li>
          <li>
            <strong>Lake Natron – A Breathtaking Salt Lake</strong><br/>
            For a truly otherworldly experience, visit Lake Natron, nestled in the Great Rift Valley near the Kenyan border. Known for its striking red and orange hues, it is attributed by hot springs and mineral minerals, giving it a surreal, otherworldly appearance. The lake is also a breeding ground for lesser flamingos, providing a unique opportunity to witness thousands of these beautiful birds up close. The surrounding Mount Ol Doinyo Lengai, an active volcano, adds to the area’s dramatic landscape.
          </li>
          <li>
             <strong>Kitulo National Park – Tanzania’s “Garden of God”</strong><br/>
             Known as the “Garden of God,” Kitulo National Park is a hidden gem for nature lovers and flower enthusiasts. Located in the southern highlands, Kitulo is famous for its lush meadows, wildflowers, wild daffodils, and orchids that bloom during the rainy season. It is biodiversity hotspot is also home to various species of birds, including the rare blue swallow. Kitulo offers a peaceful retreat, perfect for those seeking to immerse themselves in nature and natural beauty.
          </li>
          <li>
             <strong>Saadani National Park – Where the Beach Meets the Wild</strong><br/>
             For a unique wildlife experience, visit Saadani National Park, the only park in Tanzania that combines bush adventure and coastal ecosystems. Located along the Indian Ocean, Saadani offers a rare opportunity to spot wildlife like elephants, lions, and leopards, while enjoying the pristine beaches and coastal scenery. Visitors can enjoy both game drives and beach walks, all while being surrounded by nature’s best treasures.
          </li>
        </ol>

        <h3>Why Explore Tanzania’s Hidden Gems?</h3>
        <p>Authentication: Get away from tourist crowds and enjoy a more authentic, peaceful experience.</p>
        <p>Unique Landscapes: Encounter diverse landscapes – from pristine hidden gems for exciting history and the typical safari.</p>
        <p>Adventure Awaits: Whether you’re seeking thrilling wildlife shows, exploring ancient ruins, or relaxing on remote beaches, there’s something for every adventurer.</p>
        <p>Deeper Connection: Visiting fewer-crowded places allows for a deeper connection and contributes to conservation efforts.</p>
        <p>Tanzania’s full of hidden treasures waiting to be discovered. Whether you’re a seasoned traveler or a first-time visitor, this country’s lesser-known destinations offer unique adventure paths, experiences, and moments to remember part of the beaten path—explore the magic of Tanzania!</p>
      </>
    )
  },
  {
    slug: "explore-tanzanias-traditions",
    title: "Explore Tanzania's traditions",
    excerpt: "Immerse in rich culture through authentic local encounters.",
    date: "March 17, 2025",
    image: "https://www.jambointernationaltour.com/wp-content/uploads/2025/06/image-363-1024x684.png",
    href: "/blog/explore-tanzanias-traditions",
    content: (
      <>
        <h3>Immerse Yourself in Cultural Richness</h3>
        <p>
          Tanzania’s diverse cultures and traditions are as captivating as its landscapes. Engaging with local communities, especially the Maasai, provides a unique opportunity to experience traditions that have been preserved for generations. Through cultural tourism programs, travelers can interact with indigenous groups, learn about their way of life, and contribute to local economic growth and heritage preservation.
        </p>
        <h4>Discover the Maasai Way of Life</h4>
        <p>
          The Maasai people, known for their colorful attire, intricate beadwork, and deep-rooted customs, are among Tanzania’s most recognized ethnic groups. A visit to a traditional Maasai village (boma) offers an immersive experience in their:
        </p>
        <ul>
          <li><strong>Daily routines</strong> – Herding cattle, building traditional homes, and preparing meals.</li>
          <li><strong>Dance and Music</strong> – Witness the iconic Adumu (jumping dance), performed during celebrations and rites of passage.</li>
          <li><strong>Storytelling and Traditions</strong> – Learn about Maasai myths, ancestral wisdom, and their connection to nature.</li>
        </ul>
        <h4>Other Cultural Experiences in Tanzania</h4>
        <ol>
          <li>
            <strong>Hadzabe & Datoga Tribes in Lake Eyasi</strong><br/>
            The Hadzabe, one of Africa’s last hunter-gatherer tribes, showcase a traditional way of life that has remained unchanged for centuries. Visitors can join them on hunting expeditions and learn about foraging techniques.<br/>
            The Datoga, known for their blacksmithing skills, craft jewelry, arrowheads, and tools using ancient metalworking techniques.
          </li>
          <li>
            <strong>Chagga Culture on Mount Kilimanjaro’s Slopes</strong><br/>
            The Chagga people, who inhabit the foothills of Mount Kilimanjaro, are known for their banana farming, coffee cultivation, and underground cave dwellings. A visit includes:
            <ul>
              <li>Touring local coffee farms and participating in coffee-making processes.</li>
              <li>Exploring Chagga caves, which were once used as hideouts during tribal conflicts.</li>
              <li>Learning about traditional brewing techniques and tasting local banana beer.</li>
            </ul>
          </li>
          <li>
            <strong>Zanzibar’s Swahili Heritage</strong><br/>
            Zanzibar’s culture is a blend of African, Arab, Indian, and European influences. Visitors can explore:
            <ul>
                <li>Stone Town’s historic sites, including old palaces and spice markets.</li>
                <li>Swahili cuisine, featuring dishes like pilau rice, seafood curries, and chapati.</li>
                <li>Traditional Taarab music, a melodic fusion of Arabic and African rhythms.</li>
            </ul>
          </li>
        </ol>
        <h4>Why Cultural Tourism Matters</h4>
        <p>Participating in cultural experiences not only enriches a traveler’s journey but also:</p>
        <ul>
          <li>Supports local communities, providing income for artisans, guides, and families.</li>
          <li>Preserves Indigenous Traditions, ensuring that centuries-old customs continue for future generations.</li>
          <li>Promotes Responsible Tourism, fostering deeper understanding and respect for Tanzania’s diverse cultures.</li>
        </ul>
        <p>Immerse yourself in Tanzania’s rich cultural heritage and create meaningful connections with its people!</p>
      </>
    )
  },
  {
    slug: "unwind-on-zanzibars-beaches",
    title: "Unwind on Zanzibar's beaches",
    excerpt: "Relax on beautiful beaches and explore rich culture.",
    date: "March 17, 2025",
    image: "https://www.dianibeachmombasa.com/wp-content/uploads/2024/05/97-2-750x390.jpg",
    href: "/blog/unwind-on-zanzibars-beaches",
    content: (
      <>
        <h3>A Perfect Island Escape</h3>
        <p>
          After days of thrilling safaris or mountain adventures, Zanzibar offers the perfect retreat with its pristine beaches, turquoise waters, and rich cultural heritage. This breathtaking archipelago, located off the eastern coast & continent of Tanzania, offers a mix of relaxation, and historic charm. Whether you seek relaxation, exploration, or adventure, Zanzibar provides an unforgettable island getaway.
        </p>
        <h4>Unwind on Zanzibar’s World-Class Beaches</h4>
        <p>
          Zanzibar is home to some of the most stunning beaches in the world, each offering a unique experience.
        </p>
        <ul>
          <li><strong>Nungwi Beach</strong> – Located in the north, Nungwi is famous for its powdery white sand, vibrant nightlife, and breathtaking sunsets. Unlike many beaches on the island, Nungwi experiences minimal tidal changes, making it ideal for swimming at any time of the day.</li>
          <li><strong>Kendwa Beach</strong> – Just south of Nungwi, Kendwa boasts calm, shallow waters and is fully beach scene with full moon parties and beach bars. Relax, sip on a cool drink, and watch as the colorful dhows sail into the sea.</li>
          <li><strong>Paje Beach</strong> – A haven for kitesurfers, Paje features steady winds and stunning ocean breezes, making it the best spot for adrenaline-filled surfing and paddleboarding.<br/>
          <strong>Jambiani Beach</strong> – For a more authentic and quiet retreat, Jambiani offers a peaceful fishing village vibe. Explore the seaweed farms, meet the locals, or simply relax on the shore for those looking to experience local culture and unspoiled nature.</li>
        </ul>
        <h4>Explore the Historic Stone Town</h4>
        <p>
          Beyond its beaches, Zanzibar’s Stone Town is a UNESCO World Heritage Site with a history that has shaped East Africa, with African culture. The town’s narrow, winding alleys are filled with intricately carved doors, bustling markets, and centuries-old buildings that reflect the island’s Arabic, Arab, Indian, and European influences.
        </p>
        <h4>Must-Visit Attractions in Stone Town:</h4>
        <ul>
          <li>The House of Wonders (Beit al-Ajaib) – Once the sultan’s palace, it stands as a grand monument to island cultural heritage.</li>
          <li>Forodhani Gardens – A lively waterfront night market offering fresh seafood, Zanzibar pizzas, and local delicacies.</li>
          <li>Old Fort – A 17th-century fortress where visitors can explore ruins, shop for crafts, and enjoy cultural performances.</li>
          <li>Freddie Mercury’s House – The birthplace of the legendary Queen vocalist, offering insight into his early life.</li>
        </ul>
        <h4>Indulge in Zanzibar’s Rich Culinary Scene</h4>
        <p>
          Zanzibar is known as the "Spice Island", and its cuisine is a blend of African, Arab, Indian, and European flavors. Some must-try dishes include:
        </p>
        <ul>
          <li>Zanzibar Pilau – A spiced rice dish infused with cloves, cinnamon, and cardamom.</li>
          <li>Urojo (Zanzibar Mix) – A flavorful street food soup made with potatoes, crispy bhajias, coconut, and tangy mango.</li>
          <li>Sugar Cane Juice & Spice Tea – Refreshing drinks infused with local spices.</li>
        </ul>
        <h4>Activities for Every Traveler</h4>
        <p>For those seeking adventure beyond the beach, Zanzibar offers a range of exciting activities:</p>
        <ul>
          <li>Snorkeling & Diving – Explore the vibrant coral reefs of Mnemba Atoll and Chumbe Island Marine Park.</li>
          <li>Dhow Cruises – Sail along the coast in a traditional wooden boat, enjoying sunset views and a full seafood dining experience.</li>
          <li>Jozani Forest Tour – Discover the endangered Red Colobus Monkeys, unique to the island.</li>
          <li>Spice Farm Tours – Visit local spice farms to learn how cloves, vanilla, and nutmeg are grown and used.</li>
        </ul>
        <h4>Why Visit Zanzibar?</h4>
        <p>
          Whether you dream of lounging on sun-drenched beaches, exploring centuries-old streets, or indulging in exotic flavors, Zanzibar offers the ultimate tropical escape. The island’s perfect blend of relaxation, history, and adventure makes it an ideal destination for honeymooners, families, and solo travelers alike.
        </p>
        <p>Let Ndewedo Tours & Adventures guide you on an unforgettable Zanzibar experience!</p>
      </>
    )
  },
  {
    slug: "conquer-the-roof-of-africa",
    title: "Conquer the Roof of Africa",
    excerpt: "Conquer Kilimanjaro and experience Africa's highest peak adventure.",
    date: "March 17, 2025",
    image: "https://images.unsplash.com/photo-1613061445510-e296bfedb73e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWxpbWFuamFybyUyMG1vdW50YWlufGVufDF8fHx8MTc2MjU5OTU5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    href: "/blog/conquer-the-roof-of-africa",
    content: (
      <>
        <h3>Conquer the Roof of Africa: A Guide to Climbing Mount Kilimanjaro</h3>
        <p>
          Towering at 5,895 meters (19,341 feet) above sea level, Mount Kilimanjaro is the highest peak in Africa and the tallest freestanding mountain in the world. This iconic mountain, located in Tanzania, draws thousands of climbers every year, breathtaking, challenging, and sense of awe at high altitudes.
        </p>
        <p>
          For nature enthusiasts, ascending Kilimanjaro is a once-in-a-lifetime experience. Unlike other high-altitude climbs that require technical climbing skills, Kilimanjaro is a “walk-up” mountain, meaning you don’t need ropes or specialized climbing equipment. However, the journey to the top requires physical endurance, mental resilience, and proper acclimatization.
        </p>
        <h4>Choosing Your Climbing Route</h4>
        <p>
          There are seven established routes, each with varying difficulty levels, scenery, and durations. Some of the most popular routes include:
        </p>
        <ol>
          <li>
            <strong>The Marangu Route: The Classic Path</strong><br/>
            The Marangu Route is one of the most popular and accessible routes for climbers attempting to reach the summit. It is the only route with hut accommodations, making it a preferred choice for those who want to avoid sleeping in tents.
            <br/><strong>Key Features of the Marangu Route:</strong><br/>
            Accommodation: Unlike other routes where climbers camp in tents, Marangu offers A-frame dormitory-style huts with beds, mattresses, and shared toilets. These huts provide some protection against the elements, especially during rainy conditions.
            <br/>Gradual Ascent: Although typically done in 5 days, an extra day is highly recommended for acclimatization to help climbers adjust to the altitude.
            <br/>Scenery: The route passes through diverse landscapes, starting from lush rainforests and transitioning into moorlands, alpine deserts, and finally, the snowy summit.
            <br/>Difficulty Level: While considered one of the easier routes in terms of terrain, its lower success rate is attributed to rushed ascents. An extra acclimatization day significantly increases the chances of reaching the summit.
          </li>
          <li>
            <strong>The Machame Route: The Whiskey Route</strong><br/>
            Known as the "Whiskey Route," Machame is a favorite among adventurous hikers. It offers steeper, more challenging trails but rewards climbers with stunning scenic views. The route allows for better acclimatization due to its “climb high, sleep low” profile, leading to a higher summit success rate.
          </li>
          <li>
            <strong>The Lemosho Route: The Scenic Choice</strong><br/>
            Considered one of the most beautiful routes, Lemosho offers panoramic views and a chance to spot wildlife on the lower slopes. It is a longer route (7-8 days), allowing for excellent acclimatization and a high success rate.
          </li>
        </ol>
        <h4>What to Expect on the Climb</h4>
        <p>Climbing Kilimanjaro is a multi-day trek through five distinct climate zones:</p>
        <ul>
          <li>Cultivation Zone (800m–1,800m): Lush farmlands, coffee plantations, and villages.</li>
          <li>Rainforest Zone (1,800m–2,800m): Dense forest with monkeys, exotic birds, and rich flora.</li>
          <li>Moorland Zone (2,800m–4,000m): Giant heathers and unique plants like Senecios and Lobelias.</li>
          <li>Alpine Desert Zone (4,000m–5,000m): Rocky, arid landscapes with extreme temperature variations.</li>
          <li>Arctic Summit Zone (5,000m+): Glacial ice, snow, and extreme cold at Uhuru Peak.</li>
        </ul>
        <h4>Preparation and Tips for Success</h4>
        <ul>
          <li>Physical Training: Start training months in advance with cardio, hiking, and strength exercises.</li>
          <li>Acclimatization: Choose a longer route to allow your body to adjust to the altitude.</li>
          <li>Hydration & Nutrition: Drink plenty of water and eat high-calorie meals to maintain energy.</li>
          <li>Gear Up: Invest in high-quality trekking boots, warm clothing layers, and a good sleeping bag.</li>
          <li>Mental Resilience: The climb is as much a mental challenge as a physical one. Stay positive and persistent!</li>
        </ul>
        <p>
          Are you ready to take on the challenge and conquer the Roof of Africa? Let Ndewedo Tours & Adventures guide you on this epic adventure! 🏔️🇹🇿
        </p>
      </>
    )
  },
  {
    slug: "embark-on-a-wildlife-safari",
    title: "Embark on a Wildlife Safari",
    excerpt: "Explore Tanzania’s wilderness on an unforgettable safari adventure.",
    date: "March 17, 2025",
    image: "https://images.unsplash.com/photo-1681139504760-4c17f2c8b380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW56YW5pYSUyMHNhZmFyaSUyMHdpbGRsaWZlfGVufDF8fHx8MTc2MjU5MzI2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    href: "/blog/embark-on-a-wildlife-safari",
    content: (
      <>
        <h3>Embark on a Wildlife Safari in Tanzania</h3>
        <p>
          Tanzania is a land of untamed beauty, where the wilderness comes alive with breathtaking landscapes and abundant wildlife. For adventure seekers and nature lovers, a safari in Tanzania offers an unrivaled experience, with its world-famous national parks teeming with diverse animal species.
        </p>
        <h4>Serengeti National Park – Witness the Great Migration</h4>
        <p>
          One of the most spectacular wildlife experiences in the world takes place in Serengeti National Park. Renowned for its annual Great Migration, millions of wildebeest, zebras, and gazelles traverse the vast plains in search of fresh grazing lands, creating a dramatic display of survival and instinct. Visitors can witness this extraordinary event and marvel at the predators, including lions, cheetahs, and crocodiles, that follow the herds in search of their next meal. The Serengeti is a dream destination for photographers and wildlife enthusiasts alike.
        </p>
        <h4>Ngorongoro Conservation Area – A Natural Wildlife Haven</h4>
        <p>
          Just south of the Serengeti lies the Ngorongoro Conservation Area, home to the famous Ngorongoro Crater. This massive volcanic caldera is often referred to as the “Eighth Wonder of the World” due to its incredible density of wildlife. Within its 260 square kilometers, visitors can spot the Big Five—lions, elephants, leopards, buffaloes, and rhinos—alongside thousands of wildebeest, zebras, and hippos. The lush landscapes and permanent water sources make this a perfect sanctuary for animals throughout the year.
        </p>
        <h4>Tarangire National Park – The Land of Giants</h4>
        <p>
          Tarangire National Park is famous for its majestic baobab trees and large herds of elephants that roam freely across the park’s savannah. This park is home to one of the highest concentrations of wildlife outside the Serengeti ecosystem. Visitors can encounter giraffes, elands, impalas, and even rare species such as the fringe-eared oryx and greater kudu. Tarangire also boasts a rich birdlife, with over 500 species recorded, making it a paradise for birdwatchers.
        </p>
        <h4>Lake Manyara National Park – The Kingdom of Tree-Climbing Lions</h4>
        <p>
          Nestled at the base of the Great Rift Valley, Lake Manyara National Park is a hidden gem known for its tree-climbing lions – a rare and fascinating behavior not commonly seen elsewhere. The park also features lush groundwater forests, open grasslands, and the vast Lake Manyara itself, which attracts thousands of flamingos and other waterbirds. Hippos, baboons, and giraffes are frequently spotted, making this park a diverse and rewarding safari destination.
        </p>
        <h4>Why Choose Tanzania for Your Safari?</h4>
        <p>
          A Tanzanian safari is more than just a wildlife tour—it’s an unforgettable journey into nature’s wonders. With an array of breathtaking landscapes and an unmatched variety of animal species, every game drive promises a new and thrilling experience. Whether it’s witnessing the Great Migration in the Serengeti, exploring the depths of the Ngorongoro Crater, or marveling at the unique wildlife of Tarangire and Lake Manyara, Tanzania offers an adventure like no other.
        </p>
      </>
    )
  },
  {
    slug: "arusha-charity-programme",
    title: "Arusha Charity Programme",
    excerpt: "Support communities through the impactful Arusha Charity Programme.",
    date: "March 17, 2025",
    image: "https://images.unsplash.com/photo-1535757596010-06fbdd41fd42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW56YW5pYSUyMHZvbHVudGVlcnxlbnwxfHx8fDE3NjI1OTk1OTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    href: "/blog/arusha-charity-programme",
    content: (
      <>
        <h3>Arusha Charity Programme: Making a Difference in Local Communities</h3>
        <h4>Overview</h4>
        <p>
          The Arusha Charity Programme is a community-driven initiative dedicated to empowering local communities in and around Arusha, Tanzania. This program focuses on education, healthcare, environmental conservation, and social welfare, aiming to uplift underprivileged families and provide sustainable opportunities for growth. By partnering with local organizations, volunteers, and donors, the program ensures that vulnerable communities receive the support they need to thrive.
        </p>
        <h4>Key Focus Areas</h4>
        <ol>
          <li>
            <strong>Education Support</strong><br/>
            The Arusha Charity Programme works to improve access to quality education for children from low-income families. This includes:
            <ul>
              <li>Providing school supplies, uniforms, and books.</li>
              <li>Sponsoring tuition fees for students in need.</li>
              <li>Supporting local schools with infrastructure development and learning materials.</li>
            </ul>
          </li>
          <li>
            <strong>Healthcare Initiatives</strong><br/>
            Ensuring access to basic healthcare services is a crucial part of the program. Activities include:
            <ul>
              <li>Organizing free medical camps for underserved communities.</li>
              <li>Providing essential medications and medical supplies to local clinics.</li>
              <li>Promoting health education and awareness, focusing on hygiene, nutrition, and disease prevention.</li>
            </ul>
          </li>
          <li>
            <strong>Environmental Conservation</strong><br/>
            The program is committed to preserving Tanzania’s natural beauty and resources through:
            <ul>
              <li>Tree-planting campaigns to combat deforestation.</li>
              <li>Community clean-up drives to promote environmental sustainability.</li>
              <li>Educating locals on eco-friendly practices and waste management.</li>
            </ul>
          </li>
          <li>
            <strong>Empowering Women and Youth</strong><br/>
            The program supports women and young people by:
            <ul>
              <li>Offering vocational training and entrepreneurship workshops.</li>
              <li>Providing microloans and financial support for small businesses.</li>
              <li>Encouraging leadership and community engagement opportunities.</li>
            </ul>
          </li>
        </ol>
        <h4>How You Can Get Involved</h4>
        <p>Whether you’re a volunteer, donor, or traveler, you can make a difference by:</p>
        <ul>
          <li>Donating to support education, healthcare, and environmental projects.</li>
          <li>Volunteering your time and skills to assist local initiatives.</li>
          <li>Participating in community outreach programs during your visit to Arusha.</li>
        </ul>
        <p>
          Join us in creating lasting change and supporting the Arusha Charity Programme to build a better future for all!
        </p>
      </>
    )
  }
];
