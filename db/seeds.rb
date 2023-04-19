puts "🌱 Seeding messages..."

Game.create([
    {
        title: "Phasmophobia",
        image_url: "https://upload.wikimedia.org/wikipedia/en/f/f2/Phasmophobia_VG.jpg",
        description: "Phasmophobia is a 4 player online co-op psychological 
        horror. Paranormal activity is on the rise and it’s up to you and your 
        team to use all the ghost-hunting equipment at your disposal in order 
        to gather as much evidence as you can.",
        developer: "Kinetic Games"
    },
    {
        title: "Universe Sandbox",
        image_url: "https://hb.imgix.net/99833b54e212d05d2f73159d5ec997f33bcd70da.jpeg?auto=compress,format&fit=crop&h=353&w=616&s=6deaa91fc1db062a938eff2dad94ecf7",
        description: "Universe Sandbox is a physics-based space simulator. 
        It merges gravity, climate, collision, and material interactions to 
        reveal the beauty of our universe and the fragility of our planet.",
        developer: "Giant Army"
    },
    {
        title: "LEGO Star Wars: The Skywalker Saga",
        image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0a/Lego_Star_Wars_The_Skywalker_Saga.jpg/220px-Lego_Star_Wars_The_Skywalker_Saga.jpg",
        description: "The galaxy is yours with LEGO Star Wars: The 
        Skywalker Saga! Play through all nine Star Wars saga films in a 
        brand-new LEGO video game unlike any other.",
        developer: ""
    },
    {
        title: "Boneworks",
        image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Boneworks_cover.jpg/220px-Boneworks_cover.jpg",
        description: "BONEWORKS is an Experimental Physics VR Adventure. 
        Use found physics weapons, tools, and objects to fight across 
        dangerous playscapes and mysterious architecture.",
        developer: "Stress Level Zero"
    }
])

puts "✅ Done seeding!"