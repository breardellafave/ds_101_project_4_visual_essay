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
                latitude: 37.2,             // Midpoint between JMU and UNC
                longitude: -78.0,
                zoom: 8                     // Wide view showing both locations
            },
            
            showData: 'all_locations'       // Show all locations from both schools
        },
        
        {
            // CHAPTER 2: JMU Campus Overview
            id: 'jmu-campus',
            title: 'JMU Campus Overview',
            description: 'James Madison University in Harrisonburg, Virginia. Three key locations emerge from student discussions.',
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
            description: 'Add your description here. Include sentiment analysis findings, post count, and key themes.',
            image: 'images/chapter_6_jmu_Quad.png',
            duration: 2000,
            
            // Camera position
            camera: {
                latitude: 38.4347,           // Replace with coordinates from CSV
                longitude: -78.8690,
                zoom: 17
            },
            
            // Location data (creates the marker on map)
            location: {
                name: 'JMU Location 1',      // Replace with location name from CSV
                latitude: 38.4347,           // Must match camera coordinates
                longitude: -78.8690,
                postCount: 50,               // Look up in your whitepaper visualizations
                robertaScore: 0.25,          // Look up in your whitepaper visualizations
                isJMU: true
            },
            
            showData: 'individual'           // Highlight only this location
        },
        
        {
            // CHAPTER 4: JMU Location 2
            id: 'jmu-location-2',
            title: 'JMU Location 2: Harrisonburg',
            description: 'Add your description here.',
            image: 'images/chapter_7_jmu_Harrisonburg.jpeg',
            duration: 2000,
            
            camera: {
                latitude: 38.4335,
                longitude: -78.8715,
                zoom: 17
            },
            
            location: {
                name: 'JMU Location 2',
                latitude: 38.4335,
                longitude: -78.8715,
                postCount: 75,
                robertaScore: -0.15,
                isJMU: true
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 5: JMU Location 3
            id: 'jmu-location-3',
            title: 'JMU Location 3: The Village',
            description: 'Add your description here.',
            image: 'images/chapter_8_jmu_Village.jpeg',
            duration: 2000,
            
            camera: {
                latitude: 38.4390,
                longitude: -78.8620,
                zoom: 17
            },
            
            location: {
                name: 'JMU Location 3',
                latitude: 38.4390,
                longitude: -78.8620,
                postCount: 100,
                robertaScore: 0.55,
                isJMU: true
            },
            
            showData: 'individual'
        },
        {
            // CHAPTER 6: JMU Location 4
            id: 'jmu-location-4',
            title: 'JMU Location 4: D Hall',
            description: 'Add your description here.',
            image: 'images/chapter_9_jmu_D-hall.jpeg',
            duration: 2000,
            
            camera: {
                latitude: 38.4390,
                longitude: -78.8620,
                zoom: 17
            },
            
            location: {
                name: 'JMU Location 3',
                latitude: 38.4390,
                longitude: -78.8620,
                postCount: 100,
                robertaScore: 0.55,
                isJMU: true
            },
            
            showData: 'individual'
        },
        {
            // CHAPTER 7: JMU Location 5
            id: 'jmu-location-5',
            title: 'JMU Location 5: Urgies',
            description: 'Add your description here.',
            image: 'images/chapter_10_jmu_urgies.jpeg',
            duration: 2000,
            
            camera: {
                latitude: 38.4390,
                longitude: -78.8620,
                zoom: 17
            },
            
            location: {
                name: 'JMU Location 3',
                latitude: 38.4390,
                longitude: -78.8620,
                postCount: 100,
                robertaScore: 0.55,
                isJMU: true
            },
            
            showData: 'individual'
        },
        {
            // CHAPTER 7: UNC Campus Overview
            id: 'unc-campus',
            title: 'UNC Campus Overview',
            description: 'University of North Carolina at Chapel Hill. Three key locations emerge from student discussions.',
            image: './images/quad.jpg',
            duration: 2500,
            
            camera: {
                latitude: 35.9049,
                longitude: -79.0469,
                zoom: 14
            },
            
            showData: 'non_jmu_locations'    // Show only UNC locations
        },
        
        {
            // CHAPTER 8: Virginia Tech Location 1
            id: 'virginiatech-location-1',
            title: 'Virginia Tech Location 1: Blacksburg',
            description: 'Add your description here.',
            image: 'images/chapter_1_vt_blacksburg.jpeg',
            duration: 2000,
            
            camera: {
                latitude: 35.9050,
                longitude: -79.0470,
                zoom: 17
            },
            
            location: {
                name: 'Virginia Tech Location 1',
                latitude: 35.9050,
                longitude: -79.0470,
                postCount: 60,
                robertaScore: 0.30,
                isJMU: false                 // UNC location
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 9: Virginia Tech Location 2
            id: 'virginiatech-location-2',
            title: 'Virginia Tech Location 2: Lane Stadium',
            description: 'Add your description here.',
            image: 'images/chapter_2_vt_LaneStadium.jpeg',
            duration: 2000,
            
            camera: {
                latitude: 35.9060,
                longitude: -79.0480,
                zoom: 17
            },
            
            location: {
                name: 'Virginia Tech 2',
                latitude: 35.9060,
                longitude: -79.0480,
                postCount: 85,
                robertaScore: -0.10,
                isJMU: false
            },
            
            showData: 'individual'
        },
        
        {
            // CHAPTER 10: Virginia Tech Location 3
            id: 'virginiatech-location-3',
            title: 'Virginia Tech Location 3: Squires Student Center',
            description: 'Add your description here.',
            image: 'images/chapter_3_vt_Squires_student_center.jpeg',
            duration: 2000,
            
            camera: {
                latitude: 35.9070,
                longitude: -79.0490,
                zoom: 17
            },
            
            location: {
                name: 'Virginia Tech 3',
                latitude: 35.9070,
                longitude: -79.0490,
                postCount: 95,
                robertaScore: 0.40,
                isJMU: false
            },
            
            showData: 'individual'
        },
         {
            // CHAPTER 11: Virginia Tech Location 4
            id: 'virginiatech-location-4',
            title: 'Virginia Tech Location 4: The Old Hokie House',
            description: 'Add your description here.',
            image: 'images/chapter_4_vt_hokie_house.jpeg',
            duration: 2000,
            
            camera: {
                latitude: 35.9070,
                longitude: -79.0490,
                zoom: 17
            },
            
            location: {
                name: 'Virginia Tech 4',
                latitude: 35.9070,
                longitude: -79.0490,
                postCount: 95,
                robertaScore: 0.40,
                isJMU: false
            },
            
            showData: 'individual'
        },
        {
            // CHAPTER 12: Virginia Tech Location 5
            id: 'virginiatech-location-5',
            title: 'Virginia Tech Location 5: Main Street',
            description: 'Add your description here.',
            image: 'images/chapter_5_vt_main_street.jpeg',
            duration: 2000,
            
            camera: {
                latitude: 35.9070,
                longitude: -79.0490,
                zoom: 17
            },
            
            location: {
                name: 'Virginia Tech 5',
                latitude: 35.9070,
                longitude: -79.0490,
                postCount: 95,
                robertaScore: 0.40,
                isJMU: false
            },
            
            showData: 'individual'
        },
        {
            // CHAPTER 13: Final zoom out
            id: 'conclusion',
            title: 'Conclusion: Comparing Campus Sentiment',
            description: 'Our analysis reveals both similarities and differences in how students experience and discuss these two universities.',
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
