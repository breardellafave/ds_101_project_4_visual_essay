// OpenStreetMap-based Flythrough Configuration
// No API tokens required - uses free OpenStreetMap tiles via Leaflet

var config = {
    // =============================================================================
    // MAP STYLE SETTINGS
    // To change style: comment out current tileLayer and uncomment your choice
    // =============================================================================
    
    // Positron Light (clean minimal style, perfect for data visualization)
    tileLayer: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    
    // Dark Positron (dark theme)
    // tileLayer: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    
    // Standard OpenStreetMap (classic map style)
    // tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    
    // Terrain (topographic map)
    // tileLayer: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    
    // =============================================================================
    // COLOR SCALE SETTINGS (Choose one - Plotly inspired)
    // =============================================================================
    
    colorScale: 'RdYlGn',  // Options: 'RdYlGn' (Red-Yellow-Green) or 'Portland' (Blue-White-Red)
    
    // =============================================================================
    // STORY CHAPTERS
    // Students: Fill in with your data
    // - Coordinates: Get from your CSV file (latitude, longitude columns)
    // - Post counts & sentiment scores: Look up in your whitepaper visualizations
    // =============================================================================
    
    chapters: [
        {
            // CHAPTER 1: Overview of both locations
            id: 'intro',
            title: 'Reddit Sentiment Analysis: Two College Towns',
            description: 'Exploring how students discuss their campuses on Reddit - comparing JMU in Harrisonburg, VA and Virginia Tech in Blacksburg, VA.',
            image: './images/quad.jpg',
            duration: 3000,
            
            // Camera position (where to fly)
            camera: {
                latitude: 37.8349,             // Midpoint between JMU and UNC
                longitude: -79.6500,
                zoom: 8                     // Wide view showing both locations
            },
            
            showData: 'all_locations'       // Show all locations from both schools
        },
        
        {
            // CHAPTER 2: JMU Campus Overview
            id: 'jmu-campus',
            title: 'JMU Campus Overview',
            description: 'James Madison University in Harrisonburg, Virginia. Five key locations emerge from student discussions: The Quad, Harrisonburg, The Village Dorms, JMU DHall, and Urgies.',
            image: './images/d_hall.jpg',
            duration: 2500,
            
            // Camera position
            camera: {
                latitude: 38.4365,
                longitude: -78.8705,
                zoom: 14
            },
            
            showData: 'jmu_locations'       // Show only JMU locations
        },
        
        {
            // CHAPTER 3: JMU Location 1
            id: 'jmu-location-1',
            title: 'JMU Location 1: The Quad',
            description: 'There are 11 comments about the JMU Quad, and all are positive comments. Some comments talk about the amount of time they have spend admiring the quad. )thers talk about the last Game Day that was at JMU, and when they got to see the Jonas Brothers. The comments about the Quad were all good, and many people on Reddit seem to enjoy the Quad.',
            image: 'images/chapter_6_jmu_Quad.jpeg',
            duration: 3000,
            
            // Camera position
            camera: {
                latitude: 38.4384,           // Replace with coordinates from CSV
                longitude: -78.8737,
                zoom: 18
            },
            
            // Location data (creates the marker on map)
            location: {
                name: 'JMU Location 1',      // Replace with location name from CSV
                latitude: 38.4384,           // Must match camera coordinates
                longitude: -78.8737,
                postCount: 11,               // Look up in your whitepaper visualizations
                robertaScore: 0.260,          // Look up in your whitepaper visualizations
                isJMU: true
            },
            
            showData: 'individual'           // Highlight only this location
        },
        
        {
            // CHAPTER 4: JMU Location 2
            id: 'jmu-location-2',
            title: 'JMU Location 2: Harrisonburg',
            description: 'There are 189 posts for Harrisonburg, with the comments being mixed. A lot of these comments come from COVID times, and the users are not very happy with JMU and Harrisonburg’s laws during COVID. There were also lots of posts about how pretty the sunsets are and random little niche things about Harrisonburg and the townies that live here as well.',
            image: 'images/chapter_7_jmu_Harrisonburg.jpeg',
            duration: 3000,
            
            camera: {
                latitude: 38.4468,
                longitude: -78.8642,
                zoom: 14
            },
            
            location: {
                name: 'JMU Location 2',
                latitude: 38.4468,
                longitude: -78.8642,
                postCount: 189,
                robertaScore: -0.024,
                isJMU: true
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 5: JMU Location 3
            id: 'jmu-location-3',
            title: 'JMU Location 3: The Village',
            description: 'There are 16 posts for the Village Dorms, and many of them are positive. They all talked about how social the Village Dorms are, how many people you meet living there, and the fact that there is no AC in the Village. Something else that kept being brought up was the fact that they might demolish them and make new dorms.',
            image: 'images/chapter_8_jmu_Village.jpeg',
            duration: 3000,
            
            camera: {
                latitude: 38.4362,
                longitude: -78.8691,
                zoom: 18
            },
            
            location: {
                name: 'JMU Location 3',
                latitude: 38.4362,
                longitude: -78.8691,
                postCount: 16,
                robertaScore: 0.080,
                isJMU: true
            },
            
            showData: 'individual'
        },
        {
            // CHAPTER 6: JMU Location 4
            id: 'jmu-location-4',
            title: 'JMU Location 4: D Hall',
            description: 'There are 22 posts talking about JMU D Hall, and most of them are very neutral. Lots of the posts talk about what food places used to be at the bottom of D Hall, what the old D Hall was like, and how the dining hall is just so mediocre.',
            image: 'images/chapter_9_jmu_D-hall.jpeg',
            duration: 3000,
            
            camera: {
                latitude: 38.4374,
                longitude: -78.8722,
                zoom: 17
            },
            
            location: {
                name: 'JMU Location 3',
                latitude: 38.4374,
                longitude: -78.8722,
                postCount: 22,
                robertaScore:-0.036,
                isJMU: true
            },
            
            showData: 'individual'
        },
        {
            // CHAPTER 7: JMU Location 5
            id: 'jmu-location-5',
            title: 'JMU Location 5: Urgies',
            description: 'There are 2 comments talking about Urgies. Both comments are very positive and say this is a very good restaurant. The post recommends this restaurant as a good restaurant in Harrisonburg, VA. Our analysis tells us that Virginia Tech students use Blacksburg and are closer to the Blacksburg community than the James Madison students are to the Harrisonburg community.',
            image: 'images/chapter_10_jmu_urgies.jpeg',
            duration: 3000,
            
            camera: {
                latitude: 38.4479,
                longitude: -78.8657,
                zoom: 19
            },
            
            location: {
                name: 'JMU Location 3',
                latitude: 38.4479,
                longitude: -78.8657,
                postCount: 2,
                robertaScore: 0.532,
                isJMU: true
            },
            
            showData: 'individual'
        },
        {
            // CHAPTER 7: Virginia Tech Campus Overview
            id: 'virginiatech-campus',
            title: 'Virginia Tech Campus Overview',
            description: 'Virginia Tech University in Blacksburg, Virginia. Five key locations emerge from student discussions: Blacksburg, Lane Stadium, Squires Student Center, The Old Hokie House, and Main Street.',
            image: 'images/vtech_overview_campus.jpeg',
            duration: 2500,
            
            camera: {
                latitude: 37.2291004454424,
                longitude: -80.4234171223321,
                zoom: 14
            },
            
            showData: 'non_jmu_locations'    // Show only UNC locations
        },
        
        {
            // CHAPTER 8: Virginia Tech Location 1
            id: 'virginiatech-location-1',
            title: 'Virginia Tech Location 1: Blacksburg',
            description: 'Comparing the differences in how students on Reddit threads for VT in Blacksburg, VA, and JMU in Harrisonburg, VA, talk about their schools. There are lots of positive emotions coming from Blacksburg, with 120 posts mentioning “Blacksburg.” Commenters mention missing the weather and the beautiful sunsets and sunrises they get in Blacksburg. A lot of Reddit users also mention missing living there or that they had lived in Blacksburg for a long time, and some users mentioned running into people wearing VT merch when they are far away from Blacksburg. ',
            image: 'images/chapter_1_vt_blacksburg.jpeg',
            duration: 2000,
            
            camera: {
                latitude: 37.2297,
                longitude: -80.4146,
                zoom: 14
            },
            
            location: {
                name: 'Virginia Tech Location 1',
                latitude: 37.2297,
                longitude: -80.4146,
                postCount: 120,
                robertaScore: -0.055,
                isJMU: false                 // UNC location
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 9: Virginia Tech Location 2
            id: 'virginiatech-location-2',
            title: 'Virginia Tech Location 2: Lane Stadium',
            description: 'There were 13 posts about and mentioning Lane Stadium, with mostly positive comments. Commenters mostly wrote about how Lane Stadium should be filled to the brim every single game and how they will miss Lane Stadium when they are gone. Commenters also noted how lively the stadium is on gamedays.',
            image: 'images/chapter_2_vt_LaneStadium.jpeg',
            duration: 2000,
            
            camera: {
                latitude: 37.2201,
                longitude: -80.4180,
                zoom: 16
            },
            
            location: {
                name: 'Virginia Tech 2',
                latitude: 37.2201,
                longitude: -80.4180,
                postCount: 13,
                robertaScore: 0.056,
                isJMU: false
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 10: Virginia Tech Location 3
            id: 'virginiatech-location-3',
            title: 'Virginia Tech Location 3: Squires Student Center',
            description: 'There are 8 comments talking about Squires Student Center. There are not a lot of comments, but they are all negative comments. There are multiple comments about the police showing up and taunting the kids or making them evacuate. There is also mention of rioting at Squires Student Center',
            image: 'images/chapter_3_vt_Squires_student_center.jpeg',
            duration: 3000,
            
            camera: {
                latitude: 37.2292,
                longitude: -80.4179,
                zoom: 17
            },
            
            location: {
                name: 'Virginia Tech 3',
                latitude: 37.2292,
                longitude: -80.4179,
                postCount: 8,
                robertaScore:-0.208,
                isJMU: false
            },
            
            showData: 'individual'
        },
         {
            // CHAPTER 11: Virginia Tech Location 4
            id: 'virginiatech-location-4',
            title: 'Virginia Tech Location 4: The Old Hokie House',
            description: 'The Old Hokie House has 4 comments, and they all seem to be okay. There is a comment talking about how they clowned current VT students for going here, and also comments saying they are hokie proud to be there. It seems to be a mixed bag, but a place where Virginia Tech students and Blacksburg people go to hang out.',
            image: 'images/chapter_4_vt_hokie_house.jpeg',
            duration: 2000,
            
            camera: {
                latitude: 41.7551,
                longitude: -70.4978,
                zoom: 19
            },
            
            location: {
                name: 'Virginia Tech 4',
                latitude: 41.7551,
                longitude: -70.4978,
                postCount: 4,
                robertaScore:-0.0478,
                isJMU: false
            },
            
            showData: 'individual'
        },
        {
            // CHAPTER 12: Virginia Tech Location 5
            id: 'virginiatech-location-5',
            title: 'Virginia Tech Location 5: Main Street',
            description: 'There are 6 Reddit comments about Main Street. All of them are positive comments talking about how they use Main Street to get places from Virginia Tech into downtown Blacksburg, and what they use Main Street for. Another commenter talks about how beautiful the sunsets are on Main Street in Blacksburg, VA.',
            image: 'images/chapter_5_vt_main_street.jpeg',
            duration: 2000,
            
            camera: {
                latitude: 37.2490,
                longitude: -80.4130,
                zoom: 17
            },
            
            location: {
                name: 'Virginia Tech 5',
                latitude: 37.2490,
                longitude: -80.4130,
                postCount: 6,
                robertaScore: 0.2666,
                isJMU: false
            },
            
            showData: 'individual'
        },
        {
            // CHAPTER 13: Final zoom out
            id: 'conclusion',
            title: 'Conclusion: Comparing Campus Sentiment',
            description: 'Our analysis tells us that Virginia Tech students are closer to the Blacksburg community and use the Blacksburg downtown areas more than the James Madison students utilize the Harrisonburg community and downtown.',
            image: './images/quad.jpg',
            duration: 3000,
            
            camera: {
                latitude: 37.2,
                longitude: -78.0,
                zoom: 8
            },
            
            showData: 'all_locations'
        }
    ]
};
