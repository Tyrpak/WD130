if (window.innerWidth > 901) {

var waypointList = [
    {
        "title": "Batthyány tér",
        "top": "260",
        "left": "50"
    },
    {
        "title": "Margit-híd",
        "top": "240",
        "left": "50"
    },
    {
        "title": "Dunapart",
        "top": "235",
        "left": "300"
    },
    {
        "title": "Bazilika",
        "top": "150",
        "left": "420"
    },
    {
        "title": "Dunapart #2",
        "top": "205",
        "left": "520"
    },
    {
        "title": "Zikkurat",
        "top": "30",
        "left": "1150"
    }
    ];
}
else if (window.innerWidth < 900) {

    var waypointList = [
        {
            "title": "Batthyány tér",
            "top": "160",
            "left": "30"
        },
        {
            "title": "Margit-híd",
            "top": "150",
            "left": "30"
        },
        {
            "title": "Dunapart",
            "top": "165",
            "left": "180"
        },
        {
            "title": "Bazilika",
            "top": "100",
            "left": "280"
        },
        {
            "title": "Dunapart #2",
            "top": "140",
            "left": "320"
        },
        {
            "title": "Zikkurat",
            "top": "20",
            "left": "750"
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
