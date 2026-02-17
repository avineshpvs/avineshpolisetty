// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Avinesh Polisetty&#39;s publications in NLP, ML, MT, and Summarization.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A collection of projects I&#39;ve worked on.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-i-39-m-possible-list",
          title: "I&#39;M Possible List",
          description: "My life goals tracker — not a bucket list, but intentional decisions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/i-am-possible-list/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Avinesh Polisetty&#39;s curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-dera-baba-nanak-paidal-yatra",
        
          title: "Dera baba nanak paidal yatra",
        
        description: "Walking 90 km over 3 days from Dasuya to the Pakistan border on the annual Paidal Yatra in remembrance of Guru Nanak Dev Ji.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/dera-baba-nanak-paidal-yatra/";
          
        },
      },{id: "post-punjab-the-state-of-love",
        
          title: "Punjab: The State of love",
        
        description: "Experiencing authentic Punjabi village life in Chandidas near Dasuya, from sleeping on charpais to riding three-up through the fields.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/punjab-the-state-of-love/";
          
        },
      },{id: "post-ludhiana-comfort-zone-delhi-to-the-land-of-love",
        
          title: "Ludhiana: Comfort zone (Delhi) to the land of love",
        
        description: "Recharging in Delhi before riding north to Ludhiana, where an incredible couchsurfing host and his family made Punjab feel like home.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/comfort-zone-delhi-to-the-land-of-love-punjab/";
          
        },
      },{id: "post-an-authentic-experience-of-a-rajasthani-village-rusirani",
        
          title: "An authentic experience of a Rajasthani village: (Rusirani)",
        
        description: "Village tourism at Rusirani with a great initiative of girl child education and village development near Alwar, Rajasthan.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/an-authentic-experience-of-a-rajasthani-village-rusirani/";
          
        },
      },{id: "post-a-new-beginning-jaipur",
        
          title: "A New Beginning (Jaipur)",
        
        description: "Exploring the pink city of Jaipur, its magnificent forts and palaces, while navigating a tricky couchsurfing experience.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/jaipur/";
          
        },
      },{id: "post-a-feeling-of-loneliness-bikaner",
        
          title: "A Feeling of Loneliness (Bikaner)",
        
        description: "A solo rider&#39;s bittersweet stay in Bikaner, visiting forts and the famous rat temple, while confronting the first pangs of loneliness on the road.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/bikaner/";
          
        },
      },{id: "post-lost-in-search-of-a-lost-village-kuldhara",
        
          title: "Lost in search of a lost village (Kuldhara)",
        
        description: "A solo bike ride to find the haunted lost village of Kuldhara in Jaisalmer that turned into a desert misadventure.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/lost-in-search-of-a-lost-village-kuldhara/";
          
        },
      },{id: "post-buzo-junior-a-brief-journey",
        
          title: "Buzo Junior: A brief journey",
        
        description: "A heartfelt letter dedicated to Buzo Junior, sharing a story of adoption, love, and loss.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/buzo-junior-a-brief-journey/";
          
        },
      },{id: "post-rafa-my-story-4-5",
        
          title: "Rafa: My story: 4/5",
        
        description: "A review of Rafael Nadal&#39;s autobiography, exploring his journey of hard work, family values, and what makes him one of tennis&#39;s greatest champions.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/rafa-my-story/";
          
        },
      },{id: "post-jaisalmer-the-golden-city",
        
          title: "Jaisalmer - The Golden City",
        
        description: "Experiences from visiting Jaisalmer during a solo bike trip, including a friend&#39;s wedding, local culture, and places to visit like Longewalla and Sam dunes.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/jaisalmer-the-golden-city/";
          
        },
      },{id: "post-lonerider-expecting-the-unexpected",
        
          title: "LoneRider: Expecting the Unexpected",
        
        description: "The first leg of my solo bike road trip from Jodhpur to Jaisalmer, featuring an unforgettable mishap in the Rajasthan desert.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/lonerider-expecting-the-unexpected/";
          
        },
      },{id: "post-planning-an-unplanned-bike-trip",
        
          title: "Planning an unplanned Bike Trip",
        
        description: "Essential gear, gadgets, and tips for planning a solo motorcycle road trip across India.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/planning-an-unplanned-bike-trip/";
          
        },
      },{id: "post-scuba-diving-in-india",
        
          title: "Scuba Diving in India",
        
        description: "A comprehensive guide to scuba diving in India covering dive locations, costs, courses, and popular resorts across Andaman, Goa, Pondicherry, and more.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/scuba-diving-india/";
          
        },
      },{id: "post-my-transformation-skinny-gt-bulky-gt-ripped",
        
          title: "My Transformation: Skinny -&gt; Bulky -&gt; Ripped",
        
        description: "My fitness journey from skinny to bulky to ripped, with practical Q&amp;A on workouts, diet, supplements, and staying consistent.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/transformation-skinny-bulky-ripped/";
          
        },
      },{id: "post-scuba-diving-in-havelock-andaman",
        
          title: "Scuba Diving in Havelock (Andaman)",
        
        description: "A solo trip to Havelock Island for PADI Open Water and Advanced scuba diving courses with DiveIndia, complete with travel tips and dive site reviews.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/scuba-diving-havelock-andaman/";
          
        },
      },{id: "post-eurotrip-backpacking",
        
          title: "EuroTrip Backpacking",
        
        description: "A comprehensive guide to backpacking across Europe with tips on transport, accommodation, and making the most of your journey.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/eurotrip/";
          
        },
      },{id: "post-skiing-in-india",
        
          title: "Skiing in India",
        
        description: "Skiing is an adventure sport with lots of adrenaline rush, and you can learn it affordably in India at IISM Gulmarg or ABVIMAS Manali.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/skiing-in-india/";
          
        },
      },{id: "post-10-days-vipassana-a-taste-of-a-monk-39-s-life",
        
          title: "10 days Vipassana: a taste of a monk&#39;s life",
        
        description: "My 10-day Vipassana meditation experience -- discovering inner peace through silence, discipline, and self-observation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/10-days-a-taste-of-a-monks-life-vipassana-course/";
          
        },
      },{id: "post-quot-i-believe-i-can-fly-quot-paragliding-course",
        
          title: "&quot;I believe I can fly&quot; - Paragliding Course",
        
        description: "A guide to paragliding schools in India and my personal experience learning to fly.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/i-believe-i-can-fly-paragliding/";
          
        },
      },{id: "post-helping-hands-gt-praying-lips",
        
          title: "Helping Hands &gt; Praying Lips",
        
        description: "Helping hands make a significant difference in our society, not just generous praying -- my experience visiting an orphanage.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2010/helping-hands-praying-lips/";
          
        },
      },{id: "post-equality-amp-freedom",
        
          title: "Equality &amp; Freedom",
        
        description: "A conversation among three friends about freedom, equality, and the different expectations placed on men and women.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2009/equality-freedom/";
          
        },
      },{id: "post-am-i-a-quot-child-quot-or-an-quot-adult-quot",
        
          title: "Am I a &quot;CHILD&quot; or an &quot;ADULT&quot;?",
        
        description: "The most common question youngsters ask themselves -- have I grown up, and does it even matter?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2009/am-i-a-child-or-an-adult/";
          
        },
      },{id: "post-reducing-the-generation-gap",
        
          title: "Reducing the Generation Gap",
        
        description: "A personal story about bridging the generation gap through an honest conversation with my dad.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2008/reducing-the-generation-gap/";
          
        },
      },{id: "post-my-memorable-first-goal-in-football",
        
          title: "My Memorable First Goal in Football",
        
        description: "The story of my debut football match and my unforgettable first goal -- a self goal.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2008/my-memorable-first-goal-in-football/";
          
        },
      },{id: "post-hope-gt-expectation-gt-desperation-gt-sadness",
        
          title: "Hope -&gt; Expectation -&gt; Desperation -&gt; Sadness",
        
        description: "Exploring how hope leads to expectation, then desperation, and finally sadness, and how to break the cycle.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2008/hope-expectation-desperation-sadness/";
          
        },
      },{id: "post-what-is-happiness",
        
          title: "What is Happiness?",
        
        description: "A six-hour discussion among four friends about what happiness truly means.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2008/what-is-happiness/";
          
        },
      },{id: "books-rafa-my-story",
          title: 'Rafa: My Story',
          description: "A review of Rafael Nadal&#39;s autobiography, exploring his journey of hard work, family values, and what makes him one of tennis&#39;s greatest champions.",
          section: "Books",handler: () => {
              window.location.href = "/books/rafa-my-story/";
            },},{id: "projects-book-reviews",
          title: 'Book Reviews',
          description: "Sharing thoughts on books across sports, travel, self-improvement, and more.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/book_reviews/";
            },},{id: "projects-master-chess",
          title: 'Master Chess',
          description: "Working towards a 2000 chess rating — tracking games, strategies, and progress.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/chess/";
            },},{id: "projects-indic-tagger",
          title: 'Indic Tagger',
          description: "POS tagging, chunking, and NER for 9 Indian languages using CRF, BI-LSTM-CRF, and HMM models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/indic_tagger/";
            },},{id: "projects-lonerider-diaries",
          title: 'LoneRider Diaries',
          description: "An unplanned bike trip across India — riding solo on a Bajaj Avenger, exploring villages, cities, and the stories behind them.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lonerider_diaries/";
            },},{id: "projects-six-pack-1-skinny-bulky-ripped",
          title: 'Six Pack 1: Skinny → Bulky → Ripped',
          description: "Fitness journey sharing the transformation from skinny to bulky to ripped. Q&amp;A format covering common questions from gym-goers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/six_pack_1/";
            },},{id: "projects-six-pack-2",
          title: 'Six Pack 2',
          description: "The next chapter of the transformation. Detailed breakdown of diet, workout routines, and the mental discipline behind staying consistent.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/six_pack_2/";
            },},{id: "projects-learn-spanish",
          title: 'Learn Spanish',
          description: "Journey to fluency in Spanish — tracking progress, resources, and milestones.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spanish/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%76%69%6E%65%73%68.%70%76%73@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=F4u28JcAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/avineshpvs", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/avinesh-polisetty-15749a7", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/avineshpvs", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
