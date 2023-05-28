if (window.innerWidth > 901) {

    var waypointList = [
        {
            "title": "Margit-sziget",
            "top": "100",
            "left": "330"
        },
        {
            "title": "Mini Zoo",
            "top": "200",
            "left": "650"
        },
        {
            "title": "Szent Margit Kolostor",
            "top": "190",
            "left": "750"
        },
        {
            "title": "Japanese Garden",
            "top": "240",
            "left": "910"
        },
        {
            "title": "Óbuda",
            "top": "100",
            "left": "1100"
        },
        {
            "title": "Roman Ruins",
            "top": "20",
            "left": "1100"
        },
        {
            "title": "Amphitheater",
            "top": "40",
            "left": "670"
        }
        ];
    }
    else if (window.innerWidth < 900) {
    
        var waypointList = [
            {
                "title": "Margit-sziget",
                "top": "60",
                "left": "110"
            },
            {
                "title": "Mini Zoo",
                "top": "140",
                "left": "400"
            },
            {
                "title": "Szent Margit Kolostor",
                "top": "135",
                "left": "490"
            },
            {
                "title": "Japanese Garden",
                "top": "170",
                "left": "600"
            },
            {
                "title": "Óbuda",
                "top": "60",
                "left": "750"
            },
            {
                "title": "Roman Ruins",
                "top": "10",
                "left": "750"
            },
            {
                "title": "Amphitheater",
                "top": "10",
                "left": "370"
            }
            ];        
    }
    
    /*async function getWaypoints() {
        
        if (document.title.includes('#1')) { url = 'https://tyrpak.github.io/WD130/missionarytours/waypoints1.json';}
        else if (document.title.includes('#2')) { url = 'https://tyrpak.github.io/WD130/missionarytours/waypoints2.json';}
        
        const response = await fetch(url);
    
        if (response.ok) {
            const waypointList = await response.json();
    
            return waypointList;
          }
    }
    
    getWaypoints();  */ 
    
    
    
    const routes = Array.from(document.getElementsByClassName('main-route'));
    
    routes.forEach((route,i) => {
    
        route.addEventListener('mouseover', function tooltipOn() {
            document.getElementById('invisible-area').style.display = 'block';
            document.getElementById('tooltip').style.display = 'inline-block';
            
            document.getElementById('tooltip').innerHTML = waypointList[i].title;
            document.getElementById('tooltip').style.top = waypointList[i].top + 'px';
            document.getElementById('tooltip').style.left = waypointList[i].left + 'px';
            
            
        });
    
        route.addEventListener('mouseout', function tooltipOff() {
        document.getElementById('invisible-area').style.display = 'none';
        document.getElementById('tooltip').style.display = 'none';
    
        
        });
    }); 
    
    const routes2 = Array.from(document.getElementsByClassName('map'));
    
    routes2.forEach((route2,i) => {
    
        route2.addEventListener('mouseover', function tooltipOn() {
            document.getElementById('invisible-area').style.display = 'block';
            document.getElementById('tooltip').style.display = 'inline-block';
            
            document.getElementById('tooltip').innerHTML = waypointList[i].title;
            document.getElementById('tooltip').style.top = waypointList[i].top + 'px';
            document.getElementById('tooltip').style.left = waypointList[i].left + 'px';
    
           
        });
    
        route2.addEventListener('mouseout', function tooltipOff() {
        document.getElementById('invisible-area').style.display = 'none';
        document.getElementById('tooltip').style.display = 'none';
    
        
        });
    }); 
    