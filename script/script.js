function openSideNav() {
    document.querySelector(".sidebar").classList.add('active');
    document.querySelector('.content').classList.add('active');
    document.querySelector('footer').classList.add('active');
    setTimeout(() => {
        document.querySelector(".sidebar").style.display = "block";
    }, 100);
}

function sidebarCloseNav() {
    document.querySelector(".sidebar").classList.remove('active');
    document.querySelector('.content').classList.remove('active');
    document.querySelector('footer').classList.remove('active');
    // Menambah delay untuk mengatur display setelah animasi selesai
    setTimeout(() => {
        document.querySelector(".sidebar").style.display = "none";
    }, 400);
}


function backToMenu() {
    document.querySelector('#dropdownVehicles').style.display = "none";
    document.querySelector('.sidebar').style.display = "block";
}

function energyBackToMenu() {
    document.querySelector('#dropdownEnergy').style.display = "none";
    document.querySelector('.sidebar').style.display = "block";
}

function chargingBackToMenu() {
    document.querySelector('#dropdownCharging').style.display = "none";
    document.querySelector('.sidebar').style.display = "block";
}

function discoverBackToMenu() {
    document.querySelector('#dropdownDiscover').style.display = "none";
    document.querySelector('.sidebar').style.display = "block";
}

function closeMenu() {
    document.querySelector('#dropdownVehicles').style.display = "none";
    document.querySelector('#dropdownEnergy').style.display = "none";
    document.querySelector('#dropdownCharging').style.display = "none";
    document.querySelector('.content').classList.remove('active');
    document.querySelector('footer').classList.remove('active');
    document.querySelector('.sidebar').classList.remove('active');
    setTimeout(() => {
        document.querySelector('.sidebar').style.display = "none";
    }, 400); // Sesuaikan timeout dengan durasi transisi
}

function discoverCloseMenu() {
    document.querySelector('#dropdownDiscover').style.display = "none";
    document.querySelector('.sidebar').classList.remove('active');
    document.querySelector('.content').classList.remove('active');
    document.querySelector('footer').classList.remove('active');
    setTimeout(() => {
        document.querySelector('.sidebar').style.display = "none";
    }, 400); // Sesuaikan timeout dengan durasi transisi
}

function chargingCloseMenu() {
    document.querySelector('#dropdownCharging').style.display = "none";
    document.querySelector('.sidebar').classList.remove('active');
    document.querySelector('.content').classList.remove('active');
    document.querySelector('footer').classList.remove('active');
    setTimeout(() => {
        document.querySelector('.sidebar').style.display = "none";
    }, 400); // Sesuaikan timeout dengan durasi transisi
}

function vehiclesMenu() {
    document.querySelector('#dropdownVehicles').style.display = "block";
    document.querySelector('.sidebar').style.display = "none";
}

function energyMenu() {
    document.querySelector('#dropdownEnergy').style.display = "block";
    document.querySelector('.sidebar').style.display = "none";
}

function chargingMenu() {
    document.querySelector('#dropdownCharging').style.display = "block";
    document.querySelector('.sidebar').style.display = "none";
}

function discoverMenu() {
    document.querySelector('#dropdownDiscover').style.display = "block";
    document.querySelector('.sidebar').style.display = "none";
}

function openNav() {
    const header = document.querySelector('header');
    header.classList.add('white-bg');
  }
  
  function closeNav(event) {
    const header = document.querySelector('header');
    const dropdownContent = document.querySelector('.dropdown-content');
  
    // memastikan cursor berada pada luar content
    if (!header.contains(event.relatedTarget) && !dropdownContent.contains(event.relatedTarget)) {
      header.classList.remove('white-bg');
    }
  }
  
  // Tambahkan event listener untuk setiap elemen menu
  document.querySelectorAll('.dropDown a').forEach(element => {
    element.addEventListener('mouseenter', openNav);
  });
  
  // Tambahkan event listener untuk header dan dropdown-content
  const header = document.querySelector('header');
  const dropdownContent = document.querySelector('.dropdown-content');
  
  header.addEventListener('mouseleave', closeNav);
  dropdownContent.addEventListener('mouseleave', closeNav);
  
  document.addEventListener('DOMContentLoaded', () => {
    const dropDowns = document.querySelectorAll('.dropDown');

    dropDowns.forEach(dropDown => {
        const link = dropDown.querySelector('.listA');
        const content = dropDown.querySelector('.dropdown-content');

        link.addEventListener('mouseenter', () => {
            content.classList.add('open');
        });

        dropDown.addEventListener('mouseleave', () => {
            content.classList.remove('open');
        });
    });
});