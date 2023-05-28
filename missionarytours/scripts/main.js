const waypointList = [];

async function getWaypoints() {
    
    if (document.title.includes('#1')) { url = 'waypoints1.json';}
    else if (document.title.includes('#2')) { url = 'waypoints2.json';}
    
    const response = await fetch(url);

    if (response.ok) {
        const waypointList = await response.json();

        return waypointList;
      }
}

getWaypoints();   

const routes = Array.from(document.getElementsByClassName('main-route'));

routes.forEach((route,i) => {

    route.addEventListener('mouseover', function tooltipOn() {
        document.getElementById('invisible-area').style.display = 'block';
        document.getElementById('tooltip').style.display = 'inline-block';
        
        document.getElementById('tooltip').innerHTML = waypointList[0].title;

        /*route.getElementsByTagName('p')[0].innerHTML = 'WP';*/
    });

    route.addEventListener('mouseout', function tooltipOff() {
    document.getElementById('invisible-area').style.display = 'none';
    document.getElementById('tooltip').style.display = 'none';

    /*route.getElementsByTagName('p')[0].innerHTML = '';*/
    });
}); 

const routes2 = Array.from(document.getElementsByClassName('map'));

routes2.forEach((route2,i) => {

    route2.addEventListener('mouseover', function tooltipOn() {
        document.getElementById('invisible-area').style.display = 'block';
        document.getElementById('tooltip').style.display = 'inline-block';
        
        document.getElementById('tooltip').innerHTML = waypointList[0].title;

        /*route.getElementsByTagName('p')[0].innerHTML = 'WP';*/
    });

    route2.addEventListener('mouseout', function tooltipOff() {
    document.getElementById('invisible-area').style.display = 'none';
    document.getElementById('tooltip').style.display = 'none';

    /*route.getElementsByTagName('p')[0].innerHTML = '';*/
    });
}); 
