const data = {
    "about": {
        "name": "Younes Ait Hajoub",
        "role": "Graphiste & Web Designer",
        "profil_img": "https://res.cloudinary.com/dsy6m5omi/image/upload/v1775587754/younes_ait_hajoub_profil_pjvgcn.jpg",
        "school": {
            "name": "ENSAD",
            "full": "École Nationale Supérieure des Arts et du Design",
            "university": "Université Hassan II",
            "city": "Casablanca",
            "country": "Maroc"
        },
        "bio": "Étudiant en Arts & Design à l'ENSAD, je crée des expériences visuelles qui allient forme et fonction. Du code à l'image, je travaille sur des projets web, graphiques et 3D avec une seule conviction — que le bon design est celui qu'on ne remarque pas, mais qu'on ressent.",
        "location": "Casablanca, Maroc",
        "year": "2025"
    },
    "skills": [
        {
            "category": "Développement Web",
            "items": [
                "Front-End",
                "Back-End",
                "Gestion des bases de données"
            ]
        },
        {
            "category": "UX / UI Design",
            "items": [
                "Wireframing",
                "Prototypage",
                "Design ergonomique"
            ]
        },
        {
            "category": "Design Graphique",
            "items": [
                "Identité visuelle",
                "Illustration vectoriale",
                "Mise en page"
            ]
        },
        {
            "category": "Conception 3D",
            "items": [
                "Modélisation",
                "Texturing",
                "Rendu"
            ]
        }
    ],
    "tools": {
        "web": [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "PHP",
            "MySQL"
        ],
        "design": [
            "Photoshop",
            "Illustrator",
            "InDesign",
            "Figma"
        ],
        "3d_motion": [
            "Blender",
            "Premiere Pro",
            "After Effects"
        ],
        "dev": [
            "VS Code",
            "Git",
            "GitHub"
        ]
    },
    "projects": [
        {
            "id": "01",
            "slug": "gestion-absences",
            "title": "Gestion des Absences",
            cover: "https://res.cloudinary.com/dsy6m5omi/image/upload/v1775655550/project01_cover_u9rcta.jpg",
            cover2: "https://res.cloudinary.com/dsy6m5omi/image/upload/v1775661505/project01_cover2_x62nlw.jpg",
            "subtitle": "Application Web Full Stack",
            "description": "Ce système remplace les registres papier par une interface de pointage numérique instantanée. Développée en PHP/MySQL, l'application automatise les rapports statistiques pour simplifier la gestion administrative.",
            "pages": [
                "03",
                "04"
            ],
            "context": {
                "client": "Lycée Mohammed VI",
                "location": "Marrakech, Maroc",
                "year": "2024 — 2025",
                "type": "Projet de fin d'études · BTS MCW"
            },
            "problem": "Le lycée gérait les absences via des registres papier — un processus lent, sujet aux erreurs et sans visibilité pour les étudiants. Avec 4 filières distinctes, la consolidation des données devenait un défi quotidien pour l'administration.",
            "solution": "Une plateforme web centralisée avec 2 rôles — enseignant, administrateur. Saisie des absences en temps réel, génération de rapports automatiques, alertes par email et tableau de bord statistique.",
            "features": [
                "Saisie des absences en temps réel",
                "3 rôles utilisateurs distincts",
                "Rapports et statistiques automatiques",
                "Alertes automatiques par email",
                "Historique personnel étudiant",
                "Application responsive"
            ],
            "stack": [
                "HTML5",
                "CSS3",
                "JavaScript",
                "Bootstrap 5",
                "PHP",
                "MySQL",
                "Figma",
                "Git",
                "GitHub",
                "VS Code"
            ],
            "tags": [
                "Web Dev",
                "Full Stack",
                "HTML / CSS",
                "JavaScript",
                "PHP",
                "MySQL",
                "Bootstrap",
                "Figma"
            ],
            "visuels": [
                {
                    "src": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                    "alt": "Logo IMPELAB Mitropologie"
                },
                {
                    "src": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                    "alt": "Logo IMPELAB Hygiène"
                },
                {
                    "src": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                    "alt": "Logo IMPELAB Académie"
                },
                {
                    "src": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                    "alt": "Logo IMPELAB Analyse"
                },
                {
                    "src": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                    "alt": "Logo IMPELAB Conseils"
                }
            ]
        },
        {
            "id": "02",
            "title": "Modélisation 3D — Mini Market",
            "subtitle": "Conception 3D d'un mini market basée sur plan",
            "cover": "https://res.cloudinary.com/dsy6m5omi/image/upload/v1775655818/project02_cover_emtg3i.jpg",
            "description": "Conception d'une scène 3D complète d'un mini market basée sur un plan fourni par le client. Le projet incluait la modélisation de l'architecture, l'aménagement intérieur, le texturing et le rendu final.",
            "pages": [
                "08"
            ],
            "context": {
                "client": "Abdelatif",
                "location": "Maroc",
                "year": "2025",
                "duration": "3 semaines",
                "type": "Projet client · Conception 3D"
            },
            "problem": "Le client souhaitait visualiser en 3D la conception de son mini market avant sa réalisation, à partir d'un plan architectural fourni.",
            "solution": "Modélisation complète de la scène 3D — architecture, aménagement intérieur, texturing PBR et rendu final depuis plusieurs angles.",
            "features": [
                "Modélisation depuis plan réel",
                "Aménagement intérieur complet",
                "Texturing PBR",
                "Éclairage naturel et artificiel",
                "Rendus haute qualité multi-angles"
            ],
            "stack": [
                "Blender",
                "Cycles Render",
                "PBR Texturing"
            ],
            "tags": [
                "3D",
                "Blender",
                "Modélisation",
                "Texturing",
                "Lighting",
                "Rendering"
            ],
            "visuels": [
                {
                    "src": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                    "alt": "Logo IMPELAB Mitropologie"
                },
                {
                    "src": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                    "alt": "Logo IMPELAB Hygiène"
                },
                {
                    "src": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                    "alt": "Logo IMPELAB Académie"
                },
                {
                    "src": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                    "alt": "Logo IMPELAB Analyse"
                },
                {
                    "src": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                    "alt": "Logo IMPELAB Conseils"
                }
            ]
        }

    ],
    "gallery": {
        "categories": [
            "Tous",
            "Logos",
            "Illustration",
            "3D",
            "Motion"
        ],
        "works": [
            {
                "title": "Profil vectoriel",
                "category": "Illustration",
                "image": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                "description": "Profil vectoriel",
                "tags": [
                    "Illustration",
                    "Vectoriel",
                    "Profil"
                ],
                "tools": [
                    "Illustrator",
                    "Photoshop",
                    "Sketching"
                ]
            },
            {
                "title": "Logo IMPELAB",
                "category": "Logos",
                "image": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                "description": "Logo IMPELAB",
                "tags": [
                    "Logo",
                    "IMPELAB"
                ],
                "tools": [
                    "Illustrator",
                    "Photoshop",
                    "Sketching"
                ]
            },
            {
                "title": "Poster créatif",
                "category": "Affiche",
                "image": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                "description": "Poster créatif",
                "tags": [
                    "Poster",
                    "Créatif"
                ],
                "tools": [
                    "Illustrator",
                    "Photoshop",
                    "Sketching"
                ]
            },
            {
                "title": "Mascotte",
                "category": "Illustration",
                "image": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                "description": "Mascotte",
                "tags": [
                    "Mascotte",
                    "Illustration"
                ],
                "tools": [
                    "Illustrator",
                    "Photoshop",
                    "Sketching"
                ]
            },
            {
                "title": "Infographie",
                "category": "Data Design",
                "image": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                "description": "Infographie",
                "tags": [
                    "Infographie",
                    "Data Design"
                ],
                "tools": [
                    "Illustrator",
                    "Photoshop",
                    "Sketching"
                ]
            },
            {
                "title": "Scène 3D",
                "category": "3D",
                "image": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                "description": "Scène 3D",
                "tags": [
                    "3D",
                    "Scène"
                ],
                "tools": [
                    "Blender",
                    "Cycles Render",
                    "PBR Texturing"
                ]
            },
            {
                "title": "Profil cartoon",
                "category": "Illustration",
                "image": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                "description": "Profil cartoon",
                "tags": [
                    "Profil",
                    "Cartoon",
                    "Illustration"
                ],
                "tools": [
                    "Illustrator",
                    "Photoshop",
                    "Sketching"
                ]
            },
            {
                "title": "Logo Intro",
                "category": "Motion",
                "image": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                "description": "Logo Intro",
                "tags": [
                    "Logo",
                    "Intro",
                    "Motion"
                ],
                "tools": [
                    "After Effects",
                    "Premiere Pro",
                    "Cinema 4D"
                ]
            },
            {
                "title": "Logo minimal",
                "category": "Logos",
                "image": "https://i.pinimg.com/736x/30/a9/b3/30a9b3e828847efcfcaa030602f2f1db.jpg",
                "description": "Logo minimal",
                "tags": [
                    "Logo",
                    "Minimal"
                ],
                "tools": [
                    "Illustrator",
                    "Photoshop",
                    "Sketching"
                ]
            },
            {
                "title": "Mascot Logo Design",
                "category": "Logos",
                "image": "https://res.cloudinary.com/dsy6m5omi/image/upload/v1775474220/p18_f14hzs.jpg",
                "description": "This mascot logo was created during an internship at IMPEPACK.",
                "tags": [
                    "Logo",
                    "Mascot"
                ],
                "tools": [
                    "Illustrator",
                    "Photoshop",
                    "Sketching"
                ]
            }
        ]
    },
    "contact": {
        "email": "younes.ait.hajoub.design@email.com",
        "location": "Casablanca, Maroc",
        "profiles": {
            "behance": "behance.net/younesaithajoub",
            "github": "github.com/younesaithajoub",
            "linkedin": "linkedin.com/in/younesaithajoub",
            "instagram": "instagram.com/younesaithajoub"
        }
    },
    "portfolio": {
        "title": "Portfolio — Younes Ait Hajoub",
        "year": "2026",
        "cover": "https://",
        "link": "https://"
    }
}
