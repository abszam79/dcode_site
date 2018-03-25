const tabs = document.querySelectorAll(".tab");
if (tabs) {
tabs.forEach(function(tab){
  tab.addEventListener("click", function(event) {
    document.querySelector(".active").classList.remove("active");
    event.currentTarget.classList.add("active");
    });
});
}

const inbox = document.querySelector(".inbox-holidays");
if (inbox) {
document.querySelector(".inbox-holidays").style.display = 'none';
}

const tabguest = document.querySelector(".tab-subscriptions");
if (tabguest) {
document.querySelector(".tab-subscriptions").addEventListener("click", function(event) {
  document.querySelector(".inbox-subscriptions").style.display = 'block';
  document.querySelector(".inbox-holidays").style.display = 'none';
});
}

const tabhost = document.querySelector(".tab-holidays");
if (tabhost) {
document.querySelector(".tab-holidays").addEventListener("click", function(event) {
  document.querySelector(".inbox-subscriptions").style.display = 'none';
  document.querySelector(".inbox-holidays").style.display = 'block';
});
}
