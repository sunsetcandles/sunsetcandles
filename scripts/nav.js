function nav_change(section) {   
    section
}

meet_me=document.getElementById("meet_me");
blogs=document.getElementById("blogs");
reach_me=document.getElementById("reach_me");
meet_me.addEventListener("click", nav_change(meet_me));
blogs.addEventListener("click", nav_change(blogs));
reach_me.addEventListener("click", nav_change(reach_me));