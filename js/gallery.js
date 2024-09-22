fetch('https://raw.githubusercontent.com/dreamliner21/mainDB/refs/heads/master/oshijkt.json')
    .then(response => response.json())
    .then(data => {
        const gallery = document.getElementById('gallery');

        // Membuat card untuk creator secara manual
        const creator = {
            name: "Paul Christi",
            second_name: "paul",
            image: "https://files.catbox.moe/9l94ui.jpg",
            bio: {
                birthdate: "21 July 2005",
                zodiac: "Cancer",
                description: "Paul Christi, the owner of this web gallery.\nIt's just for fun and dabbling."
            },
            socials: {
                instagram: "https://instagram.com/initiaann_0705",
                tiktok: "https://tiktok.com/@paulchristi21",
                twitter: "https://x.com/yanstian"
            }
        };

        // Fungsi untuk membuat card member
        function createMemberCard(member, isCreator = false) {
            const col = document.createElement('div');
            col.className = 'col-md-6 mb-4 d-flex align-items-center';

            const card = document.createElement('div');
            card.className = isCreator ? 'card w-100 d-flex flex-row creator-card' : 'card w-100 d-flex flex-row';

            const img = document.createElement('img');
            img.src = member.image || 'default.jpg';  // Fallback jika tidak ada gambar
            img.className = 'card-img-left';

            const body = document.createElement('div');
            body.className = 'card-body';

            const name = document.createElement('h5');
            name.className = 'card-title';
            name.textContent = member.name || 'Unknown Name';  // Fallback jika tidak ada nama

            const secondName = document.createElement('p');
            secondName.className = 'card-text';
            secondName.textContent = member.second_name || '';  // Kosongkan jika tidak ada second_name

            body.appendChild(name);
            body.appendChild(secondName);

            if (isCreator) {
                // Deskripsi khusus untuk creator
                const description = document.createElement('p');
                description.className = 'card-text';
                description.textContent = member.bio.description || 'No description available';
                body.appendChild(description);
            } else {
                // Menambahkan informasi bio untuk member biasa
                const birthdate = document.createElement('p');
                birthdate.className = 'card-text';
                birthdate.textContent = `Birthdate: ${member.bio.birthdate || 'Unknown'}`;

                const zodiac = document.createElement('p');
                zodiac.className = 'card-text';
                zodiac.textContent = `Zodiac: ${member.bio.zodiac || 'Unknown'}`;

                const age = document.createElement('p');
                age.className = 'card-text';
                age.textContent = `Age: ${member.bio.age || 'Unknown'}`;

                const Catchphrase = document.createElement('p');
                Catchphrase.className = 'card-text';
                Catchphrase.textContent = `Catchphrase: ${member.bio.Catchphrase || 'Unknown'}`;

                body.appendChild(birthdate);
                body.appendChild(zodiac);
                body.appendChild(age);
                body.appendChild(Catchphrase);
            }

            const iconsDiv = document.createElement('div');
            iconsDiv.className = 'social-icons mt-2';

            const instagram = document.createElement('a');
            instagram.href = member.socials?.instagram || '#';
            instagram.target = '_blank';
            instagram.innerHTML = '<i class="bi bi-instagram"></i>';
            instagram.className = 'icon mr-2';

            const tiktok = document.createElement('a');
            tiktok.href = member.socials?.tiktok || '#';
            tiktok.target = '_blank';
            tiktok.innerHTML = '<i class="bi bi-tiktok"></i>';
            tiktok.className = 'icon mr-2';

            const twitter = document.createElement('a');
            twitter.href = member.socials?.twitter || '#';
            twitter.target = '_blank';
            twitter.innerHTML = '<i class="bi bi-twitter"></i>';
            twitter.className = 'icon';

            iconsDiv.appendChild(instagram);
            iconsDiv.appendChild(tiktok);
            iconsDiv.appendChild(twitter);

            body.appendChild(iconsDiv);

            card.appendChild(img);
            card.appendChild(body);
            col.appendChild(card);
            gallery.appendChild(col);
        }

        // Membuat card untuk creator secara manual
        createMemberCard(creator, true);

        // Membuat card untuk setiap member dari data JSON
        data.forEach(member => {
            createMemberCard(member);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
