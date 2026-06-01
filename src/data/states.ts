export interface StateRecord {
  slug: string;
  name: string;
  abbr: string;
  capital: string;
  topCities: string[];
  climate: string;
  popularBreeds: string[];
  puppyLawSummary: string[];
  aboutParagraphs: string[];
}

export const STATES: StateRecord[] = [
  {
    slug: "california",
    name: "California",
    abbr: "CA",
    capital: "Sacramento",
    topCities: ["San Diego", "Los Angeles", "San Francisco", "Sacramento", "San Jose", "Fresno", "Long Beach", "Oakland"],
    climate: "Mild Mediterranean coast, hot inland valleys, and snowy mountains — a state where almost any breed can thrive with the right setup.",
    popularBreeds: ["Golden Retriever", "Labrador Retriever", "French Bulldog", "Goldendoodle"],
    puppyLawSummary: [
      "California's PUPS Act requires breeders selling 5+ litters per year to be USDA-licensed.",
      "Retail pet stores can only sell rescue or shelter dogs (AB 485, since 2019).",
      "Breeders must provide a 14-day health guarantee covering congenital defects.",
      "Microchipping is required before any puppy is rehomed at 8+ weeks.",
    ],
    aboutParagraphs: [
      "California is one of the largest dog-breeding markets in the United States, with a verified breeder community concentrated in San Diego, the Bay Area, and the Central Valley. The state's mix of coastal cities and rural breeding farms means buyers have access to both boutique kennels and established AKC-registered programs.",
      "Climate plays a role in breed popularity: coastal Californians favor low-shedding, allergy-friendly doodles, while inland and mountain communities lean toward working breeds like Australian Shepherds and German Shepherds. Year-round mild temperatures also make California one of the easiest states to socialize puppies outdoors from a young age.",
      "Buyers should expect higher prices than the national average — Goldendoodles routinely list at $3,500–$5,000 in San Diego and Los Angeles. Vet Your Pet's verified breeders publish written health guarantees, OFA hip clearances, and DNA panels so families can verify what they're paying for.",
    ],
  },
  {
    slug: "texas",
    name: "Texas",
    abbr: "TX",
    capital: "Austin",
    topCities: ["Austin", "Houston", "Dallas", "San Antonio", "Fort Worth", "El Paso", "Plano"],
    climate: "Hot, humid summers in the south and east; drier, cooler highlands in the west — heat tolerance matters when choosing a breed here.",
    popularBreeds: ["German Shepherd", "Labrador Retriever", "Australian Shepherd", "Cavalier King Charles Spaniel"],
    puppyLawSummary: [
      "Texas requires commercial breeders with 11+ intact females to register with the Texas Department of Licensing and Regulation.",
      "All puppies sold within Texas must have a signed health certificate from a licensed veterinarian.",
      "Sales tax applies to puppy purchases from licensed Texas breeders.",
      "Counties such as Travis and Dallas have additional spay/neuter ordinances — check local rules before transport.",
    ],
    aboutParagraphs: [
      "Texas has the second-largest population of registered dog breeders in the country, with strong communities in the Hill Country around Austin, the Dallas–Fort Worth metroplex, and the suburbs north of Houston. Working-line German Shepherds and Belgian Malinois are particularly popular thanks to a robust ranch and law-enforcement market.",
      "The Texas heat shapes breed selection in real ways. Brachycephalic breeds like French Bulldogs and Pugs require climate-controlled facilities, while heat-tolerant breeds — Labradors, Australian Shepherds, and Cattle Dogs — dominate ranch country. Verified Texas breeders typically maintain air-conditioned whelping rooms even on rural properties.",
      "Pricing varies widely across the state: rural Texas breeders are often 20–30% below the coastal average, while Austin and Dallas premium kennels match national prices. Texas also has one of the most active puppy-transport corridors in the U.S., so out-of-state buyers should confirm health-cert requirements before shipping.",
    ],
  },
  {
    slug: "new-york",
    name: "New York",
    abbr: "NY",
    capital: "Albany",
    topCities: ["New York", "Buffalo", "Rochester", "Albany", "Syracuse", "Yonkers", "Poughkeepsie"],
    climate: "Cold, snowy winters and warm humid summers — most breeders are clustered upstate where space and zoning are friendlier.",
    popularBreeds: ["French Bulldog", "Labrador Retriever", "Bernese Mountain Dog", "Cavalier King Charles Spaniel"],
    puppyLawSummary: [
      "New York State requires pet dealers selling 9+ animals per year to be licensed and inspected annually.",
      "NYC retail pet stores are prohibited from selling commercially bred dogs (effective December 2024).",
      "Breeders must provide a written 14-day health guarantee under General Business Law §753.",
      "Puppies cannot be sold or transferred before 8 weeks of age.",
    ],
    aboutParagraphs: [
      "Most of New York's verified breeders operate upstate — in the Hudson Valley, the Finger Lakes region, and Western New York — where larger properties and friendlier zoning make raising litters practical. New York City buyers typically work with breeders within a 2–3 hour drive who handle delivery or meet halfway.",
      "Cold-tolerant breeds dominate the upstate market: Bernese Mountain Dogs, Newfoundlands, and Siberian Huskies all have strong programs in the state. In the city, French Bulldogs and small companion breeds remain the most-requested — and the most-counterfeited, which is exactly why Vet Your Pet's verification process matters here.",
      "New York has some of the strictest consumer-protection laws for puppy buyers in the country, including the famous 'Puppy Lemon Law.' Verified breeders in our directory provide all required documentation up front: health certificates, vaccination records, and the 14-day guarantee in writing.",
    ],
  },
  // Alabama
  {
    slug: "alabama",
    name: "Alabama",
    abbr: "AL",
    capital: "Montgomery",
    topCities: ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa", "Hoover", "Madison", "Dothan"],
    climate: "Hot, humid subtropical climate with mild winters — breeds with heat tolerance do well here.",
    popularBreeds: ["Labrador Retriever", "American Bulldog", "Blue Lacy", "Bloodhound"],
    puppyLawSummary: [
      "Alabama law requires commercial breeders to register with the Alabama Department of Agriculture and Industries.",
      "A Certificate of Veterinary Inspection is required for all puppies sold within the state.",
      "Puppies must be at least 8 weeks old before transfer or sale.",
      "Buyers should verify breeder registration before purchasing.",
    ],
    aboutParagraphs: [
      "Alabama's breeding community is strongest in the Birmingham metro area and the Wiregrass region of southeast Alabama. American Bulldogs and Blue Lacys have deep roots in the state as working ranch and hunting dogs.",
      "The subtropical climate means heat management is critical for breeding operations. Serious Alabama breeders invest in climate-controlled facilities, especially for brachycephalic breeds that struggle in humidity.",
      "Rural Alabama offers more affordable breeding setup costs compared to coastal states, and many families seeking family companions find quality Labradors and family-oriented breeds from verified in-state sources.",
    ],
  },
  // Alaska
  {
    slug: "alaska",
    name: "Alaska",
    abbr: "AK",
    capital: "Juneau",
    topCities: ["Anchorage", "Juneau", "Fairbanks", "Wasilla", "Sitka", "Ketchikan", "Kenai", "Kodiak"],
    climate: "Cold, snowy wilderness climate with short summers — cold-hardy breeds absolutely essential here.",
    popularBreeds: ["Alaskan Malamute", "Siberian Husky", "Bernese Mountain Dog", "Labrador Retriever"],
    puppyLawSummary: [
      "Alaska requires commercial breeders to register with the Alaska Department of Environmental Conservation.",
      "All puppies must have a Certificate of Veterinary Inspection before sale.",
      "Puppies must be at least 8 weeks old before transfer or sale.",
      "Buyers should confirm breeder registration and health documentation.",
    ],
    aboutParagraphs: [
      "Alaska's breeding community is concentrated in Anchorage, Fairbanks, and the Matanuska-Susitna Valley, where a culture of outdoor adventure and working dogs thrives. Cold-hardy breeds like Alaskan Malamutes, Siberian Huskies, and Bernese Mountain Dogs are incredibly popular — these aren't just pets, they're family members who join Alaskans on winter adventures.",
      "The remote geography and harsh winters shape everything in Alaska's breeding market. Most breeders specialize in breeds built for snow and cold, and buyers often travel significant distances to pick up their puppies. Shipping puppies out of Alaska requires careful planning due to temperature constraints on air transport.",
      "Despite the challenges, Alaska has a devoted community of responsible breeders committed to producing healthy, well-socialized puppies. The state's size and isolation mean that verified breeders often develop lifetime relationships with buyers — expect ongoing support and guidance from reputable Alaska sources.",
    ],
  },
  // Arizona
  {
    slug: "arizona",
    name: "Arizona",
    abbr: "AZ",
    capital: "Phoenix",
    topCities: ["Phoenix", "Tucson", "Mesa", "Chandler", "Scottsdale", "Gilbert", "Tempe", "Glendale"],
    climate: "Desert climate with extreme summer heat — cooling infrastructure is essential for breeders.",
    popularBreeds: ["German Shepherd", "Labrador Retriever", "French Bulldog", "Australian Shepherd"],
    puppyLawSummary: [
      "Arizona requires commercial dog breeders to obtain a license from the Arizona Department of Agriculture.",
      "A health certificate from a licensed veterinarian is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Breeders must provide written disclosure of known health conditions.",
    ],
    aboutParagraphs: [
      "Arizona's dog-breeding market has grown significantly in the Phoenix metro area and Tucson. The desert climate is generally favorable for breeding, though summer temperatures require careful climate control in breeding facilities.",
      "German Shepherds and Australian Shepherds are popular among active families who can provide ample exercise in the cooler morning and evening hours. French Bulldogs have surged in popularity in the Phoenix area.",
      "Many Arizona breeders specialize in heat-tolerant breeds and have adapted their breeding practices to the desert environment. Vet Your Pet verifies that facilities maintain appropriate cooling year-round.",
    ],
  },
  // Arkansas
  {
    slug: "arkansas",
    name: "Arkansas",
    abbr: "AR",
    capital: "Little Rock",
    topCities: ["Little Rock", "Fayetteville", "Springdale", "Jonesboro", "Rogers", "Conway", "Bentonville", "Texarkana"],
    climate: "Humid subtropical with hot summers and mild winters — year-round breeding is feasible with proper ventilation.",
    popularBreeds: ["Labrador Retriever", "Catahoula Leopard Dog", "English Springer Spaniel", "Boxer"],
    puppyLawSummary: [
      "Arkansas requires commercial breeders to register with the Arkansas Livestock Board.",
      "A health certificate is required for puppy sales within the state.",
      "Puppies must be at least 8 weeks old before sale.",
      "State law allows counties to impose additional spay/neuter requirements.",
    ],
    aboutParagraphs: [
      "Arkansas has a solid network of family-oriented breeders, particularly in the Fayetteville and Little Rock areas. The Catahoula Leopard Dog is the state breed and has a dedicated following.",
      "The temperate climate allows for year-round breeding, though humidity in summer months requires good ventilation in breeding facilities. Many Arkansas breeders raise puppies in spacious outdoor-indoor environments.",
      "Pricing in Arkansas tends to be moderate compared to national averages. Families in the Natural State appreciate verified breeders who provide health clearances and transparent breeding practices.",
    ],
  },
  // Colorado
  {
    slug: "colorado",
    name: "Colorado",
    abbr: "CO",
    capital: "Denver",
    topCities: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", "Thornton", "Boulder", "Greeley"],
    climate: "High desert with four distinct seasons — altitude affects certain breeds differently.",
    popularBreeds: ["Australian Shepherd", "Border Collie", "Golden Retriever", "Bernese Mountain Dog"],
    puppyLawSummary: [
      "Colorado requires commercial breeders selling 15+ puppies annually to be licensed by the Colorado Department of Agriculture.",
      "A health certificate is required for all puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Local municipalities may impose additional breeding facility regulations.",
    ],
    aboutParagraphs: [
      "Colorado has become a premier breeding state, with strong communities in Denver, Boulder, and Colorado Springs. Active breeds like Australian Shepherds and Border Collies dominate among outdoor enthusiast families.",
      "The high altitude and four-season climate create ideal conditions for breeding cold-tolerant breeds. Bernese Mountain Dogs and other mountain breeds have strong programs in the state.",
      "Colorado's active lifestyle culture means families seeking adventure partners are willing to pay premium prices for healthy, active puppies from verified breeders with proven lineages.",
    ],
  },
  // Connecticut
  {
    slug: "connecticut",
    name: "Connecticut",
    abbr: "CT",
    capital: "Hartford",
    topCities: ["Bridgeport", "New Haven", "Stamford", "Hartford", "Norwalk", "Danbury", "New Britain", "West Hartford"],
    climate: "Moderate continental with cold snowy winters and warm summers — heating is essential for winter litters.",
    popularBreeds: ["Golden Retriever", "Labrador Retriever", "French Bulldog", "Yorkshire Terrier"],
    puppyLawSummary: [
      "Connecticut requires pet dealers to be licensed and inspected by the Connecticut Department of Agriculture.",
      "Written disclosure of all known health issues is required at sale.",
      "Puppies must be at least 8 weeks old before sale.",
      "A 14-day health guarantee is required under state law.",
    ],
    aboutParagraphs: [
      "Connecticut's breeding community is concentrated in the Fairfield County corridor and along the I-95 corridor from New Haven to New London. Premium family breeds like Golden Retrievers are consistently popular.",
      "The cold winters mean Connecticut breeders must maintain heated facilities for year-round breeding operations. This investment is reflected in slightly higher pricing than some neighboring states.",
      "Connecticut families value verified breeders with comprehensive health testing. OFA clearances and genetic testing are expected for premium puppies in this affluent market.",
    ],
  },
  // Delaware
  {
    slug: "delaware",
    name: "Delaware",
    abbr: "DE",
    capital: "Dover",
    topCities: ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna", "Milford", "Seaford", "Georgetown"],
    climate: "Moderate maritime climate with cold winters and warm humid summers.",
    popularBreeds: ["Golden Retriever", "Labrador Retriever", "German Shepherd", "Boxer"],
    puppyLawSummary: [
      "Delaware requires commercial breeders to be licensed by the Delaware Department of Agriculture.",
      "A Certificate of Veterinary Inspection is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Breeders must provide written health guarantees.",
    ],
    aboutParagraphs: [
      "Delaware's small size means most breeding activity centers around Wilmington and Dover. The state's strategic location between major metropolitan areas creates good distribution networks.",
      "The moderate climate supports year-round breeding without extreme infrastructure needs. Golden Retrievers and family breeds dominate in this commuter-heavy state.",
      "Delaware families appreciate convenient access to quality breeders without traveling far. Verified listings help buyers navigate the relatively small but dedicated breeding community.",
    ],
  },
  // Florida
  {
    slug: "florida",
    name: "Florida",
    abbr: "FL",
    capital: "Tallahassee",
    topCities: ["Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Tallahassee", "Fort Lauderdale"],
    climate: "Humid subtropical with hot summers and mild winters — humidity management is critical for breeding facilities.",
    popularBreeds: ["French Bulldog", "Golden Retriever", "Labrador Retriever", "Yorkshire Terrier"],
    puppyLawSummary: [
      "Florida requires commercial breeders to register with the Florida Department of Agriculture and Consumer Services.",
      "A Certificate of Veterinary Inspection is required for all puppy sales.",
      "Puppies must be at least 8 weeks old and weaned before sale.",
      "Breeders must provide written disclosure of health history and guarantees.",
    ],
    aboutParagraphs: [
      "Florida has one of the most active breeding markets in the country, centered in Miami, Tampa, Orlando, and Jacksonville. French Bulldogs have exploded in popularity thanks to the urban lifestyle preferences.",
      "The humid Florida climate presents challenges for breeding operations — climate-controlled facilities are essential, particularly for brachycephalic breeds. Serious Florida breeders invest heavily in proper ventilation.",
      "Florida's diverse population and year-round outdoor lifestyle create strong demand across breed categories. Beach-friendly breeds and compact companions both sell well in the Sunshine State.",
    ],
  },
  // Georgia
  {
    slug: "georgia",
    name: "Georgia",
    abbr: "GA",
    capital: "Atlanta",
    topCities: ["Atlanta", "Augusta", "Columbus", "Savannah", "Athens", "Macon", "Roswell", "Albany"],
    climate: "Humid subtropical with hot summers and mild winters — summer cooling is essential for breeder success.",
    popularBreeds: ["Labrador Retriever", "Golden Retriever", "French Bulldog", "German Shepherd"],
    puppyLawSummary: [
      "Georgia requires commercial breeders to register with the Georgia Department of Agriculture.",
      "A health certificate is required for puppy sales within the state.",
      "Puppies must be at least 8 weeks old before transfer.",
      "Written health guarantees are required for all puppy sales.",
    ],
    aboutParagraphs: [
      "Atlanta has become the Southeast's major breeding hub, with strong communities throughout the metro area. The city's growth has brought expanded options for quality family breeders.",
      "Georgia's climate requires careful management during humid summers. Reputable breeders maintain climate-controlled environments year-round. French Bulldogs and family-oriented breeds dominate urban Atlanta.",
      "Georgia offers reasonable pricing compared to Northeast markets while maintaining quality standards. The state's position as a regional hub makes it convenient for buyers across the Southeast.",
    ],
  },
  // Hawaii
  {
    slug: "hawaii",
    name: "Hawaii",
    abbr: "HI",
    capital: "Honolulu",
    topCities: ["Honolulu", "Pearl City", "Hilo", "Kailua", "Waipahu", "Kaneohe", "Mililani", " Kahului"],
    climate: "Tropical with year-round warm temperatures and humidity — heat management is the primary concern.",
    popularBreeds: ["Labrador Retriever", "Golden Retriever", "French Bulldog", "Shih Tzu"],
    puppyLawSummary: [
      "Hawaii requires commercial importers of dogs to be licensed by the Hawaii Department of Agriculture.",
      "All dogs entering Hawaii must complete a mandatory quarantine period.",
      "Proof of rabies vaccination and health certification is required for import.",
      "Microchip implantation is required for all dogs entering the state.",
    ],
    aboutParagraphs: [
      "Hawaii's isolated location means most puppies are imported rather than locally bred. The state's strict import requirements have created a market for established breeders willing to navigate the logistics.",
      "The tropical climate limits some breed options — short-nosed breeds require careful consideration Given heat concerns. However, families embrace small companion breeds that thrive in the island warmth.",
      "Import costs and quarantine requirements make Hawaii-bred or properly imported puppies premium items. Vet Your Pet verifies that all imported puppies meet Hawaii's stringent requirements.",
    ],
  },
  // Idaho
  {
    slug: "idaho",
    name: "Idaho",
    abbr: "ID",
    capital: "Boise",
    topCities: ["Boise", "Meridian", "Nampa", " Caldwell", "Idaho Falls", "Pocatello", "Twin Falls", "Coeur d'Alene"],
    climate: "Mountain climate with cold winters and warm dry summers — excellent for year-round breeding operations.",
    popularBreeds: ["Australian Shepherd", "Border Collie", "Labrador Retriever", "German Shepherd"],
    puppyLawSummary: [
      "Idaho requires commercial breeders to register with the Idaho Department of Agriculture.",
      "A Certificate of Veterinary Inspection is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Breeders must provide written health disclosures.",
    ],
    aboutParagraphs: [
      "Idaho's breeding community has grown alongside Boise's rapid expansion. Australian Shepherds and Border Collies are particularly popular among the outdoor recreation crowd.",
      "The four-season climate with dry summers and cold winters creates ideal breeding conditions. Idaho breeders can economically maintain proper facilities year-round.",
      "Idaho offers competitive pricing with strong quality standards. Many breeding operations combine working-dog programs with family-puppy sales.",
    ],
  },
  // Illinois
  {
    slug: "illinois",
    name: "Illinois",
    abbr: "IL",
    capital: "Springfield",
    topCities: ["Chicago", "Aurora", "Naperville", "Joliet", "Rockford", "Springfield", "Champaign", "Elgin"],
    climate: "Continental with cold winters and hot humid summers — heating and cooling are both essential.",
    popularBreeds: ["Labrador Retriever", "Golden Retriever", "French Bulldog", "German Shepherd"],
    puppyLawSummary: [
      "Illinois requires commercial breeders to be licensed by the Illinois Department of Agriculture.",
      "A health certificate from a licensed veterinarian is required for sale.",
      "Puppies must be at least 8 weeks old before sale.",
      "Written disclosure of known health conditions is required.",
    ],
    aboutParagraphs: [
      "Chicago's vast metro area anchors the state's breeding market. The city's density drives demand for compact companion breeds, particularly French Bulldogs.",
      "Illinois' extreme continental climate requires robust facility management. Serious Chicago-area breeders maintain climate-controlled environments year-round.",
      "The Chicago market commands premium pricing for well-socialized puppies from verified sources. Suburban buyers have access to diverse breeding programs across breed categories.",
    ],
  },
  // Indiana
  {
    slug: "indiana",
    name: "Indiana",
    abbr: "IN",
    capital: "Indianapolis",
    topCities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel", "Bloomington", "Fishers", "Gary"],
    climate: "Continental with cold winters and warm humid summers — balanced breeding conditions overall.",
    popularBreeds: ["Labrador Retriever", "Golden Retriever", "French Bulldog", "Boxer"],
    puppyLawSummary: [
      "Indiana requires commercial breeders to register with the Indiana State Board of Animal Health.",
      "A Certificate of Veterinary Inspection is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Breeders must provide written health guarantees.",
    ],
    aboutParagraphs: [
      "Indianapolis serves as the state's primary breeding hub, with Fort Wayne and Evansville supporting regional demand. Family-oriented breeds dominate the Indiana market.",
      "Indiana's central location and reasonable cost of living make it an attractive place for breeding operations. The state offers good infrastructure for distributing puppies nationwide.",
      "Indiana families benefit from competitive pricing combined with easy access to quality breeders. The Hoosier breeding community emphasizes family-focused programs.",
    ],
  },
  // Iowa
  {
    slug: "iowa",
    name: "Iowa",
    abbr: "IA",
    capital: "Des Moines",
    topCities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City", "Waterloo", "Council Bluffs", "Dubuque"],
    climate: "Continental with cold winters and warm summers — excellent for breeding with proper heating.",
    popularBreeds: ["Labrador Retriever", "Golden Retriever", "Brittany", "Boxer"],
    puppyLawSummary: [
      "Iowa requires commercial breeders to register with the Iowa Department of Agriculture.",
      "A veterinary health certificate is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Written health guarantees are standard practice.",
    ],
    aboutParagraphs: [
      "Iowa's breeding community centers on Des Moines and Cedar Rapids. The state's agricultural heritage supports strong working-dog breeding programs.",
      "Iowa's cold winters require heated breeding facilities, but the investment pays off with healthy year-round breeding. The state is known for producing excellent hunting dogs.",
      "Competitive pricing and Midwestern values make Iowa an attractive option for families seeking quality puppies without the premium coastal prices.",
    ],
  },
  // Kansas
  {
    slug: "kansas",
    name: "Kansas",
    abbr: "KS",
    capital: "Topeka",
    topCities: ["Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka", "Lawrence", "Manhattan", "Salina"],
    climate: "Continental with extreme temperatures both directions — well-maintained facilities thrive.",
    popularBreeds: ["Australian Cattle Dog", "Labrador Retriever", "Boxer", "German Shepherd"],
    puppyLawSummary: [
      "Kansas requires commercial breeders to register with the Kansas Department of Agriculture.",
      "A Certificate of Veterinary Inspection is required for puppy sales.",
      "Puppies must be at least 8 weeks old before transfer.",
      "Breeders must provide health disclosures.",
    ],
    aboutParagraphs: [
      "Wichita anchors Kansas's breeding community, with Overland Park serving the Kansas City metro area. Working breeds remain popular given the state's ranching heritage.",
      "Kansas's variable climate pushes serious breeders to invest in quality facilities. Australian Cattle Dogs and other ranch breeds have dedicated programs in the Sunflower State.",
      "Kansas offers excellent value with central-US logistics advantages. Families appreciate honest, straightforward breeding practices rooted in Midwestern values.",
    ],
  },
  // Kentucky
  {
    slug: "kentucky",
    name: "Kentucky",
    abbr: "KY",
    capital: "Frankfort",
    topCities: ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington", "Richmond", "Georgetown", "Paducah"],
    climate: "Humid subtropical with moderate extremes — good year-round breeding climate.",
    popularBreeds: ["Labrador Retriever", "Bedlington Terrier", "German Shepherd", "Rottweiler"],
    puppyLawSummary: [
      "Kentucky requires commercial breeders to be licensed by the Kentucky Department of Agriculture.",
      "A health certificate is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Written health guarantees are required.",
    ],
    aboutParagraphs: [
      "Louisville and Lexington form Kentucky's breeding core, with strong programs in both cities. The state's horse country extends to quality dog breeding traditions.",
      "Kentucky's moderate climate supports year-round breeding without extreme facility costs. The state's equestrian culture influences breeding standards.",
      "Kentucky offersquality puppies at competitive prices. The Bluegrass State's breeding community emphasizes ethical practices and transparent deals.",
    ],
  },
  // Louisiana
  {
    slug: "louisiana",
    name: "Louisiana",
    abbr: "LA",
    capital: "Baton Rouge",
    topCities: ["New Orleans", "Baton Rouge", "Shreveport", "Metairie", "Lafayette", "Lake Charles", "Bossier City", "Monroe"],
    climate: "Humid subtropical with mild winters and hot summers — humidity management is key.",
    popularBreeds: ["Labrador Retriever", "Catahoula Leopard Dog", "French Bulldog", "Boxer"],
    puppyLawSummary: [
      "Louisiana requires commercial breeders to register with the Louisiana Department of Agriculture.",
      "A veterinary health certificate is required for all puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Written health guarantees are required under state law.",
    ],
    aboutParagraphs: [
      "New Orleans and Baton Rouge lead Louisiana's breeding scene, with Lafayette adding regional strength. The unique Catahoula Leopard Dog is Louisiana's state dog.",
      "Louisiana's humidity requires attentive facility management, but the mild winters reduce heating costs. Cajun country breeding has its own distinctive character.",
      "Louisiana families value family-friendly breeds with good temperaments. The state's culture embraces pets as integral family members.",
    ],
  },
  // Maine
  {
    slug: "maine",
    name: "Maine",
    abbr: "ME",
    capital: "Augusta",
    topCities: ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn", "Biddeford", "Sanford", "Saco"],
    climate: "Cold continental with heavy winter snow — heating is essential for winter litters.",
    popularBreeds: ["Labrador Retriever", "Bernese Mountain Dog", "Newfoundland", "Australian Shepherd"],
    puppyLawSummary: [
      "Maine requires commercial breeders to be licensed by the Maine Department of Agriculture.",
      "A Certificate of Veterinary Inspection is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Health guarantees are required by law.",
    ],
    aboutParagraphs: [
      "Portland anchors Maine's breeding community, with statewide interest in cold-tolerant breeds. Bernese Mountain Dogs have strong regional appeal.",
      "Maine's harsh winters require heated facilities, but the cold climate supports excellent breeding of mountain and working breeds. Many breeders incorporate outdoor space into their programs.",
      "Maine families appreciate proven health testing Given the state's outdoor lifestyle expectations. Competitive pricing meets New England quality standards.",
    ],
  },
  // Maryland
  {
    slug: "maryland",
    name: "Maryland",
    abbr: "MD",
    capital: "Annapolis",
    topCities: ["Baltimore", "Columbia", "Germantown", "Silver Spring", "Waldorf", "Bethesda", "Dundalk", "Glen Burnie"],
    climate: "Moderate with cold winters and warm humid summers — balanced breeding conditions.",
    popularBreeds: ["Golden Retriever", "Labrador Retriever", "French Bulldog", "German Shepherd"],
    puppyLawSummary: [
      "Maryland requires commercial breeders to register with the Maryland Department of Agriculture.",
      "A health certificate is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Written health guarantees are required.",
    ],
    aboutParagraphs: [
      "Baltimore and the DC suburbs form a major breeding market. Premium breeds command attention from the affluent metro population.",
      "Maryland's proximity to major population centers creates strong demand. The Baltimore-Washington corridor moves significant puppy volume.",
      "Quality matters in Maryland's competitive market. Buyers expect full health clearances and transparent breeding practices from vetted sources.",
    ],
  },
  // Massachusetts
  {
    slug: "massachusetts",
    name: "Massachusetts",
    abbr: "MA",
    capital: "Boston",
    topCities: ["Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "Brockton", "Quincy", "Lynn"],
    climate: "Continental with cold snowy winters and warm summers — heating is essential.",
    popularBreeds: ["Golden Retriever", "Labrador Retriever", "French Bulldog", "Bernese Mountain Dog"],
    puppyLawSummary: [
      "Massachusetts requires pet dealers to be licensed by the Massachusetts Department of Agricultural Resources.",
      "A 14-day health guarantee is required under state law.",
      "Puppies must be at least 8 weeks old before sale.",
      "Full health disclosures are mandated.",
    ],
    aboutParagraphs: [
      "Boston leads Massachusetts' breeding scene, supported by Worcester and Springfield. The affluent population drives premium breeding programs.",
      "Massachusetts' cold climate requires heated facilities, which are standard in the established breeding community. Breeders emphasize health testing.",
      "Premium pricing is expected but quality is exceptional. New England's density means families have multiple quality options within driving distance.",
    ],
  },
  // Michigan
  {
    slug: "michigan",
    name: "Michigan",
    abbr: "MI",
    capital: "Lansing",
    topCities: ["Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", "Lansing", "Dearborn", "Livonia"],
    climate: "Continental with cold winters and warm summers — heating dominates winter breeding costs.",
    popularBreeds: ["Labrador Retriever", "German Shepherd", "Golden Retriever", "American Staffordshire Terrier"],
    puppyLawSummary: [
      "Michigan requires commercial breeders to be licensed by the Michigan Department of Agriculture.",
      "A Certificate of Veterinary Inspection is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Written health guarantees are required.",
    ],
    aboutParagraphs: [
      "Detroit and Grand Rapids anchor Michigan's breeding scene. Working breeds and family breeds both thrive in the Motor City's surrounding communities.",
      "Michigan's cold winters require heated facilities, but the Great Lakes region offers access to quality breeding stock. Spartan breeding programs carry strong reputations.",
      "Michigan families appreciate honest Midwestern deals. The state's automotive-era infrastructure helps distribute puppies efficiently across the Midwest.",
    ],
  },
  // Minnesota
  {
    slug: "minnesota",
    name: "Minnesota",
    abbr: "MN",
    capital: "St. Paul",
    topCities: ["Minneapolis", "St. Paul", "Rochester", "Duluth", "Bloomington", "Brooklyn Park", "Eagan", "Woodbury"],
    climate: "Continental with cold long winters and warm summers — robust heating is non-negotiable.",
    popularBreeds: ["Labrador Retriever", "Golden Retriever", "German Shepherd", "Vizsla"],
    puppyLawSummary: [
      "Minnesota requires commercial breeders to register with the Minnesota Board of Animal Health.",
      "A veterinary health certificate is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Health guarantees are required by law.",
    ],
    aboutParagraphs: [
      "Minneapolis-St. Paul leads Minnesota's marketplace significantly. The Twin Cities support diverse breeding programs across breed categories.",
      "Minnesota's harsh winters demand top-tier facility investments, which the established breeding community provides. Hunting breeds have strong regional programs.",
      "Minnesota families value well-structured breeding with proven lineages. Land of 10,000 Lakes breeding maintains strong reputations.",
    ],
  },
  // Mississippi
  {
    slug: "mississippi",
    name: "Mississippi",
    abbr: "MS",
    capital: "Jackson",
    topCities: ["Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi", "Meridian", "Tupelo", "Greenville"],
    climate: "Humid subtropical with mild winters and hot humid summers — humidity is the challenge.",
    popularBreeds: ["Labrador Retriever", "American Bulldog", "Blue Lacy", "Catahoula Leopard Dog"],
    puppyLawSummary: [
      "Mississippi requires commercial breeders to register with the Mississippi Board of Animal Health.",
      "A health certificate is required for all puppy sales.",
      "Puppies must be at least 8 weeks old before transfer.",
      "Written health disclosures are mandated.",
    ],
    aboutParagraphs: [
      "Jackson and the Gulf Coast lead Mississippi's breeding community. The state's agricultural roots support working-dog breeding traditions.",
      "Mississippi's humidity demands good ventilation systems in breeding facilities. Families in the Magnolia State appreciate loyal, healthy puppies.",
      "Mississippi offers very competitive pricing while maintaining Southern breeding standards. Families value personal relationships with their breeders.",
    ],
  },
  // Missouri
  {
    slug: "missouri",
    name: "Missouri",
    abbr: "MO",
    capital: "Jefferson City",
    topCities: ["Kansas City", "St. Louis", "Springfield", "Columbia", "Independence", "Lee's Summit", "St. Joseph", "O'Fallon"],
    climate: "Continental with moderate extremes — well-regulated facilities succeed year-round.",
    popularBreeds: ["Labrador Retriever", "German Shepherd", "Australian Shepherd", "Fox Terrier"],
    puppyLawSummary: [
      "Missouri requires commercial breeders to register with the Missouri Department of Agriculture.",
      "A Certificate of Veterinary Inspection is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Health guarantees are standard practice.",
    ],
    aboutParagraphs: [
      "Kansas City and St. Louis anchor Missouri's substantial breeding market. The Show-Me State's reputation for quality extends to dog breeding.",
      "Missouri's central location makes it a distribution powerhouse for puppies moving nationwide. Competitive pricing meets quality standards.",
      "Missouri families value straightforward deals with breeders who stand behind their puppies. The state's brewing heritage includes solid kennel traditions.",
    ],
  },
  // Montana
  {
    slug: "montana",
    name: "Montana",
    abbr: "MT",
    capital: "Helena",
    topCities: ["Billings", "Missoula", "Great Falls", "Bozeman", "Butte", "Helena", "Kalispell", "Evergreen"],
    climate: "Mountain with cold winters and mild summers — elevation affects breeding.",
    popularBreeds: ["Australian Shepherd", "Border Collie", "Labrador Retriever", "Bernese Mountain Dog"],
    puppyLawSummary: [
      "Montana requires commercial breeders to register with the Montana Department of Livestock.",
      "A veterinary health certificate is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Breeders must provide written health disclosures.",
    ],
    aboutParagraphs: [
      "Billings and Missoula lead Montana's growing breeding scene. Outdoor recreation drives demand for active breeds.",
      "Montana's high altitude and cold winters suit working-dog breeding. The state's ranching heritage supports established herding-dog programs.",
      "Montana families appreciate puppies raised in outdoor-oriented environments. Big Sky Country breeding continues gaining recognition.",
    ],
  },
  // Nebraska
  {
    slug: "nebraska",
    name: "Nebraska",
    abbr: "NE",
    capital: "Lincoln",
    topCities: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney", "Fremont", "Hastings", "Columbus"],
    climate: "Continental with cold winters and warm summers — heating is essential winter investment.",
    popularBreeds: ["Labrador Retriever", "Golden Retriever", "Boxer", "Australian Shepherd"],
    puppyLawSummary: [
      "Nebraska requires commercial breeders to register with the Nebraska Department of Agriculture.",
      "A health certificate is required for puppy sales.",
      "Puppies must be at least 8 weeks old before transfer.",
      "Written health disclosures are required.",
    ],
    aboutParagraphs: [
      "Omaha anchors Nebraska's breeding market, with Lincoln supporting regional demand. Cornhusker breeding emphasizes solid family breeds.",
      "Nebraska's continental climate suits breeding operations well. The state's agricultural infrastructure supports quality programs.",
      "Nebraska families find excellent value with Midwestern pricing. The state punches above its weight in breeding quality.",
    ],
  },
  // Nevada
  {
    slug: "nevada",
    name: "Nevada",
    abbr: "NV",
    capital: "Carson City",
    topCities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks", "Carson City", "Elko", "Lyon"],
    climate: "Desert with extreme temperature variations — climate control is critical.",
    popularBreeds: ["German Shepherd", "French Bulldog", "Labrador Retriever", "Australian Shepherd"],
    puppyLawSummary: [
      "Nevada requires commercial breeders to register with the Nevada Department of Agriculture.",
      "A health certificate is required for all puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Health disclosures are required.",
    ],
    aboutParagraphs: [
      "Las Vegas dominates Nevada's breeding scene, with Reno supporting northern demand. Entertainment culture influences breed preferences.",
      "Nevada's desert climate demands rigorous climate control. Professional breeding facilities are standard in the established community.",
      "Nevada families value compact companions that adapt well to indoor desert living. Premium pricing reflects facility investment.",
    ],
  },
  // New Hampshire
  {
    slug: "new-hampshire",
    name: "New Hampshire",
    abbr: "NH",
    capital: "Concord",
    topCities: ["Manchester", "Nashua", "Concord", "Derry", "Rochester", "Salem", "Dover", "Merrimack"],
    climate: "Continental with cold winters and warm summers — heating is non-negotiable.",
    popularBreeds: ["Labrador Retriever", "Golden Retriever", "German Shepherd", "Bernese Mountain Dog"],
    puppyLawSummary: [
      "New Hampshire requires commercial breeders to be licensed by the New Hampshire Department of Agriculture.",
      "A Certificate of Veterinary Inspection is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Written health guarantees are required.",
    ],
    aboutParagraphs: [
      "Manchester and Nashua anchor New Hampshire's breeding scene. Live Free or Die breeding maintains quality traditions.",
      "New Hampshire's cold climate supports cold-tolerant breed programs. The state's outdoor culture drives demand for active dogs.",
      "New Hampshire families appreciate verified breeders with strong health-testing commitments. Quality trumps quantity in the Granite State.",
    ],
  },
  // New Jersey
  {
    slug: "new-jersey",
    name: "New Jersey",
    abbr: "NJ",
    capital: "Trenton",
    topCities: ["Newark", "Jersey City", "Elizabeth", "Paterson", "Edison", "Trenton", "Camden", "Cherry Hill"],
    climate: "Moderate with cold winters and warm humid summers — balanced breeding conditions.",
    popularBreeds: ["Golden Retriever", "Labrador Retriever", "French Bulldog", "German Shepherd"],
    puppyLawSummary: [
      "New Jersey requires pet dealers to be licensed by the New Jersey Department of Agriculture.",
      "A 14-day health guarantee is required under state law.",
      "Puppies must be at least 8 weeks old before sale.",
      "Full health disclosures are mandated.",
    ],
    aboutParagraphs: [
      "Northern New Jersey's proximity to NYC drives immense breeding demand. The Turnpike corridor supports diverse breeding operations.",
      "New Jersey's dense population creates consistent demand across breed categories. Urban families seek compact companions; suburban buyers want family dogs.",
      "New Jersey's breeding commands premium prices from an affluentmarket. Buyer expectations for health testing are exceptionally high.",
    ],
  },
  // New Mexico
  {
    slug: "new-mexico",
    name: "New Mexico",
    abbr: "NM",
    capital: "Santa Fe",
    topCities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Farmington", "Roswell", "Clovis", "Carlsbad"],
    climate: "High desert with extreme temperature ranges — altitude and cooling require attention.",
    popularBreeds: ["German Shepherd", "Labrador Retriever", "Australian Shepherd", "Cavalier King Charles Spaniel"],
    puppyLawSummary: [
      "New Mexico requires commercial breeders to register with the New Mexico Livestock Board.",
      "A veterinary health certificate is required for puppy sales.",
      "Puppies must be at least 8 weeks old before transfer.",
      "Written health guarantees are required.",
    ],
    aboutParagraphs: [
      "Albuquerque anchors New Mexico's breeding scene, with Las Cruces supporting southern demand. The Land of Enchantment supports diverse breed programs.",
      "New Mexico's high desert presents unique breeding considerations. Altitude and temperature swings require professional facility management.",
      "New Mexico families appreciate patient breeding with transparent practices. The state's cultural values influence breeding ethics.",
    ],
  },
  // North Carolina
  {
    slug: "north-carolina",
    name: "North Carolina",
    abbr: "NC",
    capital: "Raleigh",
    topCities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "Wilmington"],
    climate: "Humid subtropical with mild winters and warm summers — good year-round breeding climate.",
    popularBreeds: ["Labrador Retriever", "Golden Retriever", "French Bulldog", "German Shepherd"],
    puppyLawSummary: [
      "North Carolina requires commercial breeders to be licensed by the North Carolina Department of Agriculture.",
      "A Certificate of Veterinary Inspection is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Health guarantees are required by law.",
    ],
    aboutParagraphs: [
      "The Research Triangle (Raleigh-Durham-Chapel Hill) and Charlotte lead North Carolina's dynamic breeding scene. The state's growth brings expanded options.",
      "North Carolina's moderate climate and growing metropolis create ideal breeding conditions. Quality programs multiply as the state's population expands.",
      "North Carolina families enjoy competitive pricing with strong quality standards in a rapidly maturing market. Research Triangle breeding raises the bar.",
    ],
  },
  // North Dakota
  {
    slug: "north-dakota",
    name: "North Dakota",
    abbr: "ND",
    capital: "Bismarck",
    topCities: ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo", "Dickinson", "Mandan", "Jamestown"],
    climate: "Continental with cold long winters and short warm summers — heating infrastructure is essential.",
    popularBreeds: ["Labrador Retriever", "Australian Shepherd", "German Shepherd", "Boxer"],
    puppyLawSummary: [
      "North Dakota requires commercial breeders to register with the North Dakota Department of Agriculture.",
      "A veterinary health certificate is required for puppy sales.",
      "Puppies must be at least 8 weeks old before transfer.",
      "Written health disclosures are mandated.",
    ],
    aboutParagraphs: [
      "Fargo leads North Dakota's breeding scene, with Bismarck providing statewide support. Rough Rider breeding retains frontier values.",
      "North Dakota's harsh winters demand quality facility investments, which the committed breeding community provides. Working breeds dominate.",
      "North Dakota families find exceptional value in a tight-knit breeding community. Personal recommendations drive much of the market.",
    ],
  },
  // Ohio
  {
    slug: "ohio",
    name: "Ohio",
    abbr: "OH",
    capital: "Columbus",
    topCities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Youngstown", "Parma"],
    climate: "Continental with cold winters and warm humid summers — well-balanced breeding conditions.",
    popularBreeds: ["Labrador Retriever", "Golden Retriever", "German Shepherd", "French Bulldog"],
    puppyLawSummary: [
      "Ohio requires commercial breeders to be licensed by the Ohio Department of Agriculture.",
      "A Certificate of Veterinary Inspection is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Written health guarantees are required.",
    ],
    aboutParagraphs: [
      "Columbus, Cleveland, and Cincinnati form Ohio's breeding triangle. The Buckeye State's central location creates excellent distribution advantages.",
      "Ohio's balanced climate suits breeding well. The state's agricultural heritage supports quality programs across breed categories.",
      "Ohio families appreciate Midwestern pricing with strong quality standards. The state redistributes quality puppies nationally.",
    ],
  },
  // Oklahoma
  {
    slug: "oklahoma",
    name: "Oklahoma",
    abbr: "OK",
    capital: "Oklahoma City",
    topCities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Lawton", " Edmond", "Moore", "Midwest City"],
    climate: "Humid continental with temperature extremes — resilient facilities excel.",
    popularBreeds: ["Labrador Retriever", "Australian Cattle Dog", "German Shepherd", "Boxer"],
    puppyLawSummary: [
      "Oklahoma requires commercial breeders to register with the Oklahoma Department of Agriculture.",
      "A health certificate is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Written health disclosures are required.",
    ],
    aboutParagraphs: [
      "Oklahoma City and Tulsa anchor Oklahoma's breeding market. Sooner State breeding emphasizes working-dog traditions.",
      "Oklahoma's variable weather calls for adaptable facility management. The farming culture supports solid breed programs.",
      "Oklahoma families value honest pricing from breeders who've stood by their puppies for generations. Sooner breeding carries regional pride.",
    ],
  },
  // Oregon
  {
    slug: "oregon",
    name: "Oregon",
    abbr: "OR",
    capital: "Salem",
    topCities: ["Portland", "Eugene", "Salem", "Gresham", "Hillsboro", "Bend", "Beaverton", "Corvallis"],
    climate: "Temperate with wet winters and warm dry summers — moderate breeding conditions.",
    popularBreeds: ["Australian Shepherd", "Border Collie", "Labrador Retriever", "Golden Retriever"],
    puppyLawSummary: [
      "Oregon requires commercial breeders to register with the Oregon Department of Agriculture.",
      "A Certificate of Veterinary Inspection is required for puppy sales.",
      "Puppies must be at least 8 weeks old before transfer.",
      "Health guarantees are required by law.",
    ],
    aboutParagraphs: [
      "Portland leads Oregon's breeding scene, with Eugene supporting regional demand. The Beaver State's outdoor culture drives active breed demand.",
      "Oregon's moderate climate supports year-round breeding without extreme investments. The recycling culture influences ethical breeding practices.",
      "Oregonians value puppies raised with environmental consciousness. The Pacific Northwest breeding community emphasizes ethical practices.",
    ],
  },
  // Pennsylvania
  {
    slug: "pennsylvania",
    name: "Pennsylvania",
    abbr: "PA",
    capital: "Harrisburg",
    topCities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster"],
    climate: "Continental with cold winters and warm humid summers — heating is essential for winter litters.",
    popularBreeds: ["Labrador Retriever", "Golden Retriever", "German Shepherd", "French Bulldog"],
    puppyLawSummary: [
      "Pennsylvania requires commercial breeders to be licensed by the Pennsylvania Department of Agriculture.",
      "A veterinary health certificate is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Written health disclosures are mandated.",
    ],
    aboutParagraphs: [
      "Philadelphia and Pittsburgh anchor Pennsylvania's substantial breeding market. Keystone breeders maintain strong regional reputations.",
      "Pennsylvania's cold winters demand facility investments that the established community provides. Lancaster's Amish country supports traditional breeding.",
      "Pennsylvania families have access to various breeding traditions, from urban modern programs to pastoral approaches. Quality ranges broadly.",
    ],
  },
  // Rhode Island
  {
    slug: "rhode-island",
    name: "Rhode Island",
    abbr: "RI",
    capital: "Providence",
    topCities: ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence", "Woonsocket", "Newport", "Central Falls"],
    climate: "Moderate maritime with cold winters and warm humid summers — heating handles January-February.",
    popularBreeds: ["Golden Retriever", "Labrador Retriever", "French Bulldog", "Yorkshire Terrier"],
    puppyLawSummary: [
      "Rhode Island requires pet dealers to be licensed by the Rhode Island Department of Environmental Management.",
      "A 14-day health guarantee is required under state law.",
      "Puppies must be at least 8 weeks old before sale.",
      "Full health disclosures are mandated.",
    ],
    aboutParagraphs: [
      "Providence anchors Rhode Island's breeding market in America's smallest state. Compact geography concentrates quality options.",
      "Rhode Island's small scale creates an intimate breeding community where reputation matters intensely. Buyers value personal relationships.",
      "Rhode Island families find quality options despitelimited geographic area. The Ocean State's coastal culture influences pet parenting.",
    ],
  },
  // South Carolina
  {
    slug: "south-carolina",
    name: "South Carolina",
    abbr: "SC",
    capital: "Columbia",
    topCities: ["Charleston", "Columbia", "North Charleston", "Mount Pleasant", "Rock Hill", "Greenville", "Sumter", "Florence"],
    climate: "Humid subtropical with mild winters and hot humid summers — humidity management aids breeding success.",
    popularBreeds: ["Labrador Retriever", "Golden Retriever", "French Bulldog", "Boykin Spaniel"],
    puppyLawSummary: [
      "South Carolina requires commercial breeders to register with the South Carolina Department of Agriculture.",
      "A veterinary health certificate is required for puppy sales.",
      "Puppies must be at least 8 weeks old before transfer.",
      "Health disclosures are required.",
    ],
    aboutParagraphs: [
      "Charleston and Columbia lead South Carolina's breeding scene. The Palmetto State's coastal culture drives unique breed preferences.",
      "South Carolina's warmclimate suits year-round breeding, but humidity demands attention. Boykin Spaniels represent the state's signature breed.",
      "South Carolina families enjoy moderate pricing with coastal access to diverse programs. Hurricane breeding maintains steady supply.",
    ],
  },
  // South Dakota
  {
    slug: "south-dakota",
    name: "South Dakota",
    abbr: "SD",
    capital: "Pierre",
    topCities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Mitchell", "Yankton", "Pierre", "Watertown"],
    climate: "Continental with cold winters and warm summers — heating drives winter breeding costs.",
    popularBreeds: ["Labrador Retriever", "German Shepherd", "Australian Shepherd", "Boxer"],
    puppyLawSummary: [
      "South Dakota requires commercial breeders to register with the South Dakota Department of Agriculture.",
      "A Certificate of Veterinary Inspection is required for puppy sales.",
      "Puppies must be at least 8 weeks old before transfer.",
      "Written health guarantees are required.",
    ],
    aboutParagraphs: [
      "Sioux Falls leads South Dakota's breeding market. Mount Rushmore breeding maintains solid Midwestern foundations.",
      "South Dakota's harsh winters require quality facility investments that dedicated breeders provide. Working-dog programs thrive.",
      "South Dakota families find remarkable value in the Mount Rushmore State's breeding community. Close-knit communities support word-of-mouth referrals.",
    ],
  },
  // Tennessee
  {
    slug: "tennessee",
    name: "Tennessee",
    abbr: "TN",
    capital: "Nashville",
    topCities: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville", "Murfreesboro", "Franklin", "Johnson City"],
    climate: "Humid subtropical with mild winters and hot humid summers — balanced breeding year-round.",
    popularBreeds: ["Labrador Retriever", "Golden Retriever", "German Shepherd", "Australian Shepherd"],
    puppyLawSummary: [
      "Tennessee requires commercial breeders to register with the Tennessee Department of Agriculture.",
      "A veterinary health certificate is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Health disclosures are required under state law.",
    ],
    aboutParagraphs: [
      "Nashville and Memphis anchor Tennessee's growing breeding scene. Music City breeding has come into its own with the state's explosive growth.",
      "Tennessee's central location and balanced climate favor breeding operations. The Volunteer State's reputation for hospitality influences breeding culture.",
      "Tennessee families enjoy strong value with quality standards rising steadily. Nashville's growth energizes the entire breeding ecosystem.",
    ],
  },
  // Utah
  {
    slug: "utah",
    name: "Utah",
    abbr: "UT",
    capital: "Salt Lake City",
    topCities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem", "Sandy", "Ogden", "St. George"],
    climate: "Desert with extreme temperature variations — elevation and dryness shape breeding.",
    popularBreeds: ["German Shepherd", "Australian Shepherd", "Labrador Retriever", "Golden Retriever"],
    puppyLawSummary: [
      "Utah requires commercial breeders to register with the Utah Department of Agriculture.",
      "A health certificate is required for puppy sales.",
      "Puppies must be at least 8 weeks old before transfer.",
      "Written health disclosures are mandated.",
    ],
    aboutParagraphs: [
      "Salt Lake City and Provo anchor Utah's breeding scene. Beehive State breeding emphasizes active outdoor-dog compatibility.",
      "Utah's high elevation and dry climate support unique breeding conditions. The LDS culture influences ethical standards.",
      "Utah families value puppies raised in family-centered environments. The state's outdoor culture demands energetic, capable companions.",
    ],
  },
  // Vermont
  {
    slug: "vermont",
    name: "Vermont",
    abbr: "VT",
    capital: "Montpelier",
    topCities: ["Burlington", "South Burlington", "Rutland", "Essex Junction", "Colchester", "Bennington", "Milton", "Brattleboro"],
    climate: "Continental with cold long winters and short warm summers — heating is the winter priority.",
    popularBreeds: ["Labrador Retriever", "Golden Retriever", "Bernese Mountain Dog", "Border Collie"],
    puppyLawSummary: [
      "Vermont requires commercial breeders to be licensed by the Vermont Agency of Agriculture.",
      "A Certificate of Veterinary Inspection is required for puppy sales.",
      "Puppies must be at least 8 weeks old before transfer.",
      "Health guarantees are required.",
    ],
    aboutParagraphs: [
      "Burlington leads Vermont's breeding scene in America's smallest state with big hearts for quality dogs. Green Mountain breeding upholds passionate standards.",
      "Vermont's harsh winters demand robust facility investments. Outdoor-loving families cherish the cold-hardy breed options.",
      "Vermont families value deep connections with their breeders. The tight community supports referral-driven growth.",
    ],
  },
  // Virginia
  {
    slug: "virginia",
    name: "Virginia",
    abbr: "VA",
    capital: "Richmond",
    topCities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Newport News", "Alexandria", "Roanoke", "Portsmouth"],
    climate: "Moderate with cold winters and warm humid summers — Chesapeake climate requires humidity management.",
    popularBreeds: ["Golden Retriever", "Labrador Retriever", "German Shepherd", "French Bulldog"],
    puppyLawSummary: [
      "Virginia requires commercial breeders to register with the Virginia Department of Agriculture.",
      "A veterinary health certificate is required for puppy sales.",
      "Puppies must be at least 8 weeks old before sale.",
      "Health disclosures are required by law.",
    ],
    aboutParagraphs: [
      "Northern Virginia's DC proximity drives intense breeding demand. Hampton Roads supports regional variety.",
      "Virginia's diverse regions offer everything from beach-friendly breeds to mountain dogs. Colonial breeding carries proud traditions.",
      "Virginia families demand quality from close DCconnections. Federal workers bring high expectations.",
    ],
  },
  // Washington
  {
    slug: "washington",
    name: "Washington",
    abbr: "WA",
    capital: "Olympia",
    topCities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue", "Kent", "Everett", "Renton"],
    climate: "Marine with mild temperatures and high rainfall — humidity management is essential.",
    popularBreeds: ["Labrador Retriever", "Golden Retriever", "Australian Shepherd", "French Bulldog"],
    puppyLawSummary: [
      "Washington requires commercial breeders to register with the Washington State Department of Agriculture.",
      "A Certificate of Veterinary Inspection is required for puppy sales.",
      "Puppies must be at least 8 weeks old before transfer.",
      "Health guarantees are required by law.",
    ],
    aboutParagraphs: [
      "Seattle anchors Washington's tech-driven breeding market. The Emerald State's progressive culture influences breeding ethics.",
      "Washington's rainy climate requires indoor breeding investments. Seattle's affluence supports premium breeding programs.",
      "Washington families expect eco-conscious breeding from socially-conscious sources. Tech-indust premiums fuel competitive pricing.",
    ],
  },
  // West Virginia
  {
    slug: "west-virginia",
    name: "West Virginia",
    abbr: "WV",
    capital: "Charleston",
    topCities: ["Charleston", "Huntington", "Morgantown", "Parkersburg", "Wheeling", "Weirton", "Fairmont", "Martinsburg"],
    climate: "Humid continental with cold winters and warm summers — balanced breeding conditions.",
    popularBreeds: ["Labrador Retriever", "American Bulldog", "German Shepherd", "Walker Hound"],
    puppyLawSummary: [
      "West Virginia requires commercial breeders to register with the West Virginia Department of Agriculture.",
      "A veterinary health certificate is required for puppy sales.",
      "Puppies must be at least 8 weeks old before transfer.",
      "Health disclosures are required.",
    ],
    aboutParagraphs: [
      "Charleston and Huntington lead West Virginia's breeding scene. Mountain State breeding retains frontier authenticity.",
      "West Virginia's mountains shape breeding preferences. Working breeds maintain cultural importance in Appalachia.",
      "West Virginia families appreciate honest deals from in-state sources. Personal relationships drive the market.",
    ],
  },
  // Wisconsin
  {
    slug: "wisconsin",
    name: "Wisconsin",
    abbr: "WI",
    capital: "Madison",
    topCities: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine", "Appleton", "Waukesha", "Eau Claire"],
    climate: "Continental with cold winters and warm summers — heating is the winter necessity.",
    popularBreeds: ["Labrador Retriever", "Golden Retriever", "German Shepherd", "American Water Spaniel"],
    puppyLawSummary: [
      "Wisconsin requires commercial breeders to be licensed by the Wisconsin Department of Agriculture.",
      "A Certificate of Veterinary Inspection is required for puppy sales.",
      "Puppies must be at least 8 weeks old before transfer.",
      "Health disclosures are required.",
    ],
    aboutParagraphs: [
      "Milwaukee and Madison anchor Wisconsin's breeding scene. America's Dairyland extends dairy-farm care ethics to breeding.",
      "Wisconsin's cold winters demand quality facilities, which dedicated breeders provide. Hunting breeds remain culturally significant.",
      "Wisconsin families find Midwestern value with honest standards. Packers breeding parallels winning traditions.",
    ],
  },
  // Wyoming
  {
    slug: "wyoming",
    name: "Wyoming",
    abbr: "WY",
    capital: "Cheyenne",
    topCities: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs", "Sheridan", "Green River", "Evanston"],
    climate: "Mountain with cold winters and mild summers — high elevation affects breeding.",
    popularBreeds: ["Australian Shepherd", "Border Collie", "Labrador Retriever", "German Shepherd"],
    puppyLawSummary: [
      "Wyoming requires commercial breeders to register with the Wyoming Livestock Board.",
      "A veterinary health certificate is required for puppy sales.",
      "Puppies must be at least 8 weeks old before transfer.",
      "Health guarantees are required.",
    ],
    aboutParagraphs: [
      "Cheyenne and Casper anchor Wyoming's sparse but dedicated breeding community. Equality State breeding values authenticity.",
      "Wyoming's high elevation and cold demand quality facility investments. Working-dog programs align with ranching culture.",
      "Wyoming families find personal connections with breeders across sparse distances. Frontier values drive the market.",
    ],
  },
];

export function getStateBySlug(slug: string): StateRecord | undefined {
  return STATES.find((s) => s.slug === slug);
}

export function getStateByAbbr(abbr: string): StateRecord | undefined {
  return STATES.find((s) => s.abbr === abbr);
}

function citySlug(c: string): string {
  return c.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/**
 * Given a state and a city slug, return the canonical display name from
 * topCities (trimmed). Returns undefined if the slug is not in topCities.
 */
export function getCityDisplayName(
  state: StateRecord,
  citySlugParam: string
): string | undefined {
  const match = state.topCities.find((c) => citySlug(c) === citySlugParam);
  return match?.trim();
}